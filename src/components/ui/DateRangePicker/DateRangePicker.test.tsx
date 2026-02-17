import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import { DateRangePicker } from './DateRangePicker'

describe('DateRangePicker', () => {
  it('renders with placeholder', () => {
    render(<DateRangePicker placeholder="Select date range" />)
    expect(screen.getByText('Select date range')).toBeInTheDocument()
  })

  it('renders with a selected range', () => {
    const range = {
      from: new Date(2025, 0, 10),
      to: new Date(2025, 0, 20),
    }
    render(<DateRangePicker value={range} />)
    expect(screen.getByText('01/10/2025 – 01/20/2025')).toBeInTheDocument()
  })

  it('renders with only from date', () => {
    const range = { from: new Date(2025, 0, 10) }
    render(<DateRangePicker value={range} />)
    expect(screen.getByText('01/10/2025 – ...')).toBeInTheDocument()
  })

  it('opens the calendar when clicked', async () => {
    const user = userEvent.setup()
    render(<DateRangePicker placeholder="Select date range" />)

    const trigger = screen.getByRole('button', {
      name: /choose date range/i,
    })
    await user.click(trigger)

    // Should show 2 month grids by default
    const grids = screen.getAllByRole('grid')
    expect(grids.length).toBeGreaterThanOrEqual(1)
  })

  it('shows two months by default', async () => {
    const user = userEvent.setup()
    render(<DateRangePicker />)

    const trigger = screen.getByRole('button', {
      name: /choose date range/i,
    })
    await user.click(trigger)

    const grids = screen.getAllByRole('grid')
    expect(grids).toHaveLength(2)
  })

  it('shows single month when numberOfMonths is 1', async () => {
    const user = userEvent.setup()
    render(<DateRangePicker numberOfMonths={1} />)

    const trigger = screen.getByRole('button', {
      name: /choose date range/i,
    })
    await user.click(trigger)

    const grids = screen.getAllByRole('grid')
    expect(grids).toHaveLength(1)
  })

  it('calls onChange when dates are selected', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<DateRangePicker onChange={handleChange} numberOfMonths={1} />)

    const trigger = screen.getByRole('button', {
      name: /choose date range/i,
    })
    await user.click(trigger)

    // Click on a day to set 'from'
    const dayButtons = screen.getAllByRole('gridcell')
    const day10 = dayButtons.find(
      (cell) => cell.querySelector('button')?.textContent === '10'
    )
    const day10Btn = day10?.querySelector('button') as HTMLButtonElement
    await user.click(day10Btn)

    expect(handleChange).toHaveBeenCalled()
  })

  it('can be disabled', () => {
    render(<DateRangePicker disabled placeholder="Disabled" />)
    expect(
      screen.getByRole('button', { name: /choose date range/i })
    ).toBeDisabled()
  })

  it('applies default variant classes', () => {
    render(<DateRangePicker placeholder="Default" />)
    expect(
      screen.getByRole('button', { name: /choose date range/i })
    ).toHaveClass('border-border')
  })

  it('applies error variant classes', () => {
    render(<DateRangePicker variant="error" placeholder="Error" />)
    expect(
      screen.getByRole('button', { name: /choose date range/i })
    ).toHaveClass('border-error')
  })

  it('applies custom className', () => {
    render(<DateRangePicker className="custom-class" placeholder="Custom" />)
    expect(
      screen.getByRole('button', { name: /choose date range/i })
    ).toHaveClass('custom-class')
  })

  it('formats dates according to format prop', () => {
    const range = {
      from: new Date(2025, 0, 10),
      to: new Date(2025, 0, 20),
    }
    render(<DateRangePicker value={range} format="dd/MM/yyyy" />)
    expect(screen.getByText('10/01/2025 – 20/01/2025')).toBeInTheDocument()
  })

  it('clears range when Clear button is clicked', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    const range = {
      from: new Date(2025, 0, 10),
      to: new Date(2025, 0, 20),
    }

    render(<DateRangePicker value={range} onChange={handleChange} />)

    const trigger = screen.getByRole('button', {
      name: /choose date range/i,
    })
    await user.click(trigger)

    const clearButton = screen.getByRole('button', { name: /clear/i })
    await user.click(clearButton)

    expect(handleChange).toHaveBeenCalledWith(undefined)
  })

  it('sets today as range when Today button is clicked', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<DateRangePicker onChange={handleChange} />)

    const trigger = screen.getByRole('button', {
      name: /choose date range/i,
    })
    await user.click(trigger)

    const todayButton = screen.getByRole('button', { name: /^today$/i })
    await user.click(todayButton)

    expect(handleChange).toHaveBeenCalled()
    const calledRange = handleChange.mock.calls[0]?.[0] as {
      from: Date
      to: Date
    }
    const today = new Date()
    expect(calledRange.from.getDate()).toBe(today.getDate())
    expect(calledRange.to.getDate()).toBe(today.getDate())
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <label id="range-label">Select Date Range</label>
        <DateRangePicker
          aria-label="Select Date Range"
          aria-describedby="range-label"
        />
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations when open', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <div>
        <label id="range-label">Select Date Range</label>
        <DateRangePicker
          aria-label="Select Date Range"
          aria-describedby="range-label"
        />
      </div>
    )

    const trigger = screen.getByRole('button', {
      name: /select date range/i,
    })
    await user.click(trigger)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations in error state', async () => {
    const { container } = render(
      <div>
        <label id="range-label">Select Date Range</label>
        <DateRangePicker
          variant="error"
          aria-label="Select Date Range"
          aria-describedby="error-msg"
        />
        <span id="error-msg">Please select a valid date range</span>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
