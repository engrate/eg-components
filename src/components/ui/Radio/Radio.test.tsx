import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'

import { RadioGroup, RadioGroupItem } from './Radio'
import { Label } from '../Label'

describe('RadioGroup', () => {
  it('renders radio items', () => {
    render(
      <RadioGroup aria-label="Test group">
        <RadioGroupItem value="option1" aria-label="Option 1" />
        <RadioGroupItem value="option2" aria-label="Option 2" />
      </RadioGroup>
    )
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })

  it('can select a radio item', async () => {
    const user = userEvent.setup()
    render(
      <RadioGroup aria-label="Test group">
        <RadioGroupItem value="option1" aria-label="Option 1" />
        <RadioGroupItem value="option2" aria-label="Option 2" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    const firstRadio = radios[0]
    if (firstRadio) {
      await user.click(firstRadio)
    }

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  it('handles onValueChange callback', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <RadioGroup aria-label="Test group" onValueChange={handleChange}>
        <RadioGroupItem value="option1" aria-label="Option 1" />
        <RadioGroupItem value="option2" aria-label="Option 2" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    const secondRadio = radios[1]
    if (secondRadio) {
      await user.click(secondRadio)
    }
    expect(handleChange).toHaveBeenCalledWith('option2')
  })

  it('can set default value', () => {
    render(
      <RadioGroup aria-label="Test group" defaultValue="option2">
        <RadioGroupItem value="option1" aria-label="Option 1" />
        <RadioGroupItem value="option2" aria-label="Option 2" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  it('can disable individual items', () => {
    render(
      <RadioGroup aria-label="Test group">
        <RadioGroupItem value="option1" aria-label="Option 1" disabled />
        <RadioGroupItem value="option2" aria-label="Option 2" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    expect(radios[0]).toBeDisabled()
    expect(radios[1]).not.toBeDisabled()
  })

  it('applies custom className to group', () => {
    render(
      <RadioGroup aria-label="Test group" className="custom-class">
        <RadioGroupItem value="option1" aria-label="Option 1" />
      </RadioGroup>
    )
    expect(screen.getByRole('radiogroup')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <RadioGroup aria-label="Payment method">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card">Credit Card</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <Label htmlFor="paypal">PayPal</Label>
        </div>
      </RadioGroup>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
