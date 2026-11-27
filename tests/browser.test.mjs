import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { chromium } from "playwright";
import { startServer } from "./server.mjs";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PAGES = [
  "index.html",
  "case-studies.html",
  "km-standards-alignment.html",
  "photography.html",
];
const AXE = await readFile(
  new URL("../node_modules/axe-core/axe.min.js", import.meta.url),
  "utf8",
);

let server;
let browser;

before(async () => {
  server = await startServer(ROOT);
  browser = await chromium.launch();
});

after(async () => {
  await browser?.close();
  await server?.close();
});

async function open(path, options = {}) {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    ...options,
  });
  const page = await context.newPage();
  const errors = [];
  const failed = [];

  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("response", (response) => {
    if (
      response.status() >= 400 &&
      new URL(response.url()).origin === server.origin
    ) {
      failed.push(`${response.status()} ${response.url()}`);
    }
  });

  await page.goto(server.origin + "/" + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(250);
  return { context, page, errors, failed };
}

async function loadImages(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 700) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 30));
    }
    await Promise.all(
      [...document.images].map((image) =>
        image.complete
          ? null
          : new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
            }),
      ),
    );
  });
  await page.waitForTimeout(500);
}

test("every page loads without runtime errors or failed local requests", async () => {
  for (const path of PAGES) {
    const { context, page, errors, failed } = await open(path);
    assert.deepEqual(errors, [], `${path} console/runtime errors`);
    assert.deepEqual(failed, [], `${path} failed requests`);
    await context.close();
  }
});

test("rendered pages have unique ids, live anchors, and loaded images", async () => {
  for (const path of PAGES) {
    const { context, page } = await open(path);
    await loadImages(page);

    const state = await page.evaluate(() => {
      const ids = [...document.querySelectorAll("[id]")].map((node) => node.id);
      const duplicates = [
        ...new Set(ids.filter((id, index) => ids.indexOf(id) !== index)),
      ];
      const deadAnchors = [
        ...new Set(
          [...document.querySelectorAll('a[href^="#"]')]
            .map((link) => link.getAttribute("href"))
            .filter(
              (href) =>
                href.length > 1 && !document.getElementById(href.slice(1)),
            ),
        ),
      ];
      const images = [...document.images]
        .filter((image) => image.getAttribute("src"))
        .map((image) => ({
          src: image.currentSrc || image.src,
          ok: image.complete && image.naturalWidth > 0,
          alt: image.getAttribute("alt"),
        }));

      return {
        duplicates,
        deadAnchors,
        brokenImages: images.filter((image) => !image.ok),
        missingAlt: images.filter((image) => image.alt === null),
        h1Count: document.querySelectorAll("h1").length,
      };
    });

    assert.deepEqual(state.duplicates, [], `${path} duplicate ids`);
    assert.deepEqual(state.deadAnchors, [], `${path} dead anchors`);
    assert.deepEqual(state.brokenImages, [], `${path} broken images`);
    assert.deepEqual(state.missingAlt, [], `${path} images without alt`);
    assert.equal(state.h1Count, 1, `${path} has one h1`);
    await context.close();
  }
});

test("no page overflows horizontally at phone, tablet, or desktop widths", async () => {
  for (const width of [320, 390, 1280]) {
    for (const path of PAGES) {
      const { context, page } = await open(path, {
        viewport: { width, height: 844 },
      });
      const state = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      assert.ok(
        state.scrollWidth <= state.clientWidth + 1,
        `${path} overflows at ${width}px (${state.scrollWidth} > ${state.clientWidth})`,
      );
      await context.close();
    }
  }
});

test("axe reports no WCAG A/AA violations in light or dark themes", async () => {
  for (const colorScheme of ["light", "dark"]) {
    for (const width of [390, 1280]) {
      for (const path of PAGES) {
        const { context, page } = await open(path, {
          colorScheme,
          viewport: { width, height: 900 },
        });
        await page.addScriptTag({ content: AXE });
        const result = await page.evaluate(async () =>
          window.axe.run(document, {
            runOnly: {
              type: "tag",
              values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"],
            },
          }),
        );
        const summary = result.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          nodes: violation.nodes.map((node) => node.target.join(" ")),
        }));
        assert.deepEqual(summary, [], `${path} ${colorScheme} ${width}px`);
        await context.close();
      }
    }
  }
});

test("contents drawer matches sections and pager labels are unique", async () => {
  for (const path of PAGES) {
    const { context, page } = await open(path);
    const state = await page.evaluate(() => {
      const pageName = document.body.dataset.page;
      const contents = window.SITE_CONTENTS[pageName].items
        .filter((item) => item.id !== "contact")
        .map((item) => ({ id: item.id, num: item.num }));
      const sections = [...document.querySelectorAll("section.section")].map(
        (section) => ({
          id: section.id,
          num: section.querySelector(".section-num")?.textContent.trim(),
        }),
      );
      const pagers = [...document.querySelectorAll(".section-next")].map(
        (nav) => nav.getAttribute("aria-label"),
      );
      return { contents, sections, pagers };
    });

    assert.deepEqual(
      state.sections,
      state.contents,
      `${path} contents/sections`,
    );
    assert.equal(
      state.pagers.length,
      state.sections.length,
      `${path} pager count`,
    );
    assert.equal(
      new Set(state.pagers).size,
      state.pagers.length,
      `${path} duplicate pager labels`,
    );
    for (const label of state.pagers) {
      assert.match(label, /^Continue reading: .+/, `${path} pager label`);
    }
    await context.close();
  }
});

test("theme follows the OS, persists, and keeps its action label", async () => {
  const dark = await open("index.html", { colorScheme: "dark" });
  assert.equal(
    await dark.page.evaluate(() => document.documentElement.dataset.theme),
    "dark",
  );
  assert.equal(
    await dark.page.locator("[data-theme-label]").first().textContent(),
    "Light mode",
  );
  assert.equal(
    await dark.page
      .locator("[data-theme-toggle]")
      .first()
      .getAttribute("aria-label"),
    "Switch to light mode",
  );

  await dark.page.locator("[data-theme-toggle]").first().click();
  assert.equal(
    await dark.page.evaluate(() => document.documentElement.dataset.theme),
    "light",
  );
  assert.equal(
    await dark.page.evaluate(() => localStorage.getItem("showcase-theme")),
    "light",
  );
  assert.equal(
    await dark.page.locator("[data-theme-label]").first().textContent(),
    "Dark mode",
  );
  assert.equal(
    await dark.page
      .locator("[data-theme-toggle]")
      .first()
      .getAttribute("aria-label"),
    "Switch to dark mode",
  );

  await dark.page.reload({ waitUntil: "networkidle" });
  assert.equal(
    await dark.page.evaluate(() => document.documentElement.dataset.theme),
    "light",
  );

  await dark.page.goto(server.origin + "/case-studies.html", {
    waitUntil: "networkidle",
  });
  assert.equal(
    await dark.page.evaluate(() => document.documentElement.dataset.theme),
    "light",
  );
  await dark.context.close();

  const light = await open("index.html", { colorScheme: "light" });
  assert.equal(
    await light.page.evaluate(() => document.documentElement.dataset.theme),
    "light",
  );
  await light.context.close();
});

test("contents drawer opens, locks scroll, closes, and returns focus", async () => {
  const { context, page } = await open("index.html");
  const trigger = page.locator("[data-toc-open]");

  await trigger.click();
  await page.waitForTimeout(350);
  let state = await page.evaluate(() => ({
    open: document.getElementById("toc").open,
    overflow: getComputedStyle(document.documentElement).overflow,
    active: document.activeElement.getAttribute("data-toc-close") !== null,
  }));
  assert.deepEqual(state, { open: true, overflow: "hidden", active: true });

  for (let i = 0; i < 6; i += 1) {
    await page.keyboard.press("Tab");
    assert.equal(
      await page.evaluate(() =>
        document.getElementById("toc").contains(document.activeElement),
      ),
      true,
      "focus stays in the drawer",
    );
  }

  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  state = await page.evaluate(() => ({
    open: document.getElementById("toc").open,
    overflow: getComputedStyle(document.documentElement).overflow,
    active: document.activeElement.hasAttribute("data-toc-open"),
  }));
  assert.deepEqual(state, { open: false, overflow: "visible", active: true });

  await trigger.click();
  await page.waitForTimeout(350);
  await page.mouse.click(8, 400);
  await page.waitForTimeout(300);
  assert.equal(
    await page.evaluate(() => document.getElementById("toc").open),
    false,
    "backdrop click closes the drawer",
  );
  await context.close();
});

test("lightbox opens, navigates, closes, and returns focus", async () => {
  const { context, page } = await open("photography.html");
  const plate = page.locator("[data-lightbox]").first();
  const firstHref = await plate.getAttribute("href");

  await plate.focus();
  await page.keyboard.press("Enter");
  await page.waitForTimeout(400);
  let state = await page.evaluate(() => ({
    open: document.getElementById("lightbox").open,
    src: document.querySelector("[data-lightbox-img]").getAttribute("src"),
    alt: document.querySelector("[data-lightbox-img]").alt,
    caption: document.querySelector("[data-lightbox-caption]").textContent,
    count: document.querySelector("[data-lightbox-count]").textContent,
    active: document.activeElement.getAttribute("data-lightbox-close") !== null,
    overflow: getComputedStyle(document.documentElement).overflow,
  }));
  assert.equal(state.open, true);
  assert.equal(state.src, firstHref);
  assert.ok(state.alt.length > 0, "lightbox image has alt text");
  assert.match(state.caption, /^P\. 01/);
  assert.equal(state.count, "1 / 9");
  assert.equal(state.active, true);
  assert.equal(state.overflow, "hidden");

  await page.keyboard.press("ArrowRight");
  state = await page.evaluate(() => ({
    src: document.querySelector("[data-lightbox-img]").getAttribute("src"),
    count: document.querySelector("[data-lightbox-count]").textContent,
  }));
  assert.notEqual(state.src, firstHref);
  assert.equal(state.count, "2 / 9");

  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  state = await page.evaluate(() => ({
    open: document.getElementById("lightbox").open,
    active: document.activeElement.hasAttribute("data-lightbox"),
    overflow: getComputedStyle(document.documentElement).overflow,
  }));
  assert.deepEqual(state, { open: false, active: true, overflow: "visible" });
  await context.close();
});

test("no-JavaScript fallback explains the requirement and hides dead controls", async () => {
  for (const path of PAGES) {
    const { context, page } = await open(path, { javaScriptEnabled: false });
    const html = await page.content();
    const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? "";
    const noscript = html.match(/<noscript>[\s\S]*?<\/noscript>/i)?.[0] ?? "";
    const nav =
      [...html.matchAll(/<nav class="paper-nav"[\s\S]*?<\/nav>/g)][0]?.[0] ??
      "";
    const navLabels = [
      ...nav
        .replace(/<\/a\s*>/g, "</a>")
        .matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g),
    ].map((match) => match[1].replace(/\s+/g, " ").trim());

    assert.match(main, /JavaScript required/, `${path} fallback notice`);
    assert.match(
      noscript,
      /\[data-theme-toggle\]/,
      `${path} hides the theme toggle`,
    );
    assert.match(noscript, /\[data-print\]/, `${path} hides the print button`);
    assert.doesNotMatch(
      noscript,
      /\bmain\b|\bbody\b/,
      `${path} must not hide content from no-JS visitors`,
    );
    assert.deepEqual(navLabels, [
      "Portfolio",
      "Case Studies",
      "KM Standards",
      "Off the Clock",
    ]);
    await context.close();
  }
});

test("print styles hide screen-only controls", async () => {
  for (const path of PAGES) {
    const { context, page } = await open(path, {
      viewport: { width: 816, height: 1056 },
    });
    await page.emulateMedia({ media: "print" });
    const state = await page.evaluate(() => {
      const display = (selector) => {
        const node = document.querySelector(selector);
        return node ? getComputedStyle(node).display : "none";
      };
      return {
        progress: display("#progress"),
        toc: display("[data-toc-open]"),
        nav: display(".paper-nav"),
        tools: display(".footer-tools"),
        overflow:
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth + 1,
      };
    });
    assert.equal(state.progress, "none");
    assert.equal(state.toc, "none");
    assert.equal(state.nav, "none");
    assert.equal(state.tools, "none");
    assert.equal(state.overflow, false);
    await context.close();
  }
});

test("training copy stays in sync between the portfolio and case studies", async () => {
  const index = await open("index.html");
  const indexText = await index.page.locator("#training .training").innerText();
  await index.context.close();

  const cases = await open("case-studies.html");
  const caseText = await cases.page.locator("#training .training").innerText();
  await cases.context.close();

  const normalize = (text) => text.replace(/\s+/g, " ").trim();
  assert.equal(normalize(indexText), normalize(caseText));
});

test("visible controls meet the WCAG 2.2 24px target minimum", async () => {
  for (const path of PAGES) {
    const { context, page } = await open(path);
    const small = await page.evaluate(() => {
      const selectors = [
        "button",
        ".btn",
        ".paper-nav a",
        ".toc-toggle",
        ".toc__link",
        ".toc__close",
        ".section-next__link",
        ".lightbox__btn",
        ".plate__link",
        ".hl-card__link",
      ];
      const visible = (node) => {
        const style = getComputedStyle(node);
        const rect = node.getBoundingClientRect();
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          rect.width > 0 &&
          rect.height > 0
        );
      };
      return [...document.querySelectorAll(selectors.join(","))]
        .filter(visible)
        .map((node) => {
          const rect = node.getBoundingClientRect();
          return {
            text: (node.textContent || "")
              .replace(/\s+/g, " ")
              .trim()
              .slice(0, 40),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          };
        })
        .filter((target) => target.width < 24 || target.height < 24);
    });
    assert.deepEqual(small, [], `${path} undersized targets`);
    await context.close();
  }
});

test("the only third-party requests are the Google Fonts files", async () => {
  for (const path of PAGES) {
    const { context, page } = await open(path);
    const hosts = await page.evaluate(() => [
      ...new Set(
        performance
          .getEntriesByType("resource")
          .map((entry) => new URL(entry.name).host),
      ),
    ]);
    const allowed = new Set([
      new URL(server.origin).host,
      "fonts.googleapis.com",
      "fonts.gstatic.com",
    ]);
    assert.deepEqual(
      hosts.filter((host) => !allowed.has(host)),
      [],
      `${path} third-party hosts`,
    );
    await context.close();
  }
});
