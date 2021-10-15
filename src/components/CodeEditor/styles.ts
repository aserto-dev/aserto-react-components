import { css } from 'styled-components'
import { HIGHLIGHT_CODE_STYLES } from '../Highlight/styles'

export const EDITOR_CODE_STYLES = css`
  ${HIGHLIGHT_CODE_STYLES};
  // Must be consistent with Editor's textarea styles
  white-space: pre-wrap;
  word-break: keep-all;
  overflow-wrap: break-word;
`
