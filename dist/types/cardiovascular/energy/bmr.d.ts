import { Gender } from "../../enums.js";
export interface BMREstimator {
    /**
     * Predicts BMR based on given parameters
     * @param dob Date of birth
     * @param weight Weight in kg
     * @param height Height in cm
     * @returns Estimated BMR in kcal/day
     */
    predict(age: number, weight: number, height: number): number;
}
/**
 * Base class for estimating Basal Metabolic Rate (BMR)
 * @class BaseBMREstimator
 */
export declare abstract class BaseBMREstimator implements BMREstimator {
    gender: Gender;
    constructor(gender: Gender);
    abstract predict(age: number, weight: number, height: number): number;
}
/**
 * Harris-Benedict equation for estimating BMR
 * @class HB
 * @extends BaseBMREstimator
 */
export declare class HB extends BaseBMREstimator {
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
    predict(age: number, weight: number, height: number): number;
}
/**
 * Revised Harris-Benedict equation for estimating BMR
 * @class RevisedHB
 * @extends BaseBMREstimator
 */
export declare class RevisedHB extends BaseBMREstimator {
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
    predict(age: number, weight: number, height: number): number;
}
/**
 * Mifflin-St Jeor equation for estimating BMR
 * @class MSJ
 * @extends BaseBMREstimator
 */
export declare class MSJ extends BaseBMREstimator {
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
    predict(age: number, weight: number, height: number): number;
}
//# sourceMappingURL=bmr.d.ts.map