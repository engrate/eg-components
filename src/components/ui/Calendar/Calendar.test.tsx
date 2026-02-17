import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Calendar } from './Calendar'

describe('Calendar', () => {
  it('renders in single mode', () => {
    render(<Calendar mode="single" />)
    expect(screen.getByText('Su')).toBeInTheDocument()
    expect(screen.getByText('Mo')).toBeInTheDocument()
  })

  it('renders in range mode', () => {
    render(<Calendar mode="range" />)
    expect(screen.getByText('Su')).toBeInTheDocument()
  })

  it('renders multiple months', () => {
    render(<Calendar mode="single" numberOfMonths={2} />)
    const tables = screen.getAllByRole('grid')
    expect(tables).toHaveLength(2)
  })

  it('applies custom className', () => {
    const { container } = render(
      <Calendar mode="single" className="custom-class" />
    )
    const root = container.firstChild as HTMLElement
    expect(root).toHaveClass('custom-class')
  })

  it('shows outside days by default', () => {
    // Outside days are shown by default via showOutsideDays prop
    const { container } = render(<Calendar mode="single" />)
    expect(container.querySelector('.rdp-root')).toBeInTheDocument()
  })

  it('has no accessibility violations in single mode', async () => {
    const { container } = render(<Calendar mode="single" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations in range mode', async () => {
    const { container } = render(<Calendar mode="range" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
