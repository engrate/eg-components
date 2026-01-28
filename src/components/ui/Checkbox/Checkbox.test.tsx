import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders unchecked by default', () => {
    render(<Checkbox aria-label="Test checkbox" />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('can be checked', async () => {
    const user = userEvent.setup()
    render(<Checkbox aria-label="Test checkbox" />)

    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it('handles onCheckedChange callback', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Checkbox aria-label="Test checkbox" onCheckedChange={handleChange} />
    )
    await user.click(screen.getByRole('checkbox'))

    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('can be disabled', () => {
    render(<Checkbox aria-label="Test checkbox" disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<Checkbox aria-label="Test checkbox" defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('applies custom className', () => {
    render(<Checkbox aria-label="Test checkbox" className="custom-class" />)
    expect(screen.getByRole('checkbox')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <label htmlFor="terms">Accept terms and conditions</label>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations when checked', async () => {
    const { container } = render(
      <div className="flex items-center gap-2">
        <Checkbox id="terms" defaultChecked />
        <label htmlFor="terms">Accept terms and conditions</label>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
