import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it, vi, afterEach } from 'vitest'
import { axe } from 'vitest-axe'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarItem,
  SidebarSeparator,
  SidebarTrigger,
} from './Sidebar'

describe('Sidebar', () => {
  it('renders with children', () => {
    render(
      <Sidebar>
        <SidebarContent>Sidebar content</SidebarContent>
      </Sidebar>
    )
    expect(screen.getByText('Sidebar content')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Sidebar aria-label="Main navigation">
        <SidebarHeader>Header</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarItem>Home</SidebarItem>
            <SidebarItem>Settings</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('starts expanded by default', () => {
    render(
      <Sidebar data-testid="sidebar">
        <SidebarContent>Content</SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'data-collapsed',
      'false'
    )
    expect(screen.getByTestId('sidebar')).toHaveClass('w-64')
  })

  it('respects defaultCollapsed prop', () => {
    render(
      <Sidebar data-testid="sidebar" defaultCollapsed>
        <SidebarContent>Content</SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'data-collapsed',
      'true'
    )
    expect(screen.getByTestId('sidebar')).toHaveClass('w-16')
  })

  it('toggles collapsed state via SidebarTrigger', async () => {
    const user = userEvent.setup()

    render(
      <Sidebar data-testid="sidebar">
        <SidebarContent>Content</SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>
    )

    const trigger = screen.getByRole('button', { name: /collapse sidebar/i })
    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'data-collapsed',
      'false'
    )

    await user.click(trigger)
    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'data-collapsed',
      'true'
    )

    const expandTrigger = screen.getByRole('button', {
      name: /expand sidebar/i,
    })
    await user.click(expandTrigger)
    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'data-collapsed',
      'false'
    )
  })

  it('supports controlled collapsed state', async () => {
    const user = userEvent.setup()
    const onCollapsedChange = vi.fn()

    const { rerender } = render(
      <Sidebar
        data-testid="sidebar"
        collapsed={false}
        onCollapsedChange={onCollapsedChange}
      >
        <SidebarContent>Content</SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>
    )

    const trigger = screen.getByRole('button', { name: /collapse sidebar/i })
    await user.click(trigger)

    expect(onCollapsedChange).toHaveBeenCalledWith(true)
    // State should not change without parent updating prop
    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'data-collapsed',
      'false'
    )

    // Parent updates the prop
    rerender(
      <Sidebar
        data-testid="sidebar"
        collapsed={true}
        onCollapsedChange={onCollapsedChange}
      >
        <SidebarContent>Content</SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>
    )

    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'data-collapsed',
      'true'
    )
  })

  it('applies width variants', () => {
    const { rerender } = render(
      <Sidebar data-testid="sidebar" width="sm">
        <SidebarContent>Content</SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('sidebar')).toHaveClass('w-52')

    rerender(
      <Sidebar data-testid="sidebar" width="default">
        <SidebarContent>Content</SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('sidebar')).toHaveClass('w-64')

    rerender(
      <Sidebar data-testid="sidebar" width="lg">
        <SidebarContent>Content</SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('sidebar')).toHaveClass('w-72')
  })

  it('hides group labels when collapsed', async () => {
    const user = userEvent.setup()

    render(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarItem>Home</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>
    )

    expect(screen.getByText('Navigation')).toBeInTheDocument()

    const trigger = screen.getByRole('button', { name: /collapse sidebar/i })
    await user.click(trigger)

    expect(screen.queryByText('Navigation')).not.toBeInTheDocument()
  })

  it('hides item labels when collapsed', async () => {
    const user = userEvent.setup()

    render(
      <Sidebar>
        <SidebarContent>
          <SidebarItem>Home</SidebarItem>
        </SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()

    const trigger = screen.getByRole('button', { name: /collapse sidebar/i })
    await user.click(trigger)

    expect(screen.queryByText('Home')).not.toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(
      <Sidebar data-testid="sidebar" className="custom-class">
        <SidebarContent>Content</SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('sidebar')).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLElement>()
    render(
      <Sidebar ref={ref}>
        <SidebarContent>Content</SidebarContent>
      </Sidebar>
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })

  describe('autoCollapseMobile', () => {
    const originalMatchMedia = window.matchMedia

    afterEach(() => {
      window.matchMedia = originalMatchMedia
    })

    it('auto-collapses on mobile viewport by default', () => {
      // Mock mobile viewport
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(max-width: 768px)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }))

      render(
        <Sidebar data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      )

      expect(screen.getByTestId('sidebar')).toHaveAttribute(
        'data-collapsed',
        'true'
      )
    })

    it('does not auto-collapse on desktop viewport', () => {
      // Mock desktop viewport
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }))

      render(
        <Sidebar data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      )

      expect(screen.getByTestId('sidebar')).toHaveAttribute(
        'data-collapsed',
        'false'
      )
    })

    it('respects autoCollapseMobile=false', () => {
      // Mock mobile viewport
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(max-width: 768px)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }))

      render(
        <Sidebar data-testid="sidebar" autoCollapseMobile={false}>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      )

      expect(screen.getByTestId('sidebar')).toHaveAttribute(
        'data-collapsed',
        'false'
      )
    })

    it('does not auto-collapse if collapsible=false', () => {
      // Mock mobile viewport
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(max-width: 768px)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }))

      render(
        <Sidebar data-testid="sidebar" collapsible={false}>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      )

      expect(screen.getByTestId('sidebar')).toHaveAttribute(
        'data-collapsed',
        'false'
      )
    })

    it('auto-expands when viewport becomes larger', () => {
      let changeHandler: ((e: MediaQueryListEvent) => void) | null = null

      // Start with mobile viewport
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(max-width: 768px)',
        media: query,
        addEventListener: (
          _event: string,
          handler: (e: MediaQueryListEvent) => void
        ) => {
          changeHandler = handler
        },
        removeEventListener: vi.fn(),
      }))

      render(
        <Sidebar data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      )

      // Initially collapsed on mobile
      expect(screen.getByTestId('sidebar')).toHaveAttribute(
        'data-collapsed',
        'true'
      )

      // Simulate viewport becoming larger
      act(() => {
        if (changeHandler) {
          changeHandler({ matches: false } as MediaQueryListEvent)
        }
      })

      // Should expand
      expect(screen.getByTestId('sidebar')).toHaveAttribute(
        'data-collapsed',
        'false'
      )
    })
  })
})

describe('SidebarItem', () => {
  it('renders with children', () => {
    render(
      <Sidebar>
        <SidebarContent>
          <SidebarItem>Home</SidebarItem>
        </SidebarContent>
      </Sidebar>
    )
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument()
  })

  it('renders with icon', () => {
    render(
      <Sidebar>
        <SidebarContent>
          <SidebarItem icon={<span data-testid="icon">🏠</span>}>
            Home
          </SidebarItem>
        </SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('applies active state', () => {
    render(
      <Sidebar>
        <SidebarContent>
          <SidebarItem active data-testid="active-item">
            Home
          </SidebarItem>
        </SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('active-item')).toHaveClass('bg-alt')
  })

  it('renders as child with asChild prop', () => {
    render(
      <Sidebar>
        <SidebarContent>
          <SidebarItem asChild>
            <a href="/home" data-testid="link-item">
              Home
            </a>
          </SidebarItem>
        </SidebarContent>
      </Sidebar>
    )
    const element = screen.getByTestId('link-item')
    expect(element.tagName).toBe('A')
    expect(element).toHaveAttribute('href', '/home')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(
      <Sidebar>
        <SidebarContent>
          <SidebarItem ref={ref}>Home</SidebarItem>
        </SidebarContent>
      </Sidebar>
    )
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})

describe('SidebarSeparator', () => {
  it('renders as hr element', () => {
    render(
      <Sidebar>
        <SidebarContent>
          <SidebarSeparator data-testid="separator" />
        </SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('separator').tagName).toBe('HR')
  })

  it('applies custom className', () => {
    render(
      <Sidebar>
        <SidebarContent>
          <SidebarSeparator data-testid="separator" className="custom-class" />
        </SidebarContent>
      </Sidebar>
    )
    expect(screen.getByTestId('separator')).toHaveClass('custom-class')
  })
})

describe('SidebarHeader', () => {
  it('renders with children', () => {
    render(
      <Sidebar>
        <SidebarHeader>Logo</SidebarHeader>
      </Sidebar>
    )
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Sidebar>
        <SidebarHeader ref={ref}>Logo</SidebarHeader>
      </Sidebar>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

describe('SidebarFooter', () => {
  it('renders with children', () => {
    render(
      <Sidebar>
        <SidebarFooter>Footer content</SidebarFooter>
      </Sidebar>
    )
    expect(screen.getByText('Footer content')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Sidebar>
        <SidebarFooter ref={ref}>Footer</SidebarFooter>
      </Sidebar>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
