# Engrate Design System

This document defines the visual language for Engrate's component library. It is the **single source of truth** for colors, typography, spacing, layout, and UI patterns used across all Engrate products.

All design tokens are implemented as [Tailwind CSS v4 theme variables](src/styles/index.css) using the `@theme` directive. Components consume these tokens exclusively — never use raw hex values or arbitrary numbers.

> **For developers:** Use the Tailwind utility classes listed in each section. For the full token list, see [src/styles/index.css](src/styles/index.css).

---

## Table of Contents

- [Brand Principles](#brand-principles)
- [Colors](#colors)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [UI Components](#ui-components)
- [Backgrounds & Surfaces](#backgrounds--surfaces)
- [Accessibility](#accessibility)
- [Quick Reference](#quick-reference)

---

## Brand Principles

Engrate solves problems — preferably the biggest ones we can find. The design system reflects this through:

1. **Clarity over decoration** — grayscale dominates, color is surgical
2. **Precision** — exact spacing, exact tracking, exact hierarchy
3. **Confidence** — clean lines, generous whitespace, left-aligned text
4. **Energy** — Sunflower yellow as the singular accent, inspired by the sun

### The 10/90 Rule

**10% color, 90% grayscale.** This is the most important ratio in the identity. When followed, the yellow accent becomes maximally impactful. Deviation weakens the brand.

---

## Colors

### Primary: Sunflower (Hero Color)

The most powerful color in the identity. Use when only one color can be chosen.

| Token                     | Hex       | Tailwind Class                     | Usage                             |
| ------------------------- | --------- | ---------------------------------- | --------------------------------- |
| `--color-sunflower`       | `#FFBE26` | `bg-sunflower`, `border-sunflower` | Buttons, accents, highlights      |
| `--color-sunflower-hover` | `#FFE682` | `bg-sunflower-hover`               | Hover states for primary elements |

> **Never use Sunflower for text.** Reserve for UI elements, accents, and highlights only.

### Secondary: Yellow Spectrum

Each color is a distinct, individual color — **never used as a tint or fade** of Sunflower.

| Token                    | Hex       | Tailwind Class      | Usage                     |
| ------------------------ | --------- | ------------------- | ------------------------- |
| `--color-lemon-meringue` | `#FFF8A2` | `bg-lemon-meringue` | Selected states, badges   |
| `--color-vanilla`        | `#FFFCD0` | `bg-vanilla`        | Background fields, badges |
| `--color-eggshell`       | `#FFFDE8` | `bg-eggshell`       | Subtle highlights, fields |

### Grayscale

The **most used** palette. Creates hierarchy, navigation, and logic without color.

| Token                | Hex       | Tailwind Class    | Usage                      |
| -------------------- | --------- | ----------------- | -------------------------- |
| `--color-primary`    | `#1A1A1A` | `text-primary`    | Headings, main text        |
| `--color-secondary`  | `#4A4A4A` | `text-secondary`  | Body text, descriptions    |
| `--color-tertiary`   | `#6A6A6A` | `text-tertiary`   | Labels, meta information   |
| `--color-quaternary` | `#8A8A8A` | `text-quaternary` | Disabled or de-emphasized  |
| `--color-border`     | `#E5E5E5` | `border-border`   | Borders, dividers          |
| `--color-main`       | `#FAFAFA` | `bg-main`         | Primary page background    |
| `--color-alt`        | `#F5F5F5` | `bg-alt`          | Alternate sections         |
| `--color-card`       | `#F8F8F8` | `bg-card`         | Cards, containers          |
| `--color-contrast`   | `#EFEFEF` | `bg-contrast`     | Extra contrast when needed |

**Critical rules:**

- All text must be grayscale. **Never colored text** (no yellow, no blue, no purple).
- Prioritize `text-primary` (#1A1A1A) for most text.
- Use `text-secondary` / `text-tertiary` only for hierarchy.
- **Never use pure white (#FFFFFF) as a page background.** Always use `bg-main` (#FAFAFA) or similar.

### Complementary Colors

Use with **great caution**. Secondary function only — may never have greater visual presence than the yellow spectrum.

| Token                   | Hex       | Tailwind Class     | Usage               |
| ----------------------- | --------- | ------------------ | ------------------- |
| `--color-warm-purple`   | `#721B5D` | `bg-warm-purple`   | Subtle accents only |
| `--color-cool-purple`   | `#9B4ED8` | `bg-cool-purple`   | Subtle accents only |
| `--color-electric-blue` | `#0080FF` | `bg-electric-blue` | Subtle accents only |
| `--color-deep-blue`     | `#002FA7` | `bg-deep-blue`     | Subtle accents only |

### Semantic Colors

| Token           | Hex       | Tailwind Class | Usage        |
| --------------- | --------- | -------------- | ------------ |
| `--color-error` | `#DC2626` | `text-error`   | Error states |

---

## Typography

### Font Families

| Token            | Family                   | Tailwind Class | Usage                       |
| ---------------- | ------------------------ | -------------- | --------------------------- |
| `--font-display` | Libre Baskerville, serif | `font-display` | Hero headings only (≥ 60pt) |
| `--font-sans`    | Work Sans, sans-serif    | `font-sans`    | Everything else             |
| `--font-mono`    | IBM Plex Mono, monospace | `font-mono`    | Code snippets               |

### Critical Rules

1. **Letter spacing: -5% (`-0.05em`) on all text above 10pt.** This applies universally — headings, body, buttons, links, breadcrumbs.
2. **Libre Baskerville** is reserved for hero headings at 60pt and above. Never for body text or smaller headings.
3. **Work Sans must always be Regular weight.** No Bold, no Medium, no Light. Hierarchy is created through size and color, never weight.

### Type Scale

All sizes are defined as Tailwind `@theme` variables with paired `--line-height` and `--letter-spacing` values.

#### Headings

| Token         | Size             | Line Height | Letter Spacing | Font              | Tailwind Class           |
| ------------- | ---------------- | ----------- | -------------- | ----------------- | ------------------------ |
| `--text-hero` | 3.75rem (60px)   | 1.1         | -0.05em        | Libre Baskerville | `text-hero font-display` |
| `--text-h1`   | 2.5rem (40px)    | 1.1         | -0.05em        | Work Sans         | `text-h1`                |
| `--text-h2`   | 1.875rem (30px)  | 1.067       | -0.05em        | Work Sans         | `text-h2`                |
| `--text-h3`   | 1.5625rem (25px) | 1.08        | -0.05em        | Work Sans         | `text-h3`                |
| `--text-h4`   | 1.5625rem (25px) | 1.08        | -0.05em        | Work Sans         | `text-h4`                |

**Rule:** Headings should be **at least twice the size** of body text to create clear, unambiguous hierarchy.

#### Body Text

| Token              | Size      | Line Height | Letter Spacing | Usage             |
| ------------------ | --------- | ----------- | -------------- | ----------------- |
| `--text-lead`      | 1.25rem   | 1.1         | -0.05em        | Lead paragraphs   |
| `--text-semi-lead` | 0.9375rem | 1.6         | -0.05em        | Semi-lead text    |
| `--text-body-lg`   | 1.125rem  | 1.4         | -0.05em        | Large body text   |
| `--text-body`      | 1rem      | 1.5         | -0.05em        | Default body text |
| `--text-body-sm`   | 0.875rem  | 1.25        | -0.05em        | Small body text   |
| `--text-small`     | 0.875rem  | 1.5         | -0.05em        | Compact text      |

#### Labels & Descriptive

| Token                | Size     | Line Height | Letter Spacing | Usage                   |
| -------------------- | -------- | ----------- | -------------- | ----------------------- |
| `--text-descriptive` | 0.75rem  | 1.75        | +0.04em        | Descriptions, captions  |
| `--text-label`       | 0.75rem  | 1.4         | +0.08em        | Labels                  |
| `--text-label-sm`    | 0.625rem | 2.4         | +0.14em        | Small labels, meta info |

> Labels and descriptive text use **positive** letter spacing (widened), the exception to the -5% rule.

---

## Spacing & Layout

### Button Spacing

| Token             | Value   | Tailwind Class | Usage                     |
| ----------------- | ------- | -------------- | ------------------------- |
| `--spacing-btn-x` | 2rem    | `px-btn-x`     | Button horizontal padding |
| `--spacing-btn-y` | 0.75rem | `py-btn-y`     | Button vertical padding   |

### Border Radius

| Token           | Value  | Tailwind Class | Usage                 |
| --------------- | ------ | -------------- | --------------------- |
| `--radius-pill` | 9999px | `rounded-pill` | Buttons, badges, tags |

### Layout Rules

1. **Left-align all text.** This is the default — clarity and readability first.
2. **Body text max 65 characters wide.** Use `max-w-[65ch]` to enforce optimal line length.
3. **Grid item spacing: 50% of typical defaults.** Tighter gaps create more cohesive layouts (e.g., 16px instead of 32px, 12px instead of 24px).
4. **Even margins top/left.** Creates natural squares in the layout.
5. **Heading-to-body gap: 100% of body text line height.** Creates breathing room without being excessive.

---

## UI Components

### Buttons

All buttons use pill-shaped corners (`rounded-pill`). Never square or slightly rounded.

| Variant     | Background        | Hover Background     | Text Color     |
| ----------- | ----------------- | -------------------- | -------------- |
| `primary`   | `bg-sunflower`    | `bg-sunflower-hover` | `text-primary` |
| `secondary` | `bg-alt` + border | `bg-main`            | `text-primary` |
| `ghost`     | transparent       | `bg-alt`             | `text-primary` |

**Sizes:** `sm`, `default`, `lg`, `icon`

> Buttons should be compact and slim. Use the defined `btn-x` / `btn-y` spacing tokens.

### Badges

When placing yellow-spectrum badges (`lemon-meringue`, `vanilla`, `eggshell`) on light gray surfaces, always add a **1px border in dark gray** (`border-tertiary` or `border-secondary`) for visibility.

### Cards

- Background: `bg-card` (#F8F8F8)
- Headline-to-body gap: 100% of body text line height
- Border radius: 8px–16px
- All text in Work Sans Regular, -5% tracking

### Tables

- Header row: `border-primary` (full black underline)
- Body rows: `border-border` (light gray underline)
- **Never** use colored cell backgrounds
- All text: Work Sans Regular, grayscale only

### Links

- Font: Work Sans Regular, -5% tracking
- Color: `text-primary` or `text-secondary`
- Hover: underline or subtle change

### Progress Bars

- Height: 4px–6px (slim)
- Track: `bg-border` (#E5E5E5)
- Fill: `bg-sunflower`
- Corners: `rounded-pill`

### Date Picker

- Selected date: solid `bg-lemon-meringue` fill (not outline)
- "Today" label: `text-sunflower` (#FFBE26) — exception to no-colored-text rule
- Range endpoints: `bg-sunflower` with rounded corners
- Range middle: `bg-lemon-meringue`

---

## Backgrounds & Surfaces

### Page Backgrounds

**Never use pure white (#FFFFFF).** Always use a warm gray.

| Surface            | Token              | Tailwind Class | Hex       |
| ------------------ | ------------------ | -------------- | --------- |
| Page background    | `--color-main`     | `bg-main`      | `#FAFAFA` |
| Alternate sections | `--color-alt`      | `bg-alt`       | `#F5F5F5` |
| Cards & modules    | `--color-card`     | `bg-card`      | `#F8F8F8` |
| Extra contrast     | `--color-contrast` | `bg-contrast`  | `#EFEFEF` |

### Color Fields for Section Separation

Choose based on the desired feeling:

| Feeling   | Colors                             | Usage                  |
| --------- | ---------------------------------- | ---------------------- |
| Neutral   | `bg-main`, `bg-alt`, `bg-contrast` | Professional, standard |
| Energetic | `bg-vanilla`, `bg-eggshell`        | Highlighting, optimism |

---

## Accessibility

- All interactive elements must have visible focus states using `focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:ring-offset-2`
- Every component is tested with `vitest-axe` for WCAG compliance
- Color contrast: `text-primary` on `bg-main` provides sufficient contrast. Verify all color combinations.
- Avoid white text (`text-white`) unless on sufficiently dark backgrounds (images, dark overlays)
- All components support `asChild` via Radix Slot for polymorphic rendering

---

## Quick Reference

### Do

- Use `bg-main` for page backgrounds (warm gray)
- Use `text-primary` for most text
- Use `font-sans` (Work Sans Regular) for everything except hero headings
- Use `font-display` (Libre Baskerville) only for hero-sized headings
- Use `rounded-pill` for buttons
- Follow the 10/90 color-to-grayscale ratio
- Keep body text under 65 characters wide

### Don't

- Use pure white (`#FFFFFF`) as a page background
- Use Sunflower or any color for text
- Use bold, medium, or light weight for Work Sans
- Use Libre Baskerville for anything below hero size
- Use complementary colors (purple/blue) with more presence than yellow
- Use square or slightly-rounded button corners
- Use colored cell backgrounds in tables
- Use tints or fades of the yellow spectrum — each yellow is its own color

---

## Implementation

### Token Source

All design tokens live in [src/styles/index.css](src/styles/index.css) using the Tailwind v4 `@theme` directive. This generates both CSS custom properties and corresponding utility classes automatically.

### Consuming Tokens

```tsx
// In components — use Tailwind utilities
<button className="bg-sunflower text-primary rounded-pill px-btn-x py-btn-y text-body font-sans">
  Click me
</button>

// In custom CSS — reference the CSS variables
.custom-element {
  color: var(--color-primary);
  font-family: var(--font-sans);
  letter-spacing: var(--text-body--letter-spacing);
}
```

### Exporting for Consumers

The tokens are also exported as a JavaScript object from [src/tailwind.preset.ts](src/tailwind.preset.ts) for consumers who need programmatic access.

```ts
import { engrateTheme } from '@engrate/components'
```

### Component Patterns

Components use `cva()` (class-variance-authority) for variant-based styling and `cn()` for class merging. See [.github/copilot-instructions.md](.github/copilot-instructions.md) for full development conventions.
