import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { DataTable, DataTableProps } from '../components/DataTable'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { ActionableInput, SelectWithDots } from '..'

const DotsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-height: 35px;
  min-height: 35px;
  height: 35px !important;
`

export default {
  title: 'Common/DataTable',
  component: DataTable,
} as Meta

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

const TopRightButton = styled(Button)`
  margin-right: -20px;
  float: right;
`
const DotsButton = styled(Button)`
  float: right;
  width: 40px;
`
interface Account {
  image: string
  name: string
  email: string
  role: string
  status: string
}

const Template: Story<DataTableProps<Account>> = (args) => <DataTable {...args} />

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
        <CellWithImage {...row.getToggleRowExpandedProps()}>
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
      return <span>{value}</span>
    },
  },
  {
    Header: () => {
      return <TopRightButton>Invite member...</TopRightButton>
    },
    accessor: 'id',
    style: {
      headerCell: {
        minWidth: 155,
      },
    },
    Cell: () => {
      return (
        <DotsContainer>
          <SelectWithDots options={[]} onChange={console.log} />
        </DotsContainer>
      )
    },
  },
]

export const Primary = Template.bind({})
Primary.args = {
  data,
  columns,
  onClickRow: undefined,
}

const renderRowSubComponent = ({ row }) => (
  <div>
    <ActionableInput
      onClickCopy={console.log}
      disabled
      label={'leke'}
      shouldShowHideShowButton={true}
    />
  </div>
)

export const PrimaryWithExpandedSubComponent = Template.bind({})
PrimaryWithExpandedSubComponent.args = {
  data,
  columns,
  renderRowSubComponent,
}

export const PrimaryWithClickableRows = Template.bind({})
PrimaryWithClickableRows.args = {
  data,
  columns,
  onClickRow: console.log,
}
