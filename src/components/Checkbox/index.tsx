import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { Label } from '../Label'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{ checked?: boolean }>`
  display: inline-block;
  border: 1px solid ${props => props.checked ? theme.primary : theme.grey50};;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? theme.primary : 'transparent'};
  display: flex;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${theme.grey40};
  }
`

const Icon = styled.svg`
  fill: none;
  stroke: ${theme.fullWhite};
  stroke-width: 2px;
`

const HorizontalLabel = styled(Label)`
  display: flex;
  margin-bottom: 0px;
  align-items: center;
`

export type CheckboxProps = {
  checked?: boolean
  onChange: (checked: boolean) => void
  label?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return <CheckboxContainer>
    <HorizontalLabel $small>
      <HiddenCheckbox type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}/>
      <StyledCheckbox checked={checked}>
        {checked && <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>}
      </StyledCheckbox>
      {label || null}
    </HorizontalLabel>
  </CheckboxContainer>
}