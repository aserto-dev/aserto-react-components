import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const Pill = styled.div<{ $backgroundColor?: string; $textColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
  color: ${({ $textColor }) => $textColor || theme.grey100};
  width: 120px;
  font-size: 12px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
`

export type StatusPillProps = {
  backgroundColor?: string
  textColor?: string
  children: string
  testId?: string
}

export const StatusPill: React.FC<StatusPillProps> = ({
  backgroundColor,
  textColor,
  children,
  testId,
}) => {
  return (
    <Pill $textColor={textColor} data-testid={testId} $backgroundColor={backgroundColor}>
      {children}
    </Pill>
  )
}
