/* ==========================================================================
   main.js — progressive enhancement only
   The page is fully readable without JavaScript. This adds:
     1. a reading-progress indicator
     2. active-section state in the boxed section nav
     3. previous / next links at the end of each section
     4. a print / save-as-PDF button
     5. eager-loading of lazy images before printing
   ========================================================================== */

(function () {
  "use strict";

  var doc = document.documentElement;
  var progress = document.getElementById("progress");
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.paper-nav a[href^="#"]'),
  );

  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      var el = document.getElementById(id);
      return el ? { link: link, el: el } : null;
    })
    .filter(Boolean);

  /* ---- 1. Reading progress ------------------------------------------- */
  var ticking = false;

  function updateProgress() {
    if (!progress) return;
    var max = doc.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? window.scrollY / max : 0;
    var clamped = Math.min(1, Math.max(0, ratio));
    progress.style.transform = "scaleX(" + clamped + ")";
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateProgress();
      ticking = false;
    });
  }

  /* ---- 2. Active section --------------------------------------------- */
  function setActive(activeId) {
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === "#" + activeId) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach(function (item) {
      observer.observe(item.el);
    });
  }

  /* ---- 3. Previous / next section pager ------------------------------ */
  function sectionLabel(item) {
    return item.link.textContent.trim();
  }

  function makePagerLink(href, eyebrow, label, modifier) {
    var link = document.createElement("a");
    link.className = "section-next__link section-next__link--" + modifier;
    link.href = href;

    var small = document.createElement("span");
    small.textContent = eyebrow;

    var strong = document.createElement("strong");
    strong.textContent = label;

    link.appendChild(small);
    link.appendChild(strong);
    return link;
  }

  sections.forEach(function (item) {
    if (item.el.tagName !== "SECTION") return;
    if (item.el.querySelector(".section-next")) return;

    var index = sections.indexOf(item);
    var prev = index > 0 ? sections[index - 1] : null;
    var next = index < sections.length - 1 ? sections[index + 1] : null;

    var pager = document.createElement("nav");
    pager.className = "section-next";
    pager.setAttribute("aria-label", "Continue reading");

    if (prev) {
      pager.appendChild(
        makePagerLink(
          prev.link.getAttribute("href"),
          "Previous",
          "← " + sectionLabel(prev),
          "prev",
        ),
      );
    } else {
      pager.appendChild(makePagerLink("#top", "Start", "← Top", "prev"));
    }

    if (next) {
      pager.appendChild(
        makePagerLink(
          next.link.getAttribute("href"),
          "Next",
          sectionLabel(next) + " →",
          "next",
        ),
      );
    }

    item.el.appendChild(pager);
  });

  /* Re-align a deep link after the pagers change the page height. The page
     uses smooth scrolling, so override it for this one correction. */
  function realignHash() {
    if (!window.location.hash) return;
    var hashTarget = document.getElementById(window.location.hash.slice(1));
    if (!hashTarget) return;

    var root = document.documentElement;
    var previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    hashTarget.scrollIntoView({ behavior: "auto", block: "start" });
    root.style.scrollBehavior = previous;
  }

  var userMoved = false;
  function noteUserMove() {
    userMoved = true;
  }
  window.addEventListener("wheel", noteUserMove, { passive: true, once: true });
  window.addEventListener("touchstart", noteUserMove, {
    passive: true,
    once: true,
  });
  window.addEventListener("keydown", noteUserMove, { once: true });

  window.requestAnimationFrame(realignHash);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (!userMoved) realignHash();
    });
  }

  /* ---- 4. Print / save as PDF ---------------------------------------- */
  var printButtons = document.querySelectorAll("[data-print]");
  for (var i = 0; i < printButtons.length; i++) {
    printButtons[i].addEventListener("click", function () {
      window.print();
    });
  }

  /* ---- 5. Lazy images need to load before print ---------------------- */
  window.addEventListener("beforeprint", function () {
    var images = document.querySelectorAll('img[loading="lazy"]');
    for (var j = 0; j < images.length; j++) {
      images[j].loading = "eager";
    }
  });

  /* ---- Boot ----------------------------------------------------------- */
  if (progress) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateProgress();
  }
})();
