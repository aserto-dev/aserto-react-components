import React, { createContext, useCallback } from 'react'

export const RadioButtonGroupContext = createContext<RadioButtonGroupContext>({
  onSelectValue: () => {},
  selectedValue: undefined,
})

interface RadioButtonGroupContext {
  onSelectValue: (val: string) => void
  selectedValue: string
}

export interface UnstyledRadioButtonGroupProps {
  onChange?: (val: string) => void
  checked?: string
}

const UnstyledRadioButtonGroup: React.FC<
  Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> & UnstyledRadioButtonGroupProps
> = ({ children, onChange, checked, ...rest }) => {
  const onSelectValue = useCallback(
    (value: string) => {
      onChange?.(value)
    },
    [onChange]
  )

  return (
    <>
      <div {...rest} role="radiogroup">
        <RadioButtonGroupContext.Provider
          value={{ onSelectValue: onSelectValue, selectedValue: checked }}
        >
          {children}
        </RadioButtonGroupContext.Provider>
      </div>
    </>
  )
}

export default UnstyledRadioButtonGroup
