import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './ContextMenu'

const TestContextMenu = ({
  onSelect,
}: {
  onSelect?: (value: string) => void
}) => (
  <ContextMenu>
    <ContextMenuTrigger asChild>
      <div
        data-testid="trigger"
        className="flex h-32 w-48 items-center justify-center border border-dashed"
      >
        Right click here
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>Actions</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem onSelect={() => onSelect?.('cut')}>
        Cut
        <ContextMenuShortcut>⌘X</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem onSelect={() => onSelect?.('copy')}>
        Copy
        <ContextMenuShortcut>⌘C</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem onSelect={() => onSelect?.('paste')}>
        Paste
        <ContextMenuShortcut>⌘V</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem disabled>Disabled Item</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)

const TestContextMenuWithCheckbox = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          data-testid="trigger"
          className="flex h-32 w-48 items-center justify-center border border-dashed"
        >
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuCheckboxItem checked>Show Toolbar</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Sidebar</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

const TestContextMenuWithRadio = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          data-testid="trigger"
          className="flex h-32 w-48 items-center justify-center border border-dashed"
        >
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuRadioGroup value="light">
          <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

const TestContextMenuWithSubmenu = () => (
  <ContextMenu>
    <ContextMenuTrigger asChild>
      <div
        data-testid="trigger"
        className="flex h-32 w-48 items-center justify-center border border-dashed"
      >
        Right click here
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuGroup>
        <ContextMenuItem>New File</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Email</ContextMenuItem>
            <ContextMenuItem>Message</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
)

describe('ContextMenu', () => {
  describe('Accessibility', () => {
    it('has no accessibility violations when closed', async () => {
      const { container } = render(<TestContextMenu />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when open', async () => {
      const user = userEvent.setup()
      const { container } = render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has correct ARIA attributes when open', async () => {
      const user = userEvent.setup()
      render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const menu = screen.getByRole('menu')
      expect(menu).toHaveAttribute('aria-orientation', 'vertical')
    })
  })

  describe('Opening and Closing', () => {
    it('opens on right click', async () => {
      const user = userEvent.setup()
      render(<TestContextMenu />)

      expect(screen.queryByRole('menu')).not.toBeInTheDocument()

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })
    })

    it('closes when Escape key is pressed', async () => {
      const user = userEvent.setup()
      render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenu onSelect={handleSelect} />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      await user.click(screen.getByRole('menuitem', { name: /Cut/i }))

      expect(handleSelect).toHaveBeenCalledWith('cut')
    })

    it('renders disabled items correctly', async () => {
      const user = userEvent.setup()
      render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenu onSelect={handleSelect} />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenuWithCheckbox />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenuWithCheckbox />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenuWithRadio />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenuWithRadio />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenuWithSubmenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(screen.getByText('Share')).toBeInTheDocument()
    })

    it('opens submenu on hover', async () => {
      const user = userEvent.setup()
      render(<TestContextMenuWithSubmenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

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
      render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(screen.getByText('Actions')).toBeInTheDocument()
    })

    it('renders separators correctly', async () => {
      const user = userEvent.setup()
      render(<TestContextMenu />)

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const separators = document.querySelectorAll('[role="separator"]')
      expect(separators.length).toBeGreaterThan(0)
    })
  })

  describe('Styling', () => {
    it('applies custom className to content', async () => {
      const user = userEvent.setup()
      render(
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div data-testid="trigger">Right click</div>
          </ContextMenuTrigger>
          <ContextMenuContent className="custom-class">
            <ContextMenuItem>Item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      expect(screen.getByRole('menu')).toHaveClass('custom-class')
    })

    it('applies inset prop to items', async () => {
      const user = userEvent.setup()
      render(
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div data-testid="trigger">Right click</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem inset>Inset Item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )

      const trigger = screen.getByTestId('trigger')
      await user.pointer({ keys: '[MouseRight]', target: trigger })

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const item = screen.getByRole('menuitem', { name: /Inset Item/i })
      expect(item).toHaveClass('pl-8')
    })
  })
})
