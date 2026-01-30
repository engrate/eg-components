import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import { Textarea } from './Textarea'

describe('Textarea', () => {
  it('renders with placeholder', () => {
    render(<Textarea placeholder="Enter message" />)
    expect(screen.getByPlaceholderText('Enter message')).toBeInTheDocument()
  })

  it('handles value changes', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<Textarea onChange={handleChange} />)
    await user.type(screen.getByRole('textbox'), 'hello')

    expect(handleChange).toHaveBeenCalled()
  })

  it('can be disabled', () => {
    render(<Textarea disabled placeholder="Disabled" />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('applies default variant classes', () => {
    render(<Textarea placeholder="Default" />)
    expect(screen.getByRole('textbox')).toHaveClass('border-border')
  })

  it('applies error variant classes', () => {
    render(<Textarea variant="error" placeholder="Error" />)
    expect(screen.getByRole('textbox')).toHaveClass('border-error')
  })

  it('applies resize classes', () => {
    const { rerender } = render(
      <Textarea resize="none" placeholder="No resize" />
    )
    expect(screen.getByRole('textbox')).toHaveClass('resize-none')

    rerender(<Textarea resize="vertical" placeholder="Vertical" />)
    expect(screen.getByRole('textbox')).toHaveClass('resize-y')

    rerender(<Textarea resize="horizontal" placeholder="Horizontal" />)
    expect(screen.getByRole('textbox')).toHaveClass('resize-x')

    rerender(<Textarea resize="both" placeholder="Both" />)
    expect(screen.getByRole('textbox')).toHaveClass('resize')
  })

  it('applies custom className', () => {
    render(<Textarea className="custom-class" placeholder="Custom" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="test-textarea">Test Textarea</label>
        <Textarea id="test-textarea" placeholder="Enter text" />
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
