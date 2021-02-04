import numeral from 'numeral'

const formatCurrency = (cents) => numeral(cents / 100).format('$0,0.00')

export default formatCurrency