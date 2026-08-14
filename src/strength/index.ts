import { Gender } from "../enums.js";

/**
   * Represents a class for comparing and calculating various exercise physiology metrics.
   * This class is useful for researchers, trainers, and athletes to evaluate performance
   * across different weight classes and genders.
   */
export class Compare {
  private gender: Gender;
  private weight: number;

  /**
   * Creates a new Compare instance.
   * @param gender - The gender of the athlete (Male or Female).
   * @param weight - The body weight of the athlete in kilograms.
   * 
   * @example
   * const athlete = new Compare(Gender.Male, 80);
   */
  constructor(gender: Gender, weight: number) {
      this.gender = gender;
      this.weight = weight;
  }

  /**
   * Calculates the O'Carroll coefficient for a given weight lifted.
   * Used to compare strength across different body weights.
   * 
   * @param weightLifted - The weight lifted by the athlete in kilograms.
   * @returns The O'Carroll coefficient.
   * 
   * @example
   * const athlete = new Compare(Gender.Male, 80);
   * const oCarrollCoeff = athlete.oCarroll(150);
   */
  oCarroll(weightLifted: number): number {
      return weightLifted/Math.pow(this.weight-35, 1/3);
  }

  /**
   * Calculates the Siff weight coefficient.
   * Used in powerlifting to compare performances across different weight classes.
   * 
   * @returns The Siff weight coefficient.
   * 
   * @example
   * const athlete = new Compare(Gender.Female, 65);
   * const siffWeightCoeff = athlete.siffWeight();
   */
  siffWeight(): number {
      let a: number = 512.245;
      let b: number = 146230;
      let c: number = 1.605;
      if(this.gender === Gender.Female) {
          a = 943.063;
          b = 0.05142;
          c = 257.314;
          return c-a*Math.exp(-b*this.weight);
      }
      return a-b*Math.pow(this.weight, -c);
  }

  /**
   * Calculates the Siff power coefficient.
   * Used in powerlifting to compare power output across different weight classes.
   * Note: This method currently returns 0 for female athletes.
   * 
   * @returns The Siff power coefficient.
   * 
   * @example
   * const athlete = new Compare(Gender.Male, 90);
   * const siffPowerCoeff = athlete.siffPower();
   */
  siffPower(): number {
      const a: number = 512.245;
      const b: number = 172970;
      const c: number = 1.3925;
      if(this.gender === Gender.Female) {
          return 0;
      }
      return a-b*Math.pow(this.weight, -c);
  }

  /**
   * Calculates either the Siff weight or power coefficient based on the input parameter.
   * 
   * @param power - If true, calculates the power coefficient; otherwise, calculates the weight coefficient.
   * @returns The Siff coefficient (weight or power).
   * 
   * @example
   * const athlete = new Compare(Gender.Male, 75);
   * const siffWeightCoeff = athlete.siff();
   * const siffPowerCoeff = athlete.siff(true);
   */
  siff(power: boolean=false): number {
      if(power) {
          return this.siffPower();
      }
      return this.siffWeight();
  }

  /**
   * Calculates the Sinclair coefficient for a given total weight lifted.
   * Used in Olympic weightlifting to compare performances across different weight classes.
   * 
   * @param obtainedTotal - The total weight lifted by the athlete in kilograms.
   * @returns The Sinclair coefficient.
   * 
   * @example
   * const athlete = new Compare(Gender.Female, 58);
   * const sinclairCoeff = athlete.sinclair(200);
   */
  sinclair(obtainedTotal: number): number {
      let coefficientA: number = 0.794358141;
      let coefficientB: number = 174.393;
      if(this.gender === Gender.Female) {
          coefficientA = 0.897260740;
          coefficientB = 148.026;
      }
      if(this.weight > coefficientB) {
            return 1;
      }
      const exponent: number = Math.pow( coefficientA * Math.log10(this.weight/coefficientB), 2 );
      const multiplier: number = Math.pow(10, exponent);
      return multiplier * obtainedTotal;
  }

  /**
   * Calculates the Wilks coefficient for a given weight lifted.
   * Used in powerlifting to compare performances across different weight classes and genders.
   * 
   * @param weightLifted - The weight lifted by the athlete in kilograms.
   * @returns The Wilks coefficient.
   * 
   * @example
   * const athlete = new Compare(Gender.Male, 100);
   * const wilksCoeff = athlete.wilks(250);
   */
  wilks(weightLifted: number): number {
      let a: number = -216.0475144;
      let b: number = 16.2606339;
      let c: number = -0.002388645;
      let d: number = -0.00113732;
      let e: number = 7.01863E-06;
      let f: number = -1.291E-08;

      if(this.gender === Gender.Female) {
          a = 594.31747775582;
          b = -27.23842536447;
          c = 0.82112226871;
          d = -0.00930733913;
          e = 4.731582E-05;
          f = -9.054E-08;
      }
      const coefficient: number = 500/(a + b*this.weight + c * Math.pow(this.weight, 2) + d * Math.pow(this.weight, 3) + e * Math.pow(this.weight, 4) + f * Math.pow(this.weight, 5) );
      return coefficient * weightLifted;
  }
}

/**
 * Represents a Jump class for various exercise physiology calculations.
 * This class provides methods to calculate power output and force production
 * during vertical jumps using different formulas from exercise science literature.
 */
export class Jump {
  public weight: number;
  public height: number;

    /**
   * Creates a new Jump instance.
   * @param weight - The weight of the individual in kilograms.
   * @param height - The height of the individual in meters.
   */
    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height;
    }

    /**
   * Calculates power output using the Bosco formula.
   * @param duration - Total duration of the test in seconds.
   * @param jump_count - Number of jumps performed during the test.
   * @param total_flight_time - Total flight time of all jumps in seconds.
   * @returns Power output in watts.
   * 
   * @example
   * const jump = new Jump(70, 1.75);
   * const power = jump.bosco(60, 30, 25);
   * console.log(power); // Output: Power in watts
   * 
   * Use this method for repeated jump tests to assess anaerobic power.
   */
    bosco(duration: number, jump_count: number, total_flight_time: number): number {
        return (total_flight_time * duration * Math.pow(9.81,2)) / (4 * jump_count * (duration - total_flight_time) );
    }

    /**
   * Calculates power output using the Lewis formula.
   * @param vJumpHeight - Vertical jump height in meters.
   * @returns Power output in watts.
   * 
   * @example
   * const jump = new Jump(70, 1.75);
   * const power = jump.lewis(0.5);
   * console.log(power); // Output: Power in watts
   * 
   * Use this method for quick power assessments based on vertical jump height.
   */
    lewis(vJumpHeight: number): number {
        return Math.sqrt(4.9 * this.weight) * Math.sqrt(vJumpHeight) * 9.81;
    }

    /**
   * Calculates power output using the Harman formula.
   * @param vJumpHeight - Vertical jump height in meters.
   * @param peak - If true, calculates peak power; if false, calculates average power.
   * @returns Power output in watts.
   * 
   * @example
   * const jump = new Jump(70, 1.75);
   * const peakPower = jump.harman(0.5, true);
   * const avgPower = jump.harman(0.5);
   * console.log(peakPower, avgPower);
   * 
   * Use this method when you need to differentiate between peak and average power.
   */
    harman(vJumpHeight: number, peak: boolean=false): number {
        const vJumpHeightCm: number = vJumpHeight * 100;
        if(peak) {
            return 61.9*vJumpHeightCm + 36*this.weight + 1822;
        }
        return 21.1 *vJumpHeightCm + 2.3*this.weight + 1393;
    }

    /**
   * Calculates power output using the Johnson & Bahamonde (JB) formula.
   * @param vJumpHeight - Vertical jump height in meters.
   * @param peak - If true, calculates peak power; if false, calculates average power.
   * @returns Power output in watts.
   * 
   * @example
   * const jump = new Jump(70, 1.75);
   * const peakPower = jump.jb(0.5, true);
   * const avgPower = jump.jb(0.5);
   * console.log(peakPower, avgPower);
   * 
   * Use this method when you need to account for body height in power calculations.
   */
    jb(vJumpHeight: number, peak: boolean=false): number {
        const bodyHeightCm: number = this.height * 100;
        const vJumpHeightCm: number = vJumpHeight * 100;
        if(peak) {
            return 78.6*vJumpHeightCm +60.3*this.weight + 15.3*bodyHeightCm + 1308;
        }
        return 43.8*vJumpHeightCm + 32.7*this.weight - 16.8*bodyHeightCm + 431;
    }

    /**
   * Calculates power output using the Sayer formula.
   * @param vJumpHeight - Vertical jump height in meters.
   * @returns Power output in watts.
   * 
   * @example
   * const jump = new Jump(70, 1.75);
   * const power = jump.sayer(0.5);
   * console.log(power); // Output: Power in watts
   * 
   * Use this method as an alternative to other power calculation formulas.
   */
    sayer(vJumpHeight: number): number {
        const vJumpHeightCm: number = vJumpHeight * 100;
        return 60.7*vJumpHeightCm + 45.3*this.weight - 2055;
    }

    /**
   * Calculates power output using the MK formula.
   * @param vJumpHeight - Vertical jump height in meters.
   * @param time - Time to reach the maximum height in seconds.
   * @returns Power output in watts.
   * 
   * @example
   * const jump = new Jump(70, 1.75);
   * const power = jump.mk(0.5, 0.3);
   * console.log(power); // Output: Power in watts
   * 
   * Use this method when you have data on the time taken to reach maximum jump height.
   */
    mk(vJumpHeight: number, time: number): number {
        return (this.weight * (vJumpHeight/time)) * 9.81;
    }
  }


/**
 * Contract every 1RM estimator must satisfy on the *instance* side.
 * Pure/stateless — an instance holds no data of its own, it's just a
 * vehicle for the strategy's `estimate1RM` implementation.
 */
export interface OneRMEstimator {
  /**
   * Estimate a 1-rep max from a set of `reps` performed at `weight`.
   *
   * @param weight - Weight lifted for the set, in kilograms.
   * @param reps - Number of repetitions performed at that weight.
   * @returns The estimated 1-rep max, in kilograms.
   *
   * @example
   * const epley = new Epley();
   * const oneRM = epley.estimate1RM(100, 5); // ~116.5
   */
  estimate1RM(weight: number, reps: number): number;
}

/**
 * Optional second capability: given a target 1RM and a rep count, back out
 * the working weight expected to produce it. Not every formula has a clean
 * algebraic inverse (Brzycki, Epley, Mayhew, and the Reynolds formulas
 * don't), so this is a separate interface rather than a required part of
 * `OneRMEstimator`
 */
export interface WeightEstimator {
  /**
   * Back out the working weight expected to produce `oneRM` for a set of `reps`.
   *
   * @param oneRM - Target/known 1-rep max, in kilograms.
   * @param reps - Number of repetitions the set will be performed for.
   * @returns The working weight to use, in kilograms.
   *
   * @example
   * const baechle = new Baechle();
   * const workingWeight = baechle.estimateWeight(150, 8); // weight for a set of 8 at a 150kg 1RM
   */
  estimateWeight(oneRM: number, reps: number): number;
}

/**
 * Contract every 1RM estimator must satisfy on the *static* side.
 * `implements` in TypeScript only checks the instance side of a class, so
 * static members like `isValid` have to be verified separately — see
 * `checkEstimators` below.
 */
export interface OneRMEstimatorClass<T extends OneRMEstimator = OneRMEstimator> {
  new (): T;
  /** Display name; doubles as the registry key / `FormulaName` literal. */
  readonly formulaName: string;
  /** Human-readable note on what the formula is for and its critical factors/limits. */
  readonly description: string;
  /**
   * Whether this formula is appropriate for the given lifter/set.
   *
   * @param gender - The lifter's gender.
   * @param age - The lifter's age, in years.
   * @param reps - Number of repetitions performed.
   * @param weight - Weight lifted, in kilograms.
   * @returns `true` if this formula is valid to use for the given inputs.
   */
  isValid(gender: Gender, age: number, reps: number, weight: number): boolean;
}

/**
 * Validates an array of classes against `OneRMEstimatorClass` and returns
 * it with its full literal tuple type intact — the static-side analogue of
 * the old `formula()` helper. A missing/mistyped static member (`isValid`,
 * `formulaName`, ...) is still a build error, while instance extras like
 * `twoSet`, `percent`, or `football` stay callable on the specific classes
 * that define them.
 *
 * @param classes - The strategy classes to validate, as a tuple (pass with `as const`).
 * @returns The same tuple, with its literal type preserved.
 */
function checkEstimators<T extends readonly OneRMEstimatorClass[]>(classes: T): T {
  return classes;
}

/**
 * Abadie method.
 * Young adult females (18–24) performing 5–10 repetitions.
 *
 * @example
 * const abadie = new Abadie();
 * abadie.estimate1RM(50, 8);
 */
export class Abadie implements OneRMEstimator, WeightEstimator {
  static readonly formulaName = "Abadie";
  static readonly description = "Young adult females (18–24) performing 5–10 repetitions.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(gender: Gender, age: number, reps: number, _weight: number): boolean {
    return gender === Gender.Female && reps >= 5 && reps <= 10 && age > 17 && age < 25;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, _reps: number): number {
    return 7.24 + 1.05 * weight;
  }

  /** @inheritDoc WeightEstimator.estimateWeight */
  estimateWeight(oneRM: number, _reps: number): number {
    return (4 / 105) * (25 * oneRM - 181);
  }
}

/**
 * Baechle method.
 * General purpose — no specific limitations.
 *
 * @example
 * const baechle = new Baechle();
 * baechle.estimate1RM(100, 8);
 */
export class Baechle implements OneRMEstimator, WeightEstimator {
  static readonly formulaName = "Baechle";
  static readonly description = "General purpose — no specific limitations.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, _reps: number, _weight: number): boolean {
    return true;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, reps: number): number {
    return weight * (1 + 0.033 * reps);
  }

  /** @inheritDoc WeightEstimator.estimateWeight */
  estimateWeight(oneRM: number, reps: number): number {
    return (1000 * oneRM) / (33 * reps + 1000);
  }
}

/**
 * Brzycki method.
 * General purpose — no specific limitations. Also supports two-set estimation.
 *
 * @example
 * const brzycki = new Brzycki();
 * brzycki.estimate1RM(100, 8);
 */
export class Brzycki implements OneRMEstimator {
  static readonly formulaName = "Brzycki";
  static readonly description =
    "General purpose — no specific limitations. Supports two-set estimation.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, _reps: number, _weight: number): boolean {
    return true;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, reps: number): number {
    return weight / (1.0278 - 0.0278 * reps);
  }

  /**
   * Estimate 1RM from two different sets (reps/weight pairs) instead of one.
   *
   * @param reps1 - Repetitions performed in the first set.
   * @param weight1 - Weight lifted in the first set, in kilograms.
   * @param reps2 - Repetitions performed in the second set.
   * @param weight2 - Weight lifted in the second set, in kilograms.
   * @returns The estimated 1-rep max, in kilograms.
   *
   * @example
   * const brzycki = new Brzycki();
   * brzycki.twoSet(8, 100, 3, 115);
   */
  twoSet(reps1: number, weight1: number, reps2: number, weight2: number): number {
    return ((weight1 - weight2) / (reps2 - reps1)) * (reps1 - 1) + weight1;
  }
}

/**
 * Epley method.
 * General purpose — no specific limitations.
 *
 * @example
 * const epley = new Epley();
 * epley.estimate1RM(100, 8);
 */
export class Epley implements OneRMEstimator {
  static readonly formulaName = "Epley";
  static readonly description = "General purpose — no specific limitations.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, _reps: number, _weight: number): boolean {
    return true;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, reps: number): number {
    return weight * reps * 0.033 + weight;
  }
}

/**
 * Landers method.
 * General purpose — no specific limitations. Also exposes `percent` for %1RM at a given rep count.
 *
 * @example
 * const landers = new Landers();
 * landers.estimate1RM(100, 8);
 */
export class Landers implements OneRMEstimator, WeightEstimator {
  static readonly formulaName = "Landers";
  static readonly description = "General purpose — no specific limitations.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, _reps: number, _weight: number): boolean {
    return true;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, reps: number): number {
    return weight / (1.013 - 0.0267123 * reps);
  }

  /** @inheritDoc WeightEstimator.estimateWeight */
  estimateWeight(oneRM: number, reps: number): number {
    return oneRM * (1.013 - 0.0267123 * reps);
  }

  /**
   * Percentage of 1RM expected at a given rep count.
   *
   * @param reps - Number of repetitions.
   * @returns The fraction of 1RM (e.g. `0.85` for 85%) expected at that rep count.
   *
   * @example
   * const landers = new Landers();
   * landers.percent(5); // ~0.88
   */
  percent(reps: number): number {
    return (101.3 - 2.67123 * reps) / 100;
  }
}

/**
 * Lombardi method.
 * Repetitions must be under 11 — accuracy degrades outside that range.
 *
 * @example
 * const lombardi = new Lombardi();
 * lombardi.estimate1RM(100, 8);
 */
export class Lombardi implements OneRMEstimator, WeightEstimator {
  static readonly formulaName = "Lombardi";
  static readonly description = "Repetitions must be under 11.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, reps: number, _weight: number): boolean {
    return reps < 11;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, reps: number): number {
    return weight * Math.pow(reps, 0.1);
  }

  /** @inheritDoc WeightEstimator.estimateWeight */
  estimateWeight(oneRM: number, reps: number): number {
    return oneRM / Math.pow(reps, 0.1);
  }
}

/**
 * Mayhew method.
 * Young adults (18–24) performing under 15 repetitions. Also exposes a
 * `football`-specific regression.
 *
 * @example
 * const mayhew = new Mayhew();
 * mayhew.estimate1RM(100, 8);
 */
export class Mayhew implements OneRMEstimator {
  static readonly formulaName = "Mayhew";
  static readonly description = "Young adults (18–24) performing under 15 repetitions.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, age: number, reps: number, _weight: number): boolean {
    return reps < 15 && age > 17 && age < 25;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, reps: number): number {
    return (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps));
  }

  /**
   * Percentage of 1RM expected at a given rep count.
   *
   * @param reps - Number of repetitions.
   * @returns The fraction of 1RM (e.g. `0.85` for 85%) expected at that rep count.
   */
  percent(reps: number): number {
    return (52.2 + 41.9 * Math.exp(-0.055 * reps)) / 100;
  }

  /**
   * Football-specific regression variant.
   *
   * @param reps - Number of repetitions performed.
   * @returns The estimated 1-rep max, in kilograms, for a football-specific bench press population.
   */
  football(reps: number): number {
    return 226.7 + 7.1 * reps;
  }
}

/**
 * McGlothin method.
 * General purpose — no specific limitations.
 *
 * @example
 * const mcGlothin = new McGlothin();
 * mcGlothin.estimate1RM(100, 8);
 */
export class McGlothin implements OneRMEstimator, WeightEstimator {
  static readonly formulaName = "McGlothin";
  static readonly description = "General purpose — no specific limitations.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, _reps: number, _weight: number): boolean {
    return true;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, reps: number): number {
    return (100 * weight) / (101.3 - 2.67123 * reps);
  }

  /** @inheritDoc WeightEstimator.estimateWeight */
  estimateWeight(oneRM: number, reps: number): number {
    return (oneRM * (101.3 - 2.67123 * reps)) / 100;
  }
}

/**
 * O'Connor method.
 * General purpose — no specific limitations.
 *
 * @example
 * const oConnor = new OConnor();
 * oConnor.estimate1RM(100, 8);
 */
export class OConnor implements OneRMEstimator, WeightEstimator {
  static readonly formulaName = "OConnor";
  static readonly description = "General purpose — no specific limitations.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, _reps: number, _weight: number): boolean {
    return true;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, reps: number): number {
    return weight * (1 + 0.025 * reps);
  }

  /** @inheritDoc WeightEstimator.estimateWeight */
  estimateWeight(oneRM: number, reps: number): number {
    return (40 * oneRM) / (reps + 40);
  }
}

/**
 * Reynolds CP (chest press) method.
 * Use specifically for chest press exercises.
 *
 * @example
 * const reynoldsCP = new ReynoldsCP();
 * reynoldsCP.estimate1RM(100, 8);
 */
export class ReynoldsCP implements OneRMEstimator {
  static readonly formulaName = "ReynoldsCP";
  static readonly description = "Chest press exercises specifically.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, _reps: number, _weight: number): boolean {
    return true;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, _reps: number): number {
    return 1.1307 * weight + 0.6998;
  }
}

/**
 * Reynolds LP (leg press) method.
 * Use specifically for leg press exercises.
 *
 * @example
 * const reynoldsLP = new ReynoldsLP();
 * reynoldsLP.estimate1RM(150, 8);
 */
export class ReynoldsLP implements OneRMEstimator {
  static readonly formulaName = "ReynoldsLP";
  static readonly description = "Leg press exercises specifically.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, _reps: number, _weight: number): boolean {
    return true;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, _reps: number): number {
    return 1.09703 * weight + 14.2546;
  }
}

/**
 * Wathan method.
 * General purpose — no specific limitations.
 *
 * @example
 * const wathan = new Wathan();
 * wathan.estimate1RM(100, 8);
 */
export class Wathan implements OneRMEstimator, WeightEstimator {
  static readonly formulaName = "Wathan";
  static readonly description = "General purpose — no specific limitations.";

  /** @inheritDoc OneRMEstimatorClass.isValid */
  static isValid(_gender: Gender, _age: number, _reps: number, _weight: number): boolean {
    return true;
  }

  /** @inheritDoc OneRMEstimator.estimate1RM */
  estimate1RM(weight: number, reps: number): number {
    return (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps));
  }

  /** @inheritDoc WeightEstimator.estimateWeight */
  estimateWeight(oneRM: number, reps: number): number {
    return (oneRM * (48.8 + 53.8 * Math.exp(-0.075 * reps))) / 100;
  }
}

/** Registry of all known strategies, type-checked as a whole by `checkEstimators`. */
export const estimators = checkEstimators([
  Abadie,
  Baechle,
  Brzycki,
  Epley,
  Landers,
  Lombardi,
  Mayhew,
  McGlothin,
  OConnor,
  ReynoldsCP,
  ReynoldsLP,
  Wathan,
] as const);

/** Union of every registered strategy's `formulaName`, e.g. `"Epley" | "Brzycki" | ...`. */
export type FormulaName = (typeof estimators)[number]["formulaName"];

/**
 * All strategies applicable to a given lifter/set, in one call.
 *
 * @param gender - The lifter's gender.
 * @param age - The lifter's age, in years.
 * @param reps - Number of repetitions performed.
 * @param weight - Weight lifted, in kilograms.
 * @returns The strategy classes whose `isValid` accepts these inputs.
 *
 * @example
 * const options = applicableEstimators(Gender.Male, 30, 8, 100);
 * options.map((e) => e.formulaName); // e.g. ["Baechle", "Brzycki", "Epley", ...]
 */
export function applicableEstimators(
  gender: Gender,
  age: number,
  reps: number,
  weight: number,
): OneRMEstimatorClass[] {
  return estimators.filter((e) => e.isValid(gender, age, reps, weight));
}

/**
 * Look up a strategy class by name (typed, autocompletes against FormulaName).
 *
 * @param name - The strategy's `formulaName`.
 * @returns The matching strategy class.
 * @throws {Error} If no strategy is registered under `name`.
 *
 * @example
 * const Epley = getEstimator("Epley");
 * new Epley().estimate1RM(100, 8);
 */
export function getEstimator(name: FormulaName): OneRMEstimatorClass {
  const found = estimators.find((e) => e.formulaName === name);
  if (!found) throw new Error(`Unknown formula: ${name}`);
  return found;
}

/**
 * Predict 1RM with a named strategy, refusing to run it outside its valid range.
 *
 * @param name - The strategy's `formulaName`.
 * @param gender - The lifter's gender.
 * @param age - The lifter's age, in years.
 * @param reps - Number of repetitions performed.
 * @param weight - Weight lifted, in kilograms.
 * @returns The estimated 1-rep max, in kilograms.
 * @throws {Error} If no strategy is registered under `name`, or if the strategy's
 * `isValid` rejects the given `gender`/`age`/`reps`/`weight`.
 *
 * @example
 * const oneRM = estimate1RM("Epley", Gender.Male, 30, 8, 100);
 */
export function estimate1RM(
  name: FormulaName,
  gender: Gender,
  age: number,
  reps: number,
  weight: number,
): number {
  const Estimator = getEstimator(name);
  if (!Estimator.isValid(gender, age, reps, weight)) {
    throw new Error(`${name} requires: ${Estimator.description}`);
  }
  return new Estimator().estimate1RM(weight, reps);
}


/**
 * Represents various One Repetition Maximum (1RM) estimation methods.
 * Use this class to perform 1RM calculations based on gender and age.
 */
export class RM {
  public gender: Gender;
  public age: number;

  /**
   * Creates a new RM instance.
   * @param gender The gender of the individual.
   * @param dob The date of birth of the individual.
   */
    constructor(gender: Gender, age: number) {
        this.gender = gender;
        this.age = age
      }

    /**
   * Estimates 1RM for YMCA upper body exercises.
   * @param reps The number of repetitions performed.
   * @returns The estimated 1RM.
   * @example
   * const rm = new RM(Gender.Male, new Date(1990, 0, 1));
   * const oneRM = rm.ymcaUpperBody(10); // Estimates 1RM for 10 reps
   */
    ymcaUpperBody(reps: number): number {
        if(this.gender === Gender.Female) {
            return (0.31 * reps) + 19.2;
        }
        return (1.55 * reps) + 37.9;
    }

    /**
   * Estimates 1RM for middle-aged females.
   * @param reps The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns The estimated 1RM.
   */
    femaleMiddleAge(reps: number, weight: number): number {
        return  (1.06 * weight) + (0.58 * reps) - (0.20 * this.age) - 3.41;
    }

    /**
   * Estimates 1RM for older females.
   * @param reps The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns The estimated 1RM.
   */
    femaleOlder(reps: number, weight: number): number {
        return (0.92 * weight) + (0.79 * reps) - (0.20 * this.age) - 3.73;
    }

    /**
   * Calculates the relative strength (1RM/bodyweight).
   * @param weight The body weight of the individual.
   * @param rm The one-repetition maximum.
   * @returns The relative strength.
   * @example
   * const rm = new RM(Gender.Male, new Date(1990, 0, 1));
   * const relativeStrength = rm.relative(80, 100); // Calculates relative strength for 100kg 1RM at 80kg bodyweight
   */
    relative(weight: number, rm: number): number {
        return rm / weight;
    }
}