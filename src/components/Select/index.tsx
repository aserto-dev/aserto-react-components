import React, { useCallback } from 'react'
import ReactSelect, {
  components,
  GroupBase,
  OptionProps,
  OptionsOrGroups,
  Props,
  SelectInstance,
  StylesConfig,
} from 'react-select'
import { theme } from '../../theme'
import { Label } from '../Label'

export type SelectOption = {
  value: string | number
  label: string
  shouldStopPropagation?: boolean
  onClick?: () => void
}

export type SelectOptions = OptionsOrGroups<SelectOption, GroupBase<SelectOption>>

export type ReactSelectElement = SelectInstance<SelectOption>

export interface SelectProps
  extends Omit<
    Props<SelectOption, false>,
    'isDisabled' | 'inputId' | 'styles' | 'formatGroupId' | 'components'
  > {
  defaultValue?: SelectOption
  disabled?: boolean
  label?: string
  value?: SelectOption | null
  style?: React.CSSProperties
  disableLabel?: boolean
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

export const Select: React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<ReactSelectElement>
> = React.forwardRef(
  ({ onChange, label, disabled, style, value, disableLabel, name, ...props }, ref) => {
    const removeFocusBox = {
      outline: 'none',
      webkitBoxShadow: 'none',
      boxShadow: 'none',
    }

    const Option = useCallback((props: OptionProps<SelectOption, false>) => {
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

    const colourStyles: StylesConfig<SelectOption, false> = {
      control: (styles, { isDisabled, isFocused }) => {
        return {
          ...styles,
          minHeight: 36,
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
          lineHeight: '20px',
          cursor: isDisabled ? 'not-allowed' : 'default',
          ':active': {
            ...styles[':active'],
            backgroundColor: theme.grey40,
          },
        }
      },
      group: (styles) => {
        return {
          ...styles,
          paddingBottom: 0,
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
        marginTop: 1,
      }),
      dropdownIndicator: (styles, { isDisabled }) => ({
        ...styles,
        color: isDisabled ? theme.grey40 : theme.grey70,
        padding: 7,
      }),
      menuList: (style) => ({
        ...style,
        zIndex: 5,
        padding: 0,
      }),
      indicatorSeparator: (styles, { isDisabled }) => ({
        ...styles,
        backgroundColor: isDisabled ? theme.grey30 : theme.grey30,
      }),
      valueContainer: (styles) => ({
        ...styles,
        fontSize: 14,
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
          ref={ref}
          isDisabled={disabled}
          onChange={onChange}
          styles={colourStyles}
          formatGroupLabel={formatGroupLabel}
          components={{ Option }}
        />
      </div>
    )
  }
)
