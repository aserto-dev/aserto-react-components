import React from 'react'
import ReactSelect from 'react-select'
import styled from 'styled-components'

interface Option {
  value: string | number
  label: string
}

export type SelectProps = {
  options: Array<Option>
  defaultValue?: string
  onChange: () => void
}

const ReactSelectContainer = styled(ReactSelect)`
  font-size: 14px;
  color: #d7d8d8;
  text-decoration: none solid rgb(215, 216, 216);
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: white;
`

export const Select: React.FC<SelectProps> = ({ options, defaultValue, onChange, ...props }) => {
  const removeFocusBox = {
    outline: 'none',
    webkitBoxShadow: 'none',
    boxShadow: 'none',
  }

  const colourStyles = {
    control: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? '#585f66' : '#35393d',
        color: isFocused ? '#ffffff' : '#d7d8d8',
        borderColor: isFocused ? '#35393d' : '#35393d',
        borderWidth: 0,
        ':hover': {
          ...styles[':hover'],
          backgroundColor: '#585f66',
          borderColor: '#585f66',
          color: '#ffffff',
        },
      }
    },
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? '#298a8e' : isSelected ? '#3e4347' : '#35393d',
        color: isFocused || isSelected ? '#ffffff' : '#d7d8d8',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          backgroundColor: '#298a8e',
        },
      }
    },
    input: (styles) => {
      return {
        ...styles,
        borderColor: '#8a959f',
      }
    },
    placeholder: (styles) => ({ ...styles, color: '#d7d8d8' }),
    singleValue: (styles) => ({ ...styles, color: '#d7d8d8', ...removeFocusBox }),
    menu: (styles) => ({ ...styles, backgroundColor: '#35393d' }),
    dropdownIndicator: (styles) => ({ ...styles, ':focus': { color: 'white' } }),
    indicatorSeparator: (styles) => ({ ...styles, fill: 'black' }),
  }

  return (
    <div {...props}>
      <ReactSelectContainer
        className="react-select"
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        styles={colourStyles}
      />
    </div>
  )
}

export default Select
