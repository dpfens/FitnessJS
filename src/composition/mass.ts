import { Gender } from "../enums.js";

export interface ResistanceParams {
  gender: Gender;
  age: number; // in years
  height: number; // in cm
  weight: number; // in kg
  resistance: number; // in ohms
}

/**
 * Extends {@link ResistanceParams} with reactance, for formulas that
 * require bioelectrical reactance in addition to resistance.
 */
export interface ReactanceParams extends ResistanceParams {
  reactance: number; // in ohms
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
export class FfmChildEstimator implements FatFreeMassEstimator<ReactanceParams> {
  estimate({ height, weight, resistance, reactance }: ReactanceParams): number {
    return (
      0.62 * (Math.pow(height, 2) / resistance) +
      0.21 * weight +
      0.1 * reactance +
      4.2
    );
  }
}

/**
 * Houtkooper et al. (1992) — fat-free mass in white boys and girls, 10-19 years.
 * @returns Fat Free Mass in kg
 */
export class FfmAdolescentEstimator implements FatFreeMassEstimator {
  estimate({ height, weight, resistance }: ResistanceParams): number {
    return 0.61 * (Math.pow(height, 2) / resistance) + 0.25 * weight + 1.31;
  }
}

/**
 * Segal et al. (1988) — fat-free mass for lean adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF < .30. Men: %BF < .20.
 * @returns Fat Free Mass in kg
 */
export class FfmAdultLeanEstimator implements FatFreeMassEstimator {
  estimate({ gender, age, height, weight, resistance }: ResistanceParams): number {
    if (gender === Gender.Female) {
      return (
        0.000646 * Math.pow(height, 2) -
        0.014 * resistance +
        0.421 * weight +
        10.4
      );
    }
    return (
      0.0006636 * Math.pow(height, 2) -
      0.02117 * resistance +
      0.62854 * weight -
      0.1238 * age +
      9.33285
    );
  }
}

/**
 * Segal et al. (1988) — fat-free mass for obese adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF > .30. Men: %BF > .20.
 * @returns Fat Free Mass in kg
 */
export class FfmAdultObeseEstimator implements FatFreeMassEstimator {
  estimate({ gender, age, height, weight, resistance }: ResistanceParams): number {
    if (gender === Gender.Female) {
      return (
        0.00091186 * Math.pow(height, 2) -
        0.1466 * resistance +
        0.2999 * weight -
        0.07012 * age +
        9.37938
      );
    }
    return (
      0.0008858 * Math.pow(height, 2) -
      0.02999 * resistance +
      0.42688 * weight -
      0.07002 * age +
      14.52435
    );
  }
}

/**
 * Fornetti et al. (1999) for female athletes (18-27 years) and
 * Oppliger et al. (1991) for male athletes (19-40 years).
 * @returns Fat Free Mass in kg
 */
export class FfmAdultAthleteEstimator implements FatFreeMassEstimator<ReactanceParams> {
  estimate({ gender, height, weight, resistance, reactance }: ReactanceParams): number {
    if (gender === Gender.Female) {
      return 0.282 * height + 0.415 * weight - 0.037 * resistance + 0.096 * reactance - 9.734;
    }
    return 0.186 * (Math.pow(height, 2) / resistance) + 0.701 * weight + 1.949;
  }
}

/**
 * @class
 * @classdesc estimates body composition (fat-free mass) using a
 * pluggable bioelectrical impedance analysis (BIA) Estimator
 */
export class Mass {
  private gender: Gender;
  private age: number;
  private height: number; // in cm
  private weight: number; // in kg

  constructor(gender: Gender, age: number, height: number, weight: number) {
    this.gender = gender;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  private get baseParams(): ResistanceParams {
    return {
      gender: this.gender,
      age: this.age,
      height: this.height,
      weight: this.weight,
      resistance: NaN, // overwritten by callers below
    };
  }

  /**
   * Computes fat-free mass using a resistance-only Estimator.
   * @param Estimator - the FFM formula to apply
   * @param resistance - bioelectrical resistance in ohms
   * @returns Fat Free Mass in kg
   */
  estimateFfm(Estimator: FatFreeMassEstimator<ResistanceParams>, resistance: number): number {
    return Estimator.estimate({ ...this.baseParams, resistance });
  }

  /**
   * Computes fat-free mass using a resistance + reactance Estimator.
   * @param Estimator - the FFM formula to apply
   * @param resistance - bioelectrical resistance in ohms
   * @param reactance - bioelectrical reactance in ohms
   * @returns Fat Free Mass in kg
   */
  estimateFfmWithReactance(
    Estimator: FatFreeMassEstimator<ReactanceParams>,
    resistance: number,
    reactance: number
  ): number {
    return Estimator.estimate({ ...this.baseParams, resistance, reactance });
  }
}