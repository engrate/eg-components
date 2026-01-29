import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './Link'

const meta = {
  title: 'Misc/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'muted', 'nav'],
      description: 'The visual style of the link',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the link',
    },
    href: {
      control: 'text',
      description: 'The URL the link points to',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component (e.g., for Next.js Link)',
    },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
    variant: 'default',
  },
}

export const Muted: Story = {
  args: {
    href: '#',
    children: 'Muted Link',
    variant: 'muted',
  },
}

export const Nav: Story = {
  args: {
    href: '#',
    children: 'Navigation Link',
    variant: 'nav',
  },
}

export const Small: Story = {
  args: {
    href: '#',
    children: 'Small Link',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    href: '#',
    children: 'Large Link',
    size: 'lg',
  },
}

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex items-center gap-6">
          <Link href="#" variant="default">
            Default
          </Link>
          <Link href="#" variant="muted">
            Muted
          </Link>
          <Link href="#" variant="nav">
            Navigation
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Sizes</h3>
        <div className="flex items-center gap-6">
          <Link href="#" size="sm">
            Small
          </Link>
          <Link href="#" size="default">
            Default
          </Link>
          <Link href="#" size="lg">
            Large
          </Link>
        </div>
      </div>
    </div>
  ),
}

export const InParagraph: Story = {
  render: () => (
    <p className="text-body text-primary max-w-md">
      This is a paragraph with an <Link href="#">inline link</Link> that flows
      naturally with the text. Links can also be{' '}
      <Link href="#" variant="muted">
        muted
      </Link>{' '}
      for less emphasis.
    </p>
  ),
}
