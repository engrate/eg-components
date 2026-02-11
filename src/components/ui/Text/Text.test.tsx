import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { Text } from './Text'

describe('Text', () => {
  it('renders children correctly', () => {
    render(<Text>Hello World</Text>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders as p element by default', () => {
    render(<Text>Paragraph text</Text>)
    const text = screen.getByText('Paragraph text')
    expect(text.tagName).toBe('P')
  })

  it('applies body variant classes by default', () => {
    render(<Text>Body text</Text>)
    const text = screen.getByText('Body text')
    expect(text).toHaveClass('font-sans', 'font-normal')
  })

  it('applies lead variant classes', () => {
    render(<Text variant="lead">Lead text</Text>)
    const text = screen.getByText('Lead text')
    expect(text).toHaveClass('font-sans', 'font-normal')
  })

  it('applies semi-lead variant classes', () => {
    render(<Text variant="semi-lead">Semi-lead text</Text>)
    const text = screen.getByText('Semi-lead text')
    expect(text).toHaveClass('font-sans', 'font-normal')
  })

  it('applies body-lg variant classes', () => {
    render(<Text variant="body-lg">Large body text</Text>)
    const text = screen.getByText('Large body text')
    expect(text).toHaveClass('font-sans', 'font-normal')
  })

  it('applies body-sm variant classes', () => {
    render(<Text variant="body-sm">Small body text</Text>)
    const text = screen.getByText('Small body text')
    expect(text).toHaveClass('font-sans', 'font-normal')
  })

  it('applies descriptive variant classes', () => {
    render(<Text variant="descriptive">Descriptive text</Text>)
    const text = screen.getByText('Descriptive text')
    expect(text).toHaveClass('font-sans', 'font-normal')
  })

  it('applies label variant classes', () => {
    render(<Text variant="label">Label text</Text>)
    const text = screen.getByText('Label text')
    expect(text).toHaveClass('font-sans', 'font-normal')
  })

  it('applies label-sm variant classes', () => {
    render(<Text variant="label-sm">Small label text</Text>)
    const text = screen.getByText('Small label text')
    expect(text).toHaveClass('font-sans', 'font-normal')
  })

  it('applies medium weight', () => {
    render(<Text weight="medium">Medium weight text</Text>)
    const text = screen.getByText('Medium weight text')
    expect(text).toHaveClass('font-medium')
  })

  it('applies regular weight by default', () => {
    render(<Text>Regular weight text</Text>)
    const text = screen.getByText('Regular weight text')
    expect(text).toHaveClass('font-normal')
  })

  it('allows changing the HTML element with as prop', () => {
    render(<Text as="span">Span text</Text>)
    const text = screen.getByText('Span text')
    expect(text.tagName).toBe('SPAN')
  })

  it('renders as label element', () => {
    render(<Text as="label">Label element</Text>)
    const text = screen.getByText('Label element')
    expect(text.tagName).toBe('LABEL')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Text variant="lead" asChild>
        <a href="/test">Link Text</a>
      </Text>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveClass('font-sans', 'font-normal')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('merges custom className', () => {
    render(<Text className="custom-class">Custom Text</Text>)
    const text = screen.getByText('Custom Text')
    expect(text).toHaveClass('custom-class')
  })

  it('has no accessibility violations for body text', async () => {
    const { container } = render(<Text>Accessible body text</Text>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations for lead text', async () => {
    const { container } = render(
      <Text variant="lead">Accessible lead text</Text>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations for all variants', async () => {
    const { container } = render(
      <div>
        <Text variant="lead">Lead text</Text>
        <Text variant="semi-lead">Semi-lead text</Text>
        <Text variant="body-lg">Large body text</Text>
        <Text variant="body">Body text</Text>
        <Text variant="body-sm">Small body text</Text>
        <Text variant="descriptive">Descriptive text</Text>
        <Text variant="label">Label text</Text>
      </div>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
