import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export type PageTitleProps = {
  title: string
}

const Title = styled.div`
  font-size: 24px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
  color: ${theme.grey100};
`

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => <Title>{title}</Title>
