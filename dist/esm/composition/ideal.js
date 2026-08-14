import { Gender } from "../enums.js";
function inchesOverFt(value, upperBound) {
    const inches = value * 39.3701;
    const upperBoundInches = upperBound * 39.3701;
    return inches % upperBoundInches;
}
/**
 * G. Hamwi (1964)
 */
export class HamwiEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }) {
        const inchesOver5Ft = inchesOverFt(height, 1.524);
        if (gender === Gender.Female) {
            return 45.5 + 2.2 * inchesOver5Ft;
        }
        return 48 + 2.7 * inchesOver5Ft;
    }
}
/**
 * B. Devine (1974)
 */
export class DevineEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }) {
        const inchesOver5Ft = inchesOverFt(height, 1.524);
        if (gender === Gender.Female) {
            return 45.5 + 2.3 * inchesOver5Ft;
        }
        return 50 + 2.3 * inchesOver5Ft;
    }
}
/**
 * J. Robinson et al. (1983)
 */
export class RobinsonEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }) {
        const inchesOver5Ft = inchesOverFt(height, 1.524);
        if (gender === Gender.Female) {
            return 49 + 1.7 * inchesOver5Ft;
        }
        return 52 + 1.9 * inchesOver5Ft;
    }
}
/**
 * D. Miller (1983)
 */
export class MillerEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }) {
        const inchesOver5Ft = inchesOverFt(height, 1.524);
        if (gender === Gender.Female) {
            return 53.1 + 1.36 * inchesOver5Ft;
        }
        return 56.2 + 1.41 * inchesOver5Ft;
    }
}
/**
 * H. Lemmens et al. (2005). Gender-independent; `gender` is ignored.
 */
export class LemmensEstimator {
    /**
     * @param height - height in meters (note: differs from the other strategies, which use inches)
     * @returns ideal weight in kg
     */
    estimate({ height }) {
        return 22 * Math.pow(height, 2);
    }
}
/**
 * Context class for ideal body weight calculations.
 * Delegates to a pluggable IdealWeightEstimator.
 */
export class Ideal {
    Estimator;
    params;
    constructor(Estimator, gender, height) {
        this.Estimator = Estimator;
        this.params = { gender, height };
    }
    setEstimator(Estimator) {
        this.Estimator = Estimator;
    }
    /**
     * @returns ideal weight in kg, using the current Estimator
     */
    estimate() {
        return this.Estimator.estimate(this.params);
    }
}
/**
 * Estimates an athlete's ideal weight based on height.
 * H. Willoughby.
 *
 * @param height - height in inches
 * @returns estimated weight in lb
 */
export function willoughbyWeight(height) {
    const heightInches = height * 39.3701;
    const heightCubed = Math.pow(heightInches, 3);
    return heightCubed / 1906;
}
/**
 * Estimates an athlete's ideal waist size based on height.
 * H. Willoughby.
 *
 * @param height - height in inches
 * @returns estimated waist in inches
 */
export function willoughbyWaist(height) {
    const heightInches = height * 39.3701;
    return heightInches * 0.4584;
}
//# sourceMappingURL=ideal.js.map