import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { mapTestIdToProps } from '../../utils'

const SwitchBackground = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  -webkit-transition: background-color 0.2s;
  -moz-transition: background-color 0.2s;
  transition: background-color 0.2s;
  border-radius: 34px;
`

const SwitchLabel = styled.label`
  display: inline-block;
  height: 31px;
  position: relative;
  width: 56px;
  margin-bottom: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const SwitchInput = styled.input`
  width: 0;
  border: 1px solid #2a2a2a;

  height: 0;
  overflow: hidden;
`

const SwitchHandle = styled.div<{ $isChecked?: boolean }>`
  bottom: 2px;
  height: 27px;
  left: 2px;
  position: absolute;
  width: 27px;
  border-radius: 50%;
  transform: translateX(0);
  outline: none;
  ${({ $isChecked }) => {
    return $isChecked ? 'transform: translateX(26px)' : ''
  }};
  background-color: #4a4a4a;
`

export type SwitchButtonProps = {
  className?: string
  checked: boolean
  onChange: (checked: boolean) => void
  onColor?: string
  offColor?: string
  handleColor?: string
  focusShadow?: string
  disabled?: boolean
  [props: string]: any
  testId?: string
}

export const SwitchButton = ({
  className,
  checked,
  onChange,
  onColor,
  offColor,
  handleColor,
  focusShadow,
  disabled,
  testId,
  ...labelProps
}: SwitchButtonProps) => {
  const [hasOutline, setOutline] = useState(false)
  const [lastMouseUpTime, setMouseUpTime] = useState(0)

  const handleChange = () => {
    onChange(!checked)
  }

  const onMouseUp = () => {
    setMouseUpTime(Date.now())
  }

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <SwitchLabel
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        filter: disabled ? 'brightness(0.9)' : 'unset',
      }}
      {...labelProps}
      {...mapTestIdToProps(testId)}
    >
      <SwitchBackground
        style={{
          backgroundColor: checked ? onColor || theme.lochivar100 : offColor || theme.grey20,
        }}
      />
      <SwitchHandle
        {...mapTestIdToProps(`${testId}-handle`)}
        $isChecked={checked}
        style={{
          WebkitTransition: 'transform .2s',
          MozTransition: 'transform .2s',
          transition: 'transform .2s',
          boxShadow: hasOutline ? focusShadow || 'rgba(0,0,0,0.5) 0px 0px 2px 3px' : undefined,
        }}
      />
      <SwitchInput
        role="switch"
        aria-checked={checked}
        type="checkbox"
        defaultChecked={checked}
        onChange={handleChange}
        onFocus={() => {
          // prevent focus after user clicked switch, allows keyboard to focus switch
          if (Date.now() - lastMouseUpTime > 25) setOutline(true)
        }}
        onBlur={() => {
          setOutline(false)
        }}
        disabled={disabled}
        {...mapTestIdToProps(`${testId}-switch-input`)}
      />
    </SwitchLabel>
  )
}
