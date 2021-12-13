import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { RadioButtonGroup } from '../../src/index'
import RadioButton from '../../src/components/RadioButtonGroup/RadioButton'

describe('<RadioButtonGroup/>', () => {
  describe('When a user interacts with a <BaseRadioButtonGroup>', () => {
    test('When unchecked <RadioButton> is clicked Then it becomes checked', () => {
      const onChange = jest.fn()

      const { getByTestId } = render(
        <RadioButtonGroup onChange={onChange} options={[{ label: 'a', value: 'a' }]} testId="a" />
      )

      const radioButton = getByTestId('a-a-radio-button')
      fireEvent.click(radioButton)

      expect(radioButton).toHaveAttribute('aria-checked', 'true')
    })

    test('When <RadioButtons> are toggled Then they transition consistently', () => {
      let checked = 'a'
      const onChange = (value: string) => {
        checked = value
      }

      const { getByTestId } = render(
        <RadioButtonGroup
          checked="a"
          onChange={onChange}
          options={[
            { label: 'a', value: 'a' },
            { label: 'b', value: 'b' },
          ]}
          testId="a"
        />
      )

      const radioButtonA = getByTestId('a-a-radio-button')
      const radioButtonB = getByTestId('a-b-radio-button')

      expect(checked).toBe('a')
      expect(radioButtonA).toHaveAttribute('aria-checked', 'true')
      expect(radioButtonB).not.toHaveAttribute('aria-checked', 'true')

      fireEvent.click(radioButtonB)

      expect(checked).toBe('b')
      expect(radioButtonA).not.toHaveAttribute('aria-checked', 'true')
      expect(radioButtonB).toHaveAttribute('aria-checked', 'true')

      fireEvent.click(radioButtonA)

      expect(checked).toBe('a')
      expect(radioButtonA).toHaveAttribute('aria-checked', 'true')
      expect(radioButtonB).not.toHaveAttribute('aria-checked', 'true')
    })
  })
})
