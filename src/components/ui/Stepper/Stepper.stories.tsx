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

/* -------------------------------------------------------------------------------------------------
 * Mini variant stories
 * -----------------------------------------------------------------------------------------------*/

export const Mini: Story = {
  args: {
    variant: 'mini',
    activeStep: 2,
  },
  render: ({ activeStep }) => (
    <Stepper variant="mini" totalSteps={4} activeStep={activeStep} />
  ),
}

export const MiniFirstStep: Story = {
  args: {
    variant: 'mini',
    activeStep: 1,
  },
  render: ({ activeStep }) => (
    <Stepper variant="mini" totalSteps={3} activeStep={activeStep} />
  ),
}

export const MiniAllCompleted: Story = {
  args: {
    variant: 'mini',
    activeStep: 5,
  },
  render: ({ activeStep }) => (
    <Stepper variant="mini" totalSteps={4} activeStep={activeStep} />
  ),
}

export const MiniSmall: Story = {
  args: {
    variant: 'mini',
    activeStep: 3,
  },
  render: ({ activeStep }) => (
    <Stepper variant="mini" totalSteps={5} activeStep={activeStep} size="sm" />
  ),
}

export const MiniLarge: Story = {
  args: {
    variant: 'mini',
    activeStep: 2,
  },
  render: ({ activeStep }) => (
    <Stepper variant="mini" totalSteps={4} activeStep={activeStep} size="lg" />
  ),
}

export const MiniWithLabels: Story = {
  args: {
    variant: 'mini',
    activeStep: 2,
  },
  render: ({ activeStep }) => (
    <Stepper
      variant="mini"
      totalSteps={3}
      activeStep={activeStep}
      labels={['Details', 'Payment', 'Confirm']}
    />
  ),
}

export const MiniAllSizes: Story = {
  args: {
    activeStep: 2,
  },
  render: () => (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <span className="text-tertiary text-small w-16 text-right font-sans">
          sm
        </span>
        <Stepper variant="mini" totalSteps={4} activeStep={2} size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-tertiary text-small w-16 text-right font-sans">
          default
        </span>
        <Stepper variant="mini" totalSteps={4} activeStep={2} size="default" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-tertiary text-small w-16 text-right font-sans">
          lg
        </span>
        <Stepper variant="mini" totalSteps={4} activeStep={2} size="lg" />
      </div>
    </div>
  ),
}

export const MiniInteractive: Story = {
  args: {
    activeStep: 1,
  },
  render: () => {
    const [activeStep, setActiveStep] = useState(1)
    const totalSteps = 5

    return (
      <div className="flex flex-col items-center gap-6">
        <Stepper
          variant="mini"
          totalSteps={totalSteps}
          activeStep={activeStep}
          onStepClick={setActiveStep}
          labels={['Account', 'Profile', 'Settings', 'Review', 'Complete']}
        />
        <div className="flex gap-3">
          <button
            onClick={() => setActiveStep((s) => Math.max(1, s - 1))}
            disabled={activeStep <= 1}
            className="rounded-pill bg-alt text-primary hover:bg-contrast text-small px-4 py-1.5 font-sans transition-colors disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={() =>
              setActiveStep((s) => Math.min(totalSteps + 1, s + 1))
            }
            disabled={activeStep > totalSteps}
            className="rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover text-small px-4 py-1.5 font-sans transition-colors disabled:opacity-50"
          >
            {activeStep >= totalSteps ? 'Done' : 'Next'}
          </button>
        </div>
      </div>
    )
  },
}

export const MiniInContext: Story = {
  args: {
    activeStep: 2,
  },
  render: () => (
    <div className="bg-card border-border flex w-[400px] flex-col gap-4 rounded-lg border p-6">
      <div className="text-primary text-body font-sans font-medium tracking-tight">
        Create your account
      </div>
      <div className="bg-alt h-24 rounded-md" />
      <div className="flex items-center justify-between">
        <button className="rounded-pill bg-alt text-primary hover:bg-contrast text-small px-4 py-1.5 font-sans transition-colors">
          Back
        </button>
        <Stepper variant="mini" totalSteps={4} activeStep={2} size="sm" />
        <button className="rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover text-small px-4 py-1.5 font-sans transition-colors">
          Next
        </button>
      </div>
    </div>
  ),
}
