/* ==========================================================================
   contents.js — data for the contents drawer
   One entry per page, keyed by the <body data-page="..."> value. Add,
   remove, or reorder items here; js/contents.js renders them into #toc.

   The drawer is JavaScript-only: its trigger is hidden in the HTML and
   revealed by main.js. Rendering this list here therefore removes no
   control from the no-JavaScript page.
   ========================================================================== */

window.SITE_CONTENTS = {
  index: {
    kicker: "Portfolio",
    foot: "The AGB Gazette · Portfolio Edition",
    items: [
      { id: "highlights", num: "01", label: "Highlights" },
      { id: "career", num: "02", label: "Career" },
      { id: "skills", num: "03", label: "Skills" },
      { id: "training", num: "04", label: "Training" },
      { id: "contact", num: "—", label: "Contact" },
    ],
  },

  "case-studies": {
    kicker: "Case Studies",
    foot: "The AGB Gazette · Case Studies Edition",
    items: [
      { id: "problem", num: "01", label: "Context" },
      { id: "system", num: "02", label: "How it fits" },
      { id: "work", num: "03", label: "Case studies" },
      { id: "earlier", num: "04", label: "Earlier work" },
      { id: "training", num: "05", label: "Training" },
      { id: "engineering", num: "06", label: "Engineering" },
      { id: "evidence", num: "07", label: "Evidence" },
      { id: "limits", num: "08", label: "Limits" },
      { id: "contact", num: "—", label: "Contact" },
    ],
  },

  photography: {
    kicker: "Off the Clock",
    foot: "The AGB Gazette · Off the Clock",
    items: [
      { id: "gallery", num: "01", label: "Gallery" },
      { id: "notes", num: "02", label: "After hours" },
      { id: "contact", num: "—", label: "Contact" },
    ],
  },
};
