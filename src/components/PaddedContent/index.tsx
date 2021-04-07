import React from 'react'
import styled from 'styled-components'

export const PaddedContent = styled.div<{ paddingTop?: number; mobileBreakPoint?: number }>`
  padding-top: ${({ paddingTop }) => paddingTop || 185}px;
  @media (max-width: ${({ mobileBreakPoint }) => mobileBreakPoint || 991}px) {
    padding-top: 175px;
  }
`
