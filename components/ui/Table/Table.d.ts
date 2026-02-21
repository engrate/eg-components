import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const tableVariants: (props?: ({
    variant?: "default" | "striped" | null | undefined;
    size?: "default" | "compact" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const tableRowVariants: (props?: ({
    variant?: "default" | "striped" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const tableHeadVariants: (props?: ({
    sortable?: boolean | null | undefined;
    size?: "default" | "compact" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TableProps extends React.HTMLAttributes<HTMLTableElement>, VariantProps<typeof tableVariants> {
    /** Add visible horizontal borders between table rows */
    bordered?: boolean;
}
/**
 * Table root component following Engrate brand guidelines.
 * Features light gray backgrounds and subtle borders.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
}
declare const TableHeader: React.ForwardRefExoticComponent<TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
}
declare const TableBody: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
}
declare const TableFooter: React.ForwardRefExoticComponent<TableFooterProps & React.RefAttributes<HTMLTableSectionElement>>;
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement>, VariantProps<typeof tableRowVariants> {
}
declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
type SortDirection = 'asc' | 'desc' | null;
interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement>, Omit<VariantProps<typeof tableHeadVariants>, 'size'> {
    /** Enable sorting for this column */
    sortable?: boolean;
    /** Current sort direction */
    sortDirection?: SortDirection;
    /** Callback when sort is triggered */
    onSort?: () => void;
}
declare const TableHead: React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLTableCellElement>>;
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
}
declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
}
declare const TableCaption: React.ForwardRefExoticComponent<TableCaptionProps & React.RefAttributes<HTMLTableCaptionElement>>;
interface UseSortableTableOptions<T> {
    data: T[];
    initialSortKey?: keyof T | null;
    initialSortDirection?: 'asc' | 'desc';
}
interface UseSortableTableReturn<T> {
    sortedData: T[];
    sortKey: keyof T | null;
    sortDirection: SortDirection;
    handleSort: (key: keyof T) => void;
}
declare function useSortableTable<T>({ data, initialSortKey, initialSortDirection, }: UseSortableTableOptions<T>): UseSortableTableReturn<T>;
interface UseFilterableTableOptions<T> {
    data: T[];
    filterKeys?: (keyof T)[];
}
interface UseFilterableTableReturn<T> {
    filteredData: T[];
    filterValue: string;
    setFilterValue: (value: string) => void;
}
declare function useFilterableTable<T>({ data, filterKeys, }: UseFilterableTableOptions<T>): UseFilterableTableReturn<T>;
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, tableVariants, useSortableTable, useFilterableTable, };
export type { TableProps, TableHeadProps, TableRowProps, SortDirection };
