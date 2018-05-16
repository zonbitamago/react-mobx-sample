import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<App {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})