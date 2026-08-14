"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vVo2Max = vVo2Max;
exports.hrSpeed = hrSpeed;
exports.hrPace = hrPace;
const swain_js_1 = require("../../conversion/swain.js");
/*
calculate velocity at VO2Max
vO2Max in mL/(kg•min)
returns speed in km/h
*/
function vVo2Max(vO2Max) {
    return vO2Max / 3.5;
}
/*
  @param {Number} percentHR in decimal form
  @param {Number} vO2Max in mL/(kg•min)
  @returns {Number} speed in km/h
*/
function hrSpeed(percentHR, vO2Max) {
    const vO2MaxPercent = (0, swain_js_1.percentVO2Max)(percentHR);
    const vO2Speed = vVo2Max(vO2Max);
    return vO2MaxPercent * vO2Speed;
}
/*
  @param {Number} percentHR in decimal form
  @param {Number} vO2Max in mL/(kg•min)
  @returns {Number} pace in min/mile
*/
function hrPace(percentHR, vO2Max) {
    const kph = hrSpeed(percentHR, vO2Max);
    // convert kph to min/km
    return 60 / kph;
}
//# sourceMappingURL=pace.js.map