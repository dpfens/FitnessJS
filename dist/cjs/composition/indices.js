"use strict";
/**
 * Body composition index calculations.
 *
 * Strategy pattern is used only where it earns its keep: BMI, BMI Prime,
 * and Corpulence are all genuinely interchangeable answers to the same
 * question ("estimate adiposity from height + weight alone") and share
 * the same input shape, so picking one at runtime is a real use case.
 *
 * Everything else (BAI, BSI, SBSI, WHR, WHtR) is a semantically distinct
 * measurement with its own required inputs — there's no "swap the
 * algorithm" scenario for them, so they're just plain functions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassIndexCalculator = exports.CorpulenceStrategy = exports.BmiPrimeStrategy = exports.BmiStrategy = void 0;
exports.bai = bai;
exports.bsi = bsi;
exports.sbsi = sbsi;
exports.whr = whr;
exports.whtr = whtr;
/**
 * Body Mass Index.
 *
 * Estimates body fat from the ratio of weight to the square of height.
 */
class BmiStrategy {
    name = "BMI";
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The BMI value.
     */
    calculate({ height, weight }) {
        return weight / (height * height);
    }
}
exports.BmiStrategy = BmiStrategy;
/**
 * BMI Prime.
 *
 * Expresses BMI as a ratio of an upper-limit "normal" BMI, so 1.0
 * represents the boundary of the normal weight range.
 */
class BmiPrimeStrategy {
    upperLimit;
    name = "BMI Prime";
    /**
     * @param upperLimit - The upper bound of the normal BMI range used as
     * the denominator. Defaults to `25.9`.
     */
    constructor(upperLimit = 25.9) {
        this.upperLimit = upperLimit;
    }
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The BMI Prime value.
     */
    calculate(metrics) {
        return new BmiStrategy().calculate(metrics) / this.upperLimit;
    }
}
exports.BmiPrimeStrategy = BmiPrimeStrategy;
/**
 * Corpulence (Ponderal/Rohrer) Index.
 *
 * Like BMI, but divides weight by height cubed instead of squared,
 * which scales better for very short or very tall people.
 */
class CorpulenceStrategy {
    name = "Corpulence";
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The Corpulence (Ponderal) Index value.
     */
    calculate({ height, weight }) {
        return weight / Math.pow(height, 3);
    }
}
exports.CorpulenceStrategy = CorpulenceStrategy;
/**
 * Strategy-pattern context for the mass-index family. Holds the
 * person's metrics once and runs whichever {@link MassIndexStrategy}
 * you hand it, so callers can swap formulas at runtime without
 * re-supplying height/weight.
 *
 * @example
 * ```ts
 * const calculator = new MassIndexCalculator({ height: 1.8, weight: 80 });
 * calculator.calculate(new BmiStrategy());
 * calculator.calculate(new CorpulenceStrategy());
 * ```
 */
class MassIndexCalculator {
    metrics;
    /**
     * @param metrics - The person's height (m) and weight (kg), reused
     * across every strategy run through {@link MassIndexCalculator.calculate}.
     */
    constructor(metrics) {
        this.metrics = metrics;
    }
    /**
     * Runs the given strategy against this calculator's metrics.
     *
     * @param strategy - The mass-index formula to apply.
     * @returns The computed index value.
     */
    calculate(strategy) {
        return strategy.calculate(this.metrics);
    }
}
exports.MassIndexCalculator = MassIndexCalculator;
/* ------------------------------------------------------------------ */
/* Standalone indices — each has its own distinct inputs/meaning       */
/* ------------------------------------------------------------------ */
/**
 * Body Adiposity Index.
 *
 * Estimates body fat percentage from hip circumference and height,
 * without requiring weight.
 *
 * @param height - Height in meters.
 * @param hipCircumference - Hip circumference in centimeters.
 * @returns The BAI value.
 */
function bai(height, hipCircumference) {
    const numerator = 100 * hipCircumference;
    const denominator = height * Math.sqrt(height);
    return numerator / denominator - 18;
}
/**
 * Body Shape Index.
 *
 * Combines waist circumference with BMI and height to assess
 * abdominal obesity independent of overall body mass.
 *
 * @param height - Height in meters.
 * @param bmi - The person's BMI, e.g. from {@link BmiStrategy}.
 * @param waistCircumference - Waist circumference in centimeters.
 * @returns The BSI value.
 */
function bsi(height, bmi, waistCircumference) {
    return (waistCircumference / Math.pow(bmi, 2 / 3)) * Math.pow(height, 0.5);
}
/**
 * Surface-based Body Shape Index.
 *
 * A variant of BSI that normalizes by body surface area and vertical
 * trunk circumference instead of BMI.
 *
 * @param params - The height, body surface area, and circumference
 * measurements required by the formula.
 * @returns The SBSI value.
 */
function sbsi({ height, bsa, verticalTrunkCircumference, waistCircumference, }) {
    return ((Math.pow(height, 7 / 4) * Math.pow(waistCircumference, 5 / 6)) /
        (bsa * verticalTrunkCircumference));
}
/**
 * Waist-to-Hip Ratio.
 *
 * @param waistCircumference - Waist circumference in centimeters.
 * @param hipCircumference - Hip circumference in centimeters.
 * @returns The WHR value.
 */
function whr(waistCircumference, hipCircumference) {
    return waistCircumference / hipCircumference;
}
/**
 * Waist-to-Height Ratio.
 *
 * @param waistCircumference - Waist circumference in centimeters.
 * @param height - Height in meters.
 * @returns The WHtR value.
 */
function whtr(waistCircumference, height) {
    return waistCircumference / height;
}
//# sourceMappingURL=indices.js.map