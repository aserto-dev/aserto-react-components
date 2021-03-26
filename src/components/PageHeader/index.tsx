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
  topPosition?: number
  id?: string
}

const PageHeaderContainer = styled.div<{ $hasBorderBottom?: boolean; $topPosition?: number }>`
  padding: 20px;
  position: fixed;
  width: 100%;
  top: ${({ $topPosition }) => $topPosition || 82}px;
  ${({ $hasBorderBottom }) => ($hasBorderBottom ? `border-bottom: 1px solid ${theme.grey20}` : '')};
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 9;
  background-color: ${theme.primaryBlack};
  @media (max-width: 992px) {
    top: ${({ $topPosition }) => $topPosition || 73}px;
  }
  @media (max-width: 600px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  load,
  loading,
  hasBorderBottom,
  topPosition,
  id,
  children,
}) => (
  <PageHeaderContainer $hasBorderBottom={hasBorderBottom} id={id} $topPosition={topPosition}>
    {load && <RefreshButton load={load} loading={loading} />}
    {title && <PageTitle title={title} />}
    {children}
  </PageHeaderContainer>
)
