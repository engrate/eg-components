import type { Meta, StoryObj } from '@storybook/react'

import { Stack } from './Stack'

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Direction of the stack layout',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Gap between stack items',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Cross-axis alignment of items',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Main-axis alignment of items',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Whether items should wrap',
    },
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

const DemoBox = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`border-border bg-card rounded-lg border px-4 py-2 text-center ${className}`}
  >
    {children}
  </div>
)

export const Default: Story = {
  args: {
    direction: 'vertical',
    gap: 'md',
  },
  render: (args) => (
    <Stack {...args}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Stack>
  ),
}

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    gap: 'lg',
  },
  render: (args) => (
    <Stack {...args}>
      <DemoBox>First</DemoBox>
      <DemoBox>Second</DemoBox>
      <DemoBox>Third</DemoBox>
    </Stack>
  ),
}

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    gap: 'md',
  },
  render: (args) => (
    <Stack {...args}>
      <DemoBox>Left</DemoBox>
      <DemoBox>Center</DemoBox>
      <DemoBox>Right</DemoBox>
    </Stack>
  ),
}

export const CenteredHorizontal: Story = {
  args: {
    direction: 'horizontal',
    gap: 'md',
    align: 'center',
    justify: 'center',
  },
  render: (args) => (
    <Stack {...args} className="h-32 border border-dashed border-gray-300">
      <DemoBox>Centered</DemoBox>
      <DemoBox>Items</DemoBox>
    </Stack>
  ),
}

export const SpaceBetween: Story = {
  args: {
    direction: 'horizontal',
    justify: 'between',
    align: 'center',
  },
  render: (args) => (
    <Stack {...args} className="w-full">
      <DemoBox>Logo</DemoBox>
      <Stack direction="horizontal" gap="sm">
        <DemoBox>Nav 1</DemoBox>
        <DemoBox>Nav 2</DemoBox>
        <DemoBox>Nav 3</DemoBox>
      </Stack>
    </Stack>
  ),
}

export const WithDifferentGaps: Story = {
  render: () => (
    <Stack gap="xl">
      <div>
        <p className="text-text-secondary mb-2 text-sm">gap="xs"</p>
        <Stack direction="horizontal" gap="xs">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      <div>
        <p className="text-text-secondary mb-2 text-sm">gap="md"</p>
        <Stack direction="horizontal" gap="md">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      <div>
        <p className="text-text-secondary mb-2 text-sm">gap="xl"</p>
        <Stack direction="horizontal" gap="xl">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
    </Stack>
  ),
}

export const Wrapping: Story = {
  args: {
    direction: 'horizontal',
    gap: 'md',
    wrap: 'wrap',
  },
  render: (args) => (
    <Stack {...args} className="max-w-xs">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
      <DemoBox>Item 5</DemoBox>
      <DemoBox>Item 6</DemoBox>
    </Stack>
  ),
}

export const NestedStacks: Story = {
  render: () => (
    <Stack gap="lg">
      <DemoBox>Header</DemoBox>
      <Stack direction="horizontal" gap="lg">
        <Stack gap="md" className="flex-1">
          <DemoBox>Main Content</DemoBox>
          <DemoBox>More Content</DemoBox>
        </Stack>
        <Stack gap="md" className="w-48">
          <DemoBox>Sidebar</DemoBox>
          <DemoBox>Widget</DemoBox>
        </Stack>
      </Stack>
      <DemoBox>Footer</DemoBox>
    </Stack>
  ),
}

export const FormLayout: Story = {
  render: () => (
    <Stack gap="md" className="max-w-md">
      <Stack gap="xs">
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          className="border-border rounded-md border px-3 py-2"
          placeholder="you@example.com"
        />
      </Stack>
      <Stack gap="xs">
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          className="border-border rounded-md border px-3 py-2"
          placeholder="••••••••"
        />
      </Stack>
      <Stack direction="horizontal" justify="between" align="center">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </Stack>
      <button className="bg-sunflower hover:bg-sunflower-hover rounded-md px-4 py-2 font-medium">
        Sign in
      </button>
    </Stack>
  ),
}

export const AsChildPolymorphism: Story = {
  render: () => (
    <Stack asChild gap="md">
      <nav aria-label="Main navigation">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
    </Stack>
  ),
}
