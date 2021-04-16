import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { Button } from '../Button'
import { mapTestIdToProps } from '../../utils'

const RefreshButtonContainer = styled(Button)`
  position: absolute;
  right: 20px;
  border: 1px solid ${theme.grey};
  border-radius: 4px;
  background-color: ${theme.grey20};
  background-size: cover;
  font-size: 14px;
  color: ${theme.grey100};
  text-align: center;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: none;
  outline: none;
  i {
    margin-right: 4px;
  }
  @media (max-width: 600px) {
    width: auto;
    i {
      margin: auto;
    }
    span {
      display: none;
    }
  }
`

export type RefreshButtonProps = {
  load?: () => void
  loading?: boolean
  testId?: string
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ load, loading, testId }) => (
  <RefreshButtonContainer {...mapTestIdToProps(testId)} variant="secondary" onClick={load}>
    <i className={loading ? 'fa fa-spinner' : 'fa fa-refresh'} />
    <span>&nbsp;Refresh</span>
  </RefreshButtonContainer>
)
