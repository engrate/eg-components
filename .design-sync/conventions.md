# Building with @engrate/components

## Setup — there is no root provider

Do **not** wrap the app in a theme or design-system provider: none exists. Tokens
are plain CSS custom properties on `:root`, so importing the stylesheet is the
whole setup. Two components need a local provider, and only those two:

```tsx
// Toasts: provider + viewport, once near the app root.
<ToastProvider>
  {children}
  <ToastViewport />   {/* fixed bottom-right; omit it and toasts never appear */}
</ToastProvider>

// Tooltips: wrap the subtree that uses them.
<TooltipProvider>{children}</TooltipProvider>
```

`ToastViewport` is `position: fixed` — inside a container with a
`transform`/`filter` it pins to that container, not the window.

## Styling idiom: Tailwind v4 utilities generated from `@theme`

Tokens are declared with Tailwind v4's `@theme` directive, so every token has a
matching utility class. Use these names — they are the design language:

| Family | Real class names |
| --- | --- |
| Brand yellows | `bg-sunflower`, `bg-sunflower-hover`, `bg-lemon-meringue`, `bg-vanilla`, `bg-eggshell` |
| Surfaces | `bg-main` (page), `bg-alt`, `bg-card`, `bg-contrast` |
| Text (grayscale only) | `text-primary`, `text-secondary`, `text-tertiary`, `text-quaternary` |
| Semantic | `text-error` |
| Accents (sparingly) | `bg-warm-purple`, `bg-cool-purple`, `bg-electric-blue`, `bg-deep-blue` |
| Borders / radius | `border-border`, `rounded-pill` |
| Fonts | `font-sans` (Work Sans), `font-display` (Libre Baskerville), `font-mono` (IBM Plex Mono) |
| Type scale | `text-hero`, `text-h1`…`text-h4`, `text-lead`, `text-semi-lead`, `text-body-lg`, `text-body`, `text-body-sm`, `text-small`, `text-descriptive`, `text-label`, `text-label-sm` |
| Button spacing | `px-btn-x`, `py-btn-y` |

**Non-negotiable brand rules** (from `guidelines/DESIGN.md`):

- **10% color, 90% grayscale.** Sunflower is the single accent.
- **Never colored text** — all text is grayscale; prefer `text-primary`.
- **Never `bg-white`** for a page; use `bg-main` (#FAFAFA).
- **Work Sans is regular weight only.** No bold/medium/light — hierarchy comes
  from size and color. (`Text` only accepts `weight="regular"`.)
- `font-display` is for hero headings (≥60px) only.
- Buttons are always `rounded-pill`.
- Letter-spacing is −0.05em everywhere except `text-label*`/`text-descriptive`,
  which widen. The type-scale classes already encode this — don't re-set it.

## Important: the shipped CSS is content-scanned

`_ds_bundle.css` is a Tailwind build of **this library's own source**, so it
contains every class in the table above but **not every possible Tailwind
utility**. Verified present: `flex`, `grid`, `grid-cols-1…6`/`12`, `items-*`,
`justify-*`, `gap-1…4`/`6`/`8`, `p-*`/`px-*`/`py-*`, `mt-*`/`mb-*`/`mx-auto`,
`w-full`, `h-full`, `max-w-md`/`lg`/`xl`/`2xl`, `rounded-md`/`lg`/`full`,
`border`, `shadow-sm`, `relative`, `absolute`, `overflow-hidden`. Verified
**absent**: `gap-5`, `gap-10`, `max-w-4xl`, `max-w-6xl`, `max-w-7xl`,
`min-h-screen`, `md:flex-row`, `lg:flex-row`. Responsive variants exist only
where the library used them (`sm:grid-cols-2` and `sm:flex-row` yes,
`md:flex-row` no).

So for your own layout glue, in order of preference:

1. **Use the layout components** — `Stack` (`direction`, `gap`, `align`,
   `justify`, `wrap`) and `Grid` (`cols`, `gap`, `align`, `justify`, each
   accepting responsive objects like `cols={{ base: 1, md: 3 }}`). This is the
   idiomatic path and sidesteps the coverage question entirely.
2. **The classes enumerated above** — all verified in the shipped CSS.
3. **`var(--token)` in a `style` prop** for anything else. 105 brand tokens
   (`--color-*`, `--font-*`, `--text-*`, `--radius-*`, `--spacing-*`) are defined
   on `:root` and always resolve, whatever the utility coverage:
   `style={{ color: 'var(--color-primary)', padding: 'var(--spacing-btn-x)' }}`.

Do not invent utility names outside this vocabulary — an unrecognised class is
silently inert and the element renders unstyled.

## Where the truth lives

- `styles.css` and the `_ds_bundle.css` it `@import`s — the real compiled CSS and
  the full `:root` token list. Read it before styling anything.
- `guidelines/DESIGN.md` — the brand rulebook (colors, type scale, layout rules).
- `guidelines/SKILL.md` — the consumer-facing usage guide.
- `components/<group>/<Name>/<Name>.d.ts` — the prop contract; `<Name>.prompt.md`
  — per-component usage notes. Prefer a component's props over reproducing its
  look with classes.

## Idiomatic example

```tsx
import { Card, Grid, Stack, Heading, Text, Badge, Button } from '@engrate/components'

<div className="bg-main p-8">
  <Stack direction="vertical" gap="lg">
    <Heading level="h2">Your energy plan</Heading>
    <Text variant="lead" className="text-secondary max-w-[65ch]">
      Fixed price until March 2027. No binding period.
    </Text>

    <Grid cols={{ base: 1, sm: 2 }} gap="md">
      <Card>
        <Stack direction="vertical" gap="xs">
          <Text variant="label" className="text-tertiary">CURRENT RATE</Text>
          <Text variant="body-lg">0.84 kr/kWh</Text>
        </Stack>
      </Card>
      <Card>
        <Stack direction="horizontal" gap="sm" align="center">
          <Badge variant="sunflower">Active</Badge>
          <Text variant="body-sm" className="text-tertiary">Renews monthly</Text>
        </Stack>
      </Card>
    </Grid>

    <Stack direction="horizontal" gap="sm">
      <Button variant="primary">Change plan</Button>
      <Button variant="ghost">See details</Button>
    </Stack>
  </Stack>
</div>
```

Note the split: library components carry the controls and the type scale; the only
raw classes are brand colors and `max-w-[65ch]` (the 65-character body rule).
