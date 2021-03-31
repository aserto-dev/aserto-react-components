import styled, { css } from 'styled-components'
import { theme } from '../../theme'

export const Label = styled.div<{ disabled?: boolean; $small?: boolean }>`
  ${({ $small }) => {
    return $small
      ? css`
          font-size: 12px;
        `
      : css`
          font-weight: 600;
          font-size: 16px;
        `
  }}

  margin-bottom: 8px;
  color: ${({ disabled }) => (disabled ? theme.grey40 : theme.grey100)};
`
