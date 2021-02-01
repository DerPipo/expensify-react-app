// import actualMoment from 'moment'
// export default (timestamp = 0) => actualMoment(0)

const moment = jest.requireActual('moment')
export default (timestamp = 0) => moment(0)