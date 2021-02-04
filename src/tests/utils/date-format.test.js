import formatDate from "../../utils/date-format"

test('should format date in US way', () => {
    const result = formatDate(0)
    expect(result).toBe('January 1st, 1970')
})
