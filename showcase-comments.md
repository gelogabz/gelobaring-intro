# Portfolio Showcase Strategy

This document outlines a strategy for presenting technical and product prototyping work. The core philosophy: shift focus from asserting final, massive outcomes to demonstrating thoughtful process, acknowledging trade-offs, and providing concrete evidence for every claim.

## I. Narrative Strategy: Honesty Over Assertion

**Goal:** Don't make claims that collapse under scrutiny. Be honest about scope and process.

### 🚫 What to avoid

- Specific numbers you can't source reliably (e.g. "19 pipeline runs")
- Superlatives implying enterprise-level quality you can't prove (e.g. "production-grade")
- Claiming management or scope beyond your direct contribution (e.g. "managed a team")
- Inventing data when you lack instrumentation — state the lack of instrumentation instead

### ✅ What to say instead

Reframe accomplishments around process and design choices:

- Instead of "Built an automated AI pipeline" → "Designed and piloted an AI content-operations model"
- Instead of claiming specific feature counts or standards adherence → focus on design intent and trade-offs
- **Highlight iteration:** frame early missteps (e.g. three persona systems) as a self-inflicted cost that informed later design decisions

## II. Handling Follow-up Questions

Prepare honest, specific answers for common challenges:

| Challenge                        | Recommended honest response                                                                                                                                                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Why no tests?"                  | Acknowledge the trade-off. For a single-author content site, iteration speed was prioritized. Detail the substitute guardrails (schema rules, runtime guards) and the future steps you'd take now (CI validation, Playwright smoke tests, data integrity checks). |
| "Why vanilla JS?"                | Justify by context. No shared state or large build system meant pushing to `main` allowed immediate, deployable iteration. Acknowledge the debt: hand-rolled routing and rendering is a trade-off for speed.                                                      |
| "What would you do differently?" | Pick two points that show meta-cognition: (1) prioritizing a canonical taxonomy before building the pipeline, to avoid rework; (2) implementing instrumentation from Day 1, so enablement impact could be measured rather than asserted.                          |

## III. Evidence Management & Discretion

**Goal:** Keep the showcase polished while the workspace stays a controlled internal asset.

### 1. Anonymization and context

- **Remove proprietary names** — company/product names stripped from the public page; reference context generally (e.g. "a B2B SaaS company selling into cloud marketplaces")
- **Collaborators** — refer only to roles ("a designer," "a content lead")
- **Screenshots** — use local copies, replace brand strings before generating visuals

### 2. Repository strategy

- **Public showcase:** publish only the `showcase/` directory — the curated narrative
- **Internal workspace:** keep raw material (`claude-contexts/`, internal strategy docs, full source) private
- **Source code:** internal repos don't need anonymizing, but manage external links carefully so you don't leak internal strategy or unredacted docs

### 3. Pre-send checklist

1. Verify all email/LinkedIn/GitHub links
2. Check canonical links (`og:url`, `og:image`) match the final live structure
3. Test on different screen sizes (1440px / 390px) and check PDF legibility
4. Do a screen-reader and keyboard-only accessibility pass

## IV. Strengthening Your Portfolio (Next Steps)

1. **Add measured outcomes** — even small metrics help: "Reduced repeat questions in the enablement channel by X%," "Used in onboarding for N new hires"
2. **Provide code context** — for engineering roles, include a second comparison derivation or explicit code sample showing the logic that led to the final product
3. **Frontload instructional design** — for enablement roles, lead with curriculum/instructional artifacts (AWS course mapping, training modules) as clearest evidence
4. **Keep the "How I Work" block** — it ties all the projects together methodologically
