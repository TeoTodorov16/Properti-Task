/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('the "App" component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <App />
  )
  })

  it('should have an `input` element', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsMatchingElement(<input />)).toBe(true)
  })

  describe('the user populates the input', () => {
    const inputNum = '123'

    beforeEach(() => {
      const input = wrapper.find('input').first()
      input.simulate('change', {
        target: { value: inputNum }
      })
    })
    it('should update the state property `inputNum`', () => {
      expect(
      wrapper.state().inputNum
    ).toEqual(inputNum)
    })
  })
})
