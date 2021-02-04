import formatCurrency from "../../utils/currency-format"

test('should format $ currency in US format correctly', () => {
    const result = formatCurrency(123456)
    expect(result).toBe('$1,234.56')
})