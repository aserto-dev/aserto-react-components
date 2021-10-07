import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactSelect, { components, NamedProps, StylesConfig } from 'react-select'
import { theme } from '../../theme'
import { Label } from '../Label'
import { Button } from '../Button'
import styled from 'styled-components'
import dots from './dots.svg'

const DotsButton = styled(Button)`
  float: right;
  width: 40px;
  height: 35px;
`

type MenuAlignment = 'bottom-left' | 'bottom-right' | 'right-bottom' | 'right-top'

export type SelectOption = {
  value: string | number
  label: string
  shouldStopPropagation?: string
  onClick?: () => void
  isDisabled?: boolean
}

export type ReactSelectElement = ReactSelect<SelectOption>

export interface SelectWithDotsProps
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
    | 'value'
  > {
  defaultValue?: SelectOption
  onChange?: (value: SelectOption) => void
  disabled?: boolean
  label?: string
  style?: React.CSSProperties
  disableLabel?: boolean
  shouldDisabledOptions?: boolean
  onBlur?: (firstSelectedOption?: SelectOption) => void
  menuAlignment?: MenuAlignment
}

const groupLabelStyle = {
  position: 'relative' as const,
  marginTop: -8,
  marginBottom: -3,
  marginLeft: -11,
  marginRight: -11,
  height: 1,
  backgroundColor: theme.grey,
}

const formatGroupLabel = () => <div style={groupLabelStyle} />

export const SelectWithDots: React.ForwardRefExoticComponent<
  SelectWithDotsProps & React.RefAttributes<ReactSelectElement>
> = React.forwardRef(
  (
    {
      defaultValue,
      onChange,
      label,
      disabled,
      style,
      disableLabel,
      name,
      shouldDisabledOptions,
      onBlur,
      menuAlignment = 'bottom-right',
      menuPortalTarget,
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

    const selectRef = useRef<ReactSelectElement | undefined>(undefined)

    const setSelectRef = useCallback(
      (selectElement: ReactSelectElement) => {
        if (typeof ref === 'function') {
          ref(selectElement)
        } else if (ref != null) {
          ref.current = selectElement
        }

        selectRef.current = selectElement
      },
      [ref, selectRef]
    )

    useEffect(() => {
      if (!open) {
        selectRef.current?.blur?.()
      }
    }, [open, selectRef])

    const CustomMenu = useCallback(
      ({ innerRef, innerProps, children }) => {
        const alignmentStyleOverrides: Record<MenuAlignment, React.CSSProperties> = {
          'bottom-left': {
            top: 39,
            left: 0,
          },
          'bottom-right': {
            top: 39,
            right: 0,
          },
          'right-bottom': {
            bottom: 0,
            left: 40,
            marginBottom: 1,
            marginLeft: 2,
          },
          'right-top': {
            top: 0,
            left: 40,
            marginTop: 1,
            marginLeft: 2,
          },
        }

        const alignmentStyleOverride = alignmentStyleOverrides[menuAlignment]
        if (menuPortalTarget != null && 'top' in alignmentStyleOverride) {
          alignmentStyleOverride.top = Number(alignmentStyleOverride.top) - 38
        }

        return (
          <div
            ref={innerRef}
            style={{
              zIndex: 20,
              position: 'absolute',
              width: 250,
              ...alignmentStyleOverride,
            }}
            {...innerProps}
          >
            {children}
          </div>
        )
      },
      [menuAlignment]
    )

    const ValueContainer = useCallback(({ children, ...rest }) => {
      return (
        <DotsButton {...rest} variant="secondary-borderless">
          <img src={dots} alt="see-more" /> {children}
        </DotsButton>
      )
    }, [])

    const Option = useCallback((props) => {
      return (
        <div>
          <components.Option
            {...props}
            isDisabled={props.isDisabled}
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

    const colourStyles: StylesConfig<SelectOption, false> = {
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
      group: (styles) => {
        return {
          ...styles,
          paddingBottom: 0,
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
        display: 'none',
      }),
      menu: (styles) => ({
        ...styles,
        backgroundColor: theme.primaryBlack,
        zIndex: 6,
        marginTop: -5,
      }),
      dropdownIndicator: (styles) => ({
        ...styles,
        display: 'none',
        // color: isDisabled ? theme.grey40 : theme.grey70,
      }),
      container: (style) => ({
        ...style,
        width: 40,
      }),
      menuList: (style) => ({
        ...style,
        zIndex: 5,
        padding: 0,
        border: `1px solid ${theme.grey50}`,
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
          value={null}
          isClearable={false}
          inputId={name}
          isSearchable={false}
          ref={setSelectRef}
          isDisabled={disabled}
          onFocus={() => {
            setOpen(true)
          }}
          onBlur={() => {
            setOpen(false)
            onBlur && onBlur(firstSelectedOption)
          }}
          defaultValue={defaultValue}
          closeMenuOnSelect={false}
          onChange={(option) => {
            setOpen(false)
            onChange(option)
          }}
          menuIsOpen={open}
          menuPortalTarget={menuPortalTarget}
          styles={colourStyles}
          formatGroupLabel={formatGroupLabel}
          components={{ ValueContainer, Option, Menu: CustomMenu }}
          placeholder=""
        />
      </div>
    )
  }
)
