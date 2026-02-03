'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import {
  Cell,
  Legend,
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
    const renderLabel = React.useCallback(
      (props: {
        cx?: number
        cy?: number
        midAngle?: number
        innerRadius?: number
        outerRadius?: number
        percent?: number
      }) => {
        const { cx = 0, cy = 0, midAngle = 0, percent = 0 } = props
        const ir = props.innerRadius ?? 0
        const or = props.outerRadius ?? 0
        const RADIAN = Math.PI / 180
        const radius = ir + (or - ir) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)

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
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        )
      },
      []
    )

    return (
      <div
        ref={ref}
        className={cn(pieChartVariants({ size, className }))}
        role="img"
        {...props}
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
                itemStyle={{
                  color: 'var(--color-secondary)',
                }}
                formatter={(value, name) => [
                  `${value} (${total > 0 ? ((Number(value) / total) * 100).toFixed(1) : 0}%)`,
                  name,
                ]}
              />
            )}
            {showLegend && (
              <Legend
                wrapperStyle={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                }}
                formatter={(value) => (
                  <span style={{ color: 'var(--color-secondary)' }}>
                    {value}
                  </span>
                )}
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
