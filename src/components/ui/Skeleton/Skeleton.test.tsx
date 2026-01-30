import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders with default props', () => {
    render(<Skeleton data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('is hidden from accessibility tree', () => {
    render(<Skeleton data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('applies variant classes', () => {
    const { rerender } = render(
      <Skeleton data-testid="skeleton" variant="default" />
    )
    expect(screen.getByTestId('skeleton')).toHaveClass('rounded-md')

    rerender(<Skeleton data-testid="skeleton" variant="circular" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('rounded-full')

    rerender(<Skeleton data-testid="skeleton" variant="text" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('rounded')
  })

  it('applies width as number', () => {
    render(<Skeleton data-testid="skeleton" width={200} />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '200px' })
  })

  it('applies width as string', () => {
    render(<Skeleton data-testid="skeleton" width="100%" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '100%' })
  })

  it('applies height as number', () => {
    render(<Skeleton data-testid="skeleton" height={40} />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ height: '40px' })
  })

  it('applies height as string', () => {
    render(<Skeleton data-testid="skeleton" height="2rem" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ height: '2rem' })
  })

  it('combines width and height', () => {
    render(<Skeleton data-testid="skeleton" width={100} height={100} />)
    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toHaveStyle({ width: '100px', height: '100px' })
  })

  it('accepts custom className', () => {
    render(<Skeleton data-testid="skeleton" className="custom-class" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('custom-class')
  })

  it('accepts custom style', () => {
    render(<Skeleton data-testid="skeleton" style={{ opacity: 0.5 }} />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ opacity: '0.5' })
  })

  it('merges custom style with width/height', () => {
    render(
      <Skeleton
        data-testid="skeleton"
        width={100}
        height={50}
        style={{ opacity: 0.5 }}
      />
    )
    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toHaveStyle({
      width: '100px',
      height: '50px',
      opacity: '0.5',
    })
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Skeleton ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Skeleton width={200} height={20} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations with circular variant', async () => {
    const { container } = render(
      <Skeleton variant="circular" width={40} height={40} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
