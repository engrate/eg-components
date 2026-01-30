import type { Meta, StoryObj } from '@storybook/react'

import { Grid, GridItem } from './Grid'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 12],
      description: 'Number of columns in the grid',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Gap between grid items',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Vertical alignment of items',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Horizontal alignment of items',
    },
  },
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

const DemoBox = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`border-border bg-card rounded-lg border p-4 text-center ${className}`}
  >
    {children}
  </div>
)

export const Default: Story = {
  args: {
    cols: 3,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
      <DemoBox>Item 5</DemoBox>
      <DemoBox>Item 6</DemoBox>
    </Grid>
  ),
}

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 'lg',
  },
  render: (args) => (
    <Grid {...args}>
      <DemoBox>Left</DemoBox>
      <DemoBox>Right</DemoBox>
    </Grid>
  ),
}

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <DemoBox>1</DemoBox>
      <DemoBox>2</DemoBox>
      <DemoBox>3</DemoBox>
      <DemoBox>4</DemoBox>
    </Grid>
  ),
}

export const TwelveColumnLayout: Story = {
  args: {
    cols: 12,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem colSpan={8}>
        <DemoBox>Main Content (8 cols)</DemoBox>
      </GridItem>
      <GridItem colSpan={4}>
        <DemoBox>Sidebar (4 cols)</DemoBox>
      </GridItem>
    </Grid>
  ),
}

export const ComplexLayout: Story = {
  args: {
    cols: 12,
    gap: 'lg',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem colSpan="full">
        <DemoBox>Header (Full Width)</DemoBox>
      </GridItem>
      <GridItem colSpan={3}>
        <DemoBox>Sidebar</DemoBox>
      </GridItem>
      <GridItem colSpan={6}>
        <DemoBox>Main Content</DemoBox>
      </GridItem>
      <GridItem colSpan={3}>
        <DemoBox>Aside</DemoBox>
      </GridItem>
      <GridItem colSpan="full">
        <DemoBox>Footer (Full Width)</DemoBox>
      </GridItem>
    </Grid>
  ),
}

export const GapVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-secondary mb-2 text-sm">gap="none"</p>
        <Grid cols={3} gap="none">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap="sm"</p>
        <Grid cols={3} gap="sm">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap="md" (default)</p>
        <Grid cols={3} gap="md">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap="xl"</p>
        <Grid cols={3} gap="xl">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
    </div>
  ),
}

export const AlignmentOptions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-secondary mb-2 text-sm">align="start"</p>
        <Grid cols={3} gap="md" align="start" className="bg-alt h-32">
          <DemoBox>Short</DemoBox>
          <DemoBox className="py-8">Tall</DemoBox>
          <DemoBox>Short</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">align="center"</p>
        <Grid cols={3} gap="md" align="center" className="bg-alt h-32">
          <DemoBox>Short</DemoBox>
          <DemoBox className="py-8">Tall</DemoBox>
          <DemoBox>Short</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">align="end"</p>
        <Grid cols={3} gap="md" align="end" className="bg-alt h-32">
          <DemoBox>Short</DemoBox>
          <DemoBox className="py-8">Tall</DemoBox>
          <DemoBox>Short</DemoBox>
        </Grid>
      </div>
    </div>
  ),
}

export const WithRowSpan: Story = {
  args: {
    cols: 3,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem rowSpan={2}>
        <DemoBox className="h-full">Spans 2 rows</DemoBox>
      </GridItem>
      <DemoBox>2</DemoBox>
      <DemoBox>3</DemoBox>
      <DemoBox>4</DemoBox>
      <DemoBox>5</DemoBox>
    </Grid>
  ),
}

export const CardGrid: Story = {
  args: {
    cols: 3,
    gap: 'lg',
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          className="border-border bg-card rounded-lg border p-6 shadow-sm"
        >
          <h3 className="font-display mb-2 text-lg">Card {i + 1}</h3>
          <p className="text-secondary text-sm">
            This is a sample card layout using the Grid component.
          </p>
        </div>
      ))}
    </Grid>
  ),
}

export const ResponsiveColumns: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-secondary mb-4 text-sm">
          Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop
        </p>
        <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="md">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
          <DemoBox>Item 4</DemoBox>
          <DemoBox>Item 5</DemoBox>
          <DemoBox>Item 6</DemoBox>
        </Grid>
      </div>
    </div>
  ),
}

export const ResponsiveGap: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-secondary mb-4 text-sm">
          Responsive gap: small on mobile, large on desktop
        </p>
        <Grid cols={3} gap={{ base: 'sm', lg: 'xl' }}>
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
          <DemoBox>4</DemoBox>
          <DemoBox>5</DemoBox>
          <DemoBox>6</DemoBox>
        </Grid>
      </div>
    </div>
  ),
}

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-secondary mb-4 text-sm">
          Stacked on mobile, sidebar layout on desktop
        </p>
        <Grid cols={{ base: 1, lg: 12 }} gap="lg">
          <GridItem colSpan={{ base: 'full', lg: 8 }}>
            <DemoBox className="h-full">
              <h3 className="font-display mb-2 text-lg">Main Content</h3>
              <p className="text-secondary text-sm">
                Full width on mobile, 8 columns on desktop
              </p>
            </DemoBox>
          </GridItem>
          <GridItem colSpan={{ base: 'full', lg: 4 }}>
            <DemoBox className="h-full">
              <h3 className="font-display mb-2 text-lg">Sidebar</h3>
              <p className="text-secondary text-sm">
                Full width on mobile, 4 columns on desktop
              </p>
            </DemoBox>
          </GridItem>
        </Grid>
      </div>
    </div>
  ),
}

export const ResponsiveComplexLayout: Story = {
  render: () => (
    <Grid cols={{ base: 1, md: 6, lg: 12 }} gap={{ base: 'md', lg: 'lg' }}>
      <GridItem colSpan="full">
        <DemoBox>Header (Always Full Width)</DemoBox>
      </GridItem>
      <GridItem colSpan={{ base: 'full', md: 2, lg: 3 }}>
        <DemoBox className="h-full">
          <h4 className="mb-2 font-semibold">Nav</h4>
          <p className="text-secondary text-sm">
            Full on mobile
            <br />
            2/6 on tablet
            <br />
            3/12 on desktop
          </p>
        </DemoBox>
      </GridItem>
      <GridItem colSpan={{ base: 'full', md: 4, lg: 6 }}>
        <DemoBox className="h-full">
          <h4 className="mb-2 font-semibold">Main Content</h4>
          <p className="text-secondary text-sm">
            Full on mobile
            <br />
            4/6 on tablet
            <br />
            6/12 on desktop
          </p>
        </DemoBox>
      </GridItem>
      <GridItem colSpan={{ base: 'full', md: 6, lg: 3 }}>
        <DemoBox className="h-full">
          <h4 className="mb-2 font-semibold">Aside</h4>
          <p className="text-secondary text-sm">
            Full on mobile
            <br />
            Full (6/6) on tablet
            <br />
            3/12 on desktop
          </p>
        </DemoBox>
      </GridItem>
      <GridItem colSpan="full">
        <DemoBox>Footer (Always Full Width)</DemoBox>
      </GridItem>
    </Grid>
  ),
}
