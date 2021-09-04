import React from 'react'
import { useTable, useSortBy, useExpanded } from 'react-table'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import asc from './asc.svg'
import desc from './desc.svg'

export type DataTableProps = {
  data: Array<any>
  columns: Array<any>
  renderRowSubComponent?: ({ row }: { row: any }) => React.ReactElement | string
}

const Icon = styled.img`
  margin-left: 8px;
`

const Tbody = styled.tbody`
  transition: visibility 700ms ease, opacity 500ms ease;
`
const Tr = styled.tr<{ $isExpanded?: boolean; $shouldShowSubRow?: boolean }>`
  ${({ $isExpanded, $shouldShowSubRow }) => {
    if ($isExpanded) {
      return css`
        background-color: ${theme.grey30};
        color: ${theme.grey100} !important;
        cursor: pointer;
      `
    } else if ($shouldShowSubRow) {
      return css`
        &:hover {
          background-color: ${theme.grey20};
          color: ${theme.grey100};
          cursor: pointer;
        }
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

export const DataTable: React.FC<DataTableProps> = ({ data, columns, renderRowSubComponent }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    getToggleAllRowsExpandedProps,
    toggleAllRowsExpanded,
    toggleRowExpanded,
  } = useTable(
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
      <Table $hasSubRow={renderRowSubComponent} {...getTableProps()}>
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
            const shouldShowSubRow = renderRowSubComponent && row.isExpanded
            return (
              <>
                <Tr
                  $isExpanded={row.isExpanded}
                  $shouldShowSubRow={renderRowSubComponent}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
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
                      transition: 'max-height 900ms ease, opacity 900ms, padding 200ms',
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
              </>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
