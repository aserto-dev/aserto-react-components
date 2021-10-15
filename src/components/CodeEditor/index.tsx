import React, { useCallback } from 'react'
import Editor from 'react-simple-code-editor'
import styled from 'styled-components'
import { theme } from '../../theme'
import { Code, SupportedLanguage } from '../Highlight'
import { EDITOR_CODE_STYLES } from './styles'

const StyledEditor = styled(Editor)`
  ${EDITOR_CODE_STYLES};
`

interface StyledClassNameForwarderProps {
  className?: string
  children: (className: string | undefined) => React.ReactElement
}

const StyledClassNameForwarder = ({ className, children }: StyledClassNameForwarderProps) => {
  return children(className)
}

type State = 'error'

const StyledTextAreaClassNameForwarder = styled(StyledClassNameForwarder)<{ state: State }>`
  border-radius: 4px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #7d7a7a;
    -webkit-box-shadow: 0 0 0 1px #7d7a7a;
  }

  ${({ state }) => {
    if (state === 'error') {
      return `
        box-shadow: 0 0 0 1px ${theme.mojoAccent3};
        -webkit-box-shadow: 0 0 0 1px ${theme.mojoAccent3};

        &:focus {
          box-shadow: 0 0 0 1px ${theme.mojoAccent3};
          -webkit-box-shadow: 0 0 0 1px ${theme.mojoAccent3};  
        }
      `
    }
  }}
`

const StyledCode = styled(Code)`
  ${EDITOR_CODE_STYLES};
`

type TextAreaProps = Pick<
  React.ComponentPropsWithoutRef<'textarea'>,
  | 'autoFocus'
  | 'className'
  | 'style'
  | 'disabled'
  | 'form'
  | 'maxLength'
  | 'minLength'
  | 'name'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'onClick'
  | 'onFocus'
  | 'onBlur'
  | 'onKeyUp'
  | 'onKeyDown'
>

export interface CodeEditorProps extends TextAreaProps {
  value: string
  onChange: (value: string) => void
  language: SupportedLanguage
  state?: State
}

export const CodeEditor = ({ value, onChange, language, state, ...rest }: CodeEditorProps) => {
  const highlight = useCallback(
    (code: string) => {
      // The size of the container is determined by the size of the code element, which
      // allows the textarea to grow to fill the height of the container. When adding
      // empty new lines, the code element will not grow so there is not enough space
      // for the new line to render in the textarea, which causes the textarea to scroll
      // and have its position become out of sync with the code element. Adding an extra
      // newline will force the code element to grow.
      if (code.endsWith('\n')) {
        code = code + '\n'
      }
      return <StyledCode language={language}>{code}</StyledCode>
    },
    [language]
  )

  return (
    <StyledTextAreaClassNameForwarder state={state}>
      {(textareaClassName) => (
        // @ts-expect-error Broken `react-simple-code-editor` types
        <StyledEditor
          value={value}
          onValueChange={onChange}
          highlight={highlight}
          padding={10}
          tabSize={4}
          style={{ overflow: 'visible' }}
          textareaClassName={textareaClassName}
          {...rest}
        />
      )}
    </StyledTextAreaClassNameForwarder>
  )
}
