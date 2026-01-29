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
│   └── index.css       # Tailwind entry point
├── test/
│   └── setup.ts        # Test configuration
├── tailwind.preset.ts  # Exportable design tokens
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

## Publishing to NPM

Make sure you have access to the @engrate org in NPM and then run:

```
npm publish --access public
```

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
