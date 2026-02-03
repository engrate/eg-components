import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { EngrateLogo } from '../EngrateLogo'
import { Link } from '../Link'
import { Header, HeaderActions, HeaderLogo, HeaderNav } from './Header'

const meta = {
  title: 'Navigation/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'transparent', 'filled'],
      description: 'The visual style of the header',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The height of the header',
    },
    sticky: {
      control: 'boolean',
      description: 'Whether the header is sticky',
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="md" />
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Products
        </Link>
        <Link variant="nav" href="#">
          Solutions
        </Link>
        <Link variant="nav" href="#">
          Pricing
        </Link>
        <Link variant="nav" href="#">
          About
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
        <Button size="sm">Get Started</Button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: 'default',
    size: 'default',
  },
}

export const Transparent: Story = {
  render: (args) => (
    <div className="from-sunflower/20 bg-linear-to-b to-transparent">
      <Header {...args}>
        <HeaderLogo>
          <EngrateLogo size="md" />
        </HeaderLogo>
        <HeaderNav aria-label="Main navigation">
          <Link variant="nav" href="#">
            Products
          </Link>
          <Link variant="nav" href="#">
            Solutions
          </Link>
          <Link variant="nav" href="#">
            About
          </Link>
        </HeaderNav>
        <HeaderActions>
          <Button size="sm">Contact Us</Button>
        </HeaderActions>
      </Header>
      <div className="h-40" />
    </div>
  ),
  args: {
    variant: 'transparent',
    size: 'default',
  },
}

export const Filled: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="md" />
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Dashboard
        </Link>
        <Link variant="nav" href="#">
          Analytics
        </Link>
        <Link variant="nav" href="#">
          Settings
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button variant="secondary" size="sm">
          Logout
        </Button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: 'filled',
    size: 'default',
  },
}

export const Small: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="sm" />
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Home
        </Link>
        <Link variant="nav" href="#">
          About
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button size="sm">Sign In</Button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: 'default',
    size: 'sm',
  },
}

export const Large: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="lg" />
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Products
        </Link>
        <Link variant="nav" href="#">
          Enterprise
        </Link>
        <Link variant="nav" href="#">
          Resources
        </Link>
        <Link variant="nav" href="#">
          Developers
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button variant="ghost">Sign In</Button>
        <Button>Get Started</Button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: 'default',
    size: 'lg',
  },
}

export const Sticky: Story = {
  render: (args) => (
    <div>
      <Header {...args}>
        <HeaderLogo>
          <EngrateLogo size="md" />
        </HeaderLogo>
        <HeaderNav aria-label="Main navigation">
          <Link variant="nav" href="#">
            Home
          </Link>
          <Link variant="nav" href="#">
            About
          </Link>
          <Link variant="nav" href="#">
            Contact
          </Link>
        </HeaderNav>
        <HeaderActions>
          <Button size="sm">Sign In</Button>
        </HeaderActions>
      </Header>
      <div className="space-y-4 p-8">
        <p className="text-secondary">
          Scroll down to see the sticky header in action.
        </p>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="bg-alt rounded p-4">
            Content block {i + 1}
          </div>
        ))}
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    size: 'default',
    sticky: true,
  },
}

export const LogoAsLink: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderLogo asChild>
        <a href="/" aria-label="Home">
          <EngrateLogo size="md" />
        </a>
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Products
        </Link>
        <Link variant="nav" href="#">
          About
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button size="sm">Get Started</Button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: 'default',
    size: 'default',
  },
}

export const MinimalHeader: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="md" />
      </HeaderLogo>
      <HeaderActions>
        <Button size="sm">Sign In</Button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: 'default',
    size: 'default',
  },
}

export const CenteredNav: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="md" />
      </HeaderLogo>
      <HeaderNav
        aria-label="Main navigation"
        className="absolute left-1/2 -translate-x-1/2"
      >
        <Link variant="nav" href="#">
          Products
        </Link>
        <Link variant="nav" href="#">
          Solutions
        </Link>
        <Link variant="nav" href="#">
          Pricing
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button size="sm">Get Started</Button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: 'default',
    size: 'default',
  },
}
