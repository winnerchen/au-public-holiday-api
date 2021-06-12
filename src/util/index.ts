import moment from 'moment';

export const mapperFnMap = {
  state: (holiday: Holiday) => holiday.state.toUpperCase(),
  name: (holiday: Holiday) => holiday.name.toUpperCase(),
  year: (holiday: Holiday) => moment(holiday.date).year().toString()
}