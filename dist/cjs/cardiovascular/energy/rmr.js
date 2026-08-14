"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestingMetabolicRate = exports.CunninghamEstimator = exports.KatchMcArdleEstimator = exports.RMR = exports.BSARMREstimator = exports.QuickRMREstimator = void 0;
const enums_js_1 = require("../../enums.js");
/**
 * Quick estimate of RMR based on body weight.
 *
 * When to use: For a rapid, rough estimate of RMR when precise
 * calculations are not necessary.
 */
class QuickRMREstimator {
    /**
     * @param gender Biological sex used to select the correct coefficient
     * @param weight Body weight in kg
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const estimator = new QuickRMREstimator();
     * const quickRMR = estimator.estimate(Gender.Male, 75);
     * console.log(quickRMR);
     */
    estimate(gender, weight) {
        if (gender === enums_js_1.Gender.Female) {
            return weight * 22;
        }
        return weight * 24.2;
    }
}
exports.QuickRMREstimator = QuickRMREstimator;
/**
 * RMR estimate based on Body Surface Area (BSA).
 *
 * When to use: When a more accurate RMR estimate is needed, especially
 * for individuals with unusual body compositions.
 */
class BSARMREstimator {
    /**
     * @param gender Biological sex used to select the correct coefficient
     * @param bsa Body Surface Area in m²
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const estimator = new BSARMREstimator();
     * const bsaRMR = estimator.estimate(Gender.Female, 1.65);
     * console.log(bsaRMR);
     */
    estimate(gender, bsa) {
        if (gender === enums_js_1.Gender.Female) {
            return bsa * 840;
        }
        return bsa * 912;
    }
}
exports.BSARMREstimator = BSARMREstimator;
/**
 * Context class for estimating Resting Metabolic Rate (RMR) by gender.
 * Delegates the actual calculation to a pluggable {@link GenderRMREstimator}.
 *
 * @class RMR
 */
class RMR {
    gender;
    estimator;
    /**
     * @param gender Biological sex used by the estimation strategy
     * @param estimator The RMR estimation strategy to use
     * (e.g., {@link QuickRMREstimator} or {@link BSARMREstimator})
     */
    constructor(gender, estimator) {
        this.gender = gender;
        this.estimator = estimator;
    }
    /**
     * Swaps the estimation strategy at runtime.
     * @param estimator The new strategy to use
     */
    setEstimator(estimator) {
        this.estimator = estimator;
    }
    /**
     * Estimates RMR using the currently assigned strategy.
     * @param value The input measurement the current strategy expects
     * (e.g., weight in kg for {@link QuickRMREstimator}, or BSA in m²
     * for {@link BSARMREstimator})
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const rmrCalculator = new RMR(Gender.Male, new QuickRMREstimator());
     * const quickRMR = rmrCalculator.calculate(75);
     * console.log(quickRMR);
     *
     * // Swap strategies without changing calling code
     * rmrCalculator.setEstimator(new BSARMREstimator());
     * const bsaRMR = rmrCalculator.calculate(1.9);
     * console.log(bsaRMR);
     */
    calculate(value) {
        return this.estimator.estimate(this.gender, value);
    }
}
exports.RMR = RMR;
/**
 * Katch-McArdle formula for calculating RMR.
 *
 * When to use: When lean body mass is known, provides a more accurate
 * estimate for athletes or individuals with higher muscle mass.
 */
class KatchMcArdleEstimator {
    /**
     * @param lbm Lean Body Mass in kg
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const estimator = new KatchMcArdleEstimator();
     * const lbm = 55; // kg
     * const rmr = estimator.estimate(lbm);
     * console.log(rmr);
     */
    estimate(lbm) {
        return 370 + 21.6 * lbm;
    }
}
exports.KatchMcArdleEstimator = KatchMcArdleEstimator;
/**
 * Cunningham equation for calculating RMR.
 *
 * When to use: Similar to Katch-McArdle, use when lean body mass is known.
 * Often preferred for athletes due to its accuracy in this population.
 */
class CunninghamEstimator {
    /**
     * @param lbm Lean Body Mass in kg
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const estimator = new CunninghamEstimator();
     * const lbm = 60; // kg
     * const rmr = estimator.estimate(lbm);
     * console.log(rmr);
     */
    estimate(lbm) {
        return 500 + 22 * lbm;
    }
}
exports.CunninghamEstimator = CunninghamEstimator;
/**
 * Context class for estimating Resting Metabolic Rate (RMR) from
 * Lean Body Mass. Delegates the actual calculation to a pluggable
 * {@link RMREstimator}.
 *
 * @class RestingMetabolicRate
 */
class RestingMetabolicRate {
    estimator;
    /**
     * @param estimator The RMR estimation strategy to use
     * (e.g., {@link KatchMcArdleEstimator} or {@link CunninghamEstimator})
     */
    constructor(estimator) {
        this.estimator = estimator;
    }
    /**
     * Swaps the estimation strategy at runtime.
     * @param estimator The new strategy to use
     */
    setEstimator(estimator) {
        this.estimator = estimator;
    }
    /**
     * Estimates RMR using the currently assigned strategy.
     * @param lbm Lean Body Mass in kg
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const rmr = new RestingMetabolicRate(new KatchMcArdleEstimator());
     * console.log(rmr.estimate(55));
     *
     * // Swap strategies without changing calling code
     * rmr.setEstimator(new CunninghamEstimator());
     * console.log(rmr.estimate(55));
     */
    estimate(lbm) {
        return this.estimator.estimate(lbm);
    }
}
exports.RestingMetabolicRate = RestingMetabolicRate;
//# sourceMappingURL=rmr.js.map