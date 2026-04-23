'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { cn } from '@/lib/utils'

const barChartVariants = cva('text-small font-sans tracking-[-0.05em]', {
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

/** A single data point for the bar chart */
interface BarChartDataPoint {
  /** Label for the x-axis (e.g., date, category) */
  label: string
  /** Numeric values for each series */
  [key: string]: string | number
}

/** Configuration for a bar chart data series */
interface BarChartSeriesConfig {
  /** Key in the data object for this series */
  key: string
  /** Display name for the legend */
  name: string
  /** Bar color (defaults to sunflower for first series) */
  color?: string
}

/** Default brand colors for chart series (CSS variable names) */
const DEFAULT_SERIES_COLORS = [
  'var(--color-sunflower)',
  'var(--color-electric-blue)',
  'var(--color-cool-purple)',
  'var(--color-deep-blue)',
  'var(--color-warm-purple)',
  'var(--color-chart-teal)',
  'var(--color-chart-coral)',
  'var(--color-chart-sky)',
  'var(--color-chart-amber)',
  'var(--color-chart-indigo)',
]

interface BarChartProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof barChartVariants> {
  /** Data points to render */
  data: BarChartDataPoint[]
  /** Configuration for data series. If not provided, all numeric keys except 'label' will be rendered */
  series?: BarChartSeriesConfig[]
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
  /** Bar corner radius */
  radius?: number
  /** Stack bars on top of each other */
  stacked?: boolean
  /** Layout orientation */
  layout?: 'horizontal' | 'vertical'
  /** Format tooltip values (e.g. add currency, custom rounding) */
  tooltipValueFormatter?: (value: number, seriesKey: string) => string
  /** Format x-axis tick values */
  xAxisValueFormatter?: (value: string) => string
  /** Format y-axis tick values */
  yAxisValueFormatter?: (value: string) => string
}

/**
 * BarChart component for displaying categorical data comparisons.
 * Built with Recharts and styled according to Engrate design system.
 *
 * @example
 * ```tsx
 * <BarChart
 *   data={[
 *     { label: 'Jan', revenue: 4000, expenses: 2400 },
 *     { label: 'Feb', revenue: 3000, expenses: 1398 },
 *     { label: 'Mar', revenue: 2000, expenses: 9800 },
 *   ]}
 *   series={[
 *     { key: 'revenue', name: 'Revenue' },
 *     { key: 'expenses', name: 'Expenses', color: '#0080FF' },
 *   ]}
 *   aria-label="Revenue vs expenses comparison"
 * />
 * ```
 */
const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
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
      radius = 0,
      stacked = false,
      layout = 'horizontal',
      tooltipValueFormatter,
      xAxisValueFormatter,
      yAxisValueFormatter,
      'aria-label': ariaLabel,
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

    const [soloSeries, setSoloSeries] = React.useState<string | null>(null)

    const handleLegendClick = (key: string) => {
      setSoloSeries((prev) => (prev === key ? null : key))
    }

    const isVertical = layout === 'vertical'

    return (
      <div
        ref={ref}
        className={cn(barChartVariants({ size, className }))}
        style={{ display: 'flex', flexDirection: 'column' }}
        {...props}
      >
        <div
          role="img"
          aria-label={ariaLabel}
          style={{ flex: '1 1 0', minHeight: 0 }}
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
            minWidth={100}
            minHeight={100}
          >
            <RechartsBarChart
              data={data}
              layout={layout}
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
                  vertical={isVertical}
                  horizontal={!isVertical}
                />
              )}
              {isVertical ? (
                <>
                  <XAxis
                    type="number"
                    stroke="var(--color-secondary)"
                    fontSize="var(--text-descriptive)"
                    tickLine={false}
                    axisLine={{ stroke: 'var(--color-border)' }}
                    tickFormatter={xAxisValueFormatter}
                    label={
                      xAxisLabel
                        ? {
                            value: xAxisLabel,
                            position: 'insideBottom',
                            offset: -10,
                            fill: 'var(--color-secondary)',
                            fontSize: 'var(--text-descriptive)',
                          }
                        : undefined
                    }
                  />
                  <YAxis
                    type="category"
                    dataKey="label"
                    stroke="var(--color-secondary)"
                    fontSize="var(--text-descriptive)"
                    tickLine={false}
                    axisLine={{ stroke: 'var(--color-border)' }}
                    tickFormatter={yAxisValueFormatter}
                    label={
                      yAxisLabel
                        ? {
                            value: yAxisLabel,
                            angle: -90,
                            position: 'insideLeft',
                            fill: 'var(--color-secondary)',
                            fontSize: 'var(--text-descriptive)',
                          }
                        : undefined
                    }
                  />
                </>
              ) : (
                <>
                  <XAxis
                    dataKey="label"
                    stroke="var(--color-secondary)"
                    fontSize="var(--text-descriptive)"
                    tickLine={false}
                    axisLine={{ stroke: 'var(--color-border)' }}
                    tickFormatter={xAxisValueFormatter}
                    label={
                      xAxisLabel
                        ? {
                            value: xAxisLabel,
                            position: 'insideBottom',
                            offset: -10,
                            fill: 'var(--color-secondary)',
                            fontSize: 'var(--text-descriptive)',
                          }
                        : undefined
                    }
                  />
                  <YAxis
                    stroke="var(--color-secondary)"
                    fontSize="var(--text-descriptive)"
                    tickLine={false}
                    axisLine={{ stroke: 'var(--color-border)' }}
                    tickFormatter={yAxisValueFormatter}
                    label={
                      yAxisLabel
                        ? {
                            value: yAxisLabel,
                            angle: -90,
                            position: 'insideLeft',
                            fill: 'var(--color-secondary)',
                            fontSize: 'var(--text-descriptive)',
                          }
                        : undefined
                    }
                  />
                </>
              )}
              {showTooltip && (
                <Tooltip
                  cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                  content={({ active, payload, label }) => {
                    if (!active || !payload?.length) return null
                    return (
                      <div
                        style={{
                          backgroundColor: 'var(--color-card)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '8px',
                          fontFamily: 'var(--font-sans)',
                          fontSize: 'var(--text-small)',
                          padding: '12px 16px',
                        }}
                      >
                        <p
                          style={{
                            color: 'var(--color-secondary)',
                            fontWeight: 400,
                            margin: '0 0 4px',
                          }}
                        >
                          {label}
                        </p>
                        {[...payload].reverse().map((entry) => (
                          <div
                            key={String(entry.name)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              marginTop: '2px',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                backgroundColor: entry.color,
                                flexShrink: 0,
                              }}
                            />
                            <span style={{ color: 'var(--color-secondary)' }}>
                              {entry.name}:{' '}
                              {tooltipValueFormatter
                                ? tooltipValueFormatter(
                                    entry.value as number,
                                    entry.dataKey as string
                                  )
                                : entry.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )
                  }}
                />
              )}
              {resolvedSeries.map((s, index) => (
                <Bar
                  key={s.key}
                  dataKey={s.key}
                  name={s.name}
                  fill={
                    s.color ||
                    DEFAULT_SERIES_COLORS[index % DEFAULT_SERIES_COLORS.length]
                  }
                  radius={radius}
                  stackId={stacked ? 'stack' : undefined}
                  hide={soloSeries !== null && soloSeries !== s.key}
                />
              ))}
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
        {showLegend && (
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px 16px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {resolvedSeries.map((s, index) => {
              const isHidden = soloSeries !== null && soloSeries !== s.key
              return (
                <li
                  key={s.key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleLegendClick(s.key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      opacity: isHidden ? 0.35 : 1,
                      transition: 'opacity 150ms',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      maxWidth: '140px',
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        flexShrink: 0,
                        backgroundColor:
                          s.color ||
                          DEFAULT_SERIES_COLORS[
                            index % DEFAULT_SERIES_COLORS.length
                          ],
                      }}
                    />
                    <span
                      style={{
                        color: 'var(--color-secondary)',
                        fontSize: 'var(--text-small)',
                        fontFamily: 'var(--font-sans)',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        minWidth: 0,
                      }}
                    >
                      {s.name}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
)

BarChart.displayName = 'BarChart'

export {
  BarChart,
  barChartVariants,
  type BarChartProps,
  type BarChartDataPoint,
  type BarChartSeriesConfig,
}
