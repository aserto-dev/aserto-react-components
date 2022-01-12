import React from 'react'
import { Column, Row, useTable, useSortBy, useExpanded, Cell, TableRowProps } from 'react-table'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import asc from './asc.svg'
import desc from './desc.svg'

type SubComponent<Data extends object> = React.FunctionComponent<{ row: Row<Data> }>

export type DataTableProps<Data extends object> = {
  data: readonly Data[]
  columns: readonly Column<Data>[]
  renderRowSubComponent?: SubComponent<Data>
  getCellProps?: (cell: Cell<Data>) => void
  rowComponent?: React.ComponentType<TableRowProps & { isExpanded: boolean }>
}

const Icon = styled.img`
  margin-left: 8px;
`

const Tbody = styled.tbody`
  transition: visibility 700ms ease, opacity 500ms ease;
`

export const RowComponent = styled.tr<{ isExpanded?: boolean }>`
  ${({ isExpanded }) => {
    if (isExpanded) {
      return css`
        background-color: ${theme.grey30};
        color: ${theme.grey100} !important;
        cursor: pointer;
      `
    }
  }}
`

const TableContainer = styled.div`
  display: block;
  max-width: 100%;
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }
`

const Table = styled.table<{ $hasSubRow: boolean }>`
  background-color: ${theme.primaryBlack};
  width: 100%;
  thead {
    tr {
      color: ${theme.grey100};
      font-weight: bold;
      font-size: 16px;
      th {
        min-width: 120px;
        padding: 20px;
      }
    }
  }
  tbody {
    font-size: 14px;
    tr {
      color: ${theme.grey70};
      border: 1px solid ${theme.grey20};
      td {
        border-bottom: 1px solid ${theme.grey20};
        padding: 20px;
      }
    }
  }
`

export const DataTable = <Data extends object>({
  data,
  columns,
  renderRowSubComponent,
  rowComponent,
  getCellProps,
}: DataTableProps<Data>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable<Data>(
    {
      columns,
      data,
      expandSubRows: false,
    },
    useSortBy,
    useExpanded
  )

  return (
    <TableContainer>
      <Table $hasSubRow={renderRowSubComponent !== undefined} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={column.style?.headerCell}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <Icon src={desc} />
                        ) : (
                          <Icon src={asc} />
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            const shouldShowSubRow = renderRowSubComponent !== undefined && row.isExpanded
            const Tr = rowComponent || RowComponent
            const rowProps = row.getRowProps()
            return (
              <React.Fragment key={rowProps.key}>
                <Tr isExpanded={row.isExpanded} {...rowProps}>
                  {row.cells.map((cell) => {
                    const customCellProps = getCellProps ? getCellProps(cell) : {}
                    return (
                      <td
                        {...cell.getCellProps()}
                        {...customCellProps}
                        width={cell.column?.style?.cellWidth ? cell.column.style.cellWidth : ''}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </Tr>
                <tr
                  style={{
                    backgroundColor: theme.grey10,
                  }}
                >
                  <td
                    style={{
                      backgroundColor: theme.grey10,
                      padding: 20,
                      transition: 'max-height 900ms ease, opacity 900ms, padding-top 200ms',
                      maxHeight: 300,
                      opacity: 1,
                      ...(!shouldShowSubRow && {
                        maxHeight: 0,
                        height: 0,
                        padding: 0,
                        opacity: 0,
                        overflow: 'hidden',
                      }),
                    }}
                    colSpan={visibleColumns.length}
                  >
                    <div
                      style={{
                        transition: 'all 10ms',
                        ...(!shouldShowSubRow && {
                          visibility: 'hidden',
                          height: 0,
                        }),
                      }}
                    >
                      {shouldShowSubRow && renderRowSubComponent({ row })}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

// Must use module declaration augmentation to type the useSortBy and useExpanded plugins
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table#configuration-using-declaration-merging
declare module 'react-table' {
  export interface TableOptions<D extends object>
    extends UseExpandedOptions<D>,
      UseSortByOptions<D> {}
  export interface Hooks<D extends object = {}> extends UseExpandedHooks<D>, UseSortByHooks<D> {}
  export interface TableInstance<D extends object = {}>
    extends UseExpandedInstanceProps<D>,
      UseSortByInstanceProps<D> {}
  export interface TableState<D extends object = {}>
    extends UseExpandedState<D>,
      UseSortByState<D> {}
  export interface ColumnInterface<D extends object = {}> extends UseSortByColumnOptions<D> {
    // DataTable-specific properties
    style?: {
      cellWidth?: string | number
      headerCell?: React.CSSProperties
    }
  }
  export interface ColumnInstance<D extends object = {}> extends UseSortByColumnProps<D> {
    // DataTable-specific properties
    style?: {
      cellWidth?: string | number
      headerCell?: React.CSSProperties
    }
  }
  export interface Cell<D extends object = {}, V = any> extends UseRowStateCellProps<D> {}
  export interface Row<D extends object = {}> extends UseExpandedRowProps<D> {}
}
