import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, InputProps } from '../Input'
import show from './show.svg'
import hide from './hide.svg'
import copy from './copy.svg'

const ActionableInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      fill: red;
    }
  }
`

export type ActionableInputProps = InputProps & {
  onClickCopy?: (value: string) => void
}

export const ActionableInput: React.FC<ActionableInputProps> = ({ onClickCopy, ...inputProps }) => {
  const [type, setType] = useState(inputProps.type || 'text')
  return (
    <ActionableInputContainer>
      <Input {...inputProps} type={type} />
      {onClickCopy && (
        <img src={copy} alt="copy" onClick={() => onClickCopy(String(inputProps.value))} />
      )}
      {type === 'password' ? (
        <img onClick={() => setType('text')} alt="show" src={show} />
      ) : (
        <img onClick={() => setType('password')} alt="hide" src={hide} />
      )}
    </ActionableInputContainer>
  )
}
