'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import {
  CartesianGrid,
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
  /** Label for the x-axis (e.g., date string, category, or numeric timestamp) */
  label: string | number
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
  /** Line interpolation type. Overrides `curved` when set. */
  interpolation?: 'linear' | 'monotone' | 'stepAfter' | 'stepBefore'
  /** Show dots on data points */
  showDots?: boolean
  /** Format tooltip values (e.g. add currency, custom rounding) */
  tooltipValueFormatter?: (value: number, seriesKey: string) => string
  /** Format the tooltip header label */
  tooltipLabelFormatter?: (label: string) => string
  /** Format x-axis tick values */
  xAxisValueFormatter?: (value: string) => string
  /** Format y-axis tick values */
  yAxisValueFormatter?: (value: string) => string
  /** X-axis type. Use 'number' for time-proportional spacing. */
  xAxisType?: 'category' | 'number'
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
      interpolation,
      showDots = true,
      tooltipValueFormatter,
      tooltipLabelFormatter,
      xAxisValueFormatter,
      yAxisValueFormatter,
      xAxisType = 'category',
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

    return (
      <div
        ref={ref}
        className={cn(lineChartVariants({ size, className }))}
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
                type={xAxisType}
                stroke="var(--color-secondary)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'var(--color-primary)' }}
                tickFormatter={xAxisValueFormatter}
                {...(xAxisType === 'number' && {
                  domain: ['dataMin', 'dataMax'],
                })}
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
                tickFormatter={yAxisValueFormatter}
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
                          {tooltipLabelFormatter
                            ? tooltipLabelFormatter(String(label))
                            : label}
                        </p>
                        {payload.map((entry) => (
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
                <Line
                  key={s.key}
                  type={interpolation ?? (curved ? 'monotone' : 'linear')}
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
            {resolvedSeries.map((s, index) => (
              <li
                key={s.key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
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
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {s.name}
                </span>
              </li>
            ))}
          </ul>
        )}
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
