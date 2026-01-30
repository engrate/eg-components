import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Input } from '../Input'

import { FormField } from './FormField'

describe('FormField', () => {
  it('renders children', () => {
    render(
      <FormField>
        <Input placeholder="Enter text" />
      </FormField>
    )
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(
      <FormField label="Email" htmlFor="email">
        <Input id="email" placeholder="Enter email" />
      </FormField>
    )
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email')
  })

  it('renders hint message when provided', () => {
    render(
      <FormField label="Email" hint="We'll never share your email.">
        <Input placeholder="Enter email" />
      </FormField>
    )
    expect(
      screen.getByText("We'll never share your email.")
    ).toBeInTheDocument()
    expect(screen.getByText("We'll never share your email.")).toHaveClass(
      'text-tertiary'
    )
  })

  it('renders error message when provided', () => {
    render(
      <FormField label="Email" error="This field is required">
        <Input placeholder="Enter email" variant="error" />
      </FormField>
    )
    expect(screen.getByText('This field is required')).toBeInTheDocument()
    expect(screen.getByText('This field is required')).toHaveClass('text-error')
  })

  it('prioritizes error over hint', () => {
    render(
      <FormField label="Email" hint="Hint text" error="Error text">
        <Input placeholder="Enter email" />
      </FormField>
    )
    expect(screen.getByText('Error text')).toBeInTheDocument()
    expect(screen.queryByText('Hint text')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <FormField className="custom-class">
        <Input placeholder="Enter text" />
      </FormField>
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <FormField label="Email" htmlFor="email" hint="Enter your email address">
        <Input id="email" placeholder="you@example.com" />
      </FormField>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations with error', async () => {
    const { container } = render(
      <FormField label="Email" htmlFor="email" error="This field is required">
        <Input
          id="email"
          variant="error"
          aria-invalid="true"
          aria-describedby="email-message"
        />
      </FormField>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
