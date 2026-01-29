import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'

import { Grid, GridItem } from './Grid'

describe('Grid', () => {
  it('renders with children', () => {
    render(
      <Grid data-testid="grid">
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    )
    expect(screen.getByTestId('grid')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('applies grid class by default', () => {
    render(<Grid data-testid="grid">Content</Grid>)
    expect(screen.getByTestId('grid')).toHaveClass('grid')
  })

  it('applies cols variants', () => {
    const { rerender } = render(
      <Grid data-testid="grid" cols={1}>
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('grid-cols-1')

    rerender(
      <Grid data-testid="grid" cols={3}>
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('grid-cols-3')

    rerender(
      <Grid data-testid="grid" cols={12}>
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('grid-cols-12')
  })

  it('applies gap variants', () => {
    const { rerender } = render(
      <Grid data-testid="grid" gap="none">
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('gap-0')

    rerender(
      <Grid data-testid="grid" gap="sm">
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('gap-2')

    rerender(
      <Grid data-testid="grid" gap="lg">
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('gap-6')
  })

  it('applies align variants', () => {
    const { rerender } = render(
      <Grid data-testid="grid" align="start">
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('items-start')

    rerender(
      <Grid data-testid="grid" align="center">
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('items-center')

    rerender(
      <Grid data-testid="grid" align="end">
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('items-end')
  })

  it('applies justify variants', () => {
    const { rerender } = render(
      <Grid data-testid="grid" justify="start">
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('justify-items-start')

    rerender(
      <Grid data-testid="grid" justify="center">
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('justify-items-center')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Grid asChild>
        <section data-testid="grid-section">Content</section>
      </Grid>
    )
    expect(screen.getByTestId('grid-section').tagName).toBe('SECTION')
    expect(screen.getByTestId('grid-section')).toHaveClass('grid')
  })

  it('merges custom className', () => {
    render(
      <Grid data-testid="grid" className="custom-class">
        Content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('grid', 'custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Grid>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('GridItem', () => {
  it('renders with children', () => {
    render(<GridItem data-testid="grid-item">Item content</GridItem>)
    expect(screen.getByTestId('grid-item')).toBeInTheDocument()
    expect(screen.getByText('Item content')).toBeInTheDocument()
  })

  it('applies colSpan variants', () => {
    const { rerender } = render(
      <GridItem data-testid="grid-item" colSpan={1}>
        Content
      </GridItem>
    )
    expect(screen.getByTestId('grid-item')).toHaveClass('col-span-1')

    rerender(
      <GridItem data-testid="grid-item" colSpan={6}>
        Content
      </GridItem>
    )
    expect(screen.getByTestId('grid-item')).toHaveClass('col-span-6')

    rerender(
      <GridItem data-testid="grid-item" colSpan="full">
        Content
      </GridItem>
    )
    expect(screen.getByTestId('grid-item')).toHaveClass('col-span-full')
  })

  it('applies rowSpan variants', () => {
    const { rerender } = render(
      <GridItem data-testid="grid-item" rowSpan={2}>
        Content
      </GridItem>
    )
    expect(screen.getByTestId('grid-item')).toHaveClass('row-span-2')

    rerender(
      <GridItem data-testid="grid-item" rowSpan="full">
        Content
      </GridItem>
    )
    expect(screen.getByTestId('grid-item')).toHaveClass('row-span-full')
  })

  it('applies colStart variants', () => {
    const { rerender } = render(
      <GridItem data-testid="grid-item" colStart={1}>
        Content
      </GridItem>
    )
    expect(screen.getByTestId('grid-item')).toHaveClass('col-start-1')

    rerender(
      <GridItem data-testid="grid-item" colStart="auto">
        Content
      </GridItem>
    )
    expect(screen.getByTestId('grid-item')).toHaveClass('col-start-auto')
  })

  it('renders as child when asChild is true', () => {
    render(
      <GridItem asChild colSpan={6}>
        <article data-testid="grid-item-article">Content</article>
      </GridItem>
    )
    expect(screen.getByTestId('grid-item-article').tagName).toBe('ARTICLE')
    expect(screen.getByTestId('grid-item-article')).toHaveClass('col-span-6')
  })

  it('merges custom className', () => {
    render(
      <GridItem data-testid="grid-item" className="custom-class">
        Content
      </GridItem>
    )
    expect(screen.getByTestId('grid-item')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Grid>
        <GridItem colSpan={6}>Item 1</GridItem>
        <GridItem colSpan={6}>Item 2</GridItem>
      </Grid>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
