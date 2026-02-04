import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../Label'

import { Slider } from './Slider'

const meta = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the slider',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    'aria-label': 'Default slider',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    disabled: true,
    'aria-label': 'Disabled slider',
  },
}

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    'aria-label': 'Range slider',
  },
}

export const WithStep: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
    'aria-label': 'Stepped slider',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="volume">Volume</Label>
      <Slider id="volume" defaultValue={[50]} max={100} aria-label="Volume" />
    </div>
  ),
}

export const WithValueDisplay: Story = {
  render: function RenderWithValue() {
    const [value, setValue] = React.useState([50])
    return (
      <div className="flex w-64 flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="brightness">Brightness</Label>
          <span className="text-small text-secondary">{value[0]}%</span>
        </div>
        <Slider
          id="brightness"
          value={value}
          onValueChange={setValue}
          max={100}
          aria-label="Brightness"
        />
      </div>
    )
  },
}

// Need to import React for the controlled component
import * as React from 'react'

export const AllStates: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Sizes</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-small text-tertiary mb-1 block">Small</span>
            <Slider
              defaultValue={[50]}
              max={100}
              size="sm"
              aria-label="Small slider"
            />
          </div>
          <div>
            <span className="text-small text-tertiary mb-1 block">Default</span>
            <Slider
              defaultValue={[50]}
              max={100}
              size="default"
              aria-label="Default slider"
            />
          </div>
          <div>
            <span className="text-small text-tertiary mb-1 block">Large</span>
            <Slider
              defaultValue={[50]}
              max={100}
              size="lg"
              aria-label="Large slider"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-small text-tertiary mb-1 block">Default</span>
            <Slider
              defaultValue={[50]}
              max={100}
              aria-label="Default state slider"
            />
          </div>
          <div>
            <span className="text-small text-tertiary mb-1 block">
              Disabled
            </span>
            <Slider
              defaultValue={[50]}
              max={100}
              disabled
              aria-label="Disabled slider"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Range slider
        </h3>
        <Slider
          defaultValue={[25, 75]}
          max={100}
          aria-label="Range selection slider"
        />
      </div>
    </div>
  ),
}
