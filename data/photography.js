/* ==========================================================================
   photography.js — content for the Off the Clock page
   Rendered into <main id="main"> by js/render.js. Each part is one top-level
   block from the page; edit copy here, not in the HTML shell.

   This page is a curated front door, not the archive. It shows nine plates,
   one per subject in the LeaveNothing journal taxonomy, then hands the reader
   off to the journal for the full set.
   ========================================================================== */

window.PAGES = window.PAGES || {};

window.PAGES["photography"] = {
  parts: [
    `<section class="lead" aria-labelledby="lead-headline">
                    <header class="lead__main">
                        <h1 id="lead-headline">I go up for the light.</h1>
                        <p class="hero-deck">
                            Landscapes, coastlines, and the occasional person in
                            frame. These are the photos I take when nobody is
                            paying me to take them: mountains, beaches, and the
                            long way between them, usually before sunrise. Nine
                            are here. The rest live in the field journal.
                        </p>
                        <p class="lead__byline">
                            <picture class="byline-avatar">
                                <source type="image/webp" srcset="
                                        assets/gelo-avatar-80.webp  1x,
                                        assets/gelo-avatar-160.webp 2x
                                    ">
                                <img src="assets/gelo-avatar-80.jpg" srcset="
                                        assets/gelo-avatar-80.jpg  1x,
                                        assets/gelo-avatar-160.jpg 2x
                                    " width="32" height="32" alt="" decoding="async">
                            </picture>
                            <span>By Gelo Baring</span>
                            <span>Philippines · UTC+8</span>
                            <span>2017–2026</span>
                        </p>
                        <div class="hero-cta">
                            <a class="btn btn--primary" href="#gallery">Jump to the plates</a>
                            <a class="btn" href="https://gelogabz.github.io/leavenothing-blog/" target="_blank" rel="noopener">Read the field journal<span class="visually-hidden"> (opens in a new tab)</span> <span aria-hidden="true">↗</span></a>
                        </div>
                    </header>

                    <aside class="lead__aside" aria-label="At a glance">
                        <img class="signature" src="assets/signature.png" alt="Gelo Baring signature" width="400" height="68" decoding="async">

                        <div class="stat-box">
                            <p class="box-label">By the numbers</p>
                            <ul class="stats">
                                <li class="stat">
                                    <b>9</b><span>Plates on this page</span>
                                </li>
                                <li class="stat">
                                    <b>10</b><span>Years, 2017–2026</span>
                                </li>
                                <li class="stat">
                                    <b>0</b><span>Briefs or client notes</span>
                                </li>
                                <li class="stat">
                                    <b>1</b><span>Camera, always</span>
                                </li>
                            </ul>
                        </div>

                        <div class="notice-box">
                            <p class="box-label">A note from the desk</p>
                            <p>
                                This is the fun page. The work lives in the
                                portfolio, and the full photo archive lives in
                                the field journal.
                            </p>
                            <div class="notice-box__links">
                                <a href="index.html">Back to the portfolio →</a>
                                <a href="https://gelogabz.github.io/leavenothing-blog/photography/" target="_blank" rel="noopener">Photo archive<span class="visually-hidden"> (opens in a new tab)</span> →</a>
                            </div>
                        </div>
                    </aside>
                </section>`,

    `<section class="section" id="gallery">
                    <span class="section-num">01</span>
                    <h2>Nine frames, one for each subject.</h2>
                    <p class="lede mb-5">
                        One photograph per subject the journal covers: mountains,
                        forest, coast, water, plants, people, built, churches,
                        and sky. Tap any plate to open it full size.
                    </p>

                    <div class="plates-grid">
                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/01-sea-of-clouds.jpg" data-lightbox="" data-caption="P. 01 — Sea of clouds · Mountains · 2017">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/01-sea-of-clouds-800.webp  800w,
                                            assets/photography/01-sea-of-clouds.webp     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw">
                                    <img src="assets/photography/01-sea-of-clouds-800.jpg" srcset="
                                            assets/photography/01-sea-of-clouds-800.jpg  800w,
                                            assets/photography/01-sea-of-clouds.jpg     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw" width="1600" height="1200" alt="A ridge line rising out of a sea of clouds at dawn, with grass in the foreground." loading="eager" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 01</span>
                                <span class="plate__title">Sea of clouds</span>
                                <span class="plate__meta">Mountains · Philippines · 2017</span>
                                <span class="plate__note">The reason for the 4 a.m. start.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/05-pines-in-fog.jpg" data-lightbox="" data-caption="P. 02 — Pines in fog · Forest · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/05-pines-in-fog-800.webp  800w,
                                            assets/photography/05-pines-in-fog.webp     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw">
                                    <img src="assets/photography/05-pines-in-fog-800.jpg" srcset="
                                            assets/photography/05-pines-in-fog-800.jpg  800w,
                                            assets/photography/05-pines-in-fog.jpg     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw" width="1600" height="1200" alt="Pine trees emerging from fog above a grassy slope." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 02</span>
                                <span class="plate__title">Pines in fog</span>
                                <span class="plate__meta">Forest · Philippines · 2018</span>
                                <span class="plate__note">The mountain kept its own weather.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/06-terraces.jpg" data-lightbox="" data-caption="P. 03 — Terraces · People · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/06-terraces-800.webp  800w,
                                            assets/photography/06-terraces.webp     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw">
                                    <img src="assets/photography/06-terraces-800.jpg" srcset="
                                            assets/photography/06-terraces-800.jpg  800w,
                                            assets/photography/06-terraces.jpg     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw" width="1600" height="1200" alt="Terraced fields stepping down a mountainside under a beam of morning light." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 03</span>
                                <span class="plate__title">Terraces</span>
                                <span class="plate__meta">People · Philippines · 2018</span>
                                <span class="plate__note">Morning light on the steps.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/08-crater-lake.jpg" data-lightbox="" data-caption="P. 04 — Crater lake · Water · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/08-crater-lake-800.webp  600w,
                                            assets/photography/08-crater-lake.webp     1200w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw">
                                    <img src="assets/photography/08-crater-lake-800.jpg" srcset="
                                            assets/photography/08-crater-lake-800.jpg  600w,
                                            assets/photography/08-crater-lake.jpg     1200w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw" width="1200" height="1600" alt="A person sitting on a grassy slope above a green crater lake ringed by mountains." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 04</span>
                                <span class="plate__title">Crater lake</span>
                                <span class="plate__meta">Water · Philippines · 2018</span>
                                <span class="plate__note">A long way down, a longer way out.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/23-low-tide.jpg" data-lightbox="" data-caption="P. 05 — Low tide, last light · Coast · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/23-low-tide-800.webp  800w,
                                            assets/photography/23-low-tide.webp     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw">
                                    <img src="assets/photography/23-low-tide-800.jpg" srcset="
                                            assets/photography/23-low-tide-800.jpg  800w,
                                            assets/photography/23-low-tide.jpg     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw" width="1600" height="1200" alt="The sun setting over a wide tidal flat, with dark clouds above and orange light reflected in the shallow water." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 05</span>
                                <span class="plate__title">Low tide, last light</span>
                                <span class="plate__meta">Coast · Philippines · 2025</span>
                                <span class="plate__note">The clouds did most of the work.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/27-rain-lilies.jpg" data-lightbox="" data-caption="P. 06 — Rain lilies · Plants · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/27-rain-lilies-800.webp  600w,
                                            assets/photography/27-rain-lilies.webp     1200w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw">
                                    <img src="assets/photography/27-rain-lilies-800.jpg" srcset="
                                            assets/photography/27-rain-lilies-800.jpg  600w,
                                            assets/photography/27-rain-lilies.jpg     1200w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw" width="1200" height="1600" alt="A row of white rain lilies with yellow centers growing along a stone path." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 06</span>
                                <span class="plate__title">Rain lilies</span>
                                <span class="plate__meta">Plants · Philippines · 2025</span>
                                <span class="plate__note">A whole border of them, just off the path.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/28-sorsogon-capitol.jpg" data-lightbox="" data-caption="P. 07 — Sorsogon Sports Arena · Built · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/28-sorsogon-capitol-800.webp  800w,
                                            assets/photography/28-sorsogon-capitol.webp     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw">
                                    <img src="assets/photography/28-sorsogon-capitol-800.jpg" srcset="
                                            assets/photography/28-sorsogon-capitol-800.jpg  800w,
                                            assets/photography/28-sorsogon-capitol.jpg     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw" width="1600" height="1200" alt="The curved facade of the Sorsogon Sports Arena, with arches and columns under heavy clouds." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 07</span>
                                <span class="plate__title">Sorsogon Sports Arena</span>
                                <span class="plate__meta">Built · Philippines · 2025</span>
                                <span class="plate__note">Suddenly nostalgic for Gladiator.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/34-branches-at-dusk.jpg" data-lightbox="" data-caption="P. 08 — Branches at dusk · Sky · 2026">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/34-branches-at-dusk-800.webp  800w,
                                            assets/photography/34-branches-at-dusk.webp     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw">
                                    <img src="assets/photography/34-branches-at-dusk-800.jpg" srcset="
                                            assets/photography/34-branches-at-dusk-800.jpg  800w,
                                            assets/photography/34-branches-at-dusk.jpg     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw" width="1600" height="1200" alt="Dark branches silhouetted against a dusk sky, with pink and orange clouds behind them." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 08</span>
                                <span class="plate__title">Branches at dusk</span>
                                <span class="plate__meta">Sky · Philippines · 2026</span>
                                <span class="plate__note">The tree did the framing.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/40-daraga-church-mayon.jpg" data-lightbox="" data-caption="P. 09 — Daraga Church and Mayon · Churches · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/40-daraga-church-mayon-800.webp  800w,
                                            assets/photography/40-daraga-church-mayon.webp     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw">
                                    <img src="assets/photography/40-daraga-church-mayon-800.jpg" srcset="
                                            assets/photography/40-daraga-church-mayon-800.jpg  800w,
                                            assets/photography/40-daraga-church-mayon.jpg     1600w
                                        " sizes="(min-width: 960px) 30vw, (min-width: 620px) 45vw, 92vw" width="1600" height="1200" alt="The dark volcanic-stone facade and bell tower of Daraga Church on the left, with Mayon volcano rising under heavy cloud on the right." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 09</span>
                                <span class="plate__title">Daraga Church and Mayon</span>
                                <span class="plate__meta">Churches · Philippines · 2025</span>
                                <span class="plate__note">Stone, and the mountain it was built under.</span>
                            </figcaption>
                        </figure>
                    </div>
                </section>`,

    `<section class="section" id="journal">
                    <span class="section-num">02</span>
                    <h2>The rest live in the field journal.</h2>
                    <p class="lede mb-4">
                        LeaveNothing is where the full collection lives: the
                        whole archive, filterable by subject, alongside essays
                        about Philippine forests, coasts, wildlife, and the
                        people looking after them.
                    </p>

                    <div class="grid-2">
                        <div>
                            <p>
                                The journal runs on the same photographs on this
                                page and then some, plus writing that the
                                portfolio has no room for. It is built with
                                Astro and TypeScript: content collections with a
                                validated schema, responsive WebP through Sharp,
                                an RSS feed, a sitemap, and a GitHub Actions
                                deploy.
                            </p>
                            <p class="small muted">
                                One-way for now. The journal is the photo and
                                essay home; the portfolio is the work.
                            </p>
                        </div>
                        <div>
                            <p class="box-label">Open the journal</p>
                            <ul class="pills">
                                <li class="pill pill--accent">Photo archive</li>
                                <li class="pill">Essays</li>
                                <li class="pill">Topics</li>
                                <li class="pill">Resources</li>
                                <li class="pill">RSS</li>
                            </ul>
                            <a class="btn btn--primary mt-3" href="https://gelogabz.github.io/leavenothing-blog/" target="_blank" rel="noopener">Read the field journal<span class="visually-hidden"> (opens in a new tab)</span> <span aria-hidden="true">↗</span></a>
                        </div>
                    </div>
                </section>`,

    `<section class="section" id="notes">
                    <span class="section-num">03</span>
                    <h2>The rest of the daylight.</h2>
                    <p class="lede mb-4">
                        The camera is only part of it. The rest is music, books,
                        games, and the long way to a coastline.
                    </p>

                    <div class="field-notes">
                        <p>
                            I spend my working life making things legible:
                            glossaries, help centers, release notes. Photography
                            is the opposite. I point the camera at something and
                            try not to explain it.
                        </p>
                        <p>
                            Most of these were taken on the way somewhere: a
                            summit, a coastline, a road between the two. The
                            weather did most of the work. I just had to be there
                            early enough.
                        </p>
                        <p>
                            There is no client, no brief, and no analytics. If a
                            photo is here, it is because I still like looking at
                            it.
                        </p>
                    </div>

                    <blockquote class="pullquote">
                        <p>
                            The weather did most of the work. I just had to be
                            there early enough.
                        </p>
                    </blockquote>

                    <div class="divider-top">
                        <p class="eyebrow">Away from the desk</p>
                        <div class="interests">
                            <article class="interest">
                                <h3>Music</h3>
                                <p>
                                    Math rock, post-hardcore, Midwest emo,
                                    lo-fi.
                                </p>
                            </article>
                            <article class="interest">
                                <h3>Books</h3>
                                <p>Tolkien and the classics.</p>
                            </article>
                            <article class="interest">
                                <h3>Games</h3>
                                <p>
                                    Single-player RPGs: Skyrim, God of War,
                                    Assassin’s Creed, Diablo. Minecraft is
                                    the current jam.
                                </p>
                            </article>
                            <article class="interest">
                                <h3>Travel</h3>
                                <p>Mountains, beaches, and the camera.</p>
                            </article>
                        </div>
                    </div>

                    <div class="divider-top">
                        <div class="grid-2">
                            <div>
                                <p class="box-label">The small print</p>
                                <p class="small muted mb-0">
                                    All photographs are mine. Taken in the
                                    Philippines between 2017 and 2026. The full
                                    archive lives in the
                                    <a href="https://gelogabz.github.io/leavenothing-blog/photography/" target="_blank" rel="noopener">field journal<span class="visually-hidden"> (opens in a new tab)</span></a>.
                                </p>
                            </div>
                            <div>
                                <p class="box-label">Want a print?</p>
                                <p class="small muted">
                                    Email
                                    <a href="mailto:gabrielgelo93@gmail.com">gabrielgelo93@gmail.com</a>
                                    with the plate number.
                                </p>
                                <a class="btn mt-3" href="mailto:gabrielgelo93@gmail.com?subject=Print%20inquiry%20%E2%80%94%20Picture%20Desk">Ask about a print</a>
                            </div>
                        </div>
                    </div>
                </section>`,
  ],
};
