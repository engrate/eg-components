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
- **`src/styles/index.css` carries `@source not "../../.design-sync/**"` — do not
  remove it.** Tailwind v4 auto-detects content across the repo, and it cannot
  tell a class name quoted as prose from real usage. So `NOTES.md` and
  `conventions.md` writing things like "`bg-quinary` is not generated" or "the fix
  is `data-[disabled]:opacity-50`" **caused those classes to be emitted into the
  shipped stylesheet** — self-falsifying documentation plus real CSS bloat
  (`gap-5`, `gap-10`, `max-w-4xl/6xl/7xl`, `min-h-screen`, `bg-quinary`,
  `text-quinary`, `antialiased`, the `data-[disabled]:*` pair). Caught by diffing
  the stylesheet's selector set before and after a rebuild.
  Note `@source` paths resolve **relative to the CSS file**, not the project root
  — `".design-sync/**"` silently matches nothing from `src/styles/`; the `../../`
  prefix is required. Verify with a rebuild, not by reading the directive.

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
- **MOST stories set `parameters.layout: 'centered'`** (not all — see next
  bullet), and storybook's centered canvas **shrink-wraps** the story. So a
  `w-full` or `display:block` component (`Input`, `Textarea`, `Calendar`) renders
  at its intrinsic width in the reference (~180px / 254px) and stretches to the
  full page width in the preview. Verified pixel-equivalent otherwise (border,
  radius, `bg-alt` fill, padding, placeholder metrics, font). Grade `match`.
  **Do NOT wrap the preview in a fake centered/width-capped container** — that
  fakes storybook's canvas chrome, hides real regressions, and the full-width
  render is what a consumer of `w-full` actually gets.
  The shrink-wrap also bites **nested** children, not just components that are
  themselves `w-full`: `Skeleton/TableRowSkeleton`, `Spinner/InButton` and
  `EngrateLogo/OnDarkBackground` all widen in the preview because a plain block
  or `flex flex-col` (default `align-items: stretch`) wrapper follows the page.
- **Check `layout:` in the story meta before invoking the framing exemption.**
  `Grid.stories.tsx:8`, `Stack.stories.tsx:9`, `Text.stories.tsx:9` and
  `Heading.stories.tsx:11` declare `layout: 'padded'`, so storybook renders them
  at 868px against the preview's 852px — within 16px. Those must be graded the
  STRICT way: column counts, gap ratios, wrap points and breakpoint resolution
  are directly comparable, so a real regression could not hide behind "framing".
  Invoking the exemption blindly there would license a false `match`.
  For a `w-full` component that 16px is not just outer framing — it **reflows the
  interior** by the 852/868 = 0.9816 ratio (Table's column 2/3 text shifts left by
  up to 13px; column 1 is always identical). So a whole-image diff of a padded
  `w-full` component reports 1-4% differing pixels with maxΔ ~219 while nothing is
  wrong: localise the diff by column before believing it.
- `layout: 'fullscreen'` stories are the easiest case: the asymmetry is a **pure
  +24px translation** in x and y (the card page's `body{padding:24px}`), so
  band-segment each panel and compare group count + group widths — identical
  widths with shifted x is the exemption; a changed width is a real defect. An
  offset region-diff of a faithful preview returns literally 0 differing pixels.
- **Tolerate 6/255 in any preview-vs-storybook pixel comparison.** The card
  page's `body{background:#fff}` vs storybook's `#fafafa` puts a uniform 5/255
  delta on every background pixel and on anything translucent over it. A
  tolerance below 6 makes every diff look catastrophic. Also: when thresholding,
  treat `#f5f5f5` (`--color-alt`) as CONTENT — a naive ">246 is background" test
  erases Table's entire header band.
- **sb-side ELEMENT crops clip the last 1-4px of descender ink** (the story
  root's box is tighter than the glyph ink). A ds bbox 1-4px TALLER at identical
  width is a capture artifact, not a line-height regression — seen on
  `Heading/Hero` (399x63 sb vs 399x67 ds, ink 7362 vs 7349). Check widths and ink
  counts before believing a height delta.
- **Dense components: judge numerically.** Crop each raw to its content bbox,
  compare bbox dimensions, then compare a per-row ink profile (count of
  non-background pixels per row). That turns "looks similar" into byte-comparable
  evidence — it is how all 10 Table stories were confirmed to have identical row
  bands and all 10 Breadcrumbs stories 0.000% differing pixels.
- **A story can render "wrong" identically on BOTH panels** — because
  storybook's CSS and `_ds_bundle.css` are two Tailwind content-scans of the same
  `src/`. A shared-cause bug is therefore invisible to this oracle by
  construction. `Grid/ResponsiveLayout` and `Grid/ResponsiveComplexLayout` ignore
  their `md`/`lg` breakpoints on both sides (see the Grid entry under repo bugs).
  When both panels look wrong the same way, suspect the DS, not the sync.
- **Tall stories show a TRUNCATED preview panel — the two sides are captured
  asymmetrically.** compare screenshots the preview with `fullPage: false` at the
  card viewport (every `…__ds.png` here is exactly 900x700), while the storybook
  side is an ELEMENT crop of the story root that can grow past the viewport
  (`Card/AllBackgroundColors`'s `…__sb.png` is 386x**824**). So a story taller
  than ~676px looks like the preview lost its last rows when the render is
  complete. Confirmed by probe: all 15 Card swatches render through `error`.
  Diagnose with a real-browser probe at a taller viewport; the knob if you want
  the sheet self-sufficient is `cfg.overrides.<Name>.viewport: "900x900"` (config
  edit + full rebuild + re-grade). **Never** author an owned preview for it.
- **The sheet can't be trusted for SIZE either**, not just colour and font:
  *relative* size within one panel survives, *apparent* size across panels does
  not. Badge's sheet looked like the preview had flattened sm/md/lg/xl to one
  size; measured from the raws they are identical (20/24/28/40px both sides).
  Measure the content bbox out of the raws before believing a size delta.
- **The winning technique for small / faint / precise work**: crop each raw to
  its content bbox and draw the two crops side by side at a shared integer zoom
  (2-6x). No PIL or ImageMagick on this machine; `.ds-sync/node_modules/playwright`
  plus a canvas in a headless page does the decode/crop/compose (it is CommonJS —
  `import pw from '…/playwright/index.js'` then destructure). Note that `__ds.png`
  content starts at (24,24) only for left-aligned stories; `items-center` stories
  sit near x=350-500, so locate the content rather than assuming the origin.
- **When pixel-scanning preview-side raws, treat BOTH `#fff` and `#fafafa` as
  background.** The card page's `body{background:#fff}` box sits on the DS's
  `html{background-color:var(--color-main)}` (#fafafa), so the body shrink-wraps
  to content height and #fafafa shows below it. A naive corner-pixel background
  sample classifies ~580,000px of empty page as "content" and every measurement
  built on it is garbage.
- That same `body{background:#fff}` vs storybook `#fafafa` difference shifts
  **partially transparent** renders too, not only near-white ones:
  `EngrateLogo/WithCustomClassName` and `Spinner/InButton` (both `opacity-50`)
  blend to #ffde92 in the preview vs #fcdb8f in storybook. A 3/255 delta,
  sub-perceptual — graded `match`, but recognise it instead of chasing it.
- **`motion/react` animations DO settle identically on both panels** — the
  opposite of the recharts trap. `motion`-driven components are safe to grade
  from the sheet. CSS-animation fast-forward is reliable too (an expanded
  `Accordion` panel's height is safe to grade from the capture).
- **Ink counts silently delete `opacity-50` content on the PREVIEW side.** A 50%
  fill over the card page's `#fff` lands ~250,250,250, which any "`#fff`/`#fafafa`
  is background" classifier throws away, while over storybook's `#fafafa` it lands
  ~247 and counts as ink. Disabled/translucent states therefore report huge ink
  deltas with the renders visually identical (`Input/Disabled` 6492 vs 2329 — a
  64% "loss" that is zero defect; `Checkbox/Disabled` 84 vs 68). **Measure
  translucent fills with a point probe, never an ink total.**
- **For text-only coloured copy the token pixel COUNT is not equal across
  panels** (unlike a bordered element, whose long solid runs dominate the
  histogram). Pure text is all antialiased edge and the sb element crop starts at
  a different fractional y, so the AA mass redistributes: `FormMessage/Error` 123
  vs 118. Compare pure-core presence plus the saturated total, allowing a few
  percent. Bordered elements DO come out exactly equal (`Input/Error` 752=752,
  `Textarea/Error` 836=836, `Select/Error` 522=522, `FormField/CompleteForm`
  908=908).
- **Sub-pixel glyph phase is the last residual "diff" on `layout:'centered'`
  stories and is NOT a defect.** Storybook's centered canvas puts the story root
  at a fractional x while the card page puts it at exactly 24, so glyphs
  rasterize at a different phase: 3-6% of pixels differ at maxΔ ~70 while total
  ink agrees within 1% and the darkness-weighted ink CENTROID agrees to <0.2px.
  Test with the centroid before believing a text-metric regression.
- **`items-center` text beside a fixed-size sibling lands 1px apart** between
  panels (the centred line box rounds a different sub-pixel origin):
  `Checkbox/WithLabel`'s 20x20 box aligns at offset +8 but its glyphs at +7, so a
  whole-region diff reports ~13% differing on a pixel-identical bbox. Localise
  per child before calling it a spacing regression.
- **`layout: 'padded'` does not ALWAYS reflow the interior** — reflow risk is
  about wrappable / right-anchored / centred content, not `padded` itself.
  `CodeBlock` is padded and `w-full` but `whitespace-pre` and left-aligned, so an
  offset region diff returns literally 0 differing pixels on all 6 stories.
- **A trigger-only overlay story is NOT an information-free grade**: the trigger's
  own fill is real evidence. `ContextMenu/Complete` is the only ContextMenu story
  whose target adds `bg-card`, and its bbox ink is 36844/36839 against 1303/1298
  for its six transparent siblings — the token fill is provably arriving on both
  panels. Use bbox-ink deltas between sibling stories to extract evidence from
  "boring" overlay cards instead of grading them on faith.
- **`rounded-full` elements measure a bbox 1-3px narrower on the preview side**
  (the antialiased arc edge pixel falls under a `#fff` threshold but not a
  `#fafafa` one). Don't let a bbox-width assertion tighter than ~4px on a pill
  fail a good preview.
- **Storybook's iframe carries a hidden 0x0 `<ol>`/`<li>` error-help template**
  ("Missing Context/Providers…"). A naive `document.querySelector('ol')` probe
  latches onto it instead of the component — it made storybook look like it had 5
  phantom toasts. Select explicitly:
  `[...document.querySelectorAll('ol')].find(e => /fixed/.test(e.className))`, and
  `li[data-state]` for a Radix Toast.
- `ToastClose` is `opacity-0 … group-hover:opacity-100` (`Toast.tsx:127`), so the
  `×` is invisible in every static capture on BOTH panels. Not a dropped button —
  the DOM has it and the lucide `X` svg on both sides.
- The owned Toast preview's `Stage` shifts the fixed viewport's ORIGIN (storybook
  pins to the 700px window bottom at x=496; the preview pins to the Stage bottom
  inside the card at x=472). Same component, different containing block — that is
  exactly what the owned preview exists to do. Never "fix" that offset.
- **`find src -newer <ref>` over-reports** — it is mtime-based, so a file merely
  touched (or committed) shows up. Confirm with `git diff` / `git log` before
  paying a storybook rebuild. But note the converse trap: an empty `git diff`
  does NOT prove `src/` is unchanged if the change was **committed** — check
  `git log --name-only` against the reference build time too.
- **[GENERAL] recharts trips `[PORTAL?]` falsely — never apply
  `cardMode: "single"` to a chart.** recharts appends
  `<span id="recharts_measurement_span">` to `document.body`
  (`position:absolute; top:-20000px`, holding the tick text it measures).
  `compare.mjs`'s portal heuristic exempts `div[id]` but not a `SPAN` with an
  id, so the span trips the check on every recharts component. It paints
  nothing. `"single"` would drop 16 of 17 stories from each chart card for an
  invisible measurement node — keep `cardMode: "column"`. (An upstream fix would
  widen that selector from `div[id]` to `[id]`.) The flag is also
  **timing-dependent** — in one run it fired on BarChart and LineChart but not
  PieChart — so its ABSENCE on a recharts component proves nothing either.
- The recharts animation artifact is **not PieChart-only**: LineChart's
  `stroke-dasharray` line reveal freezes at different progress per panel too
  (observed sb ~72% vs ds ~55%). BarChart is the least affected, which is exactly
  the trap — a sheet-only reader would "fix" the wrong two components. The
  reusable settlement: serve `.design-sync/sb-reference` and `ds-bundle` on two
  ports, load `iframe.html?id=<story-id>&viewMode=story` against
  `components/<group>/<Name>/<Name>.html?story=<Export>` at the same 900x700
  viewport, wait 3s unfrozen, then diff in-page — svg width/height/viewBox,
  container rect, every sector/bar/line `d`, dot/bar/sector counts, grid-line
  counts, tick and legend text, fills, stroke-widths, tick font-family. Allow ≤8px
  x offset (page padding 16 vs 24) and require rect sizes within 1px. All 49 chart
  stories came back byte-identical that way.
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
- `Skeleton`/`Spinner` are legitimately low-contrast: the faint greys are real
  token fills, not unstyled output. CSS animation fast-forward works on both
  panels (identical arc phase, pulse tint). **Skeleton's fill is `bg-contrast` =
  `--color-contrast` #efefef** (`Skeleton.tsx:8`), measured 239,239,239 on both
  panels in all 9 stories — cross-check against that, not `--color-quinary`.
- **`--color-quinary` (#ededed) is a DEAD token.** It is declared in
  `src/styles/index.css`'s `@theme` block but nothing in `src/` uses it, so
  Tailwind v4's content scan drops it: it is absent from `_ds_bundle.css` and
  there is no `bg-quinary`/`text-quinary` class. Don't cite it when checking a
  grey, and don't put it in `conventions.md`. Either use it in the library or
  delete it from the theme.

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
- ✅ **FIXED (commit `d512e33`) — `Grid`'s responsive prop form was broken.**
  `Grid.tsx:120-133` builds breakpoint classes by runtime string concatenation
  (`classes.push(\`md:${classMap[value.md].split(':').pop()}\`)`), which Tailwind
  v4's static extractor cannot see. So a class only exists if some other file in
  `src/` happens to spell it literally. Measured against `_ds_bundle.css`, what
  actually ships is: `sm:grid-cols-2`; `md:grid-cols-2`, `md:grid-cols-3`,
  `md:col-span-6`; `lg:grid-cols-3`, `lg:grid-cols-4`, `lg:grid-cols-5`,
  `lg:col-span-4`, `lg:gap-8`; `xl:grid-cols-5`. Everything else —
  `md:grid-cols-4`, `lg:grid-cols-12`, `lg:col-span-8`, and every responsive
  `gap` except `lg:gap-8` — does nothing. `Grid/ResponsiveColumns` works only by
  coincidence; `Grid/ResponsiveLayout` and `Grid/ResponsiveComplexLayout` are
  visibly dead on both panels. **Invisible to this oracle by construction** (both
  sides share the content scan), so it graded `match`. Real fix in DS source:
  enumerate the responsive class strings statically, or add a Tailwind
  `@source inline(...)` safelist covering the
  `{sm,md,lg,xl,2xl}:{grid-cols,col-span,row-span,gap}-*` matrix.
  **Fix shipped:** an `@source inline(...)` safelist in `src/styles/index.css`
  covering the full matrix the value unions can produce, plus a cross-reference
  comment on `getResponsiveClasses`. No logic change was needed — the runtime
  concatenation produces *valid* names, they just didn't exist in the CSS.
  Verified after the fix: `md:grid-cols-4`, `lg:grid-cols-12`, `lg:col-span-8`,
  `md:gap-4` and the `2xl:` family are all in `_ds_bundle.css`.
  **If you widen any value union in `Grid.tsx`, widen the safelist too.**
  `conventions.md` now endorses the responsive form again.
- ✅ **FIXED (commit `facf8e9`) — `Sidebar` ignored `defaultCollapsed` at desktop
  widths.**
  `Sidebar.tsx:140-156`'s `autoCollapseMobile` effect calls
  `handleChange(mediaQuery)` unconditionally on mount, so `setCollapsed(false)`
  fires at any width >768px and clobbers the initial prop.
  `Sidebar/Collapsed` and `Sidebar/CollapsedWithSubItems` therefore render fully
  EXPANDED — on both panels, so invisible to this oracle. **Fix shipped:** the
  mount-time check is now guarded on `mediaQuery.matches`; the `change` listener
  is untouched, so a real mobile→desktop transition still auto-expands. Two tests
  added — one pins the regression (it fails without the fix), one pins the
  behaviour the guard must not break. Note the pre-existing "respects
  defaultCollapsed" test passed throughout because **jsdom provides no
  `window.matchMedia`**, so the effect bailed out before doing damage; any future
  test of this effect must mock it.
- ✅ **FIXED (commit `075a864`) — `TabList`'s active indicator raced the webfont
  load.**
  `TabList.tsx:261-275` measures the active trigger with
  `getBoundingClientRect()` once on mount (re-measuring only on window `resize`)
  and writes the width as an inline style. So the underline is either the
  fallback-metrics width (84.22px) or the Work Sans width (90.72px) depending on
  which side of the font swap the effect ran — **nondeterministic per page load on
  both sides**: captures showed sb 84 / ds 91, a live probe 3.5s later showed the
  reverse, with equivalent DOM throughout. Graded `match`; never author an owned
  preview for it. **Fix shipped:** re-measure once `document.fonts.ready` settles,
  plus a `ResizeObserver` on the trigger so label reflow or a container change
  also corrects it.
- **`--text-h4` is byte-identical to `--text-h3`** (both 1.5625rem / 1.08 /
  -0.05em), so `Heading` h3 and h4 are indistinguishable and DESIGN.md's "lighter
  tracking" caption for h4 is false. `Eyebrow`'s `variant="default"` and
  `variant="primary"` both resolve to `text-primary`, so two rows of
  `Eyebrow/AllVariants` are identical. Both reproduce on each panel — real, minor
  DS inconsistencies rather than sync defects.
- **Story coverage gaps that leave real styling undemonstrated** (repo-side, worth
  fixing so the design agent sees these states): `Calendar/Range` selects
  Feb 10-20 2025 but passes no `defaultMonth`/`month`, so react-day-picker opens
  on today's month and the range is off-view — a probe finds 0 `.rdp-range_*`
  nodes on BOTH panels, so the `bg-lemon-meringue` range fill and the rounded
  `range_start`/`range_end` treatments are never rendered anywhere.
  `DateRangePicker/SingleMonth` and `DateTimePicker/MinuteStep` are likewise
  visually identical to their siblings because `numberOfMonths`/`minuteStep` only
  affect the closed popover.
- **`Card` does not switch text colour on dark backgrounds.**
  `Card/DeepBlueBackground`'s own copy promises "automatic white text for
  contrast", but both panels render `#1a1a1a` heading / `#4a4a4a` body on
  `#002fa7` — near-illegible. Faithfully reproduced, so it grades `match`; fix
  belongs in `src/components/ui/Card/Card.tsx`.
- `Stepper`'s `labels` prop is wired to `aria-label` only
  (`Stepper.tsx:212`,`:219`), never to visible copy, so `MiniWithLabels` shows no
  captions on either panel. Correct DS behaviour — not a defect, not a story to
  "fix". (Arguably a naming problem in the API.)
- `Slider/Disabled` renders pixel-identical to `Slider/Default` in **both**
  panels → graded `match` (the preview is faithful), but it is a REPO bug:
  `src/components/ui/Slider/Slider.tsx:85` puts
  `disabled:pointer-events-none disabled:opacity-50` on `SliderPrimitive.Thumb`,
  which renders a `<span role="slider">` — the CSS `:disabled` pseudo-class can
  never match it, and Radix expresses the state as `data-disabled`/`aria-disabled`.
  A disabled Slider therefore has no visual affordance. Fix in DS source:
  `data-[disabled]:opacity-50 data-[disabled]:pointer-events-none`.
