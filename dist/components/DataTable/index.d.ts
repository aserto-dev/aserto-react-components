import React from 'react';
import { Column, Row, Cell, TableRowProps } from 'react-table';
declare type SubComponent<Data extends object> = React.FunctionComponent<{
    row: Row<Data>;
}>;
export declare type DataTableProps<Data extends object> = {
    data: readonly Data[];
    columns: readonly Column<Data>[];
    renderRowSubComponent?: SubComponent<Data>;
    getCellProps?: (cell: Cell<Data>) => void;
    rowComponent?: React.ComponentType<TableRowProps & {
        isExpanded: boolean;
    }>;
};
export declare const RowComponent: import("styled-components").StyledComponent<"tr", any, {
    isExpanded?: boolean;
}, never>;
export declare const DataTable: <Data extends object>({ data, columns, renderRowSubComponent, rowComponent, getCellProps, }: DataTableProps<Data>) => JSX.Element;
declare module 'react-table' {
    interface TableOptions<D extends object> extends UseExpandedOptions<D>, UseSortByOptions<D> {
    }
    interface Hooks<D extends object = {}> extends UseExpandedHooks<D>, UseSortByHooks<D> {
    }
    interface TableInstance<D extends object = {}> extends UseExpandedInstanceProps<D>, UseSortByInstanceProps<D> {
    }
    interface TableState<D extends object = {}> extends UseExpandedState<D>, UseSortByState<D> {
    }
    interface ColumnInterface<D extends object = {}> extends UseSortByColumnOptions<D> {
        style?: {
            cellWidth?: string | number;
            headerCell?: React.CSSProperties;
        };
    }
    interface ColumnInstance<D extends object = {}> extends UseSortByColumnProps<D> {
        style?: {
            cellWidth?: string | number;
            headerCell?: React.CSSProperties;
        };
    }
    interface Cell<D extends object = {}, V = any> extends UseRowStateCellProps<D> {
    }
    interface Row<D extends object = {}> extends UseExpandedRowProps<D> {
    }
}
export {};
