"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateDelta = dateDelta;
/*
  @param {string} unit type to be returned
  @param {Date} subtrahend
  @returns {Number} difference in units specified in the unit parameter
*/
function dateDelta(a, b, unit) {
    const units = {
        years: 1000 * 60 * 60 * 24 * 365,
        days: 1000 * 60 * 60 * 24,
        hours: 1000 * 60 * 60,
        minutes: 1000 * 60,
        seconds: 1000,
        milliseconds: 1
    }, difference = Math.abs(a.getTime() - b.getTime());
    return difference / units[unit];
}
//# sourceMappingURL=index.js.map