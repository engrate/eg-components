import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'

import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './Toast'

const meta = {
  title: 'UI/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'The visual variant of the toast',
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Notification</ToastTitle>
        <ToastDescription>This is a default toast message.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  ),
  args: {
    variant: 'default',
  },
}

export const Success: Story = {
  render: (args) => (
    <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Success!</ToastTitle>
        <ToastDescription>
          Your changes have been saved successfully.
        </ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  ),
  args: {
    variant: 'success',
  },
}

export const Error: Story = {
  render: (args) => (
    <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Error</ToastTitle>
        <ToastDescription>
          Something went wrong. Please try again.
        </ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  ),
  args: {
    variant: 'error',
  },
}

export const Warning: Story = {
  render: (args) => (
    <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Warning</ToastTitle>
        <ToastDescription>Your session is about to expire.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  ),
  args: {
    variant: 'warning',
  },
}

export const Info: Story = {
  render: (args) => (
    <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Information</ToastTitle>
        <ToastDescription>
          A new version is available for download.
        </ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  ),
  args: {
    variant: 'info',
  },
}

export const WithAction: Story = {
  render: (args) => (
    <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Scheduled</ToastTitle>
        <ToastDescription>Your meeting has been scheduled.</ToastDescription>
      </div>
      <ToastAction altText="Undo scheduling">Undo</ToastAction>
      <ToastClose />
    </Toast>
  ),
  args: {
    variant: 'default',
  },
}

export const TitleOnly: Story = {
  render: (args) => (
    <Toast {...args} open>
      <ToastTitle>Item added to cart</ToastTitle>
      <ToastClose />
    </Toast>
  ),
  args: {
    variant: 'success',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex min-w-90 flex-col gap-4">
      <Toast open variant="default">
        <div className="grid gap-1">
          <ToastTitle>Default</ToastTitle>
          <ToastDescription>A default toast notification.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast open variant="success">
        <div className="grid gap-1">
          <ToastTitle>Success</ToastTitle>
          <ToastDescription>Operation completed successfully.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast open variant="error">
        <div className="grid gap-1">
          <ToastTitle>Error</ToastTitle>
          <ToastDescription>
            An error occurred during the operation.
          </ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast open variant="warning">
        <div className="grid gap-1">
          <ToastTitle>Warning</ToastTitle>
          <ToastDescription>Please review before continuing.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast open variant="info">
        <div className="grid gap-1">
          <ToastTitle>Info</ToastTitle>
          <ToastDescription>Here is some useful information.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
    </div>
  ),
}

const InteractiveDemo = () => {
  const [open, setOpen] = useState(false)
  const [variant, setVariant] = useState<
    'default' | 'success' | 'error' | 'warning' | 'info'
  >('default')

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [open])

  const showToast = (v: typeof variant) => {
    setVariant(v)
    setOpen(true)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => showToast('default')}
          className="rounded-pill bg-alt hover:bg-contrast px-4 py-2 text-sm"
        >
          Show Default
        </button>
        <button
          onClick={() => showToast('success')}
          className="rounded-pill bg-eggshell hover:bg-vanilla px-4 py-2 text-sm"
        >
          Show Success
        </button>
        <button
          onClick={() => showToast('error')}
          className="rounded-pill bg-error/10 text-error hover:bg-error/20 px-4 py-2 text-sm"
        >
          Show Error
        </button>
        <button
          onClick={() => showToast('warning')}
          className="rounded-pill bg-vanilla hover:bg-lemon-meringue px-4 py-2 text-sm"
        >
          Show Warning
        </button>
        <button
          onClick={() => showToast('info')}
          className="rounded-pill bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20 px-4 py-2 text-sm"
        >
          Show Info
        </button>
      </div>
      <Toast open={open} onOpenChange={setOpen} variant={variant}>
        <div className="grid gap-1">
          <ToastTitle>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Toast
          </ToastTitle>
          <ToastDescription>
            This is an interactive {variant} toast notification.
          </ToastDescription>
        </div>
        <ToastClose />
      </Toast>
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
}
