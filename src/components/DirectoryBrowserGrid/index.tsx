import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import noUsers from './no-users.svg'
import InfiniteScroll from 'react-infinite-scroll-component'
import { User } from '../../types'
import { UserCard } from '../UserCard'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 399px);
  gap: 20px;
  justify-content: center;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding-right: 20px;
  }
`
const UserCardStyled = styled(UserCard)``

const InfiniteScrollView = styled(InfiniteScroll)`
  display: flex;
  overflow: auto;
  flex-direction: column;
  padding: 20px;
`

const EmptyUsersContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
  img {
    margin: 60px auto auto;
  }
  div {
    margin-top: 22px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.grey70};
    strong {
      color: ${({ theme }) => theme.grey100};
    }
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`

const renderUserCards = (users: readonly User[], onClick: (id: string) => void) => {
  if (users.length === 0) {
    return (
      <EmptyUsersContainer>
        <img src={noUsers} alt="no-users" />
        <div>You dont have any users.</div>
      </EmptyUsersContainer>
    )
  }
  return users?.map((u: User) => (
    <UserCardStyled key={u.id} user={u} onClick={() => onClick(u.id)} />
  ))
}

const filterUsers = (users: readonly User[], filter: string): readonly User[] => {
  if (filter) {
    return users.filter(
      (value) =>
        value.display_name.toLowerCase().includes(filter) ||
        value.email.toLowerCase().includes(filter)
    )
  }
  return users
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export type DirectoryBrowserGridProps = {
  pageSize: number
  users: readonly User[]
  filter: string
  onClickCard: (id: string) => void
}

export const DirectoryBrowserGrid: React.FC<DirectoryBrowserGridProps> = ({
  users,
  filter,
  pageSize = 30,
  onClickCard,
}) => {
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    if (filter) {
      scrollToTop()
    }
  }, [page, filter])

  const filteredUsers = useMemo(() => filterUsers(users, filter.toLowerCase()), [users, filter])

  const lastPage = useMemo(() => Math.ceil(filteredUsers?.length / pageSize), [
    pageSize,
    filteredUsers,
  ])

  const onReachEnd = async () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <div>
      <InfiniteScrollView
        dataLength={filteredUsers?.length}
        next={onReachEnd}
        hasMore={page <= lastPage}
        loader={page < lastPage && <div>Loading...</div>}
      >
        <Grid>{renderUserCards(filteredUsers, onClickCard)}</Grid>
      </InfiniteScrollView>
    </div>
  )
}
