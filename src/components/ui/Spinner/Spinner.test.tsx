import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Spinner label="Loading content" />)
    expect(screen.getByRole('status')).toHaveAccessibleName('Loading content')
  })

  it('uses default label when none provided', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toHaveAccessibleName('Loading')
  })

  it('includes screen reader text', () => {
    render(<Spinner label="Processing" />)
    expect(screen.getByText('Processing')).toBeInTheDocument()
    expect(screen.getByText('Processing')).toHaveClass('sr-only')
  })

  it('applies variant classes', () => {
    const { rerender } = render(<Spinner variant="default" />)
    expect(screen.getByRole('status')).toHaveClass('text-sunflower')

    rerender(<Spinner variant="muted" />)
    expect(screen.getByRole('status')).toHaveClass('text-secondary')

    rerender(<Spinner variant="inverted" />)
    expect(screen.getByRole('status')).toHaveClass('text-white')
  })

  it('applies size classes', () => {
    const { rerender } = render(<Spinner size="sm" />)
    expect(screen.getByRole('status')).toHaveClass('h-4', 'w-4')

    rerender(<Spinner size="default" />)
    expect(screen.getByRole('status')).toHaveClass('h-6', 'w-6')

    rerender(<Spinner size="lg" />)
    expect(screen.getByRole('status')).toHaveClass('h-8', 'w-8')

    rerender(<Spinner size="xl" />)
    expect(screen.getByRole('status')).toHaveClass('h-12', 'w-12')
  })

  it('accepts custom className', () => {
    render(<Spinner className="custom-class" />)
    expect(screen.getByRole('status')).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Spinner ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Spinner label="Loading" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations with custom label', async () => {
    const { container } = render(<Spinner label="Saving your changes" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
