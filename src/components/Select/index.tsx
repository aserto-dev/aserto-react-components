import React from 'react'
import ReactSelect from 'react-select'
import { theme } from '../../theme'
import { Label } from '../Label'

interface Option {
  value: string | number
  label: string
}

export type SelectProps = {
  options: Array<Option>
  defaultValue?: string
  onChange: () => void
  disabled?: boolean
  label?: string
}

export const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  onChange,
  label,
  disabled,
  ...props
}) => {
  const removeFocusBox = {
    outline: 'none',
    webkitBoxShadow: 'none',
    boxShadow: 'none',
  }

  const colourStyles = {
    control: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? theme.grey20 : theme.primaryBlack,
        color: theme.grey100,
        borderColor: theme.grey40,
        opacity: isDisabled ? 0.6 : 1,
        borderWidth: 1,
        ':hover': {
          ...styles[':hover'],
          backgroundColor: theme.grey10,
          borderColor: theme.grey60,
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
          ? theme.lochivarAccent3
          : isSelected
          ? '#3e4347'
          : '#35393d',
        color: isFocused || isSelected ? theme.grey100 : theme.grey60,
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          backgroundColor: theme.lochivarAccent1,
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
    singleValue: (styles) => ({ ...styles, color: theme.grey40, ...removeFocusBox }),
    menu: (styles) => ({ ...styles, backgroundColor: theme.primaryBlack }),
    dropdownIndicator: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? theme.grey30 : theme.grey70,
    }),
    indicatorSeparator: (styles, { isDisabled }) => ({
      ...styles,
      backgroundColor: isDisabled ? theme.grey30 : theme.grey30,
    }),
  }

  return (
    <div {...props}>
      {label && <Label disabled={disabled}>{label}</Label>}
      <ReactSelect
        isDisabled={disabled}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        styles={colourStyles}
      />
    </div>
  )
}

export default Select
