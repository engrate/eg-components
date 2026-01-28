import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'

import { FormMessage } from './FormMessage'

describe('FormMessage', () => {
  it('renders with children', () => {
    render(<FormMessage>This is a hint</FormMessage>)
    expect(screen.getByText('This is a hint')).toBeInTheDocument()
  })

  it('does not render when children is empty', () => {
    const { container } = render(<FormMessage>{null}</FormMessage>)
    expect(container.firstChild).toBeNull()
  })

  it('applies default variant classes', () => {
    render(<FormMessage>Default message</FormMessage>)
    expect(screen.getByText('Default message')).toHaveClass(
      'text-tertiary'
    )
  })

  it('applies error variant classes', () => {
    render(<FormMessage variant="error">Error message</FormMessage>)
    expect(screen.getByText('Error message')).toHaveClass('text-error')
  })

  it('applies custom className', () => {
    render(<FormMessage className="custom-class">Message</FormMessage>)
    expect(screen.getByText('Message')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <FormMessage id="hint">This is a hint message</FormMessage>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations for error variant', async () => {
    const { container } = render(
      <FormMessage variant="error" role="alert">
        This field is required
      </FormMessage>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
