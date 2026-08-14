import { Gender } from "../../enums.js";

export interface ResidualVolumeParams {
  gender: Gender;
  age: number;
  height: number; // in meters
  weight: number; // in kg
}

/** Params required by strategies that also need body surface area (e.g. O'Brien) */
export interface OBrienResidualVolumeParams extends ResidualVolumeParams {
  bsa: number; // body surface area in m^2
}

/**
 * Strategy interface for residual volume estimation formulas.
 * Generic so strategies with extra param requirements (e.g. O'Brien's bsa)
 * can extend ResidualVolumeParams without polluting the base interface.
 */
export interface ResidualVolumeEstimator<
  T extends ResidualVolumeParams = ResidualVolumeParams
> {
  estimate(params: T): number;
}

/** Normal-weight population regression */
export class NormalResidualVolumeEstimator implements ResidualVolumeEstimator {
  estimate({ age, height }: ResidualVolumeParams): number {
    const heightCm = height * 100;
    return 0.0275 * age + 0.0189 * heightCm - 2.6139;
  }
}

/** Overweight population regression */
export class OverweightResidualVolumeEstimator implements ResidualVolumeEstimator {
  estimate({ age, height }: ResidualVolumeParams): number {
    const heightCm = height * 100;
    return 0.0277 * age + 0.0138 * heightCm - 2.3967;
  }
}

/** Berglund regression */
export class BerglundResidualVolumeEstimator implements ResidualVolumeEstimator {
  estimate({ gender, age, height, weight }: ResidualVolumeParams): number {
    const heightCm = height * 100;
    if (gender === Gender.Female) {
      return 0.007 * age + 0.0268 * height - 3.42;
    }
    return 0.022 * age + 0.0198 * heightCm - 0.015 * weight - 1.54;
  }
}

/** Black regression */
export class BlackResidualVolumeEstimator implements ResidualVolumeEstimator {
  estimate({ age, height }: ResidualVolumeParams): number {
    const heightCm = height * 100;
    return 0.21 * age + 0.023 * heightCm - 2.978;
  }
}

/** Boren regression */
export class BorenResidualVolumeEstimator implements ResidualVolumeEstimator {
  estimate({ age, height }: ResidualVolumeParams): number {
    const heightCm = height * 100;
    return 0.0115 * age + 0.019 * heightCm - 2.24;
  }
}

/** Goldman regression */
export class GoldmanResidualVolumeEstimator implements ResidualVolumeEstimator {
  estimate({ gender, age, height }: ResidualVolumeParams): number {
    const heightCm = height * 100;
    if (gender === Gender.Female) {
      return 0.009 * age + 0.032 * heightCm - 3.9;
    }
    return 0.017 * age + 0.027 * heightCm - 3.477;
  }
}

/** O'Brien regression (requires body surface area) */
export class OBrienResidualVolumeEstimator
  implements ResidualVolumeEstimator<OBrienResidualVolumeParams>
{
  estimate({ age, height, bsa }: OBrienResidualVolumeParams): number {
    const heightCm = height * 100;
    return 0.03 * age + 0.0387 * heightCm - 0.73 * bsa - 4.78;
  }
}

/**
 * @class
 * @classdesc estimates residual lung volume using a pluggable regression strategy
 */
export class ResidualVolume<T extends ResidualVolumeParams = ResidualVolumeParams> {
  private strategy: ResidualVolumeEstimator<T>;
  private params: T;

  constructor(strategy: ResidualVolumeEstimator<T>, params: T) {
    this.strategy = strategy;
    this.params = params;
  }

  setStrategy(strategy: ResidualVolumeEstimator<T>): void {
    this.strategy = strategy;
  }

  estimate(): number {
    return this.strategy.estimate(this.params);
  }
}