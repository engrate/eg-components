import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { LineChart, type DataPoint } from './LineChart'

const mockData: DataPoint[] = [
  { label: 'Jan', revenue: 4000, expenses: 2400 },
  { label: 'Feb', revenue: 3000, expenses: 1398 },
  { label: 'Mar', revenue: 2000, expenses: 9800 },
  { label: 'Apr', revenue: 2780, expenses: 3908 },
  { label: 'May', revenue: 1890, expenses: 4800 },
]

describe('LineChart', () => {
  it('renders with data', () => {
    render(<LineChart data={mockData} aria-label="Revenue chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <LineChart data={mockData} aria-label="Revenue and expenses over time" />
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('applies size variants', () => {
    const { rerender, container } = render(
      <LineChart data={mockData} aria-label="Chart" />
    )
    expect(container.firstChild).toHaveClass('h-72')

    rerender(<LineChart data={mockData} size="sm" aria-label="Chart" />)
    expect(container.firstChild).toHaveClass('h-48')

    rerender(<LineChart data={mockData} size="lg" aria-label="Chart" />)
    expect(container.firstChild).toHaveClass('h-96')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <LineChart data={mockData} className="custom-class" aria-label="Chart" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<LineChart ref={ref} data={mockData} aria-label="Chart" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders with custom series configuration', () => {
    render(
      <LineChart
        data={mockData}
        series={[{ key: 'revenue', name: 'Total Revenue', color: '#FF0000' }]}
        aria-label="Revenue chart"
      />
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders without grid when showGrid is false', () => {
    render(<LineChart data={mockData} showGrid={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders without legend when showLegend is false', () => {
    render(<LineChart data={mockData} showLegend={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders without tooltip when showTooltip is false', () => {
    render(<LineChart data={mockData} showTooltip={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with axis labels', () => {
    render(
      <LineChart
        data={mockData}
        xAxisLabel="Month"
        yAxisLabel="Amount ($)"
        aria-label="Chart"
      />
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with empty data', () => {
    render(<LineChart data={[]} aria-label="Empty chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('accepts HTML div attributes', () => {
    render(
      <LineChart
        data={mockData}
        data-testid="chart-test"
        aria-label="Test chart"
      />
    )
    const chart = screen.getByTestId('chart-test')
    expect(chart).toHaveAttribute('aria-label', 'Test chart')
  })

  it('renders with linear curve type when curved is false', () => {
    render(<LineChart data={mockData} curved={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders without dots when showDots is false', () => {
    render(<LineChart data={mockData} showDots={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
