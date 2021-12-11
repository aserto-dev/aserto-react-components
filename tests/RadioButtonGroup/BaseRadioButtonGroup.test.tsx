import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { BaseRadioButtonGroup, RadioButtonGroupContext } from '../../src/index'
import RadioButton from '../../src/components/RadioButtonGroup/RadioButton'

describe('<BaseRadioButtonGroup/>', () => {
  test('It renders a radiogroup', () => {
    const { getAllByRole } = render(<BaseRadioButtonGroup />)
    expect(getAllByRole('radiogroup')).toHaveLength(1)
  })

  test('It accepts HTML properties', () => {
    render(<BaseRadioButtonGroup id="a" />)
    expect(document.getElementById('a')).toBeVisible()
  })

  test('It renders its children', () => {
    const { getByRole, getByText } = render(
      <BaseRadioButtonGroup>
        <div>{'a'}</div>
        <div>
          <RadioButton disabled={false} value={''} />
        </div>
        <div>{'b'}</div>
      </BaseRadioButtonGroup>
    )

    expect(getByText('a')).toBeVisible()
    expect(getByText('b')).toBeVisible()
    expect(getByRole('radio')).toBeVisible()
  })

  test('When no value provided Then no <RadioButton> is aria-checked', () => {
    render(
      <BaseRadioButtonGroup>
        <RadioButton disabled={false} id={'a'} value={'a'} />
        <RadioButton disabled={false} id={'b'} value={'b'} />
      </BaseRadioButtonGroup>
    )

    const radioButtonA = document.getElementById('a')
    const radioButtonB = document.getElementById('b')

    expect(radioButtonA).not.toHaveAttribute('aria-checked', 'true')
    expect(radioButtonB).not.toHaveAttribute('aria-checked', 'true')
  })

  test('When value provided Then only matching <RadioButton> is aria-checked', () => {
    render(
      <BaseRadioButtonGroup checked="a">
        <RadioButton disabled={false} id={'a'} value={'a'} />
        <RadioButton disabled={false} id={'b'} value={'b'} />
      </BaseRadioButtonGroup>
    )

    const radioButtonA = document.getElementById('a')
    const radioButtonB = document.getElementById('b')

    expect(radioButtonA).toHaveAttribute('aria-checked', 'true')
    expect(radioButtonB).not.toHaveAttribute('aria-checked', 'true')
  })

  describe('When onChange is provided', () => {
    test('When `checked` is provided and it matches a <RadioButton/> Then onChange is not invoked on first render', () => {
      const onCheck = jest.fn()

      render(
        <BaseRadioButtonGroup checked="a" onCheck={onCheck}>
          <RadioButton disabled={false} id={'a'} value={'a'} />
        </BaseRadioButtonGroup>
      )

      expect(onCheck).not.toHaveBeenCalled()
    })

    test('When `checked` is provided and it does not match a <RadioButton/> Then onChange is not invoked on first render', () => {
      const onCheck = jest.fn()

      render(
        <BaseRadioButtonGroup checked="b" onCheck={onCheck}>
          <RadioButton disabled={false} id={'a'} value={'a'} />
        </BaseRadioButtonGroup>
      )

      expect(onCheck).not.toHaveBeenCalled()
    })

    test('When value is not provided Then onChanged is not called on first render', () => {
      const onChange = jest.fn()

      render(
        <BaseRadioButtonGroup onCheck={onChange}>
          <RadioButton disabled={false} id={'a'} value={'a'} />
        </BaseRadioButtonGroup>
      )

      expect(onChange).not.toHaveBeenCalled()
    })

    test('When unchecked <RadioButton> is clicked Then onSelectValue is called with its value', () => {
      const onCheck = jest.fn()
      render(
        <BaseRadioButtonGroup onCheck={onCheck}>
          <RadioButton disabled={false} id={'a'} value={'a'} />
        </BaseRadioButtonGroup>
      )

      fireEvent.click(document.getElementById('a'))

      expect(onCheck).toHaveBeenCalledWith('a')
    })

    test('When checked <RadioButton> is clicked Then onSelectValue is not called', () => {
      const onCheck = jest.fn()
      render(
        <BaseRadioButtonGroup onCheck={onCheck} checked="a">
          <RadioButton disabled={false} id={'a'} value={'a'} />
        </BaseRadioButtonGroup>
      )

      fireEvent.click(document.getElementById('a'))

      expect(onCheck).not.toHaveBeenCalled()
    })

    test('It allows custom components to review and update the value', () => {
      const onCheck = jest.fn()
      let firstRenderedValue: string
      let renderedOnSelectValue: (v: string) => void

      act(() => {
        render(
          <BaseRadioButtonGroup onCheck={onCheck} checked="a">
            <RadioButtonGroupContext.Consumer>
              {({ selectedValue, onSelectValue }) => {
                firstRenderedValue = firstRenderedValue ?? selectedValue
                renderedOnSelectValue = onSelectValue
                return null
              }}
            </RadioButtonGroupContext.Consumer>
          </BaseRadioButtonGroup>
        )
        renderedOnSelectValue('b')
      })

      expect(firstRenderedValue).toBe('a')
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith('b')
    })
  })
})
