"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdultBmiFatEstimator = exports.ChildBmiFatEstimator = exports.WagnerFatEstimator = exports.SiriFatEstimator = exports.SchutteFatEstimator = exports.OrtizFatEstimator = exports.BrozekFatEstimator = void 0;
exports.waistFat = waistFat;
const enums_js_1 = require("../enums.js");
/** Brozek formula */
class BrozekFatEstimator {
    estimate({ bd }) {
        return 4.57 / bd - 4.142;
    }
}
exports.BrozekFatEstimator = BrozekFatEstimator;
/** Ortiz formula (African American females) */
class OrtizFatEstimator {
    estimate({ bd }) {
        return 4.832 / bd - 4.369;
    }
}
exports.OrtizFatEstimator = OrtizFatEstimator;
/** Schutte formula (African American males) */
class SchutteFatEstimator {
    estimate({ bd }) {
        return 4.374 / bd - 3.928;
    }
}
exports.SchutteFatEstimator = SchutteFatEstimator;
/** Siri formula */
class SiriFatEstimator {
    estimate({ bd }) {
        return 4.95 / bd - 4.5;
    }
}
exports.SiriFatEstimator = SiriFatEstimator;
/** Wagner formula (African American males) */
class WagnerFatEstimator {
    estimate({ bd }) {
        return 4.86 / bd - 4.39;
    }
}
exports.WagnerFatEstimator = WagnerFatEstimator;
/** Estimates body fat percentage from BMI in children. */
class ChildBmiFatEstimator {
    estimate({ gender, age, weight, height }) {
        const bmi = weight / Math.pow(height, 2);
        if (gender === enums_js_1.Gender.Female) {
            return (1.51 * bmi - 0.7 * age + 1.4) / 100;
        }
        return (1.51 * bmi - 0.7 * age - 3.6 + 1.4) / 100;
    }
}
exports.ChildBmiFatEstimator = ChildBmiFatEstimator;
/** Estimates body fat percentage from BMI in adults. */
class AdultBmiFatEstimator {
    estimate({ gender, age, weight, height }) {
        const bmi = weight / Math.pow(height, 2);
        if (gender === enums_js_1.Gender.Female) {
            return (1.2 * bmi - 0.23 * age - 5.4) / 100;
        }
        return (1.2 * bmi - 0.23 * age - 10.8 - 5.4) / 100;
    }
}
exports.AdultBmiFatEstimator = AdultBmiFatEstimator;
/**
 * Estimates body fat percentage from waist circumference (US Navy method).
 *
 * @param gender - biological sex used to select the regression coefficients
 * @param weight - weight in kg
 * @param waistCircumference - waist circumference in meters
 * @returns body fat percentage as a decimal
 */
function waistFat(gender, weight, waistCircumference) {
    const weightLb = weight * 2.2;
    const waistCircumferenceInches = waistCircumference * 39.3701;
    if (gender === enums_js_1.Gender.Female) {
        return (100 * (-76.76 + 4.15 * waistCircumferenceInches - 0.082 * weightLb)) / weightLb;
    }
    return (100 * (-98.42 + 4.15 * waistCircumferenceInches - 0.082 * weightLb)) / weightLb;
}
//# sourceMappingURL=fat.js.map