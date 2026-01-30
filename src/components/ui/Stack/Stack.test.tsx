import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Stack } from './Stack'

describe('Stack', () => {
  it('renders with children', () => {
    render(
      <Stack data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    )
    expect(screen.getByTestId('stack')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('applies flex class by default', () => {
    render(<Stack data-testid="stack">Content</Stack>)
    expect(screen.getByTestId('stack')).toHaveClass('flex')
  })

  it('applies vertical direction by default', () => {
    render(<Stack data-testid="stack">Content</Stack>)
    expect(screen.getByTestId('stack')).toHaveClass('flex-col')
  })

  it('applies direction variants', () => {
    const { rerender } = render(
      <Stack data-testid="stack" direction="vertical">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('flex-col')

    rerender(
      <Stack data-testid="stack" direction="horizontal">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('flex-row')
  })

  it('applies gap variants', () => {
    const { rerender } = render(
      <Stack data-testid="stack" gap="none">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('gap-0')

    rerender(
      <Stack data-testid="stack" gap="sm">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('gap-2')

    rerender(
      <Stack data-testid="stack" gap="lg">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('gap-6')

    rerender(
      <Stack data-testid="stack" gap="2xl">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('gap-12')
  })

  it('applies align variants', () => {
    const { rerender } = render(
      <Stack data-testid="stack" align="start">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('items-start')

    rerender(
      <Stack data-testid="stack" align="center">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('items-center')

    rerender(
      <Stack data-testid="stack" align="end">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('items-end')

    rerender(
      <Stack data-testid="stack" align="baseline">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('items-baseline')
  })

  it('applies justify variants', () => {
    const { rerender } = render(
      <Stack data-testid="stack" justify="start">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('justify-start')

    rerender(
      <Stack data-testid="stack" justify="center">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('justify-center')

    rerender(
      <Stack data-testid="stack" justify="end">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('justify-end')

    rerender(
      <Stack data-testid="stack" justify="between">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('justify-between')

    rerender(
      <Stack data-testid="stack" justify="around">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('justify-around')

    rerender(
      <Stack data-testid="stack" justify="evenly">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('justify-evenly')
  })

  it('applies wrap variants', () => {
    const { rerender } = render(
      <Stack data-testid="stack" wrap="nowrap">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('flex-nowrap')

    rerender(
      <Stack data-testid="stack" wrap="wrap">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('flex-wrap')

    rerender(
      <Stack data-testid="stack" wrap="wrap-reverse">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('flex-wrap-reverse')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Stack asChild>
        <section data-testid="stack-section">Content</section>
      </Stack>
    )
    expect(screen.getByTestId('stack-section').tagName).toBe('SECTION')
    expect(screen.getByTestId('stack-section')).toHaveClass('flex')
  })

  it('merges custom className', () => {
    render(
      <Stack data-testid="stack" className="custom-class">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('flex', 'custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null } as unknown as React.RefObject<HTMLDivElement>
    render(
      <Stack ref={ref} data-testid="stack">
        Content
      </Stack>
    )
    expect(ref.current).toBe(screen.getByTestId('stack'))
  })

  it('passes through additional props', () => {
    render(
      <Stack data-testid="stack" aria-label="Stack container" role="group">
        Content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveAttribute(
      'aria-label',
      'Stack container'
    )
    expect(screen.getByTestId('stack')).toHaveAttribute('role', 'group')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations with horizontal direction', async () => {
    const { container } = render(
      <Stack direction="horizontal">
        <button>Action 1</button>
        <button>Action 2</button>
      </Stack>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
