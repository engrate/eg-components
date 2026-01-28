import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../Label'
import { RadioGroup, RadioGroupItem } from './Radio'

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1" aria-label="Options">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <RadioGroup
      defaultValue="option1"
      className="flex gap-4"
      aria-label="Options"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="h-option1" />
        <Label htmlFor="h-option1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="h-option2" />
        <Label htmlFor="h-option2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="h-option3" />
        <Label htmlFor="h-option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="standard" aria-label="Shipping method">
      <div className="flex items-start gap-2">
        <RadioGroupItem value="standard" id="standard" className="mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="standard">Standard Shipping</Label>
          <span className="text-small text-tertiary">
            4-10 business days
          </span>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="express" id="express" className="mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="express">Express Shipping</Label>
          <span className="text-small text-tertiary">
            2-5 business days
          </span>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="overnight" id="overnight" className="mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="overnight">Overnight Shipping</Label>
          <span className="text-small text-tertiary">1 business day</span>
        </div>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1" aria-label="Options">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="d-option1" />
        <Label htmlFor="d-option1">Available option</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="d-option2" disabled />
        <Label htmlFor="d-option2">Disabled option</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="d-option3" />
        <Label htmlFor="d-option3">Available option</Label>
      </div>
    </RadioGroup>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-small font-medium text-secondary">
          States
        </h3>
        <RadioGroup aria-label="States demo">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="unselected" id="unselected" />
            <Label htmlFor="unselected">Unselected</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="disabled" id="disabled" disabled />
            <Label htmlFor="disabled">Disabled</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <h3 className="mb-3 text-small font-medium text-secondary">
          Selected
        </h3>
        <RadioGroup defaultValue="selected" aria-label="Selected demo">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="selected" id="selected" />
            <Label htmlFor="selected">Selected</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
}
