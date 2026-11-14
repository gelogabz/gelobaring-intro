/* ==========================================================================
   photography.js — content for the Off the Clock page
   Rendered into <main id="main"> by js/render.js. Each part is one top-level
   block from the page; edit copy here, not in the HTML shell.
   ========================================================================== */

window.PAGES = window.PAGES || {};

window.PAGES["photography"] = {
  parts: [
    `<section class="lead" aria-labelledby="lead-headline">
                    <div class="lead__main">
                        <h1 id="lead-headline">I go up for the light.</h1>
                        <p class="hero-deck">
                            Landscapes, coastlines, and the occasional person in
                            frame. These are the photos I take when nobody is
                            paying me to take them: mountains, beaches, and the
                            long way between them, usually before sunrise.
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
                            <a class="btn btn--primary" href="#gallery">Jump to the gallery</a>
                            <a class="btn" href="case-studies.html">Read the case studies</a>
                        </div>
                    </div>

                    <aside class="lead__aside" aria-label="At a glance">
                        <img class="signature" src="assets/signature.png" alt="Gelo Baring signature" width="400" height="68" decoding="async">

                        <div class="stat-box">
                            <p class="box-label">By the numbers</p>
                            <div class="stats" role="list">
                                <div class="stat" role="listitem">
                                    <b>35</b><span>Frames on this page</span>
                                </div>
                                <div class="stat" role="listitem">
                                    <b>10</b><span>Years, 2017–2026</span>
                                </div>
                                <div class="stat" role="listitem">
                                    <b>0</b><span>Briefs or client notes</span>
                                </div>
                                <div class="stat" role="listitem">
                                    <b>1</b><span>Camera, always</span>
                                </div>
                            </div>
                        </div>

                        <div class="notice-box">
                            <p class="box-label">A note from the desk</p>
                            <p>
                                This is the fun page. The work lives in the
                                portfolio.
                            </p>
                            <a href="index.html">Back to the portfolio →</a>
                        </div>
                    </aside>
                </section>`,

    `<section class="section" id="gallery">
                    <span class="section-num">01</span>
                    <h2>The picture desk.</h2>
                    <p class="lede mb-5">
                        Thirty-five frames from 2017 to 2026. No captions longer
                        than a breath.
                    </p>

                    <!-- LEAD PLATE -->
                    <figure class="plate plate--lead">
                        <a class="plate__link" href="assets/photography/01-sea-of-clouds.jpg" data-lightbox="" data-caption="P. 01 — Sea of clouds · Philippines · 2017">
                            <picture>
                                <source type="image/webp" srcset="
                                        assets/photography/01-sea-of-clouds-800.webp  800w,
                                        assets/photography/01-sea-of-clouds.webp     1600w
                                    " sizes="(min-width: 900px) 58vw, 92vw">
                                <img src="assets/photography/01-sea-of-clouds-800.jpg" srcset="
                                        assets/photography/01-sea-of-clouds-800.jpg  800w,
                                        assets/photography/01-sea-of-clouds.jpg     1600w
                                    " sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A ridge line rising out of a sea of clouds at dawn, with grass in the foreground." loading="eager" decoding="async">
                            </picture>
                        </a>
                        <figcaption class="plate__caption">
                            <span class="plate__num">P. 01 · Featured plate</span>
                            <span class="plate__title">Sea of clouds</span>
                            <span class="plate__meta">Philippines · 2017</span>
                            <span class="plate__note">The reason for the 4 a.m. start.</span>
                        </figcaption>
                    </figure>

                    <div class="divider-top">
                        <p class="box-label">More plates</p>
                    </div>

                    <div class="masonry">
                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/02-first-light.jpg" data-lightbox="" data-caption="P. 02 — First light · Philippines · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/02-first-light-800.webp  800w,
                                            assets/photography/02-first-light.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/02-first-light-800.jpg" srcset="
                                            assets/photography/02-first-light-800.jpg  800w,
                                            assets/photography/02-first-light.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="The sun breaking over a range of green mountains, with a hiker silhouetted in the grass." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 02</span>
                                <span class="plate__title">First light</span>
                                <span class="plate__meta">Philippines · 2018</span>
                                <span class="plate__note">The ridge, before the trail gets
                                    busy.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/03-last-light.jpg" data-lightbox="" data-caption="P. 03 — Last light · Philippines · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/03-last-light-800.webp  800w,
                                            assets/photography/03-last-light.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/03-last-light-800.jpg" srcset="
                                            assets/photography/03-last-light-800.jpg  800w,
                                            assets/photography/03-last-light.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1199" alt="A calm beach at sunset with footprints in the wet sand and the sun low over the water." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 03</span>
                                <span class="plate__title">Last light</span>
                                <span class="plate__meta">Philippines · 2018</span>
                                <span class="plate__note">Low tide, and no one else around.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/04-morning-ridge.jpg" data-lightbox="" data-caption="P. 04 — Morning ridge · Philippines · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/04-morning-ridge-800.webp  800w,
                                            assets/photography/04-morning-ridge.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/04-morning-ridge-800.jpg" srcset="
                                            assets/photography/04-morning-ridge-800.jpg  800w,
                                            assets/photography/04-morning-ridge.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A grassy ridge in the foreground and layered mountain ridges fading into a pale morning sky." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 04</span>
                                <span class="plate__title">Morning ridge</span>
                                <span class="plate__meta">Philippines · 2018</span>
                                <span class="plate__note">Grass, ridge lines, and the last of the
                                    morning haze.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/05-pines-in-fog.jpg" data-lightbox="" data-caption="P. 05 — Pines in fog · Philippines · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/05-pines-in-fog-800.webp  800w,
                                            assets/photography/05-pines-in-fog.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/05-pines-in-fog-800.jpg" srcset="
                                            assets/photography/05-pines-in-fog-800.jpg  800w,
                                            assets/photography/05-pines-in-fog.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="Pine trees emerging from fog above a grassy slope." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 05</span>
                                <span class="plate__title">Pines in fog</span>
                                <span class="plate__meta">Philippines · 2018</span>
                                <span class="plate__note">The mountain kept its own weather.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/06-terraces.jpg" data-lightbox="" data-caption="P. 06 — Terraces · Philippines · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/06-terraces-800.webp  800w,
                                            assets/photography/06-terraces.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/06-terraces-800.jpg" srcset="
                                            assets/photography/06-terraces-800.jpg  800w,
                                            assets/photography/06-terraces.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="Terraced fields stepping down a mountainside under a beam of morning light." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 06</span>
                                <span class="plate__title">Terraces</span>
                                <span class="plate__meta">Philippines · 2018</span>
                                <span class="plate__note">Morning light on the steps.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/07-lake-dusk.jpg" data-lightbox="" data-caption="P. 07 — Lake dusk · Philippines · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/07-lake-dusk-800.webp  800w,
                                            assets/photography/07-lake-dusk.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/07-lake-dusk-800.jpg" srcset="
                                            assets/photography/07-lake-dusk-800.jpg  800w,
                                            assets/photography/07-lake-dusk.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A lake at dusk with a dark shoreline and orange light on the horizon." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 07</span>
                                <span class="plate__title">Lake dusk</span>
                                <span class="plate__meta">Philippines · 2018</span>
                                <span class="plate__note">The last color before the walk back.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/08-crater-lake.jpg" data-lightbox="" data-caption="P. 08 — Crater lake · Philippines · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/08-crater-lake-800.webp  800w,
                                            assets/photography/08-crater-lake.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/08-crater-lake-800.jpg" srcset="
                                            assets/photography/08-crater-lake-800.jpg  800w,
                                            assets/photography/08-crater-lake.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1200" height="1600" alt="A person sitting on a grassy slope above a green crater lake ringed by mountains." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 08</span>
                                <span class="plate__title">Crater lake</span>
                                <span class="plate__meta">Philippines · 2018</span>
                                <span class="plate__note">A long way down, a longer way out.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/09-ridge-first-light.jpg" data-lightbox="" data-caption="P. 09 — Ridge at first light · Philippines · 2022">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/09-ridge-first-light-800.webp  800w,
                                            assets/photography/09-ridge-first-light.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/09-ridge-first-light-800.jpg" srcset="
                                            assets/photography/09-ridge-first-light-800.jpg  800w,
                                            assets/photography/09-ridge-first-light.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A jagged mountain ridge lit by early morning sun under a wide sky." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 09</span>
                                <span class="plate__title">Ridge at first light</span>
                                <span class="plate__meta">Philippines · 2022</span>
                                <span class="plate__note">The reward for the early alarm.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/10-dusk-ridge.jpg" data-lightbox="" data-caption="P. 10 — Dusk on the ridge · Philippines · 2018">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/10-dusk-ridge-800.webp  800w,
                                            assets/photography/10-dusk-ridge.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/10-dusk-ridge-800.jpg" srcset="
                                            assets/photography/10-dusk-ridge-800.jpg  800w,
                                            assets/photography/10-dusk-ridge.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="Layered hills fading into a sunset sky." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 10</span>
                                <span class="plate__title">Dusk on the ridge</span>
                                <span class="plate__meta">Philippines · 2018</span>
                                <span class="plate__note">Layers of hills, losing the light.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/11-morning-sun.jpg" data-lightbox="" data-caption="P. 11 — Morning, overexposed · Philippines · 2019">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/11-morning-sun-800.webp  800w,
                                            assets/photography/11-morning-sun.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/11-morning-sun-800.jpg" srcset="
                                            assets/photography/11-morning-sun-800.jpg  800w,
                                            assets/photography/11-morning-sun.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="The sun shining through thin clouds above a dark tree line." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 11</span>
                                <span class="plate__title">Morning, overexposed</span>
                                <span class="plate__meta">Philippines · 2019</span>
                                <span class="plate__note">The sun did not want its picture
                                    taken.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/12-holding-sun.jpg" data-lightbox="" data-caption="P. 12 — Holding the sun · Philippines · 2019">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/12-holding-sun-800.webp  800w,
                                            assets/photography/12-holding-sun.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/12-holding-sun-800.jpg" srcset="
                                            assets/photography/12-holding-sun-800.jpg  800w,
                                            assets/photography/12-holding-sun.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A silhouetted person holding up one hand as if holding the sun." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 12</span>
                                <span class="plate__title">Holding the sun</span>
                                <span class="plate__meta">Philippines · 2019</span>
                                <span class="plate__note">A trick of timing and a very bright
                                    morning.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/13-geometry.jpg" data-lightbox="" data-caption="P. 13 — Geometry, looking up · Philippines · 2021">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/13-geometry-800.webp  800w,
                                            assets/photography/13-geometry.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/13-geometry-800.jpg" srcset="
                                            assets/photography/13-geometry-800.jpg  800w,
                                            assets/photography/13-geometry.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="Looking up into a geodesic dome ceiling of triangular panels and steel struts." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 13</span>
                                <span class="plate__title">Geometry, looking up</span>
                                <span class="plate__meta">Philippines · 2021</span>
                                <span class="plate__note">A ceiling that behaves like a
                                    landscape.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/14-one-palm.jpg" data-lightbox="" data-caption="P. 14 — One palm · Philippines · 2022">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/14-one-palm-800.webp  800w,
                                            assets/photography/14-one-palm.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/14-one-palm-800.jpg" srcset="
                                            assets/photography/14-one-palm-800.jpg  800w,
                                            assets/photography/14-one-palm.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1200" height="1600" alt="A single palm tree standing in tall grass under a blue sky." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 14</span>
                                <span class="plate__title">One palm</span>
                                <span class="plate__meta">Philippines · 2022</span>
                                <span class="plate__note">A tree with the whole valley to
                                    itself.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/15-waterfall.jpg" data-lightbox="" data-caption="P. 15 — Falls after the rain · Philippines · 2022">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/15-waterfall-800.webp  800w,
                                            assets/photography/15-waterfall.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/15-waterfall-800.jpg" srcset="
                                            assets/photography/15-waterfall-800.jpg  800w,
                                            assets/photography/15-waterfall.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A tall waterfall dropping into a pool in a dark green forest." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 15</span>
                                <span class="plate__title">Falls after the rain</span>
                                <span class="plate__meta">Philippines · 2022</span>
                                <span class="plate__note">Worth the wet shoes.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/16-light-through-pines.jpg" data-lightbox="" data-caption="P. 16 — Light through the pines · Philippines · 2022">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/16-light-through-pines-800.webp  800w,
                                            assets/photography/16-light-through-pines.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/16-light-through-pines-800.jpg" srcset="
                                            assets/photography/16-light-through-pines-800.jpg  800w,
                                            assets/photography/16-light-through-pines.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="Sunlight streaming through pine trees onto a fern-covered forest floor." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 16</span>
                                <span class="plate__title">Light through the pines</span>
                                <span class="plate__meta">Philippines · 2022</span>
                                <span class="plate__note">The forest doing the work.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/17-summit.jpg" data-lightbox="" data-caption="P. 17 — Summit, 07:04 · Philippines · 2024">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/17-summit-800.webp  800w,
                                            assets/photography/17-summit.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/17-summit-800.jpg" srcset="
                                            assets/photography/17-summit-800.jpg  800w,
                                            assets/photography/17-summit.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A hiker standing on a narrow ridge at sunrise, with clouds below." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 17</span>
                                <span class="plate__title">Summit, 07:04</span>
                                <span class="plate__meta">Philippines · 2024</span>
                                <span class="plate__note">Cold hands, clear sky.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/18-the-scramble.jpg" data-lightbox="" data-caption="P. 18 — The scramble · Philippines">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/18-the-scramble-800.webp  800w,
                                            assets/photography/18-the-scramble.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/18-the-scramble-800.jpg" srcset="
                                            assets/photography/18-the-scramble-800.jpg  800w,
                                            assets/photography/18-the-scramble.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="900" alt="Two hikers with backpacks climbing between large rocks." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 18</span>
                                <span class="plate__title">The scramble</span>
                                <span class="plate__meta">Philippines</span>
                                <span class="plate__note">Two hikers, one very large rock.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/19-the-lookout.jpg" data-lightbox="" data-caption="P. 19 — The lookout · Philippines">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/19-the-lookout-800.webp  800w,
                                            assets/photography/19-the-lookout.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/19-the-lookout-800.jpg" srcset="
                                            assets/photography/19-the-lookout-800.jpg  800w,
                                            assets/photography/19-the-lookout.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1066" alt="A person standing on a rock outcrop against a pale sky." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 19</span>
                                <span class="plate__title">The lookout</span>
                                <span class="plate__meta">Philippines</span>
                                <span class="plate__note">Standing room only.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/20-water-break.jpg" data-lightbox="" data-caption="P. 20 — Water break · Philippines">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/20-water-break-800.webp  800w,
                                            assets/photography/20-water-break.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/20-water-break-800.jpg" srcset="
                                            assets/photography/20-water-break-800.jpg  800w,
                                            assets/photography/20-water-break.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="900" alt="A silhouetted person drinking from a bottle in front of a bright sun." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 20</span>
                                <span class="plate__title">Water break</span>
                                <span class="plate__meta">Philippines</span>
                                <span class="plate__note">Hydration, with a halo.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/21-the-branch.jpg" data-lightbox="" data-caption="P. 21 — The branch · Philippines">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/21-the-branch-800.webp  800w,
                                            assets/photography/21-the-branch.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/21-the-branch-800.jpg" srcset="
                                            assets/photography/21-the-branch-800.jpg  800w,
                                            assets/photography/21-the-branch.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1600" alt="A person sitting on a twisted branch above a bank of clouds." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 21</span>
                                <span class="plate__title">The branch</span>
                                <span class="plate__meta">Philippines</span>
                                <span class="plate__note">Sitting on the skyline.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/22-bench.jpg" data-lightbox="" data-caption="P. 22 — Bench, with chicken · Philippines">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/22-bench-800.webp  800w,
                                            assets/photography/22-bench.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/22-bench-800.jpg" srcset="
                                            assets/photography/22-bench-800.jpg  800w,
                                            assets/photography/22-bench.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1066" alt="A person sitting on a wooden bench in a rural yard, with a chicken behind them." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 22</span>
                                <span class="plate__title">Bench, with chicken</span>
                                <span class="plate__meta">Philippines</span>
                                <span class="plate__note">The least dramatic photo here, and a
                                    favorite.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/23-low-tide.jpg" data-lightbox="" data-caption="P. 23 — Low tide, last light · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/23-low-tide-800.webp  800w,
                                            assets/photography/23-low-tide.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/23-low-tide-800.jpg" srcset="
                                            assets/photography/23-low-tide-800.jpg  800w,
                                            assets/photography/23-low-tide.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="The sun setting over a wide tidal flat, with dark clouds above and orange light reflected in the shallow water." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 23</span>
                                <span class="plate__title">Low tide, last light</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">The clouds did most of the work.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/24-clouds-building.jpg" data-lightbox="" data-caption="P. 24 — Clouds building · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/24-clouds-building-800.webp  800w,
                                            assets/photography/24-clouds-building.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/24-clouds-building-800.jpg" srcset="
                                            assets/photography/24-clouds-building-800.jpg  800w,
                                            assets/photography/24-clouds-building.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A wall of towering white cumulus clouds against a blue sky, with treetops along the bottom edge." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 24</span>
                                <span class="plate__title">Clouds building</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">The forecast said rain. It was right.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/25-stone-chess.jpg" data-lightbox="" data-caption="P. 25 — Stone chess · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/25-stone-chess-800.webp  800w,
                                            assets/photography/25-stone-chess.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/25-stone-chess-800.jpg" srcset="
                                            assets/photography/25-stone-chess-800.jpg  800w,
                                            assets/photography/25-stone-chess.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A homemade chess set on a stone table, with pieces painted on smooth stones, beside a lake." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 25</span>
                                <span class="plate__title">Stone chess</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">Someone carved a whole set. I just took the
                                    picture.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/26-from-the-hut.jpg" data-lightbox="" data-caption="P. 26 — From the hut · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/26-from-the-hut-800.webp  600w,
                                            assets/photography/26-from-the-hut.webp     1200w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/26-from-the-hut-800.jpg" srcset="
                                            assets/photography/26-from-the-hut-800.jpg  600w,
                                            assets/photography/26-from-the-hut.jpg     1200w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1200" height="1600" alt="A view from inside a bamboo beach hut, looking out through a triangular opening to the sea." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 26</span>
                                <span class="plate__title">From the hut</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">Bamboo floor, blue window.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/27-rain-lilies.jpg" data-lightbox="" data-caption="P. 27 — Rain lilies · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/27-rain-lilies-800.webp  600w,
                                            assets/photography/27-rain-lilies.webp     1200w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/27-rain-lilies-800.jpg" srcset="
                                            assets/photography/27-rain-lilies-800.jpg  600w,
                                            assets/photography/27-rain-lilies.jpg     1200w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1200" height="1600" alt="A row of white rain lilies with yellow centers growing along a stone path." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 27</span>
                                <span class="plate__title">Rain lilies</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">A whole border of them, just off the
                                    path.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/28-sorsogon-capitol.jpg" data-lightbox="" data-caption="P. 28 — Sorsogon Sports Arena · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/28-sorsogon-capitol-800.webp  800w,
                                            assets/photography/28-sorsogon-capitol.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/28-sorsogon-capitol-800.jpg" srcset="
                                            assets/photography/28-sorsogon-capitol-800.jpg  800w,
                                            assets/photography/28-sorsogon-capitol.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="The curved facade of the Sorsogon Sports Arena, with arches and columns under heavy clouds." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 28</span>
                                <span class="plate__title">Sorsogon Sports Arena</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">Suddenly nostalgic for Gladiator.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/29-mayon-cloud.jpg" data-lightbox="" data-caption="P. 29 — Mayon, mostly cloud · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/29-mayon-cloud-800.webp  640w,
                                            assets/photography/29-mayon-cloud.webp     1281w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/29-mayon-cloud-800.jpg" srcset="
                                            assets/photography/29-mayon-cloud-800.jpg  640w,
                                            assets/photography/29-mayon-cloud.jpg     1281w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1281" height="1600" alt="The cone of Mayon volcano rising above a layer of cloud, framed by dark trees." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 29</span>
                                <span class="plate__title">Mayon, mostly cloud</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">You wait for the cloud to move. It
                                    doesn’t.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/30-mayon-clear.jpg" data-lightbox="" data-caption="P. 30 — Mayon, clear · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/30-mayon-clear-800.webp  800w,
                                            assets/photography/30-mayon-clear.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/30-mayon-clear-800.jpg" srcset="
                                            assets/photography/30-mayon-clear-800.jpg  800w,
                                            assets/photography/30-mayon-clear.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="Mayon volcano under an overcast sky, its slopes green and dark, with cloud caught at the summit." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 30</span>
                                <span class="plate__title">Mayon, clear</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">The postcard view, finally.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/31-beach-walk.jpg" data-lightbox="" data-caption="P. 31 — Beach walk · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/31-beach-walk-800.webp  800w,
                                            assets/photography/31-beach-walk.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/31-beach-walk-800.jpg" srcset="
                                            assets/photography/31-beach-walk-800.jpg  800w,
                                            assets/photography/31-beach-walk.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A woman walking two small dogs along a beach, with Mayon volcano across the water." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 31</span>
                                <span class="plate__title">Beach walk</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">Two dogs, one volcano.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/32-water-lily.jpg" data-lightbox="" data-caption="P. 32 — Water lily · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/32-water-lily-800.webp  600w,
                                            assets/photography/32-water-lily.webp     1200w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/32-water-lily-800.jpg" srcset="
                                            assets/photography/32-water-lily-800.jpg  600w,
                                            assets/photography/32-water-lily.jpg     1200w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1200" height="1600" alt="A single white water lily surrounded by broad green lily pads." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 32</span>
                                <span class="plate__title">Water lily</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">A single flower in a lot of green.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/33-past-the-break.jpg" data-lightbox="" data-caption="P. 33 — Past the break · Philippines · 2025">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/33-past-the-break-800.webp  800w,
                                            assets/photography/33-past-the-break.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/33-past-the-break-800.jpg" srcset="
                                            assets/photography/33-past-the-break-800.jpg  800w,
                                            assets/photography/33-past-the-break.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A person sitting in the surf with their back to the camera, waves breaking toward shore." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 33</span>
                                <span class="plate__title">Past the break</span>
                                <span class="plate__meta">Philippines · 2025</span>
                                <span class="plate__note">The waves were warmer than the air.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/34-branches-at-dusk.jpg" data-lightbox="" data-caption="P. 34 — Branches at dusk · Philippines · 2026">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/34-branches-at-dusk-800.webp  800w,
                                            assets/photography/34-branches-at-dusk.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/34-branches-at-dusk-800.jpg" srcset="
                                            assets/photography/34-branches-at-dusk-800.jpg  800w,
                                            assets/photography/34-branches-at-dusk.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="Dark branches silhouetted against a dusk sky, with pink and orange clouds behind them." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 34</span>
                                <span class="plate__title">Branches at dusk</span>
                                <span class="plate__meta">Philippines · 2026</span>
                                <span class="plate__note">The tree did the framing.</span>
                            </figcaption>
                        </figure>

                        <figure class="plate">
                            <a class="plate__link" href="assets/photography/35-last-walk.jpg" data-lightbox="" data-caption="P. 35 — Last walk · Philippines · 2026">
                                <picture>
                                    <source type="image/webp" srcset="
                                            assets/photography/35-last-walk-800.webp  800w,
                                            assets/photography/35-last-walk.webp     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw">
                                    <img src="assets/photography/35-last-walk-800.jpg" srcset="
                                            assets/photography/35-last-walk-800.jpg  800w,
                                            assets/photography/35-last-walk.jpg     1600w
                                        " sizes="(min-width: 1060px) 30vw, (min-width: 700px) 45vw, 92vw" width="1600" height="1200" alt="A person walking along a wet beach at sunset, with pink and orange light reflected in the sand." loading="lazy" decoding="async">
                                </picture>
                            </a>
                            <figcaption class="plate__caption">
                                <span class="plate__num">P. 35</span>
                                <span class="plate__title">Last walk</span>
                                <span class="plate__meta">Philippines · 2026</span>
                                <span class="plate__note">The tide went out and took the light with
                                    it.</span>
                            </figcaption>
                        </figure>
                    </div>
                </section>`,

    `<section class="section" id="notes">
                    <span class="section-num">02</span>
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
                                    Philippines between 2017 and 2026.
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
