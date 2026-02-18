import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from './Stepper'

function renderStepper(activeStep = 1) {
  return render(
    <Stepper activeStep={activeStep}>
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Your details</StepperTitle>
          <StepperDescription>Provide your name and email</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Company details</StepperTitle>
          <StepperDescription>About your company</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Invite your team</StepperTitle>
          <StepperDescription>Start collaborating</StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
  )
}

describe('Stepper', () => {
  it('renders all steps', () => {
    renderStepper()

    expect(screen.getByText('Your details')).toBeInTheDocument()
    expect(screen.getByText('Company details')).toBeInTheDocument()
    expect(screen.getByText('Invite your team')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    renderStepper()

    expect(screen.getByText('Provide your name and email')).toBeInTheDocument()
    expect(screen.getByText('About your company')).toBeInTheDocument()
    expect(screen.getByText('Start collaborating')).toBeInTheDocument()
  })

  it('displays step numbers in indicators', () => {
    renderStepper(1)

    // Active step shows number, inactive steps show numbers too
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('marks the active step with aria-current', () => {
    renderStepper(2)

    const triggers = screen.getAllByRole('button')
    expect(triggers[0]).not.toHaveAttribute('aria-current')
    expect(triggers[1]).toHaveAttribute('aria-current', 'step')
    expect(triggers[2]).not.toHaveAttribute('aria-current')
  })

  it('applies correct state to steps based on activeStep', () => {
    renderStepper(2)

    const items = screen.getAllByRole('button')
    expect(items[0]).toHaveAttribute('data-state', 'completed')
    expect(items[1]).toHaveAttribute('data-state', 'active')
    expect(items[2]).toHaveAttribute('data-state', 'inactive')
  })

  it('shows check icon for completed steps', () => {
    const { container } = renderStepper(2)

    // Completed step indicator should contain an SVG (Check icon)
    const indicators = container.querySelectorAll(
      '[data-state="completed"] span[aria-hidden="true"]'
    )
    expect(indicators.length).toBeGreaterThan(0)
    const svg = indicators[0]?.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders step counter text', () => {
    renderStepper(2)

    expect(screen.getByText('Step 2 of 3')).toBeInTheDocument()
  })

  it('has progress group role with label', () => {
    renderStepper()

    expect(screen.getByRole('group')).toHaveAttribute('aria-label', 'Progress')
  })

  it('calls onClick on trigger buttons', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(
      <Stepper activeStep={1}>
        <StepperItem step={1}>
          <StepperTrigger onClick={handleClick}>
            <StepperIndicator />
            <StepperTitle>Step 1</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
    )

    await user.click(screen.getByRole('button', { name: /step 1/i }))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('supports vertical orientation', () => {
    render(
      <Stepper activeStep={1} orientation="vertical">
        <StepperItem step={1}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>Step 1</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>Step 2</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
    )

    const group = screen.getByRole('group')
    expect(group).toHaveAttribute('data-orientation', 'vertical')
  })

  it('supports custom className on all parts', () => {
    const { container } = render(
      <Stepper activeStep={1} className="custom-stepper">
        <StepperItem step={1} className="custom-item">
          <StepperTrigger className="custom-trigger">
            <StepperIndicator className="custom-indicator" />
            <StepperTitle className="custom-title">Step 1</StepperTitle>
            <StepperDescription className="custom-description">
              Description
            </StepperDescription>
          </StepperTrigger>
          <StepperSeparator className="custom-separator" />
        </StepperItem>
      </Stepper>
    )

    expect(container.querySelector('.custom-stepper')).toBeInTheDocument()
    expect(container.querySelector('.custom-item')).toBeInTheDocument()
    expect(container.querySelector('.custom-trigger')).toBeInTheDocument()
    expect(container.querySelector('.custom-indicator')).toBeInTheDocument()
    expect(container.querySelector('.custom-title')).toBeInTheDocument()
    expect(container.querySelector('.custom-description')).toBeInTheDocument()
    expect(container.querySelector('.custom-separator')).toBeInTheDocument()
  })

  it('disables trigger when disabled prop is set', () => {
    render(
      <Stepper activeStep={1}>
        <StepperItem step={1}>
          <StepperTrigger disabled>
            <StepperIndicator />
            <StepperTitle>Step 1</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
    )

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('has no accessibility violations (horizontal)', async () => {
    const { container } = renderStepper(2)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations (vertical)', async () => {
    const { container } = render(
      <Stepper activeStep={1} orientation="vertical">
        <StepperItem step={1}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>Step 1</StepperTitle>
            <StepperDescription>First step</StepperDescription>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>Step 2</StepperTitle>
            <StepperDescription>Second step</StepperDescription>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
