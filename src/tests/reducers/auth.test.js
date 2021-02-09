import authReducer from '../../reducers/auth'

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({})
})

test('should set uid and displayName for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123',
        displayName: 'Hans'
    }
    const state = authReducer({}, action)
    expect(state).toEqual({
        uid: action.uid,
        displayName: action.displayName
    })
})

test('should reset uid and displayName', () => {
    const action = {
        type: 'LOGOUT'
    }
    const prevState = {
        uid: 'abcdef',
        displayName: 'Hansi'
    }
    const state = authReducer(prevState, action)
    expect(state).toEqual({})
})
