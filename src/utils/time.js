import moment from 'moment';

export function twelveHourTime(seconds) {
  return moment.unix(seconds).format('h:mm a');
}
export function twentyFourHourTime(seconds) {
  return moment.unix(seconds).format('k:mm');
}
export function twelveHourTimeFromDate(date) {
  return moment(date).format('h:mm a');
}
export function twentyFourHourTimeFromDate(date) {
  return moment(date).format('k:mm');
}
export function fullDateString(seconds) {
  return moment.unix(seconds).format('dddd, MMMM Do YYYY');
}
export function timeStampToSeconds(timestamp) {
  return moment(timestamp).format('X');
}
export function currentTime() {
  return moment()
    .format()
    .split('T')[0];
}
export function startOfDay(value) {
  return moment()
    .startOf('day')
    .seconds(value)
    .format('HH:mm:ss');
}
