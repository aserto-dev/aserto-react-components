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
  onChange?: (val: string) => void
  defaultSelected?: string
  label?: string
  value?: string
  testId?: string
}

const BaseRadioButtonGroup: React.FC<BaseRadioButtonGroupProps> = ({
  children,
  defaultSelected,
  onChange,
  value,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(value ?? defaultSelected)

  const onChangeOption = (value: string) => {
    setSelectedOption(value)
  }

  useEffect(() => {
    if (selectedOption !== undefined) {
      onChange?.(selectedOption)
    }
  }, [selectedOption])

  useEffect(() => {
    if (value) {
      setSelectedOption(value)
    }
  }, [value])

  return (
    <>
      <div role="radiogroup">
        <RadioButtonGroupContext.Provider
          value={{ onSelectValue: onChangeOption, selectedValue: selectedOption }}
        >
          {children}
        </RadioButtonGroupContext.Provider>
      </div>
    </>
  )
}

export default BaseRadioButtonGroup
