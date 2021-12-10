import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { BaseRadioButtonGroup } from '../src/index'
import RadioButton from '../src/components/RadioButtonGroup/RadioButton'

describe('<BaseRadioButtonGroup>', () => {
  test('It renders nothing when no children are provided', () => {
    const { container } = render(<BaseRadioButtonGroup />)
    expect(container).toBeEmptyDOMElement()
  })

  test('It renders its children', () => {
    const { getByText } = render(
      <BaseRadioButtonGroup>
        <div>{'a'}</div>
        <div>{'b'}</div>
      </BaseRadioButtonGroup>
    )

    expect(getByText('a')).toBeDefined()
    expect(getByText('b')).toBeDefined()
  })

  test('It renders Radio Buttons', () => {
    const { container } = render(
      <BaseRadioButtonGroup>
        <RadioButton disabled={false} value={''} />
      </BaseRadioButtonGroup>
    )

    expect(container).toBeDefined()
  })
})

describe('<BaseRadioButtonGroup> with <RadioButton>s', () => {
  test('When initialized with a <RadioButton>s value Then it renders that <RadioButton> as selected', () => {
    const { container } = render(
      <BaseRadioButtonGroup value="a">
        <RadioButton disabled={false} value={'a'} />
      </BaseRadioButtonGroup>
    )
    expect(container).toBeEmptyDOMElement()
  })
})
