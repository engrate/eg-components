import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../Card'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'Misc/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'circular', 'text'],
      description: 'The shape variant of the skeleton',
    },
    width: {
      control: 'text',
      description:
        'Width of the skeleton (number for px, string for any CSS value)',
    },
    height: {
      control: 'text',
      description:
        'Height of the skeleton (number for px, string for any CSS value)',
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
}

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 48,
    height: 48,
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    width: 300,
    height: 16,
  },
}

export const TextLines: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-3/4" />
    </div>
  ),
}

export const CardSkeleton: Story = {
  render: () => (
    <Card className="w-80">
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-4">
          <Skeleton variant="circular" width={48} height={48} />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton variant="text" className="h-4 w-3/4" />
            <Skeleton variant="text" className="h-3 w-1/2" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton variant="text" className="h-4 w-full" />
          <Skeleton variant="text" className="h-4 w-full" />
          <Skeleton variant="text" className="h-4 w-2/3" />
        </div>
        <Skeleton className="h-40 w-full" />
      </div>
    </Card>
  ),
}

export const UserProfileSkeleton: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton variant="circular" width={64} height={64} />
      <div className="flex flex-col gap-2">
        <Skeleton variant="text" width={150} height={20} />
        <Skeleton variant="text" width={100} height={14} />
      </div>
    </div>
  ),
}

export const TableRowSkeleton: Story = {
  render: () => (
    <div className="flex w-full max-w-lg flex-col gap-3">
      {[1, 2, 3].map((row) => (
        <div key={row} className="flex items-center gap-4">
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="text" className="h-4 flex-1" />
          <Skeleton variant="text" width={80} height={16} />
          <Skeleton variant="text" width={60} height={16} />
        </div>
      ))}
    </div>
  ),
}

export const FormFieldSkeleton: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Skeleton variant="text" width={80} height={14} />
      <Skeleton className="h-10 w-full" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">Default (rounded-md)</span>
        <Skeleton width={200} height={40} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">
          Circular (rounded-full)
        </span>
        <Skeleton variant="circular" width={48} height={48} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">Text (subtle rounded)</span>
        <Skeleton variant="text" width={200} height={16} />
      </div>
    </div>
  ),
}
