import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'

test('should render LoadingPage', () => {
    const result = shallow(<LoadingPage/>)
    expect(result).toMatchSnapshot()
})