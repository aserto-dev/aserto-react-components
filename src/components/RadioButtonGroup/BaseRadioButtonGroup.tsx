import React, { createContext, useCallback, useState } from 'react'

export const RadioButtonGroupContext = createContext<RadioButtonGroupContext>({
  onSelectValue: () => {},
  selectedValue: undefined,
})

interface RadioButtonGroupContext {
  onSelectValue: (val: string) => void
  selectedValue: string
}

export interface BaseRadioButtonGroupProps {
  onChange?: (val: string) => void
  checked?: string
}

const BaseRadioButtonGroup: React.FC<
  Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> & BaseRadioButtonGroupProps
> = ({ children, onChange, checked, ...rest }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(checked)

  const onSelectValue = useCallback(
    (value: string) => {
      setSelectedValue(value)
      onChange?.(value)
    },
    [onChange]
  )

  return (
    <>
      <div {...rest} role="radiogroup">
        <RadioButtonGroupContext.Provider
          value={{ onSelectValue: onSelectValue, selectedValue: selectedValue }}
        >
          {children}
        </RadioButtonGroupContext.Provider>
      </div>
    </>
  )
}

export default BaseRadioButtonGroup
