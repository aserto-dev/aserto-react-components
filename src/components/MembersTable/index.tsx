import React from 'react'
import { DataTable } from '../DataTable'
import styled from 'styled-components'
import dots from './dots.svg'
import { Button } from '../Button'
import { theme } from '../../theme'

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

const data = [
  {
    image: 'https://i.pinimg.com/564x/e2/39/42/e239424e363082347f69d4d35b9b680e.jpg',
    name: 'Gert Drapers',
    email: 'gert@acmcorp.net',
    role: 'Admin',
    status: 'ACTIVE',
  },
  {
    image: 'https://i.pinimg.com/564x/e2/39/42/e239424e363082347f69d4d35b9b680e.jpg',
    name: 'Gert Drapers2',
    email: 'gert@acmcorp.net',
    role: 'Admin',
    status: 'PENDING',
  },
  {
    image: 'https://i.pinimg.com/564x/e2/39/42/e239424e363082347f69d4d35b9b680e.jpg',
    name: 'Gert Drapers3',
    email: 'gert@acmcorp.net',
    role: 'View',
    status: 'EXPIRED',
  },
]

const columns = [
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
      return <TopRightButton>Invite members...</TopRightButton>
    },
    accessor: 'id',
    style: {
      headerCell: {
        minWidth: 155,
      },
    },
    Cell: () => {
      return (
        <DotsButton variant="secondary-borderless">
          <img src={dots} alt="see-more" />
        </DotsButton>
      )
    },
  },
]

export const MembersTable = () => {
  return <DataTable data={data} columns={columns} />
}
