import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { ProgressIndicator } from './ProgressIndicator'

describe('ProgressIndicator', () => {
  it('renders with default props', () => {
    render(<ProgressIndicator />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('displays correct progress value', () => {
    render(<ProgressIndicator value={50} max={100} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '50')
    expect(progressbar).toHaveAttribute('aria-valuemin', '0')
    expect(progressbar).toHaveAttribute('aria-valuemax', '100')
  })

  it('clamps value between 0 and max', () => {
    const { rerender } = render(<ProgressIndicator value={150} max={100} />)
    const progressbar = screen.getByRole('progressbar')
    // Value shown in aria should still be the actual value
    expect(progressbar).toHaveAttribute('aria-valuenow', '150')

    rerender(<ProgressIndicator value={-10} max={100} />)
    expect(progressbar).toHaveAttribute('aria-valuenow', '-10')
  })

  it('applies size classes', () => {
    const { rerender } = render(<ProgressIndicator size="sm" />)
    expect(screen.getByRole('progressbar')).toHaveClass('h-1')

    rerender(<ProgressIndicator size="default" />)
    expect(screen.getByRole('progressbar')).toHaveClass('h-2')

    rerender(<ProgressIndicator size="lg" />)
    expect(screen.getByRole('progressbar')).toHaveClass('h-3')

    rerender(<ProgressIndicator size="xl" />)
    expect(screen.getByRole('progressbar')).toHaveClass('h-4')
  })

  it('applies variant classes to progress bar', () => {
    const { container, rerender } = render(
      <ProgressIndicator value={50} variant="default" />
    )
    const progressBar = container.querySelector('[role="progressbar"] > div')
    expect(progressBar).toHaveClass('bg-sunflower')

    rerender(<ProgressIndicator value={50} variant="muted" />)
    expect(progressBar).toHaveClass('bg-secondary')

    rerender(<ProgressIndicator value={50} variant="success" />)
    expect(progressBar).toHaveClass('bg-electric-blue')
  })

  it('supports custom aria-label', () => {
    render(<ProgressIndicator label="Upload progress" value={25} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-label',
      'Upload progress'
    )
  })

  it('renders in indeterminate state', () => {
    render(<ProgressIndicator indeterminate />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).not.toHaveAttribute('aria-valuenow')
  })

  it('applies animated class when animated prop is true', () => {
    const { container } = render(
      <ProgressIndicator value={50} animated={true} />
    )
    const progressBar = container.querySelector('[role="progressbar"] > div')
    expect(progressBar).toHaveClass('animate-pulse')
  })

  it('supports custom className', () => {
    render(<ProgressIndicator className="custom-class" />)
    expect(screen.getByRole('progressbar')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ProgressIndicator value={50} label="Loading progress" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations in indeterminate state', async () => {
    const { container } = render(
      <ProgressIndicator indeterminate label="Loading" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
