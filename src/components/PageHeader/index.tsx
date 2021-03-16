import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { PageTitle } from '../PageTitle'
import { RefreshButton } from '../RefreshButton'

export type PageHeaderProps = {
  title?: string
  load?: unknown
  loading?: boolean
  hasBorderBottom?: boolean
  children?: React.ReactElement
}

const PageHeaderContainer = styled.div<{ $hasBorderBottom?: boolean }>`
  padding: 20px;
  position: sticky;
  top: 82px;
  ${({ $hasBorderBottom }) => ($hasBorderBottom ? `border-bottom: 1px solid ${theme.grey20}` : '')};
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 9;
  background-color: ${theme.primaryBlack};
`

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  load,
  loading,
  hasBorderBottom,
  children,
}) => (
  <PageHeaderContainer $hasBorderBottom={hasBorderBottom}>
    {load && <RefreshButton load={load} loading={loading} />}
    {title && <PageTitle title={title} />}
    {children}
  </PageHeaderContainer>
)
