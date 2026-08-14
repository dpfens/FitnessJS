"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyWaterNeed = dailyWaterNeed;
/*
@param {Double} weight in kg
@returns {Double} L/day of water
*/
function dailyWaterNeed(weight) {
    return 0.033 * weight;
}
//# sourceMappingURL=hydration.js.map