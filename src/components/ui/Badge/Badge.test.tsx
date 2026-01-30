import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Badge } from './Badge'

describe('Badge', () => {
  it('renders with children', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('applies variant styles', () => {
    const { rerender } = render(<Badge variant="sunflower">Sunflower</Badge>)
    expect(screen.getByText('Sunflower')).toHaveClass('bg-sunflower')

    rerender(<Badge variant="error">Error</Badge>)
    expect(screen.getByText('Error')).toHaveClass('bg-error')

    rerender(<Badge variant="deep-blue">Deep Blue</Badge>)
    expect(screen.getByText('Deep Blue')).toHaveClass('bg-deep-blue')

    rerender(<Badge variant="warm-purple">Warm Purple</Badge>)
    expect(screen.getByText('Warm Purple')).toHaveClass('bg-warm-purple')

    rerender(<Badge variant="cool-purple">Cool Purple</Badge>)
    expect(screen.getByText('Cool Purple')).toHaveClass('bg-cool-purple')

    rerender(<Badge variant="electric-blue">Electric Blue</Badge>)
    expect(screen.getByText('Electric Blue')).toHaveClass('bg-electric-blue')

    rerender(<Badge variant="lemon-meringue">Lemon Meringue</Badge>)
    expect(screen.getByText('Lemon Meringue')).toHaveClass('bg-lemon-meringue')

    rerender(<Badge variant="vanilla">Vanilla</Badge>)
    expect(screen.getByText('Vanilla')).toHaveClass('bg-vanilla')

    rerender(<Badge variant="eggshell">Eggshell</Badge>)
    expect(screen.getByText('Eggshell')).toHaveClass('bg-eggshell')

    rerender(<Badge variant="secondary">Secondary</Badge>)
    expect(screen.getByText('Secondary')).toHaveClass('bg-alt')
  })

  it('applies size variants', () => {
    const { rerender } = render(<Badge size="sm">SM</Badge>)
    expect(screen.getByText('SM')).toHaveClass('px-2')

    rerender(<Badge size="md">MD</Badge>)
    expect(screen.getByText('MD')).toHaveClass('px-2.5')

    rerender(<Badge size="lg">LG</Badge>)
    expect(screen.getByText('LG')).toHaveClass('px-3.5')

    rerender(<Badge size="xl">XL</Badge>)
    expect(screen.getByText('XL')).toHaveClass('px-4')
  })

  it('applies default variants when none specified', () => {
    render(<Badge>Default</Badge>)
    const badge = screen.getByText('Default')
    expect(badge).toHaveClass('bg-sunflower')
    expect(badge).toHaveClass('px-2.5')
  })

  it('merges custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>)
    expect(screen.getByText('Custom')).toHaveClass('custom-class')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Badge asChild>
        <a href="/test">Link Badge</a>
      </Badge>
    )
    expect(screen.getByRole('link', { name: 'Link Badge' })).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Badge>Accessible Badge</Badge>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with all variants', async () => {
    const { container } = render(
      <div>
        <Badge variant="sunflower">Sunflower</Badge>
        <Badge variant="lemon-meringue">Lemon Meringue</Badge>
        <Badge variant="vanilla">Vanilla</Badge>
        <Badge variant="eggshell">Eggshell</Badge>
        <Badge variant="warm-purple">Warm Purple</Badge>
        <Badge variant="cool-purple">Cool Purple</Badge>
        <Badge variant="electric-blue">Electric Blue</Badge>
        <Badge variant="deep-blue">Deep Blue</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
