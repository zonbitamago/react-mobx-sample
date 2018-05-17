import React from 'react'
import { shallow } from 'enzyme'

import Counter from './Counter'

describe('Counter', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Counter {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})