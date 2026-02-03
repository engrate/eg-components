import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import {
  Footer,
  FooterBottom,
  FooterContent,
  FooterCopyright,
  FooterHeading,
  FooterLinks,
  FooterSection,
} from './Footer'

describe('Footer', () => {
  it('renders as a footer element', () => {
    render(<Footer data-testid="footer">Content</Footer>)
    expect(screen.getByTestId('footer').tagName).toBe('FOOTER')
  })

  it('renders children', () => {
    render(<Footer>Footer Content</Footer>)
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    const { rerender } = render(
      <Footer variant="default" data-testid="footer">
        Content
      </Footer>
    )
    expect(screen.getByTestId('footer')).toHaveClass('bg-white')

    rerender(
      <Footer variant="filled" data-testid="footer">
        Content
      </Footer>
    )
    expect(screen.getByTestId('footer')).toHaveClass('bg-main')

    rerender(
      <Footer variant="dark" data-testid="footer">
        Content
      </Footer>
    )
    expect(screen.getByTestId('footer')).toHaveClass('bg-primary', 'text-white')
  })

  it('applies size classes', () => {
    const { rerender } = render(
      <Footer size="sm" data-testid="footer">
        Content
      </Footer>
    )
    expect(screen.getByTestId('footer')).toHaveClass('py-6')

    rerender(
      <Footer size="default" data-testid="footer">
        Content
      </Footer>
    )
    expect(screen.getByTestId('footer')).toHaveClass('py-10')

    rerender(
      <Footer size="lg" data-testid="footer">
        Content
      </Footer>
    )
    expect(screen.getByTestId('footer')).toHaveClass('py-16')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Footer asChild>
        <div data-testid="custom-footer">Custom Footer</div>
      </Footer>
    )
    expect(screen.getByTestId('custom-footer')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(
      <Footer className="custom-class" data-testid="footer">
        Content
      </Footer>
    )
    expect(screen.getByTestId('footer')).toHaveClass('custom-class')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Footer>
        <FooterContent>
          <FooterSection>
            <FooterHeading>Company</FooterHeading>
            <FooterLinks aria-label="Company links">
              <a href="/about">About</a>
              <a href="/careers">Careers</a>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <FooterCopyright>© 2026 Engrate</FooterCopyright>
        </FooterBottom>
      </Footer>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('FooterContent', () => {
  it('renders children', () => {
    render(<FooterContent>Content Area</FooterContent>)
    expect(screen.getByText('Content Area')).toBeInTheDocument()
  })

  it('applies grid styling', () => {
    render(<FooterContent data-testid="content">Content</FooterContent>)
    expect(screen.getByTestId('content')).toHaveClass('grid', 'gap-8')
  })

  it('renders as child when asChild is true', () => {
    render(
      <FooterContent asChild>
        <section data-testid="custom-content">Custom Content</section>
      </FooterContent>
    )
    expect(screen.getByTestId('custom-content').tagName).toBe('SECTION')
  })
})

describe('FooterSection', () => {
  it('renders children', () => {
    render(<FooterSection>Section Content</FooterSection>)
    expect(screen.getByText('Section Content')).toBeInTheDocument()
  })

  it('applies flex column styling', () => {
    render(<FooterSection data-testid="section">Content</FooterSection>)
    expect(screen.getByTestId('section')).toHaveClass(
      'flex',
      'flex-col',
      'gap-3'
    )
  })

  it('renders as child when asChild is true', () => {
    render(
      <FooterSection asChild>
        <article data-testid="custom-section">Custom Section</article>
      </FooterSection>
    )
    expect(screen.getByTestId('custom-section').tagName).toBe('ARTICLE')
  })
})

describe('FooterHeading', () => {
  it('renders as h3 by default', () => {
    render(<FooterHeading data-testid="heading">Heading</FooterHeading>)
    expect(screen.getByTestId('heading').tagName).toBe('H3')
  })

  it('renders children', () => {
    render(<FooterHeading>Section Heading</FooterHeading>)
    expect(screen.getByText('Section Heading')).toBeInTheDocument()
  })

  it('applies text styling', () => {
    render(<FooterHeading data-testid="heading">Heading</FooterHeading>)
    expect(screen.getByTestId('heading')).toHaveClass(
      'text-small',
      'font-medium'
    )
  })

  it('renders as child when asChild is true', () => {
    render(
      <FooterHeading asChild>
        <h4 data-testid="custom-heading">Custom Heading</h4>
      </FooterHeading>
    )
    expect(screen.getByTestId('custom-heading').tagName).toBe('H4')
  })
})

describe('FooterLinks', () => {
  it('renders as nav element', () => {
    render(<FooterLinks data-testid="links">Links</FooterLinks>)
    expect(screen.getByTestId('links').tagName).toBe('NAV')
  })

  it('renders children', () => {
    render(<FooterLinks>Link Content</FooterLinks>)
    expect(screen.getByText('Link Content')).toBeInTheDocument()
  })

  it('applies flex column styling', () => {
    render(<FooterLinks data-testid="links">Links</FooterLinks>)
    expect(screen.getByTestId('links')).toHaveClass('flex', 'flex-col', 'gap-2')
  })

  it('renders as child when asChild is true', () => {
    render(
      <FooterLinks asChild>
        <ul data-testid="custom-links">Custom Links</ul>
      </FooterLinks>
    )
    expect(screen.getByTestId('custom-links').tagName).toBe('UL')
  })
})

describe('FooterBottom', () => {
  it('renders children', () => {
    render(<FooterBottom>Bottom Content</FooterBottom>)
    expect(screen.getByText('Bottom Content')).toBeInTheDocument()
  })

  it('applies border and flex styling', () => {
    render(<FooterBottom data-testid="bottom">Content</FooterBottom>)
    expect(screen.getByTestId('bottom')).toHaveClass('border-t', 'flex', 'mt-8')
  })

  it('renders as child when asChild is true', () => {
    render(
      <FooterBottom asChild>
        <section data-testid="custom-bottom">Custom Bottom</section>
      </FooterBottom>
    )
    expect(screen.getByTestId('custom-bottom').tagName).toBe('SECTION')
  })
})

describe('FooterCopyright', () => {
  it('renders as p element', () => {
    render(<FooterCopyright data-testid="copyright">© 2026</FooterCopyright>)
    expect(screen.getByTestId('copyright').tagName).toBe('P')
  })

  it('renders children', () => {
    render(<FooterCopyright>© 2026 Engrate</FooterCopyright>)
    expect(screen.getByText('© 2026 Engrate')).toBeInTheDocument()
  })

  it('applies text styling', () => {
    render(<FooterCopyright data-testid="copyright">© 2026</FooterCopyright>)
    expect(screen.getByTestId('copyright')).toHaveClass(
      'text-small',
      'text-secondary'
    )
  })

  it('renders as child when asChild is true', () => {
    render(
      <FooterCopyright asChild>
        <span data-testid="custom-copyright">Custom Copyright</span>
      </FooterCopyright>
    )
    expect(screen.getByTestId('custom-copyright').tagName).toBe('SPAN')
  })
})
