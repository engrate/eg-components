---
name: react-component-library-maintainer
description: Create, extend, and maintain a Tailwind-based React component library. Use when building reusable UI components, design system primitives, form elements, layout components, or any React components styled with Tailwind CSS. Triggers on requests for component creation, component updates, component documentation, accessibility implementation, variant systems, or component API design.
---

# React Component Library (Tailwind CSS)

## Overview

Build production-ready React components with Tailwind CSS. Components should be composable, accessible, and follow consistent patterns.

## Component Structure

```
components/
├── ui/                    # Primitive components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   ├── Input/
│   └── ...
├── compound/              # Multi-part components
│   ├── Dialog/
│   ├── Dropdown/
│   └── ...
└── index.ts               # Public exports
```

## Component Patterns

### Basic Component Template

```tsx
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Variants
          {
            primary:
              "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
            secondary:
              "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
            ghost: "hover:bg-gray-100 focus-visible:ring-gray-500",
          }[variant],
          // Sizes
          {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base",
          }[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, type ButtonProps };
```

### Utility Function

```tsx
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Variant Systems

### Using cva (class-variance-authority)

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  // Base
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
        ghost: "hover:bg-gray-100",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
```

## Compound Components

### Slot Pattern (Radix-style)

```tsx
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} {...props} />;
  },
);

// Usage: <Button asChild><a href="/link">Click</a></Button>
```

### Context-Based Compound Components

```tsx
import { createContext, useContext, forwardRef, type ReactNode } from "react";

// Context
type CardContextValue = { variant: "default" | "bordered" };
const CardContext = createContext<CardContextValue | null>(null);

function useCardContext() {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error("Card components must be used within Card");
  return ctx;
}

// Root
type CardProps = { variant?: "default" | "bordered"; children: ReactNode };

function Card({ variant = "default", children }: CardProps) {
  return (
    <CardContext.Provider value={{ variant }}>
      <div
        className={cn(
          "rounded-lg bg-white",
          variant === "bordered" && "border border-gray-200",
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

// Parts
const CardHeader = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
  ),
);

const CardContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  ),
);

// Export
Card.Header = CardHeader;
Card.Content = CardContent;

export { Card };
```

## Accessibility

### Keyboard Navigation

```tsx
function useRovingFocus(items: HTMLElement[]) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        setFocusedIndex((i) => (i + 1) % items.length);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        setFocusedIndex((i) => (i - 1 + items.length) % items.length);
        break;
      case "Home":
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case "End":
        e.preventDefault();
        setFocusedIndex(items.length - 1);
        break;
    }
  };

  useEffect(() => {
    items[focusedIndex]?.focus();
  }, [focusedIndex, items]);

  return { focusedIndex, handleKeyDown };
}
```

### ARIA Patterns

```tsx
// Disclosure
<button aria-expanded={isOpen} aria-controls="content-id">Toggle</button>
<div id="content-id" hidden={!isOpen}>Content</div>

// Dialog
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Title</h2>
</div>

// Tabs
<div role="tablist">
  <button role="tab" aria-selected={selected} aria-controls="panel-id">Tab</button>
</div>
<div role="tabpanel" id="panel-id" aria-labelledby="tab-id">Content</div>

// Combobox
<input role="combobox" aria-expanded={isOpen} aria-controls="listbox-id" aria-autocomplete="list" />
<ul role="listbox" id="listbox-id">
  <li role="option" aria-selected={selected}>Option</li>
</ul>
```

### Focus Management

```tsx
import { useRef, useEffect } from "react";
import { createFocusTrap } from "focus-trap";

function useFocusTrap(active: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const trap = createFocusTrap(containerRef.current, {
      escapeDeactivates: true,
      returnFocusOnDeactivate: true,
    });

    trap.activate();
    return () => trap.deactivate();
  }, [active]);

  return containerRef;
}
```

## Form Components

### Input with Label

```tsx
type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: string;
  hint?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className, ...props }, ref) => {
    const inputId = id || useId();
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="space-y-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={cn(error && errorId, hint && hintId)}
          className={cn(
            "flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm",
            "placeholder:text-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500",
            className,
          )}
          {...props}
        />
        {hint && !error && (
          <p id={hintId} className="text-sm text-gray-500">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);
```

### Checkbox

```tsx
type CheckboxProps = Omit<ComponentPropsWithoutRef<"input">, "type"> & {
  label: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    const id = useId();
    return (
      <div className="flex items-center gap-2">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={cn(
            "h-4 w-4 rounded border-gray-300 text-blue-600",
            "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            className,
          )}
          {...props}
        />
        <label htmlFor={id} className="text-sm text-gray-700">
          {label}
        </label>
      </div>
    );
  },
);
```

## Animation Patterns

### Transition Component

```tsx
import { Transition } from "@headlessui/react";

<Transition
  show={isOpen}
  enter="transition ease-out duration-200"
  enterFrom="opacity-0 translate-y-1"
  enterTo="opacity-100 translate-y-0"
  leave="transition ease-in duration-150"
  leaveFrom="opacity-100 translate-y-0"
  leaveTo="opacity-0 translate-y-1"
>
  <div>Animated content</div>
</Transition>;
```

### CSS-Only Animation

```tsx
// Tailwind config
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-out",
        "slide-up": "slide-up 200ms ease-out",
      },
    },
  },
};

// Usage
<div className="animate-fade-in">Content</div>;
```

## Tailwind Configuration

### Theme Extension

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      fontSize: {
        "display-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
```

### Custom Plugin for Components

```js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn-base": {
          "@apply inline-flex items-center justify-center rounded-md font-medium":
            {},
          "@apply transition-colors focus-visible:outline-none focus-visible:ring-2":
            {},
        },
      });
    }),
  ],
};
```

## Testing

### Component Testing with Testing Library

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies variant classes", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-gray-100");
  });
});
```

### Accessibility Testing

```tsx
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

it("has no accessibility violations", async () => {
  const { container } = render(
    <Input label="Email" type="email" placeholder="you@example.com" />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Documentation

### Storybook Story

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Button", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Button", variant: "secondary" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};
```

## Critical Rules

1. **Always use `forwardRef`** - Components must forward refs for composition
2. **Always use `cn()` for className merging** - Ensures Tailwind classes merge correctly
3. **Export types alongside components** - Enable proper TypeScript usage
4. **Set `displayName`** - Required for React DevTools debugging
5. **Use semantic HTML** - `<button>`, `<input>`, `<label>` over generic `<div>`
6. **Include focus styles** - Every interactive element needs visible focus indicator
7. **Support `className` prop** - Allow consumers to extend styles
8. **Use CSS variables for theming** - Enable dark mode and customization
9. **Test keyboard navigation** - Tab, Enter, Space, Arrow keys where applicable
10. **Include ARIA attributes** - Labels, descriptions, expanded states
