import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'

import { DateTimePicker } from './DateTimePicker'

describe('DateTimePicker', () => {
  it('renders with placeholder', () => {
    render(<DateTimePicker placeholder="Select date and time" />)
    expect(screen.getByText('Select date and time')).toBeInTheDocument()
  })

  it('renders with a selected date and time', () => {
    const date = new Date(2025, 0, 15, 14, 30) // January 15, 2025 at 14:30
    render(<DateTimePicker value={date} />)
    expect(screen.getByText('01/15/2025 14:30')).toBeInTheDocument()
  })

  it('opens the calendar when clicked', async () => {
    const user = userEvent.setup()
    render(<DateTimePicker placeholder="Select date and time" />)

    const trigger = screen.getByRole('button', {
      name: /choose date and time/i,
    })
    await user.click(trigger)

    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('calls onChange when a date is selected', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<DateTimePicker onChange={handleChange} />)

    const trigger = screen.getByRole('button', {
      name: /choose date and time/i,
    })
    await user.click(trigger)

    // Click on a day button (the "15" day)
    const dayButton = screen.getByRole('button', { name: /15/i })
    await user.click(dayButton)

    expect(handleChange).toHaveBeenCalledWith(expect.any(Date))
  })

  it('preserves time when selecting a new date', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()
    const initialDate = new Date(2025, 0, 10, 9, 45)

    render(<DateTimePicker value={initialDate} onChange={handleChange} />)

    const trigger = screen.getByRole('button', {
      name: /choose date and time/i,
    })
    await user.click(trigger)

    const dayButton = screen.getByRole('button', { name: /15/i })
    await user.click(dayButton)

    expect(handleChange).toHaveBeenCalledWith(expect.any(Date))
    const selectedDate = handleChange.mock.calls[0]?.[0] as Date
    expect(selectedDate.getHours()).toBe(9)
    expect(selectedDate.getMinutes()).toBe(45)
  })

  it('shows time input in the popover', async () => {
    const user = userEvent.setup()
    render(<DateTimePicker />)

    const trigger = screen.getByRole('button', {
      name: /choose date and time/i,
    })
    await user.click(trigger)

    expect(screen.getByLabelText(/select time/i)).toBeInTheDocument()
  })

  it('can be disabled', () => {
    render(<DateTimePicker disabled placeholder="Disabled" />)
    expect(
      screen.getByRole('button', { name: /choose date and time/i })
    ).toBeDisabled()
  })

  it('navigates to previous month', async () => {
    const user = userEvent.setup()
    const date = new Date(2025, 5, 15, 10, 0) // June 2025
    render(<DateTimePicker value={date} />)

    const trigger = screen.getByRole('button', {
      name: /choose date and time/i,
    })
    await user.click(trigger)

    expect(screen.getByText('June 2025')).toBeInTheDocument()

    const prevButton = screen.getByRole('button', { name: /previous month/i })
    await user.click(prevButton)

    expect(screen.getByText('May 2025')).toBeInTheDocument()
  })

  it('navigates to next month', async () => {
    const user = userEvent.setup()
    const date = new Date(2025, 5, 15, 10, 0) // June 2025
    render(<DateTimePicker value={date} />)

    const trigger = screen.getByRole('button', {
      name: /choose date and time/i,
    })
    await user.click(trigger)

    expect(screen.getByText('June 2025')).toBeInTheDocument()

    const nextButton = screen.getByRole('button', { name: /next month/i })
    await user.click(nextButton)

    expect(screen.getByText('July 2025')).toBeInTheDocument()
  })

  it('applies default variant classes', () => {
    render(<DateTimePicker placeholder="Default" />)
    expect(
      screen.getByRole('button', { name: /choose date and time/i })
    ).toHaveClass('border-border')
  })

  it('applies error variant classes', () => {
    render(<DateTimePicker variant="error" placeholder="Error" />)
    expect(
      screen.getByRole('button', { name: /choose date and time/i })
    ).toHaveClass('border-error')
  })

  it('applies custom className', () => {
    render(<DateTimePicker className="custom-class" placeholder="Custom" />)
    expect(
      screen.getByRole('button', { name: /choose date and time/i })
    ).toHaveClass('custom-class')
  })

  it('formats date according to format prop', () => {
    const date = new Date(2025, 0, 15, 9, 30)
    render(<DateTimePicker value={date} format="dd/MM/yyyy HH:mm" />)
    expect(screen.getByText('15/01/2025 09:30')).toBeInTheDocument()
  })

  it('selects current date and time when Now button is clicked', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<DateTimePicker onChange={handleChange} />)

    const trigger = screen.getByRole('button', {
      name: /choose date and time/i,
    })
    await user.click(trigger)

    const nowButton = screen.getByRole('button', { name: /^now$/i })
    await user.click(nowButton)

    expect(handleChange).toHaveBeenCalledWith(expect.any(Date))
    const calledDate = handleChange.mock.calls[0]?.[0] as Date
    const now = new Date()
    // Check that the date is close to now (within 1 minute)
    expect(Math.abs(calledDate.getTime() - now.getTime())).toBeLessThan(60000)
  })

  it('closes the calendar after clicking Now', async () => {
    const user = userEvent.setup()
    render(<DateTimePicker />)

    const trigger = screen.getByRole('button', {
      name: /choose date and time/i,
    })
    await user.click(trigger)

    const nowButton = screen.getByRole('button', { name: /^now$/i })
    await user.click(nowButton)

    expect(screen.queryByRole('grid')).not.toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <label id="datetime-label">Select Date and Time</label>
        <DateTimePicker
          aria-label="Select Date and Time"
          aria-describedby="datetime-label"
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
        <label id="datetime-label">Select Date and Time</label>
        <DateTimePicker
          aria-label="Select Date and Time"
          aria-describedby="datetime-label"
        />
      </div>
    )

    const trigger = screen.getByRole('button', {
      name: /select date and time/i,
    })
    await user.click(trigger)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations in error state', async () => {
    const { container } = render(
      <div>
        <label id="datetime-label">Select Date and Time</label>
        <DateTimePicker
          variant="error"
          aria-label="Select Date and Time"
          aria-describedby="error-msg"
        />
        <span id="error-msg">Please select a valid date and time</span>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
