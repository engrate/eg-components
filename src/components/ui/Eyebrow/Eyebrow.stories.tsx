import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from '../Heading'

import { Eyebrow } from './Eyebrow'

const meta = {
  title: 'Typography/Eyebrow',
  component: Eyebrow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
} satisfies Meta<typeof Eyebrow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Business Intelligence',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Product Update',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Case Study',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Feature Announcement',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'New Release',
  },
}

export const WithHeading: Story = {
  render: () => (
    <div className="space-y-2">
      <Eyebrow>Business Intelligence</Eyebrow>
      <Heading level="h2">Transform Your Data Into Insights</Heading>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Eyebrow variant="default">Default Variant</Eyebrow>
      </div>
      <div>
        <Eyebrow variant="primary">Primary Variant</Eyebrow>
      </div>
      <div>
        <Eyebrow variant="secondary">Secondary Variant</Eyebrow>
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Eyebrow size="sm">Small Size</Eyebrow>
      </div>
      <div>
        <Eyebrow size="default">Default Size</Eyebrow>
      </div>
      <div>
        <Eyebrow size="lg">Large Size</Eyebrow>
      </div>
    </div>
  ),
}

export const AsChild: Story = {
  render: () => (
    <Eyebrow asChild>
      <a href="#" className="hover:underline">
        Clickable Eyebrow
      </a>
    </Eyebrow>
  ),
}
