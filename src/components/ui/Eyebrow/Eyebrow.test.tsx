import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

import { Eyebrow } from './Eyebrow'

describe('Eyebrow', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Eyebrow>Business Intelligence</Eyebrow>)
    expect(getByText('Business Intelligence')).toBeInTheDocument()
  })

  it('applies uppercase styling', () => {
    const { getByText } = render(<Eyebrow>test</Eyebrow>)
    const element = getByText('test')
    expect(element).toHaveClass('uppercase')
  })

  it('renders with default variant', () => {
    const { getByText } = render(<Eyebrow>Default</Eyebrow>)
    const element = getByText('Default')
    expect(element).toHaveClass('text-primary')
  })

  it('renders with primary variant', () => {
    const { getByText } = render(<Eyebrow variant="primary">Primary</Eyebrow>)
    const element = getByText('Primary')
    expect(element).toHaveClass('text-primary')
  })

  it('renders with secondary variant', () => {
    const { getByText } = render(
      <Eyebrow variant="secondary">Secondary</Eyebrow>
    )
    const element = getByText('Secondary')
    expect(element).toHaveClass('text-secondary')
  })

  it('renders with different sizes', () => {
    const { rerender, getByText } = render(<Eyebrow size="sm">Small</Eyebrow>)
    expect(getByText('Small')).toHaveClass('text-[10px]')

    rerender(<Eyebrow size="default">Default</Eyebrow>)
    expect(getByText('Default')).toHaveClass('text-xs')

    rerender(<Eyebrow size="lg">Large</Eyebrow>)
    expect(getByText('Large')).toHaveClass('text-sm')
  })

  it('applies custom className', () => {
    const { getByText } = render(
      <Eyebrow className="custom-class">Custom</Eyebrow>
    )
    expect(getByText('Custom')).toHaveClass('custom-class')
  })

  it('supports asChild prop', () => {
    const { container } = render(
      <Eyebrow asChild>
        <a href="/test">Link Eyebrow</a>
      </Eyebrow>
    )
    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveClass('uppercase')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Eyebrow>Business Intelligence</Eyebrow>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with different variants', async () => {
    const { container } = render(
      <>
        <Eyebrow variant="default">Default</Eyebrow>
        <Eyebrow variant="primary">Primary</Eyebrow>
        <Eyebrow variant="secondary">Secondary</Eyebrow>
      </>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
