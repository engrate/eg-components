import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './Tooltip'

const meta = {
  title: 'Misc/Tooltip',
  component: TooltipContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={100}>
        <Story />
      </TooltipProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'light'],
      description: 'The visual style of the tooltip',
    },
    showArrow: {
      control: 'boolean',
      description: 'Whether to show an arrow pointing to the trigger',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The preferred side of the trigger to render the tooltip',
    },
    sideOffset: {
      control: 'number',
      description: 'The distance in pixels from the trigger',
    },
  },
} satisfies Meta<typeof TooltipContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>This is a helpful tooltip</TooltipContent>
    </Tooltip>
  ),
  args: {
    variant: 'default',
  },
}

export const Light: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>Light variant tooltip</TooltipContent>
    </Tooltip>
  ),
  args: {
    variant: 'light',
  },
}

export const WithArrow: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>Tooltip with arrow</TooltipContent>
    </Tooltip>
  ),
  args: {
    showArrow: true,
  },
}

export const LightWithArrow: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>Light tooltip with arrow</TooltipContent>
    </Tooltip>
  ),
  args: {
    variant: 'light',
    showArrow: true,
  },
}

export const Positions: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-16 py-12">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Top (default)</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <div className="flex gap-16">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">Tooltip on left</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">Tooltip on right</TooltipContent>
        </Tooltip>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const OnIconButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Settings</TooltipContent>
    </Tooltip>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        This is a longer tooltip that contains more detailed information about
        the element. It wraps to multiple lines when needed.
      </TooltipContent>
    </Tooltip>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Default</Button>
            </TooltipTrigger>
            <TooltipContent>Default dark tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Light</Button>
            </TooltipTrigger>
            <TooltipContent variant="light">Light tooltip</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          With Arrow
        </h3>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Default + Arrow</Button>
            </TooltipTrigger>
            <TooltipContent showArrow>Default with arrow</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Light + Arrow</Button>
            </TooltipTrigger>
            <TooltipContent variant="light" showArrow>
              Light with arrow
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
}
