import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'

import { EngrateLogo } from './EngrateLogo'

describe('EngrateLogo', () => {
  it('renders with default size', () => {
    render(<EngrateLogo />)
    const logo = screen.getByRole('img', { name: 'Engrate' })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveClass('h-5')
  })

  it('renders with xs size', () => {
    render(<EngrateLogo size="xs" />)
    const logo = screen.getByRole('img', { name: 'Engrate' })
    expect(logo).toHaveClass('h-3')
  })

  it('renders with sm size', () => {
    render(<EngrateLogo size="sm" />)
    const logo = screen.getByRole('img', { name: 'Engrate' })
    expect(logo).toHaveClass('h-4')
  })

  it('renders with md size', () => {
    render(<EngrateLogo size="md" />)
    const logo = screen.getByRole('img', { name: 'Engrate' })
    expect(logo).toHaveClass('h-5')
  })

  it('renders with lg size', () => {
    render(<EngrateLogo size="lg" />)
    const logo = screen.getByRole('img', { name: 'Engrate' })
    expect(logo).toHaveClass('h-6')
  })

  it('renders with xl size', () => {
    render(<EngrateLogo size="xl" />)
    const logo = screen.getByRole('img', { name: 'Engrate' })
    expect(logo).toHaveClass('h-8')
  })

  it('applies custom className', () => {
    render(<EngrateLogo className="custom-class" />)
    const logo = screen.getByRole('img', { name: 'Engrate' })
    expect(logo).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<EngrateLogo ref={ref} />)
    expect(ref.current).toBeInstanceOf(SVGSVGElement)
  })

  it('passes through additional SVG props', () => {
    render(<EngrateLogo data-testid="custom-logo" />)
    expect(screen.getByTestId('custom-logo')).toBeInTheDocument()
  })

  describe('compact prop', () => {
    it('renders full logo by default', () => {
      const { container } = render(<EngrateLogo />)
      // Full logo has more path elements (wordmark + icon)
      const paths = container.querySelectorAll('path')
      expect(paths.length).toBeGreaterThan(3)
    })

    it('renders only icon when compact is true', () => {
      const { container } = render(<EngrateLogo compact />)
      // Compact logo only has 3 path elements (the icon triangles)
      const paths = container.querySelectorAll('path')
      expect(paths.length).toBe(3)
    })

    it('renders full logo when compact is false', () => {
      const { container } = render(<EngrateLogo compact={false} />)
      const paths = container.querySelectorAll('path')
      expect(paths.length).toBeGreaterThan(3)
    })

    it('has no accessibility violations when compact', async () => {
      const { container } = render(<EngrateLogo compact />)
      expect(await axe(container)).toHaveNoViolations()
    })

    describe('responsive compact', () => {
      it('renders wordmark with hidden class when base is true', () => {
        const { container } = render(
          <EngrateLogo compact={{ base: true, md: false }} />
        )
        // Should render all paths (wordmark included for responsive hiding)
        const paths = container.querySelectorAll('path')
        expect(paths.length).toBeGreaterThan(3)
        // Wordmark group should have hidden and md:block classes
        const groups = container.querySelectorAll('g')
        const wordmarkGroup = groups[2] // The wordmark is in the third g element
        expect(wordmarkGroup).toHaveClass('hidden')
        expect(wordmarkGroup).toHaveClass('md:block')
      })

      it('renders wordmark visible at base with md:hidden', () => {
        const { container } = render(
          <EngrateLogo compact={{ base: false, md: true }} />
        )
        const paths = container.querySelectorAll('path')
        expect(paths.length).toBeGreaterThan(3)
        const groups = container.querySelectorAll('g')
        const wordmarkGroup = groups[2]
        expect(wordmarkGroup).toHaveClass('md:hidden')
      })

      it('supports multiple breakpoints', () => {
        const { container } = render(
          <EngrateLogo compact={{ base: true, sm: false, lg: true }} />
        )
        const groups = container.querySelectorAll('g')
        const wordmarkGroup = groups[2]
        expect(wordmarkGroup).toHaveClass('hidden')
        expect(wordmarkGroup).toHaveClass('sm:block')
        expect(wordmarkGroup).toHaveClass('lg:hidden')
      })

      it('has no accessibility violations with responsive compact', async () => {
        const { container } = render(
          <EngrateLogo compact={{ base: true, md: false }} />
        )
        expect(await axe(container)).toHaveNoViolations()
      })
    })
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<EngrateLogo />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with different sizes', async () => {
    const { container } = render(
      <div>
        <EngrateLogo size="xs" />
        <EngrateLogo size="sm" />
        <EngrateLogo size="md" />
        <EngrateLogo size="lg" />
        <EngrateLogo size="xl" />
      </div>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
