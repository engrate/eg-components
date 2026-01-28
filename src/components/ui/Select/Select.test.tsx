import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select'
import { Label } from '../Label'

describe('Select', () => {
  it('renders with placeholder', () => {
    render(
      <Select>
        <SelectTrigger aria-label="Select option">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Select an option')).toBeInTheDocument()
  })

  // Note: Interaction tests for Radix Select require a full browser environment
  // due to limitations in JSDOM (missing hasPointerCapture, scrollIntoView).
  // The component is tested in Storybook for full interaction coverage.

  it('can be disabled', () => {
    render(
      <Select disabled>
        <SelectTrigger aria-label="Select option">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('applies error variant classes', () => {
    render(
      <Select>
        <SelectTrigger variant="error" aria-label="Select option">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByRole('combobox')).toHaveClass('border-error')
  })

  it('applies custom className', () => {
    render(
      <Select>
        <SelectTrigger className="custom-class" aria-label="Select option">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByRole('combobox')).toHaveClass('custom-class')
  })

  it('renders with default value', () => {
    render(
      <Select defaultValue="option2">
        <SelectTrigger aria-label="Select option">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 2')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <Label htmlFor="fruit">Favorite fruit</Label>
        <Select>
          <SelectTrigger id="fruit">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
