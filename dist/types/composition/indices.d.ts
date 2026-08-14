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
/** Core metrics needed by the mass-index family. */
export interface BodyMetrics {
    /** Height in meters. */
    height: number;
    /** Body mass in kilograms. */
    weight: number;
}
/**
 * Common contract for the mass-index family. All three take just
 * height/weight (plus optional formula-specific tuning) and return a
 * single adiposity score, so they're safe to swap for one another.
 */
export interface MassIndexStrategy {
    /** Human-readable name of the formula, e.g. `"BMI"`. */
    readonly name: string;
    /**
     * Computes the index for the given metrics.
     *
     * @param metrics - The person's height and weight.
     * @returns The computed index value.
     */
    calculate(metrics: BodyMetrics): number;
}
/**
 * Body Mass Index.
 *
 * Estimates body fat from the ratio of weight to the square of height.
 */
export declare class BmiStrategy implements MassIndexStrategy {
    readonly name = "BMI";
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The BMI value.
     */
    calculate({ height, weight }: BodyMetrics): number;
}
/**
 * BMI Prime.
 *
 * Expresses BMI as a ratio of an upper-limit "normal" BMI, so 1.0
 * represents the boundary of the normal weight range.
 */
export declare class BmiPrimeStrategy implements MassIndexStrategy {
    private readonly upperLimit;
    readonly name = "BMI Prime";
    /**
     * @param upperLimit - The upper bound of the normal BMI range used as
     * the denominator. Defaults to `25.9`.
     */
    constructor(upperLimit?: number);
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The BMI Prime value.
     */
    calculate(metrics: BodyMetrics): number;
}
/**
 * Corpulence (Ponderal/Rohrer) Index.
 *
 * Like BMI, but divides weight by height cubed instead of squared,
 * which scales better for very short or very tall people.
 */
export declare class CorpulenceStrategy implements MassIndexStrategy {
    readonly name = "Corpulence";
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The Corpulence (Ponderal) Index value.
     */
    calculate({ height, weight }: BodyMetrics): number;
}
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
export declare class MassIndexCalculator {
    private readonly metrics;
    /**
     * @param metrics - The person's height (m) and weight (kg), reused
     * across every strategy run through {@link MassIndexCalculator.calculate}.
     */
    constructor(metrics: BodyMetrics);
    /**
     * Runs the given strategy against this calculator's metrics.
     *
     * @param strategy - The mass-index formula to apply.
     * @returns The computed index value.
     */
    calculate(strategy: MassIndexStrategy): number;
}
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
export declare function bai(height: number, hipCircumference: number): number;
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
export declare function bsi(height: number, bmi: number, waistCircumference: number): number;
/** Inputs required to compute the {@link sbsi | Surface-based Body Shape Index}. */
export interface SbsiParams {
    /** Height in meters. */
    height: number;
    /** Body surface area, in square meters. */
    bsa: number;
    /** Vertical trunk circumference in centimeters. */
    verticalTrunkCircumference: number;
    /** Waist circumference in centimeters. */
    waistCircumference: number;
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
export declare function sbsi({ height, bsa, verticalTrunkCircumference, waistCircumference, }: SbsiParams): number;
/**
 * Waist-to-Hip Ratio.
 *
 * @param waistCircumference - Waist circumference in centimeters.
 * @param hipCircumference - Hip circumference in centimeters.
 * @returns The WHR value.
 */
export declare function whr(waistCircumference: number, hipCircumference: number): number;
/**
 * Waist-to-Height Ratio.
 *
 * @param waistCircumference - Waist circumference in centimeters.
 * @param height - Height in meters.
 * @returns The WHtR value.
 */
export declare function whtr(waistCircumference: number, height: number): number;
//# sourceMappingURL=indices.d.ts.map