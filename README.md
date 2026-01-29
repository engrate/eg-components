# Engrate Components

A React component library built with Tailwind CSS, following Engrate's brand guidelines. Features accessible, customizable components with TypeScript support.

## Installation

```bash
npm install @engrate/components
```

### Peer Dependencies

This library requires React 18 or 19:

```bash
npm install react react-dom
```

## Usage

Import the styles and use the components:

```tsx
import { Button } from '@engrate/components'
import '@engrate/components/styles.css'

function App() {
  return <Button variant="primary">Click me</Button>
}
```

### Using with Tailwind CSS v4

If your project uses Tailwind CSS v4, import the styles in your main CSS file. The component library exports all design tokens as CSS custom properties which Tailwind v4 will automatically detect:

```css
/* app.css */
@import 'tailwindcss';
@import '@engrate/components/styles.css';
```

This gives you access to all Engrate design tokens in your own components:

```tsx
// Your custom component can use Engrate's design tokens
function CustomCard({ children }) {
  return (
    <div className="bg-card border-border text-primary rounded-lg p-4">
      {children}
    </div>
  )
}
```

### Available Design Tokens

The library provides the following CSS custom properties:

**Colors:**

- `sunflower`, `sunflower-hover` - Primary brand color
- `primary`, `secondary`, `tertiary` - Text colors
- `main`, `alt`, `card`, `contrast` - Background colors
- `border` - Border color
- `error` - Error state color

**Typography:**

- `font-display` - Libre Baskerville (headings)
- `font-sans` - Work Sans (body text)
- `font-mono` - IBM Plex Mono (code)

## Development

### Setup

```bash
git clone https://github.com/engrate/eg-components.git
cd eg-components
npm install
```

### Scripts

| Command                   | Description                              |
| ------------------------- | ---------------------------------------- |
| `npm run dev`             | Start Vite dev server                    |
| `npm run build`           | Build library to `dist/`                 |
| `npm run storybook`       | Start Storybook at http://localhost:6006 |
| `npm run build-storybook` | Build static Storybook                   |
| `npm run test`            | Run tests in watch mode                  |
| `npm run test:run`        | Single test run                          |
| `npm run test:coverage`   | Run tests with coverage                  |
| `npm run lint`            | Check for linting errors                 |
| `npm run lint:fix`        | Fix linting errors                       |
| `npm run format`          | Format code with Prettier                |
| `npm run typecheck`       | Type-check without emitting              |

### Project Structure

```
src/
├── components/
│   ├── ui/             # Base UI components (Button, etc.)
│   └── layout/         # Layout components
├── lib/
│   └── utils.ts        # Utility functions (cn, etc.)
├── styles/
│   ├── fonts.css       # @font-face declarations
│   └── index.css       # Tailwind v4 with @theme tokens
├── test/
│   └── setup.ts        # Test configuration
└── index.ts            # Main entry point
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

## Publishing

To publish to [NPM](https://www.npmjs.com/package/@engrate/components) and [Github Pages](https://engrate.github.io/eg-components)

1. Make sure you have access to the NPM `@engrate` org
2. Update version in `package.json`
3. Run `make publish`

## License

MIT License

Copyright (c) 2026 Engrate AB

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
