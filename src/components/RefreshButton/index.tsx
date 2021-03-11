import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'

const RefreshButtonContainer = styled(Button)`
  position: absolute;
  right: 20px;
  width: 92px;
  height: 36px;
  border: 1px solid #35393d;
  border-radius: 4px;
  background-color: #35393d66;
  background-size: cover;
  font-size: 14px;
  color: #d7d8d8;
  text-decoration: none solid rgb(215, 216, 216);
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: none;
  outline: none;
`

export const RefreshButton = ({ load, loading }) => (
  <RefreshButtonContainer variant="secondary" onClick={load}>
    <i className={loading ? 'fa fa-spinner' : 'fa fa-refresh'} />
    &nbsp;Refresh
  </RefreshButtonContainer>
)
