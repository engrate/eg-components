import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'
import * as React from 'react'

import { BarChart, type BarChartDataPoint } from './BarChart'

const mockData: BarChartDataPoint[] = [
  { label: 'Jan', revenue: 4000, expenses: 2400 },
  { label: 'Feb', revenue: 3000, expenses: 1398 },
  { label: 'Mar', revenue: 2000, expenses: 9800 },
  { label: 'Apr', revenue: 2780, expenses: 3908 },
  { label: 'May', revenue: 1890, expenses: 4800 },
]

// Mock ResizeObserver for ResponsiveContainer
class ResizeObserverMock {
  observe() {
    // Mock implementation - no-op for testing
  }
  unobserve() {
    // Mock implementation - no-op for testing
  }
  disconnect() {
    // Mock implementation - no-op for testing
  }
}

global.ResizeObserver = ResizeObserverMock

describe('BarChart', () => {
  it('renders with data', () => {
    render(<BarChart data={mockData} aria-label="Revenue chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <BarChart data={mockData} aria-label="Revenue and expenses over time" />
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('applies size variants', () => {
    const { rerender, container } = render(
      <BarChart data={mockData} aria-label="Chart" />
    )
    expect(container.firstChild).toHaveClass('h-72')

    rerender(<BarChart data={mockData} size="sm" aria-label="Chart" />)
    expect(container.firstChild).toHaveClass('h-48')

    rerender(<BarChart data={mockData} size="lg" aria-label="Chart" />)
    expect(container.firstChild).toHaveClass('h-96')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <BarChart data={mockData} className="custom-class" aria-label="Chart" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<BarChart ref={ref} data={mockData} aria-label="Chart" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders with custom series configuration', () => {
    render(
      <BarChart
        data={mockData}
        series={[{ key: 'revenue', name: 'Total Revenue', color: '#FF0000' }]}
        aria-label="Revenue chart"
      />
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders without grid when showGrid is false', () => {
    render(<BarChart data={mockData} showGrid={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders without legend when showLegend is false', () => {
    render(<BarChart data={mockData} showLegend={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders without tooltip when showTooltip is false', () => {
    render(<BarChart data={mockData} showTooltip={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with axis labels', () => {
    render(
      <BarChart
        data={mockData}
        xAxisLabel="Month"
        yAxisLabel="Amount ($)"
        aria-label="Chart"
      />
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with empty data', () => {
    render(<BarChart data={[]} aria-label="Empty chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('accepts HTML div attributes', () => {
    render(
      <BarChart
        data={mockData}
        data-testid="chart-test"
        aria-label="Test chart"
      />
    )
    const chart = screen.getByTestId('chart-test')
    expect(chart).toHaveAttribute('aria-label', 'Test chart')
  })

  it('renders with stacked bars', () => {
    render(<BarChart data={mockData} stacked aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with rounded corners', () => {
    render(<BarChart data={mockData} radius={4} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with vertical layout', () => {
    render(<BarChart data={mockData} layout="vertical" aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
