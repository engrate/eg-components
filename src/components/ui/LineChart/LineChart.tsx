'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { cn } from '@/lib/utils'

const lineChartVariants = cva('text-small font-sans tracking-[-0.05em]', {
  variants: {
    size: {
      sm: 'h-48',
      default: 'h-72',
      lg: 'h-96',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

/** A single data point for the chart */
interface DataPoint {
  /** Label for the x-axis (e.g., date, category) */
  label: string
  /** Numeric values for each series */
  [key: string]: string | number
}

/** Configuration for a data series */
interface SeriesConfig {
  /** Key in the data object for this series */
  key: string
  /** Display name for the legend */
  name: string
  /** Line color (defaults to sunflower for first series) */
  color?: string
}

/** Default brand colors for chart series (CSS variable names) */
const DEFAULT_SERIES_COLORS = [
  'var(--color-sunflower)',
  'var(--color-electric-blue)',
  'var(--color-cool-purple)',
  'var(--color-deep-blue)',
  'var(--color-warm-purple)',
]

interface LineChartProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof lineChartVariants> {
  /** Data points to render */
  data: DataPoint[]
  /** Configuration for data series. If not provided, all numeric keys except 'label' will be rendered */
  series?: SeriesConfig[]
  /** Show grid lines */
  showGrid?: boolean
  /** Show legend */
  showLegend?: boolean
  /** Show tooltips on hover */
  showTooltip?: boolean
  /** X-axis label */
  xAxisLabel?: string
  /** Y-axis label */
  yAxisLabel?: string
  /** Custom stroke width for lines */
  strokeWidth?: number
  /** Enable curve interpolation */
  curved?: boolean
  /** Show dots on data points */
  showDots?: boolean
}

/**
 * LineChart component for displaying data trends over time.
 * Built with Recharts and styled according to Engrate design system.
 *
 * @example
 * ```tsx
 * <LineChart
 *   data={[
 *     { label: 'Jan', revenue: 4000, expenses: 2400 },
 *     { label: 'Feb', revenue: 3000, expenses: 1398 },
 *     { label: 'Mar', revenue: 2000, expenses: 9800 },
 *   ]}
 *   series={[
 *     { key: 'revenue', name: 'Revenue' },
 *     { key: 'expenses', name: 'Expenses', color: '#0080FF' },
 *   ]}
 *   aria-label="Revenue vs expenses over time"
 * />
 * ```
 */
const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      className,
      size,
      data,
      series,
      showGrid = true,
      showLegend = true,
      showTooltip = true,
      xAxisLabel,
      yAxisLabel,
      strokeWidth = 2,
      curved = true,
      showDots = true,
      ...props
    },
    ref
  ) => {
    // Auto-detect series from data if not provided
    const resolvedSeries = React.useMemo(() => {
      if (series) return series

      const firstItem = data[0]
      if (!firstItem) return []

      const keys = Object.keys(firstItem).filter(
        (key) => key !== 'label' && typeof firstItem[key] === 'number'
      )

      return keys.map((key, index) => ({
        key,
        name: key.charAt(0).toUpperCase() + key.slice(1),
        color: DEFAULT_SERIES_COLORS[index % DEFAULT_SERIES_COLORS.length],
      }))
    }, [data, series])

    return (
      <div
        ref={ref}
        className={cn(lineChartVariants({ size, className }))}
        role="img"
        {...props}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: yAxisLabel ? 20 : 0,
              bottom: xAxisLabel ? 20 : 5,
            }}
          >
            {showGrid && (
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
                vertical={false}
              />
            )}
            <XAxis
              dataKey="label"
              stroke="var(--color-secondary)"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: 'var(--color-primary)' }}
              label={
                xAxisLabel
                  ? {
                      value: xAxisLabel,
                      position: 'insideBottom',
                      offset: -10,
                      fill: 'var(--color-secondary)',
                      fontSize: 12,
                    }
                  : undefined
              }
            />
            <YAxis
              stroke="var(--color-secondary)"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: 'var(--color-primary)' }}
              label={
                yAxisLabel
                  ? {
                      value: yAxisLabel,
                      angle: -90,
                      position: 'insideLeft',
                      fill: 'var(--color-secondary)',
                      fontSize: 12,
                    }
                  : undefined
              }
            />
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  color: 'var(--color-primary)',
                }}
                labelStyle={{
                  color: 'var(--color-secondary)',
                  fontWeight: 400,
                }}
              />
            )}
            {showLegend && (
              <Legend
                wrapperStyle={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  color: 'var(--color-secondary)',
                }}
              />
            )}
            {resolvedSeries.map((s, index) => (
              <Line
                key={s.key}
                type={curved ? 'monotone' : 'linear'}
                dataKey={s.key}
                name={s.name}
                stroke={
                  s.color ||
                  DEFAULT_SERIES_COLORS[index % DEFAULT_SERIES_COLORS.length]
                }
                strokeWidth={strokeWidth}
                dot={showDots}
                activeDot={showDots ? { r: 6 } : false}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    )
  }
)

LineChart.displayName = 'LineChart'

export {
  LineChart,
  lineChartVariants,
  type LineChartProps,
  type DataPoint,
  type SeriesConfig,
}
