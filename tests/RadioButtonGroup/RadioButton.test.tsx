import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'

import { RadioButtonGroupContext } from '../../src/index'
import RadioButton from '../../src/components/RadioButtonGroup/RadioButton'

describe('<RadioButton>', () => {
  test('It renders a radio', () => {
    const { getAllByRole } = render(<RadioButton disabled={false} value="a" />)
    expect(getAllByRole('radio')).toHaveLength(1)
  })

  test('It accepts HTML properties', () => {
    render(<RadioButton id="a" disabled={false} value="a" />)
    expect(document.getElementById('a')).toBeVisible()
  })

  test('It overwrites any HTML properties that conflict', () => {
    render(<RadioButton aria-disabled={false} id="a" disabled={true} value="a" />)
    expect(document.getElementById('a')).toHaveAttribute('aria-disabled', 'true')
  })

  describe('When it is created as disabled', () => {
    let renderResult: RenderResult
    let radioButton: HTMLElement

    beforeEach(() => {
      renderResult = render(<RadioButton disabled={true} value={''} />)
      radioButton = renderResult.getByRole(`radio`)
    })

    test('It has no tab index', () => {
      expect(radioButton).not.toHaveAttribute('tabIndex')
    })

    test('It is aria-disabled', () => {
      expect(radioButton).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('When it is not created as disabled', () => {
    let renderResult: RenderResult
    let radioButton: HTMLElement

    beforeEach(() => {
      renderResult = render(<RadioButton disabled={false} value={''} />)
      radioButton = renderResult.getByRole(`radio`)
    })

    test('It has a tab index', () => {
      expect(radioButton).toHaveAttribute('tabIndex')
    })

    test('It is not aria-disabled', () => {
      expect(radioButton).not.toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('When rendered in a <RadioButtonGroupContext.Provider/>', () => {
    test('When its value matches the selectedValue Then it is aria-checked', () => {
      const { getByRole } = render(
        <RadioButtonGroupContext.Provider
          value={{ selectedValue: 'a', onSelectValue: () => undefined }}
        >
          <RadioButton disabled={false} value={'a'} />
        </RadioButtonGroupContext.Provider>
      )

      const radioButton = getByRole(`radio`)

      expect(radioButton).toHaveAttribute('aria-checked', 'true')
    })

    test('When its value does not match the selectedValue Then it is not aria-checked', () => {
      const { getByRole } = render(
        <RadioButtonGroupContext.Provider
          value={{ selectedValue: 'a', onSelectValue: () => undefined }}
        >
          <RadioButton disabled={false} value={'b'} />
        </RadioButtonGroupContext.Provider>
      )

      const radioButton = getByRole(`radio`)

      expect(radioButton).not.toHaveAttribute('aria-checked', 'true')
    })

    test('When clicked Then it invokes onSelectValue', () => {
      const onSelectValue = jest.fn()

      const { getByRole } = render(
        <RadioButtonGroupContext.Provider
          value={{ selectedValue: 'a', onSelectValue: onSelectValue }}
        >
          <RadioButton disabled={false} value={'b'} />
        </RadioButtonGroupContext.Provider>
      )

      fireEvent.click(getByRole(`radio`))

      expect(onSelectValue).toHaveBeenCalledWith('b')
    })
  })
})
