import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const lineChartVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** A single data point for the chart */
interface DataPoint {
    /** Label for the x-axis (e.g., date string, category, or numeric timestamp) */
    label: string | number;
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
    /** Line interpolation type. Overrides `curved` when set. */
    interpolation?: 'linear' | 'monotone' | 'stepAfter' | 'stepBefore';
    /** Show dots on data points */
    showDots?: boolean;
    /** Format tooltip values (e.g. add currency, custom rounding) */
    tooltipValueFormatter?: (value: number, seriesKey: string) => string;
    /** Format the tooltip header label */
    tooltipLabelFormatter?: (label: string) => string;
    /** Format x-axis tick values */
    xAxisValueFormatter?: (value: string) => string;
    /** Format y-axis tick values */
    yAxisValueFormatter?: (value: string) => string;
    /** X-axis type. Use 'number' for time-proportional spacing. */
    xAxisType?: 'category' | 'number';
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
