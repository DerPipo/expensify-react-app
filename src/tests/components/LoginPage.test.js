import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from "../../components/LoginPage";

test('should render login page', () => {
    const result = shallow(<LoginPage startLogin={() => {}} />)
    expect(result).toMatchSnapshot()
})

test('should call startLogin on button click', () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find('button').simulate('click')
    expect(startLogin).toBeCalledTimes(1)
})
