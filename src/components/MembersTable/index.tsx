import React, { useRef } from 'react'
import { DataTable } from '../DataTable'
import styled from 'styled-components'
import { Button } from '../Button'
import { theme } from '../../theme'
import { useMemo } from 'react'
import { SelectWithoutControl } from '../SelectWithoutControl'
import { StatusPill } from '../StatusPill'

export const getStatusStyle = (status: string) => {
  const obj = {
    ACTIVE: {
      text: 'Active',
      color: theme.apple50,
    },
    PENDING: {
      text: 'Pending',
      color: theme.grey30,
    },
    EXPIRED: {
      text: 'Invitation expired',
      color: theme.mojo50,
    },
    DEFAULT: {
      text: 'Unkown',
      color: theme.grey40,
    },
  }

  return obj[status] || obj.DEFAULT
}

const CellWithImage = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    border-radius: 20px;
    height: 40px;
    margin-right: 10px;
  }
`
const BoldText = styled.div`
  font-weight: bold;
  font-size: 14px;
`

const TopRightButton = styled(Button)`
  margin-right: -20px;
  float: right;
`

const options = [
  { value: 'VIEWER', label: 'Viewer' },
  { value: 'MEMBER', label: 'Member' },
  { value: 'OWNER', label: 'Owner' },
]

export const MembersTable = ({
  data,
  onClickInvite,
  onClickCancel,
  onClickSave,
  onClickRemoveTenant,
  selectRef,
}) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Member',
        accessor: 'name',
        style: {
          cellWidth: '50%',
        },
        Cell: ({ row }) => {
          return (
            <CellWithImage>
              <BoldText>{row.original.email}</BoldText>
            </CellWithImage>
          )
        },
      },
      {
        Header: 'Status',
        accessor: 'status',
        style: {
          cellWidth: '10%',
        },
        Cell: ({ value }) => {
          const statusStyle = getStatusStyle(value)
          return <StatusPill backgroundColor={statusStyle.color}>{statusStyle.text}</StatusPill>
        },
      },
      {
        Header: () => {
          return <TopRightButton onClick={onClickInvite}>Invite member...</TopRightButton>
        },
        accessor: 'id',
        style: {
          headerCell: {
            minWidth: 155,
          },
        },
        disableSortBy: true,
        Cell: ({ row }) => {
          return (
            <div
              style={{
                float: 'right',
                minWidth: 100,
              }}
            />
          )
        },
      },
    ],
    [data, onClickInvite]
  )

  return <DataTable data={data} columns={columns} />
}
