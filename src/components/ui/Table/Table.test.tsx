import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  useFilterableTable,
  useSortableTable,
} from './Table'

describe('Table', () => {
  it('renders table with all components', () => {
    render(
      <Table>
        <TableCaption>Test caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>1 user</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Test caption')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('applies variant classes correctly', () => {
    const { container } = render(
      <Table variant="striped">
        <TableBody>
          <TableRow variant="striped">
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    const table = container.querySelector('table')
    expect(table).toHaveClass('border-separate')
  })

  it('applies bordered classes when bordered prop is set', () => {
    const { container } = render(
      <Table bordered>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>john@example.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane</TableCell>
            <TableCell>jane@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    // Horizontal borders on header cells
    const ths = container.querySelectorAll('th')
    ths.forEach((th) => {
      expect(th).toHaveClass('border-b', 'border-border')
      expect(th).not.toHaveClass('border-r')
    })

    // Horizontal borders on body cells
    const tds = container.querySelectorAll('td')
    tds.forEach((td) => {
      expect(td).toHaveClass('border-b', 'border-border')
      expect(td).not.toHaveClass('border-r')
    })

    // Last row exclusion applied via tbody
    const tbody = container.querySelector('tbody')
    expect(tbody).toHaveClass('[&>tr:last-child>td]:border-b-0')
  })

  it('does not apply extra bordered classes by default', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    const th = container.querySelector('th')
    expect(th).not.toHaveClass('border-r')

    const td = container.querySelector('td')
    expect(td).not.toHaveClass('border-r')
  })

  it('has no accessibility violations when bordered', async () => {
    const { container } = render(
      <Table bordered>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('applies compact size correctly', () => {
    const { container } = render(
      <Table size="compact">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    const th = container.querySelector('th')
    const td = container.querySelector('td')

    expect(th).toHaveClass('h-8', 'px-2')
    expect(td).toHaveClass('p-2')
  })

  it('applies default size when size prop is not provided', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    const th = container.querySelector('th')
    const td = container.querySelector('td')

    expect(th).toHaveClass('h-12', 'px-4')
    expect(td).toHaveClass('p-4')
  })

  describe('TableHead with sorting', () => {
    it('renders sortable column with sort indicators', () => {
      const onSort = vi.fn()

      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead sortable onSort={onSort}>
                Name
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )

      const header = screen.getByRole('button', { name: /name/i })
      expect(header).toBeInTheDocument()
      expect(header).toHaveAttribute('tabIndex', '0')
    })

    it('calls onSort when sortable header is clicked', async () => {
      const user = userEvent.setup()
      const onSort = vi.fn()

      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead sortable onSort={onSort}>
                Name
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )

      const header = screen.getByRole('button', { name: /name/i })
      await user.click(header)

      expect(onSort).toHaveBeenCalledTimes(1)
    })

    it('calls onSort when Enter key is pressed', async () => {
      const user = userEvent.setup()
      const onSort = vi.fn()

      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead sortable onSort={onSort}>
                Name
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )

      const header = screen.getByRole('button', { name: /name/i })
      header.focus()
      await user.keyboard('{Enter}')

      expect(onSort).toHaveBeenCalledTimes(1)
    })

    it('calls onSort when Space key is pressed', async () => {
      const user = userEvent.setup()
      const onSort = vi.fn()

      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead sortable onSort={onSort}>
                Name
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )

      const header = screen.getByRole('button', { name: /name/i })
      header.focus()
      await user.keyboard(' ')

      expect(onSort).toHaveBeenCalledTimes(1)
    })

    it('displays correct aria-sort attribute', () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead sortable sortDirection="asc">
                Name
              </TableHead>
              <TableHead sortable sortDirection="desc">
                Age
              </TableHead>
              <TableHead sortable sortDirection={null}>
                Email
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )

      const nameHeader = screen.getByRole('button', { name: /name/i })
      const ageHeader = screen.getByRole('button', { name: /age/i })
      const emailHeader = screen.getByRole('button', { name: /email/i })

      expect(nameHeader).toHaveAttribute('aria-sort', 'ascending')
      expect(ageHeader).toHaveAttribute('aria-sort', 'descending')
      expect(emailHeader).not.toHaveAttribute('aria-sort')
    })

    it('non-sortable header does not have button role', () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )

      const header = screen.getByText('Name')
      expect(header).not.toHaveAttribute('role', 'button')
      expect(header).not.toHaveAttribute('tabIndex')
    })
  })
})

describe('useSortableTable', () => {
  interface TestData {
    id: number
    name: string
    age: number
  }

  const mockData: TestData[] = [
    { id: 1, name: 'Charlie', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ]

  function TestComponent({ data }: { data: TestData[] }) {
    const { sortedData, sortKey, sortDirection, handleSort } = useSortableTable(
      { data }
    )

    return (
      <div>
        <button onClick={() => handleSort('name')}>Sort by Name</button>
        <button onClick={() => handleSort('age')}>Sort by Age</button>
        <div data-testid="sort-info">
          {sortKey ?? 'none'}-{sortDirection ?? 'none'}
        </div>
        <ul>
          {sortedData.map((item) => (
            <li key={item.id}>
              {item.name} - {item.age}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  it('initially returns unsorted data', () => {
    render(<TestComponent data={mockData} />)

    const items = screen.getAllByRole('listitem')
    expect(items[0]).toHaveTextContent('Charlie - 30')
    expect(items[1]).toHaveTextContent('Alice - 25')
    expect(items[2]).toHaveTextContent('Bob - 35')
  })

  it('sorts data in ascending order when column is clicked', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    await user.click(screen.getByText('Sort by Name'))

    const items = screen.getAllByRole('listitem')
    expect(items[0]).toHaveTextContent('Alice - 25')
    expect(items[1]).toHaveTextContent('Bob - 35')
    expect(items[2]).toHaveTextContent('Charlie - 30')

    expect(screen.getByTestId('sort-info')).toHaveTextContent('name-asc')
  })

  it('sorts data in descending order on second click', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    await user.click(screen.getByText('Sort by Name'))
    await user.click(screen.getByText('Sort by Name'))

    const items = screen.getAllByRole('listitem')
    expect(items[0]).toHaveTextContent('Charlie - 30')
    expect(items[1]).toHaveTextContent('Bob - 35')
    expect(items[2]).toHaveTextContent('Alice - 25')

    expect(screen.getByTestId('sort-info')).toHaveTextContent('name-desc')
  })

  it('clears sort on third click', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    await user.click(screen.getByText('Sort by Name'))
    await user.click(screen.getByText('Sort by Name'))
    await user.click(screen.getByText('Sort by Name'))

    const items = screen.getAllByRole('listitem')
    expect(items[0]).toHaveTextContent('Charlie - 30')
    expect(items[1]).toHaveTextContent('Alice - 25')
    expect(items[2]).toHaveTextContent('Bob - 35')

    expect(screen.getByTestId('sort-info')).toHaveTextContent('none-none')
  })

  it('sorts numeric values correctly', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    await user.click(screen.getByText('Sort by Age'))

    const items = screen.getAllByRole('listitem')
    expect(items[0]).toHaveTextContent('Alice - 25')
    expect(items[1]).toHaveTextContent('Charlie - 30')
    expect(items[2]).toHaveTextContent('Bob - 35')
  })

  it('resets sort direction when switching columns', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    await user.click(screen.getByText('Sort by Name'))
    await user.click(screen.getByText('Sort by Name')) // desc
    await user.click(screen.getByText('Sort by Age')) // should be asc

    expect(screen.getByTestId('sort-info')).toHaveTextContent('age-asc')
  })
})

describe('useFilterableTable', () => {
  interface TestData {
    id: number
    name: string
    email: string
    age: number
  }

  const mockData: TestData[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
    { id: 3, name: 'Charlie', email: 'charlie@test.com', age: 35 },
  ]

  function TestComponent({
    data,
    filterKeys,
  }: {
    data: TestData[]
    filterKeys?: (keyof TestData)[]
  }) {
    const { filteredData, filterValue, setFilterValue } = useFilterableTable({
      data,
      filterKeys,
    })

    return (
      <div>
        <input
          type="text"
          placeholder="Filter..."
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    )
  }

  it('initially returns all data', () => {
    render(<TestComponent data={mockData} />)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)
  })

  it('filters data based on search term', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    const input = screen.getByPlaceholderText('Filter...')
    await user.type(input, 'alice')

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(1)
    expect(items[0]).toHaveTextContent('Alice')
  })

  it('filters across all fields when no filterKeys specified', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    const input = screen.getByPlaceholderText('Filter...')
    await user.type(input, 'example.com')

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveTextContent('Alice')
    expect(items[1]).toHaveTextContent('Bob')
  })

  it('filters only specified fields when filterKeys provided', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} filterKeys={['name']} />)

    const input = screen.getByPlaceholderText('Filter...')
    await user.type(input, 'example.com')

    // Should not find anything since we're only filtering by name
    const list = screen.getByRole('list')
    expect(list).toBeEmptyDOMElement()
  })

  it('is case insensitive', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    const input = screen.getByPlaceholderText('Filter...')
    await user.type(input, 'ALICE')

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(1)
    expect(items[0]).toHaveTextContent('Alice')
  })

  it('returns all data when filter is cleared', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    const input = screen.getByPlaceholderText('Filter...')
    await user.type(input, 'alice')

    expect(screen.getAllByRole('listitem')).toHaveLength(1)

    await user.clear(input)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('filters numeric values as strings', async () => {
    const user = userEvent.setup()
    render(<TestComponent data={mockData} />)

    const input = screen.getByPlaceholderText('Filter...')
    await user.type(input, '35')

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(1)
    expect(items[0]).toHaveTextContent('Charlie')
  })
})
