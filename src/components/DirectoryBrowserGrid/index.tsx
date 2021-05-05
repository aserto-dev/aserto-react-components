import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import noUsers from './no-users.svg'
import InfiniteScroll from 'react-infinite-scroll-component'
import { User } from '../../types'
import { UserCard } from '../UserCard'

const MOBILE_PAGE_SIZE = 40

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

const renderUserCards = (users: Array<User>, onClick: (id: string) => void) => {
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

const filterUsers = (users: Array<User>, filter: string): Array<User> => {
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
const mapUsersToInfiniteScroll = (
  users: Array<User>,
  page: number,
  pageSize = MOBILE_PAGE_SIZE
) => {
  try {
    return users.slice(0, page * pageSize)
  } catch (er) {
    return []
  }
}

export type DirectoryBrowserGridProps = {
  pageSize: number
  users: Array<User>
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
  const usersToDisplay = useMemo(() => mapUsersToInfiniteScroll(filteredUsers, page, pageSize), [
    filteredUsers,
    page,
    pageSize,
  ])

  const lastPage = useMemo(() => Math.ceil(usersToDisplay?.length / pageSize), [
    pageSize,
    usersToDisplay,
  ])

  const onReachEnd = async () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <div>
      <InfiniteScrollView
        dataLength={usersToDisplay?.length}
        next={onReachEnd}
        hasMore={page <= lastPage}
        loader={page < lastPage && <div>Loading...</div>}
      >
        <Grid>{renderUserCards(usersToDisplay, onClickCard)}</Grid>
      </InfiniteScrollView>
    </div>
  )
}
