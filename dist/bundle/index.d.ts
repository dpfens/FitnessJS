declare function height_from_height_eyes(segment_length: number): number;
declare function height_from_height_head(segment_length: number): number;
declare function height_from_height_shoulders(segment_length: number): number;
declare function height_from_height_chest(segment_length: number): number;
declare function height_from_height_elbow(segment_length: number): number;
declare function height_from_height_wrist(segment_length: number): number;
declare function height_from_height_fingertip(segment_length: number): number;
declare function height_from_height_hips(segment_length: number): number;
declare function height_from_height_buttocks(segment_length: number): number;
declare function height_from_height_knee(segment_length: number): number;
declare function height_from_height_ankle(segment_length: number): number;
declare function height_from_head_height(segment_length: number): number;
declare function height_from_shoulder_distance(segment_length: number): number;
declare function height_from_shoulder_width(segment_length: number): number;
declare function height_from_hips_width(segment_length: number): number;
declare function height_from_nipple_width(segment_length: number): number;
declare function height_from_foot_width(segment_length: number): number;
declare function height_from_foot_length(segment_length: number): number;
declare function height_from_humerus_length(segment_length: number): number;
declare function height_from_forearm_length(segment_length: number): number;
declare function height_from_hand_length(segment_length: number): number;
declare function height_from_upperbody_length(segment_length: number): number;
declare class Segment {
    private body_height;
    constructor(body_height: number);
    height_eyes(): number;
    height_head(): number;
    height_shoulders(): number;
    height_chest(): number;
    height_elbow(): number;
    height_wrist(): number;
    height_fingertip(): number;
    height_hips(): number;
    height_buttocks(): number;
    height_knee(): number;
    height_ankle(): number;
    head_height(): number;
    shoulder_distance(): number;
    shoulder_width(): number;
    hips_width(): number;
    nipple_width(): number;
    foot_width(): number;
    foot_length(): number;
    humerus_length(): number;
    forearm_length(): number;
    hand_length(): number;
    upperbody_length(): number;
}

type index$9_Segment = Segment;
declare const index$9_Segment: typeof Segment;
declare const index$9_height_from_foot_length: typeof height_from_foot_length;
declare const index$9_height_from_foot_width: typeof height_from_foot_width;
declare const index$9_height_from_forearm_length: typeof height_from_forearm_length;
declare const index$9_height_from_hand_length: typeof height_from_hand_length;
declare const index$9_height_from_head_height: typeof height_from_head_height;
declare const index$9_height_from_height_ankle: typeof height_from_height_ankle;
declare const index$9_height_from_height_buttocks: typeof height_from_height_buttocks;
declare const index$9_height_from_height_chest: typeof height_from_height_chest;
declare const index$9_height_from_height_elbow: typeof height_from_height_elbow;
declare const index$9_height_from_height_eyes: typeof height_from_height_eyes;
declare const index$9_height_from_height_fingertip: typeof height_from_height_fingertip;
declare const index$9_height_from_height_head: typeof height_from_height_head;
declare const index$9_height_from_height_hips: typeof height_from_height_hips;
declare const index$9_height_from_height_knee: typeof height_from_height_knee;
declare const index$9_height_from_height_shoulders: typeof height_from_height_shoulders;
declare const index$9_height_from_height_wrist: typeof height_from_height_wrist;
declare const index$9_height_from_hips_width: typeof height_from_hips_width;
declare const index$9_height_from_humerus_length: typeof height_from_humerus_length;
declare const index$9_height_from_nipple_width: typeof height_from_nipple_width;
declare const index$9_height_from_shoulder_distance: typeof height_from_shoulder_distance;
declare const index$9_height_from_shoulder_width: typeof height_from_shoulder_width;
declare const index$9_height_from_upperbody_length: typeof height_from_upperbody_length;
declare namespace index$9 {
  export {
    index$9_Segment as Segment,
    index$9_height_from_foot_length as height_from_foot_length,
    index$9_height_from_foot_width as height_from_foot_width,
    index$9_height_from_forearm_length as height_from_forearm_length,
    index$9_height_from_hand_length as height_from_hand_length,
    index$9_height_from_head_height as height_from_head_height,
    index$9_height_from_height_ankle as height_from_height_ankle,
    index$9_height_from_height_buttocks as height_from_height_buttocks,
    index$9_height_from_height_chest as height_from_height_chest,
    index$9_height_from_height_elbow as height_from_height_elbow,
    index$9_height_from_height_eyes as height_from_height_eyes,
    index$9_height_from_height_fingertip as height_from_height_fingertip,
    index$9_height_from_height_head as height_from_height_head,
    index$9_height_from_height_hips as height_from_height_hips,
    index$9_height_from_height_knee as height_from_height_knee,
    index$9_height_from_height_shoulders as height_from_height_shoulders,
    index$9_height_from_height_wrist as height_from_height_wrist,
    index$9_height_from_hips_width as height_from_hips_width,
    index$9_height_from_humerus_length as height_from_humerus_length,
    index$9_height_from_nipple_width as height_from_nipple_width,
    index$9_height_from_shoulder_distance as height_from_shoulder_distance,
    index$9_height_from_shoulder_width as height_from_shoulder_width,
    index$9_height_from_upperbody_length as height_from_upperbody_length,
  };
}

interface CardiacEstimator {
    /**
     * Predicts the maximum heart rate based on the date of birth.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     */
    predict(age: number): number;
    /**
     * Calculates the age based on the given heart rate.
     * @param hr The heart rate.
     * @returns The calculated age.
     */
    age(hr: number): number;
}
/**
 * Astrand's formula for estimating maximum heart rate.
 * Use this when a more conservative estimate is needed for general population.
 */
declare class Astrand implements CardiacEstimator {
    /**
     * Predicts the maximum heart rate using Astrand's formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const astrand = new Fit.cardio.cardiac.Astrand();
     * const maxHR = astrand.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age: number): number;
    /**
     * Calculates the age based on the given heart rate using Astrand's formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const astrand = new Fit.cardio.cardiac.Astrand();
     * const age = astrand.age(180); // Returns the calculated age
     */
    age(hr: number): number;
}
/**
 * HF (Heart and Fitness) formula for estimating maximum heart rate.
 * Use this for a simple, widely recognized estimate suitable for general population.
 */
declare class HF implements CardiacEstimator {
    /**
     * Predicts the maximum heart rate using the HF formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const hf = new Fit.cardio.cardiac.HF();
     * const maxHR = hf.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age: number): number;
    /**
     * Calculates the age based on the given heart rate using the HF formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const hf = new Fit.cardio.cardiac.HF();
     * const age = hf.age(180); // Returns the calculated age
     */
    age(hr: number): number;
}
/**
 * Gellish formula for estimating maximum heart rate.
 * Use this for a more recent and well-researched estimate suitable for general adult population.
 */
declare class Gellish implements CardiacEstimator {
    /**
     * Predicts the maximum heart rate using Gellish's formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const gellish = new Fit.cardio.cardiac.Gellish();
     * const maxHR = gellish.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age: number): number;
    /**
     * Calculates the age based on the given heart rate using Gellish's formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const gellish = new Fit.cardio.cardiac.Gellish();
     * const age = gellish.age(180); // Returns the calculated age
     */
    age(hr: number): number;
}
/**
 * Gulati formula for estimating maximum heart rate in women.
 * Use this specifically for female subjects, as it's based on a large study of women.
 */
declare class Gulati implements CardiacEstimator {
    /**
     * Predicts the maximum heart rate for women using Gulati's formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const gulati = new Fit.cardio.cardiac.Gulati();
     * const maxHR = gulati.predict(new Date('1990-01-01')); // Returns the predicted max HR for a woman
     */
    predict(age: number): number;
    /**
     * Calculates the age based on the given heart rate using Gulati's formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const gulati = new Fit.cardio.cardiac.Gulati();
     * const age = gulati.age(180); // Returns the calculated age for a woman
     */
    age(hr: number): number;
}
/**
 * Londeree and Moeschberger (LM) formula for estimating maximum heart rate.
 * Use this for a more precise estimate that accounts for slight variations across different populations.
 */
declare class LM implements CardiacEstimator {
    /**
     * Predicts the maximum heart rate using the Londeree and Moeschberger formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const lm = new Fit.cardio.cardiac.LM();
     * const maxHR = lm.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age: number): number;
    /**
     * Calculates the age based on the given heart rate using the LM formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const lm = new Fit.cardio.cardiac.LM();
     * const age = lm.age(180); // Returns the calculated age
     */
    age(hr: number): number;
}
/**
 * Miller formula for estimating maximum heart rate.
 * Use this as an alternative to the standard 220-age formula, offering a slightly different slope.
 */
declare class Miller implements CardiacEstimator {
    /**
     * Predicts the maximum heart rate using Miller's formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const miller = new Fit.cardio.cardiac.Miller();
     * const maxHR = miller.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age: number): number;
    /**
     * Calculates the age based on the given heart rate using Miller's formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const miller = new Fit.cardio.cardiac.Miller();
     * const age = miller.age(180); // Returns the calculated age
     */
    age(hr: number): number;
}
/**
  * Nes formula for estimating maximum heart rate.
  * Use this for a formula derived from a large, healthy population study.
  */
declare class Nes implements CardiacEstimator {
    /**
      * Predicts the maximum heart rate using Nes' formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const nes = new Fit.cardio.cardiac.Nes();
      * const maxHR = nes.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age: number): number;
    /**
      * Calculates the age based on the given heart rate using Nes' formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const nes = new Fit.cardio.cardiac.Nes();
      * const age = nes.age(180); // Returns the calculated age
      */
    age(hr: number): number;
}
/**
  * Oakland University Linear formula for estimating maximum heart rate.
  * Use this for a formula derived from meta-analysis of multiple studies.
  */
declare class OaklandL implements CardiacEstimator {
    /**
      * Predicts the maximum heart rate using the Oakland University Linear formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const oaklandL = new Fit.cardio.cardiac.OaklandL();
      * const maxHR = oaklandL.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age: number): number;
    /**
      * Calculates the age based on the given heart rate using the Oakland University Linear formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const oaklandL = new Fit.cardio.cardiac.OaklandL();
      * const age = oaklandL.age(180); // Returns the calculated age
      */
    age(hr: number): number;
}
/**
  * Oakland University Non-Linear 1 formula for estimating maximum heart rate.
  * Use this for a non-linear approach that may better fit certain populations.
  */
declare class OaklandNL1 implements CardiacEstimator {
    /**
      * Predicts the maximum heart rate using the Oakland University Non-Linear 1 formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const oaklandNL1 = new Fit.cardio.cardiac.OaklandNL1();
      * const maxHR = oaklandNL1.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age: number): number;
    /**
      * Calculates the age based on the given heart rate using the Oakland University Non-Linear 1 formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const oaklandNL1 = new Fit.cardio.cardiac.OaklandNL1();
      * const age = oaklandNL1.age(180); // Returns the calculated age
      */
    age(hr: number): number;
}
/**
  * Oakland University Non-Linear 2 formula for estimating maximum heart rate.
  * Use this for another non-linear approach that may better fit certain populations.
  */
declare class OaklandNL2 implements CardiacEstimator {
    /**
      * Predicts the maximum heart rate using the Oakland University Non-Linear 2 formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const oaklandNL2 = new Fit.cardio.cardiac.OaklandNL2();
      * const maxHR = oaklandNL2.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age: number): number;
    /**
      * Calculates the age based on the given heart rate using the Oakland University Non-Linear 2 formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const oaklandNL2 = new Fit.cardio.cardiac.OaklandNL2();
      * const age = oaklandNL2.age(180); // Returns the calculated age
      */
    age(hr: number): number;
}
/**
  * Robergs and Landwehr (RL) formula for estimating maximum heart rate.
  * Use this for a formula derived from a comprehensive review of max HR literature.
  */
declare class RL implements CardiacEstimator {
    /**
      * Predicts the maximum heart rate using the Robergs and Landwehr formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const rl = new Fit.cardio.cardiac.RL();
      * const maxHR = rl.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age: number): number;
    /**
      * Calculates the age based on the given heart rate using the RL formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const rl = new Fit.cardio.cardiac.RL();
      * const age = rl.age(180); // Returns the calculated age
      */
    age(hr: number): number;
}
/**
  * Tanaka, Monahan, & Seals (TMS) formula for estimating maximum heart rate.
  * Use this for a well-validated formula applicable across a wide age range and fitness levels.
  */
declare class TMS implements CardiacEstimator {
    /**
      * Predicts the maximum heart rate using the Tanaka, Monahan, & Seals formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const tms = new Fit.cardio.cardiac.TMS();
      * const maxHR = tms.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age: number): number;
    /**
      * Calculates the age based on the given heart rate using the TMS formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const tms = new Fit.cardio.cardiac.TMS();
      * const age = tms.age(180); // Returns the calculated age
      */
    age(hr: number): number;
}
/**
  * Calculates the mean arterial pressure.
  * Use this to estimate average blood pressure during a single cardiac cycle.
  * @param diastolic_bp The diastolic blood pressure.
  * @param systolic_bp The systolic blood pressure.
  * @returns The mean arterial pressure.
  * @example
  * const map = mean_arterial_pressure(80, 120); // Returns 93.33
  */
declare function mean_arterial_pressure(diastolic_bp: number, systolic_bp: number): number;
/**
  * Calculates the target heart rate using the Karvonen formula.
  * Use this for determining training zones based on heart rate reserve.
  * @param intensity The desired intensity as a decimal (e.g., 0.7 for 70%).
  * @param rest The resting heart rate.
  * @param maximum The maximum heart rate.
  * @returns The target heart rate.
  * @example
  * const targetHR = karvonen(0.7, 60, 180); // Returns the target heart rate at 70% intensity
  */
declare function karvonen$1(intensity: number, rest: number, maximum: number): number;
/**
  * Calculates the target heart rate using the Zoladz method.
  * Use this for determining training zones based on maximum heart rate.
  * @param hrMax The maximum heart rate.
  * @param adjuster The adjustment value (typically 50 for zone 1, 40 for zone 2, etc.).
  * @returns The target heart rate for the specified zone.
  * @example
  * const targetHR = zoladz(180, 50); // Returns the target heart rate for zone 1
  */
declare function zoladz(hrMax: number, adjuster: number): number;

type cardiac_Astrand = Astrand;
declare const cardiac_Astrand: typeof Astrand;
type cardiac_CardiacEstimator = CardiacEstimator;
type cardiac_Gellish = Gellish;
declare const cardiac_Gellish: typeof Gellish;
type cardiac_Gulati = Gulati;
declare const cardiac_Gulati: typeof Gulati;
type cardiac_HF = HF;
declare const cardiac_HF: typeof HF;
type cardiac_LM = LM;
declare const cardiac_LM: typeof LM;
type cardiac_Miller = Miller;
declare const cardiac_Miller: typeof Miller;
type cardiac_Nes = Nes;
declare const cardiac_Nes: typeof Nes;
type cardiac_OaklandL = OaklandL;
declare const cardiac_OaklandL: typeof OaklandL;
type cardiac_OaklandNL1 = OaklandNL1;
declare const cardiac_OaklandNL1: typeof OaklandNL1;
type cardiac_OaklandNL2 = OaklandNL2;
declare const cardiac_OaklandNL2: typeof OaklandNL2;
type cardiac_RL = RL;
declare const cardiac_RL: typeof RL;
type cardiac_TMS = TMS;
declare const cardiac_TMS: typeof TMS;
declare const cardiac_mean_arterial_pressure: typeof mean_arterial_pressure;
declare const cardiac_zoladz: typeof zoladz;
declare namespace cardiac {
  export { cardiac_Astrand as Astrand, cardiac_Gellish as Gellish, cardiac_Gulati as Gulati, cardiac_HF as HF, cardiac_LM as LM, cardiac_Miller as Miller, cardiac_Nes as Nes, cardiac_OaklandL as OaklandL, cardiac_OaklandNL1 as OaklandNL1, cardiac_OaklandNL2 as OaklandNL2, cardiac_RL as RL, cardiac_TMS as TMS, karvonen$1 as karvonen, cardiac_mean_arterial_pressure as mean_arterial_pressure, cardiac_zoladz as zoladz };
  export type { cardiac_CardiacEstimator as CardiacEstimator };
}

declare enum Gender {
    Male = 0,
    Female = 1
}
declare enum Race {
    Asian = 0,
    Black = 1,
    Hispanic = 2
}
declare enum PAL {
    Sedentary = 0,
    Low = 1,
    Active = 2,
    VeryActive = 3
}

interface BMREstimator {
    /**
     * Predicts BMR based on given parameters
     * @param dob Date of birth
     * @param weight Weight in kg
     * @param height Height in cm
     * @returns Estimated BMR in kcal/day
     */
    predict(age: number, weight: number, height: number): number;
}
/**
 * Base class for estimating Basal Metabolic Rate (BMR)
 * @class BaseBMREstimator
 */
declare abstract class BaseBMREstimator implements BMREstimator {
    gender: Gender;
    constructor(gender: Gender);
    abstract predict(age: number, weight: number, height: number): number;
}
/**
 * Harris-Benedict equation for estimating BMR
 * @class HB
 * @extends BaseBMREstimator
 */
declare class HB extends BaseBMREstimator {
    /**
     * Predicts BMR using the Harris-Benedict equation
     * @param dob Date of birth
     * @param weight Weight in kg
     * @param height Height in cm
     * @returns Estimated BMR in kcal/day
     *
     * @example
     * const hbEstimator = new Fit.cardio.energy.HB(Gender.Female);
     * const bmr = hbEstimator.predict(new Date(1990, 0, 1), 65, 170);
     * console.log(bmr); // Outputs the estimated BMR
     *
     * When to use: For general population BMR estimation, widely used but may overestimate in some cases
     */
    predict(age: number, weight: number, height: number): number;
}
/**
 * Revised Harris-Benedict equation for estimating BMR
 * @class RevisedHB
 * @extends BaseBMREstimator
 */
declare class RevisedHB extends BaseBMREstimator {
    /**
     * Predicts BMR using the Revised Harris-Benedict equation
     * @param dob Date of birth
     * @param weight Weight in kg
     * @param height Height in cm
     * @returns Estimated BMR in kcal/day
     *
     * @example
     * const revisedHBEstimator = new Fit.cardio.energy.RevisedHB(Gender.Male);
     * const bmr = revisedHBEstimator.predict(new Date(1988, 5, 15), 80, 180);
     * console.log(bmr); // Outputs the estimated BMR
     *
     * When to use: For a more accurate BMR estimation compared to the original Harris-Benedict equation, especially for individuals with higher body mass
     */
    predict(age: number, weight: number, height: number): number;
}
/**
 * Mifflin-St Jeor equation for estimating BMR
 * @class MSJ
 * @extends BaseBMREstimator
 */
declare class MSJ extends BaseBMREstimator {
    /**
     * Predicts BMR using the Mifflin-St Jeor equation
     * @param dob Date of birth
     * @param weight Weight in kg
     * @param height Height in cm
     * @returns Estimated BMR in kcal/day
     *
     * @example
     * const msjEstimator = new Fit.cardio.energy.MSJ(Gender.Female);
     * const bmr = msjEstimator.predict(new Date(1992, 3, 20), 65, 170);
     * console.log(bmr); // Outputs the estimated BMR
     *
     * When to use: Considered one of the most accurate equations for estimating BMR in non-obese individuals
     */
    predict(age: number, weight: number, height: number): number;
}

type bmr_BMREstimator = BMREstimator;
type bmr_BaseBMREstimator = BaseBMREstimator;
declare const bmr_BaseBMREstimator: typeof BaseBMREstimator;
type bmr_HB = HB;
declare const bmr_HB: typeof HB;
type bmr_MSJ = MSJ;
declare const bmr_MSJ: typeof MSJ;
type bmr_RevisedHB = RevisedHB;
declare const bmr_RevisedHB: typeof RevisedHB;
declare namespace bmr {
  export { bmr_BaseBMREstimator as BaseBMREstimator, bmr_HB as HB, bmr_MSJ as MSJ, bmr_RevisedHB as RevisedHB };
  export type { bmr_BMREstimator as BMREstimator };
}

/**
 * Strategy interface for gender-based Resting Metabolic Rate (RMR)
 * estimation algorithms. Implement this to add new equations without
 * modifying existing code.
 */
interface GenderRMREstimator {
    /**
     * Estimates Resting Metabolic Rate.
     * @param gender Biological sex used to select the correct coefficient
     * @param value The input measurement the formula is based on
     * (e.g., weight in kg, or Body Surface Area in m², depending on strategy)
     * @returns Estimated RMR in kcal/day
     */
    estimate(gender: Gender, value: number): number;
}
/**
 * Quick estimate of RMR based on body weight.
 *
 * When to use: For a rapid, rough estimate of RMR when precise
 * calculations are not necessary.
 */
declare class QuickRMREstimator implements GenderRMREstimator {
    /**
     * @param gender Biological sex used to select the correct coefficient
     * @param weight Body weight in kg
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const estimator = new QuickRMREstimator();
     * const quickRMR = estimator.estimate(Gender.Male, 75);
     * console.log(quickRMR);
     */
    estimate(gender: Gender, weight: number): number;
}
/**
 * RMR estimate based on Body Surface Area (BSA).
 *
 * When to use: When a more accurate RMR estimate is needed, especially
 * for individuals with unusual body compositions.
 */
declare class BSARMREstimator implements GenderRMREstimator {
    /**
     * @param gender Biological sex used to select the correct coefficient
     * @param bsa Body Surface Area in m²
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const estimator = new BSARMREstimator();
     * const bsaRMR = estimator.estimate(Gender.Female, 1.65);
     * console.log(bsaRMR);
     */
    estimate(gender: Gender, bsa: number): number;
}
/**
 * Context class for estimating Resting Metabolic Rate (RMR) by gender.
 * Delegates the actual calculation to a pluggable {@link GenderRMREstimator}.
 *
 * @class RMR
 */
declare class RMR {
    gender: Gender;
    private estimator;
    /**
     * @param gender Biological sex used by the estimation strategy
     * @param estimator The RMR estimation strategy to use
     * (e.g., {@link QuickRMREstimator} or {@link BSARMREstimator})
     */
    constructor(gender: Gender, estimator: GenderRMREstimator);
    /**
     * Swaps the estimation strategy at runtime.
     * @param estimator The new strategy to use
     */
    setEstimator(estimator: GenderRMREstimator): void;
    /**
     * Estimates RMR using the currently assigned strategy.
     * @param value The input measurement the current strategy expects
     * (e.g., weight in kg for {@link QuickRMREstimator}, or BSA in m²
     * for {@link BSARMREstimator})
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const rmrCalculator = new RMR(Gender.Male, new QuickRMREstimator());
     * const quickRMR = rmrCalculator.calculate(75);
     * console.log(quickRMR);
     *
     * // Swap strategies without changing calling code
     * rmrCalculator.setEstimator(new BSARMREstimator());
     * const bsaRMR = rmrCalculator.calculate(1.9);
     * console.log(bsaRMR);
     */
    calculate(value: number): number;
}
/**
 * Strategy interface for Resting Metabolic Rate (RMR) estimation algorithms.
 * Implement this to add new equations without modifying existing code.
 */
interface RMRLBMEstimator {
    /**
     * Estimates Resting Metabolic Rate.
     * @param lbm Lean Body Mass in kg
     * @returns Estimated RMR in kcal/day
     */
    estimate(lbm: number): number;
}
/**
 * Katch-McArdle formula for calculating RMR.
 *
 * When to use: When lean body mass is known, provides a more accurate
 * estimate for athletes or individuals with higher muscle mass.
 */
declare class KatchMcArdleEstimator implements RMRLBMEstimator {
    /**
     * @param lbm Lean Body Mass in kg
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const estimator = new KatchMcArdleEstimator();
     * const lbm = 55; // kg
     * const rmr = estimator.estimate(lbm);
     * console.log(rmr);
     */
    estimate(lbm: number): number;
}
/**
 * Cunningham equation for calculating RMR.
 *
 * When to use: Similar to Katch-McArdle, use when lean body mass is known.
 * Often preferred for athletes due to its accuracy in this population.
 */
declare class CunninghamEstimator implements RMRLBMEstimator {
    /**
     * @param lbm Lean Body Mass in kg
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const estimator = new CunninghamEstimator();
     * const lbm = 60; // kg
     * const rmr = estimator.estimate(lbm);
     * console.log(rmr);
     */
    estimate(lbm: number): number;
}
/**
 * Context class for estimating Resting Metabolic Rate (RMR) from
 * Lean Body Mass. Delegates the actual calculation to a pluggable
 * {@link RMREstimator}.
 *
 * @class RestingMetabolicRate
 */
declare class RestingMetabolicRate {
    private estimator;
    /**
     * @param estimator The RMR estimation strategy to use
     * (e.g., {@link KatchMcArdleEstimator} or {@link CunninghamEstimator})
     */
    constructor(estimator: RMRLBMEstimator);
    /**
     * Swaps the estimation strategy at runtime.
     * @param estimator The new strategy to use
     */
    setEstimator(estimator: RMRLBMEstimator): void;
    /**
     * Estimates RMR using the currently assigned strategy.
     * @param lbm Lean Body Mass in kg
     * @returns Estimated RMR in kcal/day
     *
     * @example
     * const rmr = new RestingMetabolicRate(new KatchMcArdleEstimator());
     * console.log(rmr.estimate(55));
     *
     * // Swap strategies without changing calling code
     * rmr.setEstimator(new CunninghamEstimator());
     * console.log(rmr.estimate(55));
     */
    estimate(lbm: number): number;
}

type rmr_BSARMREstimator = BSARMREstimator;
declare const rmr_BSARMREstimator: typeof BSARMREstimator;
type rmr_CunninghamEstimator = CunninghamEstimator;
declare const rmr_CunninghamEstimator: typeof CunninghamEstimator;
type rmr_GenderRMREstimator = GenderRMREstimator;
type rmr_KatchMcArdleEstimator = KatchMcArdleEstimator;
declare const rmr_KatchMcArdleEstimator: typeof KatchMcArdleEstimator;
type rmr_QuickRMREstimator = QuickRMREstimator;
declare const rmr_QuickRMREstimator: typeof QuickRMREstimator;
type rmr_RMR = RMR;
declare const rmr_RMR: typeof RMR;
type rmr_RMRLBMEstimator = RMRLBMEstimator;
type rmr_RestingMetabolicRate = RestingMetabolicRate;
declare const rmr_RestingMetabolicRate: typeof RestingMetabolicRate;
declare namespace rmr {
  export { rmr_BSARMREstimator as BSARMREstimator, rmr_CunninghamEstimator as CunninghamEstimator, rmr_KatchMcArdleEstimator as KatchMcArdleEstimator, rmr_QuickRMREstimator as QuickRMREstimator, rmr_RMR as RMR, rmr_RestingMetabolicRate as RestingMetabolicRate };
  export type { rmr_GenderRMREstimator as GenderRMREstimator, rmr_RMRLBMEstimator as RMRLBMEstimator };
}

/**
 * Input parameters for a TEE prediction.
 */
interface TEEPredictParams {
    /** Age in years */
    age: number;
    /** Weight in kilograms */
    weight: number;
    /** Height in meters */
    height: number;
}
/**
 * Base class for estimating Total Energy Expenditure (TEE).
 *
 * Subclasses implement {@link TEEEstimator.predict} using coefficients
 * drawn from a specific research paper or population (e.g. children,
 * adults). The base class also provides {@link TEEEstimator.fromActivity},
 * which is population-independent.
 *
 * @class TEEEstimator
 */
declare abstract class TEEEstimator {
    /** Gender used to select the coefficient set for prediction */
    gender: Gender;
    /** Physical Activity Level used to select the coefficient set for prediction */
    pal: PAL;
    /**
     * @param gender Gender used to select the correct coefficient set
     * @param pal Physical Activity Level used to select the correct coefficient set
     */
    constructor(gender: Gender, pal: PAL);
    /**
     * Predicts TEE based on age, weight, and height.
     *
     * Must be implemented by a subclass with a specific coefficient set.
     *
     * @param params Age, weight, and height to predict from
     * @returns Estimated TEE in kcal/day
     * @throws Error if not implemented in derived class
     */
    abstract predict(params: TEEPredictParams): number;
    /**
     * estimates energy expenditure from a single bout of physical activity.
     *
     * @param weight Weight in kg
     * @param mets Metabolic Equivalent of Task (MET) value for the activity
     * @returns Energy expenditure in kcal/hour
     *
     * @example
     * const teeEstimator = new Fit.cardio.energy.TEEEstimator(Gender.Male, PAL.Active);
     * const energyExpenditure = teeEstimator.fromActivity(75, 6);
     * console.log(energyExpenditure);
     *
     * When to use: To estimate energy expenditure for a specific activity based on its MET value
     */
    fromActivity(weight: number, mets: number): number;
}
/**
 * Estimates Total Energy Expenditure (TEE) for children and adolescents.
 *
 * @class ChildTEE
 * @extends TEEEstimator
 */
declare class ChildTEE extends TEEEstimator {
    /**
     * Predicts TEE for children based on gender, physical activity level,
     * age, weight, and height, using the {@link CHILD_TEE_COEFFICIENTS}
     * table.
     *
     * @param params Age (years), weight (kg), and height (m) to predict from
     * @returns Estimated TEE in kcal/day
     * @throws Error if no coefficients are defined for this gender/PAL combination
     *
     * @example
     * const childTEEEstimator = new Fit.cardio.energy.ChildTEE(Gender.Male, PAL.Active);
     * const tee = childTEEEstimator.predict({ age: 8, weight: 35, height: 1.40 });
     * console.log(tee); // Outputs the estimated TEE
     *
     * When to use: For estimating total energy expenditure in children and adolescents, taking into account their growth and development
     */
    predict({ age, weight, height }: TEEPredictParams): number;
}
/**
 * Estimates Total Energy Expenditure (TEE) for adults (19+ years).
 *
 * @class AdultTEE
 * @extends TEEEstimator
 */
declare class AdultTEE extends TEEEstimator {
    /**
     * Predicts TEE for adults based on gender, physical activity level,
     * age, weight, and height, using the {@link ADULT_TEE_COEFFICIENTS}
     * table.
     *
     * @param params Age (years), weight (kg), and height (m) to predict from
     * @returns Estimated TEE in kcal/day
     * @throws Error if no coefficients are defined for this gender/PAL combination
     *
     * @example
     * const adultTEEEstimator = new Fit.cardio.energy.AdultTEE(Gender.Female, PAL.Low);
     * const tee = adultTEEEstimator.predict({ age: 34, weight: 65, height: 1.68 });
     * console.log(tee); // Outputs the estimated TEE
     *
     * When to use: For estimating total energy expenditure in adults (19+ years)
     */
    predict({ age, weight, height }: TEEPredictParams): number;
}

type tee_AdultTEE = AdultTEE;
declare const tee_AdultTEE: typeof AdultTEE;
type tee_ChildTEE = ChildTEE;
declare const tee_ChildTEE: typeof ChildTEE;
type tee_TEEEstimator = TEEEstimator;
declare const tee_TEEEstimator: typeof TEEEstimator;
type tee_TEEPredictParams = TEEPredictParams;
declare namespace tee {
  export { tee_AdultTEE as AdultTEE, tee_ChildTEE as ChildTEE, tee_TEEEstimator as TEEEstimator };
  export type { tee_TEEPredictParams as TEEPredictParams };
}

/**
 * Parameters required for energy expenditure calculations.
 */
interface TerrainEnergyExpenditureParams {
    /** Body weight of the individual, in kilograms */
    weight: number;
    /** Walking/running speed, in meters per second */
    speed: number;
    /** External load carried, in kilograms */
    load: number;
    /** Terrain coefficient (e.g., 1.0 for treadmill, 1.2 for dirt road, etc.) */
    terrain: number;
    /** Slope in decimal form (e.g., 0.05 for 5% grade) */
    slope: number;
}
/**
 * Strategy interface for energy expenditure calculation algorithms.
 * Implement this to add new equations without modifying existing code.
 */
interface TerrainEnergyExpenditureEstimator {
    /**
     * estimates energy expenditure in watts.
     * @param params Parameters required for the calculation
     * @returns Energy expenditure in watts
     */
    estimate(params: TerrainEnergyExpenditureParams): number;
}
/**
 * estimates energy expenditure using the Pandolf equation.
 *
 * When to use: For estimating energy expenditure during load carriage
 * on various terrains and slopes.
 */
declare class PandolfStrategy implements TerrainEnergyExpenditureEstimator {
    /**
     * @param params Parameters required for the calculation
     * @returns Energy expenditure in watts
     *
     * @example
     * const strategy = new PandolfStrategy();
     * const energyExpenditure = strategy.estimate({
     *   weight: 70,
     *   speed: 1.4,
     *   load: 10,
     *   terrain: 1.2,
     *   slope: 0.03,
     * });
     * console.log(energyExpenditure);
     */
    estimate(params: TerrainEnergyExpenditureParams): number;
}
/**
 * estimates energy expenditure using the Santee equation
 * (a modified version of the Pandolf equation).
 *
 * When to use: For more accurate energy expenditure estimation during
 * downhill walking with loads.
 */
declare class SanteeStrategy implements TerrainEnergyExpenditureEstimator {
    /**
     * @param params Parameters required for the calculation
     * @returns Energy expenditure in watts
     *
     * @example
     * const strategy = new SanteeStrategy();
     * const energyExpenditure = strategy.estimate({
     *   weight: 70,
     *   speed: 1.4,
     *   load: 10,
     *   terrain: 1.2,
     *   slope: 0.03,
     * });
     * console.log(energyExpenditure);
     */
    estimate(params: TerrainEnergyExpenditureParams): number;
}
/**
 * Context class for calculating energy expenditure for walking/running
 * on different terrains. Delegates the actual calculation to a
 * pluggable {@link TerrainEnergyExpenditureEstimator}.
 *
 * @class Terrain
 */
declare class Terrain {
    private strategy;
    /**
     * @param strategy The energy expenditure calculation strategy to use
     * (e.g., {@link PandolfStrategy} or {@link SanteeStrategy})
     */
    constructor(strategy: TerrainEnergyExpenditureEstimator);
    /**
     * Swaps the calculation strategy at runtime.
     * @param strategy The new strategy to use
     */
    setStrategy(strategy: TerrainEnergyExpenditureEstimator): void;
    /**
     * estimates energy expenditure using the currently assigned strategy.
     * @param params Parameters required for the calculation
     * @returns Energy expenditure in watts
     *
     * @example
     * const terrain = new Terrain(new PandolfStrategy());
     * const energyExpenditure = terrain.estimate({
     *   weight: 70,
     *   speed: 1.4,
     *   load: 10,
     *   terrain: 1.2,
     *   slope: 0.03,
     * });
     * console.log(energyExpenditure);
     *
     * // Swap strategies without changing calling code
     * terrain.setStrategy(new SanteeStrategy());
     * const santeeResult = terrain.estimate({
     *   weight: 70,
     *   speed: 1.4,
     *   load: 10,
     *   terrain: 1.2,
     *   slope: 0.03,
     * });
     */
    estimate(params: TerrainEnergyExpenditureParams): number;
}

type terrain_PandolfStrategy = PandolfStrategy;
declare const terrain_PandolfStrategy: typeof PandolfStrategy;
type terrain_SanteeStrategy = SanteeStrategy;
declare const terrain_SanteeStrategy: typeof SanteeStrategy;
type terrain_Terrain = Terrain;
declare const terrain_Terrain: typeof Terrain;
type terrain_TerrainEnergyExpenditureEstimator = TerrainEnergyExpenditureEstimator;
type terrain_TerrainEnergyExpenditureParams = TerrainEnergyExpenditureParams;
declare namespace terrain {
  export { terrain_PandolfStrategy as PandolfStrategy, terrain_SanteeStrategy as SanteeStrategy, terrain_Terrain as Terrain };
  export type { terrain_TerrainEnergyExpenditureEstimator as TerrainEnergyExpenditureEstimator, terrain_TerrainEnergyExpenditureParams as TerrainEnergyExpenditureParams };
}

type index$8_BMREstimator = BMREstimator;
type index$8_BaseBMREstimator = BaseBMREstimator;
declare const index$8_BaseBMREstimator: typeof BaseBMREstimator;
type index$8_GenderRMREstimator = GenderRMREstimator;
type index$8_RMRLBMEstimator = RMRLBMEstimator;
type index$8_TEEEstimator = TEEEstimator;
declare const index$8_TEEEstimator: typeof TEEEstimator;
type index$8_TEEPredictParams = TEEPredictParams;
type index$8_TerrainEnergyExpenditureEstimator = TerrainEnergyExpenditureEstimator;
type index$8_TerrainEnergyExpenditureParams = TerrainEnergyExpenditureParams;
declare const index$8_bmr: typeof bmr;
declare const index$8_rmr: typeof rmr;
declare const index$8_tee: typeof tee;
declare const index$8_terrain: typeof terrain;
declare namespace index$8 {
  export { index$8_BaseBMREstimator as BaseBMREstimator, index$8_TEEEstimator as TEEEstimator, index$8_bmr as bmr, index$8_rmr as rmr, index$8_tee as tee, index$8_terrain as terrain };
  export type { index$8_BMREstimator as BMREstimator, index$8_GenderRMREstimator as GenderRMREstimator, index$8_RMRLBMEstimator as RMRLBMEstimator, index$8_TEEPredictParams as TEEPredictParams, index$8_TerrainEnergyExpenditureEstimator as TerrainEnergyExpenditureEstimator, index$8_TerrainEnergyExpenditureParams as TerrainEnergyExpenditureParams };
}

interface ResidualVolumeParams {
    gender: Gender;
    age: number;
    height: number;
    weight: number;
}
/** Params required by strategies that also need body surface area (e.g. O'Brien) */
interface OBrienResidualVolumeParams extends ResidualVolumeParams {
    bsa: number;
}
/**
 * Strategy interface for residual volume estimation formulas.
 * Generic so strategies with extra param requirements (e.g. O'Brien's bsa)
 * can extend ResidualVolumeParams without polluting the base interface.
 */
interface ResidualVolumeEstimator<T extends ResidualVolumeParams = ResidualVolumeParams> {
    estimate(params: T): number;
}
/** Normal-weight population regression */
declare class NormalResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ age, height }: ResidualVolumeParams): number;
}
/** Overweight population regression */
declare class OverweightResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ age, height }: ResidualVolumeParams): number;
}
/** Berglund regression */
declare class BerglundResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ gender, age, height, weight }: ResidualVolumeParams): number;
}
/** Black regression */
declare class BlackResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ age, height }: ResidualVolumeParams): number;
}
/** Boren regression */
declare class BorenResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ age, height }: ResidualVolumeParams): number;
}
/** Goldman regression */
declare class GoldmanResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ gender, age, height }: ResidualVolumeParams): number;
}
/** O'Brien regression (requires body surface area) */
declare class OBrienResidualVolumeEstimator implements ResidualVolumeEstimator<OBrienResidualVolumeParams> {
    estimate({ age, height, bsa }: OBrienResidualVolumeParams): number;
}
/**
 * @class
 * @classdesc estimates residual lung volume using a pluggable regression strategy
 */
declare class ResidualVolume<T extends ResidualVolumeParams = ResidualVolumeParams> {
    private strategy;
    private params;
    constructor(strategy: ResidualVolumeEstimator<T>, params: T);
    setStrategy(strategy: ResidualVolumeEstimator<T>): void;
    estimate(): number;
}

type rv_BerglundResidualVolumeEstimator = BerglundResidualVolumeEstimator;
declare const rv_BerglundResidualVolumeEstimator: typeof BerglundResidualVolumeEstimator;
type rv_BlackResidualVolumeEstimator = BlackResidualVolumeEstimator;
declare const rv_BlackResidualVolumeEstimator: typeof BlackResidualVolumeEstimator;
type rv_BorenResidualVolumeEstimator = BorenResidualVolumeEstimator;
declare const rv_BorenResidualVolumeEstimator: typeof BorenResidualVolumeEstimator;
type rv_GoldmanResidualVolumeEstimator = GoldmanResidualVolumeEstimator;
declare const rv_GoldmanResidualVolumeEstimator: typeof GoldmanResidualVolumeEstimator;
type rv_NormalResidualVolumeEstimator = NormalResidualVolumeEstimator;
declare const rv_NormalResidualVolumeEstimator: typeof NormalResidualVolumeEstimator;
type rv_OBrienResidualVolumeEstimator = OBrienResidualVolumeEstimator;
declare const rv_OBrienResidualVolumeEstimator: typeof OBrienResidualVolumeEstimator;
type rv_OBrienResidualVolumeParams = OBrienResidualVolumeParams;
type rv_OverweightResidualVolumeEstimator = OverweightResidualVolumeEstimator;
declare const rv_OverweightResidualVolumeEstimator: typeof OverweightResidualVolumeEstimator;
type rv_ResidualVolume<T extends ResidualVolumeParams = ResidualVolumeParams> = ResidualVolume<T>;
declare const rv_ResidualVolume: typeof ResidualVolume;
type rv_ResidualVolumeEstimator<T extends ResidualVolumeParams = ResidualVolumeParams> = ResidualVolumeEstimator<T>;
type rv_ResidualVolumeParams = ResidualVolumeParams;
declare namespace rv {
  export { rv_BerglundResidualVolumeEstimator as BerglundResidualVolumeEstimator, rv_BlackResidualVolumeEstimator as BlackResidualVolumeEstimator, rv_BorenResidualVolumeEstimator as BorenResidualVolumeEstimator, rv_GoldmanResidualVolumeEstimator as GoldmanResidualVolumeEstimator, rv_NormalResidualVolumeEstimator as NormalResidualVolumeEstimator, rv_OBrienResidualVolumeEstimator as OBrienResidualVolumeEstimator, rv_OverweightResidualVolumeEstimator as OverweightResidualVolumeEstimator, rv_ResidualVolume as ResidualVolume };
  export type { rv_OBrienResidualVolumeParams as OBrienResidualVolumeParams, rv_ResidualVolumeEstimator as ResidualVolumeEstimator, rv_ResidualVolumeParams as ResidualVolumeParams };
}

/**
 * VO2max estimation formulas. Each method corresponds to a distinct fitness
 * test protocol and takes whatever inputs that protocol produces — these are
 * not interchangeable strategies, since you can't estimate VO2max from a
 * step-test heart rate using a formula that expects a 12-minute run distance.
 */
declare class VO2MaxEstimation {
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
declare class EnergyCostEstimation {
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
declare function vo2Reserve(vo2Max: number, vo2Rest?: number): number;
/**
 * Computes a target VO2 at a given exercise intensity, using the
 * Karvonen-style VO2 reserve method.
 * @param vo2Max - maximum oxygen uptake
 * @param vo2Rest - resting oxygen uptake
 * @param intensity - target intensity as a decimal fraction (e.g. 0.6 for 60%)
 */
declare function vo2Target(vo2Max: number, vo2Rest: number, intensity: number): number;

type vo2_EnergyCostEstimation = EnergyCostEstimation;
declare const vo2_EnergyCostEstimation: typeof EnergyCostEstimation;
type vo2_VO2MaxEstimation = VO2MaxEstimation;
declare const vo2_VO2MaxEstimation: typeof VO2MaxEstimation;
declare const vo2_vo2Reserve: typeof vo2Reserve;
declare const vo2_vo2Target: typeof vo2Target;
declare namespace vo2 {
  export {
    vo2_EnergyCostEstimation as EnergyCostEstimation,
    vo2_VO2MaxEstimation as VO2MaxEstimation,
    vo2_vo2Reserve as vo2Reserve,
    vo2_vo2Target as vo2Target,
  };
}

type index$7_BMREstimator = BMREstimator;
type index$7_BaseBMREstimator = BaseBMREstimator;
declare const index$7_BaseBMREstimator: typeof BaseBMREstimator;
type index$7_CardiacEstimator = CardiacEstimator;
type index$7_GenderRMREstimator = GenderRMREstimator;
type index$7_RMRLBMEstimator = RMRLBMEstimator;
type index$7_ResidualVolumeEstimator<T extends ResidualVolumeParams = ResidualVolumeParams> = ResidualVolumeEstimator<T>;
type index$7_ResidualVolumeParams = ResidualVolumeParams;
type index$7_TEEEstimator = TEEEstimator;
declare const index$7_TEEEstimator: typeof TEEEstimator;
type index$7_TEEPredictParams = TEEPredictParams;
type index$7_TerrainEnergyExpenditureEstimator = TerrainEnergyExpenditureEstimator;
type index$7_TerrainEnergyExpenditureParams = TerrainEnergyExpenditureParams;
declare const index$7_cardiac: typeof cardiac;
declare const index$7_vo2: typeof vo2;
declare namespace index$7 {
  export { index$7_BaseBMREstimator as BaseBMREstimator, index$7_TEEEstimator as TEEEstimator, index$7_cardiac as cardiac, index$8 as energy, rv as residualVolume, index$7_vo2 as vo2 };
  export type { index$7_BMREstimator as BMREstimator, index$7_CardiacEstimator as CardiacEstimator, index$7_GenderRMREstimator as GenderRMREstimator, index$7_RMRLBMEstimator as RMRLBMEstimator, index$7_ResidualVolumeEstimator as ResidualVolumeEstimator, index$7_ResidualVolumeParams as ResidualVolumeParams, index$7_TEEPredictParams as TEEPredictParams, index$7_TerrainEnergyExpenditureEstimator as TerrainEnergyExpenditureEstimator, index$7_TerrainEnergyExpenditureParams as TerrainEnergyExpenditureParams };
}

interface SkinfoldDensityParams {
    gender: Gender;
    age: number;
    sum: number;
}
/**
 * Estimator interface for skinfold-based body density (%body density)
 * estimation formulas.
 */
interface SkinfoldDensityEstimator {
    estimate(params: SkinfoldDensityParams): number;
}
/** Skinfold density formula for children */
declare class SkinfoldDensityChildEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum2SKF in mm
     * @returns %body density
     */
    estimate({ gender, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for Black and Hispanic females (and, per the original formula, non-females) */
declare class SkinfoldDensityBlackHispanicFemaleEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum7SKF in mm (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
     * @returns %body density
     */
    estimate({ gender, age, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for white males (per the original formula, gender-independent) */
declare class SkinfoldDensityWhiteMaleEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum3SKF in mm (chest + abdomen + thigh)
     * @returns %body density
     */
    estimate({ age, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for white females with anorexia */
declare class SkinfoldDensityWhiteFemaleAnorexicEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum3SKF in mm (triceps + suprailiac + thigh)
     * @returns %body density
     */
    estimate({ age, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for athletes */
declare class SkinfoldDensityAthleteEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - female: sum4SKF (triceps + anterior suprailiac + abdomen + thigh);
     *              male: sum7SKF (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
     * @returns body density in g/cc
     */
    estimate({ gender, age, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for Black collegiate athletes, ages 18-34 */
declare class SkinfoldDensityCollegiateAthleteBlackEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum3SKF in mm (abdomen + thigh + triceps)
     * @returns body density in g/cc
     */
    estimate({ gender, sum }: SkinfoldDensityParams): number;
}
/** Skinfold density formula for white collegiate athletes, ages 18-34 */
declare class SkinfoldDensityCollegiateAthleteWhiteEstimator implements SkinfoldDensityEstimator {
    /**
     * @param sum - sum3SKF in mm (abdomen + thigh + triceps)
     * @returns body density in g/cc
     */
    estimate({ gender, sum }: SkinfoldDensityParams): number;
}
/**
 * @class
 * @classdesc computes body density and body volume, delegating skinfold-based
 * density estimation to a pluggable SkinfoldDensityEstimator
 */
declare class Density {
    private gender;
    private age;
    private weight;
    private skinfoldEstimator?;
    constructor(gender: Gender, age: number, weight: number, skinfoldEstimator?: SkinfoldDensityEstimator);
    setSkinfoldEstimator(Estimator: SkinfoldDensityEstimator): void;
    /**
     * Delegates to the configured skinfold density Estimator.
     * @param sum - skinfold sum in mm; which skinfolds are summed depends on the Estimator in use
     * @returns %body density (or body density in g/cc, depending on Estimator)
     */
    skinfoldDb(sum: number): number;
    /**
     * Converts body density at total lung capacity (TLC) to body density
     * at residual volume (RV).
     * @param bd - body density at TLC in g/cc
     * @returns body density at residual volume in g/cc
     */
    dbAtRV(bd: number): number;
    /**
     * Computes body volume from underwater weighing.
     * @param uww - underwater weight
     * @param rv - residual volume in mL
     * @param gv - volume of air in the gastrointestinal tract in mL (default: 100mL)
     * @returns body volume
     */
    bodyVol(uww: number, rv: number, gv: number): number;
}

type density_Density = Density;
declare const density_Density: typeof Density;
type density_SkinfoldDensityAthleteEstimator = SkinfoldDensityAthleteEstimator;
declare const density_SkinfoldDensityAthleteEstimator: typeof SkinfoldDensityAthleteEstimator;
type density_SkinfoldDensityBlackHispanicFemaleEstimator = SkinfoldDensityBlackHispanicFemaleEstimator;
declare const density_SkinfoldDensityBlackHispanicFemaleEstimator: typeof SkinfoldDensityBlackHispanicFemaleEstimator;
type density_SkinfoldDensityChildEstimator = SkinfoldDensityChildEstimator;
declare const density_SkinfoldDensityChildEstimator: typeof SkinfoldDensityChildEstimator;
type density_SkinfoldDensityCollegiateAthleteBlackEstimator = SkinfoldDensityCollegiateAthleteBlackEstimator;
declare const density_SkinfoldDensityCollegiateAthleteBlackEstimator: typeof SkinfoldDensityCollegiateAthleteBlackEstimator;
type density_SkinfoldDensityCollegiateAthleteWhiteEstimator = SkinfoldDensityCollegiateAthleteWhiteEstimator;
declare const density_SkinfoldDensityCollegiateAthleteWhiteEstimator: typeof SkinfoldDensityCollegiateAthleteWhiteEstimator;
type density_SkinfoldDensityEstimator = SkinfoldDensityEstimator;
type density_SkinfoldDensityParams = SkinfoldDensityParams;
type density_SkinfoldDensityWhiteFemaleAnorexicEstimator = SkinfoldDensityWhiteFemaleAnorexicEstimator;
declare const density_SkinfoldDensityWhiteFemaleAnorexicEstimator: typeof SkinfoldDensityWhiteFemaleAnorexicEstimator;
type density_SkinfoldDensityWhiteMaleEstimator = SkinfoldDensityWhiteMaleEstimator;
declare const density_SkinfoldDensityWhiteMaleEstimator: typeof SkinfoldDensityWhiteMaleEstimator;
declare namespace density {
  export { density_Density as Density, density_SkinfoldDensityAthleteEstimator as SkinfoldDensityAthleteEstimator, density_SkinfoldDensityBlackHispanicFemaleEstimator as SkinfoldDensityBlackHispanicFemaleEstimator, density_SkinfoldDensityChildEstimator as SkinfoldDensityChildEstimator, density_SkinfoldDensityCollegiateAthleteBlackEstimator as SkinfoldDensityCollegiateAthleteBlackEstimator, density_SkinfoldDensityCollegiateAthleteWhiteEstimator as SkinfoldDensityCollegiateAthleteWhiteEstimator, density_SkinfoldDensityWhiteFemaleAnorexicEstimator as SkinfoldDensityWhiteFemaleAnorexicEstimator, density_SkinfoldDensityWhiteMaleEstimator as SkinfoldDensityWhiteMaleEstimator };
  export type { density_SkinfoldDensityEstimator as SkinfoldDensityEstimator, density_SkinfoldDensityParams as SkinfoldDensityParams };
}

/** Common input for formulas that convert body density to body fat percentage. */
interface BodyDensityFatParams {
    /** body density in g/cc */
    bd: number;
}
/**
 * Estimator interface for population-specific formulas converting
 * Body Density (Db) to Percent Body Fat (%BF).
 */
interface BodyDensityFatEstimator {
    /** @returns body fat percentage as a decimal */
    estimate(params: BodyDensityFatParams): number;
}
/** Brozek formula */
declare class BrozekFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Ortiz formula (African American females) */
declare class OrtizFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Schutte formula (African American males) */
declare class SchutteFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Siri formula */
declare class SiriFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Wagner formula (African American males) */
declare class WagnerFatEstimator implements BodyDensityFatEstimator {
    estimate({ bd }: BodyDensityFatParams): number;
}
/** Common input for formulas that estimate body fat percentage from BMI. */
interface BmiFatParams {
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
interface BmiFatEstimator {
    /** @returns body fat percentage as a decimal */
    estimate(params: BmiFatParams): number;
}
/** Estimates body fat percentage from BMI in children. */
declare class ChildBmiFatEstimator implements BmiFatEstimator {
    estimate({ gender, age, weight, height }: BmiFatParams): number;
}
/** Estimates body fat percentage from BMI in adults. */
declare class AdultBmiFatEstimator implements BmiFatEstimator {
    estimate({ gender, age, weight, height }: BmiFatParams): number;
}
/**
 * Estimates body fat percentage from waist circumference (US Navy method).
 *
 * @param gender - biological sex used to select the regression coefficients
 * @param weight - weight in kg
 * @param waistCircumference - waist circumference in meters
 * @returns body fat percentage as a decimal
 */
declare function waistFat(gender: Gender, weight: number, waistCircumference: number): number;

type fat_AdultBmiFatEstimator = AdultBmiFatEstimator;
declare const fat_AdultBmiFatEstimator: typeof AdultBmiFatEstimator;
type fat_BmiFatEstimator = BmiFatEstimator;
type fat_BmiFatParams = BmiFatParams;
type fat_BodyDensityFatEstimator = BodyDensityFatEstimator;
type fat_BodyDensityFatParams = BodyDensityFatParams;
type fat_BrozekFatEstimator = BrozekFatEstimator;
declare const fat_BrozekFatEstimator: typeof BrozekFatEstimator;
type fat_ChildBmiFatEstimator = ChildBmiFatEstimator;
declare const fat_ChildBmiFatEstimator: typeof ChildBmiFatEstimator;
type fat_OrtizFatEstimator = OrtizFatEstimator;
declare const fat_OrtizFatEstimator: typeof OrtizFatEstimator;
type fat_SchutteFatEstimator = SchutteFatEstimator;
declare const fat_SchutteFatEstimator: typeof SchutteFatEstimator;
type fat_SiriFatEstimator = SiriFatEstimator;
declare const fat_SiriFatEstimator: typeof SiriFatEstimator;
type fat_WagnerFatEstimator = WagnerFatEstimator;
declare const fat_WagnerFatEstimator: typeof WagnerFatEstimator;
declare const fat_waistFat: typeof waistFat;
declare namespace fat {
  export { fat_AdultBmiFatEstimator as AdultBmiFatEstimator, fat_BrozekFatEstimator as BrozekFatEstimator, fat_ChildBmiFatEstimator as ChildBmiFatEstimator, fat_OrtizFatEstimator as OrtizFatEstimator, fat_SchutteFatEstimator as SchutteFatEstimator, fat_SiriFatEstimator as SiriFatEstimator, fat_WagnerFatEstimator as WagnerFatEstimator, fat_waistFat as waistFat };
  export type { fat_BmiFatEstimator as BmiFatEstimator, fat_BmiFatParams as BmiFatParams, fat_BodyDensityFatEstimator as BodyDensityFatEstimator, fat_BodyDensityFatParams as BodyDensityFatParams };
}

declare function dailyWaterNeed(weight: number): number;

declare const hydration_dailyWaterNeed: typeof dailyWaterNeed;
declare namespace hydration {
  export {
    hydration_dailyWaterNeed as dailyWaterNeed,
  };
}

interface IdealWeightParams {
    gender: Gender;
    height: number;
}
/**
 * Estimator interface for ideal body weight estimation formulas.
 */
interface IdealWeightEstimator {
    estimate(params: IdealWeightParams): number;
}
/**
 * G. Hamwi (1964)
 */
declare class HamwiEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }: IdealWeightParams): number;
}
/**
 * B. Devine (1974)
 */
declare class DevineEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }: IdealWeightParams): number;
}
/**
 * J. Robinson et al. (1983)
 */
declare class RobinsonEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }: IdealWeightParams): number;
}
/**
 * D. Miller (1983)
 */
declare class MillerEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }: IdealWeightParams): number;
}
/**
 * H. Lemmens et al. (2005). Gender-independent; `gender` is ignored.
 */
declare class LemmensEstimator implements IdealWeightEstimator {
    /**
     * @param height - height in meters (note: differs from the other strategies, which use inches)
     * @returns ideal weight in kg
     */
    estimate({ height }: IdealWeightParams): number;
}
/**
 * Context class for ideal body weight calculations.
 * Delegates to a pluggable IdealWeightEstimator.
 */
declare class Ideal {
    private Estimator;
    private params;
    constructor(Estimator: IdealWeightEstimator, gender: Gender, height: number);
    setEstimator(Estimator: IdealWeightEstimator): void;
    /**
     * @returns ideal weight in kg, using the current Estimator
     */
    estimate(): number;
}
/**
 * Estimates an athlete's ideal weight based on height.
 * H. Willoughby.
 *
 * @param height - height in inches
 * @returns estimated weight in lb
 */
declare function willoughbyWeight(height: number): number;
/**
 * Estimates an athlete's ideal waist size based on height.
 * H. Willoughby.
 *
 * @param height - height in inches
 * @returns estimated waist in inches
 */
declare function willoughbyWaist(height: number): number;

type ideal_DevineEstimator = DevineEstimator;
declare const ideal_DevineEstimator: typeof DevineEstimator;
type ideal_HamwiEstimator = HamwiEstimator;
declare const ideal_HamwiEstimator: typeof HamwiEstimator;
type ideal_Ideal = Ideal;
declare const ideal_Ideal: typeof Ideal;
type ideal_IdealWeightEstimator = IdealWeightEstimator;
type ideal_IdealWeightParams = IdealWeightParams;
type ideal_LemmensEstimator = LemmensEstimator;
declare const ideal_LemmensEstimator: typeof LemmensEstimator;
type ideal_MillerEstimator = MillerEstimator;
declare const ideal_MillerEstimator: typeof MillerEstimator;
type ideal_RobinsonEstimator = RobinsonEstimator;
declare const ideal_RobinsonEstimator: typeof RobinsonEstimator;
declare const ideal_willoughbyWaist: typeof willoughbyWaist;
declare const ideal_willoughbyWeight: typeof willoughbyWeight;
declare namespace ideal {
  export { ideal_DevineEstimator as DevineEstimator, ideal_HamwiEstimator as HamwiEstimator, ideal_Ideal as Ideal, ideal_LemmensEstimator as LemmensEstimator, ideal_MillerEstimator as MillerEstimator, ideal_RobinsonEstimator as RobinsonEstimator, ideal_willoughbyWaist as willoughbyWaist, ideal_willoughbyWeight as willoughbyWeight };
  export type { ideal_IdealWeightEstimator as IdealWeightEstimator, ideal_IdealWeightParams as IdealWeightParams };
}

/**
 * Body composition index calculations.
 *
 * Strategy pattern is used only where it earns its keep: BMI, BMI Prime,
 * and Corpulence are all genuinely interchangeable answers to the same
 * question ("estimate adiposity from height + weight alone") and share
 * the same input shape, so picking one at runtime is a real use case.
 *
 * Everything else (BAI, BSI, SBSI, WHR, WHtR) is a semantically distinct
 * measurement with its own required inputs — there's no "swap the
 * algorithm" scenario for them, so they're just plain functions.
 */
/** Core metrics needed by the mass-index family. */
interface BodyMetrics {
    /** Height in meters. */
    height: number;
    /** Body mass in kilograms. */
    weight: number;
}
/**
 * Common contract for the mass-index family. All three take just
 * height/weight (plus optional formula-specific tuning) and return a
 * single adiposity score, so they're safe to swap for one another.
 */
interface MassIndexStrategy {
    /** Human-readable name of the formula, e.g. `"BMI"`. */
    readonly name: string;
    /**
     * Computes the index for the given metrics.
     *
     * @param metrics - The person's height and weight.
     * @returns The computed index value.
     */
    calculate(metrics: BodyMetrics): number;
}
/**
 * Body Mass Index.
 *
 * Estimates body fat from the ratio of weight to the square of height.
 */
declare class BmiStrategy implements MassIndexStrategy {
    readonly name = "BMI";
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The BMI value.
     */
    calculate({ height, weight }: BodyMetrics): number;
}
/**
 * BMI Prime.
 *
 * Expresses BMI as a ratio of an upper-limit "normal" BMI, so 1.0
 * represents the boundary of the normal weight range.
 */
declare class BmiPrimeStrategy implements MassIndexStrategy {
    private readonly upperLimit;
    readonly name = "BMI Prime";
    /**
     * @param upperLimit - The upper bound of the normal BMI range used as
     * the denominator. Defaults to `25.9`.
     */
    constructor(upperLimit?: number);
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The BMI Prime value.
     */
    calculate(metrics: BodyMetrics): number;
}
/**
 * Corpulence (Ponderal/Rohrer) Index.
 *
 * Like BMI, but divides weight by height cubed instead of squared,
 * which scales better for very short or very tall people.
 */
declare class CorpulenceStrategy implements MassIndexStrategy {
    readonly name = "Corpulence";
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The Corpulence (Ponderal) Index value.
     */
    calculate({ height, weight }: BodyMetrics): number;
}
/**
 * Strategy-pattern context for the mass-index family. Holds the
 * person's metrics once and runs whichever {@link MassIndexStrategy}
 * you hand it, so callers can swap formulas at runtime without
 * re-supplying height/weight.
 *
 * @example
 * ```ts
 * const calculator = new MassIndexCalculator({ height: 1.8, weight: 80 });
 * calculator.calculate(new BmiStrategy());
 * calculator.calculate(new CorpulenceStrategy());
 * ```
 */
declare class MassIndexCalculator {
    private readonly metrics;
    /**
     * @param metrics - The person's height (m) and weight (kg), reused
     * across every strategy run through {@link MassIndexCalculator.calculate}.
     */
    constructor(metrics: BodyMetrics);
    /**
     * Runs the given strategy against this calculator's metrics.
     *
     * @param strategy - The mass-index formula to apply.
     * @returns The computed index value.
     */
    calculate(strategy: MassIndexStrategy): number;
}
/**
 * Body Adiposity Index.
 *
 * Estimates body fat percentage from hip circumference and height,
 * without requiring weight.
 *
 * @param height - Height in meters.
 * @param hipCircumference - Hip circumference in centimeters.
 * @returns The BAI value.
 */
declare function bai(height: number, hipCircumference: number): number;
/**
 * Body Shape Index.
 *
 * Combines waist circumference with BMI and height to assess
 * abdominal obesity independent of overall body mass.
 *
 * @param height - Height in meters.
 * @param bmi - The person's BMI, e.g. from {@link BmiStrategy}.
 * @param waistCircumference - Waist circumference in centimeters.
 * @returns The BSI value.
 */
declare function bsi(height: number, bmi: number, waistCircumference: number): number;
/** Inputs required to compute the {@link sbsi | Surface-based Body Shape Index}. */
interface SbsiParams {
    /** Height in meters. */
    height: number;
    /** Body surface area, in square meters. */
    bsa: number;
    /** Vertical trunk circumference in centimeters. */
    verticalTrunkCircumference: number;
    /** Waist circumference in centimeters. */
    waistCircumference: number;
}
/**
 * Surface-based Body Shape Index.
 *
 * A variant of BSI that normalizes by body surface area and vertical
 * trunk circumference instead of BMI.
 *
 * @param params - The height, body surface area, and circumference
 * measurements required by the formula.
 * @returns The SBSI value.
 */
declare function sbsi({ height, bsa, verticalTrunkCircumference, waistCircumference, }: SbsiParams): number;
/**
 * Waist-to-Hip Ratio.
 *
 * @param waistCircumference - Waist circumference in centimeters.
 * @param hipCircumference - Hip circumference in centimeters.
 * @returns The WHR value.
 */
declare function whr(waistCircumference: number, hipCircumference: number): number;
/**
 * Waist-to-Height Ratio.
 *
 * @param waistCircumference - Waist circumference in centimeters.
 * @param height - Height in meters.
 * @returns The WHtR value.
 */
declare function whtr(waistCircumference: number, height: number): number;

type indices_BmiPrimeStrategy = BmiPrimeStrategy;
declare const indices_BmiPrimeStrategy: typeof BmiPrimeStrategy;
type indices_BmiStrategy = BmiStrategy;
declare const indices_BmiStrategy: typeof BmiStrategy;
type indices_BodyMetrics = BodyMetrics;
type indices_CorpulenceStrategy = CorpulenceStrategy;
declare const indices_CorpulenceStrategy: typeof CorpulenceStrategy;
type indices_MassIndexCalculator = MassIndexCalculator;
declare const indices_MassIndexCalculator: typeof MassIndexCalculator;
type indices_MassIndexStrategy = MassIndexStrategy;
type indices_SbsiParams = SbsiParams;
declare const indices_bai: typeof bai;
declare const indices_bsi: typeof bsi;
declare const indices_sbsi: typeof sbsi;
declare const indices_whr: typeof whr;
declare const indices_whtr: typeof whtr;
declare namespace indices {
  export { indices_BmiPrimeStrategy as BmiPrimeStrategy, indices_BmiStrategy as BmiStrategy, indices_CorpulenceStrategy as CorpulenceStrategy, indices_MassIndexCalculator as MassIndexCalculator, indices_bai as bai, indices_bsi as bsi, indices_sbsi as sbsi, indices_whr as whr, indices_whtr as whtr };
  export type { indices_BodyMetrics as BodyMetrics, indices_MassIndexStrategy as MassIndexStrategy, indices_SbsiParams as SbsiParams };
}

interface ResistanceParams {
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
interface ReactanceParams extends ResistanceParams {
    reactance: number;
}
/**
 * Estimator interface for fat-free mass (FFM) estimation formulas.
 * Generic over the params shape so both resistance-only and
 * resistance+reactance formulas can implement the same interface.
 */
interface FatFreeMassEstimator<T extends ResistanceParams = ResistanceParams> {
    estimate(params: T): number;
}
/**
 * Lohman (1992) — fat-free mass in white boys and girls, 8-15 years.
 * @returns Fat Free Mass in kg
 */
declare class FfmChildEstimator implements FatFreeMassEstimator<ReactanceParams> {
    estimate({ height, weight, resistance, reactance }: ReactanceParams): number;
}
/**
 * Houtkooper et al. (1992) — fat-free mass in white boys and girls, 10-19 years.
 * @returns Fat Free Mass in kg
 */
declare class FfmAdolescentEstimator implements FatFreeMassEstimator {
    estimate({ height, weight, resistance }: ResistanceParams): number;
}
/**
 * Segal et al. (1988) — fat-free mass for lean adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF < .30. Men: %BF < .20.
 * @returns Fat Free Mass in kg
 */
declare class FfmAdultLeanEstimator implements FatFreeMassEstimator {
    estimate({ gender, age, height, weight, resistance }: ResistanceParams): number;
}
/**
 * Segal et al. (1988) — fat-free mass for obese adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF > .30. Men: %BF > .20.
 * @returns Fat Free Mass in kg
 */
declare class FfmAdultObeseEstimator implements FatFreeMassEstimator {
    estimate({ gender, age, height, weight, resistance }: ResistanceParams): number;
}
/**
 * Fornetti et al. (1999) for female athletes (18-27 years) and
 * Oppliger et al. (1991) for male athletes (19-40 years).
 * @returns Fat Free Mass in kg
 */
declare class FfmAdultAthleteEstimator implements FatFreeMassEstimator<ReactanceParams> {
    estimate({ gender, height, weight, resistance, reactance }: ReactanceParams): number;
}
/**
 * @class
 * @classdesc estimates body composition (fat-free mass) using a
 * pluggable bioelectrical impedance analysis (BIA) Estimator
 */
declare class Mass {
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

type mass_FatFreeMassEstimator<T extends ResistanceParams = ResistanceParams> = FatFreeMassEstimator<T>;
type mass_FfmAdolescentEstimator = FfmAdolescentEstimator;
declare const mass_FfmAdolescentEstimator: typeof FfmAdolescentEstimator;
type mass_FfmAdultAthleteEstimator = FfmAdultAthleteEstimator;
declare const mass_FfmAdultAthleteEstimator: typeof FfmAdultAthleteEstimator;
type mass_FfmAdultLeanEstimator = FfmAdultLeanEstimator;
declare const mass_FfmAdultLeanEstimator: typeof FfmAdultLeanEstimator;
type mass_FfmAdultObeseEstimator = FfmAdultObeseEstimator;
declare const mass_FfmAdultObeseEstimator: typeof FfmAdultObeseEstimator;
type mass_FfmChildEstimator = FfmChildEstimator;
declare const mass_FfmChildEstimator: typeof FfmChildEstimator;
type mass_Mass = Mass;
declare const mass_Mass: typeof Mass;
type mass_ReactanceParams = ReactanceParams;
type mass_ResistanceParams = ResistanceParams;
declare namespace mass {
  export { mass_FfmAdolescentEstimator as FfmAdolescentEstimator, mass_FfmAdultAthleteEstimator as FfmAdultAthleteEstimator, mass_FfmAdultLeanEstimator as FfmAdultLeanEstimator, mass_FfmAdultObeseEstimator as FfmAdultObeseEstimator, mass_FfmChildEstimator as FfmChildEstimator, mass_Mass as Mass };
  export type { mass_FatFreeMassEstimator as FatFreeMassEstimator, mass_ReactanceParams as ReactanceParams, mass_ResistanceParams as ResistanceParams };
}

interface FemurStatureParams {
    gender: Gender;
    femurLength: number;
}
/**
 * Estimator interface for ancestry-specific stature estimation
 * from femur length (Trotter and Gleser 1952, 1958).
 */
interface FemurStatureEstimator {
    estimate(params: FemurStatureParams): number;
}
/** Trotter & Gleser regression for American White population */
declare class AmericanWhiteStatureEstimator implements FemurStatureEstimator {
    estimate({ gender, femurLength }: FemurStatureParams): number;
}
/** Trotter & Gleser regression for American Black population */
declare class AmericanBlackStatureEstimator implements FemurStatureEstimator {
    estimate({ gender, femurLength }: FemurStatureParams): number;
}
/**
 * Estimates stature using the age- and soft-tissue-corrected "universal" formula.
 *
 * Raxter et al. (2006) noted a discrepancy between the average soft tissue
 * correction factor of Fully's 1956 sample (10.5 cm) and their own (12.4 cm).
 * They devised new equations to correct for this soft tissue factor
 * discrepancy, as well as for the gradual effects of age on stature.
 *
 * @see https://digital.library.txstate.edu/bitstream/handle/10877/4055/fulltext.pdf
 * @param height - height in cm
 * @param age - age in years
 * @returns estimated stature in cm
 */
declare function universalStature(height: number, age: number): number;
/**
 * Estimates stride length from height and gender.
 *
 * @param gender - biological sex used to select the stride factor
 * @param height - height in meters
 * @returns estimated stride length in meters
 */
declare function strideLength(gender: Gender, height: number): number;

type stature_AmericanBlackStatureEstimator = AmericanBlackStatureEstimator;
declare const stature_AmericanBlackStatureEstimator: typeof AmericanBlackStatureEstimator;
type stature_AmericanWhiteStatureEstimator = AmericanWhiteStatureEstimator;
declare const stature_AmericanWhiteStatureEstimator: typeof AmericanWhiteStatureEstimator;
type stature_FemurStatureEstimator = FemurStatureEstimator;
type stature_FemurStatureParams = FemurStatureParams;
declare const stature_strideLength: typeof strideLength;
declare const stature_universalStature: typeof universalStature;
declare namespace stature {
  export { stature_AmericanBlackStatureEstimator as AmericanBlackStatureEstimator, stature_AmericanWhiteStatureEstimator as AmericanWhiteStatureEstimator, stature_strideLength as strideLength, stature_universalStature as universalStature };
  export type { stature_FemurStatureEstimator as FemurStatureEstimator, stature_FemurStatureParams as FemurStatureParams };
}

interface SurfaceAreaParams {
    gender: Gender;
    height: number;
    weight: number;
}
/**
 * Strategy interface for body surface area calculation algorithms.
 */
interface SurfaceAreaEstimator {
    calculate(params: SurfaceAreaParams): number;
}
/** Boyd formula */
declare class BoydStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Costeff formula */
declare class CosteffStrategy implements SurfaceAreaEstimator {
    calculate({ weight }: SurfaceAreaParams): number;
}
/** DuBois & DuBois formula */
declare class DuboisStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Fujimoto formula */
declare class FujimotoStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Gehan & George formula */
declare class GehanGeorgeStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Haycock formula */
declare class HaycockStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Mosteller formula */
declare class MostellerStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Schlich formula (gender-dependent) */
declare class SchlichStrategy implements SurfaceAreaEstimator {
    calculate({ gender, height, weight }: SurfaceAreaParams): number;
}
/** Shuter & Aslani formula */
declare class ShuterAslaniStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Takahira formula */
declare class TakahiraStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/**
 * Context class for body surface area calculations.
 * Delegates the actual computation to a pluggable SurfaceAreaEstimator.
 * @class
 * @classdesc computes body surface area using a configurable algorithm
 */
declare class SurfaceArea {
    private strategy;
    private params;
    constructor(strategy: SurfaceAreaEstimator, gender: Gender, height: number, weight: number);
    /**
     * Swap the algorithm used for calculation at runtime.
     */
    setStrategy(strategy: SurfaceAreaEstimator): void;
    /**
     * @returns {Number} surface area in meters^2, using the current strategy
     */
    calculate(): number;
}

type surfaceArea_BoydStrategy = BoydStrategy;
declare const surfaceArea_BoydStrategy: typeof BoydStrategy;
type surfaceArea_CosteffStrategy = CosteffStrategy;
declare const surfaceArea_CosteffStrategy: typeof CosteffStrategy;
type surfaceArea_DuboisStrategy = DuboisStrategy;
declare const surfaceArea_DuboisStrategy: typeof DuboisStrategy;
type surfaceArea_FujimotoStrategy = FujimotoStrategy;
declare const surfaceArea_FujimotoStrategy: typeof FujimotoStrategy;
type surfaceArea_GehanGeorgeStrategy = GehanGeorgeStrategy;
declare const surfaceArea_GehanGeorgeStrategy: typeof GehanGeorgeStrategy;
type surfaceArea_HaycockStrategy = HaycockStrategy;
declare const surfaceArea_HaycockStrategy: typeof HaycockStrategy;
type surfaceArea_MostellerStrategy = MostellerStrategy;
declare const surfaceArea_MostellerStrategy: typeof MostellerStrategy;
type surfaceArea_SchlichStrategy = SchlichStrategy;
declare const surfaceArea_SchlichStrategy: typeof SchlichStrategy;
type surfaceArea_ShuterAslaniStrategy = ShuterAslaniStrategy;
declare const surfaceArea_ShuterAslaniStrategy: typeof ShuterAslaniStrategy;
type surfaceArea_SurfaceArea = SurfaceArea;
declare const surfaceArea_SurfaceArea: typeof SurfaceArea;
type surfaceArea_SurfaceAreaEstimator = SurfaceAreaEstimator;
type surfaceArea_SurfaceAreaParams = SurfaceAreaParams;
type surfaceArea_TakahiraStrategy = TakahiraStrategy;
declare const surfaceArea_TakahiraStrategy: typeof TakahiraStrategy;
declare namespace surfaceArea {
  export { surfaceArea_BoydStrategy as BoydStrategy, surfaceArea_CosteffStrategy as CosteffStrategy, surfaceArea_DuboisStrategy as DuboisStrategy, surfaceArea_FujimotoStrategy as FujimotoStrategy, surfaceArea_GehanGeorgeStrategy as GehanGeorgeStrategy, surfaceArea_HaycockStrategy as HaycockStrategy, surfaceArea_MostellerStrategy as MostellerStrategy, surfaceArea_SchlichStrategy as SchlichStrategy, surfaceArea_ShuterAslaniStrategy as ShuterAslaniStrategy, surfaceArea_SurfaceArea as SurfaceArea, surfaceArea_TakahiraStrategy as TakahiraStrategy };
  export type { surfaceArea_SurfaceAreaEstimator as SurfaceAreaEstimator, surfaceArea_SurfaceAreaParams as SurfaceAreaParams };
}

type index$6_BmiFatEstimator = BmiFatEstimator;
type index$6_BmiFatParams = BmiFatParams;
type index$6_BodyMetrics = BodyMetrics;
type index$6_FatFreeMassEstimator<T extends ResistanceParams = ResistanceParams> = FatFreeMassEstimator<T>;
type index$6_FemurStatureEstimator = FemurStatureEstimator;
type index$6_FemurStatureParams = FemurStatureParams;
type index$6_IdealWeightEstimator = IdealWeightEstimator;
type index$6_IdealWeightParams = IdealWeightParams;
type index$6_ReactanceParams = ReactanceParams;
type index$6_ResistanceParams = ResistanceParams;
type index$6_SkinfoldDensityEstimator = SkinfoldDensityEstimator;
type index$6_SkinfoldDensityParams = SkinfoldDensityParams;
type index$6_SurfaceAreaEstimator = SurfaceAreaEstimator;
type index$6_SurfaceAreaParams = SurfaceAreaParams;
declare const index$6_density: typeof density;
declare const index$6_fat: typeof fat;
declare const index$6_hydration: typeof hydration;
declare const index$6_ideal: typeof ideal;
declare const index$6_indices: typeof indices;
declare const index$6_mass: typeof mass;
declare const index$6_stature: typeof stature;
declare const index$6_surfaceArea: typeof surfaceArea;
declare namespace index$6 {
  export { index$6_density as density, index$6_fat as fat, index$6_hydration as hydration, index$6_ideal as ideal, index$6_indices as indices, index$6_mass as mass, index$6_stature as stature, index$6_surfaceArea as surfaceArea };
  export type { index$6_BmiFatEstimator as BmiFatEstimator, index$6_BmiFatParams as BmiFatParams, index$6_BodyMetrics as BodyMetrics, index$6_FatFreeMassEstimator as FatFreeMassEstimator, index$6_FemurStatureEstimator as FemurStatureEstimator, index$6_FemurStatureParams as FemurStatureParams, index$6_IdealWeightEstimator as IdealWeightEstimator, index$6_IdealWeightParams as IdealWeightParams, index$6_ReactanceParams as ReactanceParams, index$6_ResistanceParams as ResistanceParams, index$6_SkinfoldDensityEstimator as SkinfoldDensityEstimator, index$6_SkinfoldDensityParams as SkinfoldDensityParams, index$6_SurfaceAreaEstimator as SurfaceAreaEstimator, index$6_SurfaceAreaParams as SurfaceAreaParams };
}

declare class UnitConverter {
    private static unitTable;
    private value;
    private currentUnit;
    private targetUnit;
    constructor(value: number, unit: string);
    to(targetUnit: string): this;
    val(): number;
    static addUnit(base: string, prefixed: string, multiplier: number, overwrite?: boolean): void;
    static addAlias(existing: string, alias: string): void;
}

declare function percentVO2Max(hrPercentage: number): number;
declare function percentHrMax(vO2MaxPercentage: number): number;

declare const swain_percentHrMax: typeof percentHrMax;
declare const swain_percentVO2Max: typeof percentVO2Max;
declare namespace swain {
  export {
    swain_percentHrMax as percentHrMax,
    swain_percentVO2Max as percentVO2Max,
  };
}

type TemperatureUnit = 'C' | 'F' | 'K' | 'R';
declare class TemperatureConverter {
    private value;
    private currentUnit;
    private targetUnit;
    constructor(value: number, unit: TemperatureUnit);
    to(targetUnit: TemperatureUnit): this;
    val(): number;
}

type index$5_TemperatureConverter = TemperatureConverter;
declare const index$5_TemperatureConverter: typeof TemperatureConverter;
type index$5_TemperatureUnit = TemperatureUnit;
type index$5_UnitConverter = UnitConverter;
declare const index$5_UnitConverter: typeof UnitConverter;
declare const index$5_swain: typeof swain;
declare namespace index$5 {
  export { index$5_TemperatureConverter as TemperatureConverter, index$5_UnitConverter as UnitConverter, index$5_swain as swain };
  export type { index$5_TemperatureUnit as TemperatureUnit };
}

interface MET {
    value: number;
    code: string;
    description: string;
}
declare function byCode(code: string): Readonly<MET> | null;
declare function estimateMETs(kcal: number, kg: number, hours: number): number;
declare function estimateKg(kcal: number, mets: number, hours: number): number;
declare function estimateHours(kcal: number, mets: number, kg: number): number;
declare function toKCal(mets: number, weight: number): number;
declare function fromVO2(vO2: number): number;
declare function karvonen(mets: number, intensity: number): number;
declare function target(vO2Max: number, intensity: number): number;

type mets_MET = MET;
declare const mets_byCode: typeof byCode;
declare const mets_estimateHours: typeof estimateHours;
declare const mets_estimateKg: typeof estimateKg;
declare const mets_estimateMETs: typeof estimateMETs;
declare const mets_fromVO2: typeof fromVO2;
declare const mets_karvonen: typeof karvonen;
declare const mets_target: typeof target;
declare const mets_toKCal: typeof toKCal;
declare namespace mets {
  export { mets_byCode as byCode, mets_estimateHours as estimateHours, mets_estimateKg as estimateKg, mets_estimateMETs as estimateMETs, mets_fromVO2 as fromVO2, mets_karvonen as karvonen, mets_target as target, mets_toKCal as toKCal };
  export type { mets_MET as MET };
}

interface DistanceEstimatable {
    distance(t2: number): number;
}
interface TimeEstimatable {
    time(d2: number): number;
}
/**
 * Abstract base class for aerobic performance models.
 * @class PerformanceModel
 * @abstract
 */
declare abstract class PerformanceModel {
    protected t1: number;
    protected d1: number;
    /**
     * @constructor
     * @param {number} d1 - Initial distance
     * @param {number} t1 - Initial time
     */
    constructor(d1: number, t1: number);
    /**
     * Estimate time for a given distance.
     * @abstract
     * @param {number} d2 - Target distance
     * @returns {number} Estimated time
     */
    time(_d2: number): number;
    /**
     * Estimate distance for a given time.
     * @abstract
     * @param {number} t2 - Target time
     * @returns {number} Estimated distance
     */
    distance(_t2: number): number;
}
/**
 * Riegel Running Model for estimating performance.
 * @class Riegel
 * @extends PerformanceModel
 * @implements DistanceEstimatable, TimeEstimatable
 */
declare class Riegel extends PerformanceModel implements DistanceEstimatable, TimeEstimatable {
    private factor;
    static readonly RUNNINGMEN: number;
    static readonly RUNNINGMEN40: number;
    static readonly RUNNINGMEN50: number;
    static readonly RUNNINGMEN60: number;
    static readonly RUNNINGMEN70: number;
    static readonly RUNNINGWOMEN: number;
    static readonly SWIMMINGMEN: number;
    static readonly SWIMMINGWOMEN: number;
    static readonly NORDICMEN: number;
    static readonly RACEWALKMEN: number;
    static readonly ROLLERSKATINGMEN: number;
    static readonly CYCLINGMEN: number;
    static readonly SPEEDSKATINGMEN: number;
    /**
     * @constructor
     * @param {number} d1 - Initial distance
     * @param {number} t1 - Initial time
     * @param {number} [factor=1.06] - Fatigue factor
     */
    constructor(d1: number, t1: number, factor?: number);
    /**
     * Estimate time for a given distance using Riegel's model.
     * @param {number} d2 - Target distance
     * @returns {number} Estimated time
     * @example
     * const riegel = new Fit.models.aerobic.Riegel(10000, 3600, Riegel.RUNNINGMEN);
     * const estimatedTime = riegel.time(21097); // Estimate half-marathon time based on 10K performance
     */
    time(d2: number): number;
    /**
     * Estimate distance for a given time using Riegel's model.
     * @param {number} t2 - Target time
     * @returns {number} Estimated distance
     * @example
     * const riegel = new Fit.models.aerobic.Riegel(5000, 1200, Riegel.RUNNINGWOMEN);
     * const estimatedDistance = riegel.distance(3600); // Estimate distance covered in 1 hour based on 5K performance
     */
    distance(t2: number): number;
}
/**
 * Cameron Running Model for estimating performance.
 * @class Cameron
 * @extends PerformanceModel
 * @implements DistanceEstimatable, TimeEstimatable
 */
declare class Cameron extends PerformanceModel implements DistanceEstimatable, TimeEstimatable {
    /**
     * Estimate time for a given distance using Cameron's model.
     * Works well for:
        post-1945 records at the 800m through the 10000m;
        from 1964 onward for the marathon
      * @param {number} d2 - Target distance in miles
      * @returns {number} Estimated time in seconds
      * @example
      * const cameron = new Fit.models.aerobic.Cameron(5, 1200); // 5 miles in 1200 seconds
      * const marathonTime = cameron.time(26.2); // Estimate marathon time
      */
    time(d2: number): number;
}
declare class VV implements TimeEstimatable {
    protected t1: number;
    protected d1: number;
    /**
     * @constructor
     * @param {number} d1 - Initial distance
     * @param {number} t1 - Initial time
     */
    constructor(d1: number, t1: number);
    protected adj_timer(d1: number, t1: number): number;
    protected riegel_velocity(distance: number): number;
    /**
     * Estimate time for a given mileage using the VV model.
     * @param {number} mileage - Weekly mileage
     * @param {number} [d2=42195.0] - Target distance (default is marathon distance in meters)
     * @returns {number} Estimated time in seconds
     * @example
     * const vv = new Fit.models.aerobic.VV(10000, 2400); // 10K in 40 minutes
     * const marathonTime = vv.time(50); // Estimate marathon time for 50 miles per week
     */
    time(mileage: number, d2?: number): number;
    /**
     * Alternative time estimation method using two performance points.
     * @param {number} mileage - Weekly mileage
     * @param {number} d2 - Second performance distance
     * @param {number} t2 - Second performance time
     * @param {number} [distance=42195.0] - Target distance (default is marathon distance in meters)
     * @returns {number} Estimated time in seconds
     * @example
     * const vv = new Fit.models.aerobic.VV(5000, 1200); // 5K in 20 minutes
     * const marathonTime = vv.time2(60, 10000, 2520, 42195); // Estimate marathon time based on 5K, 10K, and 60 miles per week
     */
    time2(mileage: number, d2: number, t2: number, distance?: number): number;
}

type aerobic_Cameron = Cameron;
declare const aerobic_Cameron: typeof Cameron;
type aerobic_DistanceEstimatable = DistanceEstimatable;
type aerobic_Riegel = Riegel;
declare const aerobic_Riegel: typeof Riegel;
type aerobic_TimeEstimatable = TimeEstimatable;
type aerobic_VV = VV;
declare const aerobic_VV: typeof VV;
declare namespace aerobic {
  export { aerobic_Cameron as Cameron, aerobic_Riegel as Riegel, aerobic_VV as VV };
  export type { aerobic_DistanceEstimatable as DistanceEstimatable, aerobic_TimeEstimatable as TimeEstimatable };
}

type index$4_DistanceEstimatable = DistanceEstimatable;
type index$4_TimeEstimatable = TimeEstimatable;
declare const index$4_aerobic: typeof aerobic;
declare namespace index$4 {
  export { index$4_aerobic as aerobic };
  export type { index$4_DistanceEstimatable as DistanceEstimatable, index$4_TimeEstimatable as TimeEstimatable };
}

declare function temperature(seconds: number): number;

declare const adjustment_temperature: typeof temperature;
declare namespace adjustment {
  export {
    adjustment_temperature as temperature,
  };
}

declare const MIN_AGE = 5;
declare const MAX_AGE = 100;
declare class RunningAgeGrade {
    private static readonly table;
    readonly gender: Gender;
    readonly age: number;
    constructor(gender: Gender, age: number);
    /**
     * Age-graded performance ratio for a given event and finish time.
     *
     * A value of 1.0 means the time exactly matches the age-graded standard
     * for this person's age and gender (derived from the event's world-class
     * mark, `OC`, adjusted by the age conversion factor). Lower values are
     * better performances relative to that standard; higher values are worse.
     *
     * @param event official event key, e.g. "5km", "Marathon", "100m"
     * @param time  finish time in seconds (or the event's native unit)
     * @returns the graded ratio, or 0 if the age is out of range or no
     *          conversion data exists for this age/event/gender combination
     */
    normalize(event: string, time: number): number;
    /** Whether age-grading data exists at all for this age. */
    static isAgeInRange(age: number): boolean;
    /** All event keys available for a given gender. */
    static getAvailableEvents(gender: Gender): string[];
    /** Whether a given event exists for a given gender. */
    static hasEvent(gender: Gender, event: string): boolean;
    private static getEventData;
}

declare const grading_MAX_AGE: typeof MAX_AGE;
declare const grading_MIN_AGE: typeof MIN_AGE;
type grading_RunningAgeGrade = RunningAgeGrade;
declare const grading_RunningAgeGrade: typeof RunningAgeGrade;
declare namespace grading {
  export {
    grading_MAX_AGE as MAX_AGE,
    grading_MIN_AGE as MIN_AGE,
    grading_RunningAgeGrade as RunningAgeGrade,
  };
}

declare function velocity(vO2: number): number;
declare function vO2(velocity: number): number;
declare function vO2Percentage(time: number): number;
declare function easy(vO2Max: number): number[];
declare function marathon(vO2Max: number): number[];
declare function threshold(vO2Max: number): number[];
declare function interval(vO2Max: number): number[];

declare const jackdaniels_easy: typeof easy;
declare const jackdaniels_interval: typeof interval;
declare const jackdaniels_marathon: typeof marathon;
declare const jackdaniels_threshold: typeof threshold;
declare const jackdaniels_vO2: typeof vO2;
declare const jackdaniels_vO2Percentage: typeof vO2Percentage;
declare const jackdaniels_velocity: typeof velocity;
declare namespace jackdaniels {
  export {
    jackdaniels_easy as easy,
    jackdaniels_interval as interval,
    jackdaniels_marathon as marathon,
    jackdaniels_threshold as threshold,
    jackdaniels_vO2 as vO2,
    jackdaniels_vO2Percentage as vO2Percentage,
    jackdaniels_velocity as velocity,
  };
}

declare function vVo2Max(vO2Max: number): number;
declare function hrSpeed(percentHR: number, vO2Max: number): number;
declare function hrPace(percentHR: number, vO2Max: number): number;

declare const pace_hrPace: typeof hrPace;
declare const pace_hrSpeed: typeof hrSpeed;
declare const pace_vVo2Max: typeof vVo2Max;
declare namespace pace {
  export {
    pace_hrPace as hrPace,
    pace_hrSpeed as hrSpeed,
    pace_vVo2Max as vVo2Max,
  };
}

declare const index$3_adjustment: typeof adjustment;
declare const index$3_grading: typeof grading;
declare const index$3_pace: typeof pace;
declare namespace index$3 {
  export {
    index$3_adjustment as adjustment,
    index$3_grading as grading,
    jackdaniels as jackDaniels,
    index$3_pace as pace,
  };
}

declare namespace index$2 {
  export {
    index$3 as running,
  };
}

/**
   * Represents a class for comparing and calculating various exercise physiology metrics.
   * This class is useful for researchers, trainers, and athletes to evaluate performance
   * across different weight classes and genders.
   */
declare class Compare {
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
declare class Jump {
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
interface RMFormula {
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
declare const estimators: readonly [{
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
type FormulaName = (typeof estimators)[number]["name"];
/** All formulas applicable to a given lifter/set, in one call. */
declare function applicableEstimators(gender: Gender, age: number, reps: number): RMFormula[];
/** Look up a formula by name (typed, autocompletes against FormulaName). */
declare function getEstimator(name: FormulaName): RMFormula;
/** Predict 1RM with a named formula, refusing to run it outside its valid range. */
declare function estimate1RM(name: FormulaName, gender: Gender, age: number, reps: number, weight: number): number;
/**
 * Represents various One Repetition Maximum (1RM) estimation methods.
 * Use this class to perform 1RM calculations based on gender and age.
 */
declare class RM {
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

type index$1_Compare = Compare;
declare const index$1_Compare: typeof Compare;
type index$1_FormulaName = FormulaName;
type index$1_Jump = Jump;
declare const index$1_Jump: typeof Jump;
type index$1_RM = RM;
declare const index$1_RM: typeof RM;
type index$1_RMFormula = RMFormula;
declare const index$1_applicableEstimators: typeof applicableEstimators;
declare const index$1_estimate1RM: typeof estimate1RM;
declare const index$1_estimators: typeof estimators;
declare const index$1_getEstimator: typeof getEstimator;
declare namespace index$1 {
  export { index$1_Compare as Compare, index$1_Jump as Jump, index$1_RM as RM, index$1_applicableEstimators as applicableEstimators, index$1_estimate1RM as estimate1RM, index$1_estimators as estimators, index$1_getEstimator as getEstimator };
  export type { index$1_FormulaName as FormulaName, index$1_RMFormula as RMFormula };
}

type UnitTime = 'years' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';
declare function dateDelta(a: Date, b: Date, unit: UnitTime): number;

type index_UnitTime = UnitTime;
declare const index_dateDelta: typeof dateDelta;
declare namespace index {
  export { index_dateDelta as dateDelta };
  export type { index_UnitTime as UnitTime };
}

export { Gender, PAL, Race, TEEEstimator, index$9 as anthropometry, index$7 as cardiovascular, index$6 as composition, index$5 as conversion, mets as met, index$4 as models, index$2 as sport, index$1 as strength, index as utilities };
export type { BMREstimator, CardiacEstimator, DistanceEstimatable, MET, RMFormula, TemperatureUnit, TimeEstimatable };
