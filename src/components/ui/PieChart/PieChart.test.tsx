import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import { PieChart, type PieChartDataPoint } from './PieChart'

const mockData: PieChartDataPoint[] = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Other', value: 100 },
]

describe('PieChart', () => {
  it('renders with data', () => {
    render(<PieChart data={mockData} aria-label="Traffic by device" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <PieChart data={mockData} aria-label="Traffic by device type" />
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('applies size variants', () => {
    const { rerender, container } = render(
      <PieChart data={mockData} aria-label="Chart" />
    )
    expect(container.firstChild).toHaveClass('h-72')

    rerender(<PieChart data={mockData} size="sm" aria-label="Chart" />)
    expect(container.firstChild).toHaveClass('h-48')

    rerender(<PieChart data={mockData} size="lg" aria-label="Chart" />)
    expect(container.firstChild).toHaveClass('h-96')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <PieChart data={mockData} className="custom-class" aria-label="Chart" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<PieChart ref={ref} data={mockData} aria-label="Chart" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders as donut chart with innerRadius', () => {
    render(
      <PieChart data={mockData} innerRadius={60} aria-label="Donut chart" />
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders without legend when showLegend is false', () => {
    render(<PieChart data={mockData} showLegend={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders without tooltip when showTooltip is false', () => {
    render(<PieChart data={mockData} showTooltip={false} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with padding angle', () => {
    render(<PieChart data={mockData} paddingAngle={5} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with labels', () => {
    render(<PieChart data={mockData} showLabels aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with empty data', () => {
    render(<PieChart data={[]} aria-label="Empty chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('accepts HTML div attributes', () => {
    render(
      <PieChart
        data={mockData}
        data-testid="chart-test"
        aria-label="Test chart"
      />
    )
    const chart = screen.getByTestId('chart-test')
    expect(chart).toHaveAttribute('aria-label', 'Test chart')
  })

  it('renders with custom colors', () => {
    const dataWithColors: PieChartDataPoint[] = [
      { name: 'A', value: 100, color: '#FF0000' },
      { name: 'B', value: 200, color: '#00FF00' },
    ]
    render(<PieChart data={dataWithColors} aria-label="Chart" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders with custom start and end angles', () => {
    render(
      <PieChart
        data={mockData}
        startAngle={0}
        endAngle={180}
        aria-label="Half pie chart"
      />
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
