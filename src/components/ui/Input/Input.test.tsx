import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'

import { Input } from './Input'

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Enter email" />)
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument()
  })

  it('handles value changes', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<Input onChange={handleChange} />)
    await user.type(screen.getByRole('textbox'), 'hello')

    expect(handleChange).toHaveBeenCalled()
  })

  it('can be disabled', () => {
    render(<Input disabled placeholder="Disabled" />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('applies default variant classes', () => {
    render(<Input placeholder="Default" />)
    expect(screen.getByRole('textbox')).toHaveClass('border-border')
  })

  it('applies error variant classes', () => {
    render(<Input variant="error" placeholder="Error" />)
    expect(screen.getByRole('textbox')).toHaveClass('border-error')
  })

  it('supports different input types', () => {
    const { rerender } = render(<Input type="email" placeholder="Email" />)
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute(
      'type',
      'email'
    )

    rerender(<Input type="password" placeholder="Password" />)
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute(
      'type',
      'password'
    )
  })

  it('applies custom className', () => {
    render(<Input className="custom-class" placeholder="Custom" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="test-input">Test Input</label>
        <Input id="test-input" placeholder="Enter text" />
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations in error state', async () => {
    const { container } = render(
      <div>
        <label htmlFor="test-input">Test Input</label>
        <Input
          id="test-input"
          variant="error"
          aria-invalid="true"
          aria-describedby="error-msg"
        />
        <span id="error-msg">This field is required</span>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
