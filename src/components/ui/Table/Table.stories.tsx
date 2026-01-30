import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Input } from '../Input'

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

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ['autodocs'],
  title: 'Table/Table',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>alice@engrate.com</TableCell>
          <TableCell>Engineer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Smith</TableCell>
          <TableCell>bob@engrate.com</TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Charlie Brown</TableCell>
          <TableCell>charlie@engrate.com</TableCell>
          <TableCell>Product Manager</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of recent team members</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>Engineering</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Smith</TableCell>
          <TableCell>Design</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Charlie Brown</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>On Leave</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Solar Panel Kit</TableCell>
          <TableCell className="text-right">10</TableCell>
          <TableCell className="text-right">$5,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Battery Storage</TableCell>
          <TableCell className="text-right">5</TableCell>
          <TableCell className="text-right">$2,500</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Installation Service</TableCell>
          <TableCell className="text-right">1</TableCell>
          <TableCell className="text-right">$1,500</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$9,000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const Striped: Story = {
  render: () => (
    <Table variant="striped">
      <TableHeader>
        <TableRow>
          <TableHead>Station ID</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Capacity (kW)</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow variant="striped">
          <TableCell>STN-001</TableCell>
          <TableCell>Stockholm Central</TableCell>
          <TableCell>150</TableCell>
          <TableCell>Online</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>STN-002</TableCell>
          <TableCell>Gothenburg Port</TableCell>
          <TableCell>200</TableCell>
          <TableCell>Online</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>STN-003</TableCell>
          <TableCell>Malmö Industrial</TableCell>
          <TableCell>175</TableCell>
          <TableCell>Maintenance</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>STN-004</TableCell>
          <TableCell>Uppsala University</TableCell>
          <TableCell>120</TableCell>
          <TableCell>Online</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const Compact: Story = {
  render: () => (
    <Table size="compact">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>001</TableCell>
          <TableCell>Solar Array A</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>145 kW</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>002</TableCell>
          <TableCell>Wind Turbine B</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>230 kW</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>003</TableCell>
          <TableCell>Battery Pack C</TableCell>
          <TableCell>Charging</TableCell>
          <TableCell>80 kWh</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>004</TableCell>
          <TableCell>Grid Connection D</TableCell>
          <TableCell>Standby</TableCell>
          <TableCell>500 kW</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>005</TableCell>
          <TableCell>Inverter E</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>200 kW</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const CompactStriped: Story = {
  render: () => (
    <Table size="compact" variant="striped">
      <TableCaption>Compact striped table for dense data display</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Sensor</TableHead>
          <TableHead>Reading</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow variant="striped">
          <TableCell>Temperature</TableCell>
          <TableCell>22.5</TableCell>
          <TableCell>°C</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Voltage</TableCell>
          <TableCell>240.2</TableCell>
          <TableCell>V</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Current</TableCell>
          <TableCell>15.8</TableCell>
          <TableCell>A</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Frequency</TableCell>
          <TableCell>50.1</TableCell>
          <TableCell>Hz</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Power Factor</TableCell>
          <TableCell>0.98</TableCell>
          <TableCell>-</TableCell>
          <TableCell>Good</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

interface Person {
  id: number
  name: string
  email: string
  age: number
  department: string
}

const peopleData: Person[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@engrate.com',
    age: 28,
    department: 'Engineering',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@engrate.com',
    age: 34,
    department: 'Design',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie@engrate.com',
    age: 42,
    department: 'Product',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana@engrate.com',
    age: 31,
    department: 'Engineering',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan@engrate.com',
    age: 29,
    department: 'Sales',
  },
]

export const WithSorting: Story = {
  render: () => {
    function SortableTableExample() {
      const { sortedData, sortKey, sortDirection, handleSort } =
        useSortableTable({
          data: peopleData,
          initialSortKey: 'name',
          initialSortDirection: 'asc',
        })

      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                sortable
                sortDirection={sortKey === 'name' ? sortDirection : null}
                onSort={() => handleSort('name')}
              >
                Name
              </TableHead>
              <TableHead
                sortable
                sortDirection={sortKey === 'email' ? sortDirection : null}
                onSort={() => handleSort('email')}
              >
                Email
              </TableHead>
              <TableHead
                sortable
                sortDirection={sortKey === 'age' ? sortDirection : null}
                onSort={() => handleSort('age')}
              >
                Age
              </TableHead>
              <TableHead
                sortable
                sortDirection={sortKey === 'department' ? sortDirection : null}
                onSort={() => handleSort('department')}
              >
                Department
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((person) => (
              <TableRow key={person.id}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }

    return <SortableTableExample />
  },
}

export const WithFiltering: Story = {
  render: () => {
    function FilterableTableExample() {
      const { filteredData, filterValue, setFilterValue } = useFilterableTable({
        data: peopleData,
        filterKeys: ['name', 'email', 'department'],
      })

      return (
        <div className="space-y-4">
          <Input
            placeholder="Search by name, email, or department..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Department</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((person) => (
                  <TableRow key={person.id}>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.email}</TableCell>
                    <TableCell>{person.age}</TableCell>
                    <TableCell>{person.department}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )
    }

    return <FilterableTableExample />
  },
}

export const WithSortingAndFiltering: Story = {
  render: () => {
    function FullFeaturedTable() {
      const [searchTerm, setSearchTerm] = useState('')

      // Update the filtered data based on search term
      const dataToSort = searchTerm
        ? peopleData.filter(
            (person) =>
              person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
              person.department.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : peopleData

      // Then sort the filtered data
      const { sortedData, sortKey, sortDirection, handleSort } =
        useSortableTable({
          data: dataToSort,
        })

      return (
        <div className="space-y-4">
          <Input
            placeholder="Search by name, email, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Table>
            <TableCaption>
              Team directory with {sortedData.length} member
              {sortedData.length !== 1 ? 's' : ''}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead
                  sortable
                  sortDirection={sortKey === 'name' ? sortDirection : null}
                  onSort={() => handleSort('name')}
                >
                  Name
                </TableHead>
                <TableHead
                  sortable
                  sortDirection={sortKey === 'email' ? sortDirection : null}
                  onSort={() => handleSort('email')}
                >
                  Email
                </TableHead>
                <TableHead
                  sortable
                  sortDirection={sortKey === 'age' ? sortDirection : null}
                  onSort={() => handleSort('age')}
                >
                  Age
                </TableHead>
                <TableHead
                  sortable
                  sortDirection={
                    sortKey === 'department' ? sortDirection : null
                  }
                  onSort={() => handleSort('department')}
                >
                  Department
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.length > 0 ? (
                sortedData.map((person) => (
                  <TableRow key={person.id}>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.email}</TableCell>
                    <TableCell>{person.age}</TableCell>
                    <TableCell>{person.department}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No results found for &quot;{searchTerm}&quot;
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )
    }

    return <FullFeaturedTable />
  },
}

export const Empty: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="h-24 text-center">
            No data available
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
