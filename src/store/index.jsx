import moment from 'moment'
import { createGlobalState } from 'react-hooks-global-state'
import Dog from "../assets/dog.jpg"

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  createModal: 'scale-0',
  updateModal: 'scale-0',
  deleteModal: 'scale-0',
  backModal: 'scale-0',
  connectedAccount: '',
  projects: [{
    imageURL:Dog,
    title:"FundChain",
    expiresAt:"2023",
    owner:"0x07eD49...5d375f3",
    backers:"0xa73...51d75",
    status:1,
    raised:0.7,
    cost:1,
    id:1,
  }],
  project: null,
  stats: null,
  backers: [],
})

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars)
    let end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

const daysRemaining = (days) => {
  const todaysdate = moment()
  days = Number((days + '000').slice(0))
  days = moment(days).format('YYYY-MM-DD')
  days = moment(days)
  days = days.diff(todaysdate, 'days')
  return days == 1 ? '1 day' : days + ' days'
}

export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  truncate,
  daysRemaining,
}
