/* ==========================================================================
   km-standards-alignment.js — content for the KM standards page
   Rendered into <main id="main"> by js/render.js. Each part is one top-level
   block from the page; edit copy here, not in the HTML shell.
   ========================================================================== */

window.PAGES = window.PAGES || {};

window.PAGES["km-standards-alignment"] = {
  parts: [
    `<section class="lead lead--report" aria-labelledby="lead-headline">
                    <header class="lead__main">
                        <h1 id="lead-headline">How the work maps to KM standards.</h1>
                        <p class="hero-deck">
                            I do not hold a knowledge management certification.
                            This page maps five frameworks — ISO 30401,
                            CKM/MCKM, ITIL 4, KCS, and APQC — against the work
                            on this site, with the gaps stated up front rather
                            than buried at the end.
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
                            <span>2015–2026</span>
                        </p>
                        <div class="hero-cta">
                            <a class="btn btn--primary" href="index.html">Back to portfolio</a>
                            <a class="btn" href="mailto:gabrielgelo93@gmail.com">Email me</a>
                        </div>
                    </header>

                    <aside class="lead__aside" aria-label="Inside this edition">
                        <div class="index-box">
                            <p class="box-label">Inside this edition</p>
                            <ol class="edition-index">
                                <li>
                                    <a href="#alignment"><span>01</span> Alignment</a>
                                </li>
                                <li>
                                    <a href="#iso"><span>02</span> ISO 30401</a>
                                </li>
                                <li>
                                    <a href="#ckm"><span>03</span> CKM / MCKM</a>
                                </li>
                                <li>
                                    <a href="#itil"><span>04</span> ITIL 4</a>
                                </li>
                                <li>
                                    <a href="#kcs"><span>05</span> KCS</a>
                                </li>
                                <li>
                                    <a href="#apqc"><span>06</span> APQC</a>
                                </li>
                                <li>
                                    <a href="#limits"><span>07</span> Limits</a>
                                </li>
                            </ol>
                        </div>

                        <div class="notice-box">
                            <p class="box-label">Read the limits first</p>
                            <p>
                                Every row here points to evidence, and every
                                framework has a gap. Section 07 says what the
                                evidence does not cover.
                            </p>
                            <a href="#limits">Skip to the limits →</a>
                        </div>
                    </aside>
                </section>`,

    `<section class="section" id="alignment">
                    <span class="section-num">01</span>
                    <h2>Alignment, not certification.</h2>

                    <div class="measure">
                        <p class="lede">
                            I am not CKM, MCKM, ITIL 4, KCS, or APQC certified.
                            Formal certification is the next step, and this page
                            will change when it happens. Until then it claims
                            alignment, not equivalence: each row names the work
                            that supports it, and each framework keeps its gap.
                        </p>
                    </div>

                    <div class="table-wrap" tabindex="0" role="region" aria-labelledby="alignment-caption">
                        <table>
                            <caption id="alignment-caption">
                                Five frameworks, in one view
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">Framework</th>
                                    <th scope="col">What it is</th>
                                    <th scope="col">Strongest evidence</th>
                                    <th scope="col">Match</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">ISO 30401:2018</th>
                                    <td>
                                        The international management-system
                                        standard for KM, built like ISO 9001.
                                    </td>
                                    <td>
                                        Documented information, operations,
                                        improvement.
                                    </td>
                                    <td>
                                        Strong on systems; no executive mandate.
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">CKM / MCKM</th>
                                    <td>
                                        KM Institute credentials for strategy,
                                        design, and implementation.
                                    </td>
                                    <td>
                                        Taxonomy, capture methods, solo
                                        delivery.
                                    </td>
                                    <td>
                                        Strong on practice; no credential.
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">ITIL 4 KM practice</th>
                                    <td>
                                        KM treated as a formal practice inside
                                        service management.
                                    </td>
                                    <td>
                                        Tooling transitions, structuring,
                                        editorial standards.
                                    </td>
                                    <td>
                                        Strong on tooling; culture change
                                        partial.
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">KCS</th>
                                    <td>
                                        A support methodology: capture in the
                                        solve loop, improve in the evolve loop.
                                    </td>
                                    <td>
                                        Case-driven capture, review gates,
                                        guideline-backed adoption.
                                    </td>
                                    <td>Strongest overall.</td>
                                </tr>
                                <tr>
                                    <th scope="row">APQC KM framework</th>
                                    <td>
                                        Four levers — strategy, process, content
                                        &amp; IT, people &amp; culture — plus a
                                        maturity model.
                                    </td>
                                    <td>Content &amp; IT, process.</td>
                                    <td>
                                        Strong on content; people &amp; culture
                                        partial.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="small muted mt-3">
                        Match means evidence on this site, not a score. Where a
                        row says partial, section 07 explains why.
                    </p>
                </section>`,

    `<section class="section" id="iso">
                    <span class="section-num">02</span>
                    <h2>ISO 30401: a management system, not a checklist.</h2>
                    <p class="lede mb-4">
                        The first global management-system standard for
                        knowledge management, structured like ISO 9001 or
                        27001: context, leadership, planning, support,
                        operation, performance evaluation, improvement. I have
                        worked most of that list. Leadership is the part I have
                        not held.
                    </p>

                    <div class="table-wrap" tabindex="0" role="region" aria-labelledby="iso-caption">
                        <table>
                            <caption id="iso-caption">
                                ISO 30401 areas against the work
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">Area</th>
                                    <th scope="col">What the standard asks for</th>
                                    <th scope="col">What I have done</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Context and scope</th>
                                    <td>
                                        Understand the organization's knowledge
                                        needs and what falls in or out of scope.
                                    </td>
                                    <td>
                                        Built KM from zero at two companies with
                                        no prior program, which meant defining
                                        the scope both times.
                                        <a href="index.html#career">Career →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Planning</th>
                                    <td>
                                        Identify knowledge risks: tribal
                                        knowledge, single points of failure,
                                        content that cannot be traced.
                                    </td>
                                    <td>
                                        Diagnosed AI hallucinations down to
                                        their structural cause rather than
                                        patching individual answers.
                                        <a href="case-studies.html#case-d">AI content operations →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Support</th>
                                    <td>
                                        Defined, governed, version-controlled
                                        documented information.
                                    </td>
                                    <td>
                                        A 507-term reference with source
                                        attribution and curated cross-links,
                                        built to a written schema.
                                        <a href="case-studies.html#case-a">Reference platform →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Operation</th>
                                    <td>
                                        Knowledge creation, capture, sharing,
                                        and application embedded in real
                                        workflows.
                                    </td>
                                    <td>
                                        A two-gate AI content pipeline and a
                                        13-module onboarding curriculum, both
                                        operating as systems rather than static
                                        documents.
                                        <a href="case-studies.html#case-d">Pipeline →</a>
                                        <a href="case-studies.html#case-curriculum">Curriculum →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Performance evaluation</th>
                                    <td>
                                        Measuring whether knowledge management
                                        is working.
                                    </td>
                                    <td>
                                        Monitored article usage and performance
                                        data in an earlier regional support role
                                        and used it to prioritize revisions.
                                        <a href="index.html#career">Career →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Improvement</th>
                                    <td>
                                        Continual, evidence-based refinement.
                                    </td>
                                    <td>
                                        Restructured a bot's source layer after
                                        catching a hallucination, instead of
                                        fixing the one bad answer.
                                        <a href="case-studies.html#case-d">Pipeline →</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>`,

    `<section class="section" id="ckm">
                    <span class="section-num">03</span>
                    <h2>CKM and MCKM: strategy and design work.</h2>
                    <p class="lede mb-4">
                        CKM is the KM Institute's flagship certification; MCKM
                        is its master tier, which adds demonstrated leadership
                        on real KM projects. The design and delivery work
                        matches. The credential does not exist yet, and the
                        leadership bar is the honest stretch.
                    </p>

                    <div class="table-wrap" tabindex="0" role="region" aria-labelledby="ckm-caption">
                        <table>
                            <caption id="ckm-caption">
                                CKM and MCKM coverage against the work
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">What it covers</th>
                                    <th scope="col">What I have done</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">KM strategy design</th>
                                    <td>
                                        Defined KM scope and approach from
                                        scratch at two companies with no prior
                                        program.
                                        <a href="index.html#career">Career →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Knowledge capture and transfer</th>
                                    <td>
                                        Source-mapped every lesson in a 13-module
                                        curriculum before writing it, so each
                                        claim traces to a source.
                                        <a href="case-studies.html#case-curriculum">Curriculum →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Taxonomy and information architecture</th>
                                    <td>
                                        Built a 507-term reference with a
                                        taxonomy, aliases, and 1,477 curated
                                        cross-links.
                                        <a href="case-studies.html#case-a">Reference platform →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Agile, iterative implementation</th>
                                    <td>
                                        Built and revised the AI content
                                        pipeline across production runs,
                                        changing the process when a review gate
                                        caught a real failure.
                                        <a href="case-studies.html#case-d">Pipeline →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Leading KM implementation (MCKM)</th>
                                    <td>
                                        Led and delivered full KM builds solo,
                                        end to end. Close to the MCKM leadership
                                        bar in substance, short of it in
                                        credential and in leading a team through
                                        the work.
                                        <a href="#limits">Limits →</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>`,

    `<section class="section" id="itil">
                    <span class="section-num">04</span>
                    <h2>ITIL 4: knowledge as a practice.</h2>
                    <p class="lede mb-4">
                        ITIL 4 treats knowledge management as a formal practice
                        inside service management: a strategy and policy,
                        structured knowledge, and tooling that lets knowledge
                        move. Two of those three are well evidenced here. The
                        culture half is not, and section 07 says so.
                    </p>

                    <div class="table-wrap" tabindex="0" role="region" aria-labelledby="itil-caption">
                        <table>
                            <caption id="itil-caption">
                                ITIL 4 KM activities against the work
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">Activity</th>
                                    <th scope="col">What I have done</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">KM strategy and policy</th>
                                    <td>
                                        Set documentation standards and
                                        editorial quality bars from scratch at
                                        more than one company.
                                        <a href="case-studies.html#earlier">Earlier work →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Knowledge identification and structuring</th>
                                    <td>
                                        Reference taxonomy, source-mapped
                                        curriculum modules, and a schema that
                                        rejects malformed entries.
                                        <a href="case-studies.html#case-a">Reference platform →</a>
                                        <a href="case-studies.html#case-curriculum">Curriculum →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Tooling for knowledge flow</th>
                                    <td>
                                        Zendesk Knowledge, Salesforce Knowledge,
                                        Intercom, Pylon, and AI-assisted tooling,
                                        including a full help center migration
                                        from Salesforce Knowledge to Intercom.
                                        <a href="case-studies.html#earlier">Help center migration →</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>`,

    `<section class="section" id="kcs">
                    <span class="section-num">05</span>
                    <h2>KCS: the closest match.</h2>
                    <p class="lede mb-4">
                        KCS is built for support organizations: capture
                        knowledge while solving real cases, then structure,
                        reuse, and improve it. This is the framework my
                        day-to-day work has looked like most often, and the
                        example below is the reason.
                    </p>

                    <div class="table-wrap" tabindex="0" role="region" aria-labelledby="kcs-caption">
                        <table>
                            <caption id="kcs-caption">
                                KCS concepts against the work
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">Concept</th>
                                    <th scope="col">What I have done</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Capture from real cases</th>
                                    <td>
                                        Content and fixes came from real support
                                        patterns, not written in the abstract.
                                        <a href="#kcs-example">Example below →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Structure for reuse</th>
                                    <td>
                                        A 507-term platform, cross-linked and
                                        sourced, so one answer does not have to
                                        be re-derived for every question.
                                        <a href="case-studies.html#case-a">Reference platform →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Evolve loop</th>
                                    <td>
                                        Tracked article usage and performance
                                        data to decide what to revise, rather
                                        than revising by instinct.
                                        <a href="index.html#career">Career →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Review before publishing</th>
                                    <td>
                                        A two-gate review process — reasoning
                                        check, then source verification — before
                                        anything reaches a reader.
                                        <a href="case-studies.html#case-d">Pipeline →</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="divider-top" id="kcs-example">
                        <h3 class="subhead">
                            The clearest example: a knowledge base built from
                            zero.
                        </h3>
                        <div class="measure">
                            <p>
                                At a regional on-demand delivery platform, I
                                built the support knowledge base from zero in
                                Zendesk Knowledge — the structure, the article
                                standard, and the writing — while the team was
                                already using it. I trained colleagues in the
                                company's country markets, and the other markets
                                adopted the same structure and article standard
                                instead of starting their own.
                            </p>
                            <p>
                                Because I sat on the Training &amp; Quality
                                team, the knowledge base became part of the
                                Customer Experience quality guidelines: agents
                                were expected to consult it first, and trainers
                                used it for new-hire onboarding. The rule was a
                                team decision, sponsored by the trainers and
                                quality analysts and approved by the Training
                                Manager and the Customer Experience Country
                                Head. Use was qualitative at first, while the
                                base was still being built, then measured at
                                100% adoption by the team's own count once the
                                guidelines carried it.
                            </p>
                            <p class="small muted">
                                There is no case study for this build yet. The
                                evidence is the role and this paragraph; see
                                <a href="#limits">Limits</a>.
                                <a href="index.html#career">Career entry →</a>
                            </p>
                        </div>
                    </div>
                </section>`,

    `<section class="section" id="apqc">
                    <span class="section-num">06</span>
                    <h2>APQC: four levers, one weak spot.</h2>
                    <p class="lede mb-4">
                        APQC frames KM as four levers — strategy, process,
                        content and IT, and people and culture — plus a maturity
                        model for how developed the capability is. Three levers
                        are well evidenced. The fourth is partial, for a
                        specific reason: adoption came through a process I
                        helped set, not through a culture program.
                    </p>

                    <div class="table-wrap" tabindex="0" role="region" aria-labelledby="apqc-caption">
                        <table>
                            <caption id="apqc-caption">
                                APQC levers against the work
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">Lever</th>
                                    <th scope="col">What I have done</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Strategy</th>
                                    <td>
                                        Defined the KM approach and scope from
                                        zero at two companies.
                                        <a href="index.html#career">Career →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Process</th>
                                    <td>
                                        Editorial review, standardized
                                        templates, and a two-gate AI content
                                        review.
                                        <a href="case-studies.html#case-d">Pipeline →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Content and IT</th>
                                    <td>
                                        Built the systems — reference platform,
                                        AI pipeline, custom GPT — rather than
                                        only operating tools someone else chose.
                                        <a href="case-studies.html#case-a">Reference platform →</a>
                                        <a href="case-studies.html#case-d">Pipeline →</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">People and culture</th>
                                    <td>
                                        Partial. The Zendesk knowledge base
                                        became part of Customer Experience
                                        quality guidelines, which drove adoption
                                        through process rather than culture work.
                                        <a href="#kcs-example">See the example →</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>`,

    `<section class="section" id="limits">
                    <span class="section-num">07</span>
                    <h2>Limits, stated plainly.</h2>
                    <p class="lede mb-4">
                        The gaps I would fix first, and the things a reviewer
                        should not infer from the tables above.
                    </p>

                    <div class="notes">
                        <h3>Limitations</h3>
                        <ul>
                            <li>
                                <strong>No certifications held.</strong> Not
                                CKM, MCKM, ITIL 4, KCS, or APQC certified. That
                                is cost and timing, not lack of interest. Formal
                                certification is the next step, and this page
                                will say so when it happens.
                            </li>
                            <li>
                                <strong>Leadership and executive commitment
                                    (ISO 30401).</strong>
                                I have worked as an individual contributor. I
                                have not set org-wide KM policy, held a KM
                                leadership seat, or secured executive
                                sponsorship for a KM program.
                            </li>
                            <li>
                                <strong>Credentialed implementation and team
                                    leadership (CKM/MCKM).</strong>
                                Delivery has been solo, end to end. That is
                                close to the MCKM bar in substance and short of
                                it in credential and in leading a team through
                                the work.
                            </li>
                            <li>
                                <strong>Culture change (ITIL 4).</strong>
                                Adoption in the Zendesk example came from
                                quality guidelines and process authority, not a
                                culture campaign. I have not run org-wide
                                adoption work that depended on persuasion
                                rather than policy.
                            </li>
                            <li>
                                <strong>People and culture (APQC).</strong>
                                The same gap in APQC's own terms. The lever is
                                partial, not absent: process-driven adoption is
                                still adoption, but it is not the same as
                                changing how an organization values knowledge.
                            </li>
                            <li>
                                <strong>No case study for the Zendesk
                                    build.</strong>
                                The strongest single example on this page is a
                                paragraph, not a documented case. There are no
                                usage charts, no before-and-after repeat-contact
                                counts, and no retention data.
                            </li>
                            <li>
                                <strong>These mappings are my reading.</strong>
                                No assessor, auditor, or certification body has
                                reviewed them. Where a framework's language is
                                ambiguous, I chose the reading that fits the
                                evidence rather than the most flattering one.
                            </li>
                        </ul>
                    </div>

                    <p class="mt-5 measure-copy">
                        The pattern is consistent. The evidence is strong on the
                        technical and content side of KM: strategy design,
                        documented information, taxonomy, AI-assisted systems,
                        and usage-driven revision. The gap is organizational —
                        executive sponsorship, culture change, and the
                        credentials themselves. I would rather state that here
                        than let a reader discover it later.
                    </p>
                </section>`,
  ],
};
