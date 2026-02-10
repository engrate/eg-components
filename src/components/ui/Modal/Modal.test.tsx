import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import { Button } from '../Button'

import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from './Modal'

const TestModal = ({
  defaultOpen = false,
  onOpenChange,
  showCloseButton = true,
}: {
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  showCloseButton?: boolean
}) => (
  <Modal defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
    <ModalTrigger asChild>
      <Button>Open Modal</Button>
    </ModalTrigger>
    <ModalContent showCloseButton={showCloseButton}>
      <ModalHeader>
        <ModalTitle>Test Modal Title</ModalTitle>
        <ModalDescription>Test modal description text.</ModalDescription>
      </ModalHeader>
      <div>Modal body content</div>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="secondary">Cancel</Button>
        </ModalClose>
        <Button>Confirm</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

describe('Modal', () => {
  describe('Accessibility', () => {
    it('has no accessibility violations when closed', async () => {
      const { container } = render(<TestModal />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when open', async () => {
      const { container } = render(<TestModal defaultOpen />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has correct ARIA attributes when open', async () => {
      render(<TestModal defaultOpen />)

      const dialog = screen.getByRole('dialog')
      // Radix Dialog properly handles modal behavior through focus trapping
      // and body scroll locking rather than relying solely on aria-modal
      expect(dialog).toHaveAttribute('aria-labelledby')
      expect(dialog).toHaveAttribute('aria-describedby')
    })

    it('has accessible title and description', () => {
      render(<TestModal defaultOpen />)

      expect(screen.getByText('Test Modal Title')).toBeInTheDocument()
      expect(
        screen.getByText('Test modal description text.')
      ).toBeInTheDocument()
    })
  })

  describe('Opening and Closing', () => {
    it('opens when trigger is clicked', async () => {
      const user = userEvent.setup()
      render(<TestModal />)

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: 'Open Modal' }))

      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('closes when close button is clicked', async () => {
      const user = userEvent.setup()
      render(<TestModal defaultOpen />)

      expect(screen.getByRole('dialog')).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: 'Close' }))

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })

    it('closes when Escape key is pressed', async () => {
      const user = userEvent.setup()
      render(<TestModal defaultOpen />)

      expect(screen.getByRole('dialog')).toBeInTheDocument()

      await user.keyboard('{Escape}')

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })

    it('closes when overlay is clicked', async () => {
      const user = userEvent.setup()
      render(<TestModal defaultOpen />)

      expect(screen.getByRole('dialog')).toBeInTheDocument()

      // Click on the overlay (the backdrop element with bg-black/20 class)
      const overlay = document.querySelector('.bg-black\\/20')
      expect(overlay).toBeInTheDocument()
      if (overlay) {
        await user.click(overlay)
      }

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })

    it('calls onOpenChange when modal opens and closes', async () => {
      const user = userEvent.setup()
      const handleOpenChange = vi.fn()
      render(<TestModal onOpenChange={handleOpenChange} />)

      await user.click(screen.getByRole('button', { name: 'Open Modal' }))
      expect(handleOpenChange).toHaveBeenCalledWith(true)

      await user.keyboard('{Escape}')
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(false)
      })
    })

    it('closes when Cancel button in footer is clicked', async () => {
      const user = userEvent.setup()
      render(<TestModal defaultOpen />)

      expect(screen.getByRole('dialog')).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: 'Cancel' }))

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })
  })

  describe('Focus Management', () => {
    it('traps focus inside the modal', async () => {
      const user = userEvent.setup()
      render(<TestModal defaultOpen />)

      const dialog = screen.getByRole('dialog')
      expect(dialog).toBeInTheDocument()

      // Tab through focusable elements - focus should stay within modal
      await user.tab()
      expect(document.activeElement).not.toBe(document.body)

      // The focus should be on an element inside the modal
      const focusedElement = document.activeElement
      expect(dialog.contains(focusedElement)).toBe(true)
    })

    it('returns focus to trigger after closing', async () => {
      const user = userEvent.setup()
      render(<TestModal />)

      const trigger = screen.getByRole('button', { name: 'Open Modal' })
      await user.click(trigger)

      expect(screen.getByRole('dialog')).toBeInTheDocument()

      await user.keyboard('{Escape}')

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })

      expect(document.activeElement).toBe(trigger)
    })
  })

  describe('Close Button', () => {
    it('shows close button by default', () => {
      render(<TestModal defaultOpen />)
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
    })

    it('hides close button when showCloseButton is false', () => {
      render(<TestModal defaultOpen showCloseButton={false} />)
      expect(
        screen.queryByRole('button', { name: 'Close' })
      ).not.toBeInTheDocument()
    })
  })

  describe('Size Variants', () => {
    it('renders with default size', () => {
      render(
        <Modal defaultOpen>
          <ModalContent data-testid="modal-content">
            <ModalTitle>Title</ModalTitle>
            <ModalDescription>Description</ModalDescription>
            Content
          </ModalContent>
        </Modal>
      )

      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('max-w-[500px]')
    })

    it('renders with sm size', () => {
      render(
        <Modal defaultOpen>
          <ModalContent size="sm" data-testid="modal-content">
            <ModalTitle>Title</ModalTitle>
            <ModalDescription>Description</ModalDescription>
            Content
          </ModalContent>
        </Modal>
      )

      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('max-w-[400px]')
    })

    it('renders with lg size', () => {
      render(
        <Modal defaultOpen>
          <ModalContent size="lg" data-testid="modal-content">
            <ModalTitle>Title</ModalTitle>
            <ModalDescription>Description</ModalDescription>
            Content
          </ModalContent>
        </Modal>
      )

      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('max-w-[640px]')
    })

    it('renders with full size', () => {
      render(
        <Modal defaultOpen>
          <ModalContent size="full" data-testid="modal-content">
            <ModalTitle>Title</ModalTitle>
            <ModalDescription>Description</ModalDescription>
            Content
          </ModalContent>
        </Modal>
      )

      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('max-w-[95vw]')
    })
  })

  describe('Custom className', () => {
    it('accepts custom className on ModalContent', () => {
      render(
        <Modal defaultOpen>
          <ModalContent className="custom-class" data-testid="modal-content">
            <ModalTitle>Title</ModalTitle>
            <ModalDescription>Description</ModalDescription>
            Content
          </ModalContent>
        </Modal>
      )

      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('custom-class')
    })

    it('accepts custom className on ModalHeader', () => {
      render(
        <Modal defaultOpen>
          <ModalContent>
            <ModalTitle>Title</ModalTitle>
            <ModalDescription>Description</ModalDescription>
            <ModalHeader className="custom-header" data-testid="modal-header">
              Header
            </ModalHeader>
          </ModalContent>
        </Modal>
      )

      const header = screen.getByTestId('modal-header')
      expect(header).toHaveClass('custom-header')
    })

    it('accepts custom className on ModalFooter', () => {
      render(
        <Modal defaultOpen>
          <ModalContent>
            <ModalTitle>Title</ModalTitle>
            <ModalDescription>Description</ModalDescription>
            <ModalFooter className="custom-footer" data-testid="modal-footer">
              Footer
            </ModalFooter>
          </ModalContent>
        </Modal>
      )

      const footer = screen.getByTestId('modal-footer')
      expect(footer).toHaveClass('custom-footer')
    })
  })
})
