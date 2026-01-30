import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Heading } from './Heading'

describe('Heading', () => {
  it('renders children correctly', () => {
    render(<Heading>Hello World</Heading>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders as h1 by default', () => {
    render(<Heading>Default Heading</Heading>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('applies hero level classes with display font', () => {
    render(<Heading level="hero">Hero Heading</Heading>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('font-display', 'text-hero')
  })

  it('applies h1 level classes with sans font', () => {
    render(<Heading level="h1">H1 Heading</Heading>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('font-sans', 'text-h1')
  })

  it('applies h2 level classes', () => {
    render(<Heading level="h2">H2 Heading</Heading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('font-sans', 'text-h2')
  })

  it('applies h3 level classes', () => {
    render(<Heading level="h3">H3 Heading</Heading>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveClass('font-sans', 'text-h3')
  })

  it('applies h4 level classes', () => {
    render(<Heading level="h4">H4 Heading</Heading>)
    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).toHaveClass('font-sans', 'text-h4')
  })

  it('allows overriding the HTML element with as prop', () => {
    render(
      <Heading level="hero" as="h2">
        Hero as H2
      </Heading>
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('font-display', 'text-hero')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Heading level="h1" asChild>
        <a href="/test">Link Heading</a>
      </Heading>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveClass('font-sans', 'text-h1')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('merges custom className', () => {
    render(<Heading className="custom-class">Custom Heading</Heading>)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveClass('custom-class')
  })

  it('applies font-normal weight', () => {
    render(<Heading>Normal Weight Heading</Heading>)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveClass('font-normal')
  })

  it('has no accessibility violations for h1', async () => {
    const { container } = render(<Heading level="h1">Accessible H1</Heading>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations for hero', async () => {
    const { container } = render(
      <Heading level="hero">Accessible Hero</Heading>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations for heading hierarchy', async () => {
    const { container } = render(
      <div>
        <Heading level="h1">Main Title</Heading>
        <Heading level="h2">Section Title</Heading>
        <Heading level="h3">Subsection Title</Heading>
        <Heading level="h4">Detail Title</Heading>
      </div>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
