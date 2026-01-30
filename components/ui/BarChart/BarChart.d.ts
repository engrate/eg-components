import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const barChartVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** A single data point for the bar chart */
interface BarChartDataPoint {
    /** Label for the x-axis (e.g., date, category) */
    label: string;
    /** Numeric values for each series */
    [key: string]: string | number;
}
/** Configuration for a bar chart data series */
interface BarChartSeriesConfig {
    /** Key in the data object for this series */
    key: string;
    /** Display name for the legend */
    name: string;
    /** Bar color (defaults to sunflower for first series) */
    color?: string;
}
interface BarChartProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof barChartVariants> {
    /** Data points to render */
    data: BarChartDataPoint[];
    /** Configuration for data series. If not provided, all numeric keys except 'label' will be rendered */
    series?: BarChartSeriesConfig[];
    /** Show grid lines */
    showGrid?: boolean;
    /** Show legend */
    showLegend?: boolean;
    /** Show tooltips on hover */
    showTooltip?: boolean;
    /** X-axis label */
    xAxisLabel?: string;
    /** Y-axis label */
    yAxisLabel?: string;
    /** Bar corner radius */
    radius?: number;
    /** Stack bars on top of each other */
    stacked?: boolean;
    /** Layout orientation */
    layout?: 'horizontal' | 'vertical';
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
declare const BarChart: React.ForwardRefExoticComponent<BarChartProps & React.RefAttributes<HTMLDivElement>>;
export { BarChart, barChartVariants, type BarChartProps, type BarChartDataPoint, type BarChartSeriesConfig, };
