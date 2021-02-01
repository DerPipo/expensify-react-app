import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import { sortByAmount } from '../../actions/filters'

let setStartDate, setEndDate, setTextFilter, sortBy, wrapper

beforeEach(() => {
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setTextFilter = jest.fn()
    sortBy = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTextFilter={setTextFilter}
            sortBy={sortBy} 
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alternative filters correctly', () => {
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', { target: { value } })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    wrapper.setProps({ filters: altFilters })
    const value = 'date'
    wrapper.find('select').simulate('change', { target: { value }})
    expect(sortBy).toHaveBeenLastCalledWith(value)
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', { target: { value }})
    expect(sortBy).toHaveBeenLastCalledWith(value)
})

test('should handle date changes', () => {
    const moment = jest.requireActual('moment')
    const startDate = moment()
    const endDate = startDate.add(3, 'days')
    wrapper.find('DateRangePicker').simulate('datesChange', { startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
    const focus = 'startDate'
    wrapper.find('DateRangePicker').simulate('focusChange', focus)
    expect(wrapper.state('calendarFocused')).toEqual(focus)
})

