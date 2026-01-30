import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Breadcrumbs, BreadcrumbItem, BreadcrumbSeparator } from './Breadcrumbs'

describe('Breadcrumbs', () => {
  it('renders breadcrumb items', () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
      </Breadcrumbs>
    )

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Products' })).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
  })

  it('renders with navigation landmark', () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
      </Breadcrumbs>
    )

    expect(screen.getByRole('navigation')).toHaveAttribute(
      'aria-label',
      'Breadcrumb'
    )
  })

  it('marks current page with aria-current', () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Current</BreadcrumbItem>
      </Breadcrumbs>
    )

    expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page')
  })

  it('renders separators between items', () => {
    const { container } = render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
      </Breadcrumbs>
    )

    // Should have 2 separators for 3 items
    const separators = container.querySelectorAll('[role="presentation"]')
    expect(separators).toHaveLength(2)
  })

  it('supports custom separator', () => {
    render(
      <Breadcrumbs separator={<span data-testid="custom-sep">/</span>}>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Current</BreadcrumbItem>
      </Breadcrumbs>
    )

    expect(screen.getByTestId('custom-sep')).toBeInTheDocument()
  })

  it('applies size variants', () => {
    const { container, rerender } = render(
      <Breadcrumbs size="sm">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
      </Breadcrumbs>
    )

    expect(container.querySelector('ol')).toHaveClass('text-label')

    rerender(
      <Breadcrumbs size="lg">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
      </Breadcrumbs>
    )

    expect(container.querySelector('ol')).toHaveClass('text-body')
  })

  it('renders links with href attribute', () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/about">About</BreadcrumbItem>
      </Breadcrumbs>
    )

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about'
    )
  })

  it('applies custom className', () => {
    const { container } = render(
      <Breadcrumbs className="custom-class">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
      </Breadcrumbs>
    )

    expect(container.querySelector('ol')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Current Product</BreadcrumbItem>
      </Breadcrumbs>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('BreadcrumbItem', () => {
  it('renders as a link by default', () => {
    render(<BreadcrumbItem href="/test">Test</BreadcrumbItem>)
    expect(screen.getByRole('link', { name: 'Test' })).toBeInTheDocument()
  })

  it('renders as span when isCurrentPage', () => {
    render(<BreadcrumbItem isCurrentPage>Current</BreadcrumbItem>)
    const element = screen.getByText('Current')
    expect(element.tagName).toBe('SPAN')
    expect(element).not.toHaveAttribute('href')
  })

  it('supports asChild prop', () => {
    render(
      <BreadcrumbItem asChild>
        <button type="button">Custom Element</button>
      </BreadcrumbItem>
    )

    expect(
      screen.getByRole('button', { name: 'Custom Element' })
    ).toBeInTheDocument()
  })

  it('applies styling classes', () => {
    const { rerender } = render(<BreadcrumbItem href="#">Link</BreadcrumbItem>)
    expect(screen.getByRole('link')).toHaveClass('text-quaternary')

    rerender(<BreadcrumbItem isCurrentPage>Current</BreadcrumbItem>)
    expect(screen.getByText('Current')).toHaveClass('text-black')
  })
})

describe('BreadcrumbSeparator', () => {
  it('renders default chevron icon', () => {
    const { container } = render(<BreadcrumbSeparator />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders custom children', () => {
    render(<BreadcrumbSeparator>/</BreadcrumbSeparator>)
    expect(screen.getByText('/')).toBeInTheDocument()
  })

  it('is hidden from screen readers', () => {
    const { container } = render(<BreadcrumbSeparator />)
    const separator = container.querySelector('[role="presentation"]')
    expect(separator).toHaveAttribute('aria-hidden', 'true')
  })
})
