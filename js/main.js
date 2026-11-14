/* ==========================================================================
   main.js — behavior layer
   Page content is rendered from data/*.js by render.js. This adds:
     1. a reading-progress indicator
     2. active-section state in the contents drawer
     3. previous / next links at the end of each section
     4. a print / save-as-PDF button
     5. eager-loading of lazy images before printing
     6. a live dateline and last-updated stamp
     7. the contents drawer itself
   ========================================================================== */

(function () {
  "use strict";

  var doc = document.documentElement;
  var progress = document.getElementById("progress");
  var toc = document.getElementById("toc");
  var tocOpen = document.querySelector("[data-toc-open]");
  var tocClose = document.querySelector("[data-toc-close]");
  var tocLinks = Array.prototype.slice.call(
    document.querySelectorAll('.toc__link[href^="#"]'),
  );

  var sections = tocLinks
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
      if (atBottom()) setActive("");
      ticking = false;
    });
  }

  function atBottom() {
    return window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
  }

  /* ---- 2. Active section --------------------------------------------- */
  function setActive(activeId) {
    /* The footer is the last hash link; keep it current at the very bottom. */
    if (atBottom() && tocLinks.length) {
      var last = tocLinks[tocLinks.length - 1];
      var lastHref = last.getAttribute("href");
      if (lastHref && lastHref.charAt(0) === "#") {
        activeId = lastHref.slice(1);
      }
    }

    tocLinks.forEach(function (link) {
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
    var label = item.link.querySelector(".toc__label");
    return (label ? label.textContent : item.link.textContent).trim();
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

  sections.forEach(function (item, index) {
    if (item.el.tagName !== "SECTION") return;
    if (item.el.querySelector(".section-next")) return;

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
    try {
      hashTarget.scrollIntoView({ behavior: "auto", block: "start" });
    } finally {
      root.style.scrollBehavior = previous;
    }
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

  /* ---- 6. Dateline and last-updated ---------------------------------- */
  var datelines = document.querySelectorAll("[data-dateline]");
  if (datelines.length) {
    var dateline = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Asia/Manila",
    }).format(new Date());
    for (var d = 0; d < datelines.length; d++) {
      datelines[d].textContent = dateline;
    }
  }

  var updated = document.querySelectorAll("[data-updated]");
  if (updated.length) {
    var stamp = new Date(document.lastModified);
    if (isNaN(stamp.getTime())) stamp = new Date();
    var updatedLabel =
      "Last updated " +
      new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "Asia/Manila",
      }).format(stamp) +
      ".";
    for (var u = 0; u < updated.length; u++) {
      updated[u].textContent = updatedLabel;
    }
  }

  /* ---- 7. Contents drawer -------------------------------------------- */
  if (toc && tocOpen && tocLinks.length) {
    /* The button is hidden in the HTML so it never appears as a dead
       control when JavaScript is unavailable. */
    tocOpen.hidden = false;

    var closeToc = function () {
      if (typeof toc.close === "function") {
        toc.close();
      } else {
        toc.removeAttribute("open");
        doc.classList.remove("toc-open");
      }
    };

    tocOpen.addEventListener("click", function () {
      /* Lock the page before showing the dialog. If the scroll lock is
         applied after showModal(), the scrollbar disappears underneath the
         open panel and the panel jumps sideways by the scrollbar width. */
      doc.classList.add("toc-open");
      if (typeof toc.showModal === "function") {
        toc.showModal();
      } else {
        toc.setAttribute("open", "");
      }
      if (tocClose) tocClose.focus();
    });

    if (tocClose) tocClose.addEventListener("click", closeToc);

    toc.addEventListener("click", function (event) {
      if (event.target === toc) closeToc();
    });

    toc.addEventListener("close", function () {
      doc.classList.remove("toc-open");
      /* The trigger is hidden while the drawer is open, so restore focus
         explicitly once it is visible again. */
      if (tocOpen) tocOpen.focus({ preventScroll: true });
    });

    Array.prototype.forEach.call(
      toc.querySelectorAll('a[href^="#"]'),
      function (link) {
        link.addEventListener("click", closeToc);
      },
    );
  }

  /* ---- Boot ----------------------------------------------------------- */
  if (progress) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateProgress();
  }
})();
