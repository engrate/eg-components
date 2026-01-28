import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'sunflower',
        'lemon-meringue',
        'vanilla',
        'eggshell',
        'warm-purple',
        'cool-purple',
        'electric-blue',
        'deep-blue',
        'error',
        'secondary',
      ],
      description: 'The color variant of the badge',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the badge (t-shirt sizes)',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component (e.g., for links)',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Sunflower: Story = {
  args: {
    children: 'Sunflower',
    variant: 'sunflower',
  },
}

export const LemonMeringue: Story = {
  args: {
    children: 'Lemon Meringue',
    variant: 'lemon-meringue',
  },
}

export const Vanilla: Story = {
  args: {
    children: 'Vanilla',
    variant: 'vanilla',
  },
}

export const Eggshell: Story = {
  args: {
    children: 'Eggshell',
    variant: 'eggshell',
  },
}

export const WarmPurple: Story = {
  args: {
    children: 'Warm Purple',
    variant: 'warm-purple',
  },
}

export const CoolPurple: Story = {
  args: {
    children: 'Cool Purple',
    variant: 'cool-purple',
  },
}

export const ElectricBlue: Story = {
  args: {
    children: 'Electric Blue',
    variant: 'electric-blue',
  },
}

export const DeepBlue: Story = {
  args: {
    children: 'Deep Blue',
    variant: 'deep-blue',
  },
}

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const ExtraSmall: Story = {
  args: {
    children: 'XS',
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large',
    size: 'xl',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="sunflower">Sunflower</Badge>
      <Badge variant="lemon-meringue">Lemon Meringue</Badge>
      <Badge variant="vanilla">Vanilla</Badge>
      <Badge variant="eggshell">Eggshell</Badge>
      <Badge variant="warm-purple">Warm Purple</Badge>
      <Badge variant="cool-purple">Cool Purple</Badge>
      <Badge variant="electric-blue">Electric Blue</Badge>
      <Badge variant="deep-blue">Deep Blue</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Badge asChild variant="electric-blue">
      <a href="#">Link Badge</a>
    </Badge>
  ),
}
