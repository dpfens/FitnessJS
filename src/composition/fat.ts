import { Gender } from "../enums.js";

/** Common input for formulas that convert body density to body fat percentage. */
export interface BodyDensityFatParams {
  /** body density in g/cc */
  bd: number;
}

/**
 * Estimator interface for population-specific formulas converting
 * Body Density (Db) to Percent Body Fat (%BF).
 */
export interface BodyDensityFatEstimator {
  /** @returns body fat percentage as a decimal */
  estimate(params: BodyDensityFatParams): number;
}

/** Brozek formula */
export class BrozekFatEstimator implements BodyDensityFatEstimator {
  estimate({ bd }: BodyDensityFatParams): number {
    return 4.57 / bd - 4.142;
  }
}

/** Ortiz formula (African American females) */
export class OrtizFatEstimator implements BodyDensityFatEstimator {
  estimate({ bd }: BodyDensityFatParams): number {
    return 4.832 / bd - 4.369;
  }
}

/** Schutte formula (African American males) */
export class SchutteFatEstimator implements BodyDensityFatEstimator {
  estimate({ bd }: BodyDensityFatParams): number {
    return 4.374 / bd - 3.928;
  }
}

/** Siri formula */
export class SiriFatEstimator implements BodyDensityFatEstimator {
  estimate({ bd }: BodyDensityFatParams): number {
    return 4.95 / bd - 4.5;
  }
}

/** Wagner formula (African American males) */
export class WagnerFatEstimator implements BodyDensityFatEstimator {
  estimate({ bd }: BodyDensityFatParams): number {
    return 4.86 / bd - 4.39;
  }
}

/** Common input for formulas that estimate body fat percentage from BMI. */
export interface BmiFatParams {
  gender: Gender;
  /** age in years */
  age: number;
  /** weight in kg */
  weight: number;
  /** height in meters */
  height: number;
}

/**
 * Estimator interface for age-group-specific formulas estimating
 * body fat percentage from BMI.
 */
export interface BmiFatEstimator {
  /** @returns body fat percentage as a decimal */
  estimate(params: BmiFatParams): number;
}

/** Estimates body fat percentage from BMI in children. */
export class ChildBmiFatEstimator implements BmiFatEstimator {
  estimate({ gender, age, weight, height }: BmiFatParams): number {
    const bmi = weight / Math.pow(height, 2);
    if (gender === Gender.Female) {
      return (1.51 * bmi - 0.7 * age + 1.4) / 100;
    }
    return (1.51 * bmi - 0.7 * age - 3.6 + 1.4) / 100;
  }
}

/** Estimates body fat percentage from BMI in adults. */
export class AdultBmiFatEstimator implements BmiFatEstimator {
  estimate({ gender, age, weight, height }: BmiFatParams): number {
    const bmi = weight / Math.pow(height, 2);
    if (gender === Gender.Female) {
      return (1.2 * bmi - 0.23 * age - 5.4) / 100;
    }
    return (1.2 * bmi - 0.23 * age - 10.8 - 5.4) / 100;
  }
}

/**
 * Estimates body fat percentage from waist circumference (US Navy method).
 *
 * @param gender - biological sex used to select the regression coefficients
 * @param weight - weight in kg
 * @param waistCircumference - waist circumference in meters
 * @returns body fat percentage as a decimal
 */
export function waistFat(
  gender: Gender,
  weight: number,
  waistCircumference: number
): number {
  const weightLb = weight * 2.2;
  const waistCircumferenceInches = waistCircumference * 39.3701;
  if (gender === Gender.Female) {
    return (100 * (-76.76 + 4.15 * waistCircumferenceInches - 0.082 * weightLb)) / weightLb;
  }
  return (100 * (-98.42 + 4.15 * waistCircumferenceInches - 0.082 * weightLb)) / weightLb;
}