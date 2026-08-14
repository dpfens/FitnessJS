"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mass = exports.FfmAdultAthleteEstimator = exports.FfmAdultObeseEstimator = exports.FfmAdultLeanEstimator = exports.FfmAdolescentEstimator = exports.FfmChildEstimator = void 0;
const enums_js_1 = require("../enums.js");
/**
 * Lohman (1992) — fat-free mass in white boys and girls, 8-15 years.
 * @returns Fat Free Mass in kg
 */
class FfmChildEstimator {
    estimate({ height, weight, resistance, reactance }) {
        return (0.62 * (Math.pow(height, 2) / resistance) +
            0.21 * weight +
            0.1 * reactance +
            4.2);
    }
}
exports.FfmChildEstimator = FfmChildEstimator;
/**
 * Houtkooper et al. (1992) — fat-free mass in white boys and girls, 10-19 years.
 * @returns Fat Free Mass in kg
 */
class FfmAdolescentEstimator {
    estimate({ height, weight, resistance }) {
        return 0.61 * (Math.pow(height, 2) / resistance) + 0.25 * weight + 1.31;
    }
}
exports.FfmAdolescentEstimator = FfmAdolescentEstimator;
/**
 * Segal et al. (1988) — fat-free mass for lean adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF < .30. Men: %BF < .20.
 * @returns Fat Free Mass in kg
 */
class FfmAdultLeanEstimator {
    estimate({ gender, age, height, weight, resistance }) {
        if (gender === enums_js_1.Gender.Female) {
            return (0.000646 * Math.pow(height, 2) -
                0.014 * resistance +
                0.421 * weight +
                10.4);
        }
        return (0.0006636 * Math.pow(height, 2) -
            0.02117 * resistance +
            0.62854 * weight -
            0.1238 * age +
            9.33285);
    }
}
exports.FfmAdultLeanEstimator = FfmAdultLeanEstimator;
/**
 * Segal et al. (1988) — fat-free mass for obese adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF > .30. Men: %BF > .20.
 * @returns Fat Free Mass in kg
 */
class FfmAdultObeseEstimator {
    estimate({ gender, age, height, weight, resistance }) {
        if (gender === enums_js_1.Gender.Female) {
            return (0.00091186 * Math.pow(height, 2) -
                0.1466 * resistance +
                0.2999 * weight -
                0.07012 * age +
                9.37938);
        }
        return (0.0008858 * Math.pow(height, 2) -
            0.02999 * resistance +
            0.42688 * weight -
            0.07002 * age +
            14.52435);
    }
}
exports.FfmAdultObeseEstimator = FfmAdultObeseEstimator;
/**
 * Fornetti et al. (1999) for female athletes (18-27 years) and
 * Oppliger et al. (1991) for male athletes (19-40 years).
 * @returns Fat Free Mass in kg
 */
class FfmAdultAthleteEstimator {
    estimate({ gender, height, weight, resistance, reactance }) {
        if (gender === enums_js_1.Gender.Female) {
            return 0.282 * height + 0.415 * weight - 0.037 * resistance + 0.096 * reactance - 9.734;
        }
        return 0.186 * (Math.pow(height, 2) / resistance) + 0.701 * weight + 1.949;
    }
}
exports.FfmAdultAthleteEstimator = FfmAdultAthleteEstimator;
/**
 * @class
 * @classdesc estimates body composition (fat-free mass) using a
 * pluggable bioelectrical impedance analysis (BIA) Estimator
 */
class Mass {
    gender;
    age;
    height; // in cm
    weight; // in kg
    constructor(gender, age, height, weight) {
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    get baseParams() {
        return {
            gender: this.gender,
            age: this.age,
            height: this.height,
            weight: this.weight,
            resistance: NaN, // overwritten by callers below
        };
    }
    /**
     * Computes fat-free mass using a resistance-only Estimator.
     * @param Estimator - the FFM formula to apply
     * @param resistance - bioelectrical resistance in ohms
     * @returns Fat Free Mass in kg
     */
    estimateFfm(Estimator, resistance) {
        return Estimator.estimate({ ...this.baseParams, resistance });
    }
    /**
     * Computes fat-free mass using a resistance + reactance Estimator.
     * @param Estimator - the FFM formula to apply
     * @param resistance - bioelectrical resistance in ohms
     * @param reactance - bioelectrical reactance in ohms
     * @returns Fat Free Mass in kg
     */
    estimateFfmWithReactance(Estimator, resistance, reactance) {
        return Estimator.estimate({ ...this.baseParams, resistance, reactance });
    }
}
exports.Mass = Mass;
//# sourceMappingURL=mass.js.map