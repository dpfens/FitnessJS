import { Gender } from "../enums.js";
/** Common input for formulas that convert body density to body fat percentage. */
export interface BodyDensityFatParams {
    /** body density in g/cc */
    bd: number;
}
/**
 * Estimator interface for population-specific formulas converting
 * Body Density (Db) to Percent Body Fat (%BF).
 */
export interface BodyDensityFatEstimator {
    /** @returns body fat percentage as a decimal */
    estimate(params: BodyDensityFatParams): number;
}
/** Brozek formula */
export declare class BrozekFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Ortiz formula (African American females) */
export declare class OrtizFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Schutte formula (African American males) */
export declare class SchutteFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Siri formula */
export declare class SiriFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Wagner formula (African American males) */
export declare class WagnerFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Common input for formulas that estimate body fat percentage from BMI. */
export interface BmiFatParams {
    gender: Gender;
    /** age in years */
    age: number;
    /** weight in kg */
    weight: number;
    /** height in meters */
    height: number;
}
/**
 * Estimator interface for age-group-specific formulas estimating
 * body fat percentage from BMI.
 */
export interface BmiFatEstimator {
    /** @returns body fat percentage as a decimal */
    estimate(params: BmiFatParams): number;
}
/** Estimates body fat percentage from BMI in children. */
export declare class ChildBmiFatEstimator implements BmiFatEstimator {
    estimate({ gender, age, weight, height }: BmiFatParams): number;
}
/** Estimates body fat percentage from BMI in adults. */
export declare class AdultBmiFatEstimator implements BmiFatEstimator {
    estimate({ gender, age, weight, height }: BmiFatParams): number;
}
/**
 * Estimates body fat percentage from waist circumference (US Navy method).
 *
 * @param gender - biological sex used to select the regression coefficients
 * @param weight - weight in kg
 * @param waistCircumference - waist circumference in meters
 * @returns body fat percentage as a decimal
 */
export declare function waistFat(gender: Gender, weight: number, waistCircumference: number): number;
//# sourceMappingURL=fat.d.ts.map