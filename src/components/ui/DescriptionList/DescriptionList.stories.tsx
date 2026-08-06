import type { Meta, StoryObj } from '@storybook/react'

import {
  DescriptionList,
  DescriptionListDetails,
  DescriptionListItem,
  DescriptionListTerm,
} from './DescriptionList'

const meta = {
  title: 'Content/DescriptionList',
  component: DescriptionList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['stacked', 'inline'],
      description: 'Layout of each label/value pair',
    },
    divided: {
      control: 'boolean',
      description: 'Show a divider line between items',
    },
    size: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Density of the gaps/padding between items',
    },
  },
} satisfies Meta<typeof DescriptionList>

export default meta
type Story = StoryObj<typeof meta>

const contactItems = [
  { label: 'Name', value: 'Jane Doe' },
  { label: 'Email', value: 'jane@example.com' },
  { label: 'Phone number', value: '+1 (555) 123-4567' },
  { label: 'Location', value: 'Stockholm, Sweden' },
]

export const Default: Story = {
  args: {
    items: contactItems,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export const Inline: Story = {
  args: {
    items: contactItems,
    orientation: 'inline',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export const Divided: Story = {
  args: {
    items: contactItems,
    divided: true,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export const InlineDivided: Story = {
  args: {
    items: contactItems,
    orientation: 'inline',
    divided: true,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export const Compact: Story = {
  args: {
    items: contactItems,
    size: 'compact',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export const CompactDivided: Story = {
  args: {
    items: contactItems,
    orientation: 'inline',
    divided: true,
    size: 'compact',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export const ComposedChildren: Story = {
  render: () => (
    <div className="w-96">
      <DescriptionList orientation="inline" divided>
        <DescriptionListItem>
          <DescriptionListTerm>Status</DescriptionListTerm>
          <DescriptionListDetails>Active</DescriptionListDetails>
        </DescriptionListItem>
        <DescriptionListItem>
          <DescriptionListTerm>Plan</DescriptionListTerm>
          <DescriptionListDetails>Enterprise</DescriptionListDetails>
        </DescriptionListItem>
        <DescriptionListItem>
          <DescriptionListTerm>Renews</DescriptionListTerm>
          <DescriptionListDetails>January 1, 2027</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>
    </div>
  ),
}
