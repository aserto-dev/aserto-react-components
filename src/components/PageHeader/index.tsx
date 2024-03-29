import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { PageTitle } from '../PageTitle'
import { RefreshButton } from '../RefreshButton'
import { mapTestIdToProps } from '../../utils'

export type PageHeaderProps = {
  title?: string
  subtitle?: React.ReactNode | string
  load?: () => void
  loading?: boolean
  hasBorderBottom?: boolean
  children?: React.ReactNode
  topPosition?: number
  id?: string
  mobileBreakpoint?: number
  testId?: string
}

const PageHeaderContainer = styled.div<{
  $hasBorderBottom?: boolean
  $topPosition?: number
  $mobileBreakpoint?: number
}>`
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
  @media (max-width: ${({ $mobileBreakpoint }) => $mobileBreakpoint || 991}px) {
    top: ${({ $topPosition }) => $topPosition || 73}px;
  }
  @media (max-width: 600px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  load,
  loading,
  hasBorderBottom,
  topPosition,
  id,
  mobileBreakpoint,
  testId,
  children,
}) => (
  <PageHeaderContainer
    $hasBorderBottom={hasBorderBottom}
    id={id}
    $topPosition={topPosition}
    $mobileBreakpoint={mobileBreakpoint}
    {...mapTestIdToProps(testId)}
  >
    {load && <RefreshButton load={load} loading={loading} />}
    <div>
      {title && <PageTitle title={title} />}
      {subtitle && <div>{subtitle}</div>}
    </div>
    {children}
  </PageHeaderContainer>
)
