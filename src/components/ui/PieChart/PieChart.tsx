'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import {
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import { cn } from '@/lib/utils'

const pieChartVariants = cva('text-small font-sans tracking-[-0.05em]', {
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

/** A single data point for the pie chart */
interface PieChartDataPoint {
  /** Label for the segment */
  name: string
  /** Numeric value for the segment */
  value: number
  /** Optional color for the segment */
  color?: string
}

/** Default brand colors for chart segments (CSS variable names) */
const DEFAULT_SEGMENT_COLORS = [
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

interface PieChartProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pieChartVariants> {
  /** Data points to render */
  data: PieChartDataPoint[]
  /** Show legend */
  showLegend?: boolean
  /** Show tooltips on hover */
  showTooltip?: boolean
  /** Inner radius for donut chart (0 = pie, > 0 = donut) */
  innerRadius?: number
  /** Outer radius as percentage of container */
  outerRadius?: number | string
  /** Padding angle between segments */
  paddingAngle?: number
  /** Show percentage labels on segments */
  showLabels?: boolean
  /** Start angle in degrees (0 = 3 o'clock, 90 = 12 o'clock) */
  startAngle?: number
  /** End angle in degrees */
  endAngle?: number
  /** Format tooltip values (e.g. add currency, custom rounding) */
  tooltipValueFormatter?: (value: number, segmentName: string) => string
  /** Format the tooltip header label */
  tooltipLabelFormatter?: (label: string) => string
  /** Format label/category values (used for legend + tooltip labels) */
  xAxisValueFormatter?: (value: string) => string
  /** Format numeric values (used for tooltip values) */
  yAxisValueFormatter?: (value: string) => string
  /** Format segment labels rendered inside slices when showLabels=true */
  labelFormatter?: (name: string, value: number, percent: number) => string
}

/**
 * PieChart component for displaying proportional data.
 * Built with Recharts and styled according to Engrate design system.
 *
 * @example
 * ```tsx
 * <PieChart
 *   data={[
 *     { name: 'Desktop', value: 400 },
 *     { name: 'Mobile', value: 300 },
 *     { name: 'Tablet', value: 200 },
 *   ]}
 *   aria-label="Traffic by device type"
 * />
 * ```
 *
 * @example Donut chart
 * ```tsx
 * <PieChart
 *   data={data}
 *   innerRadius={60}
 *   aria-label="Revenue distribution"
 * />
 * ```
 */
const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>(
  (
    {
      className,
      size,
      data,
      showLegend = true,
      showTooltip = true,
      innerRadius = 0,
      outerRadius = '80%',
      paddingAngle = 0,
      showLabels = false,
      startAngle = 90,
      endAngle = -270,
      tooltipValueFormatter,
      tooltipLabelFormatter,
      xAxisValueFormatter,
      yAxisValueFormatter,
      labelFormatter,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Calculate total for percentage labels
    const total = React.useMemo(
      () => data.reduce((sum, item) => sum + item.value, 0),
      [data]
    )

    // Custom label renderer
    const formatSegmentName = React.useCallback(
      (name: string) =>
        xAxisValueFormatter ? xAxisValueFormatter(name) : name,
      [xAxisValueFormatter]
    )

    const formatSegmentValue = React.useCallback(
      (value: number) =>
        yAxisValueFormatter
          ? yAxisValueFormatter(String(value))
          : String(value),
      [yAxisValueFormatter]
    )

    const renderLabel = React.useCallback(
      (props: {
        cx?: number
        cy?: number
        midAngle?: number
        innerRadius?: number
        outerRadius?: number
        percent?: number
        name?: string
        value?: number
      }) => {
        const {
          cx = 0,
          cy = 0,
          midAngle = 0,
          percent = 0,
          name = '',
          value = 0,
        } = props
        const ir = props.innerRadius ?? 0
        const or = props.outerRadius ?? 0
        const RADIAN = Math.PI / 180
        const radius = ir + (or - ir) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)
        const percentValue = percent * 100
        const textValue = labelFormatter
          ? labelFormatter(String(name), Number(value), percentValue)
          : `${percentValue.toFixed(0)}%`

        return (
          <text
            x={x}
            y={y}
            fill="var(--color-white)"
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontSize: '12px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
            }}
          >
            {textValue}
          </text>
        )
      },
      [labelFormatter]
    )

    return (
      <div
        ref={ref}
        className={cn(pieChartVariants({ size, className }))}
        style={{ display: 'flex', flexDirection: 'column' }}
        aria-label={ariaLabel}
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
            <RechartsPieChart>
              {showTooltip && (
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active || !payload?.length) return null
                    const entry = payload[0]
                    const value = Number(entry.value)
                    const name = String(entry.name)
                    const formattedName = tooltipLabelFormatter
                      ? tooltipLabelFormatter(formatSegmentName(name))
                      : formatSegmentName(name)
                    const formattedValue = tooltipValueFormatter
                      ? tooltipValueFormatter(value, name)
                      : formatSegmentValue(value)
                    const percent =
                      total > 0 ? ((value / total) * 100).toFixed(1) : '0.0'

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
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
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
                            {formattedName}: {formattedValue} ({percent}%)
                          </span>
                        </div>
                      </div>
                    )
                  }}
                />
              )}
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                paddingAngle={paddingAngle}
                dataKey="value"
                nameKey="name"
                startAngle={startAngle}
                endAngle={endAngle}
                label={showLabels ? renderLabel : false}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}-${index}`}
                    fill={
                      entry.color ||
                      DEFAULT_SEGMENT_COLORS[
                        index % DEFAULT_SEGMENT_COLORS.length
                      ]
                    }
                  />
                ))}
              </Pie>
            </RechartsPieChart>
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
            {data.map((entry, index) => (
              <li
                key={`${entry.name}-${index}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
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
                      entry.color ||
                      DEFAULT_SEGMENT_COLORS[
                        index % DEFAULT_SEGMENT_COLORS.length
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
                  {formatSegmentName(entry.name)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
)

PieChart.displayName = 'PieChart'

export {
  PieChart,
  pieChartVariants,
  type PieChartProps,
  type PieChartDataPoint,
}
