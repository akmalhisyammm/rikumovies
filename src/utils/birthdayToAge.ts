import { DateTime } from 'luxon';

export const birthdayToAge = (birthday: string, deathday?: string) => {
  const start = DateTime.fromISO(birthday);
  const end = deathday ? DateTime.fromISO(deathday) : DateTime.now();

  return end.diff(start, 'years').as('years').toFixed(0);
};
