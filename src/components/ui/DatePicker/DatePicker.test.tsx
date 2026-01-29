import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'

import { DatePicker } from './DatePicker'

describe('DatePicker', () => {
  it('renders with placeholder', () => {
    render(<DatePicker placeholder="Select a date" />)
    expect(screen.getByText('Select a date')).toBeInTheDocument()
  })

  it('renders with a selected date', () => {
    const date = new Date(2025, 0, 15) // January 15, 2025
    render(<DatePicker value={date} />)
    expect(screen.getByText('01/15/2025')).toBeInTheDocument()
  })

  it('opens the calendar when clicked', async () => {
    const user = userEvent.setup()
    render(<DatePicker placeholder="Select a date" />)

    const trigger = screen.getByRole('button', { name: /choose date/i })
    await user.click(trigger)

    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('calls onChange when a date is selected', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<DatePicker onChange={handleChange} />)

    const trigger = screen.getByRole('button', { name: /choose date/i })
    await user.click(trigger)

    // Click on a day button (the "15" day)
    const dayButton = screen.getByRole('button', { name: /15/i })
    await user.click(dayButton)

    expect(handleChange).toHaveBeenCalledWith(expect.any(Date))
  })

  it('closes the calendar after selecting a date', async () => {
    const user = userEvent.setup()
    render(<DatePicker />)

    const trigger = screen.getByRole('button', { name: /choose date/i })
    await user.click(trigger)

    const dayButton = screen.getByRole('button', { name: /15/i })
    await user.click(dayButton)

    expect(screen.queryByRole('grid')).not.toBeInTheDocument()
  })

  it('can be disabled', () => {
    render(<DatePicker disabled placeholder="Disabled" />)
    expect(screen.getByRole('button', { name: /choose date/i })).toBeDisabled()
  })

  it('navigates to previous month', async () => {
    const user = userEvent.setup()
    const date = new Date(2025, 5, 15) // June 2025
    render(<DatePicker value={date} />)

    const trigger = screen.getByRole('button', { name: /choose date/i })
    await user.click(trigger)

    expect(screen.getByText('June 2025')).toBeInTheDocument()

    const prevButton = screen.getByRole('button', { name: /previous month/i })
    await user.click(prevButton)

    expect(screen.getByText('May 2025')).toBeInTheDocument()
  })

  it('navigates to next month', async () => {
    const user = userEvent.setup()
    const date = new Date(2025, 5, 15) // June 2025
    render(<DatePicker value={date} />)

    const trigger = screen.getByRole('button', { name: /choose date/i })
    await user.click(trigger)

    expect(screen.getByText('June 2025')).toBeInTheDocument()

    const nextButton = screen.getByRole('button', { name: /next month/i })
    await user.click(nextButton)

    expect(screen.getByText('July 2025')).toBeInTheDocument()
  })

  it('applies default variant classes', () => {
    render(<DatePicker placeholder="Default" />)
    expect(screen.getByRole('button', { name: /choose date/i })).toHaveClass(
      'border-border'
    )
  })

  it('applies error variant classes', () => {
    render(<DatePicker variant="error" placeholder="Error" />)
    expect(screen.getByRole('button', { name: /choose date/i })).toHaveClass(
      'border-error'
    )
  })

  it('applies custom className', () => {
    render(<DatePicker className="custom-class" placeholder="Custom" />)
    expect(screen.getByRole('button', { name: /choose date/i })).toHaveClass(
      'custom-class'
    )
  })

  it('formats date according to format prop', () => {
    const date = new Date(2025, 0, 15)
    render(<DatePicker value={date} format="dd/MM/yyyy" />)
    expect(screen.getByText('15/01/2025')).toBeInTheDocument()
  })

  it('selects today when Today button is clicked', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<DatePicker onChange={handleChange} />)

    const trigger = screen.getByRole('button', { name: /choose date/i })
    await user.click(trigger)

    const todayButton = screen.getByRole('button', { name: /^today$/i })
    await user.click(todayButton)

    expect(handleChange).toHaveBeenCalledWith(expect.any(Date))
    const calledDate = handleChange.mock.calls[0]?.[0] as Date
    const today = new Date()
    expect(calledDate.getDate()).toBe(today.getDate())
    expect(calledDate.getMonth()).toBe(today.getMonth())
    expect(calledDate.getFullYear()).toBe(today.getFullYear())
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <label id="date-label">Select Date</label>
        <DatePicker aria-label="Select Date" aria-describedby="date-label" />
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations when open', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <div>
        <label id="date-label">Select Date</label>
        <DatePicker aria-label="Select Date" aria-describedby="date-label" />
      </div>
    )

    const trigger = screen.getByRole('button', { name: /select date/i })
    await user.click(trigger)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations in error state', async () => {
    const { container } = render(
      <div>
        <label id="date-label">Select Date</label>
        <DatePicker
          variant="error"
          aria-label="Select Date"
          aria-describedby="error-msg"
        />
        <span id="error-msg">Please select a valid date</span>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
