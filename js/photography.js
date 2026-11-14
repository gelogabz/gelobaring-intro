/* ==========================================================================
   photography.js — the picture desk lightbox
   Plates are rendered from data/photography.js. Each links straight to the
   full-size photograph; this script opens the same links in a dialog with
   keyboard controls.
   ========================================================================== */

(function () {
  "use strict";

  var dialog = document.getElementById("lightbox");
  var links = Array.prototype.slice.call(
    document.querySelectorAll("[data-lightbox]"),
  );
  if (!dialog || !links.length) return;

  var image = dialog.querySelector("[data-lightbox-img]");
  var caption = dialog.querySelector("[data-lightbox-caption]");
  var counter = dialog.querySelector("[data-lightbox-count]");
  var previous = dialog.querySelector("[data-lightbox-prev]");
  var next = dialog.querySelector("[data-lightbox-next]");
  var close = dialog.querySelector("[data-lightbox-close]");
  if (!image || !caption || !counter || !previous || !next || !close) return;
  var index = 0;
  var lastTrigger = null;

  function restoreFocus() {
    if (lastTrigger && document.contains(lastTrigger)) {
      lastTrigger.focus();
    }
  }

  function show(i) {
    index = (i + links.length) % links.length;
    var link = links[index];
    var source = link.querySelector("img");

    image.src = link.getAttribute("href");
    image.alt = source ? source.alt : "";
    caption.textContent = link.getAttribute("data-caption") || "";
    counter.textContent = index + 1 + " / " + links.length;
  }

  function open(i, trigger) {
    lastTrigger = trigger || links[i];
    show(i);
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    document.documentElement.classList.add("lightbox-open");
    close.focus();
  }

  function closeDialog() {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      document.documentElement.classList.remove("lightbox-open");
      restoreFocus();
    }
  }

  links.forEach(function (link, i) {
    link.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      event.preventDefault();
      open(i, link);
    });
  });

  previous.addEventListener("click", function () {
    show(index - 1);
  });

  next.addEventListener("click", function () {
    show(index + 1);
  });

  close.addEventListener("click", closeDialog);

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeDialog();
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1);
    }
  });

  dialog.addEventListener("close", function () {
    document.documentElement.classList.remove("lightbox-open");
    restoreFocus();
  });
})();
