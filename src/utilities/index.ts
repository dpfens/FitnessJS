export type UnitTime = 'years' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds'

/*
  @param {string} unit type to be returned
  @param {Date} subtrahend
  @returns {Number} difference in units specified in the unit parameter
*/
export function dateDelta(a: Date, b: Date, unit: UnitTime) {
  const units: Record<UnitTime, number> = {
    years : 1000 * 60 * 60 * 24 * 365,
    days : 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000,
    milliseconds: 1
  },
  difference: number = Math.abs(a.getTime() - b.getTime() );
  return difference / units[unit];
}