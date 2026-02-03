import type { Meta, StoryObj } from '@storybook/react'

import { EngrateLogo } from '../EngrateLogo'
import { Link } from '../Link'
import {
  Footer,
  FooterBottom,
  FooterContent,
  FooterCopyright,
  FooterHeading,
  FooterLinks,
  FooterSection,
} from './Footer'

const meta = {
  title: 'Navigation/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'dark'],
      description: 'The visual style of the footer',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The padding/spacing of the footer',
    },
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Footer {...args}>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Product</FooterHeading>
          <FooterLinks aria-label="Product links">
            <Link variant="muted" href="#">
              Features
            </Link>
            <Link variant="muted" href="#">
              Pricing
            </Link>
            <Link variant="muted" href="#">
              Integrations
            </Link>
            <Link variant="muted" href="#">
              API
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks aria-label="Company links">
            <Link variant="muted" href="#">
              About
            </Link>
            <Link variant="muted" href="#">
              Careers
            </Link>
            <Link variant="muted" href="#">
              Blog
            </Link>
            <Link variant="muted" href="#">
              Press
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Resources</FooterHeading>
          <FooterLinks aria-label="Resources links">
            <Link variant="muted" href="#">
              Documentation
            </Link>
            <Link variant="muted" href="#">
              Help Center
            </Link>
            <Link variant="muted" href="#">
              Community
            </Link>
            <Link variant="muted" href="#">
              Status
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Legal</FooterHeading>
          <FooterLinks aria-label="Legal links">
            <Link variant="muted" href="#">
              Privacy
            </Link>
            <Link variant="muted" href="#">
              Terms
            </Link>
            <Link variant="muted" href="#">
              Cookies
            </Link>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterCopyright>© 2026 Engrate. All rights reserved.</FooterCopyright>
        <div className="flex gap-4">
          <Link variant="muted" size="sm" href="#">
            Twitter
          </Link>
          <Link variant="muted" size="sm" href="#">
            LinkedIn
          </Link>
          <Link variant="muted" size="sm" href="#">
            GitHub
          </Link>
        </div>
      </FooterBottom>
    </Footer>
  ),
  args: {
    variant: 'default',
    size: 'default',
  },
}

export const Filled: Story = {
  render: (args) => (
    <Footer {...args}>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Product</FooterHeading>
          <FooterLinks aria-label="Product links">
            <Link variant="muted" href="#">
              Features
            </Link>
            <Link variant="muted" href="#">
              Pricing
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks aria-label="Company links">
            <Link variant="muted" href="#">
              About
            </Link>
            <Link variant="muted" href="#">
              Careers
            </Link>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterCopyright>© 2026 Engrate</FooterCopyright>
      </FooterBottom>
    </Footer>
  ),
  args: {
    variant: 'filled',
    size: 'default',
  },
}

export const Dark: Story = {
  render: (args) => (
    <Footer {...args}>
      <FooterContent>
        <FooterSection>
          <FooterHeading className="text-white">Product</FooterHeading>
          <FooterLinks aria-label="Product links" className="text-white/70">
            <a href="#" className="hover:text-white">
              Features
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white">
              Integrations
            </a>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading className="text-white">Company</FooterHeading>
          <FooterLinks aria-label="Company links" className="text-white/70">
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Careers
            </a>
            <a href="#" className="hover:text-white">
              Blog
            </a>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading className="text-white">Legal</FooterHeading>
          <FooterLinks aria-label="Legal links" className="text-white/70">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom className="border-white/20">
        <FooterCopyright className="text-white/60">
          © 2026 Engrate. All rights reserved.
        </FooterCopyright>
      </FooterBottom>
    </Footer>
  ),
  args: {
    variant: 'dark',
    size: 'default',
  },
}

export const Small: Story = {
  render: (args) => (
    <Footer {...args}>
      <div className="flex items-center justify-between">
        <FooterCopyright>© 2026 Engrate</FooterCopyright>
        <div className="flex gap-4">
          <Link variant="muted" size="sm" href="#">
            Privacy
          </Link>
          <Link variant="muted" size="sm" href="#">
            Terms
          </Link>
        </div>
      </div>
    </Footer>
  ),
  args: {
    variant: 'default',
    size: 'sm',
  },
}

export const Large: Story = {
  render: (args) => (
    <Footer {...args}>
      <div className="mb-8">
        <EngrateLogo size="lg" />
        <p className="text-secondary mt-3 max-w-sm text-sm">
          Building the future of energy data. Making the transition to
          sustainability faster, more democratic, and more profitable.
        </p>
      </div>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Product</FooterHeading>
          <FooterLinks aria-label="Product links">
            <Link variant="muted" href="#">
              Features
            </Link>
            <Link variant="muted" href="#">
              Pricing
            </Link>
            <Link variant="muted" href="#">
              Integrations
            </Link>
            <Link variant="muted" href="#">
              API
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks aria-label="Company links">
            <Link variant="muted" href="#">
              About
            </Link>
            <Link variant="muted" href="#">
              Careers
            </Link>
            <Link variant="muted" href="#">
              Blog
            </Link>
            <Link variant="muted" href="#">
              Press
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Resources</FooterHeading>
          <FooterLinks aria-label="Resources links">
            <Link variant="muted" href="#">
              Documentation
            </Link>
            <Link variant="muted" href="#">
              Help Center
            </Link>
            <Link variant="muted" href="#">
              Community
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Legal</FooterHeading>
          <FooterLinks aria-label="Legal links">
            <Link variant="muted" href="#">
              Privacy Policy
            </Link>
            <Link variant="muted" href="#">
              Terms of Service
            </Link>
            <Link variant="muted" href="#">
              Cookie Policy
            </Link>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterCopyright>© 2026 Engrate. All rights reserved.</FooterCopyright>
        <div className="flex gap-4">
          <Link variant="muted" size="sm" href="#">
            Twitter
          </Link>
          <Link variant="muted" size="sm" href="#">
            LinkedIn
          </Link>
          <Link variant="muted" size="sm" href="#">
            GitHub
          </Link>
        </div>
      </FooterBottom>
    </Footer>
  ),
  args: {
    variant: 'default',
    size: 'lg',
  },
}

export const WithLogo: Story = {
  render: (args) => (
    <Footer {...args}>
      <FooterContent className="lg:grid-cols-5">
        <FooterSection className="col-span-2">
          <EngrateLogo size="md" />
          <p className="text-secondary max-w-xs text-sm">
            The global standard for energy data.
          </p>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Product</FooterHeading>
          <FooterLinks aria-label="Product links">
            <Link variant="muted" href="#">
              Features
            </Link>
            <Link variant="muted" href="#">
              Pricing
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks aria-label="Company links">
            <Link variant="muted" href="#">
              About
            </Link>
            <Link variant="muted" href="#">
              Careers
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Legal</FooterHeading>
          <FooterLinks aria-label="Legal links">
            <Link variant="muted" href="#">
              Privacy
            </Link>
            <Link variant="muted" href="#">
              Terms
            </Link>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterCopyright>© 2026 Engrate</FooterCopyright>
      </FooterBottom>
    </Footer>
  ),
  args: {
    variant: 'default',
    size: 'default',
  },
}

export const Minimal: Story = {
  render: (args) => (
    <Footer {...args}>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <EngrateLogo size="sm" />
        <FooterCopyright>© 2026 Engrate. All rights reserved.</FooterCopyright>
      </div>
    </Footer>
  ),
  args: {
    variant: 'default',
    size: 'sm',
  },
}
