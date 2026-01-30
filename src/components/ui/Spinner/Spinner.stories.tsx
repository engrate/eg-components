import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'

import { Spinner } from './Spinner'

const meta = {
  title: 'Misc/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'muted', 'inverted'],
      description: 'The color variant of the spinner',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'The size of the spinner',
    },
    label: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Muted: Story = {
  args: {
    variant: 'muted',
  },
}

export const Inverted: Story = {
  args: {
    variant: 'inverted',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
}

export const WithCustomLabel: Story = {
  args: {
    label: 'Saving your changes...',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-small text-secondary">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="default" />
        <span className="text-small text-secondary">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-small text-secondary">Large</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-small text-secondary">Extra Large</span>
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="default" />
        <span className="text-small text-secondary">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="muted" />
        <span className="text-small text-secondary">Muted</span>
      </div>
      <div className="bg-primary flex flex-col items-center gap-2 rounded-lg p-4">
        <Spinner variant="inverted" />
        <span className="text-small text-white">Inverted</span>
      </div>
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button disabled>
        <Spinner size="sm" variant="muted" className="mr-2" />
        Loading...
      </Button>
      <Button variant="secondary" disabled>
        <Spinner size="sm" variant="muted" className="mr-2" />
        Processing...
      </Button>
    </div>
  ),
}

export const InlineWithText: Story = {
  render: () => (
    <div className="text-primary text-body flex items-center gap-2">
      <Spinner size="sm" />
      <span>Loading your data...</span>
    </div>
  ),
}

export const CenteredInContainer: Story = {
  render: () => (
    <div className="bg-card border-border flex h-48 w-64 items-center justify-center rounded-lg border">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="lg" />
        <span className="text-small text-secondary">Loading...</span>
      </div>
    </div>
  ),
}
