import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 42 }))
store.dispatch(decrementCount({ decrementBy: 53 }))
store.dispatch(decrementCount({}))
store.dispatch(resetCount())
store.dispatch(setCount({count: 123}))
store.dispatch(setCount({}))
store.dispatch(incrementCount({ incrementBy: 42 }))


// store.dispatch({
//     type: 'INCREMENT'
// })
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
// store.dispatch({
//     type: 'RESET'
// })
// store.dispatch({
//     type: 'DECREMENT'
// })
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// })

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

unsubscribe()