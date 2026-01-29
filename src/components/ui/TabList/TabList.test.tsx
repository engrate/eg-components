import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'

import { TabContent, TabList, Tabs, TabTrigger } from './TabList'

describe('Tabs', () => {
  it('renders tabs with content', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1')
  })

  it('shows correct content when defaultValue is set', () => {
    render(
      <Tabs defaultValue="tab2">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2')
  })

  it('switches content when clicking tabs', async () => {
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1')

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }))

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2')
  })

  it('calls onValueChange when tab changes', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="tab1" onValueChange={handleChange}>
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    )

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }))

    expect(handleChange).toHaveBeenCalledWith('tab2')
  })

  it('supports controlled mode', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    const { rerender } = render(
      <Tabs value="tab1" onValueChange={handleChange}>
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1')

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }))

    // Content doesn't change because we control it
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1')
    expect(handleChange).toHaveBeenCalledWith('tab2')

    // Update controlled value
    rerender(
      <Tabs value="tab2" onValueChange={handleChange}>
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2')
  })

  it('sets correct aria-selected on tabs', async () => {
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    )

    const tab1 = screen.getByRole('tab', { name: 'Tab 1' })
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' })

    expect(tab1).toHaveAttribute('aria-selected', 'true')
    expect(tab2).toHaveAttribute('aria-selected', 'false')

    await user.click(tab2)

    expect(tab1).toHaveAttribute('aria-selected', 'false')
    expect(tab2).toHaveAttribute('aria-selected', 'true')
  })

  it('applies variant classes to TabList', () => {
    const { rerender } = render(
      <Tabs defaultValue="tab1">
        <TabList data-testid="tablist">
          <TabTrigger value="tab1">Tab 1</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
      </Tabs>
    )

    expect(screen.getByTestId('tablist')).toHaveClass('border-b')

    rerender(
      <Tabs defaultValue="tab1">
        <TabList variant="pills" data-testid="tablist">
          <TabTrigger value="tab1">Tab 1</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
      </Tabs>
    )

    expect(screen.getByTestId('tablist')).toHaveClass('bg-alt')
  })

  it('applies variant classes to TabTrigger', () => {
    const { rerender } = render(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tab')).toHaveClass('border-b-2')

    rerender(
      <Tabs defaultValue="tab1">
        <TabList variant="pills">
          <TabTrigger value="tab1" variant="pills">
            Tab 1
          </TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tab')).toHaveClass('rounded-pill')
  })

  it('applies size classes to TabTrigger', () => {
    const { rerender } = render(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1" size="sm">
            Tab 1
          </TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tab')).toHaveClass('text-small')

    rerender(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1" size="lg">
            Tab 1
          </TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tab')).toHaveClass('font-medium')
  })

  it('can disable a tab trigger', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2" disabled>
            Tab 2
          </TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    )

    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeDisabled()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Tabs defaultValue="tab1">
        <TabList aria-label="Example tabs">
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
