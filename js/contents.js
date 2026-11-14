/* ==========================================================================
   contents.js — render the contents drawer from data/contents.js
   Runs before main.js, which reads the rendered links for scroll-spy,
   the previous / next pagers, and the drawer controls.
   ========================================================================== */

(function () {
  "use strict";

  var toc = document.getElementById("toc");
  var page = document.body.getAttribute("data-page");
  var contents = window.SITE_CONTENTS && window.SITE_CONTENTS[page];
  if (!toc || !contents) return;

  var list = toc.querySelector("[data-toc-list]");
  if (!list) return;

  var kicker = toc.querySelector("[data-toc-kicker]");
  if (kicker) kicker.textContent = contents.kicker;

  var foot = toc.querySelector("[data-toc-foot]");
  if (foot) foot.textContent = contents.foot;

  contents.items.forEach(function (item) {
    var link = document.createElement("a");
    link.className = "toc__link";
    link.href = "#" + item.id;

    var num = document.createElement("span");
    num.className = "toc__num";
    num.textContent = item.num;

    var label = document.createElement("span");
    label.className = "toc__label";
    label.textContent = item.label;

    link.appendChild(num);
    link.appendChild(label);

    var li = document.createElement("li");
    li.appendChild(link);
    list.appendChild(li);
  });
})();
