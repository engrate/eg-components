import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders pagination with correct page numbers', () => {
    render(<Pagination page={1} totalPages={5} />)

    expect(
      screen.getByRole('navigation', { name: 'Pagination' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Go to page 1' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Go to page 5' })
    ).toBeInTheDocument()
  })

  it('highlights the current page', () => {
    render(<Pagination page={3} totalPages={5} />)

    const currentPageButton = screen.getByRole('button', {
      name: 'Go to page 3',
    })
    expect(currentPageButton).toHaveAttribute('aria-current', 'page')
    expect(currentPageButton).toHaveClass('bg-sunflower')
  })

  it('calls onPageChange when a page button is clicked', async () => {
    const handlePageChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Pagination page={1} totalPages={5} onPageChange={handlePageChange} />
    )

    await user.click(screen.getByRole('button', { name: 'Go to page 3' }))
    expect(handlePageChange).toHaveBeenCalledWith(3)
  })

  it('calls onPageChange when previous button is clicked', async () => {
    const handlePageChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Pagination page={3} totalPages={5} onPageChange={handlePageChange} />
    )

    await user.click(
      screen.getByRole('button', { name: 'Go to previous page' })
    )
    expect(handlePageChange).toHaveBeenCalledWith(2)
  })

  it('calls onPageChange when next button is clicked', async () => {
    const handlePageChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Pagination page={3} totalPages={5} onPageChange={handlePageChange} />
    )

    await user.click(screen.getByRole('button', { name: 'Go to next page' }))
    expect(handlePageChange).toHaveBeenCalledWith(4)
  })

  it('disables previous button on first page', () => {
    render(<Pagination page={1} totalPages={5} />)

    expect(
      screen.getByRole('button', { name: 'Go to previous page' })
    ).toBeDisabled()
  })

  it('disables next button on last page', () => {
    render(<Pagination page={5} totalPages={5} />)

    expect(
      screen.getByRole('button', { name: 'Go to next page' })
    ).toBeDisabled()
  })

  it('does not call onPageChange when clicking current page', async () => {
    const handlePageChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Pagination page={3} totalPages={5} onPageChange={handlePageChange} />
    )

    await user.click(screen.getByRole('button', { name: 'Go to page 3' }))
    expect(handlePageChange).not.toHaveBeenCalled()
  })

  it('shows ellipsis for large page counts', () => {
    render(<Pagination page={5} totalPages={10} />)

    // With ellipsis, we should have fewer page number buttons than total pages
    // The presence of ellipsis means not all page numbers are shown
    const allButtons = screen.getAllByRole('button')

    // Should have prev, next, and some page buttons but not all 10 pages
    // With 10 pages and ellipsis, we expect: prev + ~7 items + next = ~9 buttons (not 12)
    expect(allButtons.length).toBeLessThan(10 + 2) // Less than all pages + prev/next
  })

  it('applies size variant classes', () => {
    const { rerender } = render(
      <Pagination page={1} totalPages={5} size="sm" />
    )
    expect(screen.getByRole('navigation')).toHaveClass('text-small')

    rerender(<Pagination page={1} totalPages={5} size="lg" />)
    expect(screen.getByRole('navigation')).toHaveClass('text-lead')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Pagination page={3} totalPages={5} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations with ellipsis', async () => {
    const { container } = render(<Pagination page={5} totalPages={10} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
