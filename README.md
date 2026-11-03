# Showcase

A one-page career portfolio built as plain HTML, CSS, and JavaScript. No framework, no
build step, no runtime dependencies.

The page leads with four connected knowledge-system projects — a 507-term reference platform,
a monthly marketplace briefing, a seven-week onboarding curriculum, and an AI
content-operations model — then widens to the rest of the career: five roles from 2015–2026,
a help center, an internal invoicing system, and six live client sites.

## Files

```
showcase/
├── index.html              markup, content, inline theme bootstrap
├── css/
│   ├── tokens.css          design system: palette, type scale, spacing, z-index
│   ├── styles.css          layout and components
│   └── print.css           paper output (loaded with media="print")
├── js/
│   └── main.js             reading progress, active nav, print button, lazy-image print fix
├── assets/
│   ├── 01–06.png           anonymised product screenshots (fallback)
│   ├── 01–06.webp          same screenshots, smaller
│   ├── curriculum-map.svg  Case C curriculum map
│   ├── agent-gate.svg      Case D review-gate diagram
│   ├── og-card.png         1200×630 social card
│   ├── og-card.svg         social-card source
│   ├── favicon.svg         site icon
│   └── signature.png       personal mark
└── README.md               this file
```

The private briefing now lives **outside** this folder, at `../SHOWCASE-BRIEFING.md`. Do not
move it back into `showcase/`; anything in this folder is deployable.

## View it

```sh
cd showcase
python3 -m http.server 8000
# http://localhost:8000
```

Opening `index.html` directly also works, but a server is closer to production and keeps
relative paths honest.

## Edit it

| What | Where |
|---|---|
| Name, hero copy | `index.html` — `.hero` |
| Contact details | `index.html` — `.contact` block (real email, LinkedIn, GitHub) |
| Metrics | `.stats` block, Case sidebars, and the table in section 07 |
| Case-study copy | `<article class="case">` blocks in section 03 |
| Career history, earlier projects | `index.html` — `#career` section 04 |
| Client-site links and stacks | `#career` — `.site-grid` |
| Colours, fonts, spacing | `css/tokens.css` only |
| Dark theme | `css/tokens.css` — the `[data-theme="dark"]` block |
| Component styling | `css/styles.css` |
| PDF behaviour | `css/print.css` |
| Theme bootstrap | `index.html` — inline `<script>` in `<head>` |
| Print button / nav state | `js/main.js` |

### Page structure

| # | Section | ID | Role |
|---|---|---|---|
| 01 | Problem | `#problem` | The documentation problem and its cost |
| 02 | System | `#system` | The three-layer model and pipeline |
| 03 | The work | `#work` | Four deep case studies |
| 04 | Career & projects | `#career` | Five roles, selected projects, six client sites |
| 05 | Engineering | `#engineering` | Code, architecture, and delivery choices |
| 06 | Competencies | `#competencies` | What the evidence supports |
| 07 | Evidence | `#evidence` | Claim-to-source table |
| 08 | Limits | `#limits` | What is not proven |

The section numbers in `index.html`, the rail nav, the mobile nav, and the CSS section comments
must stay in sync.

### Themes

Light is the default: khaki `#f4ecdc`. Dark makes the page true black `#000000`, with
`#001f17` used for raised surfaces and `--forest` overridden to black.

- On first visit the theme follows the visitor's OS (`prefers-color-scheme`).
- The theme button in the hero and in the footer toggles it. Both stay in sync, the visible
  label switches between **Dark mode** and **Light mode**, and `aria-pressed` reflects state.
- The choice is stored in `localStorage` under `showcase-theme` and survives reloads.
- The bootstrap is inline in `<head>` so the attribute is set before first paint — no white
  flash. With JavaScript disabled the page stays light and fully readable.
- Print always renders light, whichever theme is active on screen.

Only the semantic roles change between themes: `--bg`, `--ink`, `--ink-2`, `--muted`,
`--muted-2`, `--teal-800`, `--rule`, `--stat-ink`, `--surface-raised`. `--forest` becomes
black in dark mode so panels and the code block are drawn by their hairline rules.

### Design tokens

| Token | Value | Role |
|---|---|---|
| `--teal` | `#00a385` | Accent fills, rules, markers — **not text on light** |
| `--teal-800` | `#00614f` | Derived: text-safe accent (6.33:1 on khaki) |
| `--forest` | `#00493a` | Dark panels, headings, strong numbers |
| `--lint` | `#d7d7a8` | Highlight wash |
| `--khaki` | `#f4ecdc` | Page background (light) |
| `--black` | `#001f17` | Body text; raised surface in dark |

Typography: **Outfit** for display and UI labels, **Google Sans Flex** for body copy. Both
load from Google Fonts at weights 400/500/600 only — the weights the CSS actually uses.

### Contrast (measured, not assumed)

Light theme:

| Pair | Ratio | Verdict |
|---|---|---|
| Ink `#001f17` on khaki | 14.80:1 | AAA |
| Forest `#00493a` on khaki | 8.88:1 | AAA |
| `--teal-800` `#00614f` on khaki | 6.33:1 | AA |
| Muted `#4a5f56` on khaki | 5.84:1 | AA |
| **Teal `#00a385` on khaki** | **2.72:1** | **Fails — graphics only** |

Dark theme, measured against the page `#000000`:

| Pair | Ratio | Verdict |
|---|---|---|
| Khaki `#f4ecdc` on black | 17.88:1 | AAA |
| Ink-2 `#dbe7dd` on black | 15.46:1 | AAA |
| `--teal-800` `#9fe3d4` on black | 14.41:1 | AAA |
| Muted `#b9c7bd` on black | 11.97:1 | AAA |
| Muted-2 `#a6b7ad` on black | 10.00:1 | AAA |

On raised `#001f17` surfaces the same text still clears AA: khaki 14.80, muted 9.90,
muted-2 8.27, accent 11.93.

If you add a colour, measure it in both themes before it becomes text.

## Content accuracy

The page's argument is that claims are verified. Keep it that way. Headline figures and where
to re-check them:

| Claim | Where |
|---|---|
| 507 terms, 1,477 curated cross-links | `marketplaceglossary-prototype-gelobaring/data/terms.js` |
| 21 paths / 269 steps | `.../data/learning-paths.js` |
| 37 walkthroughs / 194 steps / 486 checks | `.../data/walkthroughs.js` |
| 36 comparison rows | `.../app/compare-data.js` (derived from aliases) |
| 1,761 feed entries, 13 monitored sources | `.../data/whats-new.js`, `.../scripts/fetch-whats-new.js` |
| 319 commits | `git -C marketplaceglossary-prototype-gelobaring rev-list --count HEAD` |
| 5 editions, 43 topics, 15 published | briefing-platform repo, `data/` |
| 13 modules, 13 quizzes, 146 questions | `lms-courses/training-modules/`, `lms-courses/quiz-content/` |
| 246-row source map, weeks 1–6 | `lms-courses/claude-contexts/source-map.md` |
| 108 commits | `git -C lms-courses rev-list --count HEAD` |
| 7 agent specs / 554 lines | `cloud-marketplace-news-universal-guide/claude-contexts/agents/` |
| 777-line writing guide | `cloud-marketplace-news-universal-guide/claude-contexts/writing-guide.md` |
| ~170-entry decision log | `cloud-marketplace-news-universal-guide/claude-contexts/features.md`, `marketplaceglossary-prototype-gelobaring/TODOFORLATER.md`, and project changelogs |
| 178-source inventory | `marketplaceglossary-prototype-gelobaring/info-sources.md` (unique URLs) |
| 295-line project manual | `marketplaceglossary-prototype-gelobaring/CLAUDE.md` |
| 23 lessons, 40 corrections + 3 gaps | `aws-ccp-coursework/aws-clf-c02-flagged-content-and-changes.md` |
| 60 tests, 14 examples | `bootdev-projects/learn-ai-coding-starter/` |

Career claims come from the LinkedIn profile text, not from repository evidence. Re-check them
against the profile before publishing:

| Claim | Source |
|---|---|
| Five roles, Jan 2015 – Oct 2026 | LinkedIn profile, Experience |
| Workstream, Sep 2023 – Dec 2025 (2y4m) | LinkedIn profile; two titles in one tenure |
| Voltec Solutions, Mar – Aug 2023 | LinkedIn profile |
| Grab, Dec 2017 – Jan 2023 | LinkedIn profile |
| Lazada, Jan 2015 – Jan 2016 | LinkedIn profile |
| Six client sites, Mar – Jul 2023 | Live URLs linked in `#career`; dates from the profile/project notes |
| Loopus Invoice System, Apr – May 2023 | Internal tool; not linked publicly |

Deliberate wording choices:

- **8 pages**, not 10 — the two `temp/` samples are not production pages.
- **~14.3k lines** of hand-written application code, excluding data modules. Counting data
  pushes it to ~16k; the page says which it means.
- **Curated cross-links**, not "typed" — the `related` entries are hand-authored.
- **Term difficulty is assigned per term against a rubric**, not derived from data.
- **Comparison rows are derived from the alias graph**, not parsed from prose.
- **13 monitored sources** feed the archive; a separate **16-source monitoring set** drives the
  AI agents. They are different systems and are labelled separately.
- **Curriculum scope**: weeks 1–4 are drafted; weeks 5–6 and the capstone are mapped only.
- **Answer key**: only Week 1–2 keys are hashed, and the file itself says the hashing is
  obfuscation, not security.
- **Earlier roles carry no invented metrics.** The page states scope and responsibilities, not
  percentages or impact figures, because none were measured or recorded.
- **The current employer is anonymised; earlier employers and client sites are named.** The
  2026 work involves internal documentation, so the page says "a B2B SaaS company selling into
  cloud marketplaces" and omits product names. Workstream, Voltec, Grab, Lazada, and the six
  client sites are public and are named.
- **Loopus is described, not linked.** It is an internal invoicing system; there is no public
  URL to send people to.

## Publish it

GitHub Pages, no build required:

1. Deploy `showcase/` as the site root (or a subpath).
2. Update the absolute URLs if the deployment path is not
   `https://gelogabz.github.io/showcase/`:
   - `<link rel="canonical">`
   - `og:url`
   - `og:image` and `twitter:image`
   - `url` in the JSON-LD `Person` block
3. Commit only `index.html`, `css/`, `js/`, `assets/`, and this README.
4. **Do not** commit `SHOWCASE-BRIEFING.md`, the parent workspace, `CLAUDE.md` files, or
   `claude-contexts/` directories.

The social card is `assets/og-card.png` (1200×630). If you change the headline, regenerate it
from `assets/og-card.svg`:

```sh
magick -background none assets/og-card.svg -resize 1200x630 assets/og-card.png
```

### Privacy check before publishing

- The 2026 employer is anonymised; the screenshots use `Cloud GTM Reference` / `CloudCo Docs`
  rather than the real brand. Product names and internal links stay out of the page.
- Earlier employers and client sites **are named**, with links to the live sites. That is
  intentional: they are public work and the links are the evidence. Do not add client contact
  details, contract values, or unpublished material.
- Two of the source repositories are public and still contain real brand names, internal
  docs, and `claude-contexts/` material. Either sanitise them or do not link them from the
  page. The exact paths are in the private briefing.
- Keep customer names, revenue figures, internal Slack links, and unredacted strategy docs out
  of both the page and any public repo.

## Assets and screenshots

Screenshots are 1440px wide. Each has a WebP source and a PNG fallback:

```html
<picture>
  <source srcset="assets/01-glossary.webp" type="image/webp" />
  <img src="assets/01-glossary.png" width="1440" height="1500" ... />
</picture>
```

- Keep the declared `width` and `height` equal to the real file dimensions; a mismatch causes
  layout shift. `04-whats-new.png` is 1440×1400.
- Images below the fold use `loading="lazy"`. `main.js` switches them to eager on
  `beforeprint` so the PDF is not full of blank frames.
- The two diagrams are SVG so they stay sharp in print and at any zoom.
- On mobile, wide tables and diagrams scroll inside labelled regions (`tabindex="0"`,
  `role="region"`); the page itself does not scroll horizontally.

## Accessibility checklist

- [x] Skip link, single `h1`, page-level `contentinfo` footer outside `<main>`
- [x] Heading order: `h1` → `h2` → `h3`/`h4`, no skipped levels
- [x] Every `figcaption` is inside its `<figure>`
- [x] Data tables use `<th scope="col">` and `<th scope="row">`
- [x] Wide tables and diagrams are keyboard-focusable and labelled
- [x] Mobile contents navigation below 1060px; sticky rail above it
- [x] Theme toggle is a real `button`, label and `aria-pressed` update with state
- [x] Keyboard-visible focus on all interactive elements
- [x] Contrast measured for every text/background pair
- [x] `prefers-reduced-motion` respected
- [x] All images have alt text (decorative signature uses `alt=""`)
- [x] Responsive at 390px and 1440px, no page-level horizontal scroll
- [x] Page fully readable with JavaScript disabled
- [ ] Verify tab order once in a real browser after editing
- [ ] Run one screen-reader pass (VoiceOver or NVDA) before publishing

## Print

`css/print.css` is loaded with `media="print"`:

- Panels invert to white; links print black and expand to show their URL.
- Screenshots cap at 300px; diagrams cap at 240px.
- `.case` is allowed to break across pages; individual figures, notes, flow steps, competency
  rows, layers, roles, projects, and client-site cards stay intact. Headings never split from
  their following content.
- Wide tables and diagrams stop scrolling and shrink to the page width.
- The theme toggle, mobile nav, progress bar, and hero CTAs are hidden.
- Print from the page's **Print / save as PDF** button, or `Ctrl/Cmd + P`.

## Known gaps

- No automated visual regression or link check yet.
- The page is long; the mobile contents panel helps, but there is no per-case deep link.
- Some accessibility work in the source projects is incomplete; the page says so in **Limits**.
- The canonical URL is a default. Update it if the site moves.

## Internal docs

- `../SHOWCASE-BRIEFING.md` — private prep notes, evidence index, interview talking points,
  and claims to avoid. **Not for publication.**
