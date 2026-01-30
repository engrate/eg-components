import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import { Switch } from './Switch'

describe('Switch', () => {
  it('renders unchecked by default', () => {
    render(<Switch aria-label="Test switch" />)
    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('can be toggled', async () => {
    const user = userEvent.setup()
    render(<Switch aria-label="Test switch" />)

    const switchEl = screen.getByRole('switch')
    await user.click(switchEl)

    expect(switchEl).toBeChecked()
  })

  it('handles onCheckedChange callback', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<Switch aria-label="Test switch" onCheckedChange={handleChange} />)
    await user.click(screen.getByRole('switch'))

    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('can be disabled', () => {
    render(<Switch aria-label="Test switch" disabled />)
    expect(screen.getByRole('switch')).toBeDisabled()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<Switch aria-label="Test switch" defaultChecked />)
    expect(screen.getByRole('switch')).toBeChecked()
  })

  it('applies custom className', () => {
    render(<Switch aria-label="Test switch" className="custom-class" />)
    expect(screen.getByRole('switch')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div className="flex items-center gap-2">
        <Switch id="notifications" />
        <label htmlFor="notifications">Enable notifications</label>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations when checked', async () => {
    const { container } = render(
      <div className="flex items-center gap-2">
        <Switch id="notifications" defaultChecked />
        <label htmlFor="notifications">Enable notifications</label>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
