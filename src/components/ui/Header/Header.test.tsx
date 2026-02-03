import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Header, HeaderActions, HeaderLogo, HeaderNav } from './Header'

describe('Header', () => {
  it('renders as a header element', () => {
    render(<Header data-testid="header">Content</Header>)
    expect(screen.getByTestId('header').tagName).toBe('HEADER')
  })

  it('renders children', () => {
    render(<Header>Header Content</Header>)
    expect(screen.getByText('Header Content')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    const { rerender } = render(
      <Header variant="default" data-testid="header">
        Content
      </Header>
    )
    expect(screen.getByTestId('header')).toHaveClass('bg-white')

    rerender(
      <Header variant="transparent" data-testid="header">
        Content
      </Header>
    )
    expect(screen.getByTestId('header')).toHaveClass('bg-transparent')

    rerender(
      <Header variant="filled" data-testid="header">
        Content
      </Header>
    )
    expect(screen.getByTestId('header')).toHaveClass('bg-main')
  })

  it('applies size classes', () => {
    const { rerender } = render(
      <Header size="sm" data-testid="header">
        Content
      </Header>
    )
    expect(screen.getByTestId('header')).toHaveClass('h-12')

    rerender(
      <Header size="default" data-testid="header">
        Content
      </Header>
    )
    expect(screen.getByTestId('header')).toHaveClass('h-16')

    rerender(
      <Header size="lg" data-testid="header">
        Content
      </Header>
    )
    expect(screen.getByTestId('header')).toHaveClass('h-20')
  })

  it('applies sticky class when sticky prop is true', () => {
    render(
      <Header sticky data-testid="header">
        Content
      </Header>
    )
    expect(screen.getByTestId('header')).toHaveClass('sticky', 'top-0', 'z-50')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Header asChild>
        <div data-testid="custom-header">Custom Header</div>
      </Header>
    )
    expect(screen.getByTestId('custom-header')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(
      <Header className="custom-class" data-testid="header">
        Content
      </Header>
    )
    expect(screen.getByTestId('header')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Header>
        <HeaderLogo>Logo</HeaderLogo>
        <HeaderNav aria-label="Main navigation">
          <a href="/about">About</a>
        </HeaderNav>
        <HeaderActions>Actions</HeaderActions>
      </Header>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('HeaderLogo', () => {
  it('renders children', () => {
    render(<HeaderLogo>Logo Content</HeaderLogo>)
    expect(screen.getByText('Logo Content')).toBeInTheDocument()
  })

  it('applies flex styling', () => {
    render(<HeaderLogo data-testid="logo">Logo</HeaderLogo>)
    expect(screen.getByTestId('logo')).toHaveClass('flex', 'items-center')
  })

  it('renders as child when asChild is true', () => {
    render(
      <HeaderLogo asChild>
        <a href="/" data-testid="logo-link">
          Logo
        </a>
      </HeaderLogo>
    )
    expect(screen.getByTestId('logo-link').tagName).toBe('A')
  })
})

describe('HeaderNav', () => {
  it('renders as nav element', () => {
    render(<HeaderNav data-testid="nav">Nav Content</HeaderNav>)
    expect(screen.getByTestId('nav').tagName).toBe('NAV')
  })

  it('renders children', () => {
    render(<HeaderNav>Nav Content</HeaderNav>)
    expect(screen.getByText('Nav Content')).toBeInTheDocument()
  })

  it('applies gap styling', () => {
    render(<HeaderNav data-testid="nav">Nav</HeaderNav>)
    expect(screen.getByTestId('nav')).toHaveClass('gap-6')
  })

  it('renders as child when asChild is true', () => {
    render(
      <HeaderNav asChild>
        <div data-testid="custom-nav">Custom Nav</div>
      </HeaderNav>
    )
    expect(screen.getByTestId('custom-nav')).toBeInTheDocument()
  })
})

describe('HeaderActions', () => {
  it('renders children', () => {
    render(<HeaderActions>Actions Content</HeaderActions>)
    expect(screen.getByText('Actions Content')).toBeInTheDocument()
  })

  it('applies gap styling', () => {
    render(<HeaderActions data-testid="actions">Actions</HeaderActions>)
    expect(screen.getByTestId('actions')).toHaveClass('gap-3')
  })

  it('renders as child when asChild is true', () => {
    render(
      <HeaderActions asChild>
        <div data-testid="custom-actions">Custom Actions</div>
      </HeaderActions>
    )
    expect(screen.getByTestId('custom-actions')).toBeInTheDocument()
  })
})
