interface Date {
  delta(unit: string, date?: Date): number
}

Date.prototype.delta = function(unit: string, date= new Date()) {
    let units: any = {
      years : 1000 * 60 * 60 * 24 * 365,
      days : 1000 * 60 * 60 * 24,
      hours: 1000 * 60 * 60,
      minutes: 1000 * 60,
      seconds: 1000,
      milliseconds: 1
    },
    difference: number = this.getTime() - date.getTime();
    return difference / units[unit];
}