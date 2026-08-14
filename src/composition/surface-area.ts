import { Gender } from "../enums.js";

export interface SurfaceAreaParams {
  gender: Gender;
  height: number; // in meters
  weight: number; // in kg
}

/**
 * Strategy interface for body surface area calculation algorithms.
 */
export interface SurfaceAreaEstimator {
  calculate(params: SurfaceAreaParams): number;
}

/** Boyd formula */
export class BoydStrategy implements SurfaceAreaEstimator {
  calculate({ height, weight }: SurfaceAreaParams): number {
    const heightCm = height * 100;
    return (
      0.0333 *
      Math.pow(weight, 0.6157 - 0.0188 * Math.log(weight)) *
      Math.pow(heightCm, 0.3)
    );
  }
}

/** Costeff formula */
export class CosteffStrategy implements SurfaceAreaEstimator {
  calculate({ weight }: SurfaceAreaParams): number {
    return (4 * weight + 7) / (90 + weight);
  }
}

/** DuBois & DuBois formula */
export class DuboisStrategy implements SurfaceAreaEstimator {
  calculate({ height, weight }: SurfaceAreaParams): number {
    const heightCm = height * 100;
    return 0.007184 * Math.pow(weight, 0.425) * Math.pow(heightCm, 0.725);
  }
}

/** Fujimoto formula */
export class FujimotoStrategy implements SurfaceAreaEstimator {
  calculate({ height, weight }: SurfaceAreaParams): number {
    const heightCm = height * 100;
    return 0.008883 * Math.pow(weight, 0.444) * Math.pow(heightCm, 0.663);
  }
}

/** Gehan & George formula */
export class GehanGeorgeStrategy implements SurfaceAreaEstimator {
  calculate({ height, weight }: SurfaceAreaParams): number {
    const heightCm = height * 100;
    return 0.0235 * Math.pow(weight, 0.51456) * Math.pow(heightCm, 0.42246);
  }
}

/** Haycock formula */
export class HaycockStrategy implements SurfaceAreaEstimator {
  calculate({ height, weight }: SurfaceAreaParams): number {
    const heightCm = height * 100;
    return 0.024265 * Math.pow(weight, 0.5378) * Math.pow(heightCm, 0.3964);
  }
}

/** Mosteller formula */
export class MostellerStrategy implements SurfaceAreaEstimator {
  calculate({ height, weight }: SurfaceAreaParams): number {
    return Math.sqrt(weight * height) / 6;
  }
}

/** Schlich formula (gender-dependent) */
export class SchlichStrategy implements SurfaceAreaEstimator {
  calculate({ gender, height, weight }: SurfaceAreaParams): number {
    const heightCm = height * 100;
    if (gender === Gender.Female) {
      return 0.000975482 * Math.pow(weight, 0.46) * Math.pow(heightCm, 1.08);
    }
    return 0.000579479 * Math.pow(weight, 0.38) * Math.pow(heightCm, 1.24);
  }
}

/** Shuter & Aslani formula */
export class ShuterAslaniStrategy implements SurfaceAreaEstimator {
  calculate({ height, weight }: SurfaceAreaParams): number {
    const heightCm = height * 100;
    return 0.00949 * Math.pow(weight, 0.441) * Math.pow(heightCm, 0.655);
  }
}

/** Takahira formula */
export class TakahiraStrategy implements SurfaceAreaEstimator {
  calculate({ height, weight }: SurfaceAreaParams): number {
    const heightCm = height * 100;
    return 0.007241 * Math.pow(weight, 0.425) * Math.pow(heightCm, 0.725);
  }
}

/**
 * Context class for body surface area calculations.
 * Delegates the actual computation to a pluggable SurfaceAreaEstimator.
 * @class
 * @classdesc computes body surface area using a configurable algorithm
 */
export class SurfaceArea {
  private strategy: SurfaceAreaEstimator;
  private params: SurfaceAreaParams;

  constructor(
    strategy: SurfaceAreaEstimator,
    gender: Gender,
    height: number,
    weight: number
  ) {
    this.strategy = strategy;
    this.params = { gender, height, weight };
  }

  /**
   * Swap the algorithm used for calculation at runtime.
   */
  setStrategy(strategy: SurfaceAreaEstimator): void {
    this.strategy = strategy;
  }

  /**
   * @returns {Number} surface area in meters^2, using the current strategy
   */
  calculate(): number {
    return this.strategy.calculate(this.params);
  }
}