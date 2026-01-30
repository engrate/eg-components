# Engrate Components - AI Coding Instructions

## Project Overview

React component library for Engrate's design system. Built with TypeScript, Tailwind CSS v4, and exported as both ESM/CJS bundles.

## Architecture

```
src/
├── components/ui/{Component}/   # Each component in its own folder
│   ├── Component.tsx            # Implementation using CVA for variants
│   ├── Component.test.tsx       # Vitest + Testing Library + vitest-axe
│   ├── Component.stories.tsx    # Storybook stories
│   └── index.ts                 # Named exports (component + variants + types)
├── lib/utils.ts                 # cn() helper for class merging
└── styles/
    ├── fonts.css                # @font-face declarations
    └── index.css                # Tailwind v4 with @theme design tokens
```

**Export chain**: `src/index.ts` → `components/index.ts` → `components/ui/index.ts` → `{Component}/index.ts`

## Component Patterns

### Creating Components

- Use `cva()` from `class-variance-authority` for variant-based styling
- Use `cn()` from `@/lib/utils` for class merging (combines clsx + tailwind-merge)
- Support `asChild` prop using `@radix-ui/react-slot` for polymorphism
- Always use `React.ComponentRef` and set `displayName`
- Export the component, its variants function, and props type

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

| Task       | Command             |
| ---------- | ------------------- |
| Dev server | `npm run dev`       |
| Tests.     | `npm run test`      |
| Storybook  | `npm run storybook` |
| Build      | `npm run build`     |
| Verify     | `npm run verify`    |

## Browser Automation

Use `agent-browser` for web automation. Run `agent-browser --help` for all commands.

Core workflow:

1. `agent-browser open <url>` - Navigate to page
2. `agent-browser snapshot -i` - Get interactive elements with refs (@e1, @e2)
3. `agent-browser click @e1` / `fill @e2 "text"` - Interact using refs
4. Re-snapshot after page changes

## Workflow

1. Make changes
2. Verify changes with `npm run verify`

- Always update Storybook stories for new/changed components
- Always update tests for new/changed components

## Key Conventions

- **Path alias**: Use `@/` for src imports (e.g., `import { cn } from '@/lib/utils'`)
- **Type definitions**: Use `interface` over `type` (enforced by ESLint)
- **Component folder structure**: Always include `.tsx`, `.test.tsx`, `.stories.tsx`, and `index.ts`
- **Exports**: Named exports only, no default exports for components

## General instructions

- Always reference `.github/skills/engrate-designer/SKILL.md` when designing React components.
- Always reference `.github/skills/react-component-developer/SKILL.md` when working on React components.
