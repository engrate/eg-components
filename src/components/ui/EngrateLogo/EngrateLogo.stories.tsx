import type { Meta, StoryObj } from '@storybook/react'

import { EngrateLogo } from './EngrateLogo'

const meta: Meta<typeof EngrateLogo> = {
  title: 'Misc/EngrateLogo',
  component: EngrateLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the logo',
    },
    compact: {
      control: 'object',
      description:
        'Show only the icon without the wordmark. Supports responsive values like `{ base: true, md: false }`',
    },
  },
}

export default meta
type Story = StoryObj<typeof EngrateLogo>

export const Default: Story = {}

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
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

export const Compact: Story = {
  args: {
    compact: true,
  },
}

export const CompactLarge: Story = {
  args: {
    compact: true,
    size: 'lg',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="xs" />
        <span className="text-small text-secondary">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="sm" />
        <span className="text-small text-secondary">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="md" />
        <span className="text-small text-secondary">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="lg" />
        <span className="text-small text-secondary">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="xl" />
        <span className="text-small text-secondary">xl</span>
      </div>
    </div>
  ),
}

export const OnDarkBackground: Story = {
  render: () => (
    <div className="bg-contrast rounded p-8">
      <EngrateLogo size="lg" />
    </div>
  ),
}

export const CompactComparison: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="lg" />
        <span className="text-small text-secondary">Full</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="lg" compact />
        <span className="text-small text-secondary">Compact</span>
      </div>
    </div>
  ),
}

export const ResponsiveCompact: Story = {
  args: {
    size: 'lg',
    compact: { base: true, md: false },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Shows compact (icon only) on small screens, full logo on medium and up. Resize the viewport to see the change.',
      },
    },
  },
}

export const ResponsiveCompactReverse: Story = {
  args: {
    size: 'lg',
    compact: { base: false, lg: true },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Shows full logo on small/medium screens, compact on large and up.',
      },
    },
  },
}

export const WithCustomClassName: Story = {
  args: {
    size: 'lg',
    className: 'opacity-50',
  },
}
