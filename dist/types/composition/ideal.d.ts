import { Gender } from "../enums.js";
export interface IdealWeightParams {
    gender: Gender;
    height: number;
}
/**
 * Estimator interface for ideal body weight estimation formulas.
 */
export interface IdealWeightEstimator {
    estimate(params: IdealWeightParams): number;
}
/**
 * G. Hamwi (1964)
 */
export declare class HamwiEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }: IdealWeightParams): number;
}
/**
 * B. Devine (1974)
 */
export declare class DevineEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }: IdealWeightParams): number;
}
/**
 * J. Robinson et al. (1983)
 */
export declare class RobinsonEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }: IdealWeightParams): number;
}
/**
 * D. Miller (1983)
 */
export declare class MillerEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }: IdealWeightParams): number;
}
/**
 * H. Lemmens et al. (2005). Gender-independent; `gender` is ignored.
 */
export declare class LemmensEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in meters (note: differs from the other strategies, which use inches)
     * @returns ideal weight in kg
     */
    estimate({ height }: IdealWeightParams): number;
}
/**
 * Context class for ideal body weight calculations.
 * Delegates to a pluggable IdealWeightEstimator.
 */
export declare class Ideal {
    private Estimator;
    private params;
    constructor(Estimator: IdealWeightEstimator, gender: Gender, height: number);
    setEstimator(Estimator: IdealWeightEstimator): void;
    /**
     * @returns ideal weight in kg, using the current Estimator
     */
    estimate(): number;
}
/**
 * Estimates an athlete's ideal weight based on height.
 * H. Willoughby.
 *
 * @param height - height in inches
 * @returns estimated weight in lb
 */
export declare function willoughbyWeight(height: number): number;
/**
 * Estimates an athlete's ideal waist size based on height.
 * H. Willoughby.
 *
 * @param height - height in inches
 * @returns estimated waist in inches
 */
export declare function willoughbyWaist(height: number): number;
//# sourceMappingURL=ideal.d.ts.map