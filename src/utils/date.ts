import moment from 'moment';

export const format = (date: string) => moment(date).format('YYYY/MM/DD HH:mm');
