import styled from 'styled-components'
import { TooltipPrimitive } from '@atlaskit/tooltip'
import { theme } from '../../theme'

export const TooltipDialog = styled(TooltipPrimitive)`
  background: ${theme.grey10};
  font-size: 12px;
  color: ${theme.grey100};
  border-radius: 4px;
  border: 1px solid ${theme.grey30};
  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */
  max-width: 300px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.35);
  padding: 8px;
`
