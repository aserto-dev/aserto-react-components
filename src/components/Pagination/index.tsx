import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { Button } from '../Button'

const PaginationButton = styled(Button).attrs(() => ({
  variant: 'secondary',
}))<{ $first?: boolean; $last?: boolean; $active?: boolean }>`
  border-radius: 0px;
  font-weight: 600;
  ${({ $last, $first }) => {
    if ($first) {
      return 'border-top-left-radius: 4px; border-bottom-left-radius: 4px;'
    }
    if ($last) {
      return 'border-top-right-radius: 4px; border-bottom-right-radius: 4px;'
    }
  }};
  &:hover {
  }
  ${({ $active }) => {
    return $active
      ? css`
          pointer-events: none;
          background-color: ${theme.lochivarAccent4};
          border: 1px solid ${theme.lochivarAccent4};
          color: ${theme.primaryBlack};
          &:hover,
          &:active,
          &:focus {
            background-color: ${theme.lochivarAccent4};
            border: 1px solid ${theme.lochivarAccent4};
            color: ${theme.primaryBlack};
          }
        `
      : ''
  }};
`

const PaginationContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`

export type PaginationProps = {
  onClickNext?: () => void
  onClickPrev?: () => void
  onClickFirst?: () => void
  onClickLast?: () => void
  onChangePage?: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = () => {
  const pages = Array.from({ length: 5 }, (x, i) => i + 1)
  return (
    <PaginationContainer>
      <PaginationButton $first>First</PaginationButton>
      <PaginationButton $active>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>4</PaginationButton>
      <PaginationButton>5</PaginationButton>
      <PaginationButton $last>Last</PaginationButton>
    </PaginationContainer>
  )
}
