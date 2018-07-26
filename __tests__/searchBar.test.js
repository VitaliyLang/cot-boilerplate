import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { withTheme } from 'styled-components'
import SearchBar from '../components/NavBar/SearchBar'

configure({ adapter: new Adapter() })

describe('SearchBar', function () {
  const wrapper = mount(<SearchBar theme={withTheme} />)
  const form = wrapper.find('form')

  it('It should render a searchbar', () => {
    expect(wrapper.length).toBe(1)
  })

  it('It should submit a form', () => {
    form.simulate('submit')
  })
})
