"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSJ = exports.RevisedHB = exports.HB = exports.BaseBMREstimator = void 0;
const enums_js_1 = require("../../enums.js");
/**
 * Base class for estimating Basal Metabolic Rate (BMR)
 * @class BaseBMREstimator
 */
class BaseBMREstimator {
    gender;
    constructor(gender) {
        this.gender = gender;
    }
}
exports.BaseBMREstimator = BaseBMREstimator;
/**
 * Harris-Benedict equation for estimating BMR
 * @class HB
 * @extends BaseBMREstimator
 */
class HB extends BaseBMREstimator {
    /**
     * Predicts BMR using the Harris-Benedict equation
     * @param dob Date of birth
     * @param weight Weight in kg
     * @param height Height in cm
     * @returns Estimated BMR in kcal/day
     *
     * @example
     * const hbEstimator = new Fit.cardio.energy.HB(Gender.Female);
     * const bmr = hbEstimator.predict(new Date(1990, 0, 1), 65, 170);
     * console.log(bmr); // Outputs the estimated BMR
     *
     * When to use: For general population BMR estimation, widely used but may overestimate in some cases
     */
    predict(age, weight, height) {
        if (this.gender === enums_js_1.Gender.Female) {
            return (9.5634 * weight) + (1.8496 * height) - (4.6756 * age) + 655.0955;
        }
        return (13.7516 * weight) + (5.0033 * height) - (6.7550 * age) + 66.4730;
    }
}
exports.HB = HB;
/**
 * Revised Harris-Benedict equation for estimating BMR
 * @class RevisedHB
 * @extends BaseBMREstimator
 */
class RevisedHB extends BaseBMREstimator {
    /**
     * Predicts BMR using the Revised Harris-Benedict equation
     * @param dob Date of birth
     * @param weight Weight in kg
     * @param height Height in cm
     * @returns Estimated BMR in kcal/day
     *
     * @example
     * const revisedHBEstimator = new Fit.cardio.energy.RevisedHB(Gender.Male);
     * const bmr = revisedHBEstimator.predict(new Date(1988, 5, 15), 80, 180);
     * console.log(bmr); // Outputs the estimated BMR
     *
     * When to use: For a more accurate BMR estimation compared to the original Harris-Benedict equation, especially for individuals with higher body mass
     */
    predict(age, weight, height) {
        if (this.gender === enums_js_1.Gender.Female) {
            return (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593;
        }
        return (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362;
    }
}
exports.RevisedHB = RevisedHB;
/**
 * Mifflin-St Jeor equation for estimating BMR
 * @class MSJ
 * @extends BaseBMREstimator
 */
class MSJ extends BaseBMREstimator {
    /**
     * Predicts BMR using the Mifflin-St Jeor equation
     * @param dob Date of birth
     * @param weight Weight in kg
     * @param height Height in cm
     * @returns Estimated BMR in kcal/day
     *
     * @example
     * const msjEstimator = new Fit.cardio.energy.MSJ(Gender.Female);
     * const bmr = msjEstimator.predict(new Date(1992, 3, 20), 65, 170);
     * console.log(bmr); // Outputs the estimated BMR
     *
     * When to use: Considered one of the most accurate equations for estimating BMR in non-obese individuals
     */
    predict(age, weight, height) {
        if (this.gender === enums_js_1.Gender.Female) {
            return (9.99 * weight + 6.25 * height - 4.92 * age - 161);
        }
        return (9.99 * weight + 6.25 * height - 4.92 * age + 5);
    }
}
exports.MSJ = MSJ;
//# sourceMappingURL=bmr.js.map