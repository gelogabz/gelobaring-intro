/* ==========================================================================
   main.js — progressive enhancement only
   The page is fully readable without JavaScript. This adds:
     1. a reading-progress indicator
     2. active-section state in both navigation lists
     3. a print / save-as-PDF button
     4. eager-loading of lazy images before printing
   ========================================================================== */

(function () {
  "use strict";

  var doc = document.documentElement;
  var progress = document.getElementById("progress");
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.rail a[href^="#"], .mobile-nav a[href^="#"]')
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
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(function (item) {
      observer.observe(item.el);
    });
  }

  /* ---- 3. Print / save as PDF ---------------------------------------- */
  var printButtons = document.querySelectorAll("[data-print]");
  for (var i = 0; i < printButtons.length; i++) {
    printButtons[i].addEventListener("click", function () {
      window.print();
    });
  }

  /* ---- 4. Close the mobile contents panel after a jump --------------- */
  var mobileNav = document.querySelector(".mobile-nav");
  if (mobileNav) {
    mobileNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) mobileNav.open = false;
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
