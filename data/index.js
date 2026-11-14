/* ==========================================================================
   index.js — content for the portfolio page
   Rendered into <main id="main"> by js/render.js. Copy and image metadata
   live here; the renderer owns the markup. Edit without touching HTML
   structure.
   ========================================================================== */

window.PAGES = window.PAGES || {};

window.PAGES.index = {
  lead: {
    headline: "I make complex products legible and teachable.",
    deck: "Eleven years across support, knowledge management, and front-end development. I have built a 507-term marketplace reference, migrated a help center, shipped six client sites, and taught the systems behind them.",
    byline: ["By Gelo Baring", "Philippines · UTC+8", "2015–2026"],
    avatar: {
      webpSrcset:
        "assets/gelo-avatar-80.webp 1x, assets/gelo-avatar-160.webp 2x",
      src: "assets/gelo-avatar-80.jpg",
      srcset: "assets/gelo-avatar-80.jpg 1x, assets/gelo-avatar-160.jpg 2x",
      width: 32,
      height: 32,
      alt: "",
    },
    actions: [
      {
        label: "Read the four 2026 cases",
        href: "case-studies.html",
        primary: true,
        arrow: true,
      },
      { label: "Email me", href: "mailto:gabrielgelo93@gmail.com" },
    ],
    aside: {
      signature: {
        src: "assets/signature.png",
        alt: "Gelo Baring signature",
        width: 400,
        height: 68,
      },
      statsLabel: "By the numbers",
      stats: [
        {
          value: "11",
          label: "Years in support, knowledge, and web",
        },
        { value: "4", label: "Systems shipped in 2026" },
        { value: "6", label: "Client sites shipped" },
        { value: "507", label: "Reference terms" },
      ],
      noticeLabel: "Notice",
      notice:
        "Open to work in knowledge systems, enablement, or front-end development.",
      noticeLink: { label: "Write to the editor →", href: "#contact" },
    },
  },

  sections: [
    {
      id: "highlights",
      num: "01",
      title: "Projects from eleven years of knowledge and web work.",
      lede: "The four 2026 systems have full case studies. The rest are summarized here, with more detail on the case studies page.",
      type: "highlights",
      items: [
        {
          meta: ["2026", "Case study"],
          title: "Marketplace reference platform",
          body: "A 507-term glossary with 21 learning paths, 37 guided walkthroughs, and a cross-platform comparison map. One data layer, no framework, no build step.",
          pills: [
            { label: "Knowledge architecture", accent: true },
            { label: "Vanilla JS" },
          ],
          link: {
            href: "case-studies.html#case-a",
            label: "Read the case",
          },
        },
        {
          meta: ["2023–2025", "Earlier work"],
          title: "HR SaaS help center",
          body: "Moved a support knowledge base from Salesforce Knowledge to Intercom, then wrote and edited the articles for an HR SaaS serving restaurant teams.",
          pills: [
            { label: "Intercom", accent: true },
            { label: "Content migration" },
          ],
          link: {
            href: "case-studies.html#earlier",
            label: "Read more",
          },
        },
        {
          meta: ["2023", "Client work"],
          title: "Six client websites",
          body: "Six production sites in five months for Japanese clients, built with HTML, CSS, JavaScript, and jQuery, plus PHP and Bootstrap where the project needed them.",
          pills: [
            { label: "Front-end", accent: true },
            { label: "Client work" },
          ],
          link: {
            href: "case-studies.html#earlier",
            label: "Read more",
          },
        },
        {
          meta: ["2026", "Case study"],
          title: "Onboarding curriculum",
          body: "A seven-week path from marketplace concepts to co-sell judgment: 13 modules, 13 quizzes, and a 246-row source map.",
          pills: [
            { label: "Instructional design", accent: true },
            { label: "Assessment" },
          ],
          link: {
            href: "case-studies.html#case-c",
            label: "Read the case",
          },
        },
        {
          meta: ["2023", "Internal tool"],
          title: "Internal invoice system",
          body: "A Laravel 10 and PostgreSQL invoicing tool. I was senior developer and main front-end developer, covering the interface, PHP, and database.",
          pills: [{ label: "Laravel", accent: true }, { label: "PostgreSQL" }],
          link: {
            href: "case-studies.html#earlier",
            label: "Read more",
          },
        },
        {
          meta: ["2026", "Case study"],
          title: "Monthly marketplace briefing",
          body: "Five editions that compare AWS, Microsoft, Google, and Snowflake on the same themes, with a source under every claim.",
          pills: [
            { label: "Editorial", accent: true },
            { label: "Data rendering" },
          ],
          link: {
            href: "case-studies.html#case-b",
            label: "Read the case",
          },
        },
        {
          meta: ["Self-directed", "Course"],
          title: "AWS exam prep course",
          body: "23 lessons across four exam domains, weighted to the official blueprint, with a 40-entry corrections register and a service audit.",
          pills: [
            { label: "Instructional design", accent: true },
            { label: "AWS" },
          ],
          link: {
            href: "case-studies.html#earlier",
            label: "Read more",
          },
        },
        {
          meta: ["2026", "Case study"],
          title: "AI content operations",
          body: "Seven agent specs and a two-gate review model for research-heavy content, piloted with a human in the loop.",
          pills: [
            { label: "AI operations", accent: true },
            { label: "Process design" },
          ],
          link: {
            href: "case-studies.html#case-d",
            label: "Read the case",
          },
        },
        {
          meta: ["2023", "Capstone"],
          title: "Furlinks adoption platform",
          body: "A Laravel dog-adoption platform: searchable dog profiles, applications with status tracking, and user accounts. Team capstone for KodeGo WD20P.",
          pills: [
            { label: "Laravel", accent: true },
            { label: "PHP" },
            { label: "MySQL" },
          ],
          link: {
            href: "case-studies.html#earlier",
            label: "Read more",
          },
        },
      ],
    },

    {
      id: "career",
      num: "02",
      title: "Eleven years across support, knowledge, and the web.",
      lede: "Employers are described by what they do. Client sites are named and linked.",
      type: "career",
      items: [
        {
          when: "Jan – Oct 2026",
          title: "Senior Knowledge Management Specialist",
          org: "B2B SaaS company selling into cloud marketplaces",
          body: "Built the reference platform, monthly briefing, onboarding curriculum, and AI content model described on this site. Also handled chat support, KB articles, editorial review, and AI knowledge-bot sources.",
        },
        {
          when: "Sep 2023 – Dec 2025",
          title: "Knowledge Management Specialist / Senior Specialist",
          org: "HR SaaS company serving restaurant teams",
          body: "Moved into the senior title in April 2024. Built and maintained the help center, migrated content from Salesforce Knowledge to Intercom, and supported AI knowledge-bot management.",
          pills: [
            { label: "Intercom" },
            { label: "Salesforce Knowledge" },
            { label: "Markdown" },
          ],
        },
        {
          when: "Mar – Aug 2023",
          title: "Web Developer",
          org: "Web development agency serving Japanese clients",
          body: "Built and rebuilt client websites and web applications, coordinated with Japanese project managers, and localized codebases. Delivered six client sites and an internal invoicing system in six months.",
          pills: [
            { label: "HTML/CSS" },
            { label: "JavaScript" },
            { label: "PHP" },
            { label: "Laravel 10" },
            { label: "PostgreSQL" },
          ],
        },
        {
          when: "Dec 2017 – Jan 2023",
          title: "Digital Content Specialist",
          org: "On-demand delivery platform",
          body: "Created knowledge base and process documentation, monitored article usage and performance metrics, implemented documentation improvements at regional scale, and assisted with feature development and testing.",
        },
        {
          when: "Jan 2015 – Jan 2016",
          title: "Customer Service Representative",
          org: "E-commerce marketplace",
          body: "Delivered Level 2 email and phone support, acted as SME and team point of contact, performed Team Lead and workforce-management duties, and reported ticket metrics and SLA breaches.",
        },
      ],
      footnoteHtml:
        'More detail on the earlier projects is in <a href="case-studies.html#earlier">the case studies</a>.',
    },

    {
      id: "skills",
      num: "03",
      title: "What I do.",
      lede: "Six capabilities, backed by the work on this site.",
      type: "skills",
      items: [
        {
          title: "Knowledge architecture",
          body: "Taxonomies, aliases, cross-links, and source rules that keep a reference usable as it grows.",
        },
        {
          title: "Technical writing",
          body: "Support articles, process docs, schemas, and style guides. Plain language, traceable claims.",
        },
        {
          title: "Enablement and instructional design",
          body: "Role-based learning paths, guided walkthroughs, quizzes, and source maps.",
        },
        {
          title: "Front-end development",
          body: "Semantic HTML, hand-written CSS, vanilla JavaScript, and PHP/Laravel when the project needs it.",
        },
        {
          title: "AI content operations",
          body: "Agent specs, typed handoffs, review gates, and failure modes for research-heavy content.",
        },
        {
          title: "Program management",
          body: "Phased delivery, decision logs, and scope measured before work starts.",
        },
      ],
      toolsLabel: "Tools",
      tools:
        "Intercom · Salesforce Knowledge · Markdown · HTML/CSS · JavaScript · jQuery · PHP · Laravel · PostgreSQL · Git",
    },

    {
      id: "training",
      num: "04",
      title: "How I learned the work.",
      lede: "No computer science degree. A bootcamp, a stack of self-directed courses, and a habit of building the thing I just read about.",
      type: "training",
      items: [
        {
          meta: "2023 · KodeGo",
          title: "Full-stack Web Development",
          body: "Sixteen-week bootcamp. Leadership Award, Best Capstone Project, and Top Student for Batch WD20P.",
        },
        {
          meta: "2026 · AWS / TESDA",
          title: "Cloud Practitioner prep",
          body: "CLF-C02 preparatory coursework across cloud concepts, core services, security, architecture, pricing, and support. Currently studying AI Practitioner (AIF-C01).",
        },
        {
          meta: "2023 · Google / Coursera",
          title: "Foundations of UX Design",
          body: "Research, wireframes, and the parts of design that make documentation easier to use.",
        },
        {
          meta: "2025–2026 · Boot.dev",
          title: "Programming practice",
          body: "Python, JavaScript, TypeScript, SQL, Git, Linux, and object-oriented and functional patterns, one course at a time.",
        },
        {
          meta: "2022–2023 · Sololearn",
          title: "Web fundamentals",
          body: "HTML, CSS, responsive design, JavaScript, and Python fundamentals.",
        },
        {
          meta: "2010–2012 · Adamson University",
          title: "BS Chemical Engineering",
          body: "Two years of engineering coursework.",
        },
      ],
    },
  ],
};
