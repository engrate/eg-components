import type { Meta, StoryObj } from '@storybook/react'

import { Breadcrumbs, BreadcrumbItem, BreadcrumbSeparator } from './Breadcrumbs'

const meta = {
  title: 'Misc/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the breadcrumbs',
    },
    separator: {
      control: false,
      description: 'Custom separator between breadcrumb items',
    },
  },
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem href="#">Category</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Current Page</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const TwoItems: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>About</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const CustomSeparator: Story = {
  render: (args) => (
    <Breadcrumbs
      {...args}
      separator={
        <BreadcrumbSeparator className="text-tertiary">/</BreadcrumbSeparator>
      }
    >
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const ArrowSeparator: Story = {
  render: (args) => (
    <Breadcrumbs
      {...args}
      separator={
        <BreadcrumbSeparator className="text-tertiary">→</BreadcrumbSeparator>
      }
    >
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const AllLinks: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem href="#">Category</BreadcrumbItem>
      <BreadcrumbItem href="#">Subcategory</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const SingleItem: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem isCurrentPage>Home</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const LongLabels: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Enterprise Solutions</BreadcrumbItem>
      <BreadcrumbItem href="#">Energy Management Platform</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        Advanced Analytics Dashboard
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
}
