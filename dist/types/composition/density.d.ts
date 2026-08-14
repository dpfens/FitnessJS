import { Gender } from "../enums.js";
export interface SkinfoldDensityParams {
    gender: Gender;
    age: number;
    sum: number;
}
/**
 * Estimator interface for skinfold-based body density (%body density)
 * estimation formulas.
 */
export interface SkinfoldDensityEstimator {
    estimate(params: SkinfoldDensityParams): number;
}
/** Skinfold density formula for children */
export declare class SkinfoldDensityChildEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum2SKF in mm
     * @returns %body density
     */
    estimate({ gender, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for Black and Hispanic females (and, per the original formula, non-females) */
export declare class SkinfoldDensityBlackHispanicFemaleEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum7SKF in mm (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
     * @returns %body density
     */
    estimate({ gender, age, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for white males (per the original formula, gender-independent) */
export declare class SkinfoldDensityWhiteMaleEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum3SKF in mm (chest + abdomen + thigh)
     * @returns %body density
     */
    estimate({ age, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for white females with anorexia */
export declare class SkinfoldDensityWhiteFemaleAnorexicEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum3SKF in mm (triceps + suprailiac + thigh)
     * @returns %body density
     */
    estimate({ age, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for athletes */
export declare class SkinfoldDensityAthleteEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - female: sum4SKF (triceps + anterior suprailiac + abdomen + thigh);
     *              male: sum7SKF (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
     * @returns body density in g/cc
     */
    estimate({ gender, age, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for Black collegiate athletes, ages 18-34 */
export declare class SkinfoldDensityCollegiateAthleteBlackEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum3SKF in mm (abdomen + thigh + triceps)
     * @returns body density in g/cc
     */
    estimate({ gender, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for white collegiate athletes, ages 18-34 */
export declare class SkinfoldDensityCollegiateAthleteWhiteEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum3SKF in mm (abdomen + thigh + triceps)
     * @returns body density in g/cc
     */
    estimate({ gender, sum }: SkinfoldDensityParams): number;
}
/**
 * @class
 * @classdesc computes body density and body volume, delegating skinfold-based
 * density estimation to a pluggable SkinfoldDensityEstimator
 */
export declare class Density {
    private gender;
    private age;
    private weight;
    private skinfoldEstimator?;
    constructor(gender: Gender, age: number, weight: number, skinfoldEstimator?: SkinfoldDensityEstimator);
    setSkinfoldEstimator(Estimator: SkinfoldDensityEstimator): void;
    /**
     * Delegates to the configured skinfold density Estimator.
     * @param sum - skinfold sum in mm; which skinfolds are summed depends on the Estimator in use
     * @returns %body density (or body density in g/cc, depending on Estimator)
     */
    skinfoldDb(sum: number): number;
    /**
     * Converts body density at total lung capacity (TLC) to body density
     * at residual volume (RV).
     * @param bd - body density at TLC in g/cc
     * @returns body density at residual volume in g/cc
     */
    dbAtRV(bd: number): number;
    /**
     * Computes body volume from underwater weighing.
     * @param uww - underwater weight
     * @param rv - residual volume in mL
     * @param gv - volume of air in the gastrointestinal tract in mL (default: 100mL)
     * @returns body volume
     */
    bodyVol(uww: number, rv: number, gv: number): number;
}
//# sourceMappingURL=density.d.ts.map