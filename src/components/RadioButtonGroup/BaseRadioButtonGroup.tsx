import React, { createContext, useEffect, useState } from 'react'

export const RadioButtonGroupContext = createContext<RadioButtonGroupContext>({
  onSelectValue: () => undefined,
  selectedValue: undefined,
})

interface RadioButtonGroupContext {
  onSelectValue: (val: string) => void
  selectedValue: string
}

export interface BaseRadioButtonGroupProps {
  onCheck?: (val: string) => void
  checked?: string
}

const BaseRadioButtonGroup: React.FC<
  React.ComponentPropsWithoutRef<'div'> & BaseRadioButtonGroupProps
> = ({ children, onCheck, checked, ...rest }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(checked)

  useEffect(() => {
    if (selectedValue !== checked) {
      onCheck?.(selectedValue)
    }
  }, [checked, selectedValue])

  return (
    <>
      <div {...rest} role="radiogroup">
        <RadioButtonGroupContext.Provider
          value={{ onSelectValue: setSelectedValue, selectedValue: selectedValue }}
        >
          {children}
        </RadioButtonGroupContext.Provider>
      </div>
    </>
  )
}

export default BaseRadioButtonGroup
