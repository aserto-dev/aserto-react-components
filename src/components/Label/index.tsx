import styled from 'styled-components'
import { theme } from '../../theme'

export const Label = styled.div<{ disabled?: boolean }>`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  color: ${({ disabled }) => (disabled ? theme.grey40 : theme.grey100)};
`
