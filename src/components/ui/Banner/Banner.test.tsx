import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import { Banner } from './Banner'

describe('Banner', () => {
  it('renders with children', () => {
    render(<Banner>Important message</Banner>)
    expect(screen.getByText('Important message')).toBeInTheDocument()
  })

  it('has role="alert" for accessibility', () => {
    render(<Banner>Alert message</Banner>)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('applies variant styles', () => {
    const { rerender } = render(<Banner variant="info">Info</Banner>)
    expect(screen.getByRole('alert')).toHaveClass('bg-electric-blue')

    rerender(<Banner variant="success">Success</Banner>)
    expect(screen.getByRole('alert')).toHaveClass('bg-sunflower')

    rerender(<Banner variant="warning">Warning</Banner>)
    expect(screen.getByRole('alert')).toHaveClass('bg-lemon-meringue')

    rerender(<Banner variant="error">Error</Banner>)
    expect(screen.getByRole('alert')).toHaveClass('bg-error')

    rerender(<Banner variant="neutral">Neutral</Banner>)
    expect(screen.getByRole('alert')).toHaveClass('bg-alt')
  })

  it('applies alignment variants', () => {
    const { rerender } = render(<Banner align="center">Centered</Banner>)
    expect(screen.getByRole('alert')).toHaveClass('justify-center')

    rerender(<Banner align="left">Left aligned</Banner>)
    expect(screen.getByRole('alert')).toHaveClass('justify-start')
  })

  it('applies default variants when none specified', () => {
    render(<Banner>Default</Banner>)
    const banner = screen.getByRole('alert')
    expect(banner).toHaveClass('bg-electric-blue')
    expect(banner).toHaveClass('justify-center')
  })

  it('renders icon when provided', () => {
    render(<Banner icon={<span data-testid="icon">🔔</span>}>With icon</Banner>)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders action when provided', () => {
    render(
      <Banner action={<button data-testid="action-btn">Action</button>}>
        With action
      </Banner>
    )
    expect(screen.getByTestId('action-btn')).toBeInTheDocument()
  })

  it('renders dismiss button when onDismiss is provided', () => {
    const handleDismiss = vi.fn()
    render(<Banner onDismiss={handleDismiss}>Dismissible</Banner>)
    expect(
      screen.getByRole('button', { name: 'Dismiss banner' })
    ).toBeInTheDocument()
  })

  it('calls onDismiss when dismiss button is clicked', async () => {
    const user = userEvent.setup()
    const handleDismiss = vi.fn()
    render(<Banner onDismiss={handleDismiss}>Dismissible</Banner>)

    await user.click(screen.getByRole('button', { name: 'Dismiss banner' }))
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it('merges custom className', () => {
    render(<Banner className="custom-class">Custom</Banner>)
    expect(screen.getByRole('alert')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Banner ref={ref}>Ref test</Banner>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Banner>Accessible Banner</Banner>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with dismiss button', async () => {
    const handleDismiss = vi.fn()
    const { container } = render(
      <Banner onDismiss={handleDismiss}>Dismissible Banner</Banner>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with all variants', async () => {
    const { container } = render(
      <div>
        <Banner variant="info">Info</Banner>
        <Banner variant="success">Success</Banner>
        <Banner variant="warning">Warning</Banner>
        <Banner variant="error">Error</Banner>
        <Banner variant="neutral">Neutral</Banner>
      </div>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with icon and action', async () => {
    const { container } = render(
      <Banner
        icon={<span aria-hidden="true">ℹ️</span>}
        action={<button>Learn more</button>}
      >
        Banner with icon and action
      </Banner>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
