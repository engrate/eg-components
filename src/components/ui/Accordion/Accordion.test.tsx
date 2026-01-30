import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

const TestSingleAccordion = ({
  collapsible = true,
  defaultValue,
}: {
  collapsible?: boolean
  defaultValue?: string
}) => (
  <Accordion
    type="single"
    collapsible={collapsible}
    defaultValue={defaultValue}
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Section 1</AccordionTrigger>
      <AccordionContent>Content for section 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Section 2</AccordionTrigger>
      <AccordionContent>Content for section 2</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Section 3</AccordionTrigger>
      <AccordionContent>Content for section 3</AccordionContent>
    </AccordionItem>
  </Accordion>
)

const TestMultipleAccordion = ({
  defaultValue,
}: {
  defaultValue?: string[]
}) => (
  <Accordion type="multiple" defaultValue={defaultValue}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Section 1</AccordionTrigger>
      <AccordionContent>Content for section 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Section 2</AccordionTrigger>
      <AccordionContent>Content for section 2</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Section 3</AccordionTrigger>
      <AccordionContent>Content for section 3</AccordionContent>
    </AccordionItem>
  </Accordion>
)

describe('Accordion', () => {
  describe('Accessibility', () => {
    it('has no accessibility violations when closed', async () => {
      const { container } = render(<TestSingleAccordion />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when open', async () => {
      const { container } = render(
        <TestSingleAccordion defaultValue="item-1" />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has correct ARIA attributes', () => {
      render(<TestSingleAccordion defaultValue="item-1" />)

      const triggers = screen.getAllByRole('button')
      expect(triggers[0]).toHaveAttribute('aria-expanded', 'true')
      expect(triggers[1]).toHaveAttribute('aria-expanded', 'false')
      expect(triggers[2]).toHaveAttribute('aria-expanded', 'false')
    })

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup()
      render(<TestSingleAccordion />)

      const triggers = screen.getAllByRole('button')

      // Focus first trigger
      await user.tab()
      expect(triggers[0]).toHaveFocus()

      // Navigate with arrow keys
      await user.keyboard('{ArrowDown}')
      expect(triggers[1]).toHaveFocus()

      await user.keyboard('{ArrowDown}')
      expect(triggers[2]).toHaveFocus()

      await user.keyboard('{ArrowUp}')
      expect(triggers[1]).toHaveFocus()

      // Home and End keys
      await user.keyboard('{End}')
      expect(triggers[2]).toHaveFocus()

      await user.keyboard('{Home}')
      expect(triggers[0]).toHaveFocus()
    })
  })

  describe('Single Type', () => {
    it('renders all accordion items', () => {
      render(<TestSingleAccordion />)

      expect(screen.getByText('Section 1')).toBeInTheDocument()
      expect(screen.getByText('Section 2')).toBeInTheDocument()
      expect(screen.getByText('Section 3')).toBeInTheDocument()
    })

    it('opens item when trigger is clicked', async () => {
      const user = userEvent.setup()
      render(<TestSingleAccordion />)

      // Content should not be in the document initially (Radix removes hidden content)
      expect(
        screen.queryByText('Content for section 1')
      ).not.toBeInTheDocument()

      // Click the trigger
      await user.click(screen.getByText('Section 1'))

      // Content should now be visible
      await waitFor(() => {
        expect(screen.getByText('Content for section 1')).toBeVisible()
      })
    })

    it('closes open item when another is clicked (single mode)', async () => {
      const user = userEvent.setup()
      render(<TestSingleAccordion defaultValue="item-1" />)

      // First item should be open
      expect(screen.getByText('Content for section 1')).toBeVisible()

      // Click second trigger
      await user.click(screen.getByText('Section 2'))

      // First item should close (removed from DOM), second should open
      await waitFor(() => {
        expect(
          screen.queryByText('Content for section 1')
        ).not.toBeInTheDocument()
        expect(screen.getByText('Content for section 2')).toBeVisible()
      })
    })

    it('allows collapsing when collapsible is true', async () => {
      const user = userEvent.setup()
      render(<TestSingleAccordion collapsible defaultValue="item-1" />)

      // First item should be open
      expect(screen.getByText('Content for section 1')).toBeVisible()

      // Click the same trigger to collapse
      await user.click(screen.getByText('Section 1'))

      // Content should be removed from DOM
      await waitFor(() => {
        expect(
          screen.queryByText('Content for section 1')
        ).not.toBeInTheDocument()
      })
    })

    it('opens with Enter key', async () => {
      const user = userEvent.setup()
      render(<TestSingleAccordion />)

      // Focus first trigger
      await user.tab()

      // Press Enter
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Content for section 1')).toBeVisible()
      })
    })

    it('opens with Space key', async () => {
      const user = userEvent.setup()
      render(<TestSingleAccordion />)

      // Focus first trigger
      await user.tab()

      // Press Space
      await user.keyboard(' ')

      await waitFor(() => {
        expect(screen.getByText('Content for section 1')).toBeVisible()
      })
    })
  })

  describe('Multiple Type', () => {
    it('allows multiple items to be open simultaneously', async () => {
      const user = userEvent.setup()
      render(<TestMultipleAccordion />)

      // Click first trigger
      await user.click(screen.getByText('Section 1'))

      await waitFor(() => {
        expect(screen.getByText('Content for section 1')).toBeVisible()
      })

      // Click second trigger
      await user.click(screen.getByText('Section 2'))

      // Both should be open
      await waitFor(() => {
        expect(screen.getByText('Content for section 1')).toBeVisible()
        expect(screen.getByText('Content for section 2')).toBeVisible()
      })
    })

    it('supports defaultValue with multiple items', () => {
      render(<TestMultipleAccordion defaultValue={['item-1', 'item-3']} />)

      expect(screen.getByText('Content for section 1')).toBeVisible()
      expect(
        screen.queryByText('Content for section 2')
      ).not.toBeInTheDocument()
      expect(screen.getByText('Content for section 3')).toBeVisible()
    })
  })

  describe('Variants', () => {
    it('applies bordered variant', () => {
      const { container } = render(
        <Accordion type="single" collapsible variant="bordered">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      const accordion = container.firstChild
      expect(accordion).toHaveClass('border')
      expect(accordion).toHaveClass('rounded-lg')
    })

    it('applies size variants to trigger', () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="sm">
            <AccordionTrigger size="sm">Small</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="default">
            <AccordionTrigger size="default">Default</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="lg">
            <AccordionTrigger size="lg">Large</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      const smallTrigger = screen.getByText('Small')
      const defaultTrigger = screen.getByText('Default')
      const largeTrigger = screen.getByText('Large')

      expect(smallTrigger).toHaveClass('text-small')
      expect(defaultTrigger).toHaveClass('text-body')
      expect(largeTrigger).toHaveClass('text-lead')
    })
  })

  describe('Custom className', () => {
    it('applies custom className to Accordion', () => {
      const { container } = render(
        <Accordion type="single" collapsible className="custom-accordion">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(container.firstChild).toHaveClass('custom-accordion')
    })

    it('applies custom className to AccordionItem', () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="custom-item"
            data-testid="test-item"
          >
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      const item = screen.getByTestId('test-item')
      expect(item).toHaveClass('custom-item')
    })

    it('applies custom className to AccordionTrigger', () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="custom-trigger">
              Section
            </AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(screen.getByText('Section')).toHaveClass('custom-trigger')
    })

    it('applies custom className to AccordionContent', () => {
      render(
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent className="custom-content">
              Content
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(screen.getByText('Content')).toHaveClass('custom-content')
    })
  })

  describe('Ref Forwarding', () => {
    it('forwards ref to Accordion', () => {
      const ref = vi.fn()
      render(
        <Accordion type="single" collapsible ref={ref}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(ref).toHaveBeenCalled()
    })

    it('forwards ref to AccordionItem', () => {
      const ref = vi.fn()
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" ref={ref}>
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(ref).toHaveBeenCalled()
    })

    it('forwards ref to AccordionTrigger', () => {
      const ref = vi.fn()
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger ref={ref}>Section</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(ref).toHaveBeenCalled()
    })

    it('forwards ref to AccordionContent', () => {
      const ref = vi.fn()
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent ref={ref}>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(ref).toHaveBeenCalled()
    })
  })
})
