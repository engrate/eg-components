import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from './Divider'

const meta = {
  title: 'Misc/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
    },
    decorative: {
      control: 'boolean',
      description:
        'When true, the divider is purely visual and hidden from screen readers',
    },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div className="h-16">
        <Story />
      </div>
    ),
  ],
}

export const InContent: Story = {
  args: {},
  render: () => (
    <div className="w-80 space-y-4">
      <p className="text-primary">
        This is some content above the divider. It provides context and
        information.
      </p>
      <Divider />
      <p className="text-primary">
        This is some content below the divider. It is visually separated from
        the above.
      </p>
    </div>
  ),
}

export const VerticalInFlex: Story = {
  args: {
    orientation: 'vertical',
  },
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-primary">Home</span>
      <Divider orientation="vertical" />
      <span className="text-primary">Products</span>
      <Divider orientation="vertical" />
      <span className="text-primary">About</span>
    </div>
  ),
}

export const WithCustomSpacing: Story = {
  args: {
    className: 'my-8',
  },
  render: (args) => (
    <div className="w-80">
      <p className="text-primary">Content with extra spacing.</p>
      <Divider {...args} />
      <p className="text-primary">More content below.</p>
    </div>
  ),
}

export const SemanticSeparator: Story = {
  args: {
    decorative: false,
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}
