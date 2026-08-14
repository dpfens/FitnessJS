import { Gender } from "../../enums.js";
/**
 * VO2max estimation formulas. Each method corresponds to a distinct fitness
 * test protocol and takes whatever inputs that protocol produces — these are
 * not interchangeable strategies, since you can't estimate VO2max from a
 * step-test heart rate using a formula that expects a 12-minute run distance.
 */
export declare class VO2MaxEstimation {
    private gender;
    private age;
    private weight;
    private height;
    constructor(gender: Gender, age: number, weight: number, height: number);
    /**
     * Cooper 12-minute run test.
     * @param distance - distance covered in 12 minutes, in meters
     */
    cooper(distance: number): number;
    /**
     * Balke treadmill protocol.
     * @param time - test duration in minutes
     */
    balke(time: number): number;
    /**
     * Balke 15-minute run test.
     * @param distance - distance covered in 15 minutes, in meters
     */
    balke15MinRun(distance: number): number;
    /**
     * Bruce protocol, male-specific multi-term regression.
     * @param time - total test time in minutes
     * @param time2 - time^2 term (as used in the original regression)
     * @param time3 - time^3 term (as used in the original regression)
     */
    bruceMale(time: number, time2: number, time3: number): number;
    /**
     * Bruce protocol, female-specific regression.
     * @param time - total test time in minutes
     */
    bruceFemale(time: number): number;
    /**
     * Bruce protocol, elderly/cardiac (EC) population regression.
     * @param time - total test time in minutes
     */
    bruceEC(time: number): number;
    /**
     * Léger 20m shuttle run (beep test).
     * @param speed - final stage speed in km/h
     */
    leger(speed: number): number;
    /**
     * Åstrand-Rhyming single-stage step test.
     * @param hr - steady-state heart rate during the step test
     */
    astrandStep(hr: number): number;
    /**
     * Queens College (QC) step test.
     * @param hr - recovery heart rate
     */
    qcStep(hr: number): number;
    /**
     * George submaximal treadmill walk test.
     * @param speed - walking speed
     * @param hr - steady-state heart rate
     */
    georgeTreadmill(speed: number, hr: number): number;
    /**
     * George ratio-weighted (RW) walk test.
     * @param time - walk time in minutes
     */
    georgeRW(time: number): number;
    /**
     * George steady-state jog test.
     * @param time - jog time in minutes
     * @param hr - steady-state heart rate
     */
    georgeSteady(time: number, hr: number): number;
    /**
     * Kline (Rockport) walk test.
     * @param time - walk time in minutes
     * @param hrPeak - heart rate at end of walk
     */
    kline(time: number, hrPeak: number): number;
    /**
     * Larsen walk/jog test.
     * @param time - test time in minutes
     * @param hr - steady-state heart rate
     */
    larsen(time: number, hr: number): number;
    /**
     * Ebbeling single-stage submaximal treadmill test.
     * @param speed - treadmill speed
     * @param hr - steady-state heart rate
     */
    ebbelingTreadmill(speed: number, hr: number): number;
    /**
     * Cureton child/adolescent 1-mile run test.
     *
     * Note: fixes a duplicated term present in the original implementation
     * (the `108.94 - 8.41 * time` expression was being added twice).
     * @param time - 1-mile run time in minutes
     */
    curetonChild(time: number): number;
    /**
     * Fox single-stage submaximal ergometry test.
     * @param hr5 - heart rate at 5 minutes
     */
    foxErgometry(hr5: number): number;
    /**
     * US Olympic Committee (USOP) field estimate.
     * @param hrMax - maximum heart rate
     * @param restingHR - resting heart rate
     */
    usop(hrMax: number, restingHR: number): number;
    /**
     * Single-stage submaximal treadmill extrapolation.
     * @param sm1 - submaximal VO2 measured at stage 1
     * @param hr1 - heart rate at stage 1
     * @param hrmax - maximum (or age-predicted max) heart rate
     */
    treadmillSubmaxSingleStage(sm1: number, hr1: number, hrmax: number): number;
    /**
     * Multistage submaximal treadmill extrapolation via linear regression
     * between two submaximal stages.
     * @param sm1 - submaximal VO2 at stage 1
     * @param hr1 - heart rate at stage 1
     * @param sm2 - submaximal VO2 at stage 2
     * @param hr2 - heart rate at stage 2
     * @param hrMax - maximum (or age-predicted max) heart rate
     */
    treadmillSubmaxVO2Multistage(sm1: number, hr1: number, sm2: number, hr2: number, hrMax: number): number;
    /**
     * Gilbert & Daniels running economy / VO2 model.
     * @param velocity - running velocity
     * @param time - race/effort duration in minutes
     */
    gilbertDaniels(velocity: number, time: number): number;
}
/**
 * Energy cost (VO2) estimation for specific activities and modalities.
 * Each method models a different activity, not alternate estimates of
 * the same quantity, so these stay as distinct methods rather than
 * interchangeable strategies.
 */
export declare class EnergyCostEstimation {
    private height;
    constructor(height: number);
    /**
     * Gross VO2 cost of walking (ACSM metabolic equation).
     * @param speed - walking speed in m/min
     * @param grade - treadmill grade as a decimal fraction (e.g. 0.05 for 5%)
     */
    walkingGross(speed: number, grade: number): number;
    /**
     * Gross VO2 cost of running (ACSM metabolic equation).
     * @param speed - running speed in m/min
     * @param grade - treadmill grade as a decimal fraction
     */
    runningGross(speed: number, grade: number): number;
    /**
     * Gross VO2 cost of leg ergometry.
     * @param mass - body mass in kg
     * @param work - work rate in kgm/min
     */
    legErgometryGross(mass: number, work: number): number;
    /**
     * Gross VO2 cost of arm ergometry.
     * @param mass - body mass in kg
     * @param work - work rate in kgm/min
     */
    armErgometryGross(mass: number, work: number): number;
    /**
     * Gross VO2 cost of bench/step stepping.
     * @param frequency - stepping rate in steps/min
     */
    steppingGross(frequency: number): number;
}
/**
 * Computes VO2 reserve: the difference between VO2max and resting VO2.
 * @param vo2Max - maximum oxygen uptake
 * @param vo2Rest - resting oxygen uptake (defaults to the standard 1 MET, 3.5 ml/kg/min)
 */
export declare function vo2Reserve(vo2Max: number, vo2Rest?: number): number;
/**
 * Computes a target VO2 at a given exercise intensity, using the
 * Karvonen-style VO2 reserve method.
 * @param vo2Max - maximum oxygen uptake
 * @param vo2Rest - resting oxygen uptake
 * @param intensity - target intensity as a decimal fraction (e.g. 0.6 for 60%)
 */
export declare function vo2Target(vo2Max: number, vo2Rest: number, intensity: number): number;
//# sourceMappingURL=vo2.d.ts.map