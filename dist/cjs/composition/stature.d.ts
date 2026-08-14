import { Gender } from "../enums.js";
export interface FemurStatureParams {
    gender: Gender;
    femurLength: number;
}
/**
 * Estimator interface for ancestry-specific stature estimation
 * from femur length (Trotter and Gleser 1952, 1958).
 */
export interface FemurStatureEstimator {
    estimate(params: FemurStatureParams): number;
}
/** Trotter & Gleser regression for American White population */
export declare class AmericanWhiteStatureEstimator implements FemurStatureEstimator {
    estimate({ gender, femurLength }: FemurStatureParams): number;
}
/** Trotter & Gleser regression for American Black population */
export declare class AmericanBlackStatureEstimator implements FemurStatureEstimator {
    estimate({ gender, femurLength }: FemurStatureParams): number;
}
/**
 * Estimates stature using the age- and soft-tissue-corrected "universal" formula.
 *
 * Raxter et al. (2006) noted a discrepancy between the average soft tissue
 * correction factor of Fully's 1956 sample (10.5 cm) and their own (12.4 cm).
 * They devised new equations to correct for this soft tissue factor
 * discrepancy, as well as for the gradual effects of age on stature.
 *
 * @see https://digital.library.txstate.edu/bitstream/handle/10877/4055/fulltext.pdf
 * @param height - height in cm
 * @param age - age in years
 * @returns estimated stature in cm
 */
export declare function universalStature(height: number, age: number): number;
/**
 * Estimates stride length from height and gender.
 *
 * @param gender - biological sex used to select the stride factor
 * @param height - height in meters
 * @returns estimated stride length in meters
 */
export declare function strideLength(gender: Gender, height: number): number;
//# sourceMappingURL=stature.d.ts.map