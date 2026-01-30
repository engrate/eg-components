import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const pieChartVariants: (props?: ({
    size?: "sm" | "default" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** A single data point for the pie chart */
interface PieChartDataPoint {
    /** Label for the segment */
    name: string;
    /** Numeric value for the segment */
    value: number;
    /** Optional color for the segment */
    color?: string;
}
interface PieChartProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pieChartVariants> {
    /** Data points to render */
    data: PieChartDataPoint[];
    /** Show legend */
    showLegend?: boolean;
    /** Show tooltips on hover */
    showTooltip?: boolean;
    /** Inner radius for donut chart (0 = pie, > 0 = donut) */
    innerRadius?: number;
    /** Outer radius as percentage of container */
    outerRadius?: number | string;
    /** Padding angle between segments */
    paddingAngle?: number;
    /** Show percentage labels on segments */
    showLabels?: boolean;
    /** Start angle in degrees (0 = 3 o'clock, 90 = 12 o'clock) */
    startAngle?: number;
    /** End angle in degrees */
    endAngle?: number;
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
declare const PieChart: React.ForwardRefExoticComponent<PieChartProps & React.RefAttributes<HTMLDivElement>>;
export { PieChart, pieChartVariants, type PieChartProps, type PieChartDataPoint, };
