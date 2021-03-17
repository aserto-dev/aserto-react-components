import React from 'react'
import ReactSelect from 'react-select'
import { theme } from '../../theme'
import { Label } from '../Label'

export type SelectOption = {
  value: string | number
  label: string
}

export type SelectProps = {
  options: Array<SelectOption>
  defaultValue?: string
  onChange: (e: any) => void
  disabled?: boolean
  label?: string
  isLoading?: boolean
  ref?: any
  style?: any
}

// eslint-disable-next-line react/display-name
export const Select = React.forwardRef<SelectProps, any>(
  (
    { options, defaultValue, onChange, label, disabled, ref, isLoading, style, ...props },
    forRef
  ) => {
    const removeFocusBox = {
      outline: 'none',
      webkitBoxShadow: 'none',
      boxShadow: 'none',
    }

    const colourStyles = {
      control: (styles, { isDisabled, isFocused }) => {
        return {
          ...styles,
          backgroundColor: isDisabled ? theme.grey20 : theme.primaryBlack,
          color: theme.grey100,
          borderColor: isFocused ? theme.lochivarAccent2 : theme.grey40,
          opacity: isDisabled ? 0.6 : 1,
          outline: isFocused ? 'none' : '',
          boxShadow: 'none',
          borderWidth: 1,
          ':hover': {
            ...styles[':hover'],
            backgroundColor: theme.grey10,
            borderColor: theme.lochivarAccent1,
            color: theme.grey100,
          },
        }
      },
      option: (styles, { isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isDisabled
            ? theme.grey20
            : isFocused
            ? theme.grey30
            : isSelected
            ? theme.grey20
            : theme.grey20,
          color: isFocused ? theme.grey100 : theme.grey70,
          height: 36,
          fontSize: 14,
          cursor: isDisabled ? 'not-allowed' : 'default',
          ':active': {
            ...styles[':active'],
            backgroundColor: theme.grey30,
          },
        }
      },
      input: (styles) => {
        return {
          ...styles,
          borderColor: theme.grey60,
        }
      },
      placeholder: (styles) => ({ ...styles, color: theme.grey90 }),
      singleValue: (styles) => ({ ...styles, color: theme.grey100, ...removeFocusBox }),
      menu: (styles) => ({ ...styles, backgroundColor: theme.primaryBlack, zIndex: 6 }),
      dropdownIndicator: (styles, { isDisabled }) => ({
        ...styles,
        color: isDisabled ? theme.grey30 : theme.grey70,
      }),
      menuList: (style) => ({
        ...style,
        zIndex: 5,
        borderRadius: 6,
      }),
      indicatorSeparator: (styles, { isDisabled }) => ({
        ...styles,
        backgroundColor: isDisabled ? theme.grey30 : theme.grey30,
      }),
    }
    return (
      <div style={style}>
        {label && <Label disabled={disabled}>{label}</Label>}
        <ReactSelect
          {...props}
          ref={forRef || ref || null}
          isLoading={isLoading}
          isDisabled={disabled}
          options={options}
          defaultValue={defaultValue}
          onChange={onChange}
          styles={colourStyles}
        />
      </div>
    )
  }
)
