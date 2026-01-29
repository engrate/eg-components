import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta = {
  title: 'UI/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['hero', 'h1', 'h2', 'h3', 'h4'],
      description: 'The visual and semantic level of the heading',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Override the HTML element for semantic flexibility',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child element using Radix Slot',
    },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 'h1',
  },
}

export const Hero: Story = {
  args: {
    children: 'Hero Heading',
    level: 'hero',
  },
}

export const H1: Story = {
  args: {
    children: 'Heading Level 1',
    level: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: 'Heading Level 2',
    level: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'Heading Level 3',
    level: 'h3',
  },
}

export const H4: Story = {
  args: {
    children: 'Heading Level 4',
    level: 'h4',
  },
}

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-6">
      <Heading level="hero">Hero — Libre Baskerville (60pt+)</Heading>
      <Heading level="h1">Heading 1 — Work Sans (40pt)</Heading>
      <Heading level="h2">Heading 2 — Work Sans (30pt)</Heading>
      <Heading level="h3">Heading 3 — Work Sans (25pt)</Heading>
      <Heading level="h4">
        Heading 4 — Work Sans (25pt, lighter tracking)
      </Heading>
    </div>
  ),
}

export const WithSemanticOverride: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-label text-tertiary">
        Hero styling with h2 semantics (for when h1 is used elsewhere):
      </p>
      <Heading level="hero" as="h2">
        Visually Hero, Semantically H2
      </Heading>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Heading level="h2" asChild>
      <a href="#example" className="hover:underline">
        Clickable Heading Link
      </a>
    </Heading>
  ),
}

export const TypographyScale: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          Hero — Libre Baskerville, 60pt, -2% tracking
        </p>
        <Heading level="hero">
          Building the Future of Sustainable Energy
        </Heading>
      </div>
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          H1 — Work Sans, 40pt, -4% tracking
        </p>
        <Heading level="h1">Solar Installation Services</Heading>
      </div>
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          H2 — Work Sans, 30pt, -3% tracking
        </p>
        <Heading level="h2">Why Choose Engrate?</Heading>
      </div>
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          H3 — Work Sans, 25pt, -2% tracking
        </p>
        <Heading level="h3">Our Commitment to Quality</Heading>
      </div>
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          H4 — Work Sans, 25pt, -1% tracking
        </p>
        <Heading level="h4">Technical Specifications</Heading>
      </div>
    </div>
  ),
}
