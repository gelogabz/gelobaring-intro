# The AGB Gazette

Portfolio site for **Gelo Baring** — knowledge systems, help centers, client websites, and
front-end work across 2015–2026.

The site is a four-page broadsheet built with plain HTML, CSS, and JavaScript. No framework,
no build step, no runtime dependencies.

Live site: <https://gelogabz.github.io/gelobaring-intro/>

## Pages

| Page                                        | What it covers                                                                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [Portfolio](index.html)                     | Highlights, career, skills, toolkit, training, and contact                                        |
| [Case Studies](case-studies.html)           | Four 2026 knowledge-system projects, earlier client work, engineering notes, evidence, and limits |
| [KM Standards](km-standards-alignment.html) | ISO 30401, CKM/MCKM, ITIL 4, KCS, and APQC mapped against the work, with limits stated up front   |
| [Off the Clock](photography.html)           | Nine photographs, one per subject, plus a handoff to the field journal and an after-hours essay   |

## Run it

```sh
python3 -m http.server 8000
# http://localhost:8000
```

Opening `index.html` directly works too. A local server keeps relative paths honest and makes
cross-document page transitions behave like production.

## Test it

```sh
npm install
npx playwright install chromium
npm test
```

The suite starts its own server and checks links, assets, semantic structure, responsive
overflow, accessibility, the theme toggle, the contents drawer, the lightbox, the
no-JavaScript fallback, and print styles.

## Notes

- Employers are anonymized. Client sites are named and linked because they are public work.
- Repository links are not published; the footer says links are shared on request.
- The palette, type families, and newspaper structure are intentional.
- Off the Clock links out to **LeaveNothing** (<https://gelogabz.github.io/leavenothing-blog/>),
  a separate Astro site that holds the full photo archive and the essays. The portfolio page is
  a curated front door; the journal is the archive. The journal links back in its footer.

Architecture, content map, design tokens, publishing steps, and accessibility notes live in
[SITE-GUIDE.md](SITE-GUIDE.md).
