"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdultTEE = exports.ChildTEE = exports.TEEEstimator = void 0;
const enums_js_1 = require("../../enums.js");
/**
 * Base class for estimating Total Energy Expenditure (TEE).
 *
 * Subclasses implement {@link TEEEstimator.predict} using coefficients
 * drawn from a specific research paper or population (e.g. children,
 * adults). The base class also provides {@link TEEEstimator.fromActivity},
 * which is population-independent.
 *
 * @class TEEEstimator
 */
class TEEEstimator {
    /** Gender used to select the coefficient set for prediction */
    gender;
    /** Physical Activity Level used to select the coefficient set for prediction */
    pal;
    /**
     * @param gender Gender used to select the correct coefficient set
     * @param pal Physical Activity Level used to select the correct coefficient set
     */
    constructor(gender, pal) {
        this.gender = gender;
        this.pal = pal;
    }
    /**
     * estimates energy expenditure from a single bout of physical activity.
     *
     * @param weight Weight in kg
     * @param mets Metabolic Equivalent of Task (MET) value for the activity
     * @returns Energy expenditure in kcal/hour
     *
     * @example
     * const teeEstimator = new Fit.cardio.energy.TEEEstimator(Gender.Male, PAL.Active);
     * const energyExpenditure = teeEstimator.fromActivity(75, 6);
     * console.log(energyExpenditure);
     *
     * When to use: To estimate energy expenditure for a specific activity based on its MET value
     */
    fromActivity(weight, mets) {
        return (mets * 3.5 * weight) / 200;
    }
}
exports.TEEEstimator = TEEEstimator;
/**
 * ChildTEE coefficients by gender and PAL.
 *
 * Source: [TODO - cite paper/table, e.g. IOM (2005) Dietary Reference
 * Intakes for Energy, EER equations for children/adolescents].
 *
 * To update a formula, edit the relevant row here rather than touching
 * {@link ChildTEE.predict}.
 */
const CHILD_TEE_COEFFICIENTS = {
    [enums_js_1.Gender.Male]: {
        [enums_js_1.PAL.Sedentary]: { base: 88.5, ageCoef: 61.9, palFactor: 1.00, weightCoef: 26.7, heightCoef: 903 },
        [enums_js_1.PAL.Low]: { base: 88.5, ageCoef: 61.9, palFactor: 1.13, weightCoef: 26.7, heightCoef: 903 },
        [enums_js_1.PAL.Active]: { base: 88.5, ageCoef: 61.9, palFactor: 1.26, weightCoef: 26.7, heightCoef: 903 },
        [enums_js_1.PAL.VeryActive]: { base: 88.5, ageCoef: 61.9, palFactor: 1.42, weightCoef: 26.7, heightCoef: 903 },
    },
    [enums_js_1.Gender.Female]: {
        [enums_js_1.PAL.Sedentary]: { base: 135.3, ageCoef: 30.8, palFactor: 1.00, weightCoef: 10, heightCoef: 934 },
        [enums_js_1.PAL.Low]: { base: 135.3, ageCoef: 30.8, palFactor: 1.16, weightCoef: 10, heightCoef: 934 },
        [enums_js_1.PAL.Active]: { base: 135.3, ageCoef: 30.8, palFactor: 1.31, weightCoef: 10, heightCoef: 934 },
        [enums_js_1.PAL.VeryActive]: { base: 135.3, ageCoef: 30.8, palFactor: 1.56, weightCoef: 10, heightCoef: 934 },
    },
};
/**
 * Estimates Total Energy Expenditure (TEE) for children and adolescents.
 *
 * @class ChildTEE
 * @extends TEEEstimator
 */
class ChildTEE extends TEEEstimator {
    /**
     * Predicts TEE for children based on gender, physical activity level,
     * age, weight, and height, using the {@link CHILD_TEE_COEFFICIENTS}
     * table.
     *
     * @param params Age (years), weight (kg), and height (m) to predict from
     * @returns Estimated TEE in kcal/day
     * @throws Error if no coefficients are defined for this gender/PAL combination
     *
     * @example
     * const childTEEEstimator = new Fit.cardio.energy.ChildTEE(Gender.Male, PAL.Active);
     * const tee = childTEEEstimator.predict({ age: 8, weight: 35, height: 1.40 });
     * console.log(tee); // Outputs the estimated TEE
     *
     * When to use: For estimating total energy expenditure in children and adolescents, taking into account their growth and development
     */
    predict({ age, weight, height }) {
        const coeffs = CHILD_TEE_COEFFICIENTS[this.gender]?.[this.pal];
        if (!coeffs) {
            throw new Error(`No ChildTEE coefficients defined for gender=${this.gender}, pal=${this.pal}`);
        }
        const { base, ageCoef, palFactor, weightCoef, heightCoef } = coeffs;
        return base - ageCoef * age + palFactor * (weightCoef * weight + heightCoef * height);
    }
}
exports.ChildTEE = ChildTEE;
/**
 * AdultTEE coefficients by gender and PAL.
 *
 * Source: [TODO - cite paper/table, e.g. IOM (2005) Dietary Reference
 * Intakes for Energy, EER equations for adults 19+ years].
 *
 * To update a formula, edit the relevant row here rather than touching
 * {@link AdultTEE.predict}.
 */
const ADULT_TEE_COEFFICIENTS = {
    [enums_js_1.Gender.Male]: {
        [enums_js_1.PAL.Sedentary]: { base: 662, ageCoef: 9.53, palFactor: 1.00, weightCoef: 15.91, heightCoef: 539.6 },
        [enums_js_1.PAL.Low]: { base: 662, ageCoef: 9.53, palFactor: 1.11, weightCoef: 15.91, heightCoef: 539.6 },
        [enums_js_1.PAL.Active]: { base: 662, ageCoef: 9.53, palFactor: 1.25, weightCoef: 15.91, heightCoef: 539.6 },
        [enums_js_1.PAL.VeryActive]: { base: 662, ageCoef: 9.53, palFactor: 1.48, weightCoef: 15.91, heightCoef: 539.6 },
    },
    [enums_js_1.Gender.Female]: {
        [enums_js_1.PAL.Sedentary]: { base: 354, ageCoef: 6.91, palFactor: 1.00, weightCoef: 9.36, heightCoef: 726 },
        [enums_js_1.PAL.Low]: { base: 354, ageCoef: 6.91, palFactor: 1.12, weightCoef: 9.36, heightCoef: 726 },
        [enums_js_1.PAL.Active]: { base: 354, ageCoef: 6.91, palFactor: 1.27, weightCoef: 9.36, heightCoef: 726 },
        [enums_js_1.PAL.VeryActive]: { base: 354, ageCoef: 6.91, palFactor: 1.45, weightCoef: 9.36, heightCoef: 726 },
    },
};
/**
 * Estimates Total Energy Expenditure (TEE) for adults (19+ years).
 *
 * @class AdultTEE
 * @extends TEEEstimator
 */
class AdultTEE extends TEEEstimator {
    /**
     * Predicts TEE for adults based on gender, physical activity level,
     * age, weight, and height, using the {@link ADULT_TEE_COEFFICIENTS}
     * table.
     *
     * @param params Age (years), weight (kg), and height (m) to predict from
     * @returns Estimated TEE in kcal/day
     * @throws Error if no coefficients are defined for this gender/PAL combination
     *
     * @example
     * const adultTEEEstimator = new Fit.cardio.energy.AdultTEE(Gender.Female, PAL.Low);
     * const tee = adultTEEEstimator.predict({ age: 34, weight: 65, height: 1.68 });
     * console.log(tee); // Outputs the estimated TEE
     *
     * When to use: For estimating total energy expenditure in adults (19+ years)
     */
    predict({ age, weight, height }) {
        const coeffs = ADULT_TEE_COEFFICIENTS[this.gender]?.[this.pal];
        if (!coeffs) {
            throw new Error(`No AdultTEE coefficients defined for gender=${this.gender}, pal=${this.pal}`);
        }
        const { base, ageCoef, palFactor, weightCoef, heightCoef } = coeffs;
        return base - ageCoef * age + palFactor * (weightCoef * weight + heightCoef * height);
    }
}
exports.AdultTEE = AdultTEE;
//# sourceMappingURL=tee.js.map