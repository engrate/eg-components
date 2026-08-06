import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import {
  DescriptionList,
  DescriptionListDetails,
  DescriptionListItem,
  DescriptionListTerm,
} from './DescriptionList'

describe('DescriptionList', () => {
  it('renders a dl/dt/dd structure from the items prop', () => {
    render(
      <DescriptionList
        items={[
          { label: 'Name', value: 'Jane Doe' },
          { label: 'Phone number', value: '+1 (555) 123-4567' },
        ]}
      />
    )
    expect(screen.getByText('Name').tagName).toBe('DT')
    expect(screen.getByText('Jane Doe').tagName).toBe('DD')
    expect(screen.getByText('Phone number')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders via composed children', () => {
    render(
      <DescriptionList>
        <DescriptionListItem>
          <DescriptionListTerm>Email</DescriptionListTerm>
          <DescriptionListDetails>jane@example.com</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>
    )
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
  })

  it('applies stacked orientation by default', () => {
    render(
      <DescriptionList
        data-testid="list"
        items={[{ label: 'A', value: 'B' }]}
      />
    )
    expect(screen.getByTestId('list')).toHaveClass('gap-4')
  })

  it('applies inline orientation classes to items', () => {
    render(
      <DescriptionList orientation="inline">
        <DescriptionListItem data-testid="item">
          <DescriptionListTerm>Name</DescriptionListTerm>
          <DescriptionListDetails>Jane Doe</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>
    )
    expect(screen.getByTestId('item')).toHaveClass('sm:grid')
  })

  it('applies divided styles to the list and its items', () => {
    render(
      <DescriptionList divided data-testid="list">
        <DescriptionListItem data-testid="item">
          <DescriptionListTerm>Name</DescriptionListTerm>
          <DescriptionListDetails>Jane Doe</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>
    )
    expect(screen.getByTestId('list')).toHaveClass('divide-y')
    expect(screen.getByTestId('item')).toHaveClass('py-4')
  })

  it('applies compact spacing to the list and its items', () => {
    render(
      <DescriptionList size="compact" data-testid="list">
        <DescriptionListItem data-testid="item">
          <DescriptionListTerm>Name</DescriptionListTerm>
          <DescriptionListDetails>Jane Doe</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>
    )
    expect(screen.getByTestId('list')).toHaveClass('gap-2')
    expect(screen.getByTestId('item')).toHaveClass('gap-0.5')
  })

  it('applies compact padding to divided items', () => {
    render(
      <DescriptionList size="compact" divided data-testid="list">
        <DescriptionListItem data-testid="item">
          <DescriptionListTerm>Name</DescriptionListTerm>
          <DescriptionListDetails>Jane Doe</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>
    )
    expect(screen.getByTestId('item')).toHaveClass('py-2')
  })

  it('merges custom className', () => {
    render(<DescriptionList className="custom-class" data-testid="list" />)
    expect(screen.getByTestId('list')).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<DescriptionList ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDListElement)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <DescriptionList
        items={[
          { label: 'Name', value: 'Jane Doe' },
          { label: 'Phone number', value: '+1 (555) 123-4567' },
        ]}
      />
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations in inline + divided mode', async () => {
    const { container } = render(
      <DescriptionList
        orientation="inline"
        divided
        items={[
          { label: 'Name', value: 'Jane Doe' },
          { label: 'Phone number', value: '+1 (555) 123-4567' },
        ]}
      />
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
