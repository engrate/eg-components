import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import {
  ActionsMenuButton,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu'

const TestDropdownMenu = ({
  onSelect,
}: {
  onSelect?: (value: string) => void
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger data-testid="trigger">Open Menu</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onSelect={() => onSelect?.('cut')}>
        Cut
        <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={() => onSelect?.('copy')}>
        Copy
        <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={() => onSelect?.('paste')}>
        Paste
        <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

const TestActionsMenu = ({
  onSelect,
}: {
  onSelect?: (value: string) => void
}) => (
  <DropdownMenu>
    <ActionsMenuButton data-testid="actions-button" />
    <DropdownMenuContent>
      <DropdownMenuItem onSelect={() => onSelect?.('edit')}>
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={() => onSelect?.('delete')}>
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

const TestDropdownMenuWithCheckbox = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger data-testid="trigger">Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked>
          Show Toolbar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Show Sidebar</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const TestDropdownMenuWithRadio = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger data-testid="trigger">Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value="light">
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const TestDropdownMenuWithSubmenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger data-testid="trigger">Open Menu</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem>New File</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Message</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
)

describe('DropdownMenu', () => {
  describe('Accessibility', () => {
    it('has no accessibility violations when closed', async () => {
      const { container } = render(<TestDropdownMenu />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when open', async () => {
      const user = userEvent.setup()
      const { container } = render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has correct ARIA attributes when open', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const menu = screen.getByRole('menu')
      expect(menu).toHaveAttribute('aria-orientation', 'vertical')
    })
  })

  describe('Opening and Closing', () => {
    it('opens on click', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      expect(screen.queryByRole('menu')).not.toBeInTheDocument()

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })
    })

    it('closes when Escape key is pressed', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      await user.keyboard('{Escape}')

      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
      })
    })

    it('closes when item is selected', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      await user.click(screen.getByRole('menuitem', { name: /Cut/i }))

      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
      })
    })
  })

  describe('Menu Items', () => {
    it('renders menu items correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(screen.getByRole('menuitem', { name: /Cut/i })).toBeInTheDocument()
      expect(
        screen.getByRole('menuitem', { name: /Copy/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('menuitem', { name: /Paste/i })
      ).toBeInTheDocument()
    })

    it('calls onSelect when item is clicked', async () => {
      const user = userEvent.setup()
      const handleSelect = vi.fn()
      render(<TestDropdownMenu onSelect={handleSelect} />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      await user.click(screen.getByRole('menuitem', { name: /Cut/i }))

      expect(handleSelect).toHaveBeenCalledWith('cut')
    })

    it('renders disabled items correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const disabledItem = screen.getByRole('menuitem', {
        name: /Disabled Item/i,
      })
      expect(disabledItem).toHaveAttribute('data-disabled')
    })

    it('renders shortcuts correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(screen.getByText('⌘X')).toBeInTheDocument()
      expect(screen.getByText('⌘C')).toBeInTheDocument()
      expect(screen.getByText('⌘V')).toBeInTheDocument()
    })
  })

  describe('Keyboard Navigation', () => {
    it('navigates with arrow keys', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      await user.keyboard('{ArrowDown}')
      expect(screen.getByRole('menuitem', { name: /Cut/i })).toHaveFocus()

      await user.keyboard('{ArrowDown}')
      expect(screen.getByRole('menuitem', { name: /Copy/i })).toHaveFocus()
    })

    it('selects item with Enter key', async () => {
      const user = userEvent.setup()
      const handleSelect = vi.fn()
      render(<TestDropdownMenu onSelect={handleSelect} />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      await user.keyboard('{ArrowDown}')
      await user.keyboard('{Enter}')

      expect(handleSelect).toHaveBeenCalledWith('cut')
    })
  })

  describe('Checkbox Items', () => {
    it('renders checkbox items correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenuWithCheckbox />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(
        screen.getByRole('menuitemcheckbox', { name: /Show Toolbar/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('menuitemcheckbox', { name: /Show Sidebar/i })
      ).toBeInTheDocument()
    })

    it('shows checked state correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenuWithCheckbox />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const toolbar = screen.getByRole('menuitemcheckbox', {
        name: /Show Toolbar/i,
      })
      expect(toolbar).toHaveAttribute('aria-checked', 'true')

      const sidebar = screen.getByRole('menuitemcheckbox', {
        name: /Show Sidebar/i,
      })
      expect(sidebar).toHaveAttribute('aria-checked', 'false')
    })
  })

  describe('Radio Items', () => {
    it('renders radio items correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenuWithRadio />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(
        screen.getByRole('menuitemradio', { name: /Light/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('menuitemradio', { name: /Dark/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('menuitemradio', { name: /System/i })
      ).toBeInTheDocument()
    })

    it('shows selected state correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenuWithRadio />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const light = screen.getByRole('menuitemradio', { name: /Light/i })
      expect(light).toHaveAttribute('aria-checked', 'true')

      const dark = screen.getByRole('menuitemradio', { name: /Dark/i })
      expect(dark).toHaveAttribute('aria-checked', 'false')
    })
  })

  describe('Submenus', () => {
    it('renders submenu trigger correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenuWithSubmenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(screen.getByText('Share')).toBeInTheDocument()
    })

    it('opens submenu on hover', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenuWithSubmenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      await user.hover(screen.getByText('Share'))

      await waitFor(() => {
        expect(screen.getByText('Email')).toBeInTheDocument()
        expect(screen.getByText('Message')).toBeInTheDocument()
      })
    })
  })

  describe('Labels and Separators', () => {
    it('renders labels correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(screen.getByText('Actions')).toBeInTheDocument()
    })

    it('renders separators correctly', async () => {
      const user = userEvent.setup()
      render(<TestDropdownMenu />)

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const separators = document.querySelectorAll('[role="separator"]')
      expect(separators.length).toBeGreaterThan(0)
    })
  })

  describe('ActionsMenuButton', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<TestActionsMenu />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('renders ellipsis button correctly', () => {
      render(<TestActionsMenu />)

      const button = screen.getByTestId('actions-button')
      expect(button).toBeInTheDocument()
      expect(screen.getByText('Open menu')).toBeInTheDocument() // sr-only text
    })

    it('opens menu on click', async () => {
      const user = userEvent.setup()
      render(<TestActionsMenu />)

      await user.click(screen.getByTestId('actions-button'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(
        screen.getByRole('menuitem', { name: /Edit/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('menuitem', { name: /Delete/i })
      ).toBeInTheDocument()
    })

    it('calls onSelect when item is clicked', async () => {
      const user = userEvent.setup()
      const handleSelect = vi.fn()
      render(<TestActionsMenu onSelect={handleSelect} />)

      await user.click(screen.getByTestId('actions-button'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      await user.click(screen.getByRole('menuitem', { name: /Edit/i }))

      expect(handleSelect).toHaveBeenCalledWith('edit')
    })

    it('renders with different icon sizes', () => {
      const { rerender } = render(
        <DropdownMenu>
          <ActionsMenuButton data-testid="button" iconSize="sm" />
          <DropdownMenuContent>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      expect(screen.getByTestId('button')).toHaveClass('h-7', 'w-7')

      rerender(
        <DropdownMenu>
          <ActionsMenuButton data-testid="button" iconSize="lg" />
          <DropdownMenuContent>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      expect(screen.getByTestId('button')).toHaveClass('h-10', 'w-10')
    })
  })

  describe('Styling', () => {
    it('applies custom className to content', async () => {
      const user = userEvent.setup()
      render(
        <DropdownMenu>
          <DropdownMenuTrigger data-testid="trigger">Open</DropdownMenuTrigger>
          <DropdownMenuContent className="custom-class">
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(screen.getByRole('menu')).toHaveClass('custom-class')
    })

    it('applies inset prop to items', async () => {
      const user = userEvent.setup()
      render(
        <DropdownMenu>
          <DropdownMenuTrigger data-testid="trigger">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem inset>Inset Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      await user.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const item = screen.getByRole('menuitem', { name: /Inset Item/i })
      expect(item).toHaveClass('pl-8')
    })
  })
})
