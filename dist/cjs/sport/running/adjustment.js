"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.temperature = temperature;
/*
@param {Number} time of performance (seconds)
@param {Number} current temperature (farenheit)
@return {Number} temperature-adjusted time (seconds)
*/
function temperature(seconds) {
    const factors = {
        "60F": 1,
        "65F": 1.0075,
        "70F": 1.015,
        "75F": 1.0225,
        "80F": 1.03,
        "85F": 1.0375,
        "90F": 1.045,
        "95F": 1.0525,
        "100F": 1.06
    };
    return seconds * factors[seconds + "F"];
}
//# sourceMappingURL=adjustment.js.map