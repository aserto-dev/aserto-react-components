import React from 'react'
import ReactSelect from 'react-select'
import './Select.css'

const Select = ({options, defaultValue, onChange, ...props}) => {
  const removeFocusBox = {
    outline: 'none',
    //borderColor: 'inherit',
    webkitBoxShadow: 'none',
    boxShadow: 'none',
    //borderColor: 'white'
  };

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
          color: '#ffffff'
        }
      };
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? '#298a8e' : (isSelected ? '#3e4347' : '#35393d'),
        color: (isFocused || isSelected) ? '#ffffff' : '#d7d8d8',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          backgroundColor: '#298a8e',
        },
      };
    },
    input: (styles, { isFocused }) => {
      return {
        ...styles,
        borderColor: '#8a959f'
      };
    },
    placeholder: styles => ({ ...styles, color: '#d7d8d8' }),
    singleValue: (styles, { data }) => ({ ...styles, color: '#d7d8d8', ...removeFocusBox }),
    menu: styles => ({...styles, backgroundColor: '#35393d'}),
    dropdownIndicator: styles => ({...styles, ':focus': { color: 'white' } }),
    indicatorSeparator: styles => ({...styles, fill: 'black' })
  };
  
  return (
    <div {...props}>
      <ReactSelect 
        className='react-select' 
        options={options} 
        defaultValue={defaultValue} 
        onChange={onChange}
        styles={colourStyles}
      />
    </div>
  )
}

export default Select