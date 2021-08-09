import React from 'react'
import { useTable, useSortBy, useExpanded } from 'react-table'
import styled from 'styled-components'
import { theme } from '../../theme'
import asc from './asc.svg'
import desc from './desc.svg'

export type DataTableProps = {
  data: Array<any>
  columns: Array<any>
  renderRowSubComponent?: ({ row }: { row: unknown }) => React.ReactElement | string
}

const Icon = styled.img`
  margin-left: 8px;
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

const Table = styled.table`
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
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  )

  return (
    <TableContainer>
      <Table {...getTableProps()}>
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
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <>
                <tr {...row.getRowProps()}>
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
                </tr>
                {renderRowSubComponent && row.isExpanded ? (
                  <tr key={row.id + row.depth}>
                    <td colSpan={visibleColumns.length}>{renderRowSubComponent({ row })}</td>
                  </tr>
                ) : null}
              </>
            )
          })}
        </tbody>
      </Table>
    </TableContainer>
  )
}
