import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from './Stepper'

const meta = {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeStep: {
      control: { type: 'number', min: 1, max: 4 },
      description: 'The current active step (1-indexed)',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    activeStep: 1,
  },
  render: ({ activeStep }) => (
    <Stepper activeStep={activeStep} className="w-[800px]">
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Your details</StepperTitle>
          <StepperDescription>Provide your name and email</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Company details</StepperTitle>
          <StepperDescription>
            A few details about your company
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Invite your team</StepperTitle>
          <StepperDescription>
            Start collaborating with your team
          </StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
  ),
}

export const SecondStep: Story = {
  args: {
    activeStep: 2,
  },
  render: ({ activeStep }) => (
    <Stepper activeStep={activeStep} className="w-[800px]">
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Your details</StepperTitle>
          <StepperDescription>Provide your name and email</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Company details</StepperTitle>
          <StepperDescription>
            A few details about your company
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Invite your team</StepperTitle>
          <StepperDescription>
            Start collaborating with your team
          </StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
  ),
}

export const AllCompleted: Story = {
  args: {
    activeStep: 4,
  },
  render: ({ activeStep }) => (
    <Stepper activeStep={activeStep} className="w-[800px]">
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Your details</StepperTitle>
          <StepperDescription>Provide your name and email</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Company details</StepperTitle>
          <StepperDescription>
            A few details about your company
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Invite your team</StepperTitle>
          <StepperDescription>
            Start collaborating with your team
          </StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
  ),
}

export const Vertical: Story = {
  args: {
    activeStep: 2,
    orientation: 'vertical',
  },
  render: ({ activeStep, orientation }) => (
    <Stepper
      activeStep={activeStep}
      orientation={orientation}
      className="w-[400px]"
    >
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <div>
            <StepperTitle>Your details</StepperTitle>
            <StepperDescription>
              Provide your name and email address. We will use this information
              to create your account
            </StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <div>
            <StepperTitle>Company details</StepperTitle>
            <StepperDescription>
              A few details about your company will help us personalize your
              experience
            </StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <div>
            <StepperTitle>Invite your team</StepperTitle>
            <StepperDescription>
              Start collaborating with your team by inviting them to join your
              account
            </StepperDescription>
          </div>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
  ),
}

export const FourSteps: Story = {
  args: {
    activeStep: 3,
  },
  render: ({ activeStep }) => (
    <Stepper activeStep={activeStep} className="w-[900px]">
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Address</StepperTitle>
          <StepperDescription>Add your address here</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Shipping</StepperTitle>
          <StepperDescription>
            Set your preferred shipping method
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Payment</StepperTitle>
          <StepperDescription>
            Add any payment information you have
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={4}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Checkout</StepperTitle>
          <StepperDescription>Confirm your order</StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(1)
    const totalSteps = 3

    return (
      <div className="w-[800px] space-y-8">
        <Stepper activeStep={activeStep}>
          <StepperItem step={1}>
            <StepperTrigger onClick={() => setActiveStep(1)}>
              <StepperIndicator />
              <StepperTitle>Your details</StepperTitle>
              <StepperDescription>
                Provide your name and email
              </StepperDescription>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>
          <StepperItem step={2}>
            <StepperTrigger onClick={() => setActiveStep(2)}>
              <StepperIndicator />
              <StepperTitle>Company details</StepperTitle>
              <StepperDescription>
                A few details about your company
              </StepperDescription>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>
          <StepperItem step={3}>
            <StepperTrigger onClick={() => setActiveStep(3)}>
              <StepperIndicator />
              <StepperTitle>Invite your team</StepperTitle>
              <StepperDescription>
                Start collaborating with your team
              </StepperDescription>
            </StepperTrigger>
          </StepperItem>
        </Stepper>

        <div className="flex justify-between">
          <button
            onClick={() => setActiveStep((s) => Math.max(1, s - 1))}
            disabled={activeStep <= 1}
            className="rounded-pill bg-alt text-primary hover:bg-contrast px-btn-x py-btn-y text-body-sm font-sans transition-colors disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={() =>
              setActiveStep((s) => Math.min(totalSteps + 1, s + 1))
            }
            disabled={activeStep > totalSteps}
            className="rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover px-btn-x py-btn-y text-body-sm font-sans transition-colors disabled:opacity-50"
          >
            {activeStep >= totalSteps ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    )
  },
}
