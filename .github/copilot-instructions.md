# Engrate Components - AI Coding Instructions

## Project Overview

React component library for Engrate's design system. Built with TypeScript, Tailwind CSS, and exported as both ESM/CJS bundles with a Tailwind preset for consumers.

## Architecture

```
src/
├── components/ui/{Component}/   # Each component in its own folder
│   ├── Component.tsx            # Implementation using CVA for variants
│   ├── Component.test.tsx       # Vitest + Testing Library + vitest-axe
│   ├── Component.stories.tsx    # Storybook stories
│   └── index.ts                 # Named exports (component + variants + types)
├── lib/utils.ts                 # cn() helper for class merging
├── tailwind.preset.ts           # Design tokens exported for consumers
└── styles/                      # Global CSS with Tailwind layers
```

**Export chain**: `src/index.ts` → `components/index.ts` → `components/ui/index.ts` → `{Component}/index.ts`

## Component Patterns

### Creating Components

- Use `cva()` from `class-variance-authority` for variant-based styling
- Use `cn()` from `@/lib/utils` for class merging (combines clsx + tailwind-merge)
- Support `asChild` prop using `@radix-ui/react-slot` for polymorphism
- Always use `React.forwardRef` and set `displayName`
- Export the component, its variants function, and props type
- Always make sure components adhere to the [Engrate brand guidelines](./skills/engrate-brand-guidelines.md)
- Always follow guidelines found in the [React Component Library Maintainer skill](./skills/react-component-library-maintainer.md)

```tsx
// Pattern from Button.tsx
const componentVariants = cva('base-classes', {
  variants: { variant: {...}, size: {...} },
  defaultVariants: { variant: 'primary', size: 'default' }
})

interface ComponentProps extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof componentVariants> {
  asChild?: boolean
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(...)
```

### Design Tokens (use these, not raw values)

- **Colors**: `sunflower`, `sunflower-hover`, `text-primary`, `text-secondary`, `bg-main`, `bg-alt`, `bg-card`, `border`
- **Typography**: `font-display` (Libre Baskerville), `font-sans` (Work Sans), `text-hero`, `text-h1-h3`, `text-body`, `text-small`
- **Spacing**: `rounded-pill`, `px-btn-x`, `py-btn-y`

## Testing Requirements

- Every component needs accessibility testing with `vitest-axe`
- Use `@testing-library/react` and `@testing-library/user-event`
- Test pattern:

```tsx
import { axe } from 'vitest-axe'

it('has no accessibility violations', async () => {
  const { container } = render(<Component>...</Component>)
  expect(await axe(container)).toHaveNoViolations()
})
```

## Storybook Guidelines

All components must have Storybook stories demonstrating variants and usage examples.

## Commands

| Task          | Command             |
| ------------- | ------------------- |
| Dev server    | `npm run dev`       |
| Tests (watch) | `npm test`          |
| Tests (CI)    | `npm run test:run`  |
| Storybook     | `npm run storybook` |
| Build         | `npm run build`     |
| Lint          | `npm run lint`      |
| Type check    | `npm run typecheck` |

## Browser Automation

Use `agent-browser` for web automation. Run `agent-browser --help` for all commands.

Core workflow:

1. `agent-browser open <url>` - Navigate to page
2. `agent-browser snapshot -i` - Get interactive elements with refs (@e1, @e2)
3. `agent-browser click @e1` / `fill @e2 "text"` - Interact using refs
4. Re-snapshot after page changes

Always test changes using `agent-browser`.

## Workflow

1. Make changes
2. Run typecheck with `npm run typecheck`
3. Make sure code lints without errors or warnings with `npm run lint`
4. Make sure project builds without errors or warnings with `npm run build`
5. Make sure unit tests pass with `npm run test:run`
6. Run storybook in the background using `npm run storybook &`
7. Run `agent-browser` to verify UI behavior in storybook
8. Kill the storybook process

- Always ensure accessibility compliance with `vitest-axe`
- Always update Storybook stories for new/changed components
- Always update tests for new/changed components

## Key Conventions

- **Path alias**: Use `@/` for src imports (e.g., `import { cn } from '@/lib/utils'`)
- **Type definitions**: Use `interface` over `type` (enforced by ESLint)
- **Component folder structure**: Always include `.tsx`, `.test.tsx`, `.stories.tsx`, and `index.ts`
- **Exports**: Named exports only, no default exports for components
