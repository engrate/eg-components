import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const lineChartVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** A single data point for the chart */
interface DataPoint {
    /** Label for the x-axis (e.g., date, category) */
    label: string;
    /** Numeric values for each series */
    [key: string]: string | number;
}
/** Configuration for a data series */
interface SeriesConfig {
    /** Key in the data object for this series */
    key: string;
    /** Display name for the legend */
    name: string;
    /** Line color (defaults to sunflower for first series) */
    color?: string;
}
interface LineChartProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof lineChartVariants> {
    /** Data points to render */
    data: DataPoint[];
    /** Configuration for data series. If not provided, all numeric keys except 'label' will be rendered */
    series?: SeriesConfig[];
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
    /** Custom stroke width for lines */
    strokeWidth?: number;
    /** Enable curve interpolation */
    curved?: boolean;
    /** Show dots on data points */
    showDots?: boolean;
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
declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<HTMLDivElement>>;
export { LineChart, lineChartVariants, type LineChartProps, type DataPoint, type SeriesConfig, };
