import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import { PaginationDots, PaginationDot } from './PaginationDots'

function renderDots(value = 0, onValueChange?: (i: number) => void, count = 3) {
  return render(
    <PaginationDots value={value} onValueChange={onValueChange}>
      {Array.from({ length: count }, (_, i) => (
        <PaginationDot key={i} index={i} />
      ))}
    </PaginationDots>
  )
}

describe('PaginationDots', () => {
  it('renders the correct number of dots', () => {
    renderDots(0, undefined, 5)
    expect(screen.getAllByRole('button')).toHaveLength(5)
  })

  it('marks the active dot with aria-current', () => {
    renderDots(1)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0]).not.toHaveAttribute('aria-current')
    expect(buttons[1]).toHaveAttribute('aria-current', 'true')
    expect(buttons[2]).not.toHaveAttribute('aria-current')
  })

  it('applies active styling to the current dot', () => {
    renderDots(0)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0]).toHaveClass('bg-sunflower')
    expect(buttons[1]).toHaveClass('bg-border')
  })

  it('calls onValueChange when a dot is clicked', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    renderDots(0, handleChange)
    await user.click(screen.getByLabelText('Go to slide 3'))

    expect(handleChange).toHaveBeenCalledWith(2)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('provides accessible labels on each dot', () => {
    renderDots(0, undefined, 4)
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 4')).toBeInTheDocument()
  })

  it('applies size variant classes', () => {
    const { container } = render(
      <PaginationDots value={0} size="lg">
        <PaginationDot index={0} />
        <PaginationDot index={1} />
      </PaginationDots>
    )
    const group = container.querySelector('[role="group"]')
    expect(group).toHaveClass('gap-2.5')
  })

  it('supports className passthrough on container', () => {
    const { container } = render(
      <PaginationDots value={0} className="my-custom-class">
        <PaginationDot index={0} />
      </PaginationDots>
    )
    const group = container.querySelector('[role="group"]')
    expect(group).toHaveClass('my-custom-class')
  })

  it('supports className passthrough on dot', () => {
    render(
      <PaginationDots value={0}>
        <PaginationDot index={0} className="extra-dot-class" />
      </PaginationDots>
    )
    expect(screen.getByRole('button')).toHaveClass('extra-dot-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = renderDots(1, undefined, 4)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('throws when PaginationDot is used outside PaginationDots', () => {
    // Suppress console.error for expected error
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {
      // intentionally suppress React error boundary output
    })
    expect(() => render(<PaginationDot index={0} />)).toThrow(
      'PaginationDot must be used within a PaginationDots component'
    )
    spy.mockRestore()
  })
})
