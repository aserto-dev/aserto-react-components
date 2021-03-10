import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export type DividerProps = {
  marginBottom?: number
}

const Hr = styled.hr`
  border-top-color: ${theme.grey20};
  width: 100vw;
  margin-bottom: 0px;
`

export const Divider: React.FC<DividerProps> = ({ marginBottom }) => <Hr style={{ marginBottom }} />
