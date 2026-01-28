# Engrate Components

A React component library built with Tailwind CSS, following Engrate's brand guidelines. Features accessible, customizable components with TypeScript support.

## Installation

```bash
npm install eg-components
```

### Peer Dependencies

This library requires React 18 or 19:

```bash
npm install react react-dom
```

## Usage

### Option 1: Pre-compiled CSS (Non-Tailwind Projects)

Import the compiled CSS bundle for projects not using Tailwind:

```tsx
import { Button } from 'eg-components'
import 'eg-components/styles.css'

function App() {
  return <Button variant="primary">Click me</Button>
}
```

### Option 2: Tailwind Preset (Tailwind Projects)

Extend your Tailwind config with Engrate's design tokens:

```js
// tailwind.config.js
import { egComponentsPreset } from 'eg-components/tailwind.preset'

export default {
  presets: [egComponentsPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/eg-components/dist/**/*.js',
  ],
}
```

Then use components without importing CSS:

```tsx
import { Button } from 'eg-components'

function App() {
  return <Button variant="primary">Click me</Button>
}
```

## Design Tokens

The library includes Engrate's complete design system:

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `sunflower` | `#FFBE26` | Primary brand color |
| `sunflower-hover` | `#E5AB22` | Primary hover state |
| `lemon-meringue` | `#FFF8A2` | Supporting backgrounds |
| `vanilla` | `#FFFCD0` | Accent fields |
| `eggshell` | `#FFFDE8` | Soft highlighting |

### Grayscale

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#1A1A1A` | Headings |
| `text-secondary` | `#4A4A4A` | Body text |
| `text-tertiary` | `#6A6A6A` | Labels, meta |
| `bg-main` | `#FAFAFA` | Page background |
| `bg-alt` | `#F5F5F5` | Section backgrounds |
| `bg-card` | `#F9F9F9` | Cards, containers |
| `bg-contrast` | `#EFEFEF` | High contrast areas |
| `border` | `#E5E5E5` | Lines, dividers |

### Typography

- **Display font**: Libre Baskerville (hero headings only, ≥60pt)
- **Sans font**: Work Sans (everything else)

```tsx
// Using Tailwind classes
<h1 className="font-display text-hero">Hero Heading</h1>
<h2 className="font-sans text-h1">Standard Heading</h2>
<p className="font-sans text-body">Body text</p>
```

## Utilities

### `cn()` - Class Name Merger

Combines `clsx` and `tailwind-merge` for conditional classes:

```tsx
import { cn } from 'eg-components'

function MyComponent({ className, isActive }) {
  return (
    <div className={cn('px-4 py-2', isActive && 'bg-sunflower', className)}>
      Content
    </div>
  )
}
```

## Development

### Setup

```bash
git clone https://github.com/engrate/eg-components.git
cd eg-components
npm install
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build library to `dist/` |
| `npm run storybook` | Start Storybook at http://localhost:6006 |
| `npm run build-storybook` | Build static Storybook |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Single test run |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Check for linting errors |
| `npm run lint:fix` | Fix linting errors |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Type-check without emitting |

### Project Structure

```
src/
├── components/
│   ├── ui/           # Base UI components (Button, etc.)
│   └── layout/       # Layout components
├── lib/
│   └── utils.ts      # Utility functions (cn, etc.)
├── styles/
│   ├── fonts.css     # @font-face declarations
│   └── index.css     # Tailwind entry point
├── test/
│   └── setup.ts      # Test configuration
├── tailwind.preset.ts # Exportable design tokens
└── index.ts          # Main entry point
```

### Adding a Component

1. Create component folder in `src/components/ui/ComponentName/`
2. Add files:
   - `ComponentName.tsx` - Component implementation
   - `ComponentName.test.tsx` - Tests with accessibility checks
   - `ComponentName.stories.tsx` - Storybook stories
   - `index.ts` - Barrel export
3. Export from `src/components/ui/index.ts`
4. Run tests and Storybook to verify

### Testing

Tests use Vitest with Testing Library and vitest-axe for accessibility:

```tsx
import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

## Brand Guidelines

This library follows Engrate's brand guidelines:

- **10/90 Rule**: 10% color, 90% grayscale
- **Never pure white**: Use `bg-main` (#FAFAFA) or warmer alternatives
- **Pill-shaped buttons**: Full border-radius (`rounded-pill`)
- **No bold fonts**: Use Regular weight only (Medium for emphasis)
- **Left-aligned text**: Default alignment

## License

ISC © Olof Kihlberg
