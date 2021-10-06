import React, { useCallback, useEffect, useState } from 'react'
import ReactSelect, { components, NamedProps } from 'react-select'
import { theme } from '../../theme'
import { Label } from '../Label'
import { Button } from '../Button'
import styled from 'styled-components'

const RemoveFromTenant = styled.div`
  &:hover {
    background-color: ${theme.grey10};
    border-color: ${theme.lochivarAccent1};
    color: ${theme.grey100};
  }
`

export type SelectOption = {
  value: string | number
  label: string
  shouldStopPropagation?: string
  onClick?: () => void
}

export type ReactSelectElement = ReactSelect<SelectOption>

export interface SelectWithoutControlProps
  extends Omit<
    NamedProps<SelectOption>,
    | 'onFocus'
    | 'onBlur'
    | 'isDisabled'
    | 'isClearable'
    | 'isSearchable'
    | 'closeMenuOnSelect'
    | 'menuIsOpen'
    | 'inputId'
    | 'styles'
    | 'formatGroupId'
    | 'components'
  > {
  options: readonly SelectOption[]
  defaultValue?: SelectOption
  onChange?: (value: SelectOption | null) => void
  disabled?: boolean
  label?: string
  value?: SelectOption | null
  style?: React.CSSProperties
  disableLabel?: boolean
  onClickRemoveTenant: () => void
  onClickSave: () => void
  onClickCancel: (firstSelectedOption?: SelectOption) => void
  shouldDisabledOptions?: boolean
  removeTenantText?: string
  onBlur?: (firstSelectedOption?: SelectOption) => void
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

const menuHeaderStyle = {
  padding: '4px 12px',
  background: theme.grey20,
  color: theme.mojoAccent3,
  borderTop: `1px solid ${theme.grey30}`,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}

const removeFromTenantStyle = {
  padding: '4px 12px',
  background: theme.grey20,
  color: theme.mojoAccent3,
  borderTop: `1px solid ${theme.grey30}`,
  cursor: 'pointer',
  marginTop: -4,
}

export const SelectWithoutControl: React.ForwardRefExoticComponent<
  SelectWithoutControlProps & React.RefAttributes<ReactSelectElement>
> = React.forwardRef(
  (
    {
      options,
      defaultValue,
      onChange,
      label,
      disabled,
      style,
      value,
      disableLabel,
      name,
      onClickRemoveTenant,
      onClickSave,
      onClickCancel,
      shouldDisabledOptions,
      removeTenantText,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const [firstSelectedOption, setFirstSelectedOption] = useState<SelectOption | null>(null)
    const removeFocusBox = {
      outline: 'none',
      webkitBoxShadow: 'none',
      boxShadow: 'none',
    }

    useEffect(() => {
      if (defaultValue) {
        setFirstSelectedOption(defaultValue)
      }
    }, [defaultValue])

    const CustomMenu = useCallback(
      ({ innerRef, innerProps, children }) => {
        return (
          <div
            ref={innerRef}
            style={{
              zIndex: 20,
              position: 'absolute',
              width: 250,
              left: -150,
              paddingBottom: 0,
            }}
            {...innerProps}
          >
            {children}
            <RemoveFromTenant
              style={removeFromTenantStyle}
              onClick={() => {
                onClickRemoveTenant()
                setOpen(false)
              }}
            >
              {removeTenantText || 'Remove member from tenant'}
            </RemoveFromTenant>
            <div style={menuHeaderStyle}>
              <Button
                size="sm"
                style={{
                  marginRight: 10,
                }}
                variant="secondary"
                onClick={() => {
                  setOpen(false)

                  onClickCancel && onClickCancel(firstSelectedOption)
                }}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                disabled={shouldDisabledOptions}
                onClick={() => {
                  onClickSave()
                  setOpen(false)
                }}
              >
                Save
              </Button>
            </div>
          </div>
        )
      },
      [onClickRemoveTenant, onClickCancel, onClickSave]
    )

    const Option = useCallback((props) => {
      return (
        <div>
          <components.Option
            {...props}
            isDisabled={shouldDisabledOptions}
            innerProps={{
              ...props.innerProps,
              onMouseDown: (e) => {
                if (shouldDisabledOptions) {
                  return
                }
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
          backgroundColor: 'transparent',
          color: theme.grey70,
          border: 'none',
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
          borderLeft: isSelected ? `5px solid ${theme.lochivarAccent3}` : '',
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
        width: '100%',
        textAlign: 'right',
        overflow: 'auto',
        ...removeFocusBox,
      }),
      menu: (styles) => ({
        ...styles,
        backgroundColor: theme.primaryBlack,
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
      indicatorSeparator: (styles) => ({
        ...styles,
        display: 'none',
      }),
      valueContainer: (styles) => ({
        ...styles,
        overflow: 'none',
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
          isClearable={false}
          inputId={name}
          isSearchable={false}
          ref={ref}
          isDisabled={disabled}
          options={options}
          onFocus={() => {
            setOpen(true)
          }}
          onBlur={() => {
            setOpen(false)
            onBlur && onBlur(firstSelectedOption)
          }}
          defaultValue={defaultValue}
          closeMenuOnSelect={false}
          onChange={onChange}
          menuIsOpen={open}
          styles={colourStyles}
          formatGroupLabel={formatGroupLabel}
          components={{ Option, Menu: CustomMenu }}
        />
      </div>
    )
  }
)
