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

| Component     | Purpose                                  |
| ------------- | ---------------------------------------- |
| `Stack`       | Vertical/horizontal flex layout with gap |
| `Grid`        | CSS Grid layout wrapper                  |
| `Card`        | Container with border and background     |
| `Divider`     | Visual separator line                    |
| `EngrateLogo` | Brand logo with compact mode (icon only) |

### Typography Components

| Component | Purpose                         |
| --------- | ------------------------------- |
| `Heading` | h1-h6 headings with brand fonts |
| `Text`    | Body text with size variants    |
| `Eyebrow` | Small uppercase label text      |
| `Link`    | Styled anchor element           |

### Form Components

| Component         | Purpose                     |
| ----------------- | --------------------------- |
| `Button`          | Primary action element      |
| `Input`           | Text input field            |
| `Textarea`        | Multi-line text input       |
| `Checkbox`        | Boolean input               |
| `Radio`           | Single selection from group |
| `Slider`          | Value selection via drag    |
| `Switch`          | Toggle on/off               |
| `Select`          | Dropdown selection          |
| `DatePicker`      | Date selection              |
| `DateRangePicker` | Date range selection        |
| `DateTimePicker`  | Date and time selection     |
| `Calendar`        | Calendar primitive (shared) |
| `Label`           | Form field label            |
| `FormField`       | Field wrapper with label    |
| `FormMessage`     | Validation message display  |

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

| Component        | Purpose                                                   |
| ---------------- | --------------------------------------------------------- |
| `Breadcrumbs`    | Navigation path                                           |
| `TabList`        | Tab navigation                                            |
| `Stepper`        | Multi-step progress indicator (default & mini variants)   |
| `Pagination`     | Page navigation                                           |
| `PaginationDots` | Dot indicator for content switching                       |
| `Sidebar`        | Collapsible application sidebar nav with sub-item support |
| `Header`         | Page header with logo and nav                             |
| `Footer`         | Page footer with links and info                           |

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
        <Heading level="h2">Welcome</Heading>
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
        <FormField label="Email" htmlFor="email">
          <Input id="email" type="email" placeholder="you@example.com" />
        </FormField>
        <FormField label="Password" htmlFor="password">
          <Input id="password" type="password" />
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
  <Heading level="hero">Hero Title</Heading>
  <Heading level="h1">Page Title</Heading>
  <Text variant="lead">Lead paragraph with larger text.</Text>
  <Text variant="semi-lead">Semi lead paragraph.</Text>
  <Text variant="body-lg">Large body text for emphasis.</Text>
  <Text variant="body">Regular body text for content.</Text>
  <Text variant="body-sm">Smaller body text for secondary content.</Text>
  <Text variant="descriptive">Descriptive smaller text.</Text>
</Stack>
```

### Layout with Grid

```tsx
import { Grid, Card } from '@engrate/components'
;<Grid cols={3} gap="lg">
  <Card>Column 1</Card>
  <Card>Column 2</Card>
  <Card>Column 3</Card>
</Grid>
```

### Modal Dialog

```tsx
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  ModalClose,
  Button,
  Stack,
  Text,
} from '@engrate/components'

function Example() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Confirm Action</ModalTitle>
          <ModalDescription>This action cannot be undone.</ModalDescription>
        </ModalHeader>
        <Text>Are you sure you want to proceed?</Text>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button variant="primary">Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
```

### Sidebar Navigation

```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarItem,
  SidebarSeparator,
  SidebarSub,
  SidebarSubContent,
  SidebarSubTrigger,
  SidebarTrigger,
  EngrateLogo,
} from '@engrate/components'
import { Home, Settings, BarChart3, LogOut, Zap } from 'lucide-react'

function AppLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar aria-label="Main navigation">
        <SidebarHeader>
          <EngrateLogo size="sm" compact />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarItem icon={<Home className="h-4 w-4" />} active>
              Dashboard
            </SidebarItem>
            <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
              Analytics
            </SidebarItem>
            <SidebarSub>
              <SidebarSubTrigger icon={<Zap className="h-4 w-4" />}>
                Power Tariffs
              </SidebarSubTrigger>
              <SidebarSubContent>
                <SidebarItem>Spot Prices</SidebarItem>
                <SidebarItem>Forward Prices</SidebarItem>
                <SidebarItem>Network Tariffs</SidebarItem>
              </SidebarSubContent>
            </SidebarSub>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarItem icon={<Settings className="h-4 w-4" />}>
              Preferences
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem icon={<LogOut className="h-4 w-4" />}>
            Logout
          </SidebarItem>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-6">{/* Main content */}</main>
    </div>
  )
}
```

### Stepper

```tsx
import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from '@engrate/components'
import { useState } from 'react'

function OnboardingWizard() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <Stepper activeStep={activeStep}>
      <StepperItem step={1}>
        <StepperTrigger onClick={() => setActiveStep(1)}>
          <StepperIndicator />
          <StepperTitle>Your details</StepperTitle>
          <StepperDescription>Provide your name and email</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger onClick={() => setActiveStep(2)}>
          <StepperIndicator />
          <StepperTitle>Company details</StepperTitle>
          <StepperDescription>About your company</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger onClick={() => setActiveStep(3)}>
          <StepperIndicator />
          <StepperTitle>Invite your team</StepperTitle>
          <StepperDescription>Start collaborating</StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
  )
}

// Vertical orientation
;<Stepper activeStep={2} orientation="vertical">
  {/* Same StepperItem pattern */}
</Stepper>

// Mini variant — compact inline stepper
<Stepper variant="mini" totalSteps={4} activeStep={2} />

// Mini with small size, good for modal footers
<Stepper variant="mini" totalSteps={3} activeStep={1} size="sm" />

// Mini with accessible labels and click handler
<Stepper
  variant="mini"
  totalSteps={3}
  activeStep={2}
  labels={['Details', 'Payment', 'Confirm']}
  onStepClick={(step) => setActive(step)}
/>

// Mini sizes: sm, default, lg
```

### Header and Footer

```tsx
import {
  Header,
  HeaderLogo,
  HeaderNav,
  HeaderActions,
  Footer,
  FooterContent,
  FooterSection,
  FooterHeading,
  FooterLinks,
  FooterBottom,
  FooterCopyright,
  EngrateLogo,
  Button,
  Link,
} from '@engrate/components'

function PageLayout() {
  return (
    <>
      <Header sticky>
        <HeaderLogo>
          <EngrateLogo />
        </HeaderLogo>
        <HeaderNav>
          <Link variant="nav" href="/about">
            About
          </Link>
          <Link variant="nav" href="/services">
            Services
          </Link>
        </HeaderNav>
        <HeaderActions>
          <Button variant="primary">Sign In</Button>
        </HeaderActions>
      </Header>

      <main>{/* Page content */}</main>

      <Footer>
        <FooterContent>
          <FooterSection>
            <FooterHeading>Company</FooterHeading>
            <FooterLinks>
              <Link href="/about">About</Link>
              <Link href="/careers">Careers</Link>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <FooterCopyright>© 2026 Engrate</FooterCopyright>
        </FooterBottom>
      </Footer>
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

| Token            | Usage                        |
| ---------------- | ---------------------------- |
| `--font-display` | Libre Baskerville (headings) |
| `--font-sans`    | Work Sans (body text)        |
| `--font-mono`    | IBM Plex Mono (code)         |

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
<Grid cols={{ base: 1, md: 2, lg: 3 }} gap="lg">
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
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  Button,
} from '@engrate/components'
import { useState } from 'react'

function Example() {
  const [open, setOpen] = useState(false)

  return (
    <ToastProvider>
      <Button
        onClick={() => {
          setOpen(true)
          setTimeout(() => setOpen(false), 3000)
        }}
      >
        Save
      </Button>
      <Toast open={open} onOpenChange={setOpen} variant="success">
        <div className="grid gap-1">
          <ToastTitle>Success</ToastTitle>
          <ToastDescription>Your changes have been saved.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
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
