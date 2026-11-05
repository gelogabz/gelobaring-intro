# The AGB Gazette

A two-page career portfolio built as plain HTML, CSS, and JavaScript. No framework, no build
step, no runtime dependencies.

The layout borrows the grammar of a broadsheet: a ruled paper sheet, masthead with ears, a
boxed section index, a lead story with a sidebar, hairline card grids, and numbered editorial
sections. The palette and type families are unchanged; only the structure is newspaper-shaped.
The masthead is **The AGB Gazette**; the kicker reads **Gelo Baring · Portfolio**.

- `index.html` is the portfolio: nine highlights, a five-role career timeline, skills, and
  contact.
- `case-studies.html` is the detail page: four 2026 knowledge-system cases, earlier help
  center, client site, and internal tool work, plus engineering notes, evidence, and limits.

Employers are anonymized throughout. Client sites are named and linked because they are public
work.

## Files

```
gelobaring-intro/
├── index.html              portfolio: highlights, career, skills, contact
├── case-studies.html       detail: four 2026 cases, earlier work, engineering, evidence, limits
├── css/
│   ├── tokens.css          design system: palette, type scale, spacing, z-index
│   ├── styles.css          newspaper structure: masthead, nav, lead, ruled grids
│   └── print.css           paper output (loaded with media="print")
├── js/
│   └── main.js             reading progress, active nav, section pager, print button, lazy-image fix
├── assets/
│   ├── 01–06.png           anonymized product screenshots (1440w fallback)
│   ├── 01–06.webp          same screenshots, smaller
│   ├── 01–06-720.*         responsive 720w variants used by srcset
│   ├── curriculum-map.svg  Case C curriculum map
│   ├── agent-gate.svg      Case D review-gate diagram
│   ├── og-card.png         1200×630 social card
│   ├── og-card.svg         social-card source
│   ├── favicon.svg         site icon
│   └── signature.png       personal mark
├── .gitignore              excludes local/private material from the repo
└── README.md               this file
```

The private briefing lives **outside** this folder, at `../SHOWCASE-BRIEFING.md`. The
interview-prep notes live at `../SHOWCASE-COMMENTS.md`. Do not move either back into
`gelobaring-intro/`; anything tracked in this folder is deployable.

## View it

```sh
cd gelobaring-intro
python3 -m http.server 8000
# http://localhost:8000
```

Opening `index.html` directly also works, but a server is closer to production and keeps
relative paths honest.

## Edit it

| What                            | Where                                                            |
| ------------------------------- | ---------------------------------------------------------------- |
| Masthead, ears, date strip      | both HTML files — `.masthead`                                    |
| Boxed section index             | both HTML files — `.paper-nav`                                   |
| Lead story, sidebar, byline     | both HTML files — `.lead`                                        |
| Page `h1` and lead copy         | both HTML files — `.lead__main`                                  |
| Highlight cards                 | `index.html` — `#highlights` `.highlights`                       |
| Career history                  | `index.html` — `#career`                                         |
| Skills, tools, background       | `index.html` — `#skills`                                         |
| Contact details                 | `index.html` and `case-studies.html` — `.contact` block          |
| Case-study copy                 | `case-studies.html` — `<article class="case">` blocks in `#work` |
| Earlier projects, client sites  | `case-studies.html` — `#earlier`                                 |
| Engineering notes, code samples | `case-studies.html` — `#engineering`                             |
| Evidence table and timeline     | `case-studies.html` — `#evidence`                                |
| Limits                          | `case-studies.html` — `#limits`                                  |
| Colors, fonts, spacing          | `css/tokens.css` only                                            |
| Dark theme                      | `css/tokens.css` — the `[data-theme="dark"]` block               |
| Component styling               | `css/styles.css`                                                 |
| PDF behavior                    | `css/print.css`                                                  |
| Theme bootstrap                 | both HTML files — inline `<script>` in `<head>`                  |
| Print button, nav state, pager  | `js/main.js`                                                     |

### Page structure

`index.html`

| #   | Section    | ID            | Role                                           |
| --- | ---------- | ------------- | ---------------------------------------------- |
| 01  | Highlights | `#highlights` | Nine project cards, four linking to full cases |
| 02  | Career     | `#career`     | Five roles, 2015–2026, employers anonymized    |
| 03  | Skills     | `#skills`     | Six capabilities, tools, and background        |
| —   | Contact    | `#contact`    | Email, LinkedIn, GitHub                        |

`case-studies.html`

| #   | Section      | ID             | Role                                         |
| --- | ------------ | -------------- | -------------------------------------------- |
| 01  | Context      | `#problem`     | The documentation problem and its cost       |
| 02  | How it fits  | `#system`      | The three-layer model and pipeline           |
| 03  | Case studies | `#work`        | Four deep cases with jump links              |
| 04  | Earlier work | `#earlier`     | Help center, internal tool, six client sites |
| 05  | Engineering  | `#engineering` | Architecture, code samples, delivery choices |
| 06  | Evidence     | `#evidence`    | Output counts, sources, 2026 timeline        |
| 07  | Limits       | `#limits`      | What is not proven                           |
| —   | Contact      | `#contact`     | Email, LinkedIn, GitHub                      |

Section numbers, the `.paper-nav` links, the edition index in the lead sidebar, and the CSS
section comments must stay in sync. The `.section-next` pager is generated from `.paper-nav`
at runtime, so it follows the same order automatically. Deep links are re-aligned after the
pager is injected and again once the webfonts settle. The two pages cross-link: the portfolio
points to `case-studies.html#case-a` … `#case-d`, and the detail page points back to
`index.html`.

### Anonymization policy

All employers are described by what they do, never by name:

| Period              | Label                                            |
| ------------------- | ------------------------------------------------ |
| Jan – Oct 2026      | B2B SaaS company selling into cloud marketplaces |
| Sep 2023 – Dec 2025 | HR SaaS company serving restaurant teams         |
| Mar – Aug 2023      | Web development agency serving Japanese clients  |
| Dec 2017 – Jan 2023 | On-demand delivery platform                      |
| Jan 2015 – Jan 2016 | E-commerce marketplace                           |

The six 2023 client sites are named and linked because they are public portfolio pieces:
HYEG, Life Support Center Tomonokai, Maeda Chiropractic, Mori No Shion, Aladdin, and
Hanamizuki Chiropractic. The internal invoice system is described, not linked.

Screenshots use `Cloud GTM Reference` and `CloudCo Docs` instead of the real brand. Do not
reintroduce employer names, product names, internal links, or customer details.

### American English

The copy uses American spelling and usage: anonymized, organized, optimized, analyzed,
labeled, behavior, color, center, specialized, modeled, toward, normalizes. Keep it that way
when editing.

## Themes

Light is the default: khaki `#f4ecdc`. Dark makes the page true black `#000000`, with
`#001f17` used for raised surfaces and `--forest` overridden to black.

- On first visit the theme follows the visitor's OS (`prefers-color-scheme`).
- The theme button in the masthead and in the footer toggles it. Both stay in sync, the visible
  label switches between **Dark mode** and **Light mode**, and `aria-pressed` reflects state.
- The choice is stored in `localStorage` under `showcase-theme` and survives reloads.
- The bootstrap is inline in `<head>` so the attribute is set before first paint — no white
  flash. With JavaScript disabled the page stays light and fully readable.
- Print always renders light, whichever theme is active on screen.

Only the semantic roles change between themes: `--bg`, `--ink`, `--ink-2`, `--muted`,
`--muted-2`, `--teal-800`, `--rule`, `--stat-ink`, `--surface-raised`. `--forest` becomes
black in dark mode so panels and the code block are drawn by their hairline rules.

## Design tokens

| Token        | Value     | Role                                                 |
| ------------ | --------- | ---------------------------------------------------- |
| `--teal`     | `#00a385` | Accent fills, rules, markers — **not text on light** |
| `--teal-800` | `#00614f` | Derived: text-safe accent (6.33:1 on khaki)          |
| `--forest`   | `#00493a` | Dark panels, headings, strong numbers                |
| `--lint`     | `#d7d7a8` | Highlight wash                                       |
| `--khaki`    | `#f4ecdc` | Page background (light)                              |
| `--black`    | `#001f17` | Body text; raised surface in dark                    |

Typography: **Outfit** for display and UI labels, **Google Sans Flex** for body copy. The
Google Fonts request loads Outfit 400/500/600/700/800 and Google Sans Flex 400/500/600/700 —
the weights the CSS actually uses for the masthead, headlines, and labels.

### Newspaper components

- `.sheet` — the ruled broadsheet that wraps the masthead, nav, main, and footer. It sets the
  outer border, the paper background, and the faint horizontal texture. The body behind it is
  the desk tone.
- `.masthead` — utility strip (date, edition, theme toggle), then a three-column grid: left
  ear, centered kicker/title/tagline, right ear. The title is **The AGB Gazette**, the kicker
  is **Gelo Baring · Portfolio**, and the left ear carries the **Est. 2015 / Support →
  Knowledge** line. The title is a `<p>`, not the page `h1`; each page keeps one `h1` in the
  lead.
- `.paper-nav` — the boxed section index. It is a wrapping flex row of bordered cells; links
  invert to ink when active or hovered. Three cells per row below 1200px, natural width above.
- `.section-next` — previous / next links injected at the end of each section by `main.js`.
  They mirror the `.paper-nav` order and give the reader a way to keep moving without
  scrolling back to the top. Hidden in print.
- `.colophon__top` — the **Back to top** link in the footer. Hidden in print.
- `.lead` — the lead story grid: headline, deck, byline, and calls to action on the left; a
  signature, stat box, and notice on the right. The detail page swaps the stat box for an
  edition index.
- `.highlights` / `.hl-card` — the nine-card portfolio grid. Two columns at 760px, three at
  1060px. Each card is a flex column so the link sits at the bottom, and the link's `::after`
  covers the card for a full-card target. Cards carry `P. 01`–`P. 09` page labels.
- `.skills` / `.skill` — a hairline grid of six capabilities. Same breakpoints as the
  highlights grid, with automatic `01`–`06` numbering.
- `.case` / `.case-grid` — each case study is a feature with a ruled head, a body column, and
  a sidebar for facts and links.
- `.panel-dark` — the forest supplement that carries the pipeline, layers, and principles.
- `.pills` — a list reset, so pill lists can use `<ul>` / `<li>` without browser markers or
  indentation. `case-studies.html` still uses `<span class="pill">` inside `.pills`.

### Contrast (measured, not assumed)

Light theme:

| Pair                            | Ratio      | Verdict                   |
| ------------------------------- | ---------- | ------------------------- |
| Ink `#001f17` on khaki          | 14.80:1    | AAA                       |
| Forest `#00493a` on khaki       | 8.88:1     | AAA                       |
| `--teal-800` `#00614f` on khaki | 6.33:1     | AA                        |
| Muted `#4a5f56` on khaki        | 5.84:1     | AA                        |
| **Teal `#00a385` on khaki**     | **2.72:1** | **Fails — graphics only** |

Dark theme, measured against the page `#000000`:

| Pair                            | Ratio   | Verdict |
| ------------------------------- | ------- | ------- |
| Khaki `#f4ecdc` on black        | 17.88:1 | AAA     |
| Ink-2 `#dbe7dd` on black        | 15.46:1 | AAA     |
| `--teal-800` `#9fe3d4` on black | 14.41:1 | AAA     |
| Muted `#b9c7bd` on black        | 11.97:1 | AAA     |
| Muted-2 `#a6b7ad` on black      | 10.00:1 | AAA     |

On raised `#001f17` surfaces the same text still clears AA: khaki 14.80, muted 9.90,
muted-2 8.27, accent 11.93.

If you add a color, measure it in both themes before it becomes text.

## Content accuracy

The site's argument is that claims are verified. Keep it that way. Headline figures and where
to re-check them:

| Claim                                    | Where                                                                                                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 507 terms, 1,477 curated cross-links     | `marketplaceglossary-prototype-gelobaring/data/terms.js`                                                                                                 |
| 21 paths / 269 steps                     | `.../data/learning-paths.js`                                                                                                                             |
| 37 walkthroughs / 194 steps / 486 checks | `.../data/walkthroughs.js`                                                                                                                               |
| 36 comparison rows                       | `.../app/compare-data.js` (derived from aliases)                                                                                                         |
| 1,761 feed entries, 13 monitored sources | `.../data/whats-new.js`, `.../scripts/fetch-whats-new.js`                                                                                                |
| 319 commits                              | `git -C marketplaceglossary-prototype-gelobaring rev-list --count HEAD`                                                                                  |
| ~11k lines hand-written app code         | reference repo, excluding `data/`, `temp/`, and `scripts/`                                                                                               |
| 5 editions, 43 topics, 15 published      | briefing-platform repo, `data/`                                                                                                                          |
| 13 modules, 13 quizzes, 146 questions    | `lms-courses/training-modules/`, `lms-courses/quiz-content/`                                                                                             |
| 246-row source map, weeks 1–6            | `lms-courses/claude-contexts/source-map.md`                                                                                                              |
| 108 commits                              | `git -C lms-courses rev-list --count HEAD`                                                                                                               |
| 7 agent specs / 554 lines                | `cloud-marketplace-news-universal-guide/claude-contexts/agents/`                                                                                         |
| 777-line writing guide                   | `cloud-marketplace-news-universal-guide/claude-contexts/writing-guide.md`                                                                                |
| ~170-entry decision log                  | `cloud-marketplace-news-universal-guide/claude-contexts/features.md`, `marketplaceglossary-prototype-gelobaring/TODOFORLATER.md`, and project changelogs |
| 178-source inventory                     | `marketplaceglossary-prototype-gelobaring/info-sources.md` (unique URLs)                                                                                 |
| 295-line project manual                  | `marketplaceglossary-prototype-gelobaring/CLAUDE.md`                                                                                                     |
| 23 lessons, 40 corrections + 3 gaps      | `aws-ccp-coursework/aws-clf-c02-flagged-content-and-changes.md`                                                                                          |
| 60 tests, 14 examples                    | `bootdev-projects/learn-ai-coding-starter/`                                                                                                              |

Career claims come from the LinkedIn profile text, not from repository evidence. Re-check them
against the profile before publishing:

| Claim                                   | Source                                                               |
| --------------------------------------- | -------------------------------------------------------------------- |
| Five roles, Jan 2015 – Oct 2026         | LinkedIn profile, Experience                                         |
| HR SaaS role, Sep 2023 – Dec 2025       | LinkedIn profile; two titles in one tenure                           |
| Agency role, Mar – Aug 2023             | LinkedIn profile                                                     |
| Delivery platform, Dec 2017 – Jan 2023  | LinkedIn profile                                                     |
| Marketplace role, Jan 2015 – Jan 2016   | LinkedIn profile                                                     |
| Six client sites, Mar – Jul 2023        | Live URLs linked in `#earlier`; dates from the profile/project notes |
| Internal invoice system, Apr – May 2023 | Internal tool; not linked publicly                                   |

Deliberate wording choices:

- **8 pages**, not 10 — the two `temp/` samples are not production pages.
- **~11k lines** of hand-written application code, excluding data modules and tooling
  (`app/`, page scripts, CSS, and HTML). Including the ingestion script and the `temp/`
  samples pushes the count to ~13.7k; the site uses the narrower, deployable figure.
- **Curated cross-links**, not "typed" — the `related` entries are hand-authored.
- **Term difficulty is assigned per term against a rubric**, not derived from data.
- **Comparison rows are derived from the alias graph**, not parsed from prose.
- **13 monitored sources** feed the archive; a separate **16-source monitoring set** drives the
  AI agents. They are different systems and are labeled separately.
- **Curriculum scope**: weeks 1–4 are drafted; weeks 5–6 and the capstone are mapped only.
- **Answer key**: only Week 1–2 keys are hashed, and the file itself says the hashing is
  obfuscation, not security.
- **Earlier roles carry no invented metrics.** The site states scope and responsibilities, not
  percentages or impact figures, because none were measured or recorded.
- **Every employer is anonymized.** Client sites remain named and linked; the internal invoice
  system is described, not linked.
- **Output counts are not impact metrics.** Usage, completion, and repeat-question volume were
  not instrumented; the limits section says so.

## Publish it

GitHub Pages, no build required:

1. Deploy `gelobaring-intro/` as the site root (or a subpath).
2. Update the absolute URLs if the deployment path is not
   `https://gelogabz.github.io/gelobaring-intro/`:
   - `<link rel="canonical">` on both pages
   - `og:url` on both pages
   - `og:image` and `twitter:image`
   - `url` in the JSON-LD `Person` block on both pages
3. Commit `index.html`, `case-studies.html`, `css/`, `js/`, `assets/`, `.gitignore`, and this
   README.
4. **Do not** commit `SHOWCASE-BRIEFING.md`, `SHOWCASE-COMMENTS.md`, the `old/` folder, the
   parent workspace, `CLAUDE.md` files, or `claude-contexts/` directories. The `.gitignore`
   already excludes `old/`, `showcase-comments.md`, `.DS_Store`, and `*.pdf`.

The social card is `assets/og-card.png` (1200×630) and reads **The AGB Gazette · Gelo Baring ·
Portfolio 2015–2026**. If you change the headline or masthead, regenerate it from
`assets/og-card.svg`:

```sh
magick -background none assets/og-card.svg -resize 1200x630 assets/og-card.png
```

Without ImageMagick, screenshot the SVG at 1200×630 in a headless browser and save the result
over `assets/og-card.png`.

### Privacy check before publishing

- Every employer is anonymized. The screenshots use `Cloud GTM Reference` / `CloudCo Docs`
  rather than the real brand. Product names and internal links stay out of both pages.
- Client sites **are named**, with links to the live sites. That is intentional: they are
  public work and the links are the evidence. Do not add client contact details, contract
  values, or unpublished material.
- Two of the source repositories are public and still contain real brand names, internal
  docs, and `claude-contexts/` material. Either sanitize them or do not link them from the
  site. The exact paths are in the private briefing.
- `showcase-comments.md` is interview-prep material and must not be tracked or deployed. It
  has been moved to `../SHOWCASE-COMMENTS.md`.
- The `old/` folder is the previous personal site and contains personal photos and the old
  employer logo. It is ignored by git and must not be deployed.
- Keep customer names, revenue figures, internal Slack links, and unredacted strategy docs out
  of both pages and any public repo.

## Assets and screenshots

Screenshots are 1440px wide. Each has a WebP source, a PNG fallback, and 720w variants:

```html
<picture>
  <source
    srcset="assets/01-glossary-720.webp 720w, assets/01-glossary.webp 1440w"
    sizes="(min-width: 1180px) 1100px, 100vw"
    type="image/webp"
  />
  <img
    src="assets/01-glossary.png"
    srcset="assets/01-glossary-720.png 720w, assets/01-glossary.png 1440w"
    sizes="(min-width: 1180px) 1100px, 100vw"
    width="1440"
    height="1500"
    ...
  />
</picture>
```

- Keep the declared `width` and `height` equal to the real file dimensions; a mismatch causes
  layout shift. `04-whats-new.png` is 1440×1400.
- The 720w files are generated with `sips --resampleWidth 720` (PNG) and
  `cwebp -resize 720 0` (WebP). Regenerate them if a screenshot changes.
- Images below the fold use `loading="lazy"`. `main.js` switches them to eager on
  `beforeprint` so the PDF is not full of blank frames.
- The two diagrams are SVG so they stay sharp in print and at any zoom.
- On mobile, wide tables and diagrams scroll inside labeled regions (`tabindex="0"`,
  `role="region"`); neither page scrolls horizontally.

## Accessibility checklist

- [x] Skip link, single `h1` per page, page-level `contentinfo` footer outside `<main>`
- [x] Heading order: `h1` → `h2` → `h3`/`h4`, no skipped levels
- [x] Every `figcaption` is inside its `<figure>`
- [x] Data tables use `<th scope="col">` and `<th scope="row">`
- [x] Wide tables and diagrams are keyboard-focusable and labeled
- [x] One boxed section index at every width; it wraps to three cells per row on small screens
- [x] Theme toggle is a real `button`, label and `aria-pressed` update with state
- [x] Keyboard-visible focus on all interactive elements
- [x] Contrast measured for every text/background pair
- [x] `prefers-reduced-motion` respected
- [x] All images have alt text (decorative signature uses `alt=""`)
- [x] Responsive at 390px and 1440px, no page-level horizontal scroll
- [x] Pages fully readable with JavaScript disabled
- [ ] Verify tab order once in a real browser after editing
- [ ] Run one screen-reader pass (VoiceOver or NVDA) before publishing

## Print

`css/print.css` is loaded with `media="print"`:

- The sheet drops its desk frame and paper texture and prints white. The masthead keeps its
  rules and ears; the title prints at 40pt.
- Panels invert to white; links print black and external URLs expand in parentheses.
- Output is A4 with 16mm margins. The portfolio is 6 pages; the detail page is 20 pages.
- The lead collapses to one column, with the stat/index and notice boxes side by side beneath.
- Screenshots cap at 260px; tall screenshots at 340px; diagrams stop scrolling and shrink to
  the page width.
- `.case` is allowed to break across pages; individual figures, notes, flow steps, layers,
  roles, projects, client-site cards, highlight cards, and skills stay intact. Headings never
  split from their following content.
- The highlights, skills, outcomes, projects, client-site, flow, layer, path, and principle
  grids collapse to a single column for print.
- The theme toggle, boxed nav, section pager, back-to-top link, progress bar, and hero CTAs
  are hidden.
- Print from either page's **Print / save as PDF** button, or `Ctrl/Cmd + P`.

## Known gaps

- No automated visual regression or link check yet.
- Some accessibility work in the source projects is incomplete; the detail page says so in
  **Limits**.
- Impact is not measured. There is no usage analytics, completion data, or repeat-question
  count; the detail page states that in **Limits** rather than inventing a number.
- The canonical URLs are defaults. Update them if the site moves.
- The detail page is long by design. The boxed nav, the previous / next links at the end of
  each section, the edition index in the lead sidebar, and per-case deep links (`#case-a` …
  `#case-d`) are the way through it.

## Internal docs

- `../SHOWCASE-BRIEFING.md` — private prep notes, evidence index, interview talking points,
  and claims to avoid. **Not for publication.**
