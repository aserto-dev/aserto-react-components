import React from 'react'
import styled from 'styled-components'

export const PaddedContent = styled.div<{ paddingTop?: number }>`
  padding-top: ${({ paddingTop }) => paddingTop || 185}px;
  @media (max-width: 1200px) {
    padding-top: 175px;
  }
`
