import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Pagination } from './Pagination'

const meta = {
  title: 'Table/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: { type: 'number', min: 1 },
      description: 'Current page number (1-indexed)',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the pagination buttons',
    },
    siblingCount: {
      control: { type: 'number', min: 0 },
      description:
        'Number of sibling pages to show on each side of current page',
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback when page changes',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    page: 1,
    totalPages: 5,
  },
}

export const MiddlePage: Story = {
  args: {
    page: 3,
    totalPages: 5,
  },
}

export const LastPage: Story = {
  args: {
    page: 5,
    totalPages: 5,
  },
}

export const ManyPages: Story = {
  args: {
    page: 5,
    totalPages: 10,
  },
}

export const LargePageCount: Story = {
  args: {
    page: 15,
    totalPages: 30,
  },
}

export const Small: Story = {
  args: {
    page: 3,
    totalPages: 10,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    page: 3,
    totalPages: 10,
    size: 'lg',
  },
}

export const SinglePage: Story = {
  args: {
    page: 1,
    totalPages: 1,
  },
}

export const TwoPages: Story = {
  args: {
    page: 1,
    totalPages: 2,
  },
}

const InteractiveTemplate = () => {
  const [page, setPage] = useState(1)
  const totalPages = 10

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-secondary text-small">
        Page {page} of {totalPages}
      </p>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
  args: {
    page: 1,
    totalPages: 10,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Small</h3>
        <Pagination page={3} totalPages={7} size="sm" />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Default</h3>
        <Pagination page={3} totalPages={7} size="default" />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Large</h3>
        <Pagination page={3} totalPages={7} size="lg" />
      </div>
    </div>
  ),
  args: {
    page: 3,
    totalPages: 7,
  },
}

export const WithEllipsis: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Page 1 (right ellipsis)
        </h3>
        <Pagination page={1} totalPages={20} />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Page 10 (both ellipsis)
        </h3>
        <Pagination page={10} totalPages={20} />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Page 20 (left ellipsis)
        </h3>
        <Pagination page={20} totalPages={20} />
      </div>
    </div>
  ),
  args: {
    page: 10,
    totalPages: 20,
  },
}
