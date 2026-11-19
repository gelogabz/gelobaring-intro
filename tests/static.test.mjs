import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const HTML_PAGES = [
  "index.html",
  "case-studies.html",
  "km-standards-alignment.html",
  "photography.html",
];
const DATA_FILES = [
  "contents.js",
  "index.js",
  "case-studies.js",
  "km-standards-alignment.js",
  "photography.js",
];
const SCRIPT_FILES = ["contents.js", "render.js", "main.js", "photography.js"];

const read = (path) => readFile(join(ROOT, path), "utf8");
const texts = Object.fromEntries(
  await Promise.all(
    [...HTML_PAGES, ...DATA_FILES.map((file) => `data/${file}`)].map(
      async (path) => [path, await read(path)],
    ),
  ),
);

function dataContext() {
  const context = vm.createContext({ window: {} });
  for (const file of DATA_FILES) {
    vm.runInContext(texts[`data/${file}`], context, { filename: file });
  }
  return context.window;
}

const site = dataContext();

test("every local asset reference resolves", () => {
  const missing = [];
  for (const [path, source] of Object.entries(texts)) {
    for (const match of source.matchAll(/(?:src|href|srcset)="([^"]+)"/g)) {
      for (const candidate of match[1].split(",")) {
        const reference = candidate.trim().split(/\s+/)[0];
        if (!reference || /^(?:https?:|mailto:|tel:|data:|#)/.test(reference)) {
          continue;
        }
        const local = reference.split(/[?#]/)[0];
        if (!existsSync(join(ROOT, local))) missing.push(`${path} -> ${local}`);
      }
    }
  }
  assert.deepEqual(missing, []);
});

test("navigation carries the same four page links on every shell", () => {
  const expected = [
    "Portfolio",
    "Case Studies",
    "KM Standards",
    "Off the Clock",
  ];
  for (const page of HTML_PAGES) {
    const nav = texts[page].match(/<nav class="paper-nav"[\s\S]*?<\/nav>/);
    assert.ok(nav, `${page} has a paper-nav`);
    const labels = [...nav[0].matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)].map((m) =>
      m[1].replace(/\s+/g, " ").trim(),
    );
    assert.deepEqual(labels, expected, page);
  }
});

test("contents data matches the rendered section ids and numbers", () => {
  for (const [page, contents] of Object.entries(site.SITE_CONTENTS)) {
    const sections =
      page === "index"
        ? site.PAGES.index.sections
        : [
            ...site.PAGES[page].parts
              .join("")
              .matchAll(
                /<section class="section" id="([^"]+)">[\s\S]*?<span class="section-num">([^<]+)<\/span>/g,
              ),
          ].map((m) => ({ id: m[1], num: m[2] }));

    const expected = Array.from(contents.items)
      .filter((item) => item.id !== "contact")
      .map((item) => ({ id: item.id, num: item.num }));

    assert.deepEqual(
      Array.from(sections, (section) => ({
        id: section.id,
        num: section.num,
      })),
      expected,
      page,
    );
  }
});

test("page data keys match the body data-page values", () => {
  const pages = HTML_PAGES.map((page) => {
    const match = texts[page].match(/<body data-page="([^"]+)"/);
    assert.ok(match, `${page} declares data-page`);
    return match[1];
  });
  assert.deepEqual(Object.keys(site.PAGES).sort(), pages.sort());
  assert.deepEqual(Object.keys(site.SITE_CONTENTS).sort(), pages.sort());
});

test("all images have alt text and dimensions", () => {
  for (const [path, source] of Object.entries(texts)) {
    for (const match of source.matchAll(/<img\b[^>]*>/g)) {
      const tag = match[0];
      assert.match(tag, /\balt=/, `${path}: ${tag.slice(0, 80)}`);
      if (/\bdata-lightbox-img\b/.test(tag)) continue;
      assert.match(tag, /\bwidth=/, `${path}: ${tag.slice(0, 80)}`);
      assert.match(tag, /\bheight=/, `${path}: ${tag.slice(0, 80)}`);
    }
  }
});

test("external links are safe, use HTTPS, and announce a new tab", () => {
  for (const [path, source] of Object.entries(texts)) {
    assert.doesNotMatch(source, /http:\/\//, `${path} uses plain HTTP`);
    assert.doesNotMatch(
      source,
      /href="javascript:/i,
      `${path} uses a javascript: URL`,
    );

    for (const match of source.matchAll(
      /<a\b[^>]*target="_blank"[^>]*>([\s\S]*?)<\/a>/g,
    )) {
      assert.match(match[0], /\brel="[^"]*noopener/, `${path}: ${match[0]}`);
      assert.match(
        match[1],
        /class="visually-hidden"> \(opens in a new tab\)/,
        `${path} link does not announce the new tab: ${match[0]}`,
      );
    }
  }
});

test("repository links stay unpublished", () => {
  for (const [path, source] of Object.entries(texts)) {
    assert.doesNotMatch(
      source,
      /https?:\/\/github\.com\/gelogabz\/[^\s"'<>]+/,
      `${path} contains a repository link`,
    );
  }
});

test("no inline event handlers, tracking embeds, or autoplay", () => {
  for (const [path, source] of Object.entries(texts)) {
    assert.doesNotMatch(
      source,
      /<[^>]+\son[a-z]+=/i,
      `${path} has an inline handler`,
    );
    assert.doesNotMatch(source, /<iframe\b/i, `${path} has an iframe`);
    assert.doesNotMatch(
      source,
      /<script\b[^>]*src="https?:/i,
      `${path} has a remote script`,
    );
    assert.doesNotMatch(source, /\bautoplay\b/i, `${path} autoplays media`);
  }
});

test("scripts contain no debug leftovers or blocking dialogs", async () => {
  for (const file of SCRIPT_FILES) {
    const source = await read(`js/${file}`);
    assert.doesNotMatch(source, /\bdebugger\b/, file);
    assert.doesNotMatch(source, /\bconsole\.(?:log|warn|error)\s*\(/, file);
    assert.doesNotMatch(source, /\b(?:alert|confirm|prompt)\s*\(/, file);
    assert.doesNotMatch(source, /\bwindow\.open\s*\(/, file);
  }
});

test("design tokens are all referenced", async () => {
  const css = (
    await Promise.all(
      ["tokens.css", "styles.css", "print.css"].map((file) =>
        read(`css/${file}`),
      ),
    )
  ).join("\n");
  const defined = new Set(
    [...css.matchAll(/^\s*(--[\w-]+)\s*:/gm)].map((match) => match[1]),
  );
  const used = new Set(
    [...css.matchAll(/var\((--[\w-]+)/g)].map((match) => match[1]),
  );
  assert.deepEqual(
    [...defined].filter((token) => !used.has(token)),
    [],
  );
});

test("lists use native elements instead of ARIA list roles", () => {
  for (const [path, source] of Object.entries(texts)) {
    assert.doesNotMatch(
      source,
      /\brole="list(?:item)?"/,
      `${path} uses an ARIA list role`,
    );
  }

  const cases = texts["data/case-studies.js"];
  assert.equal(
    (cases.match(/<header class="case-head">/g) ?? []).length,
    4,
    "each case has a header",
  );
  assert.equal(
    (cases.match(/<figure class="code-wrap"/g) ?? []).length,
    2,
    "code samples are figures",
  );
  assert.equal(
    (cases.match(/<figcaption class="code-head">/g) ?? []).length,
    2,
    "code samples have captions",
  );
  assert.doesNotMatch(cases, /<div class="pills">/, "pills are a native list");
  assert.doesNotMatch(
    cases,
    /<div class="decision">/,
    "decisions are paragraphs",
  );
  assert.doesNotMatch(cases, /<div class="block">/, "case blocks are sections");
  assert.equal(
    (cases.match(/<section class="block">/g) ?? []).length,
    20,
    "every case block keeps its section wrapper",
  );
});

test("robots.txt and sitemap.xml cover the published pages", async () => {
  const robots = await read("robots.txt");
  const sitemap = await read("sitemap.xml");
  const base = "https://gelogabz.github.io/gelobaring-intro/";

  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, new RegExp(`^Sitemap: ${base}sitemap\\.xml$`, "m"));

  for (const page of HTML_PAGES) {
    const canonical = texts[page].match(
      /<link\s+rel="canonical"\s+href="([^"]+)"/,
    );
    assert.ok(canonical, `${page} has a canonical URL`);
    assert.ok(
      sitemap.includes(`<loc>${canonical[1]}</loc>`),
      `${page} is missing from sitemap.xml`,
    );
  }

  for (const date of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
    assert.match(date[1], /^\d{4}-\d{2}-\d{2}$/);
  }
});
