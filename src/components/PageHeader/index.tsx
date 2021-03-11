import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { PageTitle } from '../PageTitle'
import { RefreshButton } from '../RefreshButton'

export type PageHeaderProps = {
  title: string
  load?: () => void
  loading?: boolean
  children: React.ReactElement
}

const PageHeaderContainer = styled.div`
  padding: 40px 0px 0px 0px;
  position: sticky;
  top: 82px;
  z-index: 9;
  background-color: ${theme.primaryBlack};
`

export const PageHeader: React.FC<PageHeaderProps> = ({ title, load, loading, children }) => (
  <PageHeaderContainer>
    {load && <RefreshButton load={load} loading={loading} />}
    <PageTitle title={title} />
    {children}
  </PageHeaderContainer>
)
