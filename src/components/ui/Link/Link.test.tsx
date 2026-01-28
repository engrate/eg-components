import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'

import { Link } from './Link'

describe('Link', () => {
  it('renders with children', () => {
    render(<Link href="/test">Click me</Link>)
    expect(screen.getByRole('link', { name: 'Click me' })).toBeInTheDocument()
  })

  it('renders with href attribute', () => {
    render(<Link href="/about">About</Link>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/about')
  })

  it('applies variant classes', () => {
    const { rerender } = render(
      <Link href="#" variant="default">
        Default
      </Link>
    )
    expect(screen.getByRole('link')).toHaveClass('underline')

    rerender(
      <Link href="#" variant="muted">
        Muted
      </Link>
    )
    expect(screen.getByRole('link')).toHaveClass('text-secondary')

    rerender(
      <Link href="#" variant="nav">
        Nav
      </Link>
    )
    expect(screen.getByRole('link')).toHaveClass('no-underline')
  })

  it('applies size classes', () => {
    const { rerender } = render(<Link href="#">Default</Link>)
    expect(screen.getByRole('link')).toHaveClass('text-body')

    rerender(
      <Link href="#" size="sm">
        Small
      </Link>
    )
    expect(screen.getByRole('link')).toHaveClass('text-small')

    rerender(
      <Link href="#" size="lg">
        Large
      </Link>
    )
    expect(screen.getByRole('link')).toHaveClass('font-medium')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Link asChild>
        <button type="button">Button Link</button>
      </Link>
    )
    expect(
      screen.getByRole('button', { name: 'Button Link' })
    ).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    render(
      <Link href="/external" target="_blank" rel="noopener noreferrer">
        External
      </Link>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies custom className', () => {
    render(
      <Link href="#" className="custom-class">
        Custom
      </Link>
    )
    expect(screen.getByRole('link')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Link href="/test">Accessible Link</Link>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations with all variants', async () => {
    const { container } = render(
      <div>
        <Link href="/1" variant="default">
          Default
        </Link>
        <Link href="/2" variant="muted">
          Muted
        </Link>
        <Link href="/3" variant="nav">
          Nav
        </Link>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
