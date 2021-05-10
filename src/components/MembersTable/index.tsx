import React from 'react'
import { DataTable } from '../DataTable'
import styled from 'styled-components'
import dots from './dots.svg'
import { Button } from '../Button'
import { theme } from '../../theme'
import { useMemo } from 'react'

export const getStatusStyle = (status: string) => {
  const obj = {
    ACTIVE: {
      text: 'Active',
      color: theme.apple80,
    },
    PENDING: {
      text: 'Pending',
      color: theme.cooperAccent3,
    },
    EXPIRED: {
      text: 'Expired',
      color: theme.mojoAccent3,
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
`

const StatusText = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  line-height: 24px;
`

const TopRightButton = styled(Button)`
  margin-right: -20px;
  float: right;
`
const DotsButton = styled(Button)`
  float: right;
  width: 40px;
`

export const MembersTable = ({ data, onClickInvite, onClickDots }) => {
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
              <img src={row.original.image} alt="profile-image" />
              <div>
                <BoldText>{row.original.name}</BoldText>
                <div>{row.original.email}</div>
              </div>
            </CellWithImage>
          )
        },
      },
      {
        Header: 'Role',
        accessor: 'role',
        style: {
          cellWidth: '8%',
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
          return <StatusText color={statusStyle.color}>{statusStyle.text}</StatusText>
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
        Cell: (data) => {
          return (
            <DotsButton
              onClick={() => onClickDots(data.row.original)}
              variant="secondary-borderless"
            >
              <img src={dots} alt="see-more" />
            </DotsButton>
          )
        },
      },
    ],
    [data, onClickInvite]
  )

  return <DataTable data={data} columns={columns} />
}
