import { Gender, PAL } from "../../enums.js";
/**
 * Input parameters for a TEE prediction.
 */
export interface TEEPredictParams {
    /** Age in years */
    age: number;
    /** Weight in kilograms */
    weight: number;
    /** Height in meters */
    height: number;
}
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
export declare abstract class TEEEstimator {
    /** Gender used to select the coefficient set for prediction */
    gender: Gender;
    /** Physical Activity Level used to select the coefficient set for prediction */
    pal: PAL;
    /**
     * @param gender Gender used to select the correct coefficient set
     * @param pal Physical Activity Level used to select the correct coefficient set
     */
    constructor(gender: Gender, pal: PAL);
    /**
     * Predicts TEE based on age, weight, and height.
     *
     * Must be implemented by a subclass with a specific coefficient set.
     *
     * @param params Age, weight, and height to predict from
     * @returns Estimated TEE in kcal/day
     * @throws Error if not implemented in derived class
     */
    abstract predict(params: TEEPredictParams): number;
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
    fromActivity(weight: number, mets: number): number;
}
/**
 * Estimates Total Energy Expenditure (TEE) for children and adolescents.
 *
 * @class ChildTEE
 * @extends TEEEstimator
 */
export declare class ChildTEE extends TEEEstimator {
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
    predict({ age, weight, height }: TEEPredictParams): number;
}
/**
 * Estimates Total Energy Expenditure (TEE) for adults (19+ years).
 *
 * @class AdultTEE
 * @extends TEEEstimator
 */
export declare class AdultTEE extends TEEEstimator {
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
    predict({ age, weight, height }: TEEPredictParams): number;
}
//# sourceMappingURL=tee.d.ts.map