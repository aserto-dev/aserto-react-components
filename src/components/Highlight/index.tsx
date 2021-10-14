import React, { useLayoutEffect, useRef } from 'react'
import Prism from 'prismjs'
import styled from 'styled-components'
import { HIGHLIGHT_CODE_STYLES, TOKEN_STYLES } from './styles'

const StyledCode = styled.code`
  ${HIGHLIGHT_CODE_STYLES};
  ${TOKEN_STYLES};
`

const Pre = styled.pre`
  overflow: visible;
  margin: 0;
`

export type SupportedLanguage = 'rego' | 'javascript' | 'typescript'

interface CodeProps extends React.ComponentPropsWithoutRef<'code'> {
  language?: SupportedLanguage
}

export const Code: React.FC<CodeProps> = ({
  children,
  language = 'javascript',
  className = '',
  ...rest
}) => {
  const codeRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    if (codeRef.current !== null) {
      Prism.highlightElement(codeRef.current)
    }
  }, [children, codeRef])

  return (
    <StyledCode ref={codeRef} className={`language-${language} ${className}`} {...rest}>
      {children}
    </StyledCode>
  )
}

interface HighlightProps extends React.ComponentPropsWithoutRef<'pre'> {
  language?: SupportedLanguage
}

export const Highlight: React.FC<HighlightProps> = ({ language, children, ...rest }) => {
  return (
    <Pre tabIndex={-1} {...rest}>
      <Code language={language} children={children} />
    </Pre>
  )
}
