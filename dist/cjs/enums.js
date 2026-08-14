"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAL = exports.Race = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (exports.Gender = Gender = {}));
var Race;
(function (Race) {
    Race[Race["Asian"] = 0] = "Asian";
    Race[Race["Black"] = 1] = "Black";
    Race[Race["Hispanic"] = 2] = "Hispanic";
})(Race || (exports.Race = Race = {}));
var PAL;
(function (PAL) {
    PAL[PAL["Sedentary"] = 0] = "Sedentary";
    PAL[PAL["Low"] = 1] = "Low";
    PAL[PAL["Active"] = 2] = "Active";
    PAL[PAL["VeryActive"] = 3] = "VeryActive";
})(PAL || (exports.PAL = PAL = {}));
//# sourceMappingURL=enums.js.map