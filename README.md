# posylka

an independent educational site about nova post for american college students. plain html, css and javascript, with a small node build that assembles shared page layouts. no dependencies to install.

## work locally

requires node.js 22 or newer.

```sh
npm run dev
```

open http://127.0.0.1:4173. source changes rebuild automatically; refresh the browser to see them. use `npm run preview -- --port 4174` to preview on another port.

```sh
npm run build   # generate the deployable dist/ folder
npm run check   # build, then check local links, anchors, js syntax/imports and content references
```

## layout

```text
src/
  pages/
    index.html            introduction and topic links
    track/index.html      five fictional parcel journeys
    people/index.html     eight composite staff profiles
    questions/index.html  research questions and linked references
    network/index.html    themes, timeline and key numbers
    language/index.html   lesson hub and browser-local progress
      words/              twelve word cards and four tracking updates
      conversation/       three branch dialogues and a phrasebook
      grammar/            patterns, seven-case guide and gap practice
      reading/            three short readings and a site checkpoint
      reference/          searchable glossary and alphabet examples
    sources/index.html    source library, readable without javascript
    404.html              custom not-found page
  layouts/base.html       shared document structure and metadata
  partials/               shared header and footer
  site.js                 route metadata and navigation order
  assets/
    css/styles.css        shared styles and responsive layouts
    js/                   page modules and shared helpers
      data/               editable story, vocabulary and research data
  _headers                cloudflare pages response headers
  locales/uk/             Ukrainian UI, stories, research and learning copy
scripts/                  dependency-free build, preview and validation
dist/                     generated static site; gitignored
```

edit `src/`, not `dist/`. page files contain the content inside `<main>`; the build supplies the document shell. navigation is generated from `src/site.js`, so a label or route change applies to every page. each interactive page loads its own module and data.

to add a page, create `src/pages/topic/index.html` and add `/topic/` to `src/site.js`. give it a unique title, description and one `<h1>`. optionally add `src/assets/js/topic.js` and set `module: 'topic'`. then run `npm run check`.

the original `posylka-site.zip` is retained locally and ignored by git. its content was reorganized, with the original factual claims, dates and fictional/composite labels retained. this migration is not a new fact-check of the supplied research. old home-page section bookmarks forward to the corresponding new pages.

## ukrainian immersion

the **EN / УК** control switches the whole site, including parcel narratives, staff days, research, source titles, quiz answers and feedback. it remembers the choice across pages. `?lang=uk` opens a shareable ukrainian view; `?lang=en` opens english. if browser storage is blocked, links carry the language in the URL instead.

ukrainian copy aims at roughly **a2–b1**, using shorter sentences while keeping the original facts. technical, financial and wartime vocabulary still needs support; this is a reading target, not a formal CEFR assessment. english originals remain available as learning help:

- hover or focus a passage for its english meaning; tap works on touch screens.
- hover an underlined vocabulary word for its english definition, or click for the glossary.
- press Escape or tap elsewhere to dismiss a hint; scrolling past the passage also hides it.
- switching languages preserves the current parcel updates, selected viewpoint, open staff day, research answers and quiz/game progress.

the translation catalogs live in `src/locales/uk/`. `interface.json`, `pages.json`, `sources.json` and `course-ui.json` use english text as keys. the other catalogs use paths into the original data (for example `PARCELS.0.steps.0.c.txt`). update both languages when editing source copy. `scripts/locale-catalog.mjs` builds the lookup into `dist/assets/js/i18n/catalog.js`; do not edit that generated file. `npm run check` rejects missing/stale data keys, missing static prose and empty translations.

publication names, product names and the Latin alphabet examples keep their original spelling. english glosses are hidden until requested in ukrainian mode. with javascript disabled the site retains its english static reading view and hides the unavailable language switch.

## language lessons

the language hub separates four lessons from the reference material. each lesson gives its completion criteria, allows retries and uses the same text-and-shape answer feedback as the rest of the site:

- **words and updates:** twelve recall cards with example sentences, followed by four tracking-message questions. missed cards return to the queue.
- **at the branch:** send a parcel, collect one and ask for clarification. each conversation has three turns, a transcript of your answers and a separate writing prompt. eight phrase cards provide reusable expressions.
- **patterns and cases:** compare location, destination and means before trying seven gaps. a case table and polite-address notes stay available as reference.
- **read and understand:** three original a2–b1 texts with two questions each. the original six-question site checkpoint is optional.

the separate reference page searches 66 terms by ukrainian, english or romanization. the stories, dialogues and practice notices are fictional. grammar notes link to the University of Kansas's *Добра форма* and the official ukrainian orthography; the exercises are original.

`src/assets/js/data/course.js` holds the new activities; `src/locales/uk/course.json` translates their prompts and explanations. native ukrainian examples include english help via hover, focus or tap in either language mode. `scripts/course-fragments.mjs` also renders word lists, readings, phrases, cases and the glossary into static html so they remain readable without javascript.

reviewed lessons are saved under `posylka-lessons-v1` in this browser's local storage. this records completion, not a grade or proficiency level. individual answers, card positions and writing drafts stay on the current page; changing language or switching scenes preserves them, but reloading starts the activity again. the hub's reset button clears lesson progress. blocked storage makes progress temporary without preventing practice. the checker validates exercise answers, scene IDs and vocabulary references alongside links and translations.

## state cues

feedback uses text and shape alongside color, following [W3C’s use-of-color guidance](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html):

- correct answers: a checkmark, an explicit answer label and a solid blue border. incorrect answers: a cross, an explicit label and a dashed amber border. evaluated answers stay legible when disabled.
- parcel states have icons and text. completed route stops have checkmarks, the current stop has a square outline, and the current stage is written out on desktop and mobile.
- staff-day events have category labels and symbols. vocabulary buttons are underlined, and selected views have strong outlines.

keep these cues when changing the palette. both languages and light/dark themes are checked in-browser; color-vision simulations help inspect the result but do not replace feedback from the reader.

## cloudflare pages

use these settings for a git-connected pages project:

| setting | value |
| --- | --- |
| framework preset | none |
| root directory | repository root |
| build command | `npm run build` |
| build output directory | `dist` |
| production branch | whichever branch you publish, typically `main` |

for direct upload, run `npm run build` and upload the **contents of `dist/`**. it contains a top-level `index.html`, the nested pages, `404.html`, assets and `_headers`. see [cloudflare’s static html guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) and [custom headers documentation](https://developers.cloudflare.com/pages/configuration/headers/).

javascript is served as same-origin modules. the content security policy no longer depends on an inline-script hash; editing a module does not require recalculating a hash. inline styles are still allowed for the imported presentation and dynamic route indicators. the local preview applies the same headers, including CSP.

check a pages preview before publishing: desktop and phone navigation, all parcel journeys, staff views, research citations and return links, keyboard tabs, the grammar game and quiz, sources, and an unknown URL. add canonical/og:url metadata once the public domain is settled.
