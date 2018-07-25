import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import data from '../db'
const { customers } = data

import Last5Customers from '../components/dashboard/Last5Customers/index'

describe('Last5Customers', function() {
  const wrapper = shallow(<Last5Customers customers={customers} fetchError={null} />)
  const wrapper_for_error = shallow(<Last5Customers customers={null} fetchError={'Error'} />)
  const customer_list = wrapper.find('tbody tr')

  it('It should render customers component', () => {
    expect(wrapper.length).toBe(1)
  })

  it('It should check If rendered customers are equal to the number of customers in the database', () => {
    expect(customer_list.length).toBe(customers.length)
  })

  it('It should output no candidates message', () => {
    if (!customer_list.length) {
      const no_candidates_message = wrapper.find('p').text()
      expect(no_candidates_message).toBe('No customers viewed')
    }
  })

  it('It should output error If we have not candidates table', () => {
      const error = wrapper_for_error.find('HighlightStrip')
      expect(error.length).toBe(1);
  })
})
