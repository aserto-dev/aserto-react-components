import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'

import { RadioButtonGroupContext } from '../../src/index'
import RadioButton from '../../src/components/RadioButtonGroup/RadioButton'

describe('<RadioButton>', () => {
  it('renders a radio', () => {
    const { getAllByRole } = render(<RadioButton value="a" />)
    expect(getAllByRole('radio')).toHaveLength(1)
  })

  it('accepts HTML properties', () => {
    render(<RadioButton id="a" disabled={false} value="a" />)
    expect(document.getElementById('a')).toBeVisible()
  })

  it('respects a provided tabIndex value', () => {
    render(<RadioButton aria-disabled={false} id="a" tabIndex={42} value="a" />)
    expect(document.getElementById('a')).toHaveAttribute('tabIndex', '42')
  })

  describe('When it is created as disabled', () => {
    let renderResult: RenderResult
    let radioButton: HTMLElement

    beforeEach(() => {
      renderResult = render(<RadioButton disabled={true} value="" />)
      radioButton = renderResult.getByRole(`radio`)
    })

    it('has no tab index', () => {
      expect(radioButton).not.toHaveAttribute('tabIndex')
    })

    it('is aria-disabled', () => {
      expect(radioButton).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('When it is not created as disabled', () => {
    let renderResult: RenderResult
    let radioButton: HTMLElement

    beforeEach(() => {
      renderResult = render(<RadioButton disabled={false} value="" />)
      radioButton = renderResult.getByRole(`radio`)
    })

    it('has a tab index', () => {
      expect(radioButton).toHaveAttribute('tabIndex')
    })

    it('is not aria-disabled', () => {
      expect(radioButton).not.toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('When rendered in a <RadioButtonGroupContext.Provider/>', () => {
    test('When its value matches the selectedValue Then it is aria-checked', () => {
      const { getByRole } = render(
        <RadioButtonGroupContext.Provider value={{ selectedValue: 'a', onSelectValue: () => {} }}>
          <RadioButton disabled={false} value="a" />
        </RadioButtonGroupContext.Provider>
      )

      const radioButton = getByRole(`radio`)

      expect(radioButton).toHaveAttribute('aria-checked', 'true')
    })

    test('When its value does not match the selectedValue Then it is not aria-checked', () => {
      const { getByRole } = render(
        <RadioButtonGroupContext.Provider value={{ selectedValue: 'a', onSelectValue: () => {} }}>
          <RadioButton disabled={false} value="b" />
        </RadioButtonGroupContext.Provider>
      )

      const radioButton = getByRole(`radio`)

      expect(radioButton).not.toHaveAttribute('aria-checked', 'true')
    })

    test('When unchecked and clicked Then it invokes onSelectValue', () => {
      const onSelectValue = jest.fn()

      const { getByRole } = render(
        <RadioButtonGroupContext.Provider
          value={{ selectedValue: 'a', onSelectValue: onSelectValue }}
        >
          <RadioButton disabled={false} value="b" />
        </RadioButtonGroupContext.Provider>
      )

      fireEvent.click(getByRole(`radio`))

      expect(onSelectValue).toHaveBeenCalledWith('b')
    })

    test('When checked and clicked Then it does not invoke onSelectValue', () => {
      const onSelectValue = jest.fn()

      const { getByRole } = render(
        <RadioButtonGroupContext.Provider
          value={{ selectedValue: 'a', onSelectValue: onSelectValue }}
        >
          <RadioButton disabled={false} value="a" />
        </RadioButtonGroupContext.Provider>
      )

      fireEvent.click(getByRole(`radio`))

      expect(onSelectValue).not.toHaveBeenCalledWith('b')
    })
  })
})
