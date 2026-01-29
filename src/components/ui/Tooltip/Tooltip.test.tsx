import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { beforeAll, describe, expect, it } from 'vitest'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './Tooltip'

// Mock ResizeObserver for arrow tests
beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {
      // Mock implementation
    }
    unobserve() {
      // Mock implementation
    }
    disconnect() {
      // Mock implementation
    }
  }
})

const TestTooltip = ({
  content = 'Tooltip content',
  variant,
  showArrow,
}: {
  content?: string
  variant?: 'default' | 'light'
  showArrow?: boolean
}) => (
  <TooltipProvider delayDuration={0}>
    <Tooltip>
      <TooltipTrigger data-testid="trigger">Hover me</TooltipTrigger>
      <TooltipContent variant={variant} showArrow={showArrow}>
        {content}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

// Helper to get the tooltip content container (the div with styles, not the hidden span)
const getTooltipContent = () => {
  const wrapper = document.querySelector('[data-radix-popper-content-wrapper]')
  return wrapper?.querySelector('[data-side]') as HTMLElement | null
}

describe('Tooltip', () => {
  it('renders the trigger', () => {
    render(<TestTooltip />)
    expect(screen.getByTestId('trigger')).toBeInTheDocument()
  })

  it('shows tooltip content on hover', async () => {
    const user = userEvent.setup()
    render(<TestTooltip content="Hello tooltip" />)

    await user.hover(screen.getByTestId('trigger'))

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    // The visible content is in the content container
    const content = getTooltipContent()
    expect(content).toHaveTextContent('Hello tooltip')
  })

  it('shows tooltip on focus', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button data-testid="trigger">Focus me</button>
          </TooltipTrigger>
          <TooltipContent>Focused tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    await user.tab()

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    const content = getTooltipContent()
    expect(content).toHaveTextContent('Focused tooltip')
  })

  it('applies default variant classes', async () => {
    const user = userEvent.setup()
    render(<TestTooltip />)

    await user.hover(screen.getByTestId('trigger'))

    await waitFor(() => {
      const content = getTooltipContent()
      expect(content).toHaveClass('bg-primary')
      expect(content).toHaveClass('text-white')
    })
  })

  it('applies light variant classes', async () => {
    const user = userEvent.setup()
    render(<TestTooltip variant="light" />)

    await user.hover(screen.getByTestId('trigger'))

    await waitFor(() => {
      const content = getTooltipContent()
      expect(content).toHaveClass('bg-card')
      expect(content).toHaveClass('border')
    })
  })

  it('renders with arrow when showArrow is true', async () => {
    const user = userEvent.setup()
    render(<TestTooltip showArrow />)

    await user.hover(screen.getByTestId('trigger'))

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    // Arrow is rendered as an SVG within the content
    const content = getTooltipContent()
    const arrow = content?.querySelector('svg')
    expect(arrow).toBeInTheDocument()
  })

  it('accepts custom className on TooltipContent', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger data-testid="trigger">Hover</TooltipTrigger>
          <TooltipContent className="custom-class">Content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    await user.hover(screen.getByTestId('trigger'))

    await waitFor(() => {
      const content = getTooltipContent()
      expect(content).toHaveClass('custom-class')
    })
  })

  it('has no accessibility violations', async () => {
    const user = userEvent.setup()
    const { container } = render(<TestTooltip content="Accessible tooltip" />)

    await user.hover(screen.getByTestId('trigger'))

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations with light variant', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <TestTooltip content="Light tooltip" variant="light" />
    )

    await user.hover(screen.getByTestId('trigger'))

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
