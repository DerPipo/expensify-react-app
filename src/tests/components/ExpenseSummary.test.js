import React from 'react'
import { shallow } from "enzyme"
import { ExpenseSummary } from "../../components/ExpenseSummary"

test('should render 0 expenses correctly', () => {
    const result = shallow(<ExpenseSummary expenseCount={0} expensesTotal={0} />)
    expect(result).toMatchSnapshot()
})

test('should render 1 expense correctly', () => {
    const result = shallow(<ExpenseSummary expenseCount={1} expensesTotal={1234} />)
    expect(result).toMatchSnapshot()
})

test('should render 2 expenses correctly', () => {
    const result = shallow(<ExpenseSummary expenseCount={2} expensesTotal={100050} />)
    expect(result).toMatchSnapshot()
})
