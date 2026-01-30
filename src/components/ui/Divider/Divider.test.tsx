import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Divider } from './Divider'

describe('Divider', () => {
  it('renders with default horizontal orientation', () => {
    render(<Divider data-testid="divider" />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveClass('h-px', 'w-full')
  })

  it('renders with vertical orientation', () => {
    render(<Divider orientation="vertical" data-testid="divider" />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveClass('h-full', 'w-px')
  })

  it('applies bg-border class', () => {
    render(<Divider data-testid="divider" />)
    expect(screen.getByTestId('divider')).toHaveClass('bg-border')
  })

  it('merges custom className', () => {
    render(<Divider className="my-4" data-testid="divider" />)
    expect(screen.getByTestId('divider')).toHaveClass('my-4')
  })

  it('is decorative by default (role="none")', () => {
    render(<Divider data-testid="divider" />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveAttribute('role', 'none')
    expect(divider).not.toHaveAttribute('aria-orientation')
  })

  it('renders as semantic separator when not decorative', () => {
    render(<Divider decorative={false} data-testid="divider" />)
    const divider = screen.getByRole('separator')
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal')
  })

  it('renders as vertical separator when not decorative', () => {
    render(
      <Divider
        orientation="vertical"
        decorative={false}
        data-testid="divider"
      />
    )
    const divider = screen.getByRole('separator')
    expect(divider).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Divider ref={ref} data-testid="divider" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('has no accessibility violations (horizontal)', async () => {
    const { container } = render(<Divider />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations (vertical)', async () => {
    const { container } = render(
      <div style={{ height: '100px', display: 'flex' }}>
        <Divider orientation="vertical" />
      </div>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations as semantic separator', async () => {
    const { container } = render(<Divider decorative={false} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
