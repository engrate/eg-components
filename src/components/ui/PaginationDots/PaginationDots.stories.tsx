import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { PaginationDots, PaginationDot } from './PaginationDots'

const meta = {
  title: 'Navigation/PaginationDots',
  component: PaginationDots,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the dots',
    },
    value: {
      control: { type: 'number', min: 0, max: 9 },
      description: 'The currently active dot index (zero-based)',
    },
  },
} satisfies Meta<typeof PaginationDots>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 0,
    children: undefined,
  },
  render: (args) => {
    const [active, setActive] = useState(args.value ?? 0)
    return (
      <PaginationDots value={active} onValueChange={setActive} size={args.size}>
        <PaginationDot index={0} />
        <PaginationDot index={1} />
        <PaginationDot index={2} />
        <PaginationDot index={3} />
        <PaginationDot index={4} />
      </PaginationDots>
    )
  },
}

export const ThreeDots: Story = {
  args: { value: 1 },
  render: (args) => {
    const [active, setActive] = useState(args.value ?? 0)
    return (
      <PaginationDots value={active} onValueChange={setActive}>
        <PaginationDot index={0} />
        <PaginationDot index={1} />
        <PaginationDot index={2} />
      </PaginationDots>
    )
  },
}

export const ManyDots: Story = {
  args: { value: 3 },
  render: (args) => {
    const [active, setActive] = useState(args.value ?? 0)
    return (
      <PaginationDots value={active} onValueChange={setActive}>
        {Array.from({ length: 8 }, (_, i) => (
          <PaginationDot key={i} index={i} />
        ))}
      </PaginationDots>
    )
  },
}

export const Sizes: Story = {
  args: { value: 2 },
  render: () => {
    const [smActive, setSmActive] = useState(2)
    const [defaultActive, setDefaultActive] = useState(2)
    const [lgActive, setLgActive] = useState(2)

    return (
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="text-small text-secondary">Small</span>
          <PaginationDots
            value={smActive}
            onValueChange={setSmActive}
            size="sm"
          >
            <PaginationDot index={0} />
            <PaginationDot index={1} />
            <PaginationDot index={2} />
            <PaginationDot index={3} />
            <PaginationDot index={4} />
          </PaginationDots>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-small text-secondary">Default</span>
          <PaginationDots
            value={defaultActive}
            onValueChange={setDefaultActive}
            size="default"
          >
            <PaginationDot index={0} />
            <PaginationDot index={1} />
            <PaginationDot index={2} />
            <PaginationDot index={3} />
            <PaginationDot index={4} />
          </PaginationDots>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-small text-secondary">Large</span>
          <PaginationDots
            value={lgActive}
            onValueChange={setLgActive}
            size="lg"
          >
            <PaginationDot index={0} />
            <PaginationDot index={1} />
            <PaginationDot index={2} />
            <PaginationDot index={3} />
            <PaginationDot index={4} />
          </PaginationDots>
        </div>
      </div>
    )
  },
}

export const WithContent: Story = {
  args: { value: 0 },
  render: () => {
    const slides = [
      { title: 'Welcome', description: 'Get started with our platform.' },
      { title: 'Discover', description: 'Explore energy data insights.' },
      { title: 'Optimize', description: 'Make data-driven decisions.' },
    ]
    const [active, setActive] = useState(0)

    return (
      <div className="flex w-80 flex-col items-center gap-6">
        <div className="bg-card border-border w-full rounded-lg border p-6 text-center">
          <h3 className="text-body text-primary font-sans font-normal">
            {slides[active]?.title}
          </h3>
          <p className="text-small text-secondary mt-1">
            {slides[active]?.description}
          </p>
        </div>

        <PaginationDots value={active} onValueChange={setActive}>
          {slides.map((_, i) => (
            <PaginationDot key={i} index={i} />
          ))}
        </PaginationDots>
      </div>
    )
  },
}
