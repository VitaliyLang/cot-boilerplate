import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import SearchBar from '../components/NavBar/SearchBar'

describe('SearchBar', function() {
  const wrapper = shallow(<SearchBar />)
  const form = wrapper.find('form')

  it('It should submit a form', () => {
      console.log(form)
  })

})
