import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export type PageTitleProps = {
  title: string
}

const Title = styled.div`
  font-size: 32px;
  color: ${theme.grey100};
  text-decoration: none solid rgb(215, 216, 216);
  line-height: 42px;
  margin-left: 20px;
  margin-right: 20px;
`

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => <Title>{title}</Title>
