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
      return 'border-top-left-radius: 4px; border-bottom-left-radius: 4px; width: 100px;'
    }
    if ($last) {
      return 'border-top-right-radius: 4px; border-bottom-right-radius: 4px; width: 100px;'
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
  startPage?: number
  endPage?: number
  currentPage: number
  showPrevNextButtons?: boolean
  showFirstAndLastButtons?: boolean
  disabledNext?: boolean
  disabledPrev?: boolean
}

export const Pagination: React.FC<PaginationProps> = ({
  startPage,
  endPage,
  currentPage,
  onClickFirst,
  onClickLast,
  onChangePage,
  onClickNext,
  onClickPrev,
  showPrevNextButtons,
  showFirstAndLastButtons,
  disabledNext,
  disabledPrev,
}) => {
  const pages = Array.from({ length: endPage - startPage }, (x, i) => i + startPage)
  return (
    <PaginationContainer>
      {showFirstAndLastButtons && (
        <PaginationButton $first onClick={onClickFirst}>
          First
        </PaginationButton>
      )}
      {showPrevNextButtons && (
        <PaginationButton
          $first={!showFirstAndLastButtons}
          onClick={onClickPrev}
          disabled={disabledPrev}
        >
          {showFirstAndLastButtons ? '«' : 'Previous'}
        </PaginationButton>
      )}
      {pages.map((page) => {
        return (
          <PaginationButton
            key={page}
            $active={page === currentPage}
            onClick={() => onChangePage(page)}
          >
            {page}
          </PaginationButton>
        )
      })}
      {showPrevNextButtons && (
        <PaginationButton
          $last={!showFirstAndLastButtons}
          disabled={disabledNext}
          onClick={onClickNext}
        >
          {showFirstAndLastButtons ? '»' : 'Next'}
        </PaginationButton>
      )}
      {showFirstAndLastButtons && (
        <PaginationButton $last onClick={onClickLast}>
          Last
        </PaginationButton>
      )}
    </PaginationContainer>
  )
}
