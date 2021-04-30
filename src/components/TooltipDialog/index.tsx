import styled from 'styled-components'
import { TooltipPrimitive } from '@atlaskit/tooltip'
import { theme } from '../../theme'

export const TooltipDialog = styled(TooltipPrimitive)`
  background: ${theme.grey30};
  font-size: 14px;
  color: ${theme.grey100};
  border-radius: 4px;
  border: 1px solid ${theme.grey40};
  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */
  max-width: 300px;
  padding: 8px;
`
