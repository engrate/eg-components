import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from '../Heading'
import { Text } from '../Text'
import { Card } from './Card'

const meta = {
  title: 'Misc/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'ghost'],
      description: 'The visual style of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'default', 'lg'],
      description: 'The padding size of the card',
    },
    bg: {
      control: 'select',
      options: [
        'card',
        'main',
        'alt',
        'contrast',
        'transparent',
        'sunflower',
        'sunflower-hover',
        'lemon-meringue',
        'vanilla',
        'eggshell',
        'warm-purple',
        'cool-purple',
        'electric-blue',
        'deep-blue',
        'error',
      ],
      description: 'The background color from Engrate design tokens',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Heading level="h3">Card Title</Heading>
        <Text>This is a default card with standard border and background.</Text>
      </>
    ),
  },
}

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <Heading level="h3">Elevated Card</Heading>
        <Text>This card has a shadow to create a floating effect.</Text>
      </>
    ),
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: (
      <>
        <Heading level="h3">Ghost Card</Heading>
        <Text>This card has no background or border.</Text>
      </>
    ),
  },
}

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <>
        <Heading level="h3">Small Padding</Heading>
        <Text>This card has reduced padding.</Text>
      </>
    ),
  },
}

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <>
        <Heading level="h3">Large Padding</Heading>
        <Text>This card has increased padding.</Text>
      </>
    ),
  },
}

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div className="p-6">
        <Heading level="h3">No Padding</Heading>
        <Text>
          This card has no padding. Useful when you want to control padding
          internally.
        </Text>
      </div>
    ),
  },
}

export const WithCustomContent: Story = {
  args: {
    children: (
      <>
        <div className="mb-4">
          <Heading level="h2">Product Card</Heading>
        </div>
        <Text className="mb-4">
          A versatile card component that can contain any content.
        </Text>
        <div className="flex gap-2">
          <span className="text-small text-secondary">• Feature 1</span>
          <span className="text-small text-secondary">• Feature 2</span>
          <span className="text-small text-secondary">• Feature 3</span>
        </div>
      </>
    ),
  },
}

export const CustomWidth: Story = {
  args: {
    className: 'w-96',
    children: (
      <>
        <Heading level="h3">Custom Width Card</Heading>
        <Text>
          You can customize the card with additional Tailwind classes.
        </Text>
      </>
    ),
  },
}

export const Interactive: Story = {
  args: {
    className: 'cursor-pointer hover:shadow-lg transition-shadow',
    children: (
      <>
        <Heading level="h3">Interactive Card</Heading>
        <Text>This card responds to hover with a shadow effect.</Text>
      </>
    ),
  },
}

export const SunflowerBackground: Story = {
  args: {
    bg: 'sunflower',
    children: (
      <>
        <Heading level="h3">Sunflower Card</Heading>
        <Text>This card uses the primary Engrate brand color.</Text>
      </>
    ),
  },
}

export const LemonMeringueBackground: Story = {
  args: {
    bg: 'lemon-meringue',
    children: (
      <>
        <Heading level="h3">Lemon Meringue Card</Heading>
        <Text>A softer yellow background for subtle highlighting.</Text>
      </>
    ),
  },
}

export const DeepBlueBackground: Story = {
  args: {
    bg: 'deep-blue',
    children: (
      <>
        <Heading level="h3">Deep Blue Card</Heading>
        <Text>Dark background with automatic white text for contrast.</Text>
      </>
    ),
  },
}

export const AllBackgroundColors: Story = {
  render: () => (
    <div className="grid max-w-2xl grid-cols-2 gap-4">
      <Card bg="card">
        <Text className="text-small font-medium">card (default)</Text>
      </Card>
      <Card bg="main">
        <Text className="text-small font-medium">main</Text>
      </Card>
      <Card bg="alt">
        <Text className="text-small font-medium">alt</Text>
      </Card>
      <Card bg="contrast">
        <Text className="text-small font-medium">contrast</Text>
      </Card>
      <Card bg="sunflower">
        <Text className="text-small font-medium">sunflower</Text>
      </Card>
      <Card bg="sunflower-hover">
        <Text className="text-small font-medium">sunflower-hover</Text>
      </Card>
      <Card bg="lemon-meringue">
        <Text className="text-small font-medium">lemon-meringue</Text>
      </Card>
      <Card bg="vanilla">
        <Text className="text-small font-medium">vanilla</Text>
      </Card>
      <Card bg="eggshell">
        <Text className="text-small font-medium">eggshell</Text>
      </Card>
      <Card bg="warm-purple">
        <Text className="text-small font-medium">warm-purple</Text>
      </Card>
      <Card bg="cool-purple">
        <Text className="text-small font-medium">cool-purple</Text>
      </Card>
      <Card bg="electric-blue">
        <Text className="text-small font-medium">electric-blue</Text>
      </Card>
      <Card bg="deep-blue">
        <Text className="text-small font-medium">deep-blue</Text>
      </Card>
      <Card bg="error">
        <Text className="text-small font-medium">error</Text>
      </Card>
    </div>
  ),
}
