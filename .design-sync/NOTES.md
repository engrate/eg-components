# design-sync notes — @engrate/components

Repo-specific gotchas for future syncs. Read this before running anything.

## Setup

- **`npm ci` fails: lockfile out of sync with `package.json`.** npm refuses with
  `Missing: @esbuild/aix-ppc64@0.27.2 from lock file` (and the other esbuild /
  lightningcss platform packages). Use `npm install --no-save` instead — it
  installs what the build needs without rewriting the committed
  `package-lock.json`. Fixing the lockfile for real (`npm install`, commit the
  result) is a repo-maintenance task outside the sync's scope.
- Node from `.nvmrc`: none pinned; `engines.node`: none. Synced on v24.16.0.
- Build: `npm run build` (`tsc -p tsconfig.app.json && vite build`) → `dist/`.
  Must run before the converter — the bundle is built from `dist/index.es.js`.
- Reference storybook: `npx storybook build -c .storybook -o "$(git rev-parse --show-toplevel)/.design-sync/sb-reference"`.

## Repo shape

- Storybook shape. `.storybook/` at repo root; 58 story files under
  `src/components/{ui,ai-chat-elements}/<Name>/<Name>.stories.tsx`.
- Story titles are **functional groups**, not directories
  (`Forms/Button`, `Charts/LineChart`, `Typography/Heading`), so the synced
  `<group>` comes from the title's second-to-last segment. `titleMap` keys are
  the **last** title segment (the component name), not the full title.
- **Scope: `ui` group only.** The 8 `AI Chat Elements/*` components are excluded
  via `titleMap: {<Name>: null}` per the user's choice on the first sync
  (2026-07-29). They still ship as exports inside `_ds_bundle.js`, but get no
  preview card, `.d.ts` contract, or `.prompt.md`, so the design agent won't
  use them. Re-scoping = delete those `titleMap` entries and re-sync.
- Stories import components by **relative** path (`./Button`, `../Label`), which
  the converter's story-imports policy redirects to `window.EngrateComponents`.
- Tailwind CSS **v4**: tokens are declared with `@theme` in
  `src/styles/index.css`, not a JS config. `tailwind.config.js` only sets
  `content`. `src/tailwind.preset.ts` exports `engrateTheme` for legacy
  consumers — it is NOT the live token source; `src/styles/index.css` is.
- Fonts (Work Sans 400/500, Libre Baskerville 400) are **base64-inlined** into
  `dist/styles.css` by the vite build, so there are no `.woff2` files in `dist/`
  and nothing needs `cfg.extraFonts` for them.
- `dist/` contains ~585 files: react-syntax-highlighter emits a chunk per
  language for `CodeBlock`. Expected, not a build error.
- `tokens/` in the output is **empty and that is correct** — Tailwind v4 compiles
  the `@theme` block into `:root` custom properties inside `dist/styles.css`,
  which the converter copies to `_ds_bundle.css` (161 custom properties). Tokens
  reach designs through the `styles.css` `@import` closure, not `tokens/`.
- `fonts/` in the output is **empty and that is correct** — the woff2 files are
  base64-inlined into the CSS by vite, so there is nothing to copy out.
- `guidelinesGlob` is set to `["DESIGN.md", "SKILL.md"]`: the repo keeps its
  brand/token truth in `DESIGN.md` and its consumer usage guide in `SKILL.md`,
  both at the repo root (the default glob only looks under `docs/`).

## Documentation drift found (not fixed — reported only)

- `DESIGN.md` ("Exporting for Consumers") tells consumers
  `import { engrateTheme } from '@engrate/components'`, but **`engrateTheme` is
  not in the package's runtime exports**: `src/index.ts` exports only
  `./components` and `cn`, never `./tailwind.preset`. Confirmed absent from the
  built bundle. Either add the export or correct the doc.
- `src/tailwind.preset.ts` also disagrees with the live tokens:
  it says `sunflower.hover = #FFD966` and `card = #F9F9F9`, while
  `src/styles/index.css` (`@theme`, the real source) says
  `--color-sunflower-hover: #ffe682` and `--color-card: #f8f8f8`.
  `DESIGN.md`'s tables agree with `index.css`, so the preset is the stale one.

## Conventions header

- `.design-sync/conventions.md` (wired via `cfg.readmeHeader`) is prepended to
  the generated README and inlined into the design agent's system prompt.
  **Its most important claim, re-verify it on every sync:** `_ds_bundle.css` is a
  Tailwind v4 **content-scanned** build of this library's own `src/`, so it holds
  every brand utility (all 40 verified present) but NOT every possible Tailwind
  class. Measured on this sync: `gap-5`, `gap-10`, `max-w-4xl`, `max-w-6xl`,
  `max-w-7xl`, `min-h-screen`, `md:flex-row`, `lg:flex-row` are **absent**, while
  `sm:grid-cols-2`, `sm:flex-row`, `max-w-[65ch]` are present. That list shifts
  whenever library source changes, so re-run the check (grep the class against
  `ds-bundle/_ds_bundle.css`) and update the header's absent-list. The header
  therefore steers layout to `Stack`/`Grid` props and `var(--token)` in `style`,
  both of which are coverage-independent. 124 custom properties are defined on
  `:root`, 105 of them brand tokens (`--color/font/text/radius/spacing-*`).

## Grading gotchas — READ BEFORE JUDGING ANY SHEET

- **[GENERAL] recharts components animate on mount, and the compare harness
  freezes that animation mid-flight. `BarChart`, `LineChart` and `PieChart`
  render through recharts, whose sector/bar/line growth is animated by
  `react-smooth` in JS (requestAnimationFrame), not CSS — so the harness's
  animation stabilization does NOT fast-forward it. The two panels therefore
  freeze at *different* frames and can look wildly different when the shipped
  card is perfect. Observed on `PieChart`: storybook panel showed a ~120° fan,
  preview panel showed a thin sliver. **Neither reflected reality** — a
  real-browser probe of both pages rendered the identical correct full pie, and
  the DOM was byte-identical (same 600x267 container, same 4 sectors, same
  first-sector path data). **Do not "fix" a chart from a compare sheet alone.**
  Verify with DOM equivalence (container rect + sector/bar path data on both
  sides) or a real-browser screenshot after ~3s. An owned preview authored to
  "fix" this would be a permanent shadow over a correct generated one.
- **[GENERAL] Components whose content is `position: fixed` read as
  `sb-error` / "no storybook root content" on the REFERENCE side.** Fixed
  content contributes no layout, so storybook's root element measures ~32x32 and
  the harness concludes nothing rendered — even though the story is on screen.
  This is a reference-side measurement artifact, **not** a story that fails to
  render, so `cfg.overrides.<Name>.skip` would be the wrong remedy. Hit by
  `Toast` (see below). Diagnose by reading `document.body.innerText` of the
  storybook iframe; if the copy is there, the story renders.
- Overlay components driven by a click (`Modal`, `AlertDialog`, `DropdownMenu`,
  `ContextMenu`, `Tooltip`) show only their **trigger** in both panels, because
  that is exactly what the repo's own stories render statically. That is a
  `match`, not a miss. Richer cards would need open-by-default stories in the
  repo — a repo change, not a sync fix.
- Framing differs by construction: storybook crops to its canvas
  (`layout: centered` / `fullscreen`), the preview renders on a full-size page.
  A preview that shows MORE of the same component (e.g. `Sidebar`'s own Logout
  footer, revealed because the page is taller) is a `match`.
- **Every story in this repo sets `parameters.layout: 'centered'`**, and
  storybook's centered canvas **shrink-wraps** the story. So a `w-full` or
  `display:block` component (`Input`, `Textarea`, `Calendar`) renders at its
  intrinsic width in the reference (~180px / 254px) and stretches to the full
  page width in the preview. Verified pixel-equivalent otherwise (border,
  radius, `bg-alt` fill, padding, placeholder metrics, font). Grade `match`.
  **Do NOT wrap the preview in a fake centered/width-capped container** — that
  fakes storybook's canvas chrome, hides real regressions, and the full-width
  render is what a consumer of `w-full` actually gets.
- **[GENERAL] recharts trips `[PORTAL?]` falsely — never apply
  `cardMode: "single"` to a chart.** recharts appends
  `<span id="recharts_measurement_span">` to `document.body`
  (`position:absolute; top:-20000px`, holding the tick text it measures).
  `compare.mjs`'s portal heuristic exempts `div[id]` but not a `SPAN` with an
  id, so the span trips the check on every recharts component. It paints
  nothing. `"single"` would drop 16 of 17 stories from each chart card for an
  invisible measurement node — keep `cardMode: "column"`. (An upstream fix would
  widen that selector from `div[id]` to `[id]`.)
- **The compare SHEET cannot judge font identity, token colors, or relative
  spacing.** Its two columns are scaled *independently*: the preview panel is a
  900x700 full-page shot shrunk into a ~480px cell (text ends up 4-6px tall)
  while the storybook panel is a tight crop shown near 1:1. Judge text-dense
  components from `_screenshots/compare/raw/…__ds.png`, whose content starts at
  about `(24, 24)` (the `?story=` page's body padding): crop to the content bbox
  and upscale to the sb shot's magnification. Grading off the sheet alone is a
  guess — this is what caught Banner's missing dismiss button.
- Fonts confirmed reaching the preview at full res on both panels — Work Sans
  400/500 glyphs and `text-label` letter-spacing reproduce exactly, and
  `--color-error` #dc2626 matches. No chromium-fallback false pass.
- `Skeleton`/`Spinner` are legitimately low-contrast: the faint greys are the
  real `--color-quinary` / `--color-alt` fills, not unstyled output. CSS
  animation fast-forward works on both panels (identical arc phase, pulse tint).

## Source fixes made during the first sync (2026-07-29)

These were repo bugs the sync surfaced; the user approved fixing each in source
rather than papering over them in the preview layer.

- **`SidebarLogo` was missing from the public API.** Defined and JSDoc-documented
  in `Sidebar.tsx` and present in its export block, but absent from
  `src/components/ui/Sidebar/index.ts` — so `import { SidebarLogo } from
  '@engrate/components'` failed. 3 of 10 Sidebar stories (including `Default`)
  rendered `Element type is invalid … got: undefined` because previews resolve
  component imports through `window.EngrateComponents`. Fixed by re-exporting
  `SidebarLogo` + `type SidebarLogoProps` from that index.
  *Lesson for future syncs:* stories import via deep relative paths
  (`./Sidebar`), which bypasses the barrel — so a missing barrel export is
  invisible in storybook but fatal in the synced preview. A `RENDER_ERRORS`
  "Element type is invalid … undefined" almost always means exactly this.
- **`CodeBlock` crashed when `language` was omitted.** Its JSDoc promises a
  plain-monospace fallback, but `<SyntaxHighlighter language={undefined}>` throws
  `Expected string for aliasOrLanguage, got undefined`. Fixed by rendering a
  plain `<code class="font-mono whitespace-pre">` branch when no language
  resolves, which is what the docs describe.
- **`IBM Plex Mono` was declared but never shipped.** `--font-mono` referenced it
  with no `@font-face`, so `[FONT_MISSING]` fired and all mono text fell back to
  system monospace. Fixed the way the repo already handles its other two
  families — vendored `src/assets/fonts/ibm-plex-mono/ibm-plex-mono-400.woff2`
  (from `@fontsource/ibm-plex-mono@5.3.0`, OFL) and added a local `@font-face`
  to `src/styles/fonts.css`. Deliberately NOT `@import`ed from
  `@fontsource/*`: the repo declares those packages as deps but never imports
  them — the real mechanism is vendored files + local `@font-face`, and
  introducing a second mechanism would be inconsistent. Only weight 400 is
  vendored (mono is used for code only), matching Libre Baskerville.

## Lib forks

- **`.design-sync/overrides/preview-gen-storybook.mjs`** (declared in
  `cfg.libOverrides`). Storybook 10 ships `addActionsFromArgTypes` in **core** —
  no addon entry in `.storybook/main.ts` required — so any `argTypes` key
  declaring `action` receives a spy handler on **every** story, even stories
  whose own `args` never mention it. Components that gate UI on the prop being
  present render MORE in storybook than a preview that leaves it `undefined`.
  Concretely: `Banner.stories.tsx:38` declares `onDismiss: { action: 'dismissed' }`
  and `Banner.tsx:84` gates its dismiss button on `{onDismiss && …}`, so all
  Banner stories showed a `×` in storybook and none in the preview. The fork adds
  the enhancer to the `COMPOSE` template — `for (const k of Object.keys(at)) if
  (at[k]?.action && args[k] === undefined) args[k] = () => {}`.
  Repo-wide the annotation also appears on `Pagination.stories.tsx:33`
  (`onPageChange`), which does not gate UI (`onPageChange?.(newPage)`) so nothing
  visible changes there — but the fork makes it correct too.
  Its only sibling import is repointed to `../../.ds-sync/lib/common.mjs`.
  **Cost note for future syncs:** fork file bytes are hashed into the *global*
  grade slice (`configSlicesFor`), so adding or editing any fork clears EVERY
  component's grade and forces a full re-grade. Batch fork edits accordingly.

## Owned previews

- **`.design-sync/previews/Toast.tsx`** — the only owned preview. Radix renders
  every `<Toast>` into `<ToastViewport>`, which the DS styles
  `fixed … sm:right-0 sm:bottom-0`. Fixed content contributes no layout, so the
  card wrapper collapsed to zero height and `bottom-0` resolved *above* the card
  (measured `y: -422`): the toasts rendered but sat off-screen, which validate
  reported as `[RENDER_BLANK]`. The owned preview wraps each composed story in a
  `Stage` with `transform: translateZ(0)` (makes it the containing block for
  fixed descendants) and `minHeight: 460` (gives `bottom-0` somewhere to land).
  The stories' `open` state, the `ToastProvider` decorator and `ToastViewport`'s
  own classes are all untouched — only the stage is added, so what the card shows
  is the real component in its real fixed positioning.
  `cfg.overrides.Toast` is `cardMode: single, primaryStory: AllVariants`.
- A fan-out agent authored `.design-sync/previews/Banner.tsx` to work around the
  actions-enhancer gap. **Deleted** once the generator fork above landed — a
  per-component workaround for a global cause shadows the corrected generated
  preview forever. If the fork is ever dropped, Banner regresses to a missing
  dismiss button; fix the generator, not the preview.

## Known render warns (triaged — a warn NOT in this list is new)

- `[REFERENCE_STALE?]` after a **config-only or fork-only** rebuild is expected
  and benign: the warn fires whenever `_ds_bundle.js` is newer than
  `.design-sync/sb-reference`, but a `libOverrides` / `overrides` / `readmeHeader`
  change rebuilds the bundle without touching DS source, so the reference is
  still correct. Verified on this sync: the reference was built at 13:07:56,
  after all three source fixes (13:06:28–13:06:58), and it does contain
  `IBM Plex Mono` in `sb-reference/assets/iframe-*.css` and `SidebarLogo` in
  `sb-reference/assets/Sidebar.stories-*.js`. Only rebuild the reference when
  **`src/` actually changed** — that is the condition the warn is really about.
  (`sbBaseShaFor` excludes `project.json`'s `generatedAt`, so an unnecessary
  rebuild is a hashing no-op, just wasted minutes.)

- `[RENDER_ERRORS]` on any component reading `Element type is invalid … got:
  undefined` → missing barrel export (see the `SidebarLogo` entry). Not currently
  firing.
- `Spinner/Inverted` grades **`close`, accepted**: the emitted card page
  hard-codes `body{background:#fff}` in
  `ds-bundle/components/<group>/<Name>/<Name>.html`, which overrides the DS's own
  `html{background-color:var(--color-main)}` (#FAFAFA). `Inverted` is a white arc,
  so it is faintly visible on storybook's #FAFAFA canvas and invisible in the
  preview. Nothing else in the library renders near-white, so only this one story
  is affected. The real fix belongs in the converter's emit template (let the DS's
  `html` background stand, or seed `body` from `.storybook/preview.ts`'s
  `initialGlobals.backgrounds`) — **not** per-component: a tinted stage in an
  owned preview would fake the canvas and shadow the real fix.
  Secondary repo bug on the same story: its
  `parameters: { backgrounds: { default: 'dark' } }` names an option that does not
  exist — `.storybook/preview.ts` defines `eg-main`/`eg-alt`/`eg-card`/
  `eg-contrast`/`eggshell` — so the reference side doesn't show the intended dark
  backdrop either.
- `Slider/Disabled` renders pixel-identical to `Slider/Default` in **both**
  panels → graded `match` (the preview is faithful), but it is a REPO bug:
  `src/components/ui/Slider/Slider.tsx:85` puts
  `disabled:pointer-events-none disabled:opacity-50` on `SliderPrimitive.Thumb`,
  which renders a `<span role="slider">` — the CSS `:disabled` pseudo-class can
  never match it, and Radix expresses the state as `data-disabled`/`aria-disabled`.
  A disabled Slider therefore has no visual affordance. Fix in DS source:
  `data-[disabled]:opacity-50 data-[disabled]:pointer-events-none`.
