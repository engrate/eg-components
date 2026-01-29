import type { Meta, StoryObj } from '@storybook/react'

import { ProgressIndicator } from './ProgressIndicator'

const meta = {
  title: 'UI/ProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0-100)',
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Maximum progress value',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'The size of the progress indicator',
    },
    variant: {
      control: 'select',
      options: ['default', 'muted', 'success'],
      description: 'The visual style of the progress bar',
    },
    animated: {
      control: 'boolean',
      description: 'Whether the progress bar should animate',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether to show indeterminate loading state',
    },
    label: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50,
  },
}

export const Empty: Story = {
  args: {
    value: 0,
  },
}

export const Complete: Story = {
  args: {
    value: 100,
  },
}

export const Muted: Story = {
  args: {
    value: 60,
    variant: 'muted',
  },
}

export const Success: Story = {
  args: {
    value: 75,
    variant: 'success',
  },
}

export const Small: Story = {
  args: {
    value: 50,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    value: 50,
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    value: 50,
    size: 'xl',
  },
}

export const Animated: Story = {
  args: {
    value: 70,
    animated: true,
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}

export const WithCustomLabel: Story = {
  args: {
    value: 45,
    label: 'File upload progress',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Sizes</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-label text-tertiary mb-1 block">Small</span>
            <ProgressIndicator value={50} size="sm" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">Default</span>
            <ProgressIndicator value={50} size="default" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">Large</span>
            <ProgressIndicator value={50} size="lg" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">
              Extra Large
            </span>
            <ProgressIndicator value={50} size="xl" />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-label text-tertiary mb-1 block">
              Default (Sunflower)
            </span>
            <ProgressIndicator value={65} variant="default" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">Muted</span>
            <ProgressIndicator value={65} variant="muted" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">Success</span>
            <ProgressIndicator value={65} variant="success" />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const ProgressSteps: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-4">
      <h3 className="text-small text-secondary font-medium">
        Progress Steps Example
      </h3>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-small text-primary">Uploading files...</span>
          <span className="text-small text-secondary">3 of 5</span>
        </div>
        <ProgressIndicator value={60} size="default" />
      </div>
    </div>
  ),
}
