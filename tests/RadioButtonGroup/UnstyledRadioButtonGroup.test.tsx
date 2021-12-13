import React, { useContext } from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { UnstyledRadioButtonGroup, RadioButtonGroupContext } from '../../src/index'
import RadioButton from '../../src/components/RadioButtonGroup/RadioButton'

describe('<UnstyledRadioButtonGroup/>', () => {
  it('renders a radiogroup', () => {
    const { getByRole } = render(<UnstyledRadioButtonGroup />)
    expect(getByRole('radiogroup')).toBeVisible()
  })

  it('accepts HTML properties', () => {
    render(<UnstyledRadioButtonGroup data-base-radio-button-group-test="a" />)
    expect(document.querySelector('[data-base-radio-button-group-test="a"]')).toBeVisible()
  })

  it('renders its children', () => {
    const { getByRole, getByText } = render(
      <UnstyledRadioButtonGroup>
        <div>a</div>
        <div>
          <RadioButton disabled={false} value="" />
        </div>
        <div>b</div>
      </UnstyledRadioButtonGroup>
    )

    expect(getByText('a')).toBeVisible()
    expect(getByText('b')).toBeVisible()
    expect(getByRole('radio')).toBeVisible()
  })

  test('When no value provided Then no <RadioButton> is aria-checked', () => {
    const { getAllByRole } = render(
      <UnstyledRadioButtonGroup>
        <RadioButton disabled={false} value="a" />
        <RadioButton disabled={false} value="b" />
      </UnstyledRadioButtonGroup>
    )

    getAllByRole('radio').forEach((element) => {
      expect(element).not.toHaveAttribute('aria-checked', 'true')
    })
  })

  test('When value provided Then only matching <RadioButton> is aria-checked', () => {
    render(
      <UnstyledRadioButtonGroup checked="a">
        <div id="a">
          <RadioButton disabled={false} value="a" />
        </div>
        <div id="b">
          <RadioButton disabled={false} value="b" />
        </div>
      </UnstyledRadioButtonGroup>
    )

    const radioButtonA = document.getElementById('a').firstChild
    const radioButtonB = document.getElementById('b').firstChild

    expect(radioButtonA).toHaveAttribute('aria-checked', 'true')
    expect(radioButtonB).not.toHaveAttribute('aria-checked', 'true')
  })

  describe('When onChange is provided', () => {
    test('When `checked` is provided and it matches a <RadioButton/> Then onChange is not invoked on first render', () => {
      const onChange = jest.fn()

      render(
        <UnstyledRadioButtonGroup checked="a" onChange={onChange}>
          <RadioButton disabled={false} value="a" />
        </UnstyledRadioButtonGroup>
      )

      expect(onChange).not.toHaveBeenCalled()
    })

    test('When `checked` is provided and it does not match a <RadioButton/> Then onChange is not invoked on first render', () => {
      const onChange = jest.fn()

      render(
        <UnstyledRadioButtonGroup checked="b" onChange={onChange}>
          <RadioButton disabled={false} value="a" />
        </UnstyledRadioButtonGroup>
      )

      expect(onChange).not.toHaveBeenCalled()
    })

    test('When `checked` is not provided Then onChanged is not called on first render', () => {
      const onChange = jest.fn()

      render(
        <UnstyledRadioButtonGroup onChange={onChange}>
          <RadioButton disabled={false} value="a" />
        </UnstyledRadioButtonGroup>
      )

      expect(onChange).not.toHaveBeenCalled()
    })

    test('When unchecked <RadioButton> is clicked Then onChange is called with its value', () => {
      const onChange = jest.fn()

      const { getByRole } = render(
        <UnstyledRadioButtonGroup onChange={onChange}>
          <RadioButton disabled={false} value="a" />
        </UnstyledRadioButtonGroup>
      )

      fireEvent.click(getByRole('radio'))

      expect(onChange).toHaveBeenCalledWith('a')
    })

    test('When checked <RadioButton> is clicked Then onChange is not called', () => {
      const onChange = jest.fn()
      const { getByRole } = render(
        <UnstyledRadioButtonGroup onChange={onChange} checked="a">
          <RadioButton disabled={false} value="a" />
        </UnstyledRadioButtonGroup>
      )

      fireEvent.click(getByRole('radio'))

      expect(onChange).not.toHaveBeenCalled()
    })

    it('allows custom components to review and update the value', () => {
      const onChange = jest.fn()
      let firstRenderedValue: string
      let renderedOnSelectValue: (v: string) => void
      const ContextVerifier: React.FC = () => {
        const { onSelectValue, selectedValue } = useContext(RadioButtonGroupContext)
        firstRenderedValue = firstRenderedValue ?? selectedValue
        renderedOnSelectValue = onSelectValue
        return null
      }

      act(() => {
        render(
          <UnstyledRadioButtonGroup onChange={onChange} checked="a">
            <ContextVerifier />
          </UnstyledRadioButtonGroup>
        )
        renderedOnSelectValue('b')
      })

      expect(firstRenderedValue).toBe('a')
      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith('b')
    })
  })
})
