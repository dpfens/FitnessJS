import { Gender } from "../enums.js";
export interface ResistanceParams {
    gender: Gender;
    age: number;
    height: number;
    weight: number;
    resistance: number;
}
/**
 * Extends {@link ResistanceParams} with reactance, for formulas that
 * require bioelectrical reactance in addition to resistance.
 */
export interface ReactanceParams extends ResistanceParams {
    reactance: number;
}
/**
 * Estimator interface for fat-free mass (FFM) estimation formulas.
 * Generic over the params shape so both resistance-only and
 * resistance+reactance formulas can implement the same interface.
 */
export interface FatFreeMassEstimator<T extends ResistanceParams = ResistanceParams> {
    estimate(params: T): number;
}
/**
 * Lohman (1992) — fat-free mass in white boys and girls, 8-15 years.
 * @returns Fat Free Mass in kg
 */
export declare class FfmChildEstimator implements FatFreeMassEstimator<ReactanceParams> {
    estimate({ height, weight, resistance, reactance }: ReactanceParams): number;
}
/**
 * Houtkooper et al. (1992) — fat-free mass in white boys and girls, 10-19 years.
 * @returns Fat Free Mass in kg
 */
export declare class FfmAdolescentEstimator implements FatFreeMassEstimator {
    estimate({ height, weight, resistance }: ResistanceParams): number;
}
/**
 * Segal et al. (1988) — fat-free mass for lean adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF < .30. Men: %BF < .20.
 * @returns Fat Free Mass in kg
 */
export declare class FfmAdultLeanEstimator implements FatFreeMassEstimator {
    estimate({ gender, age, height, weight, resistance }: ResistanceParams): number;
}
/**
 * Segal et al. (1988) — fat-free mass for obese adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF > .30. Men: %BF > .20.
 * @returns Fat Free Mass in kg
 */
export declare class FfmAdultObeseEstimator implements FatFreeMassEstimator {
    estimate({ gender, age, height, weight, resistance }: ResistanceParams): number;
}
/**
 * Fornetti et al. (1999) for female athletes (18-27 years) and
 * Oppliger et al. (1991) for male athletes (19-40 years).
 * @returns Fat Free Mass in kg
 */
export declare class FfmAdultAthleteEstimator implements FatFreeMassEstimator<ReactanceParams> {
    estimate({ gender, height, weight, resistance, reactance }: ReactanceParams): number;
}
/**
 * @class
 * @classdesc estimates body composition (fat-free mass) using a
 * pluggable bioelectrical impedance analysis (BIA) Estimator
 */
export declare class Mass {
    private gender;
    private age;
    private height;
    private weight;
    constructor(gender: Gender, age: number, height: number, weight: number);
    private get baseParams();
    /**
     * Computes fat-free mass using a resistance-only Estimator.
     * @param Estimator - the FFM formula to apply
     * @param resistance - bioelectrical resistance in ohms
     * @returns Fat Free Mass in kg
     */
    estimateFfm(Estimator: FatFreeMassEstimator<ResistanceParams>, resistance: number): number;
    /**
     * Computes fat-free mass using a resistance + reactance Estimator.
     * @param Estimator - the FFM formula to apply
     * @param resistance - bioelectrical resistance in ohms
     * @param reactance - bioelectrical reactance in ohms
     * @returns Fat Free Mass in kg
     */
    estimateFfmWithReactance(Estimator: FatFreeMassEstimator<ReactanceParams>, resistance: number, reactance: number): number;
}
//# sourceMappingURL=mass.d.ts.map