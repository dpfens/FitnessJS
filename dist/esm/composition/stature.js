import { Gender } from "../enums.js";
/** Trotter & Gleser regression for American White population */
export class AmericanWhiteStatureEstimator {
    estimate({ gender, femurLength }) {
        if (gender === Gender.Female) {
            return 2.47 * femurLength + 54.1;
        }
        return 2.32 * femurLength + 65.53;
    }
}
/** Trotter & Gleser regression for American Black population */
export class AmericanBlackStatureEstimator {
    estimate({ gender, femurLength }) {
        if (gender === Gender.Female) {
            return 2.28 * femurLength + 59.76;
        }
        return 2.1 * femurLength + 72.22;
    }
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
export function universalStature(height, age) {
    return 1.009 * height - 0.0426 * age + 12.1;
}
/**
 * Estimates stride length from height and gender.
 *
 * @param gender - biological sex used to select the stride factor
 * @param height - height in meters
 * @returns estimated stride length in meters
 */
export function strideLength(gender, height) {
    const heightCm = height * 100;
    const factor = gender === Gender.Female ? 0.413 : 0.415;
    return (factor * heightCm) / 100;
}
//# sourceMappingURL=stature.js.map