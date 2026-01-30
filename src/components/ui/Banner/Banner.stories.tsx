import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'

import { Banner } from './Banner'

const meta = {
  title: 'Feedback/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'neutral'],
      description: 'The semantic variant of the banner',
    },
    align: {
      control: 'select',
      options: ['left', 'center'],
      description: 'The alignment of the banner content',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component',
    },
    icon: {
      control: false,
      description: 'Optional icon to display before the content',
    },
    action: {
      control: false,
      description: 'Optional action element to display at the end',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Called when the dismiss button is clicked',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is an informational banner message.',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'New features are available. Check them out!',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Your changes have been saved successfully.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Your session will expire in 5 minutes.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Failed to connect to the server. Please try again.',
  },
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Maintenance scheduled for this weekend.',
  },
}

export const LeftAligned: Story = {
  args: {
    align: 'left',
    children: 'This banner content is left-aligned.',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'info',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    children: 'Banner with an information icon.',
  },
}

export const WithAction: Story = {
  args: {
    variant: 'warning',
    children: 'Your plan is about to expire.',
    action: (
      <Button variant="ghost" size="sm">
        Upgrade now
      </Button>
    ),
  },
}

export const Dismissible: Story = {
  args: {
    variant: 'success',
    children: 'This banner can be dismissed.',
    onDismiss: () => {
      // Dismiss handler
    },
  },
}

export const WithIconAndAction: Story = {
  args: {
    variant: 'info',
    align: 'left',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    children: 'You have 3 new notifications.',
    action: (
      <Button variant="ghost" size="sm">
        View all
      </Button>
    ),
  },
}

export const FullExample: Story = {
  args: {
    variant: 'info',
    align: 'left',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    children: 'We are updating our privacy policy. Please review the changes.',
    action: (
      <Button variant="ghost" size="sm">
        Learn more
      </Button>
    ),
    onDismiss: () => {
      // Dismiss handler
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col">
      <Banner variant="info">Info: Check out our latest updates!</Banner>
      <Banner variant="success">Success: Your profile has been updated.</Banner>
      <Banner variant="warning">
        Warning: Your password will expire soon.
      </Banner>
      <Banner variant="error">Error: Unable to save changes.</Banner>
      <Banner variant="neutral">Neutral: System maintenance tonight.</Banner>
    </div>
  ),
}
