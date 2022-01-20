import { Duration } from 'luxon';

export const runtimeFormat = (runtime: number) => {
  const duration = Duration.fromObject({ minutes: runtime });

  return duration.shiftTo('hours', 'minutes').toObject();
};
