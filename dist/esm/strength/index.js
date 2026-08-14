import { Gender } from "../enums.js";
/**
   * Represents a class for comparing and calculating various exercise physiology metrics.
   * This class is useful for researchers, trainers, and athletes to evaluate performance
   * across different weight classes and genders.
   */
export class Compare {
    gender;
    weight;
    /**
     * Creates a new Compare instance.
     * @param gender - The gender of the athlete (Male or Female).
     * @param weight - The body weight of the athlete in kilograms.
     *
     * @example
     * const athlete = new Compare(Gender.Male, 80);
     */
    constructor(gender, weight) {
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
    oCarroll(weightLifted) {
        return weightLifted / Math.pow(this.weight - 35, 1 / 3);
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
    siffWeight() {
        let a = 512.245;
        let b = 146230;
        let c = 1.605;
        if (this.gender === Gender.Female) {
            a = 943.063;
            b = 0.05142;
            c = 257.314;
            return c - a * Math.exp(-b * this.weight);
        }
        return a - b * Math.pow(this.weight, -c);
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
    siffPower() {
        const a = 512.245;
        const b = 172970;
        const c = 1.3925;
        if (this.gender === Gender.Female) {
            return 0;
        }
        return a - b * Math.pow(this.weight, -c);
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
    siff(power = false) {
        if (power) {
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
    sinclair(obtainedTotal) {
        let coefficientA = 0.794358141;
        let coefficientB = 174.393;
        if (this.gender === Gender.Female) {
            coefficientA = 0.897260740;
            coefficientB = 148.026;
        }
        if (this.weight > coefficientB) {
            return 1;
        }
        const exponent = Math.pow(coefficientA * Math.log10(this.weight / coefficientB), 2);
        const multiplier = Math.pow(10, exponent);
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
    wilks(weightLifted) {
        let a = -216.0475144;
        let b = 16.2606339;
        let c = -0.002388645;
        let d = -0.00113732;
        let e = 7.01863E-06;
        let f = -1.291E-08;
        if (this.gender === Gender.Female) {
            a = 594.31747775582;
            b = -27.23842536447;
            c = 0.82112226871;
            d = -0.00930733913;
            e = 4.731582E-05;
            f = -9.054E-08;
        }
        const coefficient = 500 / (a + b * this.weight + c * Math.pow(this.weight, 2) + d * Math.pow(this.weight, 3) + e * Math.pow(this.weight, 4) + f * Math.pow(this.weight, 5));
        return coefficient * weightLifted;
    }
}
/**
 * Represents a Jump class for various exercise physiology calculations.
 * This class provides methods to calculate power output and force production
 * during vertical jumps using different formulas from exercise science literature.
 */
export class Jump {
    weight;
    height;
    /**
   * Creates a new Jump instance.
   * @param weight - The weight of the individual in kilograms.
   * @param height - The height of the individual in meters.
   */
    constructor(weight, height) {
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
    bosco(duration, jump_count, total_flight_time) {
        return (total_flight_time * duration * Math.pow(9.81, 2)) / (4 * jump_count * (duration - total_flight_time));
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
    lewis(vJumpHeight) {
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
    harman(vJumpHeight, peak = false) {
        const vJumpHeightCm = vJumpHeight * 100;
        if (peak) {
            return 61.9 * vJumpHeightCm + 36 * this.weight + 1822;
        }
        return 21.1 * vJumpHeightCm + 2.3 * this.weight + 1393;
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
    jb(vJumpHeight, peak = false) {
        const bodyHeightCm = this.height * 100;
        const vJumpHeightCm = vJumpHeight * 100;
        if (peak) {
            return 78.6 * vJumpHeightCm + 60.3 * this.weight + 15.3 * bodyHeightCm + 1308;
        }
        return 43.8 * vJumpHeightCm + 32.7 * this.weight - 16.8 * bodyHeightCm + 431;
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
    sayer(vJumpHeight) {
        const vJumpHeightCm = vJumpHeight * 100;
        return 60.7 * vJumpHeightCm + 45.3 * this.weight - 2055;
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
    mk(vJumpHeight, time) {
        return (this.weight * (vJumpHeight / time)) * 9.81;
    }
}
/**
 * Validates an object against RMFormula and returns it with its full literal
 * type intact. Checking through a generic parameter (rather than a direct
 * `satisfies RMFormula`/`: RMFormula` annotation) enforces every required
 * member — a missing/mistyped `isValid` is still a build error — but does
 * NOT trigger excess-property checking, so formula-specific extras like
 * `weight`, `percent`, or `football` are allowed and stay callable.
 */
function formula(f) {
    return f;
}
/**
 * Registry of all known formulas.
 *
 * Each entry carries a JSDoc block (for IDE hovers) *and* a `description`
 * field (so the same guidance can be surfaced in a UI or an error message
 * at runtime, e.g. when `isValid` rejects it).
 */
export const estimators = [
    /**
     * Abadie method.
     * Use for young adult females performing 5–10 repetitions.
     */
    formula({
        name: "Abadie",
        description: "Young adult females (18–24) performing 5–10 repetitions.",
        predict: (_reps, weight) => 7.24 + 1.05 * weight,
        weight: (rm) => (4 / 105) * (25 * rm - 181),
        isValid: (gender, age, reps) => gender === Gender.Female && reps >= 5 && reps <= 10 && age > 17 && age < 25,
    }),
    /**
     * Baechle method.
     * General-purpose; no population or rep-range restriction.
     */
    formula({
        name: "Baechle",
        description: "General purpose — no specific limitations.",
        predict: (reps, weight) => weight * (1 + 0.033 * reps),
        weight: (rm, reps) => (1000 * rm) / (33 * reps + 1000),
        isValid: () => true,
    }),
    /**
     * Brzycki method.
     * General-purpose; also exposes `twoSet` for estimating from two sets of data.
     */
    formula({
        name: "Brzycki",
        description: "General purpose — no specific limitations. Supports two-set estimation.",
        predict: (reps, weight) => weight / (1.0278 - 0.0278 * reps),
        twoSet: (reps1, weight1, reps2, weight2) => ((weight1 - weight2) / (reps2 - reps1)) * (reps1 - 1) + weight1,
        isValid: () => true,
    }),
    /**
     * Epley method.
     * General-purpose; no population or rep-range restriction.
     */
    formula({
        name: "Epley",
        description: "General purpose — no specific limitations.",
        predict: (reps, weight) => weight * reps * 0.033 + weight,
        isValid: () => true,
    }),
    /**
     * Landers method.
     * General-purpose; also exposes `percent` for %1RM at a given rep count.
     */
    formula({
        name: "Landers",
        description: "General purpose — no specific limitations.",
        predict: (reps, weight) => weight / (1.013 - 0.0267123 * reps),
        weight: (rm, reps) => rm * (1.013 - 0.0267123 * reps),
        percent: (reps) => (101.3 - 2.67123 * reps) / 100,
        isValid: () => true,
    }),
    /**
     * Lombardi method.
     * Use for repetitions under 11 — accuracy degrades outside that range.
     */
    formula({
        name: "Lombardi",
        description: "Repetitions must be under 11.",
        predict: (reps, weight) => weight * Math.pow(reps, 0.1),
        weight: (rm, reps) => rm / Math.pow(reps, 0.1),
        isValid: (_gender, _age, reps) => reps < 11,
    }),
    /**
     * Mayhew method.
     * Use for young adults (18–24) performing under 15 repetitions.
     * Also exposes a `football`-specific regression.
     */
    formula({
        name: "Mayhew",
        description: "Young adults (18–24) performing under 15 repetitions.",
        predict: (reps, weight) => (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps)),
        percent: (reps) => (52.2 + 41.9 * Math.exp(-0.055 * reps)) / 100,
        football: (reps) => 226.7 + 7.1 * reps,
        isValid: (_gender, age, reps) => reps < 15 && age > 17 && age < 25,
    }),
    /**
     * McGlothin method.
     * General-purpose; no population or rep-range restriction.
     */
    formula({
        name: "McGlothin",
        description: "General purpose — no specific limitations.",
        predict: (reps, weight) => (100 * weight) / (101.3 - 2.67123 * reps),
        weight: (rm, reps) => (rm * (101.3 - 2.67123 * reps)) / 100,
        isValid: () => true,
    }),
    /**
     * O'Connor method.
     * General-purpose; no population or rep-range restriction.
     */
    formula({
        name: "OConnor",
        description: "General purpose — no specific limitations.",
        predict: (reps, weight) => weight * (1 + 0.025 * reps),
        weight: (rm, reps) => (40 * rm) / (reps + 40),
        isValid: () => true,
    }),
    /**
     * Reynolds CP (chest press) method.
     * Use specifically for chest press exercises.
     */
    formula({
        name: "ReynoldsCP",
        description: "Chest press exercises specifically.",
        predict: (_reps, weight) => 1.1307 * weight + 0.6998,
        isValid: () => true,
    }),
    /**
     * Reynolds LP (leg press) method.
     * Use specifically for leg press exercises.
     */
    formula({
        name: "ReynoldsLP",
        description: "Leg press exercises specifically.",
        predict: (_reps, weight) => 1.09703 * weight + 14.2546,
        isValid: () => true,
    }),
    /**
     * Wathan method.
     * General-purpose; no population or rep-range restriction.
     */
    formula({
        name: "Wathan",
        description: "General purpose — no specific limitations.",
        predict: (reps, weight) => (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps)),
        weight: (rm, reps) => (rm * (48.8 + 53.8 * Math.exp(-0.075 * reps))) / 100,
        isValid: () => true,
    }),
];
/** All formulas applicable to a given lifter/set, in one call. */
export function applicableEstimators(gender, age, reps) {
    return estimators.filter((e) => e.isValid(gender, age, reps));
}
/** Look up a formula by name (typed, autocompletes against FormulaName). */
export function getEstimator(name) {
    const found = estimators.find((e) => e.name === name);
    if (!found)
        throw new Error(`Unknown formula: ${name}`);
    return found;
}
/** Predict 1RM with a named formula, refusing to run it outside its valid range. */
export function estimate1RM(name, gender, age, reps, weight) {
    const est = getEstimator(name);
    if (!est.isValid(gender, age, reps, weight)) {
        throw new Error(`${name} requires: ${est.description}`);
    }
    return est.predict(reps, weight);
}
/**
 * Represents various One Repetition Maximum (1RM) estimation methods.
 * Use this class to perform 1RM calculations based on gender and age.
 */
export class RM {
    gender;
    age;
    /**
     * Creates a new RM instance.
     * @param gender The gender of the individual.
     * @param dob The date of birth of the individual.
     */
    constructor(gender, age) {
        this.gender = gender;
        this.age = age;
    }
    /**
   * Estimates 1RM for YMCA upper body exercises.
   * @param reps The number of repetitions performed.
   * @returns The estimated 1RM.
   * @example
   * const rm = new RM(Gender.Male, new Date(1990, 0, 1));
   * const oneRM = rm.ymcaUpperBody(10); // Estimates 1RM for 10 reps
   */
    ymcaUpperBody(reps) {
        if (this.gender === Gender.Female) {
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
    femaleMiddleAge(reps, weight) {
        return (1.06 * weight) + (0.58 * reps) - (0.20 * this.age) - 3.41;
    }
    /**
   * Estimates 1RM for older females.
   * @param reps The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns The estimated 1RM.
   */
    femaleOlder(reps, weight) {
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
    relative(weight, rm) {
        return rm / weight;
    }
}
//# sourceMappingURL=index.js.map