import {
  endOfMonth,
  endOfToday,
  endOfYear,
  startOfMonth,
  startOfToday,
  startOfYear,
  subMonths,
  subWeeks,
} from 'date-fns';

export const DEFAULT_START_DAY = subWeeks(startOfToday(), 2);
export const DEFAULT_END_DAY = endOfToday();
export const DEFAULT_START_MONTH = startOfMonth(subMonths(new Date(), 2));
export const DEFAULT_END_MONTH = endOfMonth(new Date());
export const DEFAULT_START_YEAR = startOfYear(new Date());
export const DEFAULT_END_YEAR = endOfYear(new Date());
