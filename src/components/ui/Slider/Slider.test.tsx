import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import { Slider } from './Slider'

describe('Slider', () => {
  it('renders with default props', () => {
    render(<Slider aria-label="Test slider" />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  it('renders with specified default value', () => {
    render(<Slider defaultValue={[50]} max={100} aria-label="Test slider" />)
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '50')
  })

  it('handles onValueChange callback', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Slider
        defaultValue={[50]}
        max={100}
        aria-label="Test slider"
        onValueChange={handleChange}
      />
    )

    const thumb = screen.getByRole('slider')
    await user.keyboard('{ArrowRight}')
    thumb.focus()
    await user.keyboard('{ArrowRight}')

    expect(handleChange).toHaveBeenCalled()
  })

  it('can be disabled', () => {
    render(<Slider aria-label="Test slider" disabled />)
    expect(screen.getByRole('slider')).toHaveAttribute('data-disabled', '')
  })

  it('renders multiple thumbs for range slider', () => {
    render(
      <Slider defaultValue={[25, 75]} max={100} aria-label="Range slider" />
    )
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
  })

  it('applies custom className', () => {
    const { container } = render(
      <Slider aria-label="Test slider" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('supports different sizes', () => {
    const { container, rerender } = render(
      <Slider aria-label="Test slider" size="sm" />
    )
    expect(container.firstChild).toHaveClass(
      '[--slider-track-height:theme(spacing.1)]'
    )

    rerender(<Slider aria-label="Test slider" size="lg" />)
    expect(container.firstChild).toHaveClass(
      '[--slider-track-height:theme(spacing.3)]'
    )
  })

  it('respects min, max, and step props', () => {
    render(
      <Slider
        defaultValue={[5]}
        min={0}
        max={10}
        step={1}
        aria-label="Test slider"
      />
    )
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuemin', '0')
    expect(slider).toHaveAttribute('aria-valuemax', '10')
    expect(slider).toHaveAttribute('aria-valuenow', '5')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div className="flex flex-col gap-2">
        <label id="volume-label">Volume</label>
        <Slider defaultValue={[50]} max={100} aria-label="Volume" />
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations when disabled', async () => {
    const { container } = render(
      <div className="flex flex-col gap-2">
        <label id="volume-label">Volume</label>
        <Slider defaultValue={[50]} max={100} aria-label="Volume" disabled />
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations for range slider', async () => {
    const { container } = render(
      <div className="flex flex-col gap-2">
        <label id="range-label">Price range</label>
        <Slider
          defaultValue={[25, 75]}
          max={100}
          aria-labelledby="range-label"
        />
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
