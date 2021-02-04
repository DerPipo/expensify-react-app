import moment from 'moment'

const formatDate = (timestamp) => moment(timestamp).format('MMMM Do, YYYY')

export default formatDate