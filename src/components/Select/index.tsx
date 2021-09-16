import React, { useCallback } from 'react'
import ReactSelect, { components } from 'react-select'
import { theme } from '../../theme'
import { Label } from '../Label'

export type SelectOption = {
  value: string | number
  label: string
  shouldStopPropagation?: string
  onClick?: () => void
}

export type SelectProps = {
  options: readonly SelectOption[]
  defaultValue?: SelectOption
  onChange: (e: any) => void
  disabled?: boolean
  label?: string
  isLoading?: boolean
  value?: SelectOption | null
  style?: any
  disableLabel?: boolean
  name?: string
}

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  marginTop: -8,
  marginBottom: -3,
  marginLeft: -11,
  marginRight: -11,
  height: 1,
  backgroundColor: theme.grey,
}

const formatGroupLabel = () => <div style={groupStyles} />

export const Select = React.forwardRef<any, SelectProps>(
  (
    {
      options,
      defaultValue,
      onChange,
      label,
      disabled,
      isLoading,
      style,
      value,
      disableLabel,
      name,
      ...props
    },
    forRef
  ) => {
    const removeFocusBox = {
      outline: 'none',
      webkitBoxShadow: 'none',
      boxShadow: 'none',
    }

    const Option = useCallback((props) => {
      return (
        <div>
          <components.Option
            {...props}
            innerProps={{
              ...props.innerProps,
              onMouseDown: (e) => {
                if (props.data.shouldStopPropagation) {
                  e.stopPropagation()
                  props.data?.onClick()
                }
              },
            }}
          />
        </div>
      )
    }, [])

    const colourStyles = {
      control: (styles, { isDisabled, isFocused }) => {
        return {
          ...styles,
          backgroundColor: isDisabled ? theme.grey20 : theme.primaryBlack,
          color: isDisabled ? theme.grey40 : theme.grey100,
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
            ? theme.grey40
            : isSelected
            ? theme.grey20
            : theme.grey20,
          borderLeft: isSelected ? `5px solid ${theme.lochivarAccent3}` : '',
          color: isFocused ? theme.grey100 : theme.grey70,
          height: 36,
          fontSize: 14,
          cursor: isDisabled ? 'not-allowed' : 'default',
          ':active': {
            ...styles[':active'],
            backgroundColor: theme.grey40,
          },
        }
      },
      input: (styles) => {
        return {
          ...styles,
          color: theme.grey100,
          borderColor: theme.grey60,
        }
      },
      placeholder: (styles, { isDisabled }) => ({
        ...styles,
        color: isDisabled ? theme.grey40 : theme.grey90,
      }),
      singleValue: (styles, { isDisabled }) => ({
        ...styles,
        color: isDisabled ? theme.grey40 : theme.grey100,
        ...removeFocusBox,
      }),
      menu: (styles) => ({
        ...styles,
        backgroundColor: 'transparent',
        zIndex: 6,
        marginTop: -5,
      }),
      dropdownIndicator: (styles, { isDisabled }) => ({
        ...styles,
        color: isDisabled ? theme.grey40 : theme.grey70,
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
        {label && (
          <Label htmlFor={name} disabled={disableLabel}>
            {label}
          </Label>
        )}
        <ReactSelect
          {...props}
          name={name}
          inputId={name}
          value={value}
          ref={forRef || null}
          isLoading={isLoading}
          isDisabled={disabled}
          options={options}
          defaultValue={defaultValue}
          onChange={onChange}
          styles={colourStyles}
          formatGroupLabel={formatGroupLabel}
          components={{ Option }}
        />
      </div>
    )
  }
)
