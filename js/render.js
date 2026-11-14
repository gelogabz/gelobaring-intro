/* ==========================================================================
   render.js — build the page body from data/*.js
   Runs before main.js, which then adds scroll-spy, pagers, and the drawer
   controls to the rendered sections.
   ========================================================================== */

(function () {
  "use strict";

  var page = document.body.getAttribute("data-page");
  var data = window.PAGES && window.PAGES[page];
  var main = document.getElementById("main");
  if (!main || !data) return;

  if (data.parts) {
    /* Parts are authored in data/*.js, not user input. */
    main.innerHTML = data.parts.join("");
    return;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function pillList(items, listTag, itemTag) {
    var list = document.createElement(listTag || "ul");
    list.className = "pills";
    items.forEach(function (item) {
      var pill = el(
        itemTag || "li",
        "pill" + (item.accent ? " pill--accent" : ""),
        item.label,
      );
      list.appendChild(pill);
    });
    return list;
  }

  function appendArrow(link, text) {
    link.appendChild(document.createTextNode(text + " "));
    var arrow = el("span", null, "→");
    arrow.setAttribute("aria-hidden", "true");
    link.appendChild(arrow);
  }

  /* ---- Lead story ------------------------------------------------------ */
  function renderByline(lead) {
    var byline = el("p", "lead__byline");
    var picture = el("picture", "byline-avatar");
    var source = document.createElement("source");
    source.type = "image/webp";
    source.srcset = lead.avatar.webpSrcset;
    picture.appendChild(source);

    var avatar = document.createElement("img");
    avatar.src = lead.avatar.src;
    avatar.srcset = lead.avatar.srcset;
    avatar.width = lead.avatar.width;
    avatar.height = lead.avatar.height;
    avatar.alt = lead.avatar.alt;
    avatar.decoding = "async";
    picture.appendChild(avatar);

    byline.appendChild(picture);
    lead.byline.forEach(function (text) {
      byline.appendChild(el("span", null, text));
    });
    return byline;
  }

  function renderActions(actions) {
    var wrap = el("div", "hero-cta");
    actions.forEach(function (action) {
      var link = el("a", "btn" + (action.primary ? " btn--primary" : ""));
      link.href = action.href;
      if (action.arrow) {
        appendArrow(link, action.label);
      } else {
        link.textContent = action.label;
      }
      wrap.appendChild(link);
    });
    return wrap;
  }

  function renderStats(statsData) {
    var stats = el("div", "stats");
    stats.setAttribute("role", "list");
    statsData.forEach(function (stat) {
      var item = el("div", "stat");
      item.setAttribute("role", "listitem");
      item.appendChild(el("b", null, stat.value));
      item.appendChild(el("span", null, stat.label));
      stats.appendChild(item);
    });
    return stats;
  }

  function renderNotice(noticeData) {
    var notice = el("div", "notice-box");
    notice.appendChild(el("p", "box-label", noticeData.noticeLabel));
    notice.appendChild(el("p", null, noticeData.notice));
    var link = el("a", null, noticeData.noticeLink.label);
    link.href = noticeData.noticeLink.href;
    notice.appendChild(link);
    return notice;
  }

  function renderAside(asideData) {
    var aside = el("aside", "lead__aside");
    aside.setAttribute("aria-label", "At a glance");

    var signature = document.createElement("img");
    signature.className = "signature";
    signature.src = asideData.signature.src;
    signature.alt = asideData.signature.alt;
    signature.width = asideData.signature.width;
    signature.height = asideData.signature.height;
    signature.decoding = "async";
    aside.appendChild(signature);

    var statBox = el("div", "stat-box");
    statBox.appendChild(el("p", "box-label", asideData.statsLabel));
    statBox.appendChild(renderStats(asideData.stats));
    aside.appendChild(statBox);
    aside.appendChild(renderNotice(asideData));
    return aside;
  }

  function renderLead(lead) {
    var section = el("section", "lead");
    section.setAttribute("aria-labelledby", "lead-headline");

    var column = el("div", "lead__main");
    var headline = el("h1", null, lead.headline);
    headline.id = "lead-headline";
    column.appendChild(headline);
    column.appendChild(el("p", "hero-deck", lead.deck));
    column.appendChild(renderByline(lead));
    column.appendChild(renderActions(lead.actions));
    section.appendChild(column);
    section.appendChild(renderAside(lead.aside));
    return section;
  }

  /* ---- Section shells -------------------------------------------------- */
  function sectionShell(section) {
    var shell = el("section", "section");
    shell.id = section.id;
    shell.appendChild(el("span", "section-num", section.num));
    shell.appendChild(el("h2", null, section.title));
    if (section.lede) {
      shell.appendChild(
        el("p", section.ledeClass || "lede mb-4", section.lede),
      );
    }
    return shell;
  }

  function renderHighlights(section) {
    var list = el("div", "highlights");
    section.items.forEach(function (item) {
      var card = el("article", "hl-card");
      var meta = el("p", "hl-card__meta");
      item.meta.forEach(function (text) {
        meta.appendChild(el("span", null, text));
      });
      card.appendChild(meta);
      card.appendChild(el("h3", null, item.title));
      card.appendChild(el("p", null, item.body));
      card.appendChild(pillList(item.pills, "ul", "li"));

      var link = el("a", "hl-card__link");
      link.href = item.link.href;
      appendArrow(link, item.link.label);
      card.appendChild(link);
      list.appendChild(card);
    });
    return list;
  }

  function renderCareer(section) {
    var fragment = document.createDocumentFragment();
    var list = el("div", "career");
    section.items.forEach(function (item) {
      var role = el("article", "role");
      role.appendChild(el("span", "role-when", item.when));
      var body = document.createElement("div");
      body.appendChild(el("h3", null, item.title));
      body.appendChild(el("p", "role-org", item.org));
      body.appendChild(el("p", null, item.body));
      if (item.pills) body.appendChild(pillList(item.pills, "div", "span"));
      role.appendChild(body);
      list.appendChild(role);
    });
    fragment.appendChild(list);
    if (section.footnoteHtml) {
      var note = el("p", "small muted mt-3");
      note.innerHTML = section.footnoteHtml;
      fragment.appendChild(note);
    }
    return fragment;
  }

  function renderSkills(section) {
    var fragment = document.createDocumentFragment();
    var list = el("div", "skills");
    section.items.forEach(function (item) {
      var card = el("article", "skill");
      card.appendChild(el("h3", null, item.title));
      card.appendChild(el("p", null, item.body));
      list.appendChild(card);
    });
    fragment.appendChild(list);

    var divider = el("div", "divider-top");
    divider.appendChild(el("p", "eyebrow", section.toolsLabel));
    divider.appendChild(el("p", "small muted mb-0", section.tools));
    fragment.appendChild(divider);
    return fragment;
  }

  function renderTraining(section) {
    var list = el("div", "training");
    section.items.forEach(function (item) {
      var card = el("article", "training__item");
      card.appendChild(el("p", "training__meta", item.meta));
      card.appendChild(el("h3", null, item.title));
      card.appendChild(el("p", null, item.body));
      list.appendChild(card);
    });
    return list;
  }

  var renderers = {
    highlights: renderHighlights,
    career: renderCareer,
    skills: renderSkills,
    training: renderTraining,
  };

  /* ---- Boot ------------------------------------------------------------ */
  main.textContent = "";
  if (data.lead) main.appendChild(renderLead(data.lead));

  data.sections.forEach(function (section) {
    var shell = sectionShell(section);
    var render = renderers[section.type];
    if (render) shell.appendChild(render(section));
    main.appendChild(shell);
  });
})();
