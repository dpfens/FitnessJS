interface Date {
  delta(unit: string, date ? : Date) : number;
}

/*
  @param {string} unit type to be returned
  @param {Date} subtrahend
  @returns {Number} difference in units specified in the unit parameter
*/
Date.prototype.delta = function(unit: string, date = new Date()) {
    const units: any = {
      days : 1000 * 60 * 60 * 24,
      hours: 1000 * 60 * 60,
      milliseconds: 1,
      minutes: 1000 * 60,
      seconds: 1000,
      years : 1000 * 60 * 60 * 24 * 365,
    };
    const difference: number = Math.abs( this.getTime() - date.getTime() );
    return difference / units[unit];
};
