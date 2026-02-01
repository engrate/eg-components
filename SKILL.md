---
name: engrate-components
description: Use and integrate Engrate's React component library in applications. This skill covers importing components, using design tokens, and building UIs with the library. Use when building user interfaces that consume @engrate/components, styling applications with Engrate's design system, or integrating the component library into React projects.
---

# Engrate Components Library

## Overview

`@engrate/components` is a React component library implementing Engrate's design system. Built with TypeScript, Tailwind CSS v4, and accessible by default.

## Installation

```bash
npm install @engrate/components
```

Peer dependencies (React 18 or 19):

```bash
npm install react react-dom
```

## Basic Setup

### Importing Styles

Always import the component styles in your application:

```tsx
import '@engrate/components/styles.css'
```

### With Tailwind CSS v4

If your project uses Tailwind CSS v4, import in your CSS file to get access to all design tokens:

```css
@import 'tailwindcss';
@import '@engrate/components/styles.css';
```

## Available Components

### Layout Components

| Component | Purpose                                  |
| --------- | ---------------------------------------- |
| `Stack`   | Vertical/horizontal flex layout with gap |
| `Grid`    | CSS Grid layout wrapper                  |
| `Card`    | Container with border and background     |
| `Divider` | Visual separator line                    |

### Typography Components

| Component | Purpose                         |
| --------- | ------------------------------- |
| `Heading` | h1-h6 headings with brand fonts |
| `Text`    | Body text with size variants    |
| `Eyebrow` | Small uppercase label text      |
| `Link`    | Styled anchor element           |

### Form Components

| Component        | Purpose                     |
| ---------------- | --------------------------- |
| `Button`         | Primary action element      |
| `Input`          | Text input field            |
| `Textarea`       | Multi-line text input       |
| `Checkbox`       | Boolean input               |
| `Radio`          | Single selection from group |
| `Switch`         | Toggle on/off               |
| `Select`         | Dropdown selection          |
| `DatePicker`     | Date selection              |
| `DateTimePicker` | Date and time selection     |
| `Label`          | Form field label            |
| `FormField`      | Field wrapper with label    |
| `FormMessage`    | Validation message display  |

### Feedback Components

| Component           | Purpose                   |
| ------------------- | ------------------------- |
| `Toast`             | Temporary notification    |
| `Banner`            | Persistent message banner |
| `Badge`             | Status indicator          |
| `Spinner`           | Loading indicator         |
| `Skeleton`          | Content placeholder       |
| `ProgressIndicator` | Progress visualization    |

### Navigation Components

| Component     | Purpose         |
| ------------- | --------------- |
| `Breadcrumbs` | Navigation path |
| `TabList`     | Tab navigation  |
| `Pagination`  | Page navigation |

### Overlay Components

| Component      | Purpose             |
| -------------- | ------------------- |
| `Modal`        | Dialog overlay      |
| `AlertDialog`  | Confirmation dialog |
| `Tooltip`      | Hover information   |
| `DropdownMenu` | Action menu         |
| `ContextMenu`  | Right-click menu    |

### Data Display Components

| Component   | Purpose              |
| ----------- | -------------------- |
| `Table`     | Tabular data         |
| `Accordion` | Collapsible sections |
| `BarChart`  | Bar chart            |
| `LineChart` | Line chart           |
| `PieChart`  | Pie chart            |

## Component Usage Patterns

### Basic Import and Use

```tsx
import { Button, Card, Heading, Text, Stack } from '@engrate/components'

function MyComponent() {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={2}>Welcome</Heading>
        <Text>This is a card with stacked content.</Text>
        <Button variant="primary">Get Started</Button>
      </Stack>
    </Card>
  )
}
```

### Button Variants

```tsx
import { Button } from '@engrate/components'

// Primary (Sunflower yellow background)
<Button variant="primary">Primary Action</Button>

// Secondary (bordered, transparent)
<Button variant="secondary">Secondary</Button>

// Ghost (no background)
<Button variant="ghost">Ghost</Button>

// Sizes: sm, default, lg, icon
<Button size="lg">Large Button</Button>

// As child (for Next.js Link, etc.)
<Button asChild>
  <a href="/page">Link Button</a>
</Button>
```

### Form Layout

```tsx
import { FormField, Input, Button, Stack } from '@engrate/components'

function LoginForm() {
  return (
    <form>
      <Stack gap="lg">
        <FormField label="Email" required>
          <Input type="email" placeholder="you@example.com" />
        </FormField>
        <FormField label="Password" required>
          <Input type="password" />
        </FormField>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Stack>
    </form>
  )
}
```

### Typography Hierarchy

```tsx
import { Heading, Text, Eyebrow, Stack } from '@engrate/components'
;<Stack gap="md">
  <Eyebrow>Category</Eyebrow>
  <Heading level={1}>Page Title</Heading>
  <Text variant="lead">Lead paragraph with larger text.</Text>
  <Text variant="semi-lead'">Semi lead paragraph</Text>
  <Text variant="body">Regular body text for content.</Text>
  <Text variant="descriptive">Descriptive smaller text.</Text>
</Stack>
```

### Layout with Grid

```tsx
import { Grid, Card } from '@engrate/components'
;<Grid columns={3} gap="lg">
  <Card>Column 1</Card>
  <Card>Column 2</Card>
  <Card>Column 3</Card>
</Grid>
```

### Modal Dialog

```tsx
import { Modal, Button } from '@engrate/components'
import { useState } from 'react'

function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onOpenChange={setOpen} title="Confirm Action">
        <Text>Are you sure you want to proceed?</Text>
        <Stack direction="horizontal" gap="sm" justify="end">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary">Confirm</Button>
        </Stack>
      </Modal>
    </>
  )
}
```

## Design Tokens

The library exposes CSS custom properties for use in custom components.

### Colors

| Token                           | Usage                    |
| ------------------------------- | ------------------------ |
| `--color-sunflower`             | Primary brand color      |
| `--color-sunflower-hover`       | Sunflower hover state    |
| `--color-primary`               | Primary text color       |
| `--color-secondary`             | Secondary text color     |
| `--color-tertiary`              | Tertiary text color      |
| `--color-main` (background)     | Main page background     |
| `--color-alt` (background)      | Alternative background   |
| `--color-card` (background)     | Card background          |
| `--color-contrast` (background) | High contrast background |
| `--color-border`                | Border color             |
| `--color-error`                 | Error state color        |

### Typography

| Token                   | Usage                        |
| ----------------------- | ---------------------------- |
| `--font-family-display` | Libre Baskerville (headings) |
| `--font-family-sans`    | Work Sans (body text)        |
| `--font-family-mono`    | IBM Plex Mono (code)         |

### Using Tokens in Custom Components

```tsx
// With Tailwind CSS v4 (tokens are auto-detected)
function CustomCard({ children }) {
  return (
    <div className="bg-card border-border text-primary rounded-lg border p-4">
      {children}
    </div>
  )
}

// Using CSS custom properties directly
function CustomBanner() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-sunflower)',
        color: 'var(--color-primary)',
      }}
    >
      Custom styled banner
    </div>
  )
}
```

## Common Patterns

### Responsive Layouts

```tsx
<Grid columns={{ default: 1, md: 2, lg: 3 }} gap="lg">
  {items.map((item) => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</Grid>
```

### Loading States

```tsx
import { Skeleton, Spinner, Stack } from '@engrate/components'

// Skeleton for content placeholders
<Stack gap="sm">
  <Skeleton width="60%" height="1.5rem" />
  <Skeleton width="100%" height="1rem" />
  <Skeleton width="80%" height="1rem" />
</Stack>

// Spinner for loading indicators
<Spinner size="lg" />
```

### Toast Notifications

```tsx
import { Toast, useToast } from '@engrate/components'

function Example() {
  const { toast } = useToast()

  const handleClick = () => {
    toast({
      title: 'Success',
      description: 'Your changes have been saved.',
      variant: 'success',
    })
  }

  return <Button onClick={handleClick}>Save</Button>
}
```

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader friendly

## TypeScript Support

All components export their prop types:

```tsx
import { Button, type ButtonProps } from '@engrate/components'

// Use types for custom wrappers
interface MyButtonProps extends ButtonProps {
  loading?: boolean
}
```

## Layout Guidelines

Follow these layout principles when building UIs with Engrate components:

### Text Alignment & Width

- **Always left-align text** — creates clarity and readability
- **Body text max 65 characters wide** — use `max-width: 65ch` or equivalent
- Heading should be **at least twice as large** as body text

### Spacing & Grid

- **Grid spacing should be 50% tighter than typical defaults** — creates cohesive layouts
- **Even margins** — equal margins to top and left side creates natural squares
- **Card headline-to-body gap** — use 100% of body text line height for breathing room

### Content Width

- Tables, charts, and text blocks should be ~60-70% of container width (not full width)
- Keep content blocks relatively **square in proportion** — avoid ultra-wide, thin layouts
- Exception: photographs may span full width as backgrounds or hero images

### Backgrounds

- **Never use pure white (#FFFFFF)** for backgrounds
- Use light gray backgrounds: `bg-main` (#FAFAFA), `bg-alt` (#F5F5F5), `bg-card` (#F9F9F9)
- Light yellow backgrounds (Vanilla, Eggshell) can highlight sections

## Spacing

The component library uses a consistent spacing scale based on Tailwind's default values.

### Gap Values

Use `Stack` and `Grid` components with the `gap` prop:

| Gap   | Value   | Tailwind | Use Case                           |
| ----- | ------- | -------- | ---------------------------------- |
| `xs`  | 0.25rem | `gap-1`  | Tight spacing (icon + label)       |
| `sm`  | 0.5rem  | `gap-2`  | Compact layouts                    |
| `md`  | 1rem    | `gap-4`  | Default spacing (cards, form rows) |
| `lg`  | 1.5rem  | `gap-6`  | Section spacing                    |
| `xl`  | 2rem    | `gap-8`  | Major sections                     |
| `2xl` | 3rem    | `gap-12` | Page sections                      |

### Spacing Guidelines

```tsx
// Form fields — use md gap
<Stack gap="md">
  <FormField label="Name"><Input /></FormField>
  <FormField label="Email"><Input /></FormField>
</Stack>

// Button groups — use sm gap
<Stack direction="horizontal" gap="sm">
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save</Button>
</Stack>

// Page sections — use xl or 2xl gap
<Stack gap="xl">
  <section>Hero content</section>
  <section>Features</section>
</Stack>
```

### Brand Spacing Rules

- **Grid spacing 50% tighter than defaults** — prefer `sm` over `md`, `md` over `lg`
- **Card headline-to-body gap** — use 100% of body text line height
- **Even margins** — equal top and left margins create natural squares

## Design Rules

Critical rules to maintain brand consistency:

### Color Usage

| Rule                     | Description                                                                    |
| ------------------------ | ------------------------------------------------------------------------------ |
| **10/90 Rule**           | 10% color, 90% grayscale — colors look best when used sparingly                |
| **No colored text**      | All text must be grayscale only — never use Sunflower or other colors for text |
| **Sunflower is primary** | When only one color can be used, use Sunflower (#FFBE26)                       |

### Typography

| Rule                    | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| **-5% letter spacing**  | All text above 10pt uses -5% tracking (built into components) |
| **Libre Baskerville**   | Only for hero headings ≥60pt                                  |
| **Work Sans Regular**   | Everything else — no Bold, Medium, or Light weights allowed   |
| **Grayscale text only** | Prioritize black (#1A1A1A), use gray only for hierarchy       |

### Design Checklist

Before shipping, verify:

- [ ] Following 10/90 color vs grayscale ratio
- [ ] All text is grayscale (no colored text)
- [ ] Text is left-aligned
- [ ] Body text max 65 characters wide
- [ ] Using light gray backgrounds, not pure white

## Related Resources

- **Storybook Documentation**: Interactive component examples at https://engrate.github.io/eg-components
- **Design Guidelines**: See `.github/skills/engrate-designer/SKILL.md` for brand and design tokens
