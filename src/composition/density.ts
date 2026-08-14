import { Gender } from "../enums.js";

export interface SkinfoldDensityParams {
  gender: Gender;
  age: number;
  sum: number; // skinfold sum in mm; which skinfolds depends on the Estimator
}

/**
 * Estimator interface for skinfold-based body density (%body density)
 * estimation formulas.
 */
export interface SkinfoldDensityEstimator {
  estimate(params: SkinfoldDensityParams): number;
}

/** Skinfold density formula for children */
export class SkinfoldDensityChildEstimator implements SkinfoldDensityEstimator {
  /**
   * @param sum - sum2SKF in mm
   * @returns %body density
   */
  estimate({ gender, sum }: SkinfoldDensityParams): number {
    if (gender === Gender.Female) {
      return 0.61 * sum + 5.1;
    }
    return 0.735 * sum + 1.0;
  }
}

/** Skinfold density formula for Black and Hispanic females (and, per the original formula, non-females) */
export class SkinfoldDensityBlackHispanicFemaleEstimator
  implements SkinfoldDensityEstimator
{
  /**
   * @param sum - sum7SKF in mm (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
   * @returns %body density
   */
  estimate({ gender, age, sum }: SkinfoldDensityParams): number {
    if (gender === Gender.Female) {
      return (
        1.097 - 0.00046971 * sum + 0.00000056 * Math.pow(sum, 2) - 0.00012828 * age
      );
    }
    return (
      1.112 - 0.00043499 * sum + 0.00000055 * Math.pow(sum, 2) - 0.00028826 * age
    );
  }
}

/** Skinfold density formula for white males (per the original formula, gender-independent) */
export class SkinfoldDensityWhiteMaleEstimator
  implements SkinfoldDensityEstimator
{
  /**
   * @param sum - sum3SKF in mm (chest + abdomen + thigh)
   * @returns %body density
   */
  estimate({ age, sum }: SkinfoldDensityParams): number {
    return (
      1.10938 - 0.0008267 * sum + 0.0000016 * Math.pow(sum, 2) - 0.0002574 * age
    );
  }
}

/** Skinfold density formula for white females with anorexia */
export class SkinfoldDensityWhiteFemaleAnorexicEstimator
  implements SkinfoldDensityEstimator
{
  /**
   * @param sum - sum3SKF in mm (triceps + suprailiac + thigh)
   * @returns %body density
   */
  estimate({ age, sum }: SkinfoldDensityParams): number {
    return (
      1.0994921 -
      0.0009929 * sum +
      0.0000023 * Math.pow(sum, 2) -
      0.00001392 * age
    );
  }
}

/** Skinfold density formula for athletes */
export class SkinfoldDensityAthleteEstimator
  implements SkinfoldDensityEstimator
{
  /**
   * @param sum - female: sum4SKF (triceps + anterior suprailiac + abdomen + thigh);
   *              male: sum7SKF (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
   * @returns body density in g/cc
   */
  estimate({ gender, age, sum }: SkinfoldDensityParams): number {
    if (gender === Gender.Female) {
      return (
        1.096095 - 0.0006952 * sum + 0.0000011 * Math.pow(sum, 2) - 0.0000714 * age
      );
    }
    return (
      1.112 - 0.00043499 * sum + 0.00000055 * Math.pow(sum, 2) - 0.00028826 * age
    );
  }
}

/** Skinfold density formula for Black collegiate athletes, ages 18-34 */
export class SkinfoldDensityCollegiateAthleteBlackEstimator
  implements SkinfoldDensityEstimator
{
  /**
   * @param sum - sum3SKF in mm (abdomen + thigh + triceps)
   * @returns body density in g/cc
   */
  estimate({ gender, sum }: SkinfoldDensityParams): number {
    if (gender === Gender.Female) {
      return 8.997 + 0.2468 * sum - 1.998;
    }
    return 8.997 + 0.2468 * sum - 6.343 * 1 - 1.998;
  }
}

/** Skinfold density formula for white collegiate athletes, ages 18-34 */
export class SkinfoldDensityCollegiateAthleteWhiteEstimator
  implements SkinfoldDensityEstimator
{
  /**
   * @param sum - sum3SKF in mm (abdomen + thigh + triceps)
   * @returns body density in g/cc
   */
  estimate({ gender, sum }: SkinfoldDensityParams): number {
    if (gender === Gender.Female) {
      return 8.997 + 0.2468 * sum;
    }
    return 8.997 + 0.2468 * sum - 6.343 * 1;
  }
}

/**
 * @class
 * @classdesc computes body density and body volume, delegating skinfold-based
 * density estimation to a pluggable SkinfoldDensityEstimator
 */
export class Density {
  private gender: Gender;
  private age: number;
  private weight: number;
  private skinfoldEstimator?: SkinfoldDensityEstimator;

  constructor(
    gender: Gender,
    age: number,
    weight: number,
    skinfoldEstimator?: SkinfoldDensityEstimator
  ) {
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.skinfoldEstimator = skinfoldEstimator;
  }

  setSkinfoldEstimator(Estimator: SkinfoldDensityEstimator): void {
    this.skinfoldEstimator = Estimator;
  }

  /**
   * Delegates to the configured skinfold density Estimator.
   * @param sum - skinfold sum in mm; which skinfolds are summed depends on the Estimator in use
   * @returns %body density (or body density in g/cc, depending on Estimator)
   */
  skinfoldDb(sum: number): number {
    if (!this.skinfoldEstimator) {
      throw new Error("No skinfold density Estimator set.");
    }
    return this.skinfoldEstimator.estimate({
      gender: this.gender,
      age: this.age,
      sum,
    });
  }

  /**
   * Converts body density at total lung capacity (TLC) to body density
   * at residual volume (RV).
   * @param bd - body density at TLC in g/cc
   * @returns body density at residual volume in g/cc
   */
  dbAtRV(bd: number): number {
    if (this.gender === Gender.Female) {
      return 0.4745 * bd + 0.5173;
    }
    return 0.5829 * bd + 0.4059;
  }

  /**
   * Computes body volume from underwater weighing.
   * @param uww - underwater weight
   * @param rv - residual volume in mL
   * @param gv - volume of air in the gastrointestinal tract in mL (default: 100mL)
   * @returns body volume
   */
  bodyVol(uww: number, rv: number, gv: number): number {
    return (this.weight - uww) / 1.0 - (rv - gv);
  }
}