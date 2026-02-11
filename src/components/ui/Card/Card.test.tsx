import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Card } from './Card'

describe('Card', () => {
  it('renders with children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Card>Accessible card</Card>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('applies variant classes', () => {
    const { rerender, container } = render(
      <Card variant="default">Default</Card>
    )
    expect(container.firstChild).toHaveClass('bg-card')

    rerender(<Card variant="elevated">Elevated</Card>)
    expect(container.firstChild).toHaveClass('shadow')

    rerender(<Card variant="ghost">Ghost</Card>)
    expect(container.firstChild).toHaveClass('bg-card')
  })

  it('applies padding classes', () => {
    const { rerender, container } = render(<Card>Default</Card>)
    expect(container.firstChild).toHaveClass('p-8')

    rerender(<Card padding="none">None</Card>)
    expect(container.firstChild).toHaveClass('p-0')

    rerender(<Card padding="sm">Small</Card>)
    expect(container.firstChild).toHaveClass('p-6')

    rerender(<Card padding="lg">Large</Card>)
    expect(container.firstChild).toHaveClass('p-10')
  })

  it('accepts custom className', () => {
    const { container } = render(<Card className="custom-class">Custom</Card>)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Card ref={ref}>Ref test</Card>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders as a child with asChild prop', () => {
    render(
      <Card asChild>
        <section data-testid="custom-element">As child</section>
      </Card>
    )
    const element = screen.getByTestId('custom-element')
    expect(element.tagName).toBe('SECTION')
    expect(element).toHaveClass('bg-card')
  })

  it('accepts HTML div attributes', () => {
    render(
      <Card data-testid="card-test" role="region" aria-label="Test card">
        Content
      </Card>
    )
    const card = screen.getByTestId('card-test')
    expect(card).toHaveAttribute('role', 'region')
    expect(card).toHaveAttribute('aria-label', 'Test card')
  })

  it('applies background color classes', () => {
    const { rerender, container } = render(<Card>Default bg</Card>)
    expect(container.firstChild).toHaveClass('bg-card')

    rerender(<Card bg="sunflower">Sunflower</Card>)
    expect(container.firstChild).toHaveClass('bg-sunflower')

    rerender(<Card bg="deep-blue">Deep Blue</Card>)
    expect(container.firstChild).toHaveClass('bg-deep-blue')

    rerender(<Card bg="transparent">Transparent</Card>)
    expect(container.firstChild).toHaveClass('bg-transparent')
  })

  it('does not apply accent classes by default', () => {
    const { container } = render(<Card>No accent</Card>)
    expect(container.firstChild).not.toHaveClass('relative')
    expect(container.firstChild).not.toHaveClass(
      '[--card-accent-color:var(--color-sunflower)]'
    )
  })

  it('applies accent classes for sunflower', () => {
    const { container } = render(<Card accent="sunflower">With accent</Card>)
    expect(container.firstChild).toHaveClass('relative')
    expect(container.firstChild).toHaveClass(
      '[--card-accent-color:var(--color-sunflower)]'
    )
  })

  it('applies accent classes for each color', () => {
    const accents = [
      { accent: 'border' as const, expected: '--color-border' },
      { accent: 'warm-purple' as const, expected: '--color-warm-purple' },
      { accent: 'cool-purple' as const, expected: '--color-cool-purple' },
      { accent: 'electric-blue' as const, expected: '--color-electric-blue' },
      { accent: 'deep-blue' as const, expected: '--color-deep-blue' },
      { accent: 'error' as const, expected: '--color-error' },
    ]

    accents.forEach(({ accent, expected }) => {
      const { container } = render(<Card accent={accent}>Accent {accent}</Card>)
      expect(container.firstChild).toHaveClass(
        `[--card-accent-color:var(${expected})]`
      )
    })
  })

  it('has no accessibility violations with accent', async () => {
    const { container } = render(<Card accent="sunflower">Accent card</Card>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
