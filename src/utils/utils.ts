import moment from 'moment';

export default {
  formatTimeDayMonthYear(date?: moment.MomentInput) {
    return moment(date).format('HH:mm - DD/MM/YYYY');
  },

  formatDayMonthYearTime(date?: moment.MomentInput) {
    return moment(date).format('DD/MM/YYYY - HH:mm');
  },

  formatDayMonthYear(date?: moment.MomentInput) {
    return moment(date).format('DD/MM/YYYY');
  },

  formatTime(date?: moment.MomentInput) {
    return moment(date).format('HH:mm');
  },

  formatTimeWithSeconds(date?: moment.MomentInput) {
    return moment(date).format('HH:mm:ss');
  },

  getExpireMinutes(minutes: number) {
    return new Date(new Date().setMinutes(new Date().getMinutes() + minutes));
  },

  getExpireDate(day: number) {
    return new Date(new Date().setDate(new Date().getDate() + day));
  },
};
