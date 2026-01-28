import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'

import { Label } from './Label'

describe('Label', () => {
  it('renders with children', () => {
    render(<Label>Email address</Label>)
    expect(screen.getByText('Email address')).toBeInTheDocument()
  })

  it('renders with htmlFor attribute', () => {
    render(<Label htmlFor="email">Email</Label>)
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email')
  })

  it('applies default size classes', () => {
    render(<Label>Default</Label>)
    expect(screen.getByText('Default')).toHaveClass('text-small')
  })

  it('applies small size classes', () => {
    render(<Label size="sm">Small</Label>)
    expect(screen.getByText('Small')).toHaveClass('text-label')
  })

  it('applies custom className', () => {
    render(<Label className="custom-class">Custom</Label>)
    expect(screen.getByText('Custom')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <Label htmlFor="test-input">Test Label</Label>
        <input id="test-input" type="text" />
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
