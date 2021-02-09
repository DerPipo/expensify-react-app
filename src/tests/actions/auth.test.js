import { login, logout } from "../../actions/auth"

test('should generate login action', () => {
    const uid = '123456'
    const displayName = 'Hans Wurst'
    const result = login(uid, displayName)
    expect(result).toEqual({
        type: 'LOGIN',
        uid,
        displayName
    })
})

test('should generate logout action', () => {
    const result = logout()
    expect(result).toEqual({
        type: 'LOGOUT'
    })
})