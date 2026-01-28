import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'lead',
        'semi-lead',
        'body-lg',
        'body',
        'descriptive',
        'label',
        'label-sm',
      ],
      description: 'The visual style variant of the text',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium'],
      description: 'Font weight (medium only for emphasis in lead/semi-lead)',
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label'],
      description: 'The HTML element to render',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child element using Radix Slot',
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      'The quick brown fox jumps over the lazy dog. This is standard body text used for most content throughout the application.',
    variant: 'body',
  },
}

export const Lead: Story = {
  args: {
    children:
      'Lead text is used for introductory paragraphs and important statements that need extra emphasis.',
    variant: 'lead',
  },
}

export const LeadWithEmphasis: Story = {
  args: {
    children:
      'Lead text with medium weight for additional emphasis on key messages.',
    variant: 'lead',
    weight: 'medium',
  },
}

export const SemiLead: Story = {
  args: {
    children:
      'Semi-lead text bridges the gap between lead and body text, perfect for secondary introductions.',
    variant: 'semi-lead',
  },
}

export const BodyLarge: Story = {
  args: {
    children:
      'Large body text provides slightly more prominence than standard body text while remaining readable for longer content.',
    variant: 'body-lg',
  },
}

export const Body: Story = {
  args: {
    children:
      'Body text is the default text style used for paragraphs and general content throughout the application.',
    variant: 'body',
  },
}

export const Descriptive: Story = {
  args: {
    children:
      'Descriptive text is smaller and used for supplementary information, captions, and metadata.',
    variant: 'descriptive',
  },
}

export const Label: Story = {
  args: {
    children: 'Form Label',
    variant: 'label',
  },
}

export const LabelSmall: Story = {
  args: {
    children: 'SMALL LABEL',
    variant: 'label-sm',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <Text variant="lead">Lead — Primary introductory text</Text>
      <Text variant="semi-lead">Semi-lead — Secondary introductory text</Text>
      <Text variant="body-lg">Body Large — Slightly emphasized body text</Text>
      <Text variant="body">Body — Standard paragraph text</Text>
      <Text variant="descriptive">Descriptive — Captions and metadata</Text>
      <Text variant="label">Label — Form labels and small headings</Text>
      <Text variant="label-sm">LABEL SMALL — TINY LABELS</Text>
    </div>
  ),
}

export const TypographyScale: Story = {
  render: () => (
    <div className="max-w-2xl space-y-8">
      <div className="border-b border-border pb-4">
        <Text variant="label" className="mb-2">
          Lead — Work Sans, 20pt, -2% tracking, Primary color
        </Text>
        <Text variant="lead">
          Engrate is revolutionizing the way we think about sustainable energy
          solutions for homes and businesses across the nation.
        </Text>
      </div>
      <div className="border-b border-border pb-4">
        <Text variant="label" className="mb-2">
          Lead (Medium) — Work Sans, 20pt, -2% tracking, Medium weight
        </Text>
        <Text variant="lead" weight="medium">
          Key message with emphasis for important announcements.
        </Text>
      </div>
      <div className="border-b border-border pb-4">
        <Text variant="label" className="mb-2">
          Semi-Lead — Work Sans, 15pt, 0% tracking, Secondary color
        </Text>
        <Text variant="semi-lead">
          Our team of experts works closely with you to design and install the
          perfect solar solution for your needs.
        </Text>
      </div>
      <div className="border-b border-border pb-4">
        <Text variant="label" className="mb-2">
          Body Large — Work Sans, 14pt, +1% tracking, Secondary color
        </Text>
        <Text variant="body-lg">
          We offer comprehensive installation services including site
          assessment, system design, permitting, and ongoing maintenance
          support.
        </Text>
      </div>
      <div className="border-b border-border pb-4">
        <Text variant="label" className="mb-2">
          Body — Work Sans, 16pt, 0% tracking, Secondary color
        </Text>
        <Text variant="body">
          Standard body text for general content. This is the most commonly used
          text style throughout the application and should be used for
          paragraphs, descriptions, and most written content.
        </Text>
      </div>
      <div className="border-b border-border pb-4">
        <Text variant="label" className="mb-2">
          Descriptive — Work Sans, 12pt, +4% tracking, Secondary color
        </Text>
        <Text variant="descriptive">
          Photo credit: Solar installation at Johnson residence, completed March
          2024. All rights reserved.
        </Text>
      </div>
      <div className="border-b border-border pb-4">
        <Text variant="label" className="mb-2">
          Label — Work Sans, 12pt, +2% tracking, Tertiary color
        </Text>
        <Text variant="label">Email Address</Text>
      </div>
      <div className="border-b border-border pb-4">
        <Text variant="label" className="mb-2">
          Label Small — Work Sans, 10pt, +14% tracking, Tertiary color
        </Text>
        <Text variant="label-sm">CATEGORY TAG</Text>
      </div>
    </div>
  ),
}

export const AsSpan: Story = {
  render: () => (
    <Text variant="body">
      This is a paragraph with{' '}
      <Text variant="lead" weight="medium" as="span">
        emphasized inline text
      </Text>{' '}
      in the middle of it.
    </Text>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Text variant="body" asChild>
      <a href="#example" className="underline hover:text-primary">
        This entire text is a clickable link
      </a>
    </Text>
  ),
}
