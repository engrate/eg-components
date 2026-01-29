import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'

import { Button } from '../Button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './AlertDialog'

const TestAlertDialog = ({
  defaultOpen = false,
  onOpenChange,
}: {
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}) => (
  <AlertDialog defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
    <AlertDialogTrigger asChild>
      <Button>Delete Item</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your item.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

describe('AlertDialog', () => {
  describe('Accessibility', () => {
    it('has no accessibility violations when closed', async () => {
      const { container } = render(<TestAlertDialog />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when open', async () => {
      const { container } = render(<TestAlertDialog defaultOpen />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has correct ARIA attributes when open', async () => {
      render(<TestAlertDialog defaultOpen />)

      const dialog = screen.getByRole('alertdialog')
      expect(dialog).toHaveAttribute('aria-labelledby')
      expect(dialog).toHaveAttribute('aria-describedby')
    })

    it('has accessible title and description', () => {
      render(<TestAlertDialog defaultOpen />)

      expect(screen.getByText('Are you sure?')).toBeInTheDocument()
      expect(
        screen.getByText(
          'This action cannot be undone. This will permanently delete your item.'
        )
      ).toBeInTheDocument()
    })
  })

  describe('Opening and Closing', () => {
    it('opens when trigger is clicked', async () => {
      const user = userEvent.setup()
      render(<TestAlertDialog />)

      expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: 'Delete Item' }))

      expect(screen.getByRole('alertdialog')).toBeInTheDocument()
    })

    it('closes when Cancel button is clicked', async () => {
      const user = userEvent.setup()
      render(<TestAlertDialog defaultOpen />)

      expect(screen.getByRole('alertdialog')).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: 'Cancel' }))

      await waitFor(() => {
        expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
      })
    })

    it('closes when Action button is clicked', async () => {
      const user = userEvent.setup()
      render(<TestAlertDialog defaultOpen />)

      expect(screen.getByRole('alertdialog')).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: 'Delete' }))

      await waitFor(() => {
        expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
      })
    })

    it('closes when Escape key is pressed', async () => {
      const user = userEvent.setup()
      render(<TestAlertDialog defaultOpen />)

      expect(screen.getByRole('alertdialog')).toBeInTheDocument()

      await user.keyboard('{Escape}')

      await waitFor(() => {
        expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
      })
    })

    it('calls onOpenChange when dialog opens and closes', async () => {
      const user = userEvent.setup()
      const handleOpenChange = vi.fn()
      render(<TestAlertDialog onOpenChange={handleOpenChange} />)

      await user.click(screen.getByRole('button', { name: 'Delete Item' }))
      expect(handleOpenChange).toHaveBeenCalledWith(true)

      await user.click(screen.getByRole('button', { name: 'Cancel' }))
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(false)
      })
    })

    it('does not close when clicking overlay (unlike Modal)', async () => {
      const user = userEvent.setup()
      render(<TestAlertDialog defaultOpen />)

      expect(screen.getByRole('alertdialog')).toBeInTheDocument()

      // Click on the overlay
      const overlay = document.querySelector('.bg-black\\/50')
      expect(overlay).toBeInTheDocument()
      if (overlay) {
        await user.click(overlay)
      }

      // AlertDialog should still be open (unlike Modal, AlertDialog blocks interaction)
      expect(screen.getByRole('alertdialog')).toBeInTheDocument()
    })
  })

  describe('Focus Management', () => {
    it('traps focus inside the alert dialog', async () => {
      const user = userEvent.setup()
      render(<TestAlertDialog defaultOpen />)

      const dialog = screen.getByRole('alertdialog')
      expect(dialog).toBeInTheDocument()

      // Tab through focusable elements - focus should stay within dialog
      await user.tab()
      expect(document.activeElement).not.toBe(document.body)

      // The focus should be on an element inside the dialog
      const focusedElement = document.activeElement
      expect(dialog.contains(focusedElement)).toBe(true)
    })

    it('returns focus to trigger after closing', async () => {
      const user = userEvent.setup()
      render(<TestAlertDialog />)

      const trigger = screen.getByRole('button', { name: 'Delete Item' })
      await user.click(trigger)

      expect(screen.getByRole('alertdialog')).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: 'Cancel' }))

      await waitFor(() => {
        expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
      })

      expect(document.activeElement).toBe(trigger)
    })
  })

  describe('Content Sizes', () => {
    it('renders with small size', () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogContent size="sm" data-testid="alert-dialog-content">
            <AlertDialogHeader>
              <AlertDialogTitle>Small Dialog</AlertDialogTitle>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      )

      const content = screen.getByTestId('alert-dialog-content')
      expect(content).toHaveClass('max-w-[400px]')
    })

    it('renders with default size', () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogContent data-testid="alert-dialog-content">
            <AlertDialogHeader>
              <AlertDialogTitle>Default Dialog</AlertDialogTitle>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      )

      const content = screen.getByTestId('alert-dialog-content')
      expect(content).toHaveClass('max-w-[500px]')
    })

    it('renders with large size', () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogContent size="lg" data-testid="alert-dialog-content">
            <AlertDialogHeader>
              <AlertDialogTitle>Large Dialog</AlertDialogTitle>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      )

      const content = screen.getByTestId('alert-dialog-content')
      expect(content).toHaveClass('max-w-[640px]')
    })
  })

  describe('Button Variants', () => {
    it('renders Action button with primary variant by default', () => {
      render(<TestAlertDialog defaultOpen />)

      const actionButton = screen.getByRole('button', { name: 'Delete' })
      expect(actionButton).toHaveClass('bg-sunflower')
    })

    it('renders Cancel button with secondary variant by default', () => {
      render(<TestAlertDialog defaultOpen />)

      const cancelButton = screen.getByRole('button', { name: 'Cancel' })
      expect(cancelButton).toHaveClass('border')
    })

    it('allows custom button variants', () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Custom Variants</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel variant="ghost">Cancel</AlertDialogCancel>
              <AlertDialogAction variant="secondary">Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )

      const cancelButton = screen.getByRole('button', { name: 'Cancel' })
      const actionButton = screen.getByRole('button', { name: 'Confirm' })

      expect(cancelButton).not.toHaveClass('border')
      expect(actionButton).toHaveClass('border')
    })
  })

  describe('Custom ClassName', () => {
    it('allows custom className on AlertDialogContent', () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogContent
            className="custom-content-class"
            data-testid="alert-dialog-content"
          >
            <AlertDialogHeader>
              <AlertDialogTitle>Test</AlertDialogTitle>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      )

      const content = screen.getByTestId('alert-dialog-content')
      expect(content).toHaveClass('custom-content-class')
    })

    it('allows custom className on AlertDialogHeader', () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogHeader
              className="custom-header-class"
              data-testid="alert-dialog-header"
            >
              <AlertDialogTitle>Test</AlertDialogTitle>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      )

      const header = screen.getByTestId('alert-dialog-header')
      expect(header).toHaveClass('custom-header-class')
    })

    it('allows custom className on AlertDialogFooter', () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Test</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter
              className="custom-footer-class"
              data-testid="alert-dialog-footer"
            >
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )

      const footer = screen.getByTestId('alert-dialog-footer')
      expect(footer).toHaveClass('custom-footer-class')
    })
  })
})
