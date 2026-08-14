import { Gender } from "../enums.js";
/**
   * Represents a class for comparing and calculating various exercise physiology metrics.
   * This class is useful for researchers, trainers, and athletes to evaluate performance
   * across different weight classes and genders.
   */
export declare class Compare {
    private gender;
    private weight;
    /**
     * Creates a new Compare instance.
     * @param gender - The gender of the athlete (Male or Female).
     * @param weight - The body weight of the athlete in kilograms.
     *
     * @example
     * const athlete = new Compare(Gender.Male, 80);
     */
    constructor(gender: Gender, weight: number);
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
    oCarroll(weightLifted: number): number;
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
    siffWeight(): number;
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
    siffPower(): number;
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
    siff(power?: boolean): number;
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
    sinclair(obtainedTotal: number): number;
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
    wilks(weightLifted: number): number;
}
/**
 * Represents a Jump class for various exercise physiology calculations.
 * This class provides methods to calculate power output and force production
 * during vertical jumps using different formulas from exercise science literature.
 */
export declare class Jump {
    weight: number;
    height: number;
    /**
   * Creates a new Jump instance.
   * @param weight - The weight of the individual in kilograms.
   * @param height - The height of the individual in meters.
   */
    constructor(weight: number, height: number);
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
    bosco(duration: number, jump_count: number, total_flight_time: number): number;
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
    lewis(vJumpHeight: number): number;
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
    harman(vJumpHeight: number, peak?: boolean): number;
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
    jb(vJumpHeight: number, peak?: boolean): number;
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
    sayer(vJumpHeight: number): number;
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
    mk(vJumpHeight: number, time: number): number;
}
/**
 * Contract every 1RM formula must satisfy.
 * predict/isValid are pure functions — no instance state to forget to reset.
 */
export interface RMFormula {
    readonly name: string;
    /** Human-readable note on what the formula is for and its critical factors/limits. */
    readonly description: string;
    predict(reps: number, weight: number): number;
    isValid(gender: Gender, age: number, reps: number, weight: number): boolean;
}
/**
 * Registry of all known formulas.
 *
 * Each entry carries a JSDoc block (for IDE hovers) *and* a `description`
 * field (so the same guidance can be surfaced in a UI or an error message
 * at runtime, e.g. when `isValid` rejects it).
 */
export declare const estimators: readonly [{
    name: string;
    description: string;
    predict: (_reps: number, weight: number) => number;
    weight: (rm: number) => number;
    isValid: (gender: Gender, age: number, reps: number) => boolean;
}, {
    name: string;
    description: string;
    predict: (reps: number, weight: number) => number;
    weight: (rm: number, reps: number) => number;
    isValid: () => true;
}, {
    name: string;
    description: string;
    predict: (reps: number, weight: number) => number;
    twoSet: (reps1: number, weight1: number, reps2: number, weight2: number) => number;
    isValid: () => true;
}, {
    name: string;
    description: string;
    predict: (reps: number, weight: number) => number;
    isValid: () => true;
}, {
    name: string;
    description: string;
    predict: (reps: number, weight: number) => number;
    weight: (rm: number, reps: number) => number;
    percent: (reps: number) => number;
    isValid: () => true;
}, {
    name: string;
    description: string;
    predict: (reps: number, weight: number) => number;
    weight: (rm: number, reps: number) => number;
    isValid: (_gender: Gender, _age: number, reps: number) => boolean;
}, {
    name: string;
    description: string;
    predict: (reps: number, weight: number) => number;
    percent: (reps: number) => number;
    football: (reps: number) => number;
    isValid: (_gender: Gender, age: number, reps: number) => boolean;
}, {
    name: string;
    description: string;
    predict: (reps: number, weight: number) => number;
    weight: (rm: number, reps: number) => number;
    isValid: () => true;
}, {
    name: string;
    description: string;
    predict: (reps: number, weight: number) => number;
    weight: (rm: number, reps: number) => number;
    isValid: () => true;
}, {
    name: string;
    description: string;
    predict: (_reps: number, weight: number) => number;
    isValid: () => true;
}, {
    name: string;
    description: string;
    predict: (_reps: number, weight: number) => number;
    isValid: () => true;
}, {
    name: string;
    description: string;
    predict: (reps: number, weight: number) => number;
    weight: (rm: number, reps: number) => number;
    isValid: () => true;
}];
export type FormulaName = (typeof estimators)[number]["name"];
/** All formulas applicable to a given lifter/set, in one call. */
export declare function applicableEstimators(gender: Gender, age: number, reps: number): RMFormula[];
/** Look up a formula by name (typed, autocompletes against FormulaName). */
export declare function getEstimator(name: FormulaName): RMFormula;
/** Predict 1RM with a named formula, refusing to run it outside its valid range. */
export declare function estimate1RM(name: FormulaName, gender: Gender, age: number, reps: number, weight: number): number;
/**
 * Represents various One Repetition Maximum (1RM) estimation methods.
 * Use this class to perform 1RM calculations based on gender and age.
 */
export declare class RM {
    gender: Gender;
    age: number;
    /**
     * Creates a new RM instance.
     * @param gender The gender of the individual.
     * @param dob The date of birth of the individual.
     */
    constructor(gender: Gender, age: number);
    /**
   * Estimates 1RM for YMCA upper body exercises.
   * @param reps The number of repetitions performed.
   * @returns The estimated 1RM.
   * @example
   * const rm = new RM(Gender.Male, new Date(1990, 0, 1));
   * const oneRM = rm.ymcaUpperBody(10); // Estimates 1RM for 10 reps
   */
    ymcaUpperBody(reps: number): number;
    /**
   * Estimates 1RM for middle-aged females.
   * @param reps The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns The estimated 1RM.
   */
    femaleMiddleAge(reps: number, weight: number): number;
    /**
   * Estimates 1RM for older females.
   * @param reps The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns The estimated 1RM.
   */
    femaleOlder(reps: number, weight: number): number;
    /**
   * Calculates the relative strength (1RM/bodyweight).
   * @param weight The body weight of the individual.
   * @param rm The one-repetition maximum.
   * @returns The relative strength.
   * @example
   * const rm = new RM(Gender.Male, new Date(1990, 0, 1));
   * const relativeStrength = rm.relative(80, 100); // Calculates relative strength for 100kg 1RM at 80kg bodyweight
   */
    relative(weight: number, rm: number): number;
}
//# sourceMappingURL=index.d.ts.map