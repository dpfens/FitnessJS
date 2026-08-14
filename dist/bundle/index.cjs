'use strict';

/*
Anthropometry formulas
Winter, David A. Biomechanics and Motor Control of Human Movement. New York, N.Y.: Wiley, 2009. Print.
*/
function height_from_height_eyes(segment_length) {
    /*
    Calculates the height of the eyes from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.936;
}
function height_from_height_head(segment_length) {
    /*
    Calculates the height of the head (up to the bottom of the chin) from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.870;
}
function height_from_height_shoulders(segment_length) {
    /*
    Calculates the height of the shoulders from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.818;
}
function height_from_height_chest(segment_length) {
    /*
    Calculates the height of the chest (equal to the nipples) from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.720;
}
function height_from_height_elbow(segment_length) {
    /*
    Calculates the height of the elbows from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.630;
}
function height_from_height_wrist(segment_length) {
    /*
    Calculates the height of the elbows from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.485;
}
function height_from_height_fingertip(segment_length) {
    /*
    Calculates the height of the fingertips from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.377;
}
function height_from_height_hips(segment_length) {
    /*
    Calculates the height of the hips from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.530;
}
function height_from_height_buttocks(segment_length) {
    /*
    Calculates the height of the buttocks from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.485;
}
function height_from_height_knee(segment_length) {
    /*
    Calculates the height of the knees from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.285;
}
function height_from_height_ankle(segment_length) {
    /*
    Calculates the height of the ankles from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.039;
}
function height_from_head_height(segment_length) {
    /*
    Calculates the height of the head based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.130;
}
function height_from_shoulder_distance(segment_length) {
    /*
    Calculates the horizontal distance from the center of the chest to the shoulder based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.129;
}
function height_from_shoulder_width(segment_length) {
    /*
    Calculates the width of the shoulders based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.259;
}
function height_from_hips_width(segment_length) {
    /*
    Calculates the horizontal width of the hips based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.191;
}
function height_from_nipple_width(segment_length) {
    /*
    Calculates the horizontal distance between nipples based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.174;
}
function height_from_foot_width(segment_length) {
    /*
    Calculates the foot breadth based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.055;
}
function height_from_foot_length(segment_length) {
    /*
    Calculates the foot length based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.152;
}
function height_from_humerus_length(segment_length) {
    /*
    Calculates the humerus (shoulder to elbow) length based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.186;
}
function height_from_forearm_length(segment_length) {
    /*
    Calculates the forearm length (elbow to wrist) based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.146;
}
function height_from_hand_length(segment_length) {
    /*
    Calculates the hand length (wrist to fingertips) based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.108;
}
function height_from_upperbody_length(segment_length) {
    /*
    Calculates the upper body length (top of head to bottom of torso) based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.520;
}
class Segment {
    body_height;
    constructor(body_height) {
        if (body_height <= 0) {
            throw Error('body height must be > 0');
        }
        this.body_height = body_height;
    }
    height_eyes() {
        /*
        Calculates the height of the eyes from the ground based on the body height
        */
        return 0.936 * this.body_height;
    }
    height_head() {
        /*
        Calculates the height of the head (up to the bottom of the chin) from the ground based on the body height
        */
        return 0.870 * this.body_height;
    }
    height_shoulders() {
        /*
        Calculates the height of the shoulders from the ground based on the body height
        */
        return 0.818 * this.body_height;
    }
    height_chest() {
        /*
        Calculates the height of the chest (equal to the nipples) from the ground based on the body height
        */
        return 0.720 * this.body_height;
    }
    height_elbow() {
        /*
        Calculates the height of the elbows from the ground based on the body height
        */
        return 0.630 * this.body_height;
    }
    height_wrist() {
        /*
        Calculates the height of the elbows from the ground based on the body height
        */
        return 0.485 * this.body_height;
    }
    height_fingertip() {
        /*
        Calculates the height of the fingertips from the ground based on the body height
        */
        return 0.377 * this.body_height;
    }
    height_hips() {
        /*
        Calculates the height of the hips from the ground based on the body height
        */
        return 0.530 * this.body_height;
    }
    height_buttocks() {
        /*
        Calculates the height of the buttocks from the ground based on the body height
        */
        return 0.485 * this.body_height;
    }
    height_knee() {
        /*
        Calculates the height of the knees from the ground based on the body height
        */
        return 0.285 * this.body_height;
    }
    height_ankle() {
        /*
        Calculates the height of the ankles from the ground based on the body height
        */
        return 0.039 * this.body_height;
    }
    head_height() {
        /*
        Calculates the height of the head based on the body height
        */
        return 0.130 * this.body_height;
    }
    shoulder_distance() {
        /*
        Calculates the horizontal distance from the center of the chest to the shoulder based on the body height
        */
        return 0.129 * this.body_height;
    }
    shoulder_width() {
        /*
        Calculates the width of the shoulders based on the body height
        */
        return 0.259 * this.body_height;
    }
    hips_width() {
        /*
        Calculates the horizontal width of the hips based on the body height
        */
        return 0.191 * this.body_height;
    }
    nipple_width() {
        /*
        Calculates the horizontal distance between nipples based on the body height
        */
        return 0.174 * this.body_height;
    }
    foot_width() {
        /*
        Calculates the foot breadth based on the body height
        */
        return 0.055 * this.body_height;
    }
    foot_length() {
        /*
        Calculates the foot length based on the body height
        */
        return 0.152 * this.body_height;
    }
    humerus_length() {
        /*
        Calculates the humerus (shoulder to elbow) length based on the body height
        */
        return 0.186 * this.body_height;
    }
    forearm_length() {
        /*
        Calculates the forearm length (elbow to wrist) based on the body height
        */
        return 0.146 * this.body_height;
    }
    hand_length() {
        /*
        Calculates the hand length (wrist to fingertips) based on the body height
        */
        return 0.108 * this.body_height;
    }
    upperbody_length() {
        /*
        Calculates the upper body length (top of head to bottom of torso) based on the body height
        */
        return 0.520 * this.body_height;
    }
}

var index$9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Segment: Segment,
    height_from_foot_length: height_from_foot_length,
    height_from_foot_width: height_from_foot_width,
    height_from_forearm_length: height_from_forearm_length,
    height_from_hand_length: height_from_hand_length,
    height_from_head_height: height_from_head_height,
    height_from_height_ankle: height_from_height_ankle,
    height_from_height_buttocks: height_from_height_buttocks,
    height_from_height_chest: height_from_height_chest,
    height_from_height_elbow: height_from_height_elbow,
    height_from_height_eyes: height_from_height_eyes,
    height_from_height_fingertip: height_from_height_fingertip,
    height_from_height_head: height_from_height_head,
    height_from_height_hips: height_from_height_hips,
    height_from_height_knee: height_from_height_knee,
    height_from_height_shoulders: height_from_height_shoulders,
    height_from_height_wrist: height_from_height_wrist,
    height_from_hips_width: height_from_hips_width,
    height_from_humerus_length: height_from_humerus_length,
    height_from_nipple_width: height_from_nipple_width,
    height_from_shoulder_distance: height_from_shoulder_distance,
    height_from_shoulder_width: height_from_shoulder_width,
    height_from_upperbody_length: height_from_upperbody_length
});

/**
 * Astrand's formula for estimating maximum heart rate.
 * Use this when a more conservative estimate is needed for general population.
 */
class Astrand {
    /**
     * Predicts the maximum heart rate using Astrand's formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const astrand = new Fit.cardio.cardiac.Astrand();
     * const maxHR = astrand.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age) {
        return 216.6 - (0.84 * age);
    }
    /**
     * Calculates the age based on the given heart rate using Astrand's formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const astrand = new Fit.cardio.cardiac.Astrand();
     * const age = astrand.age(180); // Returns the calculated age
     */
    age(hr) {
        return (hr - 216.6) / -0.84;
    }
}
/**
 * HF (Heart and Fitness) formula for estimating maximum heart rate.
 * Use this for a simple, widely recognized estimate suitable for general population.
 */
class HF {
    /**
     * Predicts the maximum heart rate using the HF formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const hf = new Fit.cardio.cardiac.HF();
     * const maxHR = hf.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age) {
        return 220 - age;
    }
    /**
     * Calculates the age based on the given heart rate using the HF formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const hf = new Fit.cardio.cardiac.HF();
     * const age = hf.age(180); // Returns the calculated age
     */
    age(hr) {
        return 220 - hr;
    }
}
/**
 * Gellish formula for estimating maximum heart rate.
 * Use this for a more recent and well-researched estimate suitable for general adult population.
 */
class Gellish {
    /**
     * Predicts the maximum heart rate using Gellish's formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const gellish = new Fit.cardio.cardiac.Gellish();
     * const maxHR = gellish.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age) {
        return 207 - (0.7 * age);
    }
    /**
     * Calculates the age based on the given heart rate using Gellish's formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const gellish = new Fit.cardio.cardiac.Gellish();
     * const age = gellish.age(180); // Returns the calculated age
     */
    age(hr) {
        return (hr - 207.0) / -0.7;
    }
}
/**
 * Gulati formula for estimating maximum heart rate in women.
 * Use this specifically for female subjects, as it's based on a large study of women.
 */
class Gulati {
    /**
     * Predicts the maximum heart rate for women using Gulati's formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const gulati = new Fit.cardio.cardiac.Gulati();
     * const maxHR = gulati.predict(new Date('1990-01-01')); // Returns the predicted max HR for a woman
     */
    predict(age) {
        return 206 - (0.88 * age);
    }
    /**
     * Calculates the age based on the given heart rate using Gulati's formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const gulati = new Fit.cardio.cardiac.Gulati();
     * const age = gulati.age(180); // Returns the calculated age for a woman
     */
    age(hr) {
        return (hr - 206.0) / -0.88;
    }
}
/**
 * Londeree and Moeschberger (LM) formula for estimating maximum heart rate.
 * Use this for a more precise estimate that accounts for slight variations across different populations.
 */
class LM {
    /**
     * Predicts the maximum heart rate using the Londeree and Moeschberger formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const lm = new Fit.cardio.cardiac.LM();
     * const maxHR = lm.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age) {
        return 206.3 - (0.711 * age);
    }
    /**
     * Calculates the age based on the given heart rate using the LM formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const lm = new Fit.cardio.cardiac.LM();
     * const age = lm.age(180); // Returns the calculated age
     */
    age(hr) {
        return (hr - 206.3) / -0.711;
    }
}
/**
 * Miller formula for estimating maximum heart rate.
 * Use this as an alternative to the standard 220-age formula, offering a slightly different slope.
 */
class Miller {
    /**
     * Predicts the maximum heart rate using Miller's formula.
     * @param dob The date of birth.
     * @returns The predicted maximum heart rate.
     * @example
     * const miller = new Fit.cardio.cardiac.Miller();
     * const maxHR = miller.predict(new Date('1990-01-01')); // Returns the predicted max HR
     */
    predict(age) {
        return 217 - (0.85 * age);
    }
    /**
     * Calculates the age based on the given heart rate using Miller's formula.
     * @param hr The heart rate.
     * @returns The calculated age.
     * @example
     * const miller = new Fit.cardio.cardiac.Miller();
     * const age = miller.age(180); // Returns the calculated age
     */
    age(hr) {
        return (hr - 217) / -0.85;
    }
}
/**
  * Nes formula for estimating maximum heart rate.
  * Use this for a formula derived from a large, healthy population study.
  */
class Nes {
    /**
      * Predicts the maximum heart rate using Nes' formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const nes = new Fit.cardio.cardiac.Nes();
      * const maxHR = nes.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age) {
        return 211 - (0.64 * age);
    }
    /**
      * Calculates the age based on the given heart rate using Nes' formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const nes = new Fit.cardio.cardiac.Nes();
      * const age = nes.age(180); // Returns the calculated age
      */
    age(hr) {
        return (hr - 211) / -0.64;
    }
}
/**
  * Oakland University Linear formula for estimating maximum heart rate.
  * Use this for a formula derived from meta-analysis of multiple studies.
  */
class OaklandL {
    /**
      * Predicts the maximum heart rate using the Oakland University Linear formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const oaklandL = new Fit.cardio.cardiac.OaklandL();
      * const maxHR = oaklandL.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age) {
        return 206.9 - (0.67 * age);
    }
    /**
      * Calculates the age based on the given heart rate using the Oakland University Linear formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const oaklandL = new Fit.cardio.cardiac.OaklandL();
      * const age = oaklandL.age(180); // Returns the calculated age
      */
    age(hr) {
        return (hr - 206.9) / -0.67;
    }
}
/**
  * Oakland University Non-Linear 1 formula for estimating maximum heart rate.
  * Use this for a non-linear approach that may better fit certain populations.
  */
class OaklandNL1 {
    /**
      * Predicts the maximum heart rate using the Oakland University Non-Linear 1 formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const oaklandNL1 = new Fit.cardio.cardiac.OaklandNL1();
      * const maxHR = oaklandNL1.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age) {
        return 191.5 - (0.002 * Math.pow(age, 2));
    }
    /**
      * Calculates the age based on the given heart rate using the Oakland University Non-Linear 1 formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const oaklandNL1 = new Fit.cardio.cardiac.OaklandNL1();
      * const age = oaklandNL1.age(180); // Returns the calculated age
      */
    age(hr) {
        return 5 * Math.sqrt(3830 - 20 * hr);
    }
}
/**
  * Oakland University Non-Linear 2 formula for estimating maximum heart rate.
  * Use this for another non-linear approach that may better fit certain populations.
  */
class OaklandNL2 {
    /**
      * Predicts the maximum heart rate using the Oakland University Non-Linear 2 formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const oaklandNL2 = new Fit.cardio.cardiac.OaklandNL2();
      * const maxHR = oaklandNL2.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age) {
        return 163 + (1.16 * age) - (0.018 * Math.pow(age, 2));
    }
    /**
      * Calculates the age based on the given heart rate using the Oakland University Non-Linear 2 formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const oaklandNL2 = new Fit.cardio.cardiac.OaklandNL2();
      * const age = oaklandNL2.age(180); // Returns the calculated age
      */
    age(hr) {
        return (-10 / 9) * (Math.sqrt(8176 - 45 * hr) - 29);
    }
}
/**
  * Robergs and Landwehr (RL) formula for estimating maximum heart rate.
  * Use this for a formula derived from a comprehensive review of max HR literature.
  */
class RL {
    /**
      * Predicts the maximum heart rate using the Robergs and Landwehr formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const rl = new Fit.cardio.cardiac.RL();
      * const maxHR = rl.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age) {
        return 205.8 - (0.685 * age);
    }
    /**
      * Calculates the age based on the given heart rate using the RL formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const rl = new Fit.cardio.cardiac.RL();
      * const age = rl.age(180); // Returns the calculated age
      */
    age(hr) {
        return (hr - 205.8) / -0.685;
    }
}
/**
  * Tanaka, Monahan, & Seals (TMS) formula for estimating maximum heart rate.
  * Use this for a well-validated formula applicable across a wide age range and fitness levels.
  */
class TMS {
    /**
      * Predicts the maximum heart rate using the Tanaka, Monahan, & Seals formula.
      * @param dob The date of birth.
      * @returns The predicted maximum heart rate.
      * @example
      * const tms = new Fit.cardio.cardiac.TMS();
      * const maxHR = tms.predict(new Date('1990-01-01')); // Returns the predicted max HR
      */
    predict(age) {
        return 208 - (0.7 * age);
    }
    /**
      * Calculates the age based on the given heart rate using the TMS formula.
      * @param hr The heart rate.
      * @returns The calculated age.
      * @example
      * const tms = new Fit.cardio.cardiac.TMS();
      * const age = tms.age(180); // Returns the calculated age
      */
    age(hr) {
        return (hr - 208) / -0.7;
    }
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
function mean_arterial_pressure(diastolic_bp, systolic_bp) {
    return ((2 * diastolic_bp) + systolic_bp) / 3;
}
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
function karvonen$1(intensity, rest, maximum) {
    return intensity * (maximum - rest) + rest;
}
/**
  * Calculates the target heart rate using the Zoladz method.
  * Use this for determining training zones based on maximum heart rate.
  * @param hrMax The maximum heart rate.
  * @param adjuster The adjustment value (typically 50 for zone 1, 40 for zone 2, etc.).
  * @returns The target heart rate for the specified zone.
  * @example
  * const targetHR = zoladz(180, 50); // Returns the target heart rate for zone 1
  */
function zoladz(hrMax, adjuster) {
    return hrMax - adjuster;
}

var cardiac = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Astrand: Astrand,
    Gellish: Gellish,
    Gulati: Gulati,
    HF: HF,
    LM: LM,
    Miller: Miller,
    Nes: Nes,
    OaklandL: OaklandL,
    OaklandNL1: OaklandNL1,
    OaklandNL2: OaklandNL2,
    RL: RL,
    TMS: TMS,
    karvonen: karvonen$1,
    mean_arterial_pressure: mean_arterial_pressure,
    zoladz: zoladz
});

exports.Gender = void 0;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(exports.Gender || (exports.Gender = {}));
exports.Race = void 0;
(function (Race) {
    Race[Race["Asian"] = 0] = "Asian";
    Race[Race["Black"] = 1] = "Black";
    Race[Race["Hispanic"] = 2] = "Hispanic";
})(exports.Race || (exports.Race = {}));
exports.PAL = void 0;
(function (PAL) {
    PAL[PAL["Sedentary"] = 0] = "Sedentary";
    PAL[PAL["Low"] = 1] = "Low";
    PAL[PAL["Active"] = 2] = "Active";
    PAL[PAL["VeryActive"] = 3] = "VeryActive";
})(exports.PAL || (exports.PAL = {}));

/**
 * Base class for estimating Basal Metabolic Rate (BMR)
 * @class BaseBMREstimator
 */
class BaseBMREstimator {
    gender;
    constructor(gender) {
        this.gender = gender;
    }
}
/**
 * Harris-Benedict equation for estimating BMR
 * @class HB
 * @extends BaseBMREstimator
 */
class HB extends BaseBMREstimator {
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
    predict(age, weight, height) {
        if (this.gender === exports.Gender.Female) {
            return (9.5634 * weight) + (1.8496 * height) - (4.6756 * age) + 655.0955;
        }
        return (13.7516 * weight) + (5.0033 * height) - (6.7550 * age) + 66.4730;
    }
}
/**
 * Revised Harris-Benedict equation for estimating BMR
 * @class RevisedHB
 * @extends BaseBMREstimator
 */
class RevisedHB extends BaseBMREstimator {
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
    predict(age, weight, height) {
        if (this.gender === exports.Gender.Female) {
            return (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593;
        }
        return (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362;
    }
}
/**
 * Mifflin-St Jeor equation for estimating BMR
 * @class MSJ
 * @extends BaseBMREstimator
 */
class MSJ extends BaseBMREstimator {
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
    predict(age, weight, height) {
        if (this.gender === exports.Gender.Female) {
            return (9.99 * weight + 6.25 * height - 4.92 * age - 161);
        }
        return (9.99 * weight + 6.25 * height - 4.92 * age + 5);
    }
}

var bmr = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BaseBMREstimator: BaseBMREstimator,
    HB: HB,
    MSJ: MSJ,
    RevisedHB: RevisedHB
});

/**
 * Quick estimate of RMR based on body weight.
 *
 * When to use: For a rapid, rough estimate of RMR when precise
 * calculations are not necessary.
 */
class QuickRMREstimator {
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
    estimate(gender, weight) {
        if (gender === exports.Gender.Female) {
            return weight * 22;
        }
        return weight * 24.2;
    }
}
/**
 * RMR estimate based on Body Surface Area (BSA).
 *
 * When to use: When a more accurate RMR estimate is needed, especially
 * for individuals with unusual body compositions.
 */
class BSARMREstimator {
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
    estimate(gender, bsa) {
        if (gender === exports.Gender.Female) {
            return bsa * 840;
        }
        return bsa * 912;
    }
}
/**
 * Context class for estimating Resting Metabolic Rate (RMR) by gender.
 * Delegates the actual calculation to a pluggable {@link GenderRMREstimator}.
 *
 * @class RMR
 */
class RMR {
    gender;
    estimator;
    /**
     * @param gender Biological sex used by the estimation strategy
     * @param estimator The RMR estimation strategy to use
     * (e.g., {@link QuickRMREstimator} or {@link BSARMREstimator})
     */
    constructor(gender, estimator) {
        this.gender = gender;
        this.estimator = estimator;
    }
    /**
     * Swaps the estimation strategy at runtime.
     * @param estimator The new strategy to use
     */
    setEstimator(estimator) {
        this.estimator = estimator;
    }
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
    calculate(value) {
        return this.estimator.estimate(this.gender, value);
    }
}
/**
 * Katch-McArdle formula for calculating RMR.
 *
 * When to use: When lean body mass is known, provides a more accurate
 * estimate for athletes or individuals with higher muscle mass.
 */
class KatchMcArdleEstimator {
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
    estimate(lbm) {
        return 370 + 21.6 * lbm;
    }
}
/**
 * Cunningham equation for calculating RMR.
 *
 * When to use: Similar to Katch-McArdle, use when lean body mass is known.
 * Often preferred for athletes due to its accuracy in this population.
 */
class CunninghamEstimator {
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
    estimate(lbm) {
        return 500 + 22 * lbm;
    }
}
/**
 * Context class for estimating Resting Metabolic Rate (RMR) from
 * Lean Body Mass. Delegates the actual calculation to a pluggable
 * {@link RMREstimator}.
 *
 * @class RestingMetabolicRate
 */
class RestingMetabolicRate {
    estimator;
    /**
     * @param estimator The RMR estimation strategy to use
     * (e.g., {@link KatchMcArdleEstimator} or {@link CunninghamEstimator})
     */
    constructor(estimator) {
        this.estimator = estimator;
    }
    /**
     * Swaps the estimation strategy at runtime.
     * @param estimator The new strategy to use
     */
    setEstimator(estimator) {
        this.estimator = estimator;
    }
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
    estimate(lbm) {
        return this.estimator.estimate(lbm);
    }
}

var rmr = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BSARMREstimator: BSARMREstimator,
    CunninghamEstimator: CunninghamEstimator,
    KatchMcArdleEstimator: KatchMcArdleEstimator,
    QuickRMREstimator: QuickRMREstimator,
    RMR: RMR,
    RestingMetabolicRate: RestingMetabolicRate
});

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
class TEEEstimator {
    /** Gender used to select the coefficient set for prediction */
    gender;
    /** Physical Activity Level used to select the coefficient set for prediction */
    pal;
    /**
     * @param gender Gender used to select the correct coefficient set
     * @param pal Physical Activity Level used to select the correct coefficient set
     */
    constructor(gender, pal) {
        this.gender = gender;
        this.pal = pal;
    }
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
    fromActivity(weight, mets) {
        return (mets * 3.5 * weight) / 200;
    }
}
/**
 * ChildTEE coefficients by gender and PAL.
 *
 * Source: [TODO - cite paper/table, e.g. IOM (2005) Dietary Reference
 * Intakes for Energy, EER equations for children/adolescents].
 *
 * To update a formula, edit the relevant row here rather than touching
 * {@link ChildTEE.predict}.
 */
const CHILD_TEE_COEFFICIENTS = {
    [exports.Gender.Male]: {
        [exports.PAL.Sedentary]: { base: 88.5, ageCoef: 61.9, palFactor: 1.00, weightCoef: 26.7, heightCoef: 903 },
        [exports.PAL.Low]: { base: 88.5, ageCoef: 61.9, palFactor: 1.13, weightCoef: 26.7, heightCoef: 903 },
        [exports.PAL.Active]: { base: 88.5, ageCoef: 61.9, palFactor: 1.26, weightCoef: 26.7, heightCoef: 903 },
        [exports.PAL.VeryActive]: { base: 88.5, ageCoef: 61.9, palFactor: 1.42, weightCoef: 26.7, heightCoef: 903 },
    },
    [exports.Gender.Female]: {
        [exports.PAL.Sedentary]: { base: 135.3, ageCoef: 30.8, palFactor: 1.00, weightCoef: 10, heightCoef: 934 },
        [exports.PAL.Low]: { base: 135.3, ageCoef: 30.8, palFactor: 1.16, weightCoef: 10, heightCoef: 934 },
        [exports.PAL.Active]: { base: 135.3, ageCoef: 30.8, palFactor: 1.31, weightCoef: 10, heightCoef: 934 },
        [exports.PAL.VeryActive]: { base: 135.3, ageCoef: 30.8, palFactor: 1.56, weightCoef: 10, heightCoef: 934 },
    },
};
/**
 * Estimates Total Energy Expenditure (TEE) for children and adolescents.
 *
 * @class ChildTEE
 * @extends TEEEstimator
 */
class ChildTEE extends TEEEstimator {
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
    predict({ age, weight, height }) {
        const coeffs = CHILD_TEE_COEFFICIENTS[this.gender]?.[this.pal];
        if (!coeffs) {
            throw new Error(`No ChildTEE coefficients defined for gender=${this.gender}, pal=${this.pal}`);
        }
        const { base, ageCoef, palFactor, weightCoef, heightCoef } = coeffs;
        return base - ageCoef * age + palFactor * (weightCoef * weight + heightCoef * height);
    }
}
/**
 * AdultTEE coefficients by gender and PAL.
 *
 * Source: [TODO - cite paper/table, e.g. IOM (2005) Dietary Reference
 * Intakes for Energy, EER equations for adults 19+ years].
 *
 * To update a formula, edit the relevant row here rather than touching
 * {@link AdultTEE.predict}.
 */
const ADULT_TEE_COEFFICIENTS = {
    [exports.Gender.Male]: {
        [exports.PAL.Sedentary]: { base: 662, ageCoef: 9.53, palFactor: 1.00, weightCoef: 15.91, heightCoef: 539.6 },
        [exports.PAL.Low]: { base: 662, ageCoef: 9.53, palFactor: 1.11, weightCoef: 15.91, heightCoef: 539.6 },
        [exports.PAL.Active]: { base: 662, ageCoef: 9.53, palFactor: 1.25, weightCoef: 15.91, heightCoef: 539.6 },
        [exports.PAL.VeryActive]: { base: 662, ageCoef: 9.53, palFactor: 1.48, weightCoef: 15.91, heightCoef: 539.6 },
    },
    [exports.Gender.Female]: {
        [exports.PAL.Sedentary]: { base: 354, ageCoef: 6.91, palFactor: 1.00, weightCoef: 9.36, heightCoef: 726 },
        [exports.PAL.Low]: { base: 354, ageCoef: 6.91, palFactor: 1.12, weightCoef: 9.36, heightCoef: 726 },
        [exports.PAL.Active]: { base: 354, ageCoef: 6.91, palFactor: 1.27, weightCoef: 9.36, heightCoef: 726 },
        [exports.PAL.VeryActive]: { base: 354, ageCoef: 6.91, palFactor: 1.45, weightCoef: 9.36, heightCoef: 726 },
    },
};
/**
 * Estimates Total Energy Expenditure (TEE) for adults (19+ years).
 *
 * @class AdultTEE
 * @extends TEEEstimator
 */
class AdultTEE extends TEEEstimator {
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
    predict({ age, weight, height }) {
        const coeffs = ADULT_TEE_COEFFICIENTS[this.gender]?.[this.pal];
        if (!coeffs) {
            throw new Error(`No AdultTEE coefficients defined for gender=${this.gender}, pal=${this.pal}`);
        }
        const { base, ageCoef, palFactor, weightCoef, heightCoef } = coeffs;
        return base - ageCoef * age + palFactor * (weightCoef * weight + heightCoef * height);
    }
}

var tee = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AdultTEE: AdultTEE,
    ChildTEE: ChildTEE,
    TEEEstimator: TEEEstimator
});

/**
 * estimates energy expenditure using the Pandolf equation.
 *
 * When to use: For estimating energy expenditure during load carriage
 * on various terrains and slopes.
 */
class PandolfStrategy {
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
    estimate(params) {
        const { weight, speed, load, terrain, slope } = params;
        const totalWeight = weight + load;
        return (1.5 * weight +
            2.0 * totalWeight * Math.pow(load / weight, 2) +
            terrain * totalWeight * (1.5 * Math.pow(speed, 2) + 0.25 * speed * slope));
    }
}
/**
 * estimates energy expenditure using the Santee equation
 * (a modified version of the Pandolf equation).
 *
 * When to use: For more accurate energy expenditure estimation during
 * downhill walking with loads.
 */
class SanteeStrategy {
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
    estimate(params) {
        const { weight, speed, load, terrain, slope } = params;
        const totalWeight = weight + load;
        const energy = speed * slope;
        const speedSquared = Math.pow(speed, 2);
        const part1 = 1.5 * weight + 2 * Math.pow(load / weight, 2);
        const part2 = terrain * totalWeight * (1.5 * speedSquared + 0.35 * energy);
        const part3_1 = (energy * totalWeight) / 3.5;
        const part3_2 = (totalWeight * Math.pow(slope + 6, 2)) / weight;
        const part3_3 = 25 - speedSquared;
        return part1 + part2 - terrain * (part3_1 - part3_2 + part3_3);
    }
}
/**
 * Context class for calculating energy expenditure for walking/running
 * on different terrains. Delegates the actual calculation to a
 * pluggable {@link TerrainEnergyExpenditureEstimator}.
 *
 * @class Terrain
 */
class Terrain {
    strategy;
    /**
     * @param strategy The energy expenditure calculation strategy to use
     * (e.g., {@link PandolfStrategy} or {@link SanteeStrategy})
     */
    constructor(strategy) {
        this.strategy = strategy;
    }
    /**
     * Swaps the calculation strategy at runtime.
     * @param strategy The new strategy to use
     */
    setStrategy(strategy) {
        this.strategy = strategy;
    }
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
    estimate(params) {
        return this.strategy.estimate(params);
    }
}

var terrain = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PandolfStrategy: PandolfStrategy,
    SanteeStrategy: SanteeStrategy,
    Terrain: Terrain
});

var index$8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    bmr: bmr,
    rmr: rmr,
    tee: tee,
    terrain: terrain
});

/** Normal-weight population regression */
class NormalResidualVolumeEstimator {
    estimate({ age, height }) {
        const heightCm = height * 100;
        return 0.0275 * age + 0.0189 * heightCm - 2.6139;
    }
}
/** Overweight population regression */
class OverweightResidualVolumeEstimator {
    estimate({ age, height }) {
        const heightCm = height * 100;
        return 0.0277 * age + 0.0138 * heightCm - 2.3967;
    }
}
/** Berglund regression */
class BerglundResidualVolumeEstimator {
    estimate({ gender, age, height, weight }) {
        const heightCm = height * 100;
        if (gender === exports.Gender.Female) {
            return 0.007 * age + 0.0268 * height - 3.42;
        }
        return 0.022 * age + 0.0198 * heightCm - 0.015 * weight - 1.54;
    }
}
/** Black regression */
class BlackResidualVolumeEstimator {
    estimate({ age, height }) {
        const heightCm = height * 100;
        return 0.21 * age + 0.023 * heightCm - 2.978;
    }
}
/** Boren regression */
class BorenResidualVolumeEstimator {
    estimate({ age, height }) {
        const heightCm = height * 100;
        return 0.0115 * age + 0.019 * heightCm - 2.24;
    }
}
/** Goldman regression */
class GoldmanResidualVolumeEstimator {
    estimate({ gender, age, height }) {
        const heightCm = height * 100;
        if (gender === exports.Gender.Female) {
            return 0.009 * age + 0.032 * heightCm - 3.9;
        }
        return 0.017 * age + 0.027 * heightCm - 3.477;
    }
}
/** O'Brien regression (requires body surface area) */
class OBrienResidualVolumeEstimator {
    estimate({ age, height, bsa }) {
        const heightCm = height * 100;
        return 0.03 * age + 0.0387 * heightCm - 0.73 * bsa - 4.78;
    }
}
/**
 * @class
 * @classdesc estimates residual lung volume using a pluggable regression strategy
 */
class ResidualVolume {
    strategy;
    params;
    constructor(strategy, params) {
        this.strategy = strategy;
        this.params = params;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    estimate() {
        return this.strategy.estimate(this.params);
    }
}

var rv = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BerglundResidualVolumeEstimator: BerglundResidualVolumeEstimator,
    BlackResidualVolumeEstimator: BlackResidualVolumeEstimator,
    BorenResidualVolumeEstimator: BorenResidualVolumeEstimator,
    GoldmanResidualVolumeEstimator: GoldmanResidualVolumeEstimator,
    NormalResidualVolumeEstimator: NormalResidualVolumeEstimator,
    OBrienResidualVolumeEstimator: OBrienResidualVolumeEstimator,
    OverweightResidualVolumeEstimator: OverweightResidualVolumeEstimator,
    ResidualVolume: ResidualVolume
});

/**
 * VO2max estimation formulas. Each method corresponds to a distinct fitness
 * test protocol and takes whatever inputs that protocol produces — these are
 * not interchangeable strategies, since you can't estimate VO2max from a
 * step-test heart rate using a formula that expects a 12-minute run distance.
 */
class VO2MaxEstimation {
    gender;
    age;
    weight;
    height;
    constructor(gender, age, weight, height) {
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
    /**
     * Cooper 12-minute run test.
     * @param distance - distance covered in 12 minutes, in meters
     */
    cooper(distance) {
        return 0.0268 * distance - 11.3;
    }
    /**
     * Balke treadmill protocol.
     * @param time - test duration in minutes
     */
    balke(time) {
        if (this.gender === exports.Gender.Female) {
            return 1.38 * time + 5.22;
        }
        return 1.444 * time + 14.99;
    }
    /**
     * Balke 15-minute run test.
     * @param distance - distance covered in 15 minutes, in meters
     */
    balke15MinRun(distance) {
        return 0.0178 * distance + 9.6;
    }
    /**
     * Bruce protocol, male-specific multi-term regression.
     * @param time - total test time in minutes
     * @param time2 - time^2 term (as used in the original regression)
     * @param time3 - time^3 term (as used in the original regression)
     */
    bruceMale(time, time2, time3) {
        return 14.76 - 1.379 * time + 0.451 * time2 - 0.012 * time3;
    }
    /**
     * Bruce protocol, female-specific regression.
     * @param time - total test time in minutes
     */
    bruceFemale(time) {
        return 4.38 * time - 3.9;
    }
    /**
     * Bruce protocol, elderly/cardiac (EC) population regression.
     * @param time - total test time in minutes
     */
    bruceEC(time) {
        return 2.282 * time + 8.545;
    }
    /**
     * Léger 20m shuttle run (beep test).
     * @param speed - final stage speed in km/h
     */
    leger(speed) {
        return 31.025 + 3.238 * speed - 3.248 * this.age + 0.1536 * (this.age * speed);
    }
    /**
     * Åstrand-Rhyming single-stage step test.
     * @param hr - steady-state heart rate during the step test
     */
    astrandStep(hr) {
        if (this.gender === exports.Gender.Female) {
            return 3.75 * ((this.weight + 3) / (hr - 65));
        }
        return 3.744 * ((this.weight + 5) / (hr - 62));
    }
    /**
     * Queens College (QC) step test.
     * @param hr - recovery heart rate
     */
    qcStep(hr) {
        if (this.gender === exports.Gender.Female) {
            return 65.81 - 0.1847 * hr;
        }
        return 111.33 - 0.42 * hr;
    }
    /**
     * George submaximal treadmill walk test.
     * @param speed - walking speed
     * @param hr - steady-state heart rate
     */
    georgeTreadmill(speed, hr) {
        const genderTerm = this.gender === exports.Gender.Female ? 0 : 7.062;
        return 54.07 - 0.1938 * this.weight - 4.47 * speed + 0.01453 * hr + genderTerm;
    }
    /**
     * George ratio-weighted (RW) walk test.
     * @param time - walk time in minutes
     */
    georgeRW(time) {
        const genderTerm = this.gender === exports.Gender.Female ? 0 : 3.716;
        return 88.02 - 0.1656 * this.weight - 2.76 * time + genderTerm;
    }
    /**
     * George steady-state jog test.
     * @param time - jog time in minutes
     * @param hr - steady-state heart rate
     */
    georgeSteady(time, hr) {
        const genderTerm = this.gender === exports.Gender.Female ? 0 : 8.344;
        return 100.5 - 0.1636 * this.weight - 1.438 * time - 0.1928 * hr + genderTerm;
    }
    /**
     * Kline (Rockport) walk test.
     * @param time - walk time in minutes
     * @param hrPeak - heart rate at end of walk
     */
    kline(time, hrPeak) {
        const genderTerm = this.gender === exports.Gender.Female ? 0 : 6.315;
        return (132.853 -
            0.0769 * this.weight -
            0.3877 * this.age +
            genderTerm -
            3.2649 * time -
            0.1565 * hrPeak);
    }
    /**
     * Larsen walk/jog test.
     * @param time - test time in minutes
     * @param hr - steady-state heart rate
     */
    larsen(time, hr) {
        const genderTerm = this.gender === exports.Gender.Female ? 0 : 7.3;
        return 100.16 + genderTerm - 0.164 * this.weight - 1.273 * time - 0.1563 * hr;
    }
    /**
     * Ebbeling single-stage submaximal treadmill test.
     * @param speed - treadmill speed
     * @param hr - steady-state heart rate
     */
    ebbelingTreadmill(speed, hr) {
        const genderTerm = this.gender === exports.Gender.Female ? 0 : 5.48;
        return (15.1 +
            21.8 * speed -
            0.327 * hr -
            0.263 * this.age +
            0.00504 * (hr * this.age) +
            genderTerm);
    }
    /**
     * Cureton child/adolescent 1-mile run test.
     *
     * Note: fixes a duplicated term present in the original implementation
     * (the `108.94 - 8.41 * time` expression was being added twice).
     * @param time - 1-mile run time in minutes
     */
    curetonChild(time) {
        const bmi = this.weight / Math.pow(this.height, 2);
        return 108.94 - 8.41 * time + 0.34 * Math.pow(time, 2) + 0.21 * this.age - 0.84 * bmi;
    }
    /**
     * Fox single-stage submaximal ergometry test.
     * @param hr5 - heart rate at 5 minutes
     */
    foxErgometry(hr5) {
        return 6300.0 - 19.26 * hr5;
    }
    /**
     * US Olympic Committee (USOP) field estimate.
     * @param hrMax - maximum heart rate
     * @param restingHR - resting heart rate
     */
    usop(hrMax, restingHR) {
        return 15.3 * (hrMax / restingHR);
    }
    /**
     * Single-stage submaximal treadmill extrapolation.
     * @param sm1 - submaximal VO2 measured at stage 1
     * @param hr1 - heart rate at stage 1
     * @param hrmax - maximum (or age-predicted max) heart rate
     */
    treadmillSubmaxSingleStage(sm1, hr1, hrmax) {
        const restingHR = this.gender === exports.Gender.Female ? 72 : 61;
        return sm1 * ((hrmax - restingHR) / (hr1 - restingHR));
    }
    /**
     * Multistage submaximal treadmill extrapolation via linear regression
     * between two submaximal stages.
     * @param sm1 - submaximal VO2 at stage 1
     * @param hr1 - heart rate at stage 1
     * @param sm2 - submaximal VO2 at stage 2
     * @param hr2 - heart rate at stage 2
     * @param hrMax - maximum (or age-predicted max) heart rate
     */
    treadmillSubmaxVO2Multistage(sm1, hr1, sm2, hr2, hrMax) {
        const b = (sm2 - sm1) / (hr2 - hr1);
        return sm2 + b * (hrMax - hr2);
    }
    /**
     * Gilbert & Daniels running economy / VO2 model.
     * @param velocity - running velocity
     * @param time - race/effort duration in minutes
     */
    gilbertDaniels(velocity, time) {
        const numerator = 0.000104 * Math.pow(velocity, 2) + 0.182258 * velocity - 4.6;
        const denominator = 0.2989558 * Math.exp(-0.1932605 * time) +
            0.1894393 * Math.exp(-0.012778 * time) +
            0.8;
        return numerator / denominator;
    }
}
/**
 * Energy cost (VO2) estimation for specific activities and modalities.
 * Each method models a different activity, not alternate estimates of
 * the same quantity, so these stay as distinct methods rather than
 * interchangeable strategies.
 */
class EnergyCostEstimation {
    height;
    constructor(height) {
        this.height = height;
    }
    /**
     * Gross VO2 cost of walking (ACSM metabolic equation).
     * @param speed - walking speed in m/min
     * @param grade - treadmill grade as a decimal fraction (e.g. 0.05 for 5%)
     */
    walkingGross(speed, grade) {
        return 0.1 * speed + 1.8 * speed * grade;
    }
    /**
     * Gross VO2 cost of running (ACSM metabolic equation).
     * @param speed - running speed in m/min
     * @param grade - treadmill grade as a decimal fraction
     */
    runningGross(speed, grade) {
        return 0.2 * speed + 0.9 * speed * grade;
    }
    /**
     * Gross VO2 cost of leg ergometry.
     * @param mass - body mass in kg
     * @param work - work rate in kgm/min
     */
    legErgometryGross(mass, work) {
        return 3.5 + 1.8 * (work / mass);
    }
    /**
     * Gross VO2 cost of arm ergometry.
     * @param mass - body mass in kg
     * @param work - work rate in kgm/min
     */
    armErgometryGross(mass, work) {
        return 3.0 * (work / mass);
    }
    /**
     * Gross VO2 cost of bench/step stepping.
     * @param frequency - stepping rate in steps/min
     */
    steppingGross(frequency) {
        return 0.2 * frequency + frequency * this.height * 1.8 * 1.33;
    }
}
/**
 * Computes VO2 reserve: the difference between VO2max and resting VO2.
 * @param vo2Max - maximum oxygen uptake
 * @param vo2Rest - resting oxygen uptake (defaults to the standard 1 MET, 3.5 ml/kg/min)
 */
function vo2Reserve(vo2Max, vo2Rest = 3.5) {
    return vo2Max - vo2Rest;
}
/**
 * Computes a target VO2 at a given exercise intensity, using the
 * Karvonen-style VO2 reserve method.
 * @param vo2Max - maximum oxygen uptake
 * @param vo2Rest - resting oxygen uptake
 * @param intensity - target intensity as a decimal fraction (e.g. 0.6 for 60%)
 */
function vo2Target(vo2Max, vo2Rest, intensity) {
    return intensity * (vo2Max - vo2Rest) + vo2Rest;
}

var vo2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    EnergyCostEstimation: EnergyCostEstimation,
    VO2MaxEstimation: VO2MaxEstimation,
    vo2Reserve: vo2Reserve,
    vo2Target: vo2Target
});

var index$7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    cardiac: cardiac,
    energy: index$8,
    residualVolume: rv,
    vo2: vo2
});

/** Skinfold density formula for children */
class SkinfoldDensityChildEstimator {
    /**
     * @param sum - sum2SKF in mm
     * @returns %body density
     */
    estimate({ gender, sum }) {
        if (gender === exports.Gender.Female) {
            return 0.61 * sum + 5.1;
        }
        return 0.735 * sum + 1.0;
    }
}
/** Skinfold density formula for Black and Hispanic females (and, per the original formula, non-females) */
class SkinfoldDensityBlackHispanicFemaleEstimator {
    /**
     * @param sum - sum7SKF in mm (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
     * @returns %body density
     */
    estimate({ gender, age, sum }) {
        if (gender === exports.Gender.Female) {
            return (1.097 - 0.00046971 * sum + 0.00000056 * Math.pow(sum, 2) - 0.00012828 * age);
        }
        return (1.112 - 0.00043499 * sum + 0.00000055 * Math.pow(sum, 2) - 0.00028826 * age);
    }
}
/** Skinfold density formula for white males (per the original formula, gender-independent) */
class SkinfoldDensityWhiteMaleEstimator {
    /**
     * @param sum - sum3SKF in mm (chest + abdomen + thigh)
     * @returns %body density
     */
    estimate({ age, sum }) {
        return (1.10938 - 0.0008267 * sum + 0.0000016 * Math.pow(sum, 2) - 0.0002574 * age);
    }
}
/** Skinfold density formula for white females with anorexia */
class SkinfoldDensityWhiteFemaleAnorexicEstimator {
    /**
     * @param sum - sum3SKF in mm (triceps + suprailiac + thigh)
     * @returns %body density
     */
    estimate({ age, sum }) {
        return (1.0994921 -
            0.0009929 * sum +
            0.0000023 * Math.pow(sum, 2) -
            0.00001392 * age);
    }
}
/** Skinfold density formula for athletes */
class SkinfoldDensityAthleteEstimator {
    /**
     * @param sum - female: sum4SKF (triceps + anterior suprailiac + abdomen + thigh);
     *              male: sum7SKF (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
     * @returns body density in g/cc
     */
    estimate({ gender, age, sum }) {
        if (gender === exports.Gender.Female) {
            return (1.096095 - 0.0006952 * sum + 0.0000011 * Math.pow(sum, 2) - 0.0000714 * age);
        }
        return (1.112 - 0.00043499 * sum + 0.00000055 * Math.pow(sum, 2) - 0.00028826 * age);
    }
}
/** Skinfold density formula for Black collegiate athletes, ages 18-34 */
class SkinfoldDensityCollegiateAthleteBlackEstimator {
    /**
     * @param sum - sum3SKF in mm (abdomen + thigh + triceps)
     * @returns body density in g/cc
     */
    estimate({ gender, sum }) {
        if (gender === exports.Gender.Female) {
            return 8.997 + 0.2468 * sum - 1.998;
        }
        return 8.997 + 0.2468 * sum - 6.343 * 1 - 1.998;
    }
}
/** Skinfold density formula for white collegiate athletes, ages 18-34 */
class SkinfoldDensityCollegiateAthleteWhiteEstimator {
    /**
     * @param sum - sum3SKF in mm (abdomen + thigh + triceps)
     * @returns body density in g/cc
     */
    estimate({ gender, sum }) {
        if (gender === exports.Gender.Female) {
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
class Density {
    gender;
    age;
    weight;
    skinfoldEstimator;
    constructor(gender, age, weight, skinfoldEstimator) {
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.skinfoldEstimator = skinfoldEstimator;
    }
    setSkinfoldEstimator(Estimator) {
        this.skinfoldEstimator = Estimator;
    }
    /**
     * Delegates to the configured skinfold density Estimator.
     * @param sum - skinfold sum in mm; which skinfolds are summed depends on the Estimator in use
     * @returns %body density (or body density in g/cc, depending on Estimator)
     */
    skinfoldDb(sum) {
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
    dbAtRV(bd) {
        if (this.gender === exports.Gender.Female) {
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
    bodyVol(uww, rv, gv) {
        return (this.weight - uww) / 1.0 - (rv - gv);
    }
}

var density = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Density: Density,
    SkinfoldDensityAthleteEstimator: SkinfoldDensityAthleteEstimator,
    SkinfoldDensityBlackHispanicFemaleEstimator: SkinfoldDensityBlackHispanicFemaleEstimator,
    SkinfoldDensityChildEstimator: SkinfoldDensityChildEstimator,
    SkinfoldDensityCollegiateAthleteBlackEstimator: SkinfoldDensityCollegiateAthleteBlackEstimator,
    SkinfoldDensityCollegiateAthleteWhiteEstimator: SkinfoldDensityCollegiateAthleteWhiteEstimator,
    SkinfoldDensityWhiteFemaleAnorexicEstimator: SkinfoldDensityWhiteFemaleAnorexicEstimator,
    SkinfoldDensityWhiteMaleEstimator: SkinfoldDensityWhiteMaleEstimator
});

/** Brozek formula */
class BrozekFatEstimator {
    estimate({ bd }) {
        return 4.57 / bd - 4.142;
    }
}
/** Ortiz formula (African American females) */
class OrtizFatEstimator {
    estimate({ bd }) {
        return 4.832 / bd - 4.369;
    }
}
/** Schutte formula (African American males) */
class SchutteFatEstimator {
    estimate({ bd }) {
        return 4.374 / bd - 3.928;
    }
}
/** Siri formula */
class SiriFatEstimator {
    estimate({ bd }) {
        return 4.95 / bd - 4.5;
    }
}
/** Wagner formula (African American males) */
class WagnerFatEstimator {
    estimate({ bd }) {
        return 4.86 / bd - 4.39;
    }
}
/** Estimates body fat percentage from BMI in children. */
class ChildBmiFatEstimator {
    estimate({ gender, age, weight, height }) {
        const bmi = weight / Math.pow(height, 2);
        if (gender === exports.Gender.Female) {
            return (1.51 * bmi - 0.7 * age + 1.4) / 100;
        }
        return (1.51 * bmi - 0.7 * age - 3.6 + 1.4) / 100;
    }
}
/** Estimates body fat percentage from BMI in adults. */
class AdultBmiFatEstimator {
    estimate({ gender, age, weight, height }) {
        const bmi = weight / Math.pow(height, 2);
        if (gender === exports.Gender.Female) {
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
function waistFat(gender, weight, waistCircumference) {
    const weightLb = weight * 2.2;
    const waistCircumferenceInches = waistCircumference * 39.3701;
    if (gender === exports.Gender.Female) {
        return (100 * (-76.76 + 4.15 * waistCircumferenceInches - 0.082 * weightLb)) / weightLb;
    }
    return (100 * (-98.42 + 4.15 * waistCircumferenceInches - 0.082 * weightLb)) / weightLb;
}

var fat = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AdultBmiFatEstimator: AdultBmiFatEstimator,
    BrozekFatEstimator: BrozekFatEstimator,
    ChildBmiFatEstimator: ChildBmiFatEstimator,
    OrtizFatEstimator: OrtizFatEstimator,
    SchutteFatEstimator: SchutteFatEstimator,
    SiriFatEstimator: SiriFatEstimator,
    WagnerFatEstimator: WagnerFatEstimator,
    waistFat: waistFat
});

/*
@param {Double} weight in kg
@returns {Double} L/day of water
*/
function dailyWaterNeed(weight) {
    return 0.033 * weight;
}

var hydration = /*#__PURE__*/Object.freeze({
    __proto__: null,
    dailyWaterNeed: dailyWaterNeed
});

function inchesOverFt(value, upperBound) {
    const inches = value * 39.3701;
    const upperBoundInches = upperBound * 39.3701;
    return inches % upperBoundInches;
}
/**
 * G. Hamwi (1964)
 */
class HamwiEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }) {
        const inchesOver5Ft = inchesOverFt(height, 1.524);
        if (gender === exports.Gender.Female) {
            return 45.5 + 2.2 * inchesOver5Ft;
        }
        return 48 + 2.7 * inchesOver5Ft;
    }
}
/**
 * B. Devine (1974)
 */
class DevineEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }) {
        const inchesOver5Ft = inchesOverFt(height, 1.524);
        if (gender === exports.Gender.Female) {
            return 45.5 + 2.3 * inchesOver5Ft;
        }
        return 50 + 2.3 * inchesOver5Ft;
    }
}
/**
 * J. Robinson et al. (1983)
 */
class RobinsonEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }) {
        const inchesOver5Ft = inchesOverFt(height, 1.524);
        if (gender === exports.Gender.Female) {
            return 49 + 1.7 * inchesOver5Ft;
        }
        return 52 + 1.9 * inchesOver5Ft;
    }
}
/**
 * D. Miller (1983)
 */
class MillerEstimator {
    /**
     * @param height - height in inches
     * @returns ideal weight in kg
     */
    estimate({ gender, height }) {
        const inchesOver5Ft = inchesOverFt(height, 1.524);
        if (gender === exports.Gender.Female) {
            return 53.1 + 1.36 * inchesOver5Ft;
        }
        return 56.2 + 1.41 * inchesOver5Ft;
    }
}
/**
 * H. Lemmens et al. (2005). Gender-independent; `gender` is ignored.
 */
class LemmensEstimator {
    /**
     * @param height - height in meters (note: differs from the other strategies, which use inches)
     * @returns ideal weight in kg
     */
    estimate({ height }) {
        return 22 * Math.pow(height, 2);
    }
}
/**
 * Context class for ideal body weight calculations.
 * Delegates to a pluggable IdealWeightEstimator.
 */
class Ideal {
    Estimator;
    params;
    constructor(Estimator, gender, height) {
        this.Estimator = Estimator;
        this.params = { gender, height };
    }
    setEstimator(Estimator) {
        this.Estimator = Estimator;
    }
    /**
     * @returns ideal weight in kg, using the current Estimator
     */
    estimate() {
        return this.Estimator.estimate(this.params);
    }
}
/**
 * Estimates an athlete's ideal weight based on height.
 * H. Willoughby.
 *
 * @param height - height in inches
 * @returns estimated weight in lb
 */
function willoughbyWeight(height) {
    const heightInches = height * 39.3701;
    const heightCubed = Math.pow(heightInches, 3);
    return heightCubed / 1906;
}
/**
 * Estimates an athlete's ideal waist size based on height.
 * H. Willoughby.
 *
 * @param height - height in inches
 * @returns estimated waist in inches
 */
function willoughbyWaist(height) {
    const heightInches = height * 39.3701;
    return heightInches * 0.4584;
}

var ideal = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DevineEstimator: DevineEstimator,
    HamwiEstimator: HamwiEstimator,
    Ideal: Ideal,
    LemmensEstimator: LemmensEstimator,
    MillerEstimator: MillerEstimator,
    RobinsonEstimator: RobinsonEstimator,
    willoughbyWaist: willoughbyWaist,
    willoughbyWeight: willoughbyWeight
});

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
/**
 * Body Mass Index.
 *
 * Estimates body fat from the ratio of weight to the square of height.
 */
class BmiStrategy {
    name = "BMI";
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The BMI value.
     */
    calculate({ height, weight }) {
        return weight / (height * height);
    }
}
/**
 * BMI Prime.
 *
 * Expresses BMI as a ratio of an upper-limit "normal" BMI, so 1.0
 * represents the boundary of the normal weight range.
 */
class BmiPrimeStrategy {
    upperLimit;
    name = "BMI Prime";
    /**
     * @param upperLimit - The upper bound of the normal BMI range used as
     * the denominator. Defaults to `25.9`.
     */
    constructor(upperLimit = 25.9) {
        this.upperLimit = upperLimit;
    }
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The BMI Prime value.
     */
    calculate(metrics) {
        return new BmiStrategy().calculate(metrics) / this.upperLimit;
    }
}
/**
 * Corpulence (Ponderal/Rohrer) Index.
 *
 * Like BMI, but divides weight by height cubed instead of squared,
 * which scales better for very short or very tall people.
 */
class CorpulenceStrategy {
    name = "Corpulence";
    /**
     * @param metrics - The person's height (m) and weight (kg).
     * @returns The Corpulence (Ponderal) Index value.
     */
    calculate({ height, weight }) {
        return weight / Math.pow(height, 3);
    }
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
class MassIndexCalculator {
    metrics;
    /**
     * @param metrics - The person's height (m) and weight (kg), reused
     * across every strategy run through {@link MassIndexCalculator.calculate}.
     */
    constructor(metrics) {
        this.metrics = metrics;
    }
    /**
     * Runs the given strategy against this calculator's metrics.
     *
     * @param strategy - The mass-index formula to apply.
     * @returns The computed index value.
     */
    calculate(strategy) {
        return strategy.calculate(this.metrics);
    }
}
/* ------------------------------------------------------------------ */
/* Standalone indices — each has its own distinct inputs/meaning       */
/* ------------------------------------------------------------------ */
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
function bai(height, hipCircumference) {
    const numerator = 100 * hipCircumference;
    const denominator = height * Math.sqrt(height);
    return numerator / denominator - 18;
}
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
function bsi(height, bmi, waistCircumference) {
    return (waistCircumference / Math.pow(bmi, 2 / 3)) * Math.pow(height, 0.5);
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
function sbsi({ height, bsa, verticalTrunkCircumference, waistCircumference, }) {
    return ((Math.pow(height, 7 / 4) * Math.pow(waistCircumference, 5 / 6)) /
        (bsa * verticalTrunkCircumference));
}
/**
 * Waist-to-Hip Ratio.
 *
 * @param waistCircumference - Waist circumference in centimeters.
 * @param hipCircumference - Hip circumference in centimeters.
 * @returns The WHR value.
 */
function whr(waistCircumference, hipCircumference) {
    return waistCircumference / hipCircumference;
}
/**
 * Waist-to-Height Ratio.
 *
 * @param waistCircumference - Waist circumference in centimeters.
 * @param height - Height in meters.
 * @returns The WHtR value.
 */
function whtr(waistCircumference, height) {
    return waistCircumference / height;
}

var indices = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BmiPrimeStrategy: BmiPrimeStrategy,
    BmiStrategy: BmiStrategy,
    CorpulenceStrategy: CorpulenceStrategy,
    MassIndexCalculator: MassIndexCalculator,
    bai: bai,
    bsi: bsi,
    sbsi: sbsi,
    whr: whr,
    whtr: whtr
});

/**
 * Lohman (1992) — fat-free mass in white boys and girls, 8-15 years.
 * @returns Fat Free Mass in kg
 */
class FfmChildEstimator {
    estimate({ height, weight, resistance, reactance }) {
        return (0.62 * (Math.pow(height, 2) / resistance) +
            0.21 * weight +
            0.1 * reactance +
            4.2);
    }
}
/**
 * Houtkooper et al. (1992) — fat-free mass in white boys and girls, 10-19 years.
 * @returns Fat Free Mass in kg
 */
class FfmAdolescentEstimator {
    estimate({ height, weight, resistance }) {
        return 0.61 * (Math.pow(height, 2) / resistance) + 0.25 * weight + 1.31;
    }
}
/**
 * Segal et al. (1988) — fat-free mass for lean adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF < .30. Men: %BF < .20.
 * @returns Fat Free Mass in kg
 */
class FfmAdultLeanEstimator {
    estimate({ gender, age, height, weight, resistance }) {
        if (gender === exports.Gender.Female) {
            return (0.000646 * Math.pow(height, 2) -
                0.014 * resistance +
                0.421 * weight +
                10.4);
        }
        return (0.0006636 * Math.pow(height, 2) -
            0.02117 * resistance +
            0.62854 * weight -
            0.1238 * age +
            9.33285);
    }
}
/**
 * Segal et al. (1988) — fat-free mass for obese adults
 * (American Indian, Black, Hispanic, and White).
 * Women: %BF > .30. Men: %BF > .20.
 * @returns Fat Free Mass in kg
 */
class FfmAdultObeseEstimator {
    estimate({ gender, age, height, weight, resistance }) {
        if (gender === exports.Gender.Female) {
            return (0.00091186 * Math.pow(height, 2) -
                0.1466 * resistance +
                0.2999 * weight -
                0.07012 * age +
                9.37938);
        }
        return (0.0008858 * Math.pow(height, 2) -
            0.02999 * resistance +
            0.42688 * weight -
            0.07002 * age +
            14.52435);
    }
}
/**
 * Fornetti et al. (1999) for female athletes (18-27 years) and
 * Oppliger et al. (1991) for male athletes (19-40 years).
 * @returns Fat Free Mass in kg
 */
class FfmAdultAthleteEstimator {
    estimate({ gender, height, weight, resistance, reactance }) {
        if (gender === exports.Gender.Female) {
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
class Mass {
    gender;
    age;
    height; // in cm
    weight; // in kg
    constructor(gender, age, height, weight) {
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    get baseParams() {
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
    estimateFfm(Estimator, resistance) {
        return Estimator.estimate({ ...this.baseParams, resistance });
    }
    /**
     * Computes fat-free mass using a resistance + reactance Estimator.
     * @param Estimator - the FFM formula to apply
     * @param resistance - bioelectrical resistance in ohms
     * @param reactance - bioelectrical reactance in ohms
     * @returns Fat Free Mass in kg
     */
    estimateFfmWithReactance(Estimator, resistance, reactance) {
        return Estimator.estimate({ ...this.baseParams, resistance, reactance });
    }
}

var mass = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FfmAdolescentEstimator: FfmAdolescentEstimator,
    FfmAdultAthleteEstimator: FfmAdultAthleteEstimator,
    FfmAdultLeanEstimator: FfmAdultLeanEstimator,
    FfmAdultObeseEstimator: FfmAdultObeseEstimator,
    FfmChildEstimator: FfmChildEstimator,
    Mass: Mass
});

/** Trotter & Gleser regression for American White population */
class AmericanWhiteStatureEstimator {
    estimate({ gender, femurLength }) {
        if (gender === exports.Gender.Female) {
            return 2.47 * femurLength + 54.1;
        }
        return 2.32 * femurLength + 65.53;
    }
}
/** Trotter & Gleser regression for American Black population */
class AmericanBlackStatureEstimator {
    estimate({ gender, femurLength }) {
        if (gender === exports.Gender.Female) {
            return 2.28 * femurLength + 59.76;
        }
        return 2.1 * femurLength + 72.22;
    }
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
function universalStature(height, age) {
    return 1.009 * height - 0.0426 * age + 12.1;
}
/**
 * Estimates stride length from height and gender.
 *
 * @param gender - biological sex used to select the stride factor
 * @param height - height in meters
 * @returns estimated stride length in meters
 */
function strideLength(gender, height) {
    const heightCm = height * 100;
    const factor = gender === exports.Gender.Female ? 0.413 : 0.415;
    return (factor * heightCm) / 100;
}

var stature = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AmericanBlackStatureEstimator: AmericanBlackStatureEstimator,
    AmericanWhiteStatureEstimator: AmericanWhiteStatureEstimator,
    strideLength: strideLength,
    universalStature: universalStature
});

/** Boyd formula */
class BoydStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return (0.0333 *
            Math.pow(weight, 0.6157 - 0.0188 * Math.log(weight)) *
            Math.pow(heightCm, 0.3));
    }
}
/** Costeff formula */
class CosteffStrategy {
    calculate({ weight }) {
        return (4 * weight + 7) / (90 + weight);
    }
}
/** DuBois & DuBois formula */
class DuboisStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.007184 * Math.pow(weight, 0.425) * Math.pow(heightCm, 0.725);
    }
}
/** Fujimoto formula */
class FujimotoStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.008883 * Math.pow(weight, 0.444) * Math.pow(heightCm, 0.663);
    }
}
/** Gehan & George formula */
class GehanGeorgeStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.0235 * Math.pow(weight, 0.51456) * Math.pow(heightCm, 0.42246);
    }
}
/** Haycock formula */
class HaycockStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.024265 * Math.pow(weight, 0.5378) * Math.pow(heightCm, 0.3964);
    }
}
/** Mosteller formula */
class MostellerStrategy {
    calculate({ height, weight }) {
        return Math.sqrt(weight * height) / 6;
    }
}
/** Schlich formula (gender-dependent) */
class SchlichStrategy {
    calculate({ gender, height, weight }) {
        const heightCm = height * 100;
        if (gender === exports.Gender.Female) {
            return 0.000975482 * Math.pow(weight, 0.46) * Math.pow(heightCm, 1.08);
        }
        return 0.000579479 * Math.pow(weight, 0.38) * Math.pow(heightCm, 1.24);
    }
}
/** Shuter & Aslani formula */
class ShuterAslaniStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.00949 * Math.pow(weight, 0.441) * Math.pow(heightCm, 0.655);
    }
}
/** Takahira formula */
class TakahiraStrategy {
    calculate({ height, weight }) {
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
class SurfaceArea {
    strategy;
    params;
    constructor(strategy, gender, height, weight) {
        this.strategy = strategy;
        this.params = { gender, height, weight };
    }
    /**
     * Swap the algorithm used for calculation at runtime.
     */
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    /**
     * @returns {Number} surface area in meters^2, using the current strategy
     */
    calculate() {
        return this.strategy.calculate(this.params);
    }
}

var surfaceArea = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BoydStrategy: BoydStrategy,
    CosteffStrategy: CosteffStrategy,
    DuboisStrategy: DuboisStrategy,
    FujimotoStrategy: FujimotoStrategy,
    GehanGeorgeStrategy: GehanGeorgeStrategy,
    HaycockStrategy: HaycockStrategy,
    MostellerStrategy: MostellerStrategy,
    SchlichStrategy: SchlichStrategy,
    ShuterAslaniStrategy: ShuterAslaniStrategy,
    SurfaceArea: SurfaceArea,
    TakahiraStrategy: TakahiraStrategy
});

var index$6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    density: density,
    fat: fat,
    hydration: hydration,
    ideal: ideal,
    indices: indices,
    mass: mass,
    stature: stature,
    surfaceArea: surfaceArea
});

class UnitConverter {
    static unitTable = {};
    value;
    currentUnit;
    targetUnit;
    constructor(value, unit) {
        this.value = value;
        this.currentUnit = unit;
    }
    to(targetUnit) {
        this.targetUnit = targetUnit;
        return this;
    }
    val() {
        const target = UnitConverter.unitTable[this.targetUnit];
        const current = UnitConverter.unitTable[this.currentUnit];
        if (!target || !current) {
            throw new Error(`Unknown unit: ${!current ? this.currentUnit : this.targetUnit}`);
        }
        if (target.base !== current.base) {
            throw new Error(`Conversion not possible: ${this.currentUnit} -> ${this.targetUnit}`);
        }
        // convert current -> base -> target
        return this.value * (current.multiplier / target.multiplier);
    }
    static addUnit(base, prefixed, multiplier, overwrite = false) {
        if (!overwrite && UnitConverter.unitTable[prefixed]) {
            throw new Error(`Unit "${prefixed}" is already registered`);
        }
        UnitConverter.unitTable[prefixed] = { base, actual: prefixed, multiplier };
    }
    static addAlias(existing, alias) {
        const entry = UnitConverter.unitTable[existing];
        if (!entry) {
            throw new Error(`Cannot alias unknown unit "${existing}"`);
        }
        UnitConverter.addUnit(entry.base, alias, entry.multiplier);
    }
}
// ---- SI base units with prefixes ----
const siPrefixes = ['Y', 'Z', 'E', 'P', 'T', 'G', 'M', 'k', 'h', 'da', '', 'd', 'c', 'm', 'u', 'n', 'p', 'f', 'a', 'z', 'y'];
const siFactors = [24, 21, 18, 15, 12, 9, 6, 3, 2, 1, 0, -1, -2, -3, -6, -9, -12, -15, -18, -21, -24];
const siUnits = ['g', 'b', 'm', 'A', 'cd', 'mol', 'K', 'are', 'Pa', 'J', 'W'];
for (const base of siUnits) {
    for (let i = 0; i < siPrefixes.length; i++) {
        UnitConverter.addUnit(base, siPrefixes[i] + base, Math.pow(10, siFactors[i]));
    }
}
// ---- Mass: English units (base = g) ----
UnitConverter.addUnit('g', 'ounce', 28.3495231);
UnitConverter.addAlias('ounce', 'oz');
UnitConverter.addUnit('g', 'pound', 453.59237);
UnitConverter.addAlias('pound', 'lb');
// ---- Time (base = s) ----
UnitConverter.addUnit('s', 'seconds', 1);
UnitConverter.addUnit('s', 'minutes', 60);
UnitConverter.addUnit('s', 'hours', 3600);
UnitConverter.addUnit('s', 'days', 86400);
UnitConverter.addUnit('s', 'years', 3.154e7);
// ---- Distance (base = m) ----
UnitConverter.addUnit('m', 'inches', 0.0254);
UnitConverter.addUnit('m', 'feet', 0.3048);
UnitConverter.addUnit('m', 'miles', 1609.344);
UnitConverter.addUnit('m', 'leagues', 5556);
UnitConverter.addUnit('m', 'yards', 0.9144);
// ---- Area (base = m^2) ----
UnitConverter.addUnit('m^2', 'inches^2', 0.00064516);
UnitConverter.addUnit('m^2', 'feet^2', 0.0929);
UnitConverter.addUnit('m^2', 'miles^2', 2.59e6);
UnitConverter.addUnit('m^2', 'leagues^2', 3.087e7);
UnitConverter.addUnit('m^2', 'yards^2', 2.590);
UnitConverter.addUnit('m^2', 'acres', 4046.86);
// ---- Volume (base = m^3) ----
UnitConverter.addUnit('m^3', 'mm^3', 1e-9);
UnitConverter.addUnit('m^3', 'cm^3', 1e-6);
UnitConverter.addUnit('m^3', 'm^3', 1);
UnitConverter.addUnit('m^3', 'km^3', 1e9);
UnitConverter.addUnit('m^3', 'L', 0.001);
UnitConverter.addUnit('m^3', 'inches^3', 1.63871e-5);
UnitConverter.addUnit('m^3', 'cups', 0.000236588);
UnitConverter.addUnit('m^3', 'pints', 0.000473176);
UnitConverter.addUnit('m^3', 'quarts', 0.000946353);
UnitConverter.addUnit('m^3', 'gal', 0.00378541);
UnitConverter.addUnit('m^3', 'feet^3', 0.0283168);
UnitConverter.addUnit('m^3', 'yards^3', 0.764555);
// ---- Speed (base = m/s) ----
UnitConverter.addUnit('m/s', 'cm/s', 0.01);
UnitConverter.addUnit('m/s', 'm/s', 1);
UnitConverter.addUnit('m/s', 'kps', 1000);
UnitConverter.addUnit('m/s', 'm/min', 0.0166667);
UnitConverter.addUnit('m/s', 'cm/h', 2.77778e-6);
UnitConverter.addUnit('m/s', 'm/h', 0.000277778);
UnitConverter.addUnit('m/s', 'kph', 0.277778);
UnitConverter.addUnit('m/s', 'mph', 0.44704);
UnitConverter.addUnit('m/s', 'ft/s', 0.3048);
// ---- Acceleration (base = m/s^2) ----
UnitConverter.addUnit('m/s^2', 'cm/s^2', 0.01);
UnitConverter.addUnit('m/s^2', 'm/s^2', 1);
UnitConverter.addUnit('m/s^2', 'km/s^2', 1000);
UnitConverter.addUnit('m/s^2', 'in/s^2', 0.0254);
UnitConverter.addUnit('m/s^2', 'ft/s^2', 0.3048);
UnitConverter.addUnit('m/s^2', 'mi/s^2', 1609.344);
// ---- Force (base = N) ----
UnitConverter.addUnit('N', 'lbf', 4.44822);
UnitConverter.addUnit('N', 'dyne', 1e-5);
// ---- Pressure (base = Pa) ----
UnitConverter.addUnit('Pa', 'torr', 133.322);
UnitConverter.addUnit('Pa', 'atm', 101325);
UnitConverter.addUnit('Pa', 'psi', 6894.76);
UnitConverter.addAlias('psi', 'lbf/in^2');
UnitConverter.addUnit('Pa', 'lbf/ft^2', 47.8803);
UnitConverter.addUnit('Pa', 'kgf/m^2', 9.807);
// ---- Energy (base = J) ----
UnitConverter.addUnit('J', 'btu', 1055.06);
UnitConverter.addUnit('J', 'ft-lbf', 1.35582);
UnitConverter.addUnit('J', 'erg', 1e-7);
UnitConverter.addUnit('J', 'hp-h', 2684519.5377);
// ---- Power (base = W) ----
UnitConverter.addUnit('W', 'hp', 745.7);
UnitConverter.addUnit('W', 'ft-lbf/s', 1.35582);
// ---- METs ----
UnitConverter.addUnit('MET', 'MET', 1);
UnitConverter.addUnit('MET', 'mL/kg/min', 3.5);
UnitConverter.addAlias('mL/kg/min', 'kcal/kg/hr');
// ---- Pace (base = min/mile) ----
// NOTE: these are inverse-rate quantities (time per distance). The linear
// multiplier model below only produces correct results if each multiplier
// is (base-unit-per-target-unit) consistently derived from a true rate
// conversion — verify against known reference values before relying on this
// table, several of the original constants looked inverted.
UnitConverter.addUnit('min/mile', 'min/mile', 1);
UnitConverter.addUnit('min/mile', 'min/km', 0.621371);
UnitConverter.addUnit('min/mile', 'hour/km', 0.0103562);
UnitConverter.addUnit('min/mile', 's/m', 0.0372823);
UnitConverter.addUnit('min/mile', 'min/m', 0.000621371);
UnitConverter.addUnit('min/mile', 's/100m', 3.72822715);
UnitConverter.addUnit('min/mile', 's/ft', 0.01136361);
UnitConverter.addUnit('min/mile', 'min/ft', 0.000189394);
UnitConverter.addUnit('min/mile', 's/yd', 0.0340909);
UnitConverter.addUnit('min/mile', 's/100yd', 3.40909091);

/*
Swain Equation for converting %HRmax to %VO2Max
hrPercentage is the percentage of maximum heart rate
returns percentage of VO2Max as decimal
*/
function percentVO2Max(hrPercentage) {
    const convertedPercentage = hrPercentage * 100;
    const formulaResult = (convertedPercentage - 37.182) / 0.6463;
    return formulaResult / 100;
}
/*
Swain Equation for converting %VO2Max to %HRMax
vO2MaxPercentage is the percentage of VO2Max
returns percentage of HRMax as decimal
*/
function percentHrMax(vO2MaxPercentage) {
    const convertedPercentage = vO2MaxPercentage * 100;
    const formulaResult = (0.6463 * convertedPercentage) + 37.182;
    return formulaResult / 100;
}

var swain = /*#__PURE__*/Object.freeze({
    __proto__: null,
    percentHrMax: percentHrMax,
    percentVO2Max: percentVO2Max
});

const temperatureTable = {
    C: {
        F: (c) => c * 9 / 5 + 32,
        K: (c) => c + 273.15,
        R: (c) => c * 9 / 5 + 491.67,
    },
    F: {
        C: (f) => (f - 32) * 5 / 9,
        K: (f) => (f + 459.67) * 5 / 9,
        R: (f) => f + 459.67,
    },
    K: {
        C: (k) => k - 273.15,
        F: (k) => k * 9 / 5 - 459.67,
        R: (k) => k * 9 / 5,
    },
    R: {
        C: (r) => r * 5 / 9 - 273.15,
        F: (r) => r - 459.67,
        K: (r) => r * 5 / 9,
    },
};
class TemperatureConverter {
    value;
    currentUnit;
    targetUnit;
    constructor(value, unit) {
        this.value = value;
        this.currentUnit = unit;
    }
    to(targetUnit) {
        this.targetUnit = targetUnit;
        return this;
    }
    val() {
        if (this.currentUnit === this.targetUnit) {
            return this.value;
        }
        const conversionFunction = temperatureTable[this.currentUnit][this.targetUnit];
        if (!conversionFunction) {
            throw new Error(`Conversion not possible: °${this.currentUnit} -> °${this.targetUnit}`);
        }
        return conversionFunction(this.value);
    }
}

var index$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TemperatureConverter: TemperatureConverter,
    UnitConverter: UnitConverter,
    swain: swain
});

/* @const */
const mets = [
    { value: 14.0, code: "01003", description: "bicycling, mountain, uphill, vigorous" },
    { value: 16.0, code: "01004", description: "bicycling, mountain, competitive, racing" },
    { value: 8.5, code: "01008", description: "bicycling, BMX" },
    { value: 8.5, code: "01009", description: "bicycling, mountain, general" },
    { value: 4.0, code: "01010", description: "bicycling, <10 mph, leisure, to work or for pleasure (Taylor Code 115)" },
    { value: 6.8, code: "01011", description: "bicycling, to/from work, self selected pace" },
    { value: 5.8, code: "01013", description: "bicycling, on dirt or farm road, moderate pace" },
    { value: 7.5, code: "01015", description: "bicycling, general" },
    { value: 3.5, code: "01018", description: "bicycling, leisure, 5.5 mph" },
    { value: 6.8, code: "01020", description: "bicycling, 10-11.9 mph, leisure, slow, light effort" },
    { value: 8.0, code: "01030", description: "bicycling, 12-13.9 mph, leisure, moderate effort" },
    { value: 10.0, code: "01040", description: "bicycling, 14-15.9 mph, racing or leisure, fast, vigorous effort" },
    { value: 12.0, code: "01050", description: "bicycling, 16-19 mph, racing/not drafting or > 19 mph drafting, very fast, racing general" },
    { value: 15.8, code: "01060", description: "bicycling, > 20 mph, racing, not drafting" },
    { value: 8.5, code: "01065", description: "bicycling, 12 mph, seated, hands on brake hoods or bar drops, 80 rpm" },
    { value: 9.0, code: "01066", description: "bicycling, 12 mph, standing, hands on brake hoods, 60 rpm" },
    { value: 5.0, code: "01070", description: "unicycling" },
    { value: 2.3, code: "02001", description: "activity promoting video game (e.g., Wii Fit), light effort (e.g., balance, yoga)" },
    { value: 3.8, code: "02003", description: "activity promoting video game (e.g., Wii Fit), moderate effort (e.g., aerobic, resistance)" },
    { value: 7.2, code: "02005", description: "activity promoting video/arcade game (e.g., Exergaming, Dance Dance Revolution), vigorous effort" },
    { value: 5.0, code: "02008", description: "army type obstacle course exercise, boot camp training program\\u00a0" },
    { value: 7.0, code: "02010", description: "bicycling, stationary, general" },
    { value: 3.5, code: "02011", description: "bicycling, stationary, 30-50 watts, very light to light effort" },
    { value: 6.8, code: "02012", description: "bicycling, stationary, 90-100 watts, moderate to vigorous effort" },
    { value: 8.8, code: "02013", description: "bicycling, stationary, 101-160 watts, vigorous effort" },
    { value: 11.0, code: "02014", description: "bicycling, stationary, 161-200 watts, vigorous effort" },
    { value: 14.0, code: "02015", description: "bicycling, stationary, 201-270 watts, very vigorous effort" },
    { value: 4.8, code: "02017", description: "bicycling, stationary, 51-89 watts, light-to-moderate effort" },
    { value: 8.5, code: "02019", description: "bicycling, stationary, RPM/Spin bike class" },
    { value: 8.0, code: "02020", description: "calisthenics (e.g., push ups, sit ups, pull-ups, jumping jacks), vigorous effort" },
    { value: 3.8, code: "02022", description: "calisthenics (e.g., push ups, sit ups, pull-ups, lunges), moderate effort" },
    { value: 2.8, code: "02024", description: "calisthenics (e.g., situps, abdominal crunches), light effort" },
    { value: 3.5, code: "02030", description: "calisthenics, light or moderate effort, general (example: back exercises), going up & down from floor (Taylor Code 150)" },
    { value: 4.3, code: "02035", description: "circuit training, moderate effort" },
    { value: 8.0, code: "02040", description: "circuit training, including kettlebells, some aerobic movement with minimal rest, general, vigorous intensity" },
    { value: 3.5, code: "02045", description: "Curves exercise routines in women" },
    { value: 5.0, code: "02048", description: "Elliptical trainer, moderate effort\\u00a0" },
    { value: 6.0, code: "02050", description: "resistance training (weight lifting - free weight, nautilus or universal-type), power lifting or body building, vigorous effort (Taylor Code 210)" },
    { value: 5.0, code: "02052", description: "resistance (weight) training, squats , slow or explosive effort" },
    { value: 3.5, code: "02054", description: "resistance (weight) training, multiple exercises, 8-15 repetitions at varied resistance\\u00a0" },
    { value: 5.5, code: "02060", description: "health club exercise, general (Taylor Code 160)" },
    { value: 9.0, code: "02065", description: "stair-treadmill ergometer, general" },
    { value: 11.0, code: "02068", description: "rope skipping, general" },
    { value: 6.0, code: "02070", description: "rowing, stationary ergometer, general, vigorous effort" },
    { value: 4.8, code: "02071", description: "rowing, stationary, general, moderate effort" },
    { value: 7.0, code: "02072", description: "rowing, stationary, 100 watts, moderate effort" },
    { value: 8.5, code: "02073", description: "rowing, stationary, 150 watts, vigorous effort" },
    { value: 12.0, code: "02074", description: "rowing, stationary, 200 watts, very vigorous effort" },
    { value: 6.8, code: "02080", description: "ski machine, general" },
    { value: 11.0, code: "02085", description: "slide board exercise, general" },
    { value: 6.0, code: "02090", description: "slimnastics, jazzercise" },
    { value: 2.3, code: "02101", description: "stretching, mild" },
    { value: 3.0, code: "02105", description: "pilates, general" },
    { value: 6.8, code: "02110", description: "teaching exercise class (e.g., aerobic, water)" },
    { value: 2.8, code: "02112", description: "therapeutic exercise ball, Fitball exercise" },
    { value: 2.8, code: "02115", description: "upper body exercise, arm ergometer" },
    { value: 4.3, code: "02117", description: "upper body exercise, stationary bicycle - Airdyne (arms only) 40 rpm, moderate" },
    { value: 5.3, code: "02120", description: "water aerobics, water calisthenics, water exercise" },
    { value: 1.3, code: "02135", description: "whirlpool, sitting" },
    { value: 2.3, code: "02140", description: "video exercise workouts, TV conditioning programs (e.g., yoga, stretching), light effort" },
    { value: 4.0, code: "02143", description: "video exercise workouts, TV conditioning programs (e.g., cardio-resistance), moderate effort" },
    { value: 6.0, code: "02146", description: "video exercise workouts, TV conditioning programs (e.g., cardio-resistance), vigorous effort" },
    { value: 2.5, code: "02150", description: "yoga, Hatha" },
    { value: 4.0, code: "02160", description: "yoga, Power" },
    { value: 2.0, code: "02170", description: "yoga, Nadisodhana" },
    { value: 3.3, code: "02180", description: "yoga, Surya Namaskar" },
    { value: 5.3, code: "02200", description: "native New Zealander physical activities (e.g., Haka Powhiri, Moteatea, Waita Tira, Whakawatea, etc.) , general, moderate effort" },
    { value: 6.8, code: "02205", description: "native New Zealander physical activities (e.g., Haka, Taiahab), general, vigorous effort" },
    { value: 5.0, code: "03010", description: "ballet, modern, or jazz, general, rehearsal or class" },
    { value: 6.8, code: "03012", description: "ballet, modern, or jazz, performance, vigorous effort" },
    { value: 4.8, code: "03014", description: "tap" },
    { value: 7.3, code: "03015", description: "aerobic, general" },
    { value: 7.5, code: "03016", description: "aerobic, step, with 6 - 8 inch step" },
    { value: 9.5, code: "03017", description: "aerobic, step, with 10 - 12 inch step" },
    { value: 5.5, code: "03018", description: "aerobic, step, with 4-inch step" },
    { value: 8.5, code: "03019", description: "bench step class, general" },
    { value: 5.0, code: "03020", description: "aerobic, low impact" },
    { value: 7.3, code: "03021", description: "aerobic, high impact" },
    { value: 10.0, code: "03022", description: "aerobic dance wearing 10-15 lb weights" },
    { value: 4.5, code: "03025", description: "ethnic or cultural dancing (e.g., Greek, Middle Eastern, hula, salsa, merengue, bamba y plena, flamenco, belly, and swing)" },
    { value: 5.5, code: "03030", description: "ballroom, fast (Taylor Code 125)" },
    { value: 7.8, code: "03031", description: "general dancing (e.g., disco, folk, Irish step dancing, line dancing, polka, contra, country)" },
    { value: 11.3, code: "03038", description: "ballroom dancing, competitive, general" },
    { value: 3.0, code: "03040", description: "ballroom, slow (e.g., waltz, foxtrot, slow dancing, samba, tango, 19th century dance, mambo, cha cha)" },
    { value: 5.5, code: "03050", description: "Anishinaabe Jingle Dancing" },
    { value: 3.5, code: "03060", description: "Caribbean dance (Abakua, Beguine, Bellair, Bongo, Brukin's, Caribbean Quadrills, Dinki Mini, Gere, Gumbay, Ibo, Jonkonnu, Kumina, Oreisha, Jambu)" },
    { value: 3.5, code: "04001", description: "fishing, general" },
    { value: 4.5, code: "04005", description: "fishing, crab fishing" },
    { value: 4.0, code: "04007", description: "fishing, catching fish with hands" },
    { value: 4.3, code: "04010", description: "fishing related, digging worms, with shovel" },
    { value: 4.0, code: "04020", description: "fishing from river bank and walking" },
    { value: 2.0, code: "04030", description: "fishing from boat or canoe, sitting" },
    { value: 3.5, code: "04040", description: "fishing from river bank, standing (Taylor Code 660)" },
    { value: 6.0, code: "04050", description: "fishing in stream, in waders (Taylor Code 670)" },
    { value: 2.0, code: "04060", description: "fishing, ice, sitting" },
    { value: 1.8, code: "04061", description: "fishing, jog or line, standing, general" },
    { value: 3.5, code: "04062", description: "fishing, dip net, setting net and retrieving fish, general" },
    { value: 3.8, code: "04063", description: "fishing, set net, setting net and retrieving fish, general" },
    { value: 3.0, code: "04064", description: "fishing, fishing wheel, setting net and retrieving fish, general" },
    { value: 2.3, code: "04065", description: "fishing with a spear, standing" },
    { value: 2.5, code: "04070", description: "hunting, bow and arrow, or crossbow" },
    { value: 6.0, code: "04080", description: "hunting, deer, elk, large game (Taylor Code 170)" },
    { value: 11.3, code: "04081", description: "hunting large game, dragging carcass" },
    { value: 4.0, code: "04083", description: "hunting large marine animals" },
    { value: 2.5, code: "04085", description: "hunting large game, from a hunting stand, limited walking" },
    { value: 2.0, code: "04086", description: "hunting large game from a car, plane, or boat" },
    { value: 2.5, code: "04090", description: "hunting, duck, wading" },
    { value: 3.0, code: "04095", description: "hunting, flying fox, squirrel" },
    { value: 5.0, code: "04100", description: "hunting, general" },
    { value: 6.0, code: "04110", description: "hunting, pheasants or grouse (Taylor Code 680)" },
    { value: 3.3, code: "04115", description: "hunting, birds" },
    { value: 5.0, code: "04120", description: "hunting, rabbit, squirrel, prairie chick, raccoon, small game (Taylor Code 690)" },
    { value: 3.3, code: "04123", description: "hunting, pigs, wild" },
    { value: 2.0, code: "04124", description: "trapping game, general" },
    { value: 9.5, code: "04125", description: "hunting, hiking with hunting gear" },
    { value: 2.5, code: "04130", description: "pistol shooting or trap shooting, standing" },
    { value: 2.3, code: "04140", description: "rifle exercises, shooting, lying down" },
    { value: 2.5, code: "04145", description: "rifle exercises, shooting, kneeling or standing" },
    { value: 3.3, code: "05010", description: "cleaning, sweeping carpet or floors, general" },
    { value: 2.3, code: "05011", description: "cleaning, sweeping, slow, light effort" },
    { value: 3.8, code: "05012", description: "cleaning, sweeping, slow, moderate effort" },
    { value: 3.5, code: "05020", description: "cleaning, heavy or major (e.g. wash car, wash windows, clean garage), moderate effort" },
    { value: 3.5, code: "05021", description: "cleaning, mopping, standing, moderate effort" },
    { value: 3.2, code: "05022", description: "cleaning windows, washing windows, general" },
    { value: 2.5, code: "05023", description: "mopping, standing, light effort" },
    { value: 4.5, code: "05024", description: "polishing floors, standing, walking slowly, using electric polishing machine" },
    { value: 2.8, code: "05025", description: "multiple household tasks all at once, light effort" },
    { value: 3.5, code: "05026", description: "multiple household tasks all at once, moderate effort" },
    { value: 4.3, code: "05027", description: "multiple household tasks all at once, vigorous effort" },
    { value: 3.3, code: "05030", description: "cleaning, house or cabin, general, moderate effort" },
    { value: 2.3, code: "05032", description: "dusting or polishing furniture, general" },
    { value: 3.3, code: "05035", description: "kitchen activity, general, (e.g., cooking, washing dishes, cleaning up), moderate effort" },
    { value: 2.5, code: "05040", description: "cleaning, general (straightening up, changing linen, carrying out trash, light effort" },
    { value: 1.8, code: "05041", description: "wash dishes, standing or in general (not broken into stand/walk components)" },
    { value: 2.5, code: "05042", description: "wash dishes, clearing dishes from table, walking, light effort" },
    { value: 3.3, code: "05043", description: "vacuuming, general, moderate effort" },
    { value: 3.0, code: "05044", description: "butchering animals, small" },
    { value: 6.0, code: "05045", description: "butchering animal, large, vigorous effort" },
    { value: 2.3, code: "05046", description: "cutting and smoking fish, drying fish or meat" },
    { value: 4.0, code: "05048", description: "tanning hides, general" },
    { value: 3.5, code: "05049", description: "cooking or food preparation, moderate effort" },
    { value: 2.0, code: "05050", description: "cooking or food preparation - standing or sitting or in general (not broken into stand/walk components), manual appliances, light effort" },
    { value: 2.5, code: "05051", description: "serving food, setting table, implied walking or standing" },
    { value: 2.5, code: "05052", description: "cooking or food preparation, walking" },
    { value: 2.5, code: "05053", description: "feeding household animals" },
    { value: 2.5, code: "05055", description: "putting away groceries (e.g. carrying groceries, shopping without a grocery cart), carrying packages" },
    { value: 7.5, code: "05056", description: "carrying groceries upstairs" },
    { value: 3.0, code: "05057", description: "cooking Indian bread on an outside stove" },
    { value: 2.3, code: "05060", description: "food shopping with or without a grocery cart, standing or walking" },
    { value: 2.3, code: "05065", description: "non-food shopping, with or without a cart, standing or walking" },
    { value: 1.8, code: "05070", description: "ironing" },
    { value: 1.3, code: "05080", description: "knitting, sewing, light effort, wrapping presents, sitting" },
    { value: 2.8, code: "05082", description: "sewing with a machine" },
    { value: 2.0, code: "05090", description: "laundry, fold or hang clothes, put clothes in washer or dryer, packing suitcase, washing clothes by hand,implied standing, light effort" },
    { value: 4.0, code: "05092", description: "laundry, hanging wash, washing clothes by hand, moderate effort" },
    { value: 2.3, code: "05095", description: "laundry, putting away clothes, gathering clothes to pack, putting away laundry,implied walking" },
    { value: 3.3, code: "05100", description: "making bed, changing linens" },
    { value: 5.0, code: "05110", description: "maple syruping/sugar bushing (including carrying buckets, carrying wood)" },
    { value: 5.8, code: "05120", description: "moving furniture, household items, carrying boxes" },
    { value: 5.0, code: "05121", description: "moving, lifting light loads" },
    { value: 4.8, code: "05125", description: "organizing room" },
    { value: 3.5, code: "05130", description: "scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, moderate effort" },
    { value: 2.0, code: "05131", description: "scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, light effort" },
    { value: 6.5, code: "05132", description: "scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, vigorous effort" },
    { value: 4.0, code: "05140", description: "sweeping garage, sidewalk or outside of house" },
    { value: 3.5, code: "05146", description: "standing, packing/unpacking boxes, occasional lifting of lightweight household items, loading or unloading items in car, moderate effort" },
    { value: 3.0, code: "05147", description: "implied walking, putting away household items, moderate effort" },
    { value: 2.5, code: "05148", description: "watering  plants" },
    { value: 2.5, code: "05149", description: "building a fire inside" },
    { value: 9.0, code: "05150", description: "moving household items upstairs, carrying boxes or furniture" },
    { value: 2.0, code: "05160", description: "standing, light effort tasks (pump gas, change light bulb, etc.)" },
    { value: 3.5, code: "05165", description: "walking, moderate effort tasks, non-cleaning (readying to leave, shut/lock doors, close windows, etc.)" },
    { value: 2.2, code: "05170", description: "sitting, playing with child(ren), light effort, only active periods" },
    { value: 2.8, code: "05171", description: "standing, playing with child(ren) light effort, only active periods" },
    { value: 3.5, code: "05175", description: "walking/running, playing with child(ren), moderate effort, only active periods" },
    { value: 5.8, code: "05180", description: "walking/running, playing with child(ren), vigorous effort, only active periods" },
    { value: 3.0, code: "05181", description: "walking and carrying small child, child weighing 15 lbs or more" },
    { value: 2.3, code: "05182", description: "walking, moderate effort tasks, non-cleaning (readying to leave, shut/lock doors, close windows, etc.)" },
    { value: 2.0, code: "05183", description: "standing, holding child" },
    { value: 2.5, code: "05184", description: "child care, infant, general" },
    { value: 2.0, code: "05185", description: "child care, sitting/kneeling (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), light effort, general" },
    { value: 3.0, code: "05186", description: "child care, standing (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), moderate effort" },
    { value: 1.5, code: "05188", description: "reclining with baby" },
    { value: 2.0, code: "05189", description: "breastfeeding, sitting or reclining" },
    { value: 2.5, code: "05190", description: "sit, playing with animals, light effort, only active periods" },
    { value: 2.8, code: "05191", description: "stand, playing with animals, light effort, only active periods" },
    { value: 3.0, code: "05192", description: "walk/run, playing with animals, general, light effort, only active periods" },
    { value: 4.0, code: "05193", description: "walk/run, playing with animals, moderate effort, only active periods" },
    { value: 5.0, code: "05194", description: "walk/run, playing with animals, vigorous effort, only active periods" },
    { value: 3.5, code: "05195", description: "standing, bathing dog" },
    { value: 2.3, code: "05197", description: "animal care, household animals, general" },
    { value: 4.0, code: "05200", description: "elder care, disabled adult, bathing, dressing, moving into and out of bed, only active periods " },
    { value: 2.3, code: "05205", description: "elder care, disabled adult, feeding, combing hair, light effort, only active periods" },
    { value: 3.0, code: "06010", description: "airplane repair" },
    { value: 4.0, code: "06020", description: "automobile body work" },
    { value: 3.3, code: "06030", description: "automobile repair, light or moderate effort" },
    { value: 3.0, code: "06040", description: "carpentry, general, workshop (Taylor Code 620)" },
    { value: 6.0, code: "06050", description: "carpentry, outside house, installing rain gutters (Taylor Code 640),carpentry, outside house, building a fence" },
    { value: 3.8, code: "06052", description: "carpentry, outside house, building a fence" },
    { value: 3.3, code: "06060", description: "carpentry, finishing or refinishing cabinets or furniture" },
    { value: 6.0, code: "06070", description: "carpentry, sawing hardwood" },
    { value: 4.0, code: "06072", description: "carpentry, home remodeling tasks, moderate effort" },
    { value: 2.3, code: "06074", description: "carpentry, home remodeling tasks, light effort\\u00a0" },
    { value: 5.0, code: "06080", description: "caulking, chinking log cabin" },
    { value: 4.5, code: "06090", description: "caulking, except log cabin" },
    { value: 5.0, code: "06100", description: "cleaning gutters" },
    { value: 5.0, code: "06110", description: "excavating garage" },
    { value: 5.0, code: "06120", description: "hanging storm windows" },
    { value: 5.0, code: "06122", description: "hanging sheet rock inside house" },
    { value: 3.0, code: "06124", description: "hammering nails" },
    { value: 2.5, code: "06126", description: "home repair, general, light effort" },
    { value: 4.5, code: "06127", description: "home repair, general, moderate effort" },
    { value: 6.0, code: "06128", description: "home repair, general, vigorous effort" },
    { value: 4.5, code: "06130", description: "laying or removing carpet" },
    { value: 3.8, code: "06140", description: "laying tile or linoleum,repairing appliances" },
    { value: 3.0, code: "06144", description: "repairing appliances" },
    { value: 5.0, code: "06150", description: "painting, outside home (Taylor Code 650)" },
    { value: 3.3, code: "06160", description: "painting inside house,wallpapering, scraping paint" },
    { value: 4.5, code: "06165", description: "painting, (Taylor Code 630)" },
    { value: 3.0, code: "06167", description: "plumbing, general" },
    { value: 3.0, code: "06170", description: "put on and removal of tarp - sailboat" },
    { value: 6.0, code: "06180", description: "roofing" },
    { value: 4.5, code: "06190", description: "sanding floors with a power sander" },
    { value: 4.5, code: "06200", description: "scraping and painting sailboat or powerboat" },
    { value: 2.0, code: "06205", description: "sharpening tools" },
    { value: 5.0, code: "06210", description: "spreading dirt with a shovel" },
    { value: 4.5, code: "06220", description: "washing and waxing hull of sailboat or airplane" },
    { value: 2.0, code: "06225", description: "washing and waxing car" },
    { value: 4.5, code: "06230", description: "washing fence, painting fence, moderate effort" },
    { value: 3.3, code: "06240", description: "wiring, tapping-splicing" },
    { value: 1.0, code: "07010", description: "lying quietly and watching television" },
    { value: 1.3, code: "07011", description: "lying quietly, doing nothing, lying in bed awake, listening to music (not talking or reading)" },
    { value: 1.3, code: "07020", description: "sitting quietly and watching television" },
    { value: 1.3, code: "07021", description: "sitting quietly, general" },
    { value: 1.5, code: "07022", description: "sitting quietly, fidgeting, general, fidgeting hands" },
    { value: 1.8, code: "07023", description: "sitting, fidgeting feet" },
    { value: 1.3, code: "07024", description: "sitting, smoking" },
    { value: 1.5, code: "07025", description: "sitting, listening to music (not talking or reading) or watching a movie in a theater" },
    { value: 1.3, code: "07026", description: "sitting at a desk, resting head in hands" },
    { value: 1.3, code: "07040", description: "standing quietly, standing in a line" },
    { value: 1.8, code: "07041", description: "standing, fidgeting" },
    { value: 1.3, code: "07050", description: "reclining, writing" },
    { value: 1.3, code: "07060", description: "reclining, talking or talking on phone" },
    { value: 1.3, code: "07070", description: "reclining, reading" },
    { value: 1.0, code: "07075", description: "meditating" },
    { value: 3.3, code: "08009", description: "carrying, loading or stacking wood, loading/unloading or carrying lumber, light-to-moderate effort" },
    { value: 5.5, code: "08010", description: "carrying, loading or stacking wood, loading/unloading or carrying lumber" },
    { value: 4.5, code: "08019", description: "chopping wood, splitting logs, moderate effort" },
    { value: 6.3, code: "08020", description: "chopping wood, splitting logs, vigorous effort" },
    { value: 3.5, code: "08025", description: "clearing light brush, thinning garden, moderate effort" },
    { value: 6.3, code: "08030", description: "clearing brush/land, undergrowth, or ground, hauling branches, wheelbarrow chores, vigorous effort" },
    { value: 5.0, code: "08040", description: "digging sandbox, shoveling sand" },
    { value: 3.5, code: "08045", description: "digging, spading, filling garden, composting, light-to-moderate effort" },
    { value: 5.0, code: "08050", description: "digging, spading, filling garden, compositing, (Taylor Code 590)" },
    { value: 7.8, code: "08052", description: "digging, spading, filling garden, composting, vigorous effort" },
    { value: 2.8, code: "08055", description: "driving tractor" },
    { value: 8.3, code: "08057", description: "felling trees, large size" },
    { value: 5.3, code: "08058", description: "felling trees, small-medium size" },
    { value: 5.8, code: "08060", description: "gardening with heavy power tools, tilling a garden, chain saw" },
    { value: 2.3, code: "08065", description: "gardening, using containers, older adults > 60 years" },
    { value: 4.0, code: "08070", description: "irrigation channels, opening and closing ports" },
    { value: 6.3, code: "08080", description: "laying crushed rock" },
    { value: 5.0, code: "08090", description: "laying sod" },
    { value: 5.5, code: "08095", description: "mowing lawn, general" },
    { value: 2.5, code: "08100", description: "mowing lawn, riding mower (Taylor Code 550)" },
    { value: 6.0, code: "08110", description: "mowing lawn, walk, hand mower (Taylor Code 570)" },
    { value: 5.0, code: "08120", description: "mowing lawn, walk, power mower, moderate or vigorous effort" },
    { value: 4.5, code: "08125", description: "mowing lawn, power mower, light or moderate effort (Taylor Code 590)" },
    { value: 2.5, code: "08130", description: "operating snow blower, walking" },
    { value: 2.0, code: "08135", description: "planting, potting, transplanting seedlings or plants, light effort" },
    { value: 4.3, code: "08140", description: "planting seedlings, shrub, stooping, moderate effort" },
    { value: 4.3, code: "08145", description: "planting crops or garden, stooping, moderate effort" },
    { value: 4.5, code: "08150", description: "planting trees" },
    { value: 3.8, code: "08160", description: "raking lawn or leaves, moderate effort" },
    { value: 4.0, code: "08165", description: "raking lawn (Taylor Code 600)" },
    { value: 4.0, code: "08170", description: "raking roof with snow rake" },
    { value: 3.0, code: "08180", description: "riding snow blower" },
    { value: 4.0, code: "08190", description: "sacking grass, leaves" },
    { value: 5.5, code: "08192", description: "shoveling dirt or mud" },
    { value: 5.3, code: "08195", description: "shoveling snow, by hand, moderate effort" },
    { value: 6.0, code: "08200", description: "shovelling snow, by hand (Taylor Code 610)" },
    { value: 7.5, code: "08202", description: "shoveling snow, by hand, vigorous effort" },
    { value: 4.0, code: "08210", description: "trimming shrubs or trees, manual cutter" },
    { value: 3.5, code: "08215", description: "trimming shrubs or trees, power cutter, using leaf blower, edge, moderate effort" },
    { value: 3.0, code: "08220", description: "walking, applying fertilizer or seeding a lawn, push applicator" },
    { value: 1.5, code: "08230", description: "watering lawn or garden, standing or walking" },
    { value: 3.5, code: "08239", description: "weeding, cultivating garden, light-to-moderate effort" },
    { value: 4.5, code: "08240", description: "weeding, cultivating garden (Taylor Code 580)" },
    { value: 5.0, code: "08241", description: "weeding, cultivating garden, using a hoe, moderate-to-vigorous effort" },
    { value: 3.8, code: "08245", description: "gardening, general, moderate effort" },
    { value: 3.5, code: "08246", description: "picking fruit off trees, picking fruits/vegetables, moderate effort" },
    { value: 4.5, code: "08248", description: "picking fruit off trees, gleaning fruits, picking fruits/vegetables, climbing ladder to pick fruit, vigorous effort" },
    { value: 3.3, code: "08250", description: "implied walking/standing - picking up yard, light, picking flowers or vegetables" },
    { value: 3.0, code: "08251", description: "walking, gathering gardening tools" },
    { value: 5.5, code: "08255", description: "wheelbarrow, pushing garden cart or wheelbarrow" },
    { value: 3.0, code: "08260", description: "yard work, general, light effort" },
    { value: 4.0, code: "08261", description: "yard work, general, moderate effort" },
    { value: 6.0, code: "08262", description: "yard work, general, vigorous effort" },
    { value: 1.5, code: "09000", description: "board game playing, sitting" },
    { value: 2.5, code: "09005", description: "casino gambling, standing" },
    { value: 1.5, code: "09010", description: "card playing, sitting" },
    { value: 1.5, code: "09013", description: "chess game, sitting" },
    { value: 1.5, code: "09015", description: "copying documents, standing" },
    { value: 1.8, code: "09020", description: "drawing, writing, painting, standing" },
    { value: 1.0, code: "09025", description: "laughing, sitting" },
    { value: 1.3, code: "09030", description: "sitting, reading, book, newspaper, etc." },
    { value: 1.3, code: "09040", description: "sitting, writing, desk work, typing" },
    { value: 1.0, code: "09045", description: "sitting, playing traditional video game, computer game" },
    { value: 1.8, code: "09050", description: "standing, talking in person, on the phone, computer, or text messaging, light effort" },
    { value: 1.5, code: "09055", description: "sitting, talking in person, on the phone, computer, or text messaging, light effort" },
    { value: 1.3, code: "09060", description: "sitting, studying, general, including reading and/or writing, light effort" },
    { value: 1.8, code: "09065", description: "sitting, in class, general, including note-taking or class discussion" },
    { value: 1.8, code: "09070", description: "standing, reading" },
    { value: 2.5, code: "09071", description: "standing, miscellaneous" },
    { value: 1.8, code: "09075", description: "sitting, arts and crafts,\\u00a0 carving wood, weaving, spinning wool, light effort" },
    { value: 3.0, code: "09080", description: "sitting, arts and crafts,\\u00a0 carving wood, weaving, spinning wool, moderate effort" },
    { value: 2.5, code: "09085", description: "standing, arts and crafts, sand painting, carving, weaving, light effort" },
    { value: 3.3, code: "09090", description: "standing, arts and crafts, sand painting, carving, weaving, moderate effort" },
    { value: 3.5, code: "09095", description: "standing, arts and crafts, sand painting, carving, weaving, vigorous effort" },
    { value: 1.8, code: "09100", description: "retreat/family reunion activities involving sitting, relaxing, talking, eating" },
    { value: 3.0, code: "09101", description: "retreat/family reunion activities involving playing games with children" },
    { value: 2.0, code: "09105", description: "touring/traveling/vacation involving riding in a vehicle" },
    { value: 3.5, code: "09106", description: "touring/traveling/vacation involving walking" },
    { value: 2.5, code: "09110", description: "camping involving standing, walking, sitting, light-to-moderate effort" },
    { value: 1.5, code: "09115", description: "sitting at a sporting event, spectator" },
    { value: 1.8, code: "10010", description: "accordion, sitting" },
    { value: 2.3, code: "10020", description: "cello, sitting" },
    { value: 2.3, code: "10030", description: "conducting orchestra, standing" },
    { value: 3.8, code: "10040", description: "drums, sitting" },
    { value: 3.0, code: "10045", description: "drumming (e.g., bongo, conga, benbe), moderate, sitting" },
    { value: 2.0, code: "10050", description: "flute, sitting" },
    { value: 1.8, code: "10060", description: "horn, standing" },
    { value: 2.3, code: "10070", description: "piano, sitting" },
    { value: 3.5, code: "10080", description: "trombone, standing" },
    { value: 1.8, code: "10090", description: "trumpet, standing" },
    { value: 2.5, code: "10100", description: "violin, sitting" },
    { value: 1.8, code: "10110", description: "woodwind, sitting" },
    { value: 2.0, code: "10120", description: "guitar, classical, folk, sitting" },
    { value: 3.0, code: "10125", description: "guitar, rock and roll band, standing" },
    { value: 4.0, code: "10130", description: "marching band, baton twirling, walking, moderate pace, general" },
    { value: 5.5, code: "10131", description: "marching band, playing an instrument, walking, brisk pace, general" },
    { value: 3.5, code: "10135", description: "marching band, drum major, walking" },
    { value: 2.3, code: "11003", description: "active workstation, treadmill desk, walking" },
    { value: 3.0, code: "11006", description: "airline flight attendant" },
    { value: 4.0, code: "11010", description: "bakery, general, moderate effort" },
    { value: 2.0, code: "11015", description: "bakery, light effort" },
    { value: 2.3, code: "11020", description: "bookbinding" },
    { value: 6.0, code: "11030", description: "building road, driving heavy machinery" },
    { value: 2.0, code: "11035", description: "building road, directing traffic, standing" },
    { value: 2.5, code: "11038", description: "carpentry, general, light effort" },
    { value: 4.3, code: "11040", description: "carpentry, general, moderate effort" },
    { value: 7.0, code: "11042", description: "carpentry, general, heavy or vigorous effort" },
    { value: 8.0, code: "11050", description: "carrying heavy loads (e.g., bricks, tools)" },
    { value: 8.0, code: "11060", description: "carrying moderate loads up stairs, moving boxes 25-49 lbs" },
    { value: 4.0, code: "11070", description: "chambermaid, hotel housekeeper, making bed, cleaning bathroom, pushing cart" },
    { value: 5.3, code: "11080", description: "coal mining, drilling coal, rock" },
    { value: 5.0, code: "11090", description: "coal mining, erecting supports" },
    { value: 5.5, code: "11100", description: "coal mining, general" },
    { value: 6.3, code: "11110", description: "coal mining, shoveling coal" },
    { value: 2.5, code: "11115", description: "cook, chef" },
    { value: 4.0, code: "11120", description: "construction, outside, remodeling, new structures (e.g., roof repair, miscellaneous" },
    { value: 2.3, code: "11125", description: "custodial work, light effort (e.g., cleaning sink and toilet, dusting, vacuuming, light cleaning)" },
    { value: 3.8, code: "11126", description: "custodial work, moderate effort (e.g., electric buffer, feathering arena floors, mopping, taking out trash, vacuuming)" },
    { value: 2.0, code: "11128", description: "driving delivery truck, taxi, shuttle bus, school bus" },
    { value: 3.3, code: "11130", description: "electrical work (e.g., hook up wire, tapping-splicing)" },
    { value: 1.8, code: "11135", description: "engineer (e.g., mechanical or electrical)" },
    { value: 7.8, code: "11145", description: "farming, vigorous effort (e.g., baling hay, cleaning barn)" },
    { value: 4.8, code: "11146", description: "farming, moderate effort (e.g., feeding animals, chasing cattle by walking and/or horseback, spreading manure, harvesting crops)" },
    { value: 2.0, code: "11147", description: "farming, light effort (e.g., cleaning animal sheds, preparing animal feed)" },
    { value: 2.8, code: "11170", description: "farming, driving tasks (e.g., driving tractor or harvester)" },
    { value: 3.5, code: "11180", description: "farming, feeding small animals" },
    { value: 4.3, code: "11190", description: "farming, feeding cattle, horses" },
    { value: 4.3, code: "11191", description: "farming, hauling water for animals, general hauling water" },
    { value: 4.5, code: "11192", description: "farming, taking care of animals (e.g., grooming, brushing, shearing sheep, assisting with birthing, medical care, branding), general" },
    { value: 3.8, code: "11195", description: "farming, rice, planting, grain milling activities" },
    { value: 3.5, code: "11210", description: "farming, milking by hand, cleaning pails, moderate effort" },
    { value: 1.3, code: "11220", description: "farming, milking by machine, light effort" },
    { value: 8.0, code: "11240", description: "fire fighter, general" },
    { value: 6.8, code: "11244", description: "fire fighter, rescue victim, automobile accident, using pike pole" },
    { value: 8.0, code: "11245", description: "fire fighter, raising and climbing ladder with full gear, simulated fire suppression" },
    { value: 9.0, code: "11246", description: "fire fighter, hauling hoses on ground, carrying/hoisting equipment, breaking down walls, wearing full gear" },
    { value: 3.5, code: "11247", description: "fishing, commercial, light effort" },
    { value: 5.0, code: "11248", description: "fishing, commercial, moderate effort" },
    { value: 7.0, code: "11249", description: "fishing, commercial, vigorous effort" },
    { value: 17.5, code: "11250", description: "forestry, ax chopping, very fast, 1.25 kg axe, 51 blows/min, extremely vigorous effort" },
    { value: 5.0, code: "11260", description: "forestry, ax chopping, slow, 1.25 kg axe, 19 blows/min, moderate effort" },
    { value: 8.0, code: "11262", description: "forestry, ax chopping, fast, 1.25 kg axe, 35 blows/min, vigorous effort" },
    { value: 4.5, code: "11264", description: "forestry, moderate effort (e.g., sawing wood with power saw, weeding, hoeing)" },
    { value: 8.0, code: "11266", description: "forestry, vigorous effort (e.g., barking, felling, or trimming trees, carrying or stacking logs, felling trees, planting seeds, sawing lumber by hand )" },
    { value: 4.5, code: "11370", description: "furriery" },
    { value: 4.0, code: "11375", description: "garbage collector, walking, dumping bins into truck" },
    { value: 1.8, code: "11378", description: "hairstylist (e.g., plaiting hair, manicure, make-up artist)" },
    { value: 7.3, code: "11380", description: "horse grooming, including feeding, cleaning stalls, bathing, brushing, clipping, longeing and exercising horses." },
    { value: 4.3, code: "11381", description: "horse, feeding, watering, cleaning stalls, implied walking and lifting loads" },
    { value: 7.3, code: "11390", description: "horse racing, galloping" },
    { value: 5.8, code: "11400", description: "horse racing, trotting" },
    { value: 3.8, code: "11410", description: "horse racing, walking" },
    { value: 3.0, code: "11413", description: "kitchen maid" },
    { value: 4.0, code: "11415", description: "lawn keeper, yard work, general" },
    { value: 3.3, code: "11418", description: "laundry worker" },
    { value: 3.0, code: "11420", description: "locksmith" },
    { value: 3.0, code: "11430", description: "machine tooling (e.g., machining, working sheet metal, machine fitter, operating lathe, welding) light-to-moderate effort" },
    { value: 5.0, code: "11450", description: "machine tooling, operating punch press, moderate effort" },
    { value: 1.8, code: "11472", description: "manager, property" },
    { value: 2.8, code: "11475", description: "manual or unskilled labor, general, light effort" },
    { value: 4.5, code: "11476", description: "manual or unskilled labor, general, moderate effort" },
    { value: 6.5, code: "11477", description: "manual or unskilled labor, general, vigorous effort" },
    { value: 4.3, code: "11480", description: "masonry, concrete, moderate effort" },
    { value: 2.5, code: "11482", description: "masonry, concrete, light effort" },
    { value: 4.0, code: "11485", description: "massage therapist, standing" },
    { value: 7.5, code: "11490", description: "moving, carrying or pushing heavy objects, 75 lbs or more, only active time (e.g., desks, moving van work)" },
    { value: 12.0, code: "11495", description: "skindiving or SCUBA diving as a frogman, Navy Seal" },
    { value: 2.5, code: "11500", description: "operating heavy duty equipment, automated, not driving" },
    { value: 4.5, code: "11510", description: "orange grove work, picking fruit" },
    { value: 3.3, code: "11514", description: "painting,house, furniture, moderate effort" },
    { value: 3.0, code: "11516", description: "plumbing activities" },
    { value: 2.0, code: "11520", description: "printing, paper industry worker, standing" },
    { value: 2.5, code: "11525", description: "police, directing traffic, standing" },
    { value: 2.5, code: "11526", description: "police, driving a squad car, sitting" },
    { value: 1.3, code: "11527", description: "police, riding in a squad car, sitting" },
    { value: 4.0, code: "11528", description: "police, making an arrest, standing" },
    { value: 2.3, code: "11529", description: "postal carrier, walking to deliver mail" },
    { value: 2.0, code: "11530", description: "shoe repair, general" },
    { value: 7.8, code: "11540", description: "shoveling, digging ditches" },
    { value: 8.8, code: "11550", description: "shoveling, more than 16 pounds/minute, deep digging, vigorous effort" },
    { value: 5.0, code: "11560", description: "shoveling, less than 10 pounds/minute, moderate effort" },
    { value: 6.5, code: "11570", description: "shoveling, 10 to 15 pounds/minute, vigorous effort" },
    { value: 1.5, code: "11580", description: "sitting tasks, light effort (e.g., office work, chemistry lab work, computer work, light assembly repair, watch repair, reading, desk work)" },
    { value: 1.5, code: "11585", description: "sitting meetings, light effort, general, and/or with talking involved (e.g., eating at a business meeting)" },
    { value: 2.5, code: "11590", description: "sitting tasks, moderate effort (e.g., pushing heavy levers, riding mower/forklift, crane operation)" },
    { value: 2.8, code: "11593", description: "sitting, teaching stretching or yoga, or light effort exercise class" },
    { value: 3.0, code: "11600", description: "standing tasks, light effort (e.g., bartending, store clerk, assembling, filing, duplicating, librarian, putting up a Christmas tree, standing and talking at work, changing clothes when teaching physical education,standing)" },
    { value: 3.0, code: "11610", description: "standing, light/moderate effort (e.g., assemble/repair heavy parts, welding,stocking parts,auto repair,standing, packing boxes, nursing patient care)" },
    { value: 4.5, code: "11615", description: "standing, moderate effort, lifting items continuously, 10 \\u2013 20 lbs, with limited walking or resting" },
    { value: 3.5, code: "11620", description: "standing, moderate effort, intermittent lifting 50 lbs, hitch/twisting ropes" },
    { value: 4.5, code: "11630", description: "standing, moderate/heavy tasks (e.g., lifting more than 50 lbs, masonry, painting, paper hanging)" },
    { value: 5.3, code: "11708", description: "steel mill, moderate effort (e.g., fettling, forging, tipping molds)" },
    { value: 8.3, code: "11710", description: "steel mill, vigorous effort (e.g., hand rolling, merchant mill rolling, removing slag, tending furnace)" },
    { value: 2.3, code: "11720", description: "tailoring, cutting fabric" },
    { value: 2.5, code: "11730", description: "tailoring, general" },
    { value: 1.8, code: "11740", description: "tailoring, hand sewing" },
    { value: 2.5, code: "11750", description: "tailoring, machine sewing" },
    { value: 3.5, code: "11760", description: "tailoring, pressing" },
    { value: 2.0, code: "11763", description: "tailoring, weaving, light effort (e.g., finishing operations, washing, dyeing, inspecting cloth, counting yards, paperwork)" },
    { value: 4.0, code: "11765", description: "tailoring, weaving, moderate effort (e.g., spinning and weaving operations, delivering boxes of yam to spinners, loading of warp bean, pinwinding, conewinding, warping, cloth cutting)" },
    { value: 6.5, code: "11766", description: "truck driving, loading and unloading truck, tying down load, standing, walking and carrying heavy loads" },
    { value: 1.3, code: "11770", description: "typing, electric, manual or computer" },
    { value: 6.3, code: "11780", description: "using heavy power tools such as pneumatic tools (e.g., jackhammers, drills)" },
    { value: 8.0, code: "11790", description: "using heavy tools (not power) such as shovel, pick, tunnel bar, spade" },
    { value: 2.0, code: "11791", description: "walking on job, less than 2.0 mph, very slow speed, in office or lab area" },
    { value: 3.5, code: "11792", description: "walking on job, 3.0 mph, in office, moderate speed, not carrying anything" },
    { value: 4.3, code: "11793", description: "walking on job, 3.5 mph, in office, brisk speed, not carrying anything" },
    { value: 3.5, code: "11795", description: "walking on job, 2.5 mph, slow speed and carrying light objects less than 25 pounds" },
    { value: 3.0, code: "11796", description: "walking, gathering things at work, ready to leave" },
    { value: 3.8, code: "11797", description: "walking, 2.5 mph, slow speed, carrying heavy objects more than 25 lbs" },
    { value: 4.5, code: "11800", description: "walking, 3.0 mph, moderately and carrying light objects less than 25 lbs" },
    { value: 3.5, code: "11805", description: "walking, pushing a wheelchair" },
    { value: 4.8, code: "11810", description: "walking, 3.5 mph, briskly and carrying objects less than 25 pounds" },
    { value: 5.0, code: "11820", description: "walking or walk downstairs or standing, carrying objects about 25 to 49 pounds" },
    { value: 6.5, code: "11830", description: "walking or walk downstairs or standing, carrying objects about 50 to 74 pounds" },
    { value: 7.5, code: "11840", description: "walking or walk downstairs or standing, carrying objects about 75 to 99 pounds" },
    { value: 8.5, code: "11850", description: "walking or walk downstairs or standing, carrying objects about 100 pounds or over" },
    { value: 3.0, code: "11870", description: "working in scene shop, theater actor, backstage employee" },
    { value: 6.0, code: "12010", description: "jog/walk combination (jogging component of less than 10 minutes) (Taylor Code 180)" },
    { value: 7.0, code: "12020", description: "jogging, general" },
    { value: 8.0, code: "12025", description: "jogging, in place" },
    { value: 4.5, code: "12027", description: "jogging, on a mini-tramp" },
    { value: 6.0, code: "12029", description: "running, 4 mph (15 min/mile)" },
    { value: 8.3, code: "12030", description: "running, 5 mph (12 min/mile)" },
    { value: 9.0, code: "12040", description: "running, 5.2 mph (11.5 min/mile)" },
    { value: 9.8, code: "12050", description: "running, 6 mph (10 min/mile)" },
    { value: 10.5, code: "12060", description: "running, 6.7 mph (9 min/mile)" },
    { value: 11.0, code: "12070", description: "running, 7 mph (8.5 min/mile)" },
    { value: 11.8, code: "12080", description: "running, 7.5 mph (8 min/mile)" },
    { value: 11.8, code: "12090", description: "running, 8 mph (7.5 min/mile)" },
    { value: 12.3, code: "12100", description: "running, 8.6 mph (7 min/mile)" },
    { value: 12.8, code: "12110", description: "running, 9 mph (6.5 min/mile)" },
    { value: 14.5, code: "12120", description: "running, 10 mph (6 min/mile)" },
    { value: 16.0, code: "12130", description: "running, 11 mph (5.5 min/mile)" },
    { value: 19.0, code: "12132", description: "running, 12 mph (5 min/mile)" },
    { value: 19.8, code: "12134", description: "running, 13 mph (4.6 min/mile)" },
    { value: 23.0, code: "12135", description: "running, 14 mph (4.3 min/mile)" },
    { value: 9.0, code: "12140", description: "running, cross country" },
    { value: 8.0, code: "12150", description: "running, (Taylor code 200)" },
    { value: 15.0, code: "12170", description: "running, stairs, up" },
    { value: 10.0, code: "12180", description: "running, on a track, team practice" },
    { value: 8.0, code: "12190", description: "running, training, pushing a wheelchair or baby carrier" },
    { value: 13.3, code: "12200", description: "running, marathon" },
    { value: 2.3, code: "13000", description: "getting ready for bed, general, standing" },
    { value: 1.8, code: "13009", description: "sitting on toilet, eliminating while standing or squating" },
    { value: 1.5, code: "13010", description: "bathing, sitting" },
    { value: 2.5, code: "13020", description: "dressing, undressing, standing or sitting" },
    { value: 1.5, code: "13030", description: "eating, sitting" },
    { value: 2.0, code: "13035", description: "talking and eating or eating only, standing" },
    { value: 1.5, code: "13036", description: "taking medication, sitting or standing" },
    { value: 2.0, code: "13040", description: "grooming, washing hands, shaving, brushing teeth, putting on make-up, sitting or standing" },
    { value: 2.5, code: "13045", description: "hairstyling, standing" },
    { value: 1.3, code: "13046", description: "having hair or nails done by someone else, sitting" },
    { value: 2.0, code: "13050", description: "showering, toweling off, standing" },
    { value: 2.8, code: "14010", description: "active, vigorous effort" },
    { value: 1.8, code: "14020", description: "general, moderate effort" },
    { value: 1.3, code: "14030", description: "passive, light effort, kissing, hugging" },
    { value: 5.5, code: "15000", description: "Alaska Native Games, Eskimo Olympics, general" },
    { value: 4.3, code: "15010", description: "archery, non-hunting" },
    { value: 7.0, code: "15020", description: "badminton, competitive (Taylor Code 450)" },
    { value: 5.5, code: "15030", description: "badminton, social singles and doubles, general" },
    { value: 8.0, code: "15040", description: "basketball, game (Taylor Code 490)" },
    { value: 6.0, code: "15050", description: "basketball, non-game, general (Taylor Code 480)" },
    { value: 6.5, code: "15055", description: "basketball, general" },
    { value: 7.0, code: "15060", description: "basketball, officiating (Taylor Code 500)" },
    { value: 4.5, code: "15070", description: "basketball, shooting baskets" },
    { value: 9.3, code: "15072", description: "basketball, drills, practice" },
    { value: 7.8, code: "15075", description: "basketball, wheelchair" },
    { value: 2.5, code: "15080", description: "billiards" },
    { value: 3.0, code: "15090", description: "bowling (Taylor Code 390)" },
    { value: 3.8, code: "15092", description: "bowling, indoor, bowling alley" },
    { value: 12.8, code: "15100", description: "boxing, in ring, general" },
    { value: 5.5, code: "15110", description: "boxing, punching bag" },
    { value: 7.8, code: "15120", description: "boxing, sparring" },
    { value: 7.0, code: "15130", description: "broomball" },
    { value: 5.8, code: "15135", description: "children\\u2019s games, adults playing (e.g., hopscotch, 4-square, dodge ball, playground apparatus, t-ball, tetherball, marbles, jacks, arcade games), moderate effort" },
    { value: 6.0, code: "15138", description: "cheerleading, gymnastic moves, competitive" },
    { value: 4.0, code: "15140", description: "coaching, football, soccer, basketball, baseball, swimming, etc." },
    { value: 8.0, code: "15142", description: "coaching, actively playing sport with players" },
    { value: 4.8, code: "15150", description: "cricket, batting, bowling, fielding" },
    { value: 3.3, code: "15160", description: "croquet" },
    { value: 4.0, code: "15170", description: "curling" },
    { value: 2.5, code: "15180", description: "darts, wall or lawn" },
    { value: 6.0, code: "15190", description: "drag racing, pushing or driving a car" },
    { value: 8.5, code: "15192", description: "auto racing, open wheel" },
    { value: 6.0, code: "15200", description: "fencing" },
    { value: 8.0, code: "15210", description: "football, competitive" },
    { value: 8.0, code: "15230", description: "football, touch, flag, general (Taylor Code 510)" },
    { value: 4.0, code: "15232", description: "football, touch, flag, light effort" },
    { value: 2.5, code: "15235", description: "football or baseball, playing catch" },
    { value: 3.0, code: "15240", description: "frisbee playing, general" },
    { value: 8.0, code: "15250", description: "frisbee, ultimate" },
    { value: 4.8, code: "15255", description: "golf, general" },
    { value: 4.3, code: "15265", description: "golf, walking, carrying clubs" },
    { value: 3.0, code: "15270", description: "golf, miniature, driving range" },
    { value: 5.3, code: "15285", description: "golf, walking, pulling clubs" },
    { value: 3.5, code: "15290", description: "golf, using power cart (Taylor Code 070)" },
    { value: 3.8, code: "15300", description: "gymnastics, general" },
    { value: 4.0, code: "15310", description: "hacky sack" },
    { value: 12.0, code: "15320", description: "handball, general (Taylor Code 520)" },
    { value: 8.0, code: "15330", description: "handball, team" },
    { value: 4.0, code: "15335", description: "high ropes course, multiple elements" },
    { value: 3.5, code: "15340", description: "hang gliding" },
    { value: 7.8, code: "15350", description: "hockey, field" },
    { value: 8.0, code: "15360", description: "hockey, ice, general" },
    { value: 10.0, code: "15362", description: "hockey, ice, competitive" },
    { value: 5.5, code: "15370", description: "horseback riding, general" },
    { value: 4.3, code: "15375", description: "horse chores, feeding, watering, cleaning stalls, implied walking and lifting loads" },
    { value: 4.5, code: "15380", description: "saddling, cleaning, grooming, harnessing and unharnessing horse" },
    { value: 5.8, code: "15390", description: "horseback riding, trotting" },
    { value: 7.3, code: "15395", description: "horseback riding, canter or gallop" },
    { value: 3.8, code: "15400", description: "horseback riding,walking" },
    { value: 9.0, code: "15402", description: "horseback riding, jumping" },
    { value: 1.8, code: "15408", description: "horse cart, driving, standing or sitting" },
    { value: 3.0, code: "15410", description: "horseshoe pitching, quoits" },
    { value: 12.0, code: "15420", description: "jai alai" },
    { value: 5.3, code: "15425", description: "martial arts, different types, slower pace, novice performers, practice" },
    { value: 10.3, code: "15430", description: "martial arts, different types, moderate pace (e.g., judo, jujitsu, karate, kick boxing, tae kwan do, tai-bo, Muay Thai boxing)" },
    { value: 4.0, code: "15440", description: "juggling" },
    { value: 7.0, code: "15450", description: "kickball" },
    { value: 8.0, code: "15460", description: "lacrosse" },
    { value: 3.3, code: "15465", description: "lawn bowling, bocce ball, outdoor" },
    { value: 4.0, code: "15470", description: "moto-cross, off-road motor sports, all-terrain vehicle, general" },
    { value: 9.0, code: "15480", description: "orienteering" },
    { value: 10.0, code: "15490", description: "paddleball, competitive" },
    { value: 6.0, code: "15500", description: "paddleball, casual, general (Taylor Code 460)" },
    { value: 8.0, code: "15510", description: "polo, on horseback" },
    { value: 10.0, code: "15520", description: "racquetball, competitive" },
    { value: 7.0, code: "15530", description: "racquetball, general (Taylor Code 470)" },
    { value: 8.0, code: "15533", description: "rock or mountain climbing (Taylor Code 470) " },
    { value: 7.5, code: "15535", description: "rock climbing, ascending rock, high difficulty" },
    { value: 5.8, code: "15537", description: "rock climbing, ascending or traversing rock, low-to-moderate difficulty" },
    { value: 5.0, code: "15540", description: "rock climbing, rappelling" },
    { value: 4.0, code: "15542", description: "rodeo sports, general, light effort" },
    { value: 5.5, code: "15544", description: "rodeo sports, general, moderate effort" },
    { value: 7.0, code: "15546", description: "rodeo sports, general, vigorous effort" },
    { value: 12.3, code: "15550", description: "rope jumping, fast pace, 120-160 skips/min" },
    { value: 11.8, code: "15551", description: "rope jumping, moderate pace, 100-120 skips/min, general,\\u00a0 2 foot skip, plain bounce" },
    { value: 8.8, code: "15552", description: "rope jumping, slow pace, < 100 skips/min, 2 foot skip, rhythm bounce" },
    { value: 8.3, code: "15560", description: "rugby, union, team, competitive" },
    { value: 6.3, code: "15562", description: "rugby, touch, non-competitive" },
    { value: 3.0, code: "15570", description: "shuffleboard" },
    { value: 5.0, code: "15580", description: "skateboarding, general, moderate effort" },
    { value: 6.0, code: "15582", description: "skateboarding, competitive, vigorous effort" },
    { value: 7.0, code: "15590", description: "skating, roller (Taylor Code 360)" },
    { value: 7.5, code: "15591", description: "rollerblading, in-line skating, 14.4 km/h (9.0 mph), recreational pace" },
    { value: 9.8, code: "15592", description: "rollerblading, in-line skating, 17.7 km/h (11.0 mph), moderate pace, exercise training" },
    { value: 12.3, code: "15593", description: "rollerblading, in-line skating, 21.0 to 21.7 km/h (13.0 to 13.6 mph), fast pace, exercise training" },
    { value: 14.0, code: "15594", description: "rollerblading, in-line skating, 24.0 km/h (15.0 mph), maximal effort" },
    { value: 3.5, code: "15600", description: "skydiving, base jumping, bungee jumping" },
    { value: 10.0, code: "15605", description: "soccer, competitive" },
    { value: 7.0, code: "15610", description: "soccer, casual, general (Taylor Code 540)" },
    { value: 5.0, code: "15620", description: "softball or baseball, fast or slow pitch, general (Taylor Code 440)" },
    { value: 4.0, code: "15625", description: "softball, practice" },
    { value: 4.0, code: "15630", description: "softball, officiating" },
    { value: 6.0, code: "15640", description: "softball,pitching" },
    { value: 3.3, code: "15645", description: "sports spectator, very excited, emotional, physically moving\\u00a0" },
    { value: 12.0, code: "15650", description: "squash (Taylor Code 530)" },
    { value: 7.3, code: "15652", description: "squash, general" },
    { value: 4.0, code: "15660", description: "table tennis, ping pong (Taylor Code 410)" },
    { value: 3.0, code: "15670", description: "tai chi, qi gong, general" },
    { value: 1.5, code: "15672", description: "tai chi, qi gong, sitting, light effort" },
    { value: 7.3, code: "15675", description: "tennis, general" },
    { value: 6.0, code: "15680", description: "tennis, doubles (Taylor Code 430)" },
    { value: 4.5, code: "15685", description: "tennis, doubles" },
    { value: 8.0, code: "15690", description: "tennis, singles (Taylor Code 420)" },
    { value: 5.0, code: "15695", description: "tennis, hitting balls, non-game play, moderate effort" },
    { value: 3.5, code: "15700", description: "trampoline, recreational" },
    { value: 4.5, code: "15702", description: "trampoline, competitive" },
    { value: 4.0, code: "15710", description: "volleyball (Taylor Code 400)" },
    { value: 6.0, code: "15711", description: "volleyball, competitive, in gymnasium" },
    { value: 3.0, code: "15720", description: "volleyball, non-competitive, 6 - 9 member team, general" },
    { value: 8.0, code: "15725", description: "volleyball, beach, in sand" },
    { value: 6.0, code: "15730", description: "wrestling (one match = 5 minutes)" },
    { value: 7.0, code: "15731", description: "wallyball, general" },
    { value: 4.0, code: "15732", description: "track and field (e.g., shot, discus, hammer throw)" },
    { value: 6.0, code: "15733", description: "track and field (e.g., high jump, long jump, triple jump, javelin, pole vault)" },
    { value: 10.0, code: "15734", description: "track and field (e.g., steeplechase, hurdles)" },
    { value: 2.5, code: "16010", description: "automobile or light truck (not a semi) driving" },
    { value: 1.3, code: "16015", description: "riding in a car or truck" },
    { value: 1.3, code: "16016", description: "riding in a bus or train" },
    { value: 1.8, code: "16020", description: "flying airplane or helicopter" },
    { value: 3.5, code: "16030", description: "motor scooter, motorcycle" },
    { value: 6.3, code: "16035", description: "pulling rickshaw" },
    { value: 6.0, code: "16040", description: "pushing plane in and out of hangar" },
    { value: 2.5, code: "16050", description: "truck, semi, tractor, > 1 ton, or bus, driving" },
    { value: 3.5, code: "16060", description: "walking for transportation, 2.8-3.2 mph, level, moderate pace, firm surface" },
    { value: 7.0, code: "17010", description: "backpacking (Taylor Code 050)" },
    { value: 7.8, code: "17012", description: "backpacking, hiking or organized walking with a daypack" },
    { value: 5.0, code: "17020", description: "carrying 15 pound load (e.g. suitcase), level ground or downstairs" },
    { value: 2.3, code: "17021", description: "carrying 15 lb child, slow walking" },
    { value: 8.3, code: "17025", description: "carrying load upstairs, general" },
    { value: 5.0, code: "17026", description: "carrying 1 to 15 lb load, upstairs" },
    { value: 6.0, code: "17027", description: "carrying 16 to 24 lb load, upstairs" },
    { value: 8.0, code: "17028", description: "carrying 25 to 49 lb load, upstairs" },
    { value: 10.0, code: "17029", description: "carrying 50 to 74 lb load, upstairs" },
    { value: 12.0, code: "17030", description: "carrying > 74 lb load, upstairs" },
    { value: 3.5, code: "17031", description: "loading /unloading a car, implied walking" },
    { value: 6.3, code: "17033", description: "climbing hills, no load" },
    { value: 6.5, code: "17035", description: "climbing hills with 0 to 9 lb load" },
    { value: 7.3, code: "17040", description: "climbing hills with 10 to 20 lb load" },
    { value: 8.3, code: "17050", description: "climbing hills with 21 to 42 lb load" },
    { value: 9.0, code: "17060", description: "climbing hills with 42+ lb load" },
    { value: 3.5, code: "17070", description: "descending stairs" },
    { value: 6.0, code: "17080", description: "hiking, cross country (Taylor Code 040)" },
    { value: 5.3, code: "17082", description: "hiking or walking at a normal pace through fields and hillsides" },
    { value: 2.5, code: "17085", description: "bird watching, slow walk" },
    { value: 4.5, code: "17088", description: "marching, moderate speed, military, no pack" },
    { value: 8.0, code: "17090", description: "marching rapidly, military, no pack" },
    { value: 4.0, code: "17100", description: "pushing or pulling stroller with child or walking with children, 2.5 to 3.1 mph" },
    { value: 3.8, code: "17105", description: "pushing a wheelchair, non-occupational\\u00a0" },
    { value: 6.5, code: "17110", description: "race walking" },
    { value: 8.0, code: "17130", description: "stair climbing, using or climbing up ladder (Taylor Code 030)" },
    { value: 4.0, code: "17133", description: "stair climbing, slow pace" },
    { value: 8.8, code: "17134", description: "stair climbing, fast pace" },
    { value: 5.0, code: "17140", description: "using crutches" },
    { value: 2.0, code: "17150", description: "walking, household" },
    { value: 2.0, code: "17151", description: "walking, less than 2.0 mph, level, strolling, very slow" },
    { value: 2.8, code: "17152", description: "walking, 2.0 mph, level, slow pace, firm surface" },
    { value: 3.5, code: "17160", description: "walking for pleasure (Taylor Code 010)" },
    { value: 2.5, code: "17161", description: "walking from house to car or bus, from car or bus to go places, from car or bus to and from the worksite" },
    { value: 2.5, code: "17162", description: "walking to neighbor\\u2019s house or family\\u2019s house for social reasons" },
    { value: 3.0, code: "17165", description: "walking the dog" },
    { value: 3.0, code: "17170", description: "walking, 2.5 mph, level, firm surface" },
    { value: 3.3, code: "17180", description: "walking, 2.5 mph, downhill" },
    { value: 3.5, code: "17190", description: "walking, 2.8 to 3.2 mph, level, moderate pace, firm surface" },
    { value: 4.3, code: "17200", description: "walking, 3.5 mph, level, brisk, firm surface, walking for exercise" },
    { value: 5.3, code: "17210", description: "walking, 2.9 to 3.5 mph, uphill, 1 to 5% grade" },
    { value: 8.0, code: "17211", description: "walking, 2.9 to 3.5 mph, uphill, 6% to 15% grade" },
    { value: 5.0, code: "17220", description: "walking, 4.0 mph, level, firm surface, very brisk pace" },
    { value: 7.0, code: "17230", description: "walking, 4.5 mph, level, firm surface, very, very brisk" },
    { value: 8.3, code: "17231", description: "walking, 5.0 mph, level, firm surface" },
    { value: 9.8, code: "17235", description: "walking, 5.0 mph, uphill, 3% grade" },
    { value: 3.5, code: "17250", description: "walking, for pleasure, work break" },
    { value: 4.8, code: "17260", description: "walking, grass track" },
    { value: 4.5, code: "17262", description: "walking, normal pace, plowed field or sand" },
    { value: 4.0, code: "17270", description: "walking, to work or class (Taylor Code 015)" },
    { value: 2.5, code: "17280", description: "walking, to and from an outhouse" },
    { value: 4.8, code: "17302", description: "walking, for exercise, 3.5 to 4 mph, with ski poles, Nordic walking, level, moderate pace" },
    { value: 9.5, code: "17305", description: "walking, for exercise, 5.0 mph, with ski poles, Nordic walking, level, fast pace" },
    { value: 6.8, code: "17310", description: "walking, for exercise, with ski poles, Nordic walking, uphill" },
    { value: 6.0, code: "17320", description: "walking, backwards, 3.5 mph, level" },
    { value: 8.0, code: "17325", description: "walking, backwards, 3.5 mph, uphill, 5% grade" },
    { value: 2.5, code: "18010", description: "boating, power, driving" },
    { value: 1.3, code: "18012", description: "boating, power, passenger, light" },
    { value: 4.0, code: "18020", description: "canoeing, on camping trip (Taylor Code 270)" },
    { value: 3.3, code: "18025", description: "canoeing, harvesting wild rice, knocking rice off the stalks" },
    { value: 7.0, code: "18030", description: "canoeing, portaging" },
    { value: 2.8, code: "18040", description: "canoeing, rowing, 2.0-3.9 mph, light effort" },
    { value: 5.8, code: "18050", description: "canoeing, rowing, 4.0-5.9 mph, moderate effort" },
    { value: 12.5, code: "18060", description: "canoeing, rowing, kayaking, competition, >6 mph, vigorous effort" },
    { value: 3.5, code: "18070", description: "canoeing, rowing, for pleasure, general (Taylor Code 250)" },
    { value: 12.0, code: "18080", description: "canoeing, rowing, in competition, or crew or sculling (Taylor Code 260)" },
    { value: 3.0, code: "18090", description: "diving, springboard or platform" },
    { value: 5.0, code: "18100", description: "kayaking, moderate effort" },
    { value: 4.0, code: "18110", description: "paddle boat" },
    { value: 3.0, code: "18120", description: "sailing, boat and board sailing, windsurfing, ice sailing, general (Taylor Code 235)" },
    { value: 4.5, code: "18130", description: "sailing, in competition" },
    { value: 3.3, code: "18140", description: "sailing, Sunfish/Laser/Hobby Cat, Keel boats, ocean sailing, yachting, leisure" },
    { value: 6.0, code: "18150", description: "skiing, water or wakeboarding (Taylor Code 220)" },
    { value: 7.0, code: "18160", description: "jet skiing, driving, in water" },
    { value: 15.8, code: "18180", description: "skindiving, fast" },
    { value: 11.8, code: "18190", description: "skindiving, moderate" },
    { value: 7.0, code: "18200", description: "skindiving, scuba diving, general (Taylor Code 310)" },
    { value: 5.0, code: "18210", description: "snorkeling (Taylor Code 310)" },
    { value: 3.0, code: "18220", description: "surfing, body or board, general" },
    { value: 5.0, code: "18222", description: "surfing, body or board, competitive" },
    { value: 6.0, code: "18225", description: "paddle boarding, standing" },
    { value: 9.8, code: "18230", description: "swimming laps, freestyle, fast, vigorous effort" },
    { value: 5.8, code: "18240", description: "swimming laps, freestyle, front crawl, slow, light or moderate effort" },
    { value: 9.5, code: "18250", description: "swimming, backstroke, general, training or competition" },
    { value: 4.8, code: "18255", description: "swimming, backstroke, recreational" },
    { value: 10.3, code: "18260", description: "swimming, breaststroke, general, training or competition" },
    { value: 5.3, code: "18265", description: "swimming, breaststroke, recreational" },
    { value: 13.8, code: "18270", description: "swimming, butterfly, general" },
    { value: 10.0, code: "18280", description: "swimming, crawl, fast speed, ~75 yards/minute, vigorous effort" },
    { value: 8.3, code: "18290", description: "swimming, crawl, medium speed, ~50 yards/minute, vigorous effort" },
    { value: 6.0, code: "18300", description: "swimming, lake, ocean, river (Taylor Codes 280, 295)" },
    { value: 6.0, code: "18310", description: "swimming, leisurely, not lap swimming, general" },
    { value: 7.0, code: "18320", description: "swimming, sidestroke, general" },
    { value: 8.0, code: "18330", description: "swimming, synchronized" },
    { value: 9.8, code: "18340", description: "swimming, treading water, fast, vigorous effort" },
    { value: 3.5, code: "18350", description: "swimming, treading water, moderate effort, general" },
    { value: 2.3, code: "18352", description: "tubing, floating on a river, general" },
    { value: 5.5, code: "18355", description: "water aerobics, water calisthenics" },
    { value: 10.0, code: "18360", description: "water polo" },
    { value: 3.0, code: "18365", description: "water volleyball" },
    { value: 2.5, code: "18367", description: "water walking, light effort, slow pace" },
    { value: 4.5, code: "18368", description: "water walking, moderate effort, moderate pace" },
    { value: 6.8, code: "18369", description: "water walking, vigorous effort, brisk pace" },
    { value: 5.0, code: "18370", description: "whitewater rafting, kayaking, or canoeing" },
    { value: 5.0, code: "18380", description: "windsurfing, not pumping for speed" },
    { value: 11.0, code: "18385", description: "windsurfing or kitesurfing, crossing trial" },
    { value: 13.5, code: "18390", description: "windsurfing, competition, pumping for speed" },
    { value: 7.5, code: "19005", description: "dog sledding, mushing" },
    { value: 2.5, code: "19006", description: "dog sledding, passenger" },
    { value: 6.0, code: "19010", description: "moving ice house, set up/drill holes" },
    { value: 2.0, code: "19011", description: "ice fishing, sitting" },
    { value: 14.0, code: "19018", description: "skating, ice dancing" },
    { value: 5.5, code: "19020", description: "skating, ice, 9 mph or less" },
    { value: 7.0, code: "19030", description: "skating, ice, general (Taylor Code 360)" },
    { value: 9.0, code: "19040", description: "skating, ice, rapidly, more than 9 mph, not competitive" },
    { value: 13.3, code: "19050", description: "skating, speed, competitive" },
    { value: 7.0, code: "19060", description: "ski jumping, climb up carrying skis" },
    { value: 7.0, code: "19075", description: "skiing, general" },
    { value: 6.8, code: "19080", description: "skiing, cross country, 2.5 mph, slow or light effort, ski walking" },
    { value: 9.0, code: "19090", description: "skiing, cross country, 4.0-4.9 mph, moderate speed and effort, general" },
    { value: 12.5, code: "19100", description: "skiing, cross country, 5.0-7.9 mph, brisk speed, vigorous effort" },
    { value: 15.0, code: "19110", description: "skiing, cross country, >8.0 mph, elite skier, racing" },
    { value: 15.5, code: "19130", description: "skiing, cross country, hard snow, uphill, maximum, snow mountaineering" },
    { value: 13.3, code: "19135", description: "skiing, cross-country, skating" },
    { value: 13.5, code: "19140", description: "skiing, cross-country, biathlon, skating technique" },
    { value: 4.3, code: "19150", description: "skiing, downhill, alpine or snowboarding, light effort, active time only" },
    { value: 5.3, code: "19160", description: "skiing, downhill, alpine or snowboarding, moderate effort, general, active time only" },
    { value: 8.0, code: "19170", description: "skiing, downhill, vigorous effort, racing" },
    { value: 12.5, code: "19175", description: "skiing, roller, elite racers" },
    { value: 7.0, code: "19180", description: "sledding, tobogganing, bobsledding, luge (Taylor Code 370)" },
    { value: 5.3, code: "19190", description: "snow shoeing, moderate effort" },
    { value: 10.0, code: "19192", description: "snow shoeing, vigorous effort" },
    { value: 3.5, code: "19200", description: "snowmobiling, driving, moderate" },
    { value: 2.0, code: "19202", description: "snowmobiling, passenger" },
    { value: 5.3, code: "19252", description: "snow shoveling, by hand, moderate effort" },
    { value: 7.5, code: "19254", description: "snow shoveling, by hand, vigorous effort" },
    { value: 2.5, code: "19260", description: "snow blower, walking and pushing" },
    { value: 1.3, code: "20000", description: "sitting in church, in service, attending a ceremony, sitting quietly" },
    { value: 2.0, code: "20001", description: "sitting, playing an instrument at church" },
    { value: 1.8, code: "20005", description: "sitting in church, talking or singing, attending a ceremony, sitting, active participation" },
    { value: 1.3, code: "20010", description: "sitting, reading religious materials at home" },
    { value: 1.3, code: "20015", description: "standing quietly in church, attending a ceremony" },
    { value: 2.0, code: "20020", description: "standing, singing in church, attending a ceremony, standing, active participation" },
    { value: 1.3, code: "20025", description: "kneeling in church or at home, praying" },
    { value: 1.8, code: "20030", description: "standing, talking in church" },
    { value: 2.0, code: "20035", description: "walking in church" },
    { value: 2.0, code: "20036", description: "walking, less than 2.0 mph, very slow" },
    { value: 3.5, code: "20037", description: "walking, 3.0 mph, moderate speed, not carrying anything" },
    { value: 4.3, code: "20038", description: "walking, 3.5 mph, brisk speed, not carrying anything" },
    { value: 2.0, code: "20039", description: "walk/stand combination for religious purposes, usher" },
    { value: 5.0, code: "20040", description: "praise with dance or run, spiritual dancing in church" },
    { value: 2.5, code: "20045", description: "serving food at church" },
    { value: 2.0, code: "20046", description: "preparing food at church" },
    { value: 3.3, code: "20047", description: "washing dishes, cleaning kitchen at church" },
    { value: 1.5, code: "20050", description: "eating at church" },
    { value: 2.0, code: "20055", description: "eating/talking at church or standing eating, American Indian Feast days" },
    { value: 3.3, code: "20060", description: "cleaning church" },
    { value: 4.0, code: "20061", description: "general yard work at church" },
    { value: 3.5, code: "20065", description: "standing, moderate effort (e.g., lifting heavy objects, assembling at fast rate)" },
    { value: 4.5, code: "20095", description: "standing, moderate-to-heavy effort, manual labor, lifting \\u2265 50 lbs, heavy maintenance" },
    { value: 1.3, code: "20100", description: "typing, electric, manual, or computer" },
    { value: 1.5, code: "21000", description: "sitting, meeting, general, and/or with talking involved" },
    { value: 1.5, code: "21005", description: "sitting, light office work, in general" },
    { value: 2.5, code: "21010", description: "sitting, moderate work" },
    { value: 2.3, code: "21015", description: "standing, light work (filing, talking, assembling)" },
    { value: 2.0, code: "21016", description: "sitting, child care, only active periods" },
    { value: 3.0, code: "21017", description: "standing, child care, only active periods" },
    { value: 3.5, code: "21018", description: "walk/run play with children, moderate, only active periods" },
    { value: 5.8, code: "21019", description: "walk/run play with children, vigorous, only active periods" },
    { value: 3.0, code: "21020", description: "standing, light/moderate work (e.g., pack boxes, assemble/repair, set up chairs/furniture)" },
    { value: 3.5, code: "21025", description: "standing, moderate (lifting 50 lbs., assembling at fast rate)" },
    { value: 4.5, code: "21030", description: "standing, moderate/heavy work" },
    { value: 1.3, code: "21035", description: "typing, electric, manual, or computer" },
    { value: 2.0, code: "21040", description: "walking, less than 2.0 mph, very slow" },
    { value: 3.5, code: "21045", description: "walking, 3.0 mph, moderate speed, not carrying anything" },
    { value: 4.3, code: "21050", description: "walking, 3.5 mph, brisk speed, not carrying anything" },
    { value: 3.5, code: "21055", description: "walking, 2.5 mph slowly and carrying objects less than 25 pounds" },
    { value: 4.5, code: "21060", description: "walking, 3.0 mph moderately and carrying objects less than 25 pounds, pushing something" },
    { value: 4.8, code: "21065", description: "walking, 3.5 mph, briskly and carrying objects less than 25 pounds" },
    { value: 3.0, code: "21070", description: "walk/stand combination, for volunteer purposes" },
    { value: 1.5, code: "21000", description: "sitting, meeting, general, and/or with talking involved" },
    { value: 1.5, code: "21005", description: "sitting, light office work, in general" },
    { value: 2.5, code: "21010", description: "sitting, moderate work" },
    { value: 2.3, code: "21015", description: "standing, light work (filing, talking, assembling)" },
    { value: 2.0, code: "21016", description: "sitting, child care, only active periods" },
    { value: 3.0, code: "21017", description: "standing, child care, only active periods" },
    { value: 3.5, code: "21018", description: "walk/run play with children, moderate, only active periods" },
    { value: 5.8, code: "21019", description: "walk/run play with children, vigorous, only active periods" },
    { value: 3.0, code: "21020", description: "standing, light/moderate work (e.g., pack boxes, assemble/repair, set up chairs/furniture)" },
    { value: 3.5, code: "21025", description: "standing, moderate (lifting 50 lbs., assembling at fast rate)" },
    { value: 4.5, code: "21030", description: "standing, moderate/heavy work" },
    { value: 1.3, code: "21035", description: "typing, electric, manual, or computer" },
    { value: 2.0, code: "21040", description: "walking, less than 2.0 mph, very slow" },
    { value: 3.5, code: "21045", description: "walking, 3.0 mph, moderate speed, not carrying anything" },
    { value: 4.3, code: "21050", description: "walking, 3.5 mph, brisk speed, not carrying anything" },
    { value: 3.5, code: "21055", description: "walking, 2.5 mph slowly and carrying objects less than 25 pounds" },
    { value: 4.5, code: "21060", description: "walking, 3.0 mph moderately and carrying objects less than 25 pounds, pushing something" },
    { value: 4.8, code: "21065", description: "walking, 3.5 mph, briskly and carrying objects less than 25 pounds" },
    { value: 3.0, code: "21070", description: "walk/stand combination, for volunteer purposes" }
];
/*
@description get METs from 2011 Compendium of Physical Activities
@param {string} code of MET
@return {MET} MET instance of selected code
*/
function byCode(code) {
    for (let entry of mets) {
        if (entry.code === code)
            return entry;
    }
    return null;
}
/*
@description estimate METs based on kcals, weight in kg, and time spent exercisin
@param {Number} kcal expended in exercise
@param {Number} body mass prior to exercise in kg
@param {Number} hours spent performing exercise
@returns {Number} MET value
*/
function estimateMETs(kcal, kg, hours) {
    return kcal / kg / hours;
}
/*
@description estimate weight of individual in exercise
@param {Number} kcals expended in exercise
@param {Number} mets MET value of exercise
@param {Number} hours spent performing exercise
@returns {Number} body mass prior to exercise in kg
*/
function estimateKg(kcal, mets, hours) {
    return kcal / (mets * hours);
}
/*
@description estimate time spent exercising in hours
@param {Number} kcals expended in exercise
@param {Number} mets MET value of exercise
@param {Number} body mass prior to exercise in kg
@returns {Number} hours spent performing exercise
*/
function estimateHours(kcal, mets, kg) {
    return kcal / (mets * kg);
}
function toKCal(mets, weight) {
    return (mets * 3.5 * weight) / 200;
}
function fromVO2(vO2) {
    return vO2 / 3.5;
}
function karvonen(mets, intensity) {
    return intensity * (mets - 1) + 1;
}
function target(vO2Max, intensity) {
    const mets = fromVO2(vO2Max);
    const targetMets = karvonen(mets, intensity);
    return targetMets;
}

var mets$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    byCode: byCode,
    estimateHours: estimateHours,
    estimateKg: estimateKg,
    estimateMETs: estimateMETs,
    fromVO2: fromVO2,
    karvonen: karvonen,
    target: target,
    toKCal: toKCal
});

/**
 * Abstract base class for aerobic performance models.
 * @class PerformanceModel
 * @abstract
 */
class PerformanceModel {
    t1;
    d1;
    /**
     * @constructor
     * @param {number} d1 - Initial distance
     * @param {number} t1 - Initial time
     */
    constructor(d1, t1) {
        this.d1 = d1;
        this.t1 = t1;
    }
    /**
     * Estimate time for a given distance.
     * @abstract
     * @param {number} d2 - Target distance
     * @returns {number} Estimated time
     */
    time(_d2) { return 0; }
    /**
     * Estimate distance for a given time.
     * @abstract
     * @param {number} t2 - Target time
     * @returns {number} Estimated distance
     */
    distance(_t2) { return 0; }
}
/**
 * Riegel Running Model for estimating performance.
 * @class Riegel
 * @extends PerformanceModel
 * @implements DistanceEstimatable, TimeEstimatable
 */
class Riegel extends PerformanceModel {
    /*
      Riegel Running Model
      @description Error rate 4.1% according to http://cs229.stanford.edu/proj2015/247_report.pdf
      @static
      @param {Number} t1 = time
      @param {Number} d1 = old distance
      @param {Number} d2 = new Fit.models.aerobic.distance
      @param {Number} factor = fatigue factor in a given competition, defaults to model default: 1.06
      d1 & d2 must be in the same unit
      @returns {Number} t2 = estimated time to travel d2 in same unit as t1
    */
    factor;
    static RUNNINGMEN = 1.07732;
    static RUNNINGMEN40 = 1.05352;
    static RUNNINGMEN50 = 1.05374;
    static RUNNINGMEN60 = 1.05603;
    static RUNNINGMEN70 = 1.06370;
    static RUNNINGWOMEN = 1.08283;
    static SWIMMINGMEN = 1.02977;
    static SWIMMINGWOMEN = 1.03256;
    static NORDICMEN = 1.01421;
    static RACEWALKMEN = 1.05379;
    static ROLLERSKATINGMEN = 1.13709;
    static CYCLINGMEN = 1.04834;
    static SPEEDSKATINGMEN = 1.06017;
    /**
     * @constructor
     * @param {number} d1 - Initial distance
     * @param {number} t1 - Initial time
     * @param {number} [factor=1.06] - Fatigue factor
     */
    constructor(d1, t1, factor = 1.06) {
        super(d1, t1);
        this.factor = factor;
    }
    /**
     * Estimate time for a given distance using Riegel's model.
     * @param {number} d2 - Target distance
     * @returns {number} Estimated time
     * @example
     * const riegel = new Fit.models.aerobic.Riegel(10000, 3600, Riegel.RUNNINGMEN);
     * const estimatedTime = riegel.time(21097); // Estimate half-marathon time based on 10K performance
     */
    time(d2) {
        if (this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
            return 0;
        }
        return this.t1 * Math.pow((d2 / this.d1), this.factor);
    }
    /**
     * Estimate distance for a given time using Riegel's model.
     * @param {number} t2 - Target time
     * @returns {number} Estimated distance
     * @example
     * const riegel = new Fit.models.aerobic.Riegel(5000, 1200, Riegel.RUNNINGWOMEN);
     * const estimatedDistance = riegel.distance(3600); // Estimate distance covered in 1 hour based on 5K performance
     */
    distance(t2) {
        if (this.t1 <= 0 || this.d1 <= 0 || t2 <= 0) {
            return 0;
        }
        const factor = 1.0 / this.factor;
        return this.d1 * Math.pow(t2, factor) / Math.pow(this.t1, factor);
    }
}
/**
 * Cameron Running Model for estimating performance.
 * @class Cameron
 * @extends PerformanceModel
 * @implements DistanceEstimatable, TimeEstimatable
 */
class Cameron extends PerformanceModel {
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
    time(d2) {
        if (this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
            return 0;
        }
        const a = 13.49681 - 0.048865 * this.d1 + 2.438936 / Math.pow(this.d1, 0.7905);
        const b = 13.49681 - 0.048865 * d2 + 2.438936 / Math.pow(d2, 0.7905);
        return (this.t1 / this.d1) * (a / b) * d2;
    }
}
class VV {
    t1;
    d1;
    /**
     * @constructor
     * @param {number} d1 - Initial distance
     * @param {number} t1 - Initial time
     */
    constructor(d1, t1) {
        this.d1 = d1;
        this.t1 = t1;
    }
    adj_timer(d1, t1) {
        return d1 / (d1 / t1);
    }
    riegel_velocity(distance) {
        const adj_timer = this.adj_timer(this.d1, this.t1);
        return distance / (adj_timer * Math.pow(distance / this.d1, 1.06));
    }
    /**
     * Estimate time for a given mileage using the VV model.
     * @param {number} mileage - Weekly mileage
     * @param {number} [d2=42195.0] - Target distance (default is marathon distance in meters)
     * @returns {number} Estimated time in seconds
     * @example
     * const vv = new Fit.models.aerobic.VV(10000, 2400); // 10K in 40 minutes
     * const marathonTime = vv.time(50); // Estimate marathon time for 50 miles per week
     */
    time(mileage, d2 = 42195.0) {
        const riegel_velocity = this.riegel_velocity(d2);
        const velocity = 0.16018617 + (0.83076202 * riegel_velocity) + (0.6423826 * (mileage / 10));
        const minutes = (d2 / 60) / velocity;
        const seconds = minutes * 60;
        return seconds;
    }
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
    time2(mileage, d2, t2, distance = 42195.0) {
        const adj_timer_r1 = this.adj_timer(this.d1, this.t1);
        const adj_timer_r2 = this.adj_timer(d2, t2);
        const k_r2_r1 = Math.log(adj_timer_r2 / adj_timer_r1) / Math.log(d2 / this.d1);
        const k_marathon = 1.4510756 + (-0.23797948 * k_r2_r1) + (-0.01410023 * (mileage / 10));
        const seconds = (adj_timer_r2 * Math.pow(distance / d2, k_marathon));
        return seconds;
    }
}

var aerobic = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Cameron: Cameron,
    Riegel: Riegel,
    VV: VV
});

var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    aerobic: aerobic
});

/*
@param {Number} time of performance (seconds)
@param {Number} current temperature (farenheit)
@return {Number} temperature-adjusted time (seconds)
*/
function temperature(seconds) {
    const factors = {
        "60F": 1,
        "65F": 1.0075,
        "70F": 1.015,
        "75F": 1.0225,
        "80F": 1.03,
        "85F": 1.0375,
        "90F": 1.045,
        "95F": 1.0525,
        "100F": 1.06
    };
    return seconds * factors[seconds + "F"];
}

var adjustment = /*#__PURE__*/Object.freeze({
    __proto__: null,
    temperature: temperature
});

const ageGradeTable = {
    [exports.Gender.Female]: {
        "50Hur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.7021,
                0.911,
                0.9828,
                0.9976,
                0.9998,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.991,
                0.9809,
                0.971,
                0.9155,
                0.9047,
                0.8942,
                0.8849,
                0.8749,
                0.865,
                0.8554,
                0.8469,
                0.8377,
                0.8287,
                0.8368,
                0.8269,
                0.8172,
                0.8078,
                0.7994,
                0.7903,
                0.7815,
                0.7729,
                0.7644,
                0.7569,
                0.7667,
                0.7569,
                0.7466,
                0.7373,
                0.7282,
                0.7187,
                0.7101,
                0.701,
                0.6928,
                0.6842,
                0.6763,
                0.6652,
                0.655,
                0.6446,
                0.635,
                0.6252,
                0.6123,
                0.5998,
                0.5879,
                0.5765,
                0.5654,
                0.5477,
                0.5311,
                0.5154,
                0.5007,
                0.4867,
                0.4678,
                0.4502,
                0.434,
                0.4188,
                0.4047,
                0.3845,
                0.3662,
                0.3495,
                0.3343,
                0.3204,
                0.3009,
                0.2835,
                0.268,
                0.2541,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 6.58
        },
        "55Hur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.7021,
                0.911,
                0.9828,
                0.9976,
                0.9998,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.991,
                0.9809,
                0.971,
                0.9155,
                0.9047,
                0.8942,
                0.8849,
                0.8749,
                0.865,
                0.8554,
                0.8469,
                0.8377,
                0.8287,
                0.8368,
                0.8269,
                0.8172,
                0.8078,
                0.7994,
                0.7903,
                0.7815,
                0.7729,
                0.7644,
                0.7569,
                0.7667,
                0.7569,
                0.7466,
                0.7373,
                0.7282,
                0.7187,
                0.7101,
                0.701,
                0.6928,
                0.6842,
                0.6763,
                0.6652,
                0.655,
                0.6446,
                0.635,
                0.6252,
                0.6123,
                0.5998,
                0.5879,
                0.5765,
                0.5654,
                0.5477,
                0.5311,
                0.5154,
                0.5007,
                0.4867,
                0.4678,
                0.4502,
                0.434,
                0.4188,
                0.4047,
                0.3845,
                0.3662,
                0.3495,
                0.3343,
                0.3204,
                0.3009,
                0.2835,
                0.268,
                0.2541,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 7.12
        },
        "60Hur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.7021,
                0.911,
                0.9828,
                0.9976,
                0.9998,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.991,
                0.9809,
                0.971,
                0.9155,
                0.9047,
                0.8942,
                0.8849,
                0.8749,
                0.865,
                0.8554,
                0.8469,
                0.8377,
                0.8287,
                0.8368,
                0.8269,
                0.8172,
                0.8078,
                0.7994,
                0.7903,
                0.7815,
                0.7729,
                0.7644,
                0.7569,
                0.7667,
                0.7569,
                0.7466,
                0.7373,
                0.7282,
                0.7187,
                0.7101,
                0.701,
                0.6928,
                0.6842,
                0.6763,
                0.6652,
                0.655,
                0.6446,
                0.635,
                0.6252,
                0.6123,
                0.5998,
                0.5879,
                0.5765,
                0.5654,
                0.5477,
                0.5311,
                0.5154,
                0.5007,
                0.4867,
                0.4678,
                0.4502,
                0.434,
                0.4188,
                0.4047,
                0.3845,
                0.3662,
                0.3495,
                0.3343,
                0.3204,
                0.3009,
                0.2835,
                0.268,
                0.2541,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 7.69
        },
        "ShortHur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.8617,
                0.8829,
                0.9105,
                0.9328,
                0.9509,
                0.966,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9959,
                0.9919,
                0.9879,
                0.9831,
                0.9791,
                0.9737,
                0.9683,
                0.9629,
                0.9576,
                1.0941,
                1.0824,
                1.072,
                1.0608,
                1.0499,
                1.0383,
                1.0278,
                1.0183,
                1.0083,
                0.9984,
                1.0517,
                1.04,
                1.0278,
                1.0158,
                1.0041,
                0.9919,
                0.9815,
                0.9706,
                0.9599,
                0.9495,
                0.9502,
                0.9314,
                0.9126,
                0.8939,
                0.8753,
                0.8568,
                0.8334,
                0.8102,
                0.7867,
                0.7636,
                0.74,
                0.7221,
                0.7046,
                0.6867,
                0.669,
                0.6512,
                0.6271,
                0.603,
                0.5789,
                0.555,
                0.5309,
                0.5152,
                0.4994,
                0.4838,
                0.4678,
                0.4522,
                0.4358,
                0.4193,
                0.4028,
                0.3864,
                0.37,
                0.3556,
                0.3411,
                0.3267,
                0.3122,
                0.2978,
                0.2866,
                0.2754,
                0.2641,
                0.2529,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 12.21
        },
        "LongHur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.7144,
                0.8933,
                0.9216,
                0.9441,
                0.9618,
                0.9758,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9887,
                0.9729,
                0.9576,
                0.9429,
                0.9285,
                0.9146,
                0.901,
                0.888,
                0.8753,
                0.8628,
                0.8508,
                0.8392,
                0.8278,
                0.8167,
                1.1572,
                1.1376,
                1.1186,
                1.1,
                1.0823,
                1.0651,
                1.0485,
                1.0323,
                1.0165,
                1.0013,
                1.0941,
                1.0767,
                1.0599,
                1.0435,
                1.0277,
                1.0124,
                0.9956,
                0.9794,
                0.9637,
                0.9485,
                0.9338,
                0.9133,
                0.8936,
                0.875,
                0.8569,
                0.8397,
                0.8193,
                0.7999,
                0.7815,
                0.7639,
                0.747,
                0.7221,
                0.6988,
                0.677,
                0.6565,
                0.6372,
                0.6085,
                0.5824,
                0.5583,
                0.5362,
                0.5158,
                0.4751,
                0.4403,
                0.4103,
                0.3841,
                0.3611,
                0.3286,
                0.3015,
                0.2785,
                0.2588,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 52.34
        },
        "Steeple": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.2796,
                1.3548,
                1.4094,
                1.4478,
                0.9824,
                0.9936,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.4474,
                1.4351,
                1.423,
                1.4109,
                1.3992,
                1.3876,
                1.3762,
                1.3651,
                1.354,
                1.3432,
                1.3325,
                1.3221,
                1.3117,
                1.3015,
                1.2916,
                1.2816,
                1.272,
                1.2624,
                1.2531,
                1.2437,
                1.2346,
                1.2256,
                1.2167,
                1.208,
                1.1993,
                1.1908,
                1.1701,
                1.1502,
                1.1309,
                1.1122,
                1.0941,
                1.0767,
                1.0599,
                1.0435,
                1.0277,
                1.0123,
                0.9956,
                0.9794,
                0.9637,
                0.9485,
                0.9338,
                0.9133,
                0.8937,
                0.8749,
                0.8569,
                0.8397,
                0.8193,
                0.8,
                0.7815,
                0.7639,
                0.747,
                0.7221,
                0.6988,
                0.677,
                0.6565,
                0.6372,
                0.6085,
                0.5824,
                0.5583,
                0.5362,
                0.5158,
                0.4751,
                0.4403,
                0.4103,
                0.3841,
                0.3611,
                0.3286,
                0.3015,
                0.2785,
                0.2588,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 541.59
        },
        "1500mWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9625,
                0.955,
                0.9475,
                0.94,
                0.9325,
                0.925,
                0.9175,
                0.91,
                0.9025,
                0.895,
                0.8875,
                0.88,
                0.8725,
                0.865,
                0.8575,
                0.85,
                0.8424,
                0.8346,
                0.8267,
                0.8187,
                0.8106,
                0.8024,
                0.794,
                0.7855,
                0.7769,
                0.7682,
                0.7593,
                0.7503,
                0.7412,
                0.732,
                0.7226,
                0.7131,
                0.7035,
                0.6938,
                0.6839,
                0.6739,
                0.6638,
                0.6536,
                0.6433,
                0.6328,
                0.6222,
                0.6115,
                0.6006,
                0.5896,
                0.5785,
                0.5673,
                0.556,
                0.5445,
                0.5329,
                0.5212,
                0.5094,
                0.4974,
                0.4853,
                0.4731,
                0.4608,
                0.4483,
                0.4357,
                0.423,
                0.4102,
                0.3972,
                0.3841
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 337
        },
        "1MileWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9625,
                0.955,
                0.9475,
                0.94,
                0.9325,
                0.925,
                0.9175,
                0.91,
                0.9025,
                0.895,
                0.8875,
                0.88,
                0.8725,
                0.865,
                0.8575,
                0.8499,
                0.8423,
                0.8344,
                0.8265,
                0.8185,
                0.8103,
                0.802,
                0.7935,
                0.785,
                0.7763,
                0.7675,
                0.7586,
                0.7495,
                0.7404,
                0.7311,
                0.7216,
                0.7121,
                0.7024,
                0.6926,
                0.6827,
                0.6727,
                0.6625,
                0.6522,
                0.6418,
                0.6313,
                0.6206,
                0.6098,
                0.5989,
                0.5879,
                0.5767,
                0.5655,
                0.554,
                0.5425,
                0.5309,
                0.5191,
                0.5072,
                0.4952,
                0.483,
                0.4707,
                0.4583,
                0.4458,
                0.4332,
                0.4204,
                0.4075,
                0.3945,
                0.3814
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 362
        },
        "3kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9625,
                0.955,
                0.9475,
                0.94,
                0.9325,
                0.925,
                0.9175,
                0.91,
                0.9025,
                0.895,
                0.8875,
                0.8799,
                0.8722,
                0.8643,
                0.8563,
                0.8482,
                0.84,
                0.8317,
                0.8232,
                0.8146,
                0.8059,
                0.797,
                0.7881,
                0.779,
                0.7697,
                0.7604,
                0.7509,
                0.7414,
                0.7316,
                0.7218,
                0.7118,
                0.7018,
                0.6915,
                0.6812,
                0.6708,
                0.6602,
                0.6495,
                0.6386,
                0.6277,
                0.6166,
                0.6054,
                0.5941,
                0.5826,
                0.5711,
                0.5594,
                0.5476,
                0.5356,
                0.5235,
                0.5113,
                0.499,
                0.4866,
                0.474,
                0.4613,
                0.4485,
                0.4356,
                0.4225,
                0.4093,
                0.396,
                0.3826,
                0.369,
                0.3554
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 695
        },
        "5kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9625,
                0.955,
                0.9475,
                0.94,
                0.9325,
                0.925,
                0.9175,
                0.9099,
                0.9023,
                0.8945,
                0.8866,
                0.8785,
                0.8703,
                0.862,
                0.8536,
                0.8451,
                0.8364,
                0.8276,
                0.8187,
                0.8097,
                0.8005,
                0.7912,
                0.7818,
                0.7723,
                0.7626,
                0.7528,
                0.7429,
                0.7329,
                0.7227,
                0.7125,
                0.702,
                0.6915,
                0.6809,
                0.6701,
                0.6592,
                0.6482,
                0.637,
                0.6258,
                0.6144,
                0.6028,
                0.5912,
                0.5794,
                0.5675,
                0.5555,
                0.5434,
                0.5311,
                0.5187,
                0.5062,
                0.4936,
                0.4808,
                0.4679,
                0.4549,
                0.4418,
                0.4286,
                0.4152,
                0.4017,
                0.388,
                0.3743,
                0.3604,
                0.3464,
                0.3323
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 1187
        },
        "8kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9625,
                0.955,
                0.9475,
                0.94,
                0.9324,
                0.9247,
                0.9169,
                0.9089,
                0.9008,
                0.8926,
                0.8843,
                0.8758,
                0.8673,
                0.8586,
                0.8497,
                0.8408,
                0.8317,
                0.8225,
                0.8132,
                0.8037,
                0.7942,
                0.7845,
                0.7747,
                0.7647,
                0.7546,
                0.7445,
                0.7341,
                0.7237,
                0.7131,
                0.7025,
                0.6916,
                0.6807,
                0.6697,
                0.6585,
                0.6472,
                0.6357,
                0.6242,
                0.6125,
                0.6007,
                0.5888,
                0.5767,
                0.5645,
                0.5522,
                0.5398,
                0.5273,
                0.5146,
                0.5018,
                0.4889,
                0.4759,
                0.4627,
                0.4494,
                0.436,
                0.4224,
                0.4088,
                0.395,
                0.3811,
                0.3671,
                0.3529,
                0.3386,
                0.3242,
                0.3097
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 1944
        },
        "10kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9625,
                0.955,
                0.9475,
                0.9398,
                0.932,
                0.9241,
                0.9161,
                0.9079,
                0.8997,
                0.8913,
                0.8827,
                0.8741,
                0.8653,
                0.8564,
                0.8474,
                0.8383,
                0.829,
                0.8196,
                0.8101,
                0.8005,
                0.7907,
                0.7808,
                0.7708,
                0.7607,
                0.7504,
                0.74,
                0.7295,
                0.7189,
                0.7081,
                0.6972,
                0.6862,
                0.6751,
                0.6639,
                0.6525,
                0.641,
                0.6294,
                0.6176,
                0.6057,
                0.5937,
                0.5816,
                0.5694,
                0.557,
                0.5445,
                0.5319,
                0.5192,
                0.5063,
                0.4933,
                0.4802,
                0.467,
                0.4536,
                0.4401,
                0.4265,
                0.4128,
                0.3989,
                0.3849,
                0.3708,
                0.3566,
                0.3423,
                0.3278,
                0.3132,
                0.2985
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 2457
        },
        "15kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9623,
                0.9546,
                0.9467,
                0.9387,
                0.9306,
                0.9223,
                0.9139,
                0.9054,
                0.8968,
                0.888,
                0.8792,
                0.8702,
                0.8611,
                0.8518,
                0.8424,
                0.8329,
                0.8233,
                0.8136,
                0.8037,
                0.7937,
                0.7836,
                0.7734,
                0.763,
                0.7525,
                0.7419,
                0.7312,
                0.7203,
                0.7093,
                0.6982,
                0.687,
                0.6756,
                0.6642,
                0.6526,
                0.6408,
                0.629,
                0.617,
                0.6049,
                0.5927,
                0.5803,
                0.5679,
                0.5553,
                0.5425,
                0.5297,
                0.5167,
                0.5036,
                0.4904,
                0.4771,
                0.4636,
                0.45,
                0.4363,
                0.4225,
                0.4085,
                0.3945,
                0.3802,
                0.3659,
                0.3515,
                0.3369,
                0.3222,
                0.3074,
                0.2924,
                0.2773
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 3761
        },
        "20kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9617,
                0.9537,
                0.9456,
                0.9373,
                0.9289,
                0.9204,
                0.9118,
                0.903,
                0.8942,
                0.8852,
                0.876,
                0.8668,
                0.8574,
                0.8479,
                0.8383,
                0.8286,
                0.8187,
                0.8087,
                0.7986,
                0.7883,
                0.778,
                0.7675,
                0.7569,
                0.7461,
                0.7353,
                0.7243,
                0.7132,
                0.702,
                0.6906,
                0.6791,
                0.6675,
                0.6558,
                0.6439,
                0.632,
                0.6199,
                0.6076,
                0.5953,
                0.5828,
                0.5702,
                0.5575,
                0.5447,
                0.5317,
                0.5186,
                0.5054,
                0.492,
                0.4786,
                0.465,
                0.4513,
                0.4374,
                0.4235,
                0.4094,
                0.3952,
                0.3808,
                0.3664,
                0.3518,
                0.3371,
                0.3223,
                0.3073,
                0.2923,
                0.2771,
                0.2617
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 5089
        },
        "H.Mar.Walk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9615,
                0.9535,
                0.9453,
                0.937,
                0.9286,
                0.92,
                0.9113,
                0.9025,
                0.8936,
                0.8846,
                0.8754,
                0.8661,
                0.8567,
                0.8471,
                0.8375,
                0.8277,
                0.8178,
                0.8077,
                0.7976,
                0.7873,
                0.7769,
                0.7663,
                0.7557,
                0.7449,
                0.734,
                0.723,
                0.7118,
                0.7005,
                0.6891,
                0.6776,
                0.6659,
                0.6542,
                0.6423,
                0.6303,
                0.6181,
                0.6058,
                0.5934,
                0.5809,
                0.5683,
                0.5555,
                0.5426,
                0.5296,
                0.5165,
                0.5032,
                0.4898,
                0.4763,
                0.4627,
                0.4489,
                0.435,
                0.421,
                0.4069,
                0.3926,
                0.3783,
                0.3638,
                0.3491,
                0.3344,
                0.3195,
                0.3045,
                0.2894,
                0.2741,
                0.2588
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 5411
        },
        "25kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9609,
                0.9526,
                0.9443,
                0.9359,
                0.9273,
                0.9186,
                0.9098,
                0.9008,
                0.8918,
                0.8826,
                0.8733,
                0.8638,
                0.8542,
                0.8446,
                0.8347,
                0.8248,
                0.8147,
                0.8046,
                0.7943,
                0.7838,
                0.7733,
                0.7626,
                0.7518,
                0.7408,
                0.7298,
                0.7186,
                0.7073,
                0.6959,
                0.6843,
                0.6727,
                0.6609,
                0.6489,
                0.6369,
                0.6247,
                0.6124,
                0.6,
                0.5875,
                0.5748,
                0.562,
                0.5491,
                0.5361,
                0.5229,
                0.5096,
                0.4962,
                0.4827,
                0.469,
                0.4552,
                0.4413,
                0.4273,
                0.4132,
                0.3989,
                0.3845,
                0.37,
                0.3553,
                0.3405,
                0.3256,
                0.3106,
                0.2955,
                0.2802,
                0.2648,
                0.2493
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 6577
        },
        "30kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9599,
                0.9516,
                0.9431,
                0.9345,
                0.9258,
                0.9169,
                0.9079,
                0.8988,
                0.8896,
                0.8802,
                0.8708,
                0.8612,
                0.8514,
                0.8416,
                0.8316,
                0.8215,
                0.8113,
                0.801,
                0.7905,
                0.7799,
                0.7692,
                0.7583,
                0.7474,
                0.7363,
                0.7251,
                0.7138,
                0.7023,
                0.6907,
                0.679,
                0.6672,
                0.6552,
                0.6431,
                0.6309,
                0.6186,
                0.6062,
                0.5936,
                0.5809,
                0.5681,
                0.5551,
                0.542,
                0.5288,
                0.5155,
                0.5021,
                0.4885,
                0.4748,
                0.461,
                0.4471,
                0.433,
                0.4188,
                0.4045,
                0.3901,
                0.3755,
                0.3608,
                0.346,
                0.3311,
                0.316,
                0.3008,
                0.2855,
                0.2701,
                0.2546,
                0.2389
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 8118
        },
        "40kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9581,
                0.9495,
                0.9407,
                0.9319,
                0.9229,
                0.9138,
                0.9046,
                0.8952,
                0.8857,
                0.8761,
                0.8664,
                0.8566,
                0.8466,
                0.8365,
                0.8263,
                0.8159,
                0.8055,
                0.7949,
                0.7842,
                0.7733,
                0.7623,
                0.7513,
                0.74,
                0.7287,
                0.7173,
                0.7057,
                0.694,
                0.6821,
                0.6702,
                0.6581,
                0.6459,
                0.6336,
                0.6211,
                0.6085,
                0.5958,
                0.583,
                0.5701,
                0.557,
                0.5438,
                0.5305,
                0.517,
                0.5034,
                0.4898,
                0.4759,
                0.462,
                0.4479,
                0.4337,
                0.4194,
                0.405,
                0.3904,
                0.3757,
                0.3609,
                0.346,
                0.331,
                0.3158,
                0.3005,
                0.285,
                0.2695,
                0.2538,
                0.238,
                0.2221
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 11334
        },
        "Mar.Walk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9577,
                0.949,
                0.9402,
                0.9313,
                0.9223,
                0.9132,
                0.9039,
                0.8945,
                0.885,
                0.8753,
                0.8656,
                0.8557,
                0.8456,
                0.8355,
                0.8252,
                0.8148,
                0.8043,
                0.7937,
                0.7829,
                0.772,
                0.761,
                0.7499,
                0.7386,
                0.7272,
                0.7157,
                0.7041,
                0.6924,
                0.6805,
                0.6685,
                0.6563,
                0.6441,
                0.6317,
                0.6192,
                0.6066,
                0.5939,
                0.581,
                0.568,
                0.5549,
                0.5416,
                0.5283,
                0.5148,
                0.5011,
                0.4874,
                0.4735,
                0.4596,
                0.4455,
                0.4312,
                0.4169,
                0.4024,
                0.3878,
                0.373,
                0.3582,
                0.3432,
                0.3281,
                0.3129,
                0.2975,
                0.282,
                0.2664,
                0.2507,
                0.2349,
                0.2189
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 12062
        },
        "50kmWalk": {
            "conversions": [
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9966,
                0.994,
                0.9906,
                0.9865,
                0.9816,
                0.976,
                0.9696,
                0.9563,
                0.9475,
                0.9386,
                0.9295,
                0.9203,
                0.9111,
                0.9016,
                0.8921,
                0.8824,
                0.8726,
                0.8627,
                0.8527,
                0.8425,
                0.8322,
                0.8218,
                0.8113,
                0.8006,
                0.7898,
                0.7789,
                0.7679,
                0.7567,
                0.7454,
                0.734,
                0.7225,
                0.7108,
                0.6991,
                0.6871,
                0.6751,
                0.663,
                0.6507,
                0.6383,
                0.6258,
                0.6131,
                0.6004,
                0.5875,
                0.5745,
                0.5613,
                0.548,
                0.5347,
                0.5211,
                0.5075,
                0.4937,
                0.4799,
                0.4658,
                0.4517,
                0.4375,
                0.4231,
                0.4086,
                0.3939,
                0.3792,
                0.3643,
                0.3493,
                0.3342,
                0.3189,
                0.3035,
                0.2881,
                0.2724,
                0.2567,
                0.2408,
                0.2248,
                0.2087
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 14706
        },
        "HighJump": {
            "conversions": [
                0,
                0,
                0,
                1.5713,
                1.4616,
                1.3749,
                1.3062,
                1.2441,
                1.1943,
                1.1484,
                1.1176,
                1.0885,
                1.0609,
                1.0398,
                1.0245,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0097,
                1.0146,
                1.0245,
                1.0347,
                1.0408,
                1.0503,
                1.0663,
                1.0773,
                1.0885,
                1.1008,
                1.1117,
                1.1297,
                1.1421,
                1.1547,
                1.1681,
                1.1808,
                1.1943,
                1.2151,
                1.2294,
                1.2442,
                1.259,
                1.2744,
                1.2981,
                1.3145,
                1.331,
                1.3484,
                1.366,
                1.3933,
                1.4122,
                1.4307,
                1.4514,
                1.4718,
                1.4929,
                1.5255,
                1.5466,
                1.5714,
                1.5954,
                1.6202,
                1.6587,
                1.6829,
                1.7131,
                1.7417,
                1.7712,
                1.8174,
                1.8456,
                1.8829,
                1.9174,
                1.9533,
                2.0096,
                2.0431,
                2.09,
                2.1327,
                2.1771,
                2.2234,
                2.2879,
                2.3483,
                2.4302,
                2.5181,
                2.5802,
                2.6795,
                2.7867,
                2.9028,
                2.9857,
                3.1194,
                3.2656,
                3.4262,
                3.6034,
                3.7321,
                3.9434,
                4.18
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 2.09
        },
        "PoleVault": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.5015,
                1.3446,
                1.2262,
                1.1419,
                1.0752,
                1.0279,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0218,
                1.0362,
                1.051,
                1.0663,
                1.0819,
                1.0981,
                1.1147,
                1.1319,
                1.1496,
                1.1678,
                1.1866,
                1.2061,
                1.2262,
                1.247,
                1.2685,
                1.2907,
                1.3138,
                1.3377,
                1.3624,
                1.3881,
                1.4148,
                1.4426,
                1.4714,
                1.5015,
                1.5282,
                1.5606,
                1.5944,
                1.6297,
                1.6667,
                1.7053,
                1.7458,
                1.7882,
                1.8327,
                1.8796,
                1.9288,
                1.9808,
                2.0356,
                2.0935,
                2.1548,
                2.2198,
                2.2889,
                2.3624,
                2.4408,
                2.5245,
                2.6142,
                2.7105,
                2.8142,
                2.9261,
                3.0473,
                3.179,
                3.3226,
                3.4797,
                3.6525,
                3.8433,
                4.0551,
                4.2917,
                4.5575,
                4.8585,
                5.202,
                5.5978,
                6.0588,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 5.15
        },
        "LongJump": {
            "conversions": [
                0,
                0,
                0,
                1.7864,
                1.642,
                1.5253,
                1.4296,
                1.3477,
                1.2789,
                1.2188,
                1.1677,
                1.1241,
                1.0867,
                1.0532,
                1.0245,
                1.008,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.008,
                1.0148,
                1.0231,
                1.0301,
                1.0387,
                1.0503,
                1.0636,
                1.0758,
                1.0883,
                1.1023,
                1.1157,
                1.1308,
                1.1446,
                1.1587,
                1.1742,
                1.1899,
                1.2051,
                1.2228,
                1.2389,
                1.2561,
                1.2746,
                1.2921,
                1.3101,
                1.331,
                1.3502,
                1.3698,
                1.3926,
                1.4135,
                1.4351,
                1.4596,
                1.4832,
                1.507,
                1.5347,
                1.5602,
                1.5883,
                1.6172,
                1.6455,
                1.6786,
                1.7091,
                1.742,
                1.7778,
                1.812,
                1.8477,
                1.8894,
                1.9285,
                1.9789,
                2.0324,
                2.0889,
                2.1486,
                2.2118,
                2.2788,
                2.35,
                2.4258,
                2.5067,
                2.5931,
                2.705,
                2.8271,
                2.9606,
                3.1074,
                3.2696,
                3.4495,
                3.6505,
                3.8763,
                4.1319,
                4.4235,
                4.8205,
                5.2958,
                5.875,
                6.5965,
                7.52
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 7.52
        },
        "TripleJump": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.2768,
                1.2072,
                1.1499,
                1.1009,
                1.0602,
                1.0258,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0137,
                1.0251,
                1.0361,
                1.048,
                1.0595,
                1.0719,
                1.0839,
                1.097,
                1.1095,
                1.1232,
                1.1364,
                1.1507,
                1.1645,
                1.1796,
                1.1941,
                1.21,
                1.2253,
                1.242,
                1.2581,
                1.2757,
                1.2927,
                1.3113,
                1.3293,
                1.349,
                1.368,
                1.3889,
                1.4091,
                1.4312,
                1.4527,
                1.4762,
                1.499,
                1.5241,
                1.5485,
                1.5752,
                1.6012,
                1.6299,
                1.6595,
                1.6885,
                1.7203,
                1.7514,
                1.7857,
                1.8192,
                1.8563,
                1.8926,
                1.9327,
                1.972,
                2.0156,
                2.0584,
                2.106,
                2.1528,
                2.2048,
                2.2694,
                2.3414,
                2.4181,
                2.496,
                2.5833,
                2.6957,
                2.8182,
                2.9524,
                3.1,
                3.2632,
                3.4444,
                3.6471,
                3.875,
                4.1333,
                4.4286,
                4.8287,
                5.3082,
                5.8935,
                6.6239,
                7.561
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 15.5
        },
        "Hammer": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.3167,
                1.2222,
                1.1493,
                1.0845,
                1.0405,
                1.0132,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0125,
                1.0355,
                1.0594,
                1.0847,
                1.111,
                1.1387,
                1.1677,
                1.1984,
                1.2306,
                1.2648,
                1.3007,
                1.3389,
                1.3792,
                1.4222,
                1.4678,
                1.5166,
                1.5685,
                1.6245,
                1.6842,
                1.7488,
                1.2506,
                1.2736,
                1.2974,
                1.3221,
                1.3478,
                1.3745,
                1.4023,
                1.4312,
                1.4614,
                1.4928,
                1.5256,
                1.56,
                1.5959,
                1.6334,
                1.6728,
                1.7141,
                1.7576,
                1.8033,
                1.8514,
                1.9022,
                1.9557,
                2.0125,
                2.0727,
                2.1365,
                2.2044,
                2.2766,
                2.354,
                2.4367,
                2.5254,
                2.6208,
                2.7235,
                2.8351,
                2.9559,
                3.0874,
                3.2312,
                3.3886,
                3.5632,
                3.7561,
                3.9711,
                4.2123,
                4.4837,
                4.7945,
                5.1505,
                5.5636,
                6.0487,
                6.6247,
                7.3264,
                8.1915,
                9.2883,
                10.7242,
                12.6783
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 77
        },
        "Shotput": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.4781,
                1.3535,
                1.2524,
                1.1701,
                1.1018,
                1.0448,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0157,
                1.0352,
                1.056,
                1.0776,
                1.0996,
                1.1231,
                1.147,
                1.1722,
                1.1986,
                1.2259,
                1.2551,
                1.2858,
                1.3173,
                1.351,
                1.3858,
                1.4233,
                1.4619,
                1.3876,
                1.4117,
                1.4377,
                1.4638,
                1.4908,
                1.5191,
                1.5489,
                1.5792,
                1.6107,
                1.6434,
                1.6782,
                1.7144,
                1.7515,
                1.7903,
                1.8309,
                1.8744,
                1.9194,
                1.9661,
                2.0151,
                2.0686,
                2.1227,
                2.1802,
                2.2406,
                2.3068,
                2.3746,
                2.4468,
                2.5229,
                2.6071,
                2.694,
                2.7869,
                2.8876,
                2.9974,
                3.1128,
                3.2375,
                3.3726,
                3.5222,
                3.6857,
                3.8618,
                4.0556,
                4.2698,
                4.5143,
                4.7844,
                5.0854,
                5.4269,
                5.8325,
                6.2845,
                6.8163,
                7.4441,
                8.2291,
                9.1619,
                10.3385
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 22.63
        },
        "Discus": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.3692,
                1.2262,
                1.1344,
                1.0732,
                1.0323,
                1.0046,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0004,
                1.0144,
                1.0288,
                1.0436,
                1.0589,
                1.0744,
                1.0904,
                1.1071,
                1.1241,
                1.1418,
                1.1601,
                1.1788,
                1.1983,
                1.2185,
                1.2391,
                1.2607,
                1.283,
                1.3059,
                1.3299,
                1.3545,
                1.3803,
                1.4071,
                1.4348,
                1.4637,
                1.4936,
                1.525,
                1.5578,
                1.5918,
                1.6275,
                1.6649,
                1.7036,
                1.7447,
                1.7874,
                1.8325,
                1.8796,
                1.9296,
                1.9824,
                2.0379,
                2.0966,
                2.1591,
                2.2248,
                2.2953,
                2.37,
                2.4498,
                2.5355,
                2.6265,
                2.7253,
                2.4063,
                2.5041,
                2.6096,
                2.7244,
                2.8508,
                2.9886,
                3.1411,
                3.3089,
                3.4957,
                3.7048,
                3.9416,
                4.2105,
                4.5176,
                4.8731,
                5.2929,
                5.7868,
                6.384,
                7.1177,
                8.0503,
                9.253,
                10.88
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 76.8
        },
        "Javelin": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.7048,
                1.5253,
                1.3942,
                1.2955,
                1.2197,
                1.1611,
                1.0896,
                1.0429,
                1.0139,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9989,
                1.0213,
                1.0445,
                1.069,
                1.0946,
                1.1215,
                1.1496,
                1.1793,
                1.2106,
                1.2435,
                1.2782,
                1.3151,
                1.3541,
                1.3953,
                1.3645,
                1.3971,
                1.4314,
                1.4673,
                1.5052,
                1.545,
                1.587,
                1.6313,
                1.6782,
                1.7278,
                1.746,
                1.7844,
                1.8241,
                1.8661,
                1.91,
                1.9559,
                2.0038,
                2.0546,
                2.108,
                2.1642,
                2.2231,
                2.2855,
                2.3518,
                2.4212,
                2.4957,
                2.5749,
                2.6594,
                2.7485,
                2.8449,
                2.9483,
                3.059,
                3.1781,
                3.3077,
                3.4483,
                3.6014,
                3.7672,
                3.9502,
                4.1524,
                4.3739,
                4.6232,
                4.9021,
                5.218,
                5.5725,
                5.9836,
                6.4602,
                7.0157,
                7.6761,
                8.4785,
                9.4682,
                10.7038,
                12.3333
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 73
        },
        "Weight": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.3229,
                1.2103,
                1.1238,
                1.0727,
                1.0306,
                1.0021,
                1,
                1.0137,
                1.0288,
                1.0442,
                1.0602,
                1.0766,
                1.0936,
                1.1111,
                1.1292,
                1.1507,
                1.1699,
                1.1895,
                1.2096,
                1.2311,
                1.2527,
                1.2752,
                1.2988,
                1.3229,
                1.3478,
                1.3745,
                1.4014,
                1.4294,
                1.4595,
                1.4899,
                1.5216,
                1.5554,
                1.5903,
                1.6265,
                1.6655,
                1.7052,
                1.2414,
                1.2634,
                1.2861,
                1.3097,
                1.3348,
                1.3601,
                1.3866,
                1.4149,
                1.4434,
                1.4732,
                1.2741,
                1.3024,
                1.3326,
                1.3634,
                1.3964,
                1.4307,
                1.4667,
                1.5051,
                1.5445,
                1.5871,
                1.6312,
                1.6785,
                1.7277,
                1.7811,
                1.838,
                1.8972,
                1.9618,
                2.0292,
                2.1034,
                2.1811,
                2.2667,
                2.3576,
                2.4583,
                2.5652,
                2.6849,
                2.8149,
                2.9574,
                3.1176,
                3.2915,
                3.4911,
                3.7131,
                3.9664,
                4.2599,
                4.5914,
                4.9894,
                5.4529,
                6.0204,
                6.7045,
                7.5884,
                8.7085,
                10.2609
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 23.6
        },
        "50m": {
            "conversions": [
                0.5114,
                0.6545,
                0.7447,
                0.8085,
                0.8558,
                0.8917,
                0.9193,
                0.9406,
                0.957,
                0.9696,
                0.9792,
                0.9865,
                0.9919,
                0.9959,
                0.9988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9881,
                0.9762,
                0.9643,
                0.9538,
                0.9433,
                0.9327,
                0.9222,
                0.9117,
                0.9023,
                0.8928,
                0.8834,
                0.8739,
                0.8645,
                0.856,
                0.8475,
                0.8389,
                0.8304,
                0.8219,
                0.8142,
                0.8065,
                0.7987,
                0.791,
                0.7833,
                0.7763,
                0.7693,
                0.7622,
                0.7552,
                0.7482,
                0.7418,
                0.7354,
                0.7289,
                0.7225,
                0.7161,
                0.7072,
                0.6984,
                0.6895,
                0.6807,
                0.6718,
                0.6633,
                0.6547,
                0.6462,
                0.6376,
                0.6291,
                0.6206,
                0.612,
                0.6035,
                0.5949,
                0.5864,
                0.5709,
                0.5554,
                0.5398,
                0.5243,
                0.5088,
                0.4885,
                0.4681,
                0.4478,
                0.4274,
                0.4071,
                0.374,
                0.3409,
                0.3079,
                0.2748,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.05,
            "OC": 5.96
        },
        "55m": {
            "conversions": [
                0.5181,
                0.6588,
                0.7463,
                0.8077,
                0.8532,
                0.8879,
                0.9146,
                0.9354,
                0.9517,
                0.9644,
                0.9743,
                0.9819,
                0.9878,
                0.9922,
                0.9955,
                0.9979,
                0.9995,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9881,
                0.9762,
                0.9643,
                0.9538,
                0.9433,
                0.9327,
                0.9222,
                0.9117,
                0.9023,
                0.8928,
                0.8834,
                0.8739,
                0.8645,
                0.856,
                0.8475,
                0.8389,
                0.8304,
                0.8219,
                0.8142,
                0.8065,
                0.7987,
                0.791,
                0.7833,
                0.7763,
                0.7693,
                0.7622,
                0.7552,
                0.7482,
                0.7418,
                0.7354,
                0.7289,
                0.7225,
                0.7161,
                0.7072,
                0.6984,
                0.6895,
                0.6807,
                0.6718,
                0.6633,
                0.6547,
                0.6462,
                0.6376,
                0.6291,
                0.6206,
                0.612,
                0.6035,
                0.5949,
                0.5864,
                0.5709,
                0.5554,
                0.5398,
                0.5243,
                0.5088,
                0.4885,
                0.4681,
                0.4478,
                0.4274,
                0.4071,
                0.374,
                0.3409,
                0.3079,
                0.2748,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.055,
            "OC": 6.45
        },
        "60m": {
            "conversions": [
                0.5233,
                0.662,
                0.7473,
                0.8068,
                0.8509,
                0.8845,
                0.9107,
                0.9312,
                0.9474,
                0.9602,
                0.9703,
                0.9783,
                0.9845,
                0.9893,
                0.993,
                0.9958,
                0.9978,
                0.9992,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9881,
                0.9762,
                0.9643,
                0.9538,
                0.9433,
                0.9327,
                0.9222,
                0.9117,
                0.9023,
                0.8928,
                0.8834,
                0.8739,
                0.8645,
                0.856,
                0.8475,
                0.8389,
                0.8304,
                0.8219,
                0.8142,
                0.8065,
                0.7987,
                0.791,
                0.7833,
                0.7763,
                0.7693,
                0.7622,
                0.7552,
                0.7482,
                0.7418,
                0.7354,
                0.7289,
                0.7225,
                0.7161,
                0.7072,
                0.6984,
                0.6895,
                0.6807,
                0.6718,
                0.6633,
                0.6547,
                0.6462,
                0.6376,
                0.6291,
                0.6206,
                0.612,
                0.6035,
                0.5949,
                0.5864,
                0.5709,
                0.5554,
                0.5398,
                0.5243,
                0.5088,
                0.4885,
                0.4681,
                0.4478,
                0.4274,
                0.4071,
                0.374,
                0.3409,
                0.3079,
                0.2748,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.06,
            "OC": 6.92
        },
        "100m": {
            "conversions": [
                0.5333,
                0.6647,
                0.743,
                0.797,
                0.8369,
                0.8678,
                0.8924,
                0.9123,
                0.9288,
                0.9425,
                0.954,
                0.9637,
                0.9719,
                0.9789,
                0.9848,
                0.9897,
                0.9939,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9899,
                0.9781,
                0.9663,
                0.9545,
                0.944,
                0.9335,
                0.923,
                0.9125,
                0.902,
                0.8926,
                0.8832,
                0.8739,
                0.8645,
                0.8551,
                0.8466,
                0.8381,
                0.8297,
                0.8212,
                0.8127,
                0.805,
                0.7974,
                0.7897,
                0.7821,
                0.7744,
                0.7674,
                0.7604,
                0.7535,
                0.7465,
                0.7395,
                0.7331,
                0.7267,
                0.7204,
                0.714,
                0.7076,
                0.6983,
                0.689,
                0.6798,
                0.6705,
                0.6612,
                0.6538,
                0.6465,
                0.6391,
                0.6318,
                0.6244,
                0.6071,
                0.5898,
                0.5725,
                0.5552,
                0.5379,
                0.5215,
                0.5052,
                0.4888,
                0.4725,
                0.4561,
                0.4348,
                0.4135,
                0.3923,
                0.371,
                0.3497,
                0.3281,
                0.3065,
                0.2849,
                0.2633,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.1,
            "OC": 10.49
        },
        "200m": {
            "conversions": [
                0.5006,
                0.6287,
                0.7079,
                0.764,
                0.8066,
                0.8404,
                0.8678,
                0.8907,
                0.9099,
                0.9263,
                0.9405,
                0.9528,
                0.9635,
                0.9728,
                0.9811,
                0.9882,
                0.9945,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.994,
                0.9813,
                0.9687,
                0.956,
                0.9434,
                0.9323,
                0.9211,
                0.91,
                0.8988,
                0.8877,
                0.8778,
                0.8679,
                0.858,
                0.8481,
                0.8382,
                0.8293,
                0.8205,
                0.8116,
                0.8028,
                0.7939,
                0.7859,
                0.7779,
                0.77,
                0.762,
                0.754,
                0.7468,
                0.7396,
                0.7324,
                0.7252,
                0.718,
                0.7114,
                0.7049,
                0.6983,
                0.6918,
                0.6852,
                0.6792,
                0.6732,
                0.6673,
                0.6613,
                0.6553,
                0.6428,
                0.6303,
                0.6178,
                0.6053,
                0.5928,
                0.5759,
                0.5589,
                0.542,
                0.525,
                0.5081,
                0.4886,
                0.469,
                0.4495,
                0.4299,
                0.4104,
                0.3911,
                0.3718,
                0.3524,
                0.3331,
                0.3138,
                0.2994,
                0.285,
                0.2705,
                0.2561,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.2,
            "OC": 21.34
        },
        "300m": {
            "conversions": [
                0.4912,
                0.6114,
                0.6884,
                0.7443,
                0.7876,
                0.8225,
                0.8514,
                0.8758,
                0.8967,
                0.9148,
                0.9306,
                0.9445,
                0.9569,
                0.9679,
                0.9777,
                0.9865,
                0.9944,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9954,
                0.9823,
                0.9709,
                0.9594,
                0.9479,
                0.9364,
                0.925,
                0.9148,
                0.9046,
                0.8944,
                0.8842,
                0.874,
                0.8648,
                0.8557,
                0.8466,
                0.8375,
                0.8283,
                0.8201,
                0.8119,
                0.8037,
                0.7955,
                0.7872,
                0.7798,
                0.7723,
                0.7649,
                0.7575,
                0.75,
                0.7433,
                0.7365,
                0.7297,
                0.7229,
                0.7162,
                0.7076,
                0.699,
                0.6904,
                0.6818,
                0.6732,
                0.6628,
                0.6525,
                0.6422,
                0.6319,
                0.6215,
                0.6094,
                0.5973,
                0.5851,
                0.573,
                0.5609,
                0.5457,
                0.5306,
                0.5154,
                0.5003,
                0.4851,
                0.4688,
                0.4525,
                0.4362,
                0.4199,
                0.4036,
                0.386,
                0.3684,
                0.3508,
                0.3332,
                0.3156,
                0.3008,
                0.2861,
                0.2712,
                0.2565,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.3,
            "OC": 33
        },
        "400m": {
            "conversions": [
                0.4819,
                0.5939,
                0.6688,
                0.7246,
                0.7686,
                0.8047,
                0.8351,
                0.8609,
                0.8835,
                0.9032,
                0.9207,
                0.9363,
                0.9503,
                0.963,
                0.9744,
                0.9848,
                0.9943,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9927,
                0.9811,
                0.9696,
                0.958,
                0.9477,
                0.9374,
                0.9271,
                0.9168,
                0.9065,
                0.8972,
                0.888,
                0.8787,
                0.8695,
                0.8602,
                0.8518,
                0.8435,
                0.8351,
                0.8268,
                0.8184,
                0.8108,
                0.8032,
                0.7957,
                0.7881,
                0.7805,
                0.7736,
                0.7667,
                0.7598,
                0.7529,
                0.746,
                0.7397,
                0.7333,
                0.727,
                0.7206,
                0.7143,
                0.7037,
                0.693,
                0.6824,
                0.6717,
                0.6611,
                0.6464,
                0.6317,
                0.6171,
                0.6024,
                0.5877,
                0.5759,
                0.5642,
                0.5524,
                0.5407,
                0.5289,
                0.5155,
                0.5022,
                0.4888,
                0.4755,
                0.4621,
                0.449,
                0.4359,
                0.4229,
                0.4098,
                0.3967,
                0.3808,
                0.3649,
                0.3491,
                0.3332,
                0.3173,
                0.3022,
                0.2871,
                0.2719,
                0.2568,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.4,
            "OC": 47.6
        },
        "500m": {
            "conversions": [
                0.5111,
                0.6116,
                0.681,
                0.734,
                0.7765,
                0.8117,
                0.8415,
                0.867,
                0.8892,
                0.9086,
                0.9257,
                0.9408,
                0.9542,
                0.9661,
                0.9767,
                0.9862,
                0.9947,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9954,
                0.9843,
                0.973,
                0.963,
                0.953,
                0.943,
                0.933,
                0.9229,
                0.9139,
                0.9049,
                0.8958,
                0.8868,
                0.8777,
                0.8695,
                0.8614,
                0.8531,
                0.845,
                0.8368,
                0.8283,
                0.8197,
                0.8113,
                0.8028,
                0.7943,
                0.7862,
                0.7781,
                0.77,
                0.7618,
                0.7537,
                0.7453,
                0.7368,
                0.7284,
                0.7199,
                0.7114,
                0.7001,
                0.6887,
                0.6774,
                0.666,
                0.6547,
                0.6399,
                0.6251,
                0.6104,
                0.5956,
                0.5809,
                0.5687,
                0.5566,
                0.5444,
                0.5323,
                0.5201,
                0.5068,
                0.4937,
                0.4804,
                0.4672,
                0.454,
                0.4411,
                0.4281,
                0.4153,
                0.4024,
                0.3895,
                0.3743,
                0.3592,
                0.3442,
                0.329,
                0.3139,
                0.2995,
                0.2851,
                0.2706,
                0.2561,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.5,
            "OC": 63.7
        },
        "600m": {
            "conversions": [
                0.5404,
                0.6292,
                0.6933,
                0.7434,
                0.7844,
                0.8187,
                0.8479,
                0.8731,
                0.8949,
                0.914,
                0.9306,
                0.9452,
                0.958,
                0.9692,
                0.979,
                0.9876,
                0.995,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9989,
                0.9881,
                0.9783,
                0.9686,
                0.9589,
                0.9491,
                0.9394,
                0.9305,
                0.9217,
                0.9129,
                0.9041,
                0.8953,
                0.8872,
                0.8792,
                0.8712,
                0.8632,
                0.8551,
                0.8457,
                0.8363,
                0.8269,
                0.8175,
                0.8081,
                0.7988,
                0.7894,
                0.7801,
                0.7708,
                0.7615,
                0.7509,
                0.7403,
                0.7297,
                0.7191,
                0.7086,
                0.6965,
                0.6845,
                0.6724,
                0.6604,
                0.6483,
                0.6335,
                0.6186,
                0.6038,
                0.5889,
                0.574,
                0.5615,
                0.5489,
                0.5364,
                0.5238,
                0.5113,
                0.4982,
                0.4851,
                0.472,
                0.459,
                0.4459,
                0.4331,
                0.4204,
                0.4077,
                0.395,
                0.3822,
                0.3679,
                0.3535,
                0.3392,
                0.3249,
                0.3105,
                0.2968,
                0.283,
                0.2692,
                0.2555,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.6,
            "OC": 80
        },
        "800m": {
            "conversions": [
                0.5989,
                0.6645,
                0.7177,
                0.7622,
                0.8001,
                0.8327,
                0.8609,
                0.8853,
                0.9064,
                0.9247,
                0.9406,
                0.9541,
                0.9656,
                0.9755,
                0.9836,
                0.9903,
                0.9957,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9906,
                0.9814,
                0.9722,
                0.9638,
                0.9554,
                0.9471,
                0.9387,
                0.9303,
                0.9226,
                0.9149,
                0.9072,
                0.8995,
                0.8918,
                0.8806,
                0.8693,
                0.8581,
                0.8468,
                0.8356,
                0.8239,
                0.8121,
                0.8004,
                0.7886,
                0.7769,
                0.7621,
                0.7473,
                0.7324,
                0.7176,
                0.7028,
                0.6893,
                0.6759,
                0.6624,
                0.649,
                0.6355,
                0.6205,
                0.6054,
                0.5904,
                0.5753,
                0.5603,
                0.547,
                0.5336,
                0.5203,
                0.5069,
                0.4936,
                0.4808,
                0.468,
                0.4552,
                0.4424,
                0.4296,
                0.4172,
                0.4048,
                0.3925,
                0.3801,
                0.3677,
                0.3549,
                0.3421,
                0.3293,
                0.3165,
                0.3037,
                0.2913,
                0.2789,
                0.2665,
                0.2541,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.8,
            "OC": 113.28
        },
        "1000m": {
            "conversions": [
                0.6157,
                0.6699,
                0.7185,
                0.7623,
                0.8016,
                0.8367,
                0.8676,
                0.8947,
                0.918,
                0.9379,
                0.9545,
                0.9681,
                0.9792,
                0.9879,
                0.9946,
                0.9997,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9912,
                0.9827,
                0.9738,
                0.9647,
                0.9559,
                0.9469,
                0.938,
                0.9289,
                0.9198,
                0.9113,
                0.9028,
                0.8942,
                0.8856,
                0.8771,
                0.8661,
                0.8549,
                0.8439,
                0.8327,
                0.8217,
                0.8103,
                0.7988,
                0.7874,
                0.7759,
                0.7645,
                0.7509,
                0.7373,
                0.7236,
                0.7099,
                0.6963,
                0.6836,
                0.671,
                0.6583,
                0.6457,
                0.633,
                0.6192,
                0.6054,
                0.5916,
                0.5778,
                0.564,
                0.5515,
                0.5389,
                0.5263,
                0.5137,
                0.5011,
                0.4888,
                0.4761,
                0.463,
                0.4496,
                0.4359,
                0.4221,
                0.4079,
                0.3935,
                0.3787,
                0.3635,
                0.3478,
                0.3316,
                0.3151,
                0.2983,
                0.2811,
                0.2639,
                0.2464,
                0.2284,
                0.2102,
                0.1916
            ],
            "isRoad": 0,
            "dist(km)": 1,
            "OC": 146.5
        },
        "1500m": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9971,
                0.9946,
                0.9913,
                0.9871,
                0.9822,
                0.9765,
                0.9701,
                0.9628,
                0.9547,
                0.9459,
                0.9362,
                0.9258,
                0.9151,
                0.9044,
                0.8937,
                0.8831,
                0.8724,
                0.8617,
                0.851,
                0.8403,
                0.8297,
                0.819,
                0.8083,
                0.7976,
                0.7869,
                0.7763,
                0.7656,
                0.7549,
                0.7442,
                0.7335,
                0.7229,
                0.7122,
                0.7015,
                0.6908,
                0.6801,
                0.6695,
                0.6588,
                0.6481,
                0.6374,
                0.6267,
                0.6161,
                0.6054,
                0.5947,
                0.584,
                0.5733,
                0.5627,
                0.552,
                0.5413,
                0.5306,
                0.5199,
                0.5087,
                0.4962,
                0.4825,
                0.4676,
                0.4515,
                0.4343,
                0.4158,
                0.3961,
                0.3752,
                0.3531,
                0.3299,
                0.3054,
                0.2797,
                0.2528,
                0.2247,
                0.1955,
                0.165,
                0.1333,
                0.1004,
                0.0663
            ],
            "isRoad": 0,
            "dist(km)": 1.5,
            "OC": 232.47
        },
        "1Mile": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9972,
                0.9948,
                0.9915,
                0.9875,
                0.9827,
                0.9771,
                0.9707,
                0.9636,
                0.9557,
                0.9469,
                0.9375,
                0.9272,
                0.9165,
                0.9058,
                0.8951,
                0.8844,
                0.8737,
                0.863,
                0.8523,
                0.8416,
                0.8309,
                0.8202,
                0.8095,
                0.7988,
                0.7881,
                0.7774,
                0.7667,
                0.756,
                0.7453,
                0.7346,
                0.7239,
                0.7132,
                0.7025,
                0.6918,
                0.6811,
                0.6704,
                0.6597,
                0.649,
                0.6383,
                0.6276,
                0.6169,
                0.6062,
                0.5955,
                0.5848,
                0.5741,
                0.5634,
                0.5527,
                0.542,
                0.5313,
                0.5206,
                0.5091,
                0.4965,
                0.4827,
                0.4678,
                0.4516,
                0.4343,
                0.4158,
                0.3961,
                0.3752,
                0.3532,
                0.3299,
                0.3055,
                0.2799,
                0.2532,
                0.2252,
                0.1961,
                0.1658,
                0.1343,
                0.1016,
                0.0677
            ],
            "isRoad": 0,
            "dist(km)": 1.609344,
            "OC": 251.6
        },
        "2km": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9976,
                0.9953,
                0.9923,
                0.9885,
                0.984,
                0.9787,
                0.9727,
                0.9659,
                0.9584,
                0.9501,
                0.9411,
                0.9313,
                0.9208,
                0.91,
                0.8992,
                0.8885,
                0.8777,
                0.867,
                0.8562,
                0.8454,
                0.8347,
                0.8239,
                0.8132,
                0.8024,
                0.7916,
                0.7809,
                0.7701,
                0.7594,
                0.7486,
                0.7378,
                0.7271,
                0.7163,
                0.7056,
                0.6948,
                0.684,
                0.6733,
                0.6625,
                0.6518,
                0.641,
                0.6302,
                0.6195,
                0.6087,
                0.598,
                0.5872,
                0.5764,
                0.5657,
                0.5549,
                0.5442,
                0.5334,
                0.5225,
                0.5106,
                0.4976,
                0.4834,
                0.4682,
                0.4517,
                0.4341,
                0.4154,
                0.3956,
                0.3746,
                0.3524,
                0.3292,
                0.3047,
                0.2792,
                0.2525,
                0.2246,
                0.1957,
                0.1655,
                0.1343,
                0.1019,
                0.0684
            ],
            "isRoad": 0,
            "dist(km)": 2,
            "OC": 321.5
        },
        "3km": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9994,
                0.9981,
                0.9962,
                0.9935,
                0.9902,
                0.9861,
                0.9813,
                0.9759,
                0.9697,
                0.9628,
                0.9553,
                0.947,
                0.938,
                0.9283,
                0.918,
                0.9071,
                0.8962,
                0.8854,
                0.8745,
                0.8636,
                0.8527,
                0.8419,
                0.831,
                0.8201,
                0.8092,
                0.7984,
                0.7875,
                0.7766,
                0.7657,
                0.7549,
                0.744,
                0.7331,
                0.7222,
                0.7114,
                0.7005,
                0.6896,
                0.6787,
                0.6678,
                0.657,
                0.6461,
                0.6352,
                0.6243,
                0.6135,
                0.6026,
                0.5917,
                0.5808,
                0.57,
                0.5591,
                0.5482,
                0.5373,
                0.5257,
                0.5131,
                0.4993,
                0.4845,
                0.4686,
                0.4517,
                0.4336,
                0.4145,
                0.3942,
                0.3729,
                0.3506,
                0.3271,
                0.3026,
                0.277,
                0.2503,
                0.2225,
                0.1936,
                0.1637,
                0.1327,
                0.1006,
                0.0674
            ],
            "isRoad": 0,
            "dist(km)": 3,
            "OC": 501.42
        },
        "2Mile": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9994,
                0.9982,
                0.9963,
                0.9937,
                0.9904,
                0.9864,
                0.9817,
                0.9764,
                0.9703,
                0.9635,
                0.9561,
                0.9479,
                0.9391,
                0.9295,
                0.9193,
                0.9085,
                0.8976,
                0.8867,
                0.8758,
                0.8649,
                0.854,
                0.8431,
                0.8322,
                0.8213,
                0.8104,
                0.7995,
                0.7886,
                0.7777,
                0.7668,
                0.7559,
                0.745,
                0.7341,
                0.7232,
                0.7123,
                0.7014,
                0.6906,
                0.6797,
                0.6688,
                0.6579,
                0.647,
                0.6361,
                0.6252,
                0.6143,
                0.6034,
                0.5925,
                0.5816,
                0.5707,
                0.5598,
                0.5489,
                0.538,
                0.5263,
                0.5135,
                0.4997,
                0.4848,
                0.4688,
                0.4518,
                0.4337,
                0.4146,
                0.3944,
                0.3731,
                0.3508,
                0.3275,
                0.303,
                0.2775,
                0.251,
                0.2234,
                0.1947,
                0.165,
                0.1342,
                0.1023,
                0.0694
            ],
            "isRoad": 0,
            "dist(km)": 3.218688,
            "OC": 541.5
        },
        "4km": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9967,
                0.9943,
                0.9912,
                0.9874,
                0.983,
                0.9779,
                0.9721,
                0.9656,
                0.9585,
                0.9507,
                0.9422,
                0.9331,
                0.9233,
                0.9128,
                0.9019,
                0.8909,
                0.88,
                0.869,
                0.8581,
                0.8471,
                0.8361,
                0.8252,
                0.8142,
                0.8033,
                0.7923,
                0.7814,
                0.7704,
                0.7594,
                0.7485,
                0.7375,
                0.7266,
                0.7156,
                0.7047,
                0.6937,
                0.6827,
                0.6718,
                0.6608,
                0.6499,
                0.6389,
                0.628,
                0.617,
                0.606,
                0.5951,
                0.5841,
                0.5732,
                0.5622,
                0.5513,
                0.5401,
                0.528,
                0.5149,
                0.5007,
                0.4855,
                0.4693,
                0.4521,
                0.4339,
                0.4147,
                0.3944,
                0.3731,
                0.3508,
                0.3275,
                0.3031,
                0.2777,
                0.2514,
                0.2239,
                0.1955,
                0.1661,
                0.1356,
                0.1041,
                0.0716
            ],
            "isRoad": 0,
            "dist(km)": 4,
            "OC": 683
        },
        "3Mile": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9987,
                0.997,
                0.9947,
                0.9918,
                0.9882,
                0.9839,
                0.979,
                0.9735,
                0.9673,
                0.9604,
                0.9529,
                0.9448,
                0.936,
                0.9265,
                0.9164,
                0.9056,
                0.8946,
                0.8836,
                0.8726,
                0.8616,
                0.8506,
                0.8396,
                0.8286,
                0.8176,
                0.8066,
                0.7955,
                0.7845,
                0.7735,
                0.7625,
                0.7515,
                0.7405,
                0.7295,
                0.7185,
                0.7075,
                0.6965,
                0.6854,
                0.6744,
                0.6634,
                0.6524,
                0.6414,
                0.6304,
                0.6194,
                0.6084,
                0.5974,
                0.5864,
                0.5753,
                0.5643,
                0.5533,
                0.5419,
                0.5294,
                0.516,
                0.5015,
                0.4861,
                0.4696,
                0.4522,
                0.4337,
                0.4143,
                0.3938,
                0.3724,
                0.3499,
                0.3265,
                0.302,
                0.2766,
                0.2501,
                0.2227,
                0.1942,
                0.1648,
                0.1343,
                0.1029,
                0.0704
            ],
            "isRoad": 0,
            "dist(km)": 4.828032,
            "OC": 833
        },
        "5kmRoad": {
            "conversions": [
                0.701,
                0.7343,
                0.7658,
                0.7954,
                0.8232,
                0.8493,
                0.8734,
                0.8958,
                0.9164,
                0.9351,
                0.952,
                0.968,
                0.984,
                0.996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.999,
                0.9977,
                0.9959,
                0.9935,
                0.9906,
                0.9871,
                0.9831,
                0.9785,
                0.9734,
                0.9678,
                0.9616,
                0.9549,
                0.9476,
                0.9398,
                0.9314,
                0.9225,
                0.9131,
                0.9034,
                0.8937,
                0.884,
                0.8743,
                0.8645,
                0.8548,
                0.8451,
                0.8354,
                0.8257,
                0.816,
                0.8063,
                0.7966,
                0.7869,
                0.7772,
                0.7674,
                0.7577,
                0.748,
                0.7383,
                0.7286,
                0.7189,
                0.7092,
                0.6995,
                0.6898,
                0.6801,
                0.6703,
                0.6606,
                0.6509,
                0.6412,
                0.6315,
                0.6218,
                0.612,
                0.6013,
                0.5897,
                0.5772,
                0.5637,
                0.5493,
                0.534,
                0.5177,
                0.5004,
                0.4823,
                0.4632,
                0.4431,
                0.4221,
                0.4002,
                0.3773,
                0.3535,
                0.3288,
                0.3031,
                0.2764,
                0.2489,
                0.2204,
                0.1909
            ],
            "isRoad": 1,
            "dist(km)": 5,
            "OC": 886
        },
        "5km": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9987,
                0.9971,
                0.9948,
                0.9919,
                0.9883,
                0.9841,
                0.9793,
                0.9737,
                0.9676,
                0.9608,
                0.9533,
                0.9452,
                0.9365,
                0.9271,
                0.917,
                0.9063,
                0.8953,
                0.8843,
                0.8733,
                0.8623,
                0.8512,
                0.8402,
                0.8292,
                0.8182,
                0.8072,
                0.7961,
                0.7851,
                0.7741,
                0.7631,
                0.7521,
                0.741,
                0.73,
                0.719,
                0.708,
                0.697,
                0.6859,
                0.6749,
                0.6639,
                0.6529,
                0.6419,
                0.6308,
                0.6198,
                0.6088,
                0.5978,
                0.5868,
                0.5757,
                0.5647,
                0.5537,
                0.5422,
                0.5297,
                0.5161,
                0.5016,
                0.4861,
                0.4696,
                0.4521,
                0.4335,
                0.414,
                0.3935,
                0.372,
                0.3495,
                0.3259,
                0.3014,
                0.2759,
                0.2494,
                0.2219,
                0.1933,
                0.1638,
                0.1333,
                0.1018,
                0.0692
            ],
            "isRoad": 0,
            "dist(km)": 5,
            "OC": 864.68
        },
        "6kmRoad": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.999,
                0.9977,
                0.9958,
                0.9933,
                0.9904,
                0.9868,
                0.9827,
                0.9781,
                0.9728,
                0.9671,
                0.9608,
                0.9539,
                0.9465,
                0.9385,
                0.93,
                0.9209,
                0.9112,
                0.9013,
                0.8914,
                0.8815,
                0.8716,
                0.8616,
                0.8517,
                0.8418,
                0.8319,
                0.822,
                0.8121,
                0.8021,
                0.7922,
                0.7823,
                0.7724,
                0.7625,
                0.7526,
                0.7426,
                0.7327,
                0.7228,
                0.7129,
                0.703,
                0.693,
                0.6831,
                0.6732,
                0.6633,
                0.6534,
                0.6435,
                0.6335,
                0.6236,
                0.6137,
                0.6036,
                0.5926,
                0.5807,
                0.5678,
                0.554,
                0.5393,
                0.5236,
                0.507,
                0.4894,
                0.4709,
                0.4515,
                0.4311,
                0.4098,
                0.3875,
                0.3643,
                0.3402,
                0.3151,
                0.2891,
                0.2621,
                0.2342,
                0.2054,
                0.1756
            ],
            "isRoad": 1,
            "dist(km)": 6,
            "OC": 1071
        },
        "6km": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9988,
                0.9972,
                0.995,
                0.9922,
                0.9888,
                0.9848,
                0.9801,
                0.9749,
                0.969,
                0.9624,
                0.9553,
                0.9475,
                0.9391,
                0.9301,
                0.9205,
                0.9103,
                0.8994,
                0.8883,
                0.8771,
                0.866,
                0.8548,
                0.8437,
                0.8325,
                0.8214,
                0.8102,
                0.7991,
                0.7879,
                0.7768,
                0.7657,
                0.7545,
                0.7434,
                0.7322,
                0.7211,
                0.7099,
                0.6988,
                0.6876,
                0.6765,
                0.6653,
                0.6542,
                0.643,
                0.6319,
                0.6208,
                0.6096,
                0.5985,
                0.5873,
                0.5762,
                0.565,
                0.5539,
                0.5426,
                0.5305,
                0.5174,
                0.5033,
                0.4882,
                0.472,
                0.4549,
                0.4368,
                0.4177,
                0.3976,
                0.3765,
                0.3543,
                0.3312,
                0.3071,
                0.282,
                0.2559,
                0.2288,
                0.2007,
                0.1715,
                0.1414,
                0.1103,
                0.0782
            ],
            "isRoad": 0,
            "dist(km)": 6,
            "OC": 1051
        },
        "4MileRoad": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.999,
                0.9977,
                0.9958,
                0.9933,
                0.9903,
                0.9867,
                0.9826,
                0.9779,
                0.9726,
                0.9668,
                0.9605,
                0.9535,
                0.946,
                0.938,
                0.9294,
                0.9202,
                0.9105,
                0.9005,
                0.8905,
                0.8805,
                0.8705,
                0.8605,
                0.8505,
                0.8405,
                0.8305,
                0.8205,
                0.8105,
                0.8005,
                0.7905,
                0.7805,
                0.7705,
                0.7605,
                0.7506,
                0.7406,
                0.7306,
                0.7206,
                0.7106,
                0.7006,
                0.6906,
                0.6806,
                0.6706,
                0.6606,
                0.6506,
                0.6406,
                0.6306,
                0.6206,
                0.6106,
                0.6004,
                0.5893,
                0.5772,
                0.5642,
                0.5503,
                0.5354,
                0.5196,
                0.5029,
                0.4852,
                0.4665,
                0.447,
                0.4265,
                0.405,
                0.3826,
                0.3593,
                0.335,
                0.3098,
                0.2837,
                0.2566,
                0.2285,
                0.1996,
                0.1697
            ],
            "isRoad": 1,
            "dist(km)": 6.437376,
            "OC": 1152
        },
        "4Mile": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9988,
                0.9972,
                0.9951,
                0.9924,
                0.989,
                0.985,
                0.9804,
                0.9752,
                0.9694,
                0.963,
                0.956,
                0.9483,
                0.9401,
                0.9312,
                0.9217,
                0.9117,
                0.901,
                0.8898,
                0.8786,
                0.8674,
                0.8562,
                0.845,
                0.8338,
                0.8226,
                0.8114,
                0.8002,
                0.789,
                0.7778,
                0.7666,
                0.7554,
                0.7443,
                0.7331,
                0.7219,
                0.7107,
                0.6995,
                0.6883,
                0.6771,
                0.6659,
                0.6547,
                0.6435,
                0.6323,
                0.6211,
                0.6099,
                0.5987,
                0.5875,
                0.5763,
                0.5651,
                0.5539,
                0.5427,
                0.5309,
                0.518,
                0.5041,
                0.4893,
                0.4734,
                0.4565,
                0.4387,
                0.4198,
                0.3999,
                0.3791,
                0.3572,
                0.3343,
                0.3105,
                0.2856,
                0.2598,
                0.2329,
                0.205,
                0.1762,
                0.1463,
                0.1154,
                0.0836
            ],
            "isRoad": 0,
            "dist(km)": 6.437376,
            "OC": 1132
        },
        "8kmRoad": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.999,
                0.9976,
                0.9956,
                0.9931,
                0.99,
                0.9864,
                0.9821,
                0.9773,
                0.972,
                0.966,
                0.9595,
                0.9524,
                0.9447,
                0.9365,
                0.9276,
                0.9183,
                0.9083,
                0.8981,
                0.8878,
                0.8776,
                0.8673,
                0.8571,
                0.8468,
                0.8366,
                0.8263,
                0.8161,
                0.8058,
                0.7956,
                0.7854,
                0.7751,
                0.7649,
                0.7546,
                0.7444,
                0.7341,
                0.7239,
                0.7136,
                0.7034,
                0.6931,
                0.6829,
                0.6727,
                0.6624,
                0.6522,
                0.6419,
                0.6317,
                0.6214,
                0.6112,
                0.6009,
                0.5904,
                0.5788,
                0.5664,
                0.553,
                0.5387,
                0.5234,
                0.5072,
                0.4901,
                0.472,
                0.453,
                0.433,
                0.4121,
                0.3903,
                0.3675,
                0.3438,
                0.3191,
                0.2935,
                0.2669,
                0.2395,
                0.211,
                0.1817,
                0.1514
            ],
            "isRoad": 1,
            "dist(km)": 8,
            "OC": 1442
        },
        "8km": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9988,
                0.9974,
                0.9953,
                0.9927,
                0.9895,
                0.9857,
                0.9813,
                0.9764,
                0.9708,
                0.9647,
                0.958,
                0.9507,
                0.9428,
                0.9343,
                0.9253,
                0.9157,
                0.9055,
                0.8947,
                0.8834,
                0.872,
                0.8607,
                0.8493,
                0.838,
                0.8266,
                0.8153,
                0.804,
                0.7926,
                0.7813,
                0.7699,
                0.7586,
                0.7472,
                0.7359,
                0.7245,
                0.7132,
                0.7019,
                0.6905,
                0.6792,
                0.6678,
                0.6565,
                0.6451,
                0.6338,
                0.6224,
                0.6111,
                0.5997,
                0.5884,
                0.5771,
                0.5657,
                0.5544,
                0.543,
                0.5315,
                0.519,
                0.5055,
                0.491,
                0.4755,
                0.459,
                0.4416,
                0.4231,
                0.4036,
                0.3831,
                0.3616,
                0.3391,
                0.3157,
                0.2912,
                0.2657,
                0.2392,
                0.2117,
                0.1832,
                0.1537,
                0.1233,
                0.0918
            ],
            "isRoad": 0,
            "dist(km)": 8,
            "OC": 1425
        },
        "5MileRoad": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.999,
                0.9976,
                0.9956,
                0.9931,
                0.99,
                0.9864,
                0.9821,
                0.9773,
                0.9719,
                0.966,
                0.9594,
                0.9523,
                0.9447,
                0.9364,
                0.9276,
                0.9182,
                0.9082,
                0.898,
                0.8877,
                0.8775,
                0.8672,
                0.857,
                0.8467,
                0.8365,
                0.8262,
                0.816,
                0.8057,
                0.7955,
                0.7852,
                0.775,
                0.7647,
                0.7545,
                0.7442,
                0.734,
                0.7237,
                0.7134,
                0.7032,
                0.6929,
                0.6827,
                0.6724,
                0.6622,
                0.6519,
                0.6417,
                0.6314,
                0.6212,
                0.6109,
                0.6007,
                0.5901,
                0.5786,
                0.5661,
                0.5527,
                0.5384,
                0.5231,
                0.5069,
                0.4897,
                0.4716,
                0.4526,
                0.4326,
                0.4117,
                0.3899,
                0.3671,
                0.3433,
                0.3187,
                0.293,
                0.2665,
                0.239,
                0.2106,
                0.1812,
                0.1509
            ],
            "isRoad": 1,
            "dist(km)": 8.04672,
            "OC": 1452
        },
        "5Mile": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9988,
                0.9974,
                0.9953,
                0.9927,
                0.9895,
                0.9857,
                0.9813,
                0.9764,
                0.9709,
                0.9647,
                0.958,
                0.9507,
                0.9429,
                0.9344,
                0.9254,
                0.9158,
                0.9056,
                0.8948,
                0.8835,
                0.8722,
                0.8608,
                0.8495,
                0.8381,
                0.8268,
                0.8154,
                0.8041,
                0.7927,
                0.7814,
                0.77,
                0.7587,
                0.7473,
                0.736,
                0.7246,
                0.7133,
                0.7019,
                0.6906,
                0.6792,
                0.6679,
                0.6565,
                0.6452,
                0.6338,
                0.6225,
                0.6111,
                0.5998,
                0.5884,
                0.5771,
                0.5657,
                0.5544,
                0.543,
                0.5315,
                0.519,
                0.5055,
                0.491,
                0.4756,
                0.4591,
                0.4416,
                0.4231,
                0.4037,
                0.3832,
                0.3617,
                0.3392,
                0.3157,
                0.2913,
                0.2658,
                0.2393,
                0.2118,
                0.1833,
                0.1539,
                0.1234,
                0.0919
            ],
            "isRoad": 0,
            "dist(km)": 8.04672,
            "OC": 1435
        },
        "10kmRoad": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9975,
                0.9955,
                0.993,
                0.9898,
                0.986,
                0.9817,
                0.9768,
                0.9713,
                0.9652,
                0.9585,
                0.9512,
                0.9433,
                0.9349,
                0.9259,
                0.9162,
                0.906,
                0.8955,
                0.885,
                0.8745,
                0.864,
                0.8535,
                0.843,
                0.8325,
                0.822,
                0.8115,
                0.801,
                0.7905,
                0.78,
                0.7695,
                0.759,
                0.7485,
                0.738,
                0.7275,
                0.717,
                0.7065,
                0.696,
                0.6855,
                0.675,
                0.6645,
                0.654,
                0.6435,
                0.633,
                0.6225,
                0.612,
                0.6015,
                0.591,
                0.5801,
                0.5681,
                0.5553,
                0.5415,
                0.5268,
                0.5111,
                0.4945,
                0.4769,
                0.4585,
                0.439,
                0.4187,
                0.3973,
                0.3751,
                0.3519,
                0.3278,
                0.3027,
                0.2767,
                0.2497,
                0.2219,
                0.193,
                0.1633,
                0.1325
            ],
            "isRoad": 1,
            "dist(km)": 10,
            "OC": 1820
        },
        "10km": {
            "conversions": [
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9989,
                0.9975,
                0.9955,
                0.993,
                0.99,
                0.9863,
                0.9821,
                0.9774,
                0.9721,
                0.9662,
                0.9598,
                0.9528,
                0.9453,
                0.9372,
                0.9285,
                0.9193,
                0.9096,
                0.8992,
                0.8883,
                0.877,
                0.8655,
                0.854,
                0.8425,
                0.831,
                0.8195,
                0.808,
                0.7965,
                0.785,
                0.7735,
                0.762,
                0.7505,
                0.739,
                0.7275,
                0.716,
                0.7045,
                0.693,
                0.6815,
                0.67,
                0.6585,
                0.647,
                0.6355,
                0.624,
                0.6125,
                0.601,
                0.5895,
                0.578,
                0.5665,
                0.555,
                0.5435,
                0.532,
                0.52,
                0.507,
                0.493,
                0.478,
                0.462,
                0.445,
                0.427,
                0.408,
                0.388,
                0.367,
                0.345,
                0.322,
                0.298,
                0.273,
                0.247,
                0.22,
                0.192,
                0.163,
                0.133,
                0.102
            ],
            "isRoad": 0,
            "dist(km)": 10,
            "OC": 1801.09
        },
        "12km": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9975,
                0.9955,
                0.993,
                0.9898,
                0.986,
                0.9817,
                0.9768,
                0.9713,
                0.9652,
                0.9585,
                0.9512,
                0.9433,
                0.9349,
                0.9259,
                0.9162,
                0.906,
                0.8955,
                0.885,
                0.8745,
                0.864,
                0.8535,
                0.843,
                0.8325,
                0.822,
                0.8115,
                0.801,
                0.7905,
                0.78,
                0.7695,
                0.759,
                0.7485,
                0.738,
                0.7275,
                0.717,
                0.7065,
                0.696,
                0.6855,
                0.675,
                0.6645,
                0.654,
                0.6435,
                0.633,
                0.6225,
                0.612,
                0.6015,
                0.5908,
                0.5792,
                0.5667,
                0.5533,
                0.539,
                0.5238,
                0.5077,
                0.4907,
                0.4729,
                0.4541,
                0.4344,
                0.4139,
                0.3924,
                0.37,
                0.3468,
                0.3226,
                0.2976,
                0.2716,
                0.2448,
                0.2171,
                0.1884,
                0.1589,
                0.1285
            ],
            "isRoad": 1,
            "dist(km)": 12,
            "OC": 2194
        },
        "15km": {
            "conversions": [
                0.5945,
                0.6382,
                0.6793,
                0.7178,
                0.7537,
                0.787,
                0.8177,
                0.8458,
                0.8713,
                0.8942,
                0.9145,
                0.9335,
                0.9525,
                0.9696,
                0.9829,
                0.9924,
                0.9981,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9989,
                0.9975,
                0.9956,
                0.9931,
                0.9901,
                0.9865,
                0.9823,
                0.9776,
                0.9724,
                0.9666,
                0.9602,
                0.9533,
                0.9458,
                0.9378,
                0.9293,
                0.9201,
                0.9105,
                0.9003,
                0.8898,
                0.8793,
                0.8688,
                0.8583,
                0.8478,
                0.8373,
                0.8268,
                0.8163,
                0.8058,
                0.7953,
                0.7848,
                0.7743,
                0.7638,
                0.7533,
                0.7428,
                0.7323,
                0.7218,
                0.7113,
                0.7008,
                0.6903,
                0.6798,
                0.6693,
                0.6588,
                0.6483,
                0.6378,
                0.6273,
                0.6168,
                0.6063,
                0.5956,
                0.5841,
                0.5718,
                0.5587,
                0.5447,
                0.5299,
                0.5142,
                0.4977,
                0.4804,
                0.4622,
                0.4432,
                0.4233,
                0.4026,
                0.381,
                0.3586,
                0.3354,
                0.3113,
                0.2864,
                0.2606,
                0.234,
                0.2065,
                0.1782,
                0.1491,
                0.1191
            ],
            "isRoad": 1,
            "dist(km)": 15,
            "OC": 2755
        },
        "10Mile": {
            "conversions": [
                0.6525,
                0.6924,
                0.7301,
                0.7656,
                0.7989,
                0.83,
                0.8589,
                0.8856,
                0.9101,
                0.9324,
                0.9525,
                0.9715,
                0.9905,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9989,
                0.9975,
                0.9956,
                0.9931,
                0.9901,
                0.9865,
                0.9823,
                0.9776,
                0.9724,
                0.9666,
                0.9602,
                0.9533,
                0.9458,
                0.9378,
                0.9293,
                0.9201,
                0.9105,
                0.9003,
                0.8898,
                0.8793,
                0.8688,
                0.8583,
                0.8478,
                0.8373,
                0.8268,
                0.8163,
                0.8058,
                0.7953,
                0.7848,
                0.7743,
                0.7638,
                0.7533,
                0.7428,
                0.7323,
                0.7218,
                0.7113,
                0.7008,
                0.6903,
                0.6798,
                0.6693,
                0.6588,
                0.6483,
                0.6378,
                0.6273,
                0.6168,
                0.6063,
                0.5954,
                0.5837,
                0.5713,
                0.5579,
                0.5438,
                0.5288,
                0.513,
                0.4964,
                0.479,
                0.4607,
                0.4416,
                0.4217,
                0.401,
                0.3794,
                0.357,
                0.3338,
                0.3097,
                0.2849,
                0.2592,
                0.2326,
                0.2053,
                0.1771,
                0.1481,
                0.1183
            ],
            "isRoad": 1,
            "dist(km)": 16.09344,
            "OC": 2961
        },
        "20km": {
            "conversions": [
                0.6525,
                0.6924,
                0.7301,
                0.7656,
                0.7989,
                0.83,
                0.8589,
                0.8856,
                0.9101,
                0.9324,
                0.9525,
                0.9715,
                0.9905,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9989,
                0.9975,
                0.9956,
                0.9931,
                0.9901,
                0.9865,
                0.9823,
                0.9776,
                0.9724,
                0.9666,
                0.9602,
                0.9533,
                0.9458,
                0.9378,
                0.9293,
                0.9201,
                0.9105,
                0.9003,
                0.8898,
                0.8793,
                0.8688,
                0.8583,
                0.8478,
                0.8373,
                0.8268,
                0.8163,
                0.8058,
                0.7953,
                0.7848,
                0.7743,
                0.7638,
                0.7533,
                0.7428,
                0.7323,
                0.7218,
                0.7113,
                0.7008,
                0.6903,
                0.6798,
                0.6693,
                0.6588,
                0.6483,
                0.6378,
                0.6273,
                0.6168,
                0.606,
                0.5945,
                0.5823,
                0.5692,
                0.5554,
                0.5408,
                0.5255,
                0.5093,
                0.4924,
                0.4747,
                0.4563,
                0.4371,
                0.4171,
                0.3963,
                0.3748,
                0.3525,
                0.3294,
                0.3055,
                0.2809,
                0.2555,
                0.2293,
                0.2023,
                0.1746,
                0.1461,
                0.1169
            ],
            "isRoad": 1,
            "dist(km)": 20,
            "OC": 3700
        },
        "Half.Mar": {
            "conversions": [
                0.5945,
                0.6382,
                0.6793,
                0.7178,
                0.7537,
                0.787,
                0.8177,
                0.8458,
                0.8713,
                0.8942,
                0.9145,
                0.9335,
                0.9525,
                0.9696,
                0.9829,
                0.9924,
                0.9981,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9989,
                0.9975,
                0.9956,
                0.9931,
                0.9901,
                0.9865,
                0.9823,
                0.9776,
                0.9724,
                0.9666,
                0.9602,
                0.9533,
                0.9458,
                0.9378,
                0.9293,
                0.9201,
                0.9105,
                0.9003,
                0.8898,
                0.8793,
                0.8688,
                0.8583,
                0.8478,
                0.8373,
                0.8268,
                0.8163,
                0.8058,
                0.7953,
                0.7848,
                0.7743,
                0.7638,
                0.7533,
                0.7428,
                0.7323,
                0.7218,
                0.7113,
                0.7008,
                0.6903,
                0.6798,
                0.6693,
                0.6588,
                0.6483,
                0.6378,
                0.6273,
                0.6168,
                0.6059,
                0.5942,
                0.5818,
                0.5687,
                0.5548,
                0.5401,
                0.5246,
                0.5084,
                0.4915,
                0.4738,
                0.4553,
                0.436,
                0.416,
                0.3953,
                0.3738,
                0.3515,
                0.3284,
                0.3046,
                0.2801,
                0.2548,
                0.2287,
                0.2018,
                0.1742,
                0.1459,
                0.1168
            ],
            "isRoad": 1,
            "dist(km)": 21.0975,
            "OC": 3912
        },
        "25km": {
            "conversions": [
                0.6525,
                0.6924,
                0.7301,
                0.7656,
                0.7989,
                0.83,
                0.8589,
                0.8856,
                0.9101,
                0.9324,
                0.9525,
                0.9715,
                0.9905,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9989,
                0.9975,
                0.9955,
                0.993,
                0.9899,
                0.9863,
                0.9821,
                0.9774,
                0.972,
                0.9662,
                0.9597,
                0.9528,
                0.9452,
                0.9371,
                0.9284,
                0.9192,
                0.9094,
                0.8991,
                0.8885,
                0.8778,
                0.8672,
                0.8566,
                0.846,
                0.8354,
                0.8247,
                0.8141,
                0.8035,
                0.7929,
                0.7822,
                0.7716,
                0.761,
                0.7504,
                0.7398,
                0.7291,
                0.7185,
                0.7079,
                0.6973,
                0.6866,
                0.676,
                0.6654,
                0.6548,
                0.6441,
                0.6335,
                0.6229,
                0.6123,
                0.6011,
                0.5891,
                0.5764,
                0.5629,
                0.5486,
                0.5335,
                0.5177,
                0.5011,
                0.4838,
                0.4657,
                0.4468,
                0.4271,
                0.4067,
                0.3855,
                0.3635,
                0.3407,
                0.3172,
                0.293,
                0.2679,
                0.2421,
                0.2155,
                0.1881,
                0.16,
                0.1311,
                0.1014
            ],
            "isRoad": 1,
            "dist(km)": 25,
            "OC": 4665
        },
        "30km": {
            "conversions": [
                0.6525,
                0.6924,
                0.7301,
                0.7656,
                0.7989,
                0.83,
                0.8589,
                0.8856,
                0.9101,
                0.9324,
                0.9525,
                0.9715,
                0.9905,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9975,
                0.9954,
                0.9928,
                0.9895,
                0.9857,
                0.9813,
                0.9762,
                0.9706,
                0.9643,
                0.9575,
                0.95,
                0.942,
                0.9333,
                0.9241,
                0.9142,
                0.9038,
                0.893,
                0.8822,
                0.8715,
                0.8607,
                0.85,
                0.8392,
                0.8285,
                0.8177,
                0.807,
                0.7962,
                0.7855,
                0.7747,
                0.764,
                0.7532,
                0.7424,
                0.7317,
                0.7209,
                0.7102,
                0.6994,
                0.6887,
                0.6779,
                0.6672,
                0.6564,
                0.6457,
                0.6349,
                0.6241,
                0.6133,
                0.6018,
                0.5894,
                0.5763,
                0.5625,
                0.5478,
                0.5323,
                0.5161,
                0.4991,
                0.4813,
                0.4628,
                0.4434,
                0.4233,
                0.4024,
                0.3807,
                0.3583,
                0.335,
                0.311,
                0.2862,
                0.2606,
                0.2342,
                0.2071,
                0.1792,
                0.1504,
                0.121,
                0.0907
            ],
            "isRoad": 1,
            "dist(km)": 30,
            "OC": 5660
        },
        "Marathon": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9974,
                0.9953,
                0.9926,
                0.9893,
                0.9854,
                0.9808,
                0.9757,
                0.9699,
                0.9635,
                0.9565,
                0.9489,
                0.9406,
                0.9318,
                0.9223,
                0.9122,
                0.9016,
                0.8906,
                0.8796,
                0.8686,
                0.8576,
                0.8466,
                0.8356,
                0.8246,
                0.8136,
                0.8026,
                0.7916,
                0.7806,
                0.7696,
                0.7586,
                0.7476,
                0.7366,
                0.7256,
                0.7146,
                0.7036,
                0.6926,
                0.6816,
                0.6706,
                0.6596,
                0.6486,
                0.6376,
                0.6266,
                0.6156,
                0.6042,
                0.592,
                0.579,
                0.5652,
                0.5506,
                0.5352,
                0.519,
                0.502,
                0.4842,
                0.4656,
                0.4462,
                0.426,
                0.405,
                0.3832,
                0.3606,
                0.3372,
                0.313,
                0.288,
                0.2622,
                0.2356,
                0.2082,
                0.18,
                0.151,
                0.1212,
                0.0906,
                0.0592
            ],
            "isRoad": 1,
            "dist(km)": 42.195,
            "OC": 8125
        },
        "50km": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9974,
                0.9953,
                0.9926,
                0.9893,
                0.9854,
                0.9808,
                0.9757,
                0.9699,
                0.9635,
                0.9565,
                0.9489,
                0.9406,
                0.9318,
                0.9223,
                0.9122,
                0.9016,
                0.8906,
                0.8796,
                0.8686,
                0.8576,
                0.8466,
                0.8356,
                0.8246,
                0.8136,
                0.8026,
                0.7916,
                0.7806,
                0.7696,
                0.7586,
                0.7476,
                0.7366,
                0.7256,
                0.7146,
                0.7036,
                0.6926,
                0.6816,
                0.6706,
                0.6596,
                0.6486,
                0.6376,
                0.6266,
                0.6156,
                0.6042,
                0.592,
                0.579,
                0.5652,
                0.5506,
                0.5352,
                0.519,
                0.502,
                0.4842,
                0.4656,
                0.4462,
                0.426,
                0.405,
                0.3832,
                0.3606,
                0.3372,
                0.313,
                0.288,
                0.2622,
                0.2356,
                0.2082,
                0.18,
                0.151,
                0.1212,
                0.0906,
                0.0592
            ],
            "isRoad": 1,
            "dist(km)": 50,
            "OC": 9820
        },
        "50Mile": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9974,
                0.9953,
                0.9926,
                0.9893,
                0.9854,
                0.9808,
                0.9757,
                0.9699,
                0.9635,
                0.9565,
                0.9489,
                0.9406,
                0.9318,
                0.9223,
                0.9122,
                0.9016,
                0.8906,
                0.8796,
                0.8686,
                0.8576,
                0.8466,
                0.8356,
                0.8246,
                0.8136,
                0.8026,
                0.7916,
                0.7806,
                0.7696,
                0.7586,
                0.7476,
                0.7366,
                0.7256,
                0.7146,
                0.7036,
                0.6926,
                0.6816,
                0.6706,
                0.6596,
                0.6486,
                0.6376,
                0.6266,
                0.6156,
                0.6042,
                0.592,
                0.579,
                0.5652,
                0.5506,
                0.5352,
                0.519,
                0.502,
                0.4842,
                0.4656,
                0.4462,
                0.426,
                0.405,
                0.3832,
                0.3606,
                0.3372,
                0.313,
                0.288,
                0.2622,
                0.2356,
                0.2082,
                0.18,
                0.151,
                0.1212,
                0.0906,
                0.0592
            ],
            "isRoad": 1,
            "dist(km)": 80.4672,
            "OC": 17760
        },
        "100km": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9974,
                0.9953,
                0.9926,
                0.9893,
                0.9854,
                0.9808,
                0.9757,
                0.9699,
                0.9635,
                0.9565,
                0.9489,
                0.9406,
                0.9318,
                0.9223,
                0.9122,
                0.9016,
                0.8906,
                0.8796,
                0.8686,
                0.8576,
                0.8466,
                0.8356,
                0.8246,
                0.8136,
                0.8026,
                0.7916,
                0.7806,
                0.7696,
                0.7586,
                0.7476,
                0.7366,
                0.7256,
                0.7146,
                0.7036,
                0.6926,
                0.6816,
                0.6706,
                0.6596,
                0.6486,
                0.6376,
                0.6266,
                0.6156,
                0.6042,
                0.592,
                0.579,
                0.5652,
                0.5506,
                0.5352,
                0.519,
                0.502,
                0.4842,
                0.4656,
                0.4462,
                0.426,
                0.405,
                0.3832,
                0.3606,
                0.3372,
                0.313,
                0.288,
                0.2622,
                0.2356,
                0.2082,
                0.18,
                0.151,
                0.1212,
                0.0906,
                0.0592
            ],
            "isRoad": 1,
            "dist(km)": 100,
            "OC": 23591
        },
        "150km": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9974,
                0.9953,
                0.9926,
                0.9893,
                0.9854,
                0.9808,
                0.9757,
                0.9699,
                0.9635,
                0.9565,
                0.9489,
                0.9406,
                0.9318,
                0.9223,
                0.9122,
                0.9016,
                0.8906,
                0.8796,
                0.8686,
                0.8576,
                0.8466,
                0.8356,
                0.8246,
                0.8136,
                0.8026,
                0.7916,
                0.7806,
                0.7696,
                0.7586,
                0.7476,
                0.7366,
                0.7256,
                0.7146,
                0.7036,
                0.6926,
                0.6816,
                0.6706,
                0.6596,
                0.6486,
                0.6376,
                0.6266,
                0.6156,
                0.6042,
                0.592,
                0.579,
                0.5652,
                0.5506,
                0.5352,
                0.519,
                0.502,
                0.4842,
                0.4656,
                0.4462,
                0.426,
                0.405,
                0.3832,
                0.3606,
                0.3372,
                0.313,
                0.288,
                0.2622,
                0.2356,
                0.2082,
                0.18,
                0.151,
                0.1212,
                0.0906,
                0.0592
            ],
            "isRoad": 1,
            "dist(km)": 150,
            "OC": 39700
        },
        "100Mile": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9974,
                0.9953,
                0.9926,
                0.9893,
                0.9854,
                0.9808,
                0.9757,
                0.9699,
                0.9635,
                0.9565,
                0.9489,
                0.9406,
                0.9318,
                0.9223,
                0.9122,
                0.9016,
                0.8906,
                0.8796,
                0.8686,
                0.8576,
                0.8466,
                0.8356,
                0.8246,
                0.8136,
                0.8026,
                0.7916,
                0.7806,
                0.7696,
                0.7586,
                0.7476,
                0.7366,
                0.7256,
                0.7146,
                0.7036,
                0.6926,
                0.6816,
                0.6706,
                0.6596,
                0.6486,
                0.6376,
                0.6266,
                0.6156,
                0.6042,
                0.592,
                0.579,
                0.5652,
                0.5506,
                0.5352,
                0.519,
                0.502,
                0.4842,
                0.4656,
                0.4462,
                0.426,
                0.405,
                0.3832,
                0.3606,
                0.3372,
                0.313,
                0.288,
                0.2622,
                0.2356,
                0.2082,
                0.18,
                0.151,
                0.1212,
                0.0906,
                0.0592
            ],
            "isRoad": 1,
            "dist(km)": 160.9344,
            "OC": 43500
        },
        "200km": {
            "conversions": [
                0.693,
                0.7263,
                0.7578,
                0.7874,
                0.8152,
                0.8413,
                0.8654,
                0.8878,
                0.9084,
                0.9271,
                0.944,
                0.96,
                0.976,
                0.9893,
                0.9973,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9974,
                0.9953,
                0.9926,
                0.9893,
                0.9854,
                0.9808,
                0.9757,
                0.9699,
                0.9635,
                0.9565,
                0.9489,
                0.9406,
                0.9318,
                0.9223,
                0.9122,
                0.9016,
                0.8906,
                0.8796,
                0.8686,
                0.8576,
                0.8466,
                0.8356,
                0.8246,
                0.8136,
                0.8026,
                0.7916,
                0.7806,
                0.7696,
                0.7586,
                0.7476,
                0.7366,
                0.7256,
                0.7146,
                0.7036,
                0.6926,
                0.6816,
                0.6706,
                0.6596,
                0.6486,
                0.6376,
                0.6266,
                0.6156,
                0.6042,
                0.592,
                0.579,
                0.5652,
                0.5506,
                0.5352,
                0.519,
                0.502,
                0.4842,
                0.4656,
                0.4462,
                0.426,
                0.405,
                0.3832,
                0.3606,
                0.3372,
                0.313,
                0.288,
                0.2622,
                0.2356,
                0.2082,
                0.18,
                0.151,
                0.1212,
                0.0906,
                0.0592
            ],
            "isRoad": 1,
            "dist(km)": 200,
            "OC": 57600
        }
    },
    [exports.Gender.Male]: {
        "50Hur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.8039,
                0.8493,
                0.8972,
                0.9241,
                0.9855,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0153,
                1.0055,
                0.9973,
                0.9878,
                0.9799,
                0.9707,
                0.9631,
                0.9542,
                0.9468,
                0.9383,
                0.9311,
                0.9229,
                0.9159,
                0.908,
                0.9012,
                0.8935,
                0.887,
                0.8795,
                0.8732,
                0.867,
                0.866,
                0.8619,
                0.8578,
                0.8538,
                0.8498,
                0.8459,
                0.8391,
                0.8314,
                0.8249,
                0.8175,
                0.843,
                0.8249,
                0.8075,
                0.7909,
                0.7758,
                0.7604,
                0.7457,
                0.7315,
                0.7185,
                0.7053,
                0.7381,
                0.7359,
                0.7329,
                0.7307,
                0.7285,
                0.7256,
                0.7235,
                0.6913,
                0.6612,
                0.6342,
                0.6266,
                0.6003,
                0.5762,
                0.5534,
                0.5328,
                0.5137,
                0.4876,
                0.4641,
                0.443,
                0.4234,
                0.4056,
                0.3842,
                0.365,
                0.3476,
                0.3318,
                0.3174,
                0.2987,
                0.2821,
                0.2672,
                0.2538,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 6.25
        },
        "55Hur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.8039,
                0.8493,
                0.8972,
                0.9241,
                0.9855,
                0.9992,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0153,
                1.0055,
                0.9973,
                0.9878,
                0.9799,
                0.9707,
                0.9631,
                0.9542,
                0.9468,
                0.9383,
                0.9311,
                0.9229,
                0.9159,
                0.908,
                0.9012,
                0.8935,
                0.887,
                0.8795,
                0.8732,
                0.867,
                0.866,
                0.8619,
                0.8578,
                0.8538,
                0.8498,
                0.8459,
                0.8391,
                0.8314,
                0.8249,
                0.8175,
                0.843,
                0.8249,
                0.8075,
                0.7909,
                0.7758,
                0.7604,
                0.7457,
                0.7315,
                0.7185,
                0.7053,
                0.7381,
                0.7359,
                0.7329,
                0.7307,
                0.7285,
                0.7256,
                0.7235,
                0.6913,
                0.6612,
                0.6342,
                0.6266,
                0.6003,
                0.5762,
                0.5534,
                0.5328,
                0.5137,
                0.4876,
                0.4641,
                0.443,
                0.4234,
                0.4056,
                0.3842,
                0.365,
                0.3476,
                0.3318,
                0.3174,
                0.2987,
                0.2821,
                0.2672,
                0.2538,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 6.76
        },
        "60Hur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.8039,
                0.8494,
                0.8972,
                0.9241,
                0.9855,
                0.9992,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0153,
                1.0055,
                0.9973,
                0.9878,
                0.9799,
                0.9707,
                0.9631,
                0.9542,
                0.9468,
                0.9383,
                0.9311,
                0.9229,
                0.9159,
                0.908,
                0.9012,
                0.8935,
                0.887,
                0.8795,
                0.8732,
                0.867,
                0.866,
                0.8619,
                0.8578,
                0.8538,
                0.8498,
                0.8459,
                0.8391,
                0.8314,
                0.8249,
                0.8175,
                0.843,
                0.8249,
                0.8075,
                0.7909,
                0.7758,
                0.7604,
                0.7457,
                0.7315,
                0.7185,
                0.7053,
                0.7381,
                0.7359,
                0.7329,
                0.7307,
                0.7285,
                0.7256,
                0.7235,
                0.6913,
                0.6612,
                0.6342,
                0.6266,
                0.6003,
                0.5762,
                0.5534,
                0.5328,
                0.5137,
                0.4876,
                0.4641,
                0.443,
                0.4234,
                0.4056,
                0.3842,
                0.365,
                0.3476,
                0.3318,
                0.3174,
                0.2987,
                0.2821,
                0.2672,
                0.2538,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 7.3
        },
        "ShortHur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.8039,
                0.8493,
                0.8972,
                0.9241,
                0.9855,
                0.9992,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0148,
                1.0118,
                1.0088,
                1.0059,
                1.0029,
                0.9999,
                0.9912,
                0.9824,
                0.9737,
                0.9649,
                0.9562,
                0.9483,
                0.9404,
                0.9326,
                0.9247,
                0.9168,
                0.9096,
                0.9024,
                0.8952,
                0.888,
                0.9745,
                0.9613,
                0.9481,
                0.9349,
                0.9217,
                0.9085,
                0.897,
                0.8855,
                0.8739,
                0.8624,
                0.9017,
                0.8879,
                0.8741,
                0.8602,
                0.8464,
                0.8326,
                0.8208,
                0.8089,
                0.7971,
                0.7852,
                0.9938,
                0.9838,
                0.9738,
                0.9637,
                0.9537,
                0.9437,
                0.9237,
                0.9037,
                0.8838,
                0.8638,
                0.8607,
                0.8361,
                0.8115,
                0.7869,
                0.7623,
                0.7377,
                0.7131,
                0.6885,
                0.664,
                0.6394,
                0.6148,
                0.5875,
                0.5601,
                0.5328,
                0.5054,
                0.4781,
                0.447,
                0.416,
                0.3849,
                0.3539,
                0.3228
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 12.91
        },
        "LongHur": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.8692,
                0.9083,
                0.9375,
                0.9588,
                0.9742,
                0.985,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9964,
                0.9855,
                0.975,
                0.9647,
                0.9545,
                0.9447,
                0.9349,
                0.9254,
                0.9162,
                0.9069,
                0.8981,
                0.8892,
                0.8806,
                0.8723,
                0.8639,
                0.8558,
                0.8478,
                0.84,
                0.8052,
                0.8032,
                0.8014,
                0.7995,
                0.7976,
                0.7958,
                0.794,
                0.7828,
                0.7719,
                0.7614,
                1.1056,
                1.0979,
                1.0899,
                1.0824,
                1.0627,
                1.0435,
                1.0252,
                1.0075,
                0.9903,
                0.9738,
                0.9945,
                0.9724,
                0.9512,
                0.9309,
                0.9115,
                0.8931,
                0.8752,
                0.858,
                0.8415,
                0.8256,
                0.8103,
                0.7958,
                0.7818,
                0.7683,
                0.7551,
                0.7425,
                0.7045,
                0.6702,
                0.6391,
                0.6107,
                0.5847,
                0.5439,
                0.5085,
                0.4773,
                0.4499,
                0.4253,
                0.3692,
                0.3262,
                0.2921,
                0.2645,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 46.78
        },
        "Steeple": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.3336,
                1.3842,
                1.4235,
                1.4444,
                0.9818,
                0.9929,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9897,
                0.9798,
                0.97,
                0.9605,
                0.9511,
                0.9419,
                0.9329,
                0.9241,
                0.9154,
                0.9069,
                0.8986,
                0.8904,
                0.8823,
                0.8744,
                0.8666,
                0.859,
                0.8515,
                0.8442,
                0.8369,
                0.8298,
                0.8228,
                0.8159,
                0.8092,
                0.8025,
                0.7959,
                0.7895,
                0.7832,
                0.7769,
                1.2139,
                1.1862,
                1.1599,
                1.1346,
                1.1106,
                1.0875,
                1.0653,
                1.044,
                1.0236,
                1.0039,
                0.985,
                0.9668,
                0.9493,
                0.9323,
                0.916,
                0.9002,
                0.885,
                0.8702,
                0.856,
                0.8422,
                0.8288,
                0.8066,
                0.7856,
                0.7657,
                0.7467,
                0.7287,
                0.7007,
                0.6747,
                0.6506,
                0.6281,
                0.6072,
                0.5748,
                0.5456,
                0.5193,
                0.4954,
                0.4736,
                0.4504,
                0.4293,
                0.4101,
                0.3926,
                0.3765
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 473.63
        },
        "1500mWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9968,
                0.9945,
                0.9915,
                0.9879,
                0.9837,
                0.9788,
                0.9734,
                0.9673,
                0.9605,
                0.9532,
                0.9458,
                0.9384,
                0.931,
                0.9235,
                0.9161,
                0.9087,
                0.9013,
                0.8939,
                0.8865,
                0.879,
                0.8716,
                0.8642,
                0.8568,
                0.8494,
                0.842,
                0.8345,
                0.8269,
                0.8193,
                0.8116,
                0.8039,
                0.796,
                0.7881,
                0.7801,
                0.772,
                0.7639,
                0.7557,
                0.7474,
                0.739,
                0.7306,
                0.722,
                0.7134,
                0.7048,
                0.696,
                0.6872,
                0.6783,
                0.6693,
                0.6603,
                0.6512,
                0.642,
                0.6327,
                0.6234,
                0.6139,
                0.6044,
                0.5949,
                0.5852,
                0.5755,
                0.5657,
                0.5558,
                0.5459,
                0.5358,
                0.5257,
                0.5156,
                0.5053,
                0.495,
                0.4846,
                0.4741,
                0.4636,
                0.4529,
                0.4422,
                0.4315,
                0.4206
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 309
        },
        "1MileWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9985,
                0.9968,
                0.9945,
                0.9916,
                0.988,
                0.9838,
                0.9789,
                0.9735,
                0.9674,
                0.9606,
                0.9533,
                0.9459,
                0.9385,
                0.9311,
                0.9237,
                0.9162,
                0.9088,
                0.9014,
                0.894,
                0.8866,
                0.8792,
                0.8718,
                0.8643,
                0.8569,
                0.8495,
                0.8421,
                0.8346,
                0.8271,
                0.8195,
                0.8118,
                0.804,
                0.7962,
                0.7882,
                0.7802,
                0.7722,
                0.764,
                0.7558,
                0.7475,
                0.7391,
                0.7307,
                0.7222,
                0.7136,
                0.7049,
                0.6961,
                0.6873,
                0.6784,
                0.6694,
                0.6604,
                0.6512,
                0.642,
                0.6327,
                0.6234,
                0.6139,
                0.6044,
                0.5948,
                0.5852,
                0.5755,
                0.5656,
                0.5558,
                0.5458,
                0.5357,
                0.5256,
                0.5154,
                0.5052,
                0.4948,
                0.4844,
                0.4739,
                0.4634,
                0.4527,
                0.442,
                0.4312,
                0.4203
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 332.37
        },
        "3kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9987,
                0.9972,
                0.995,
                0.9922,
                0.9887,
                0.9846,
                0.9799,
                0.9746,
                0.9686,
                0.9621,
                0.9549,
                0.9475,
                0.9401,
                0.9327,
                0.9253,
                0.9179,
                0.9105,
                0.9031,
                0.8957,
                0.8883,
                0.8809,
                0.8735,
                0.8661,
                0.8587,
                0.8513,
                0.8439,
                0.8364,
                0.8289,
                0.8213,
                0.8136,
                0.8058,
                0.798,
                0.7901,
                0.782,
                0.7739,
                0.7658,
                0.7575,
                0.7492,
                0.7407,
                0.7322,
                0.7236,
                0.715,
                0.7062,
                0.6974,
                0.6885,
                0.6795,
                0.6704,
                0.6612,
                0.652,
                0.6426,
                0.6332,
                0.6237,
                0.6142,
                0.6045,
                0.5948,
                0.585,
                0.5751,
                0.5651,
                0.555,
                0.5449,
                0.5346,
                0.5243,
                0.5139,
                0.5035,
                0.4929,
                0.4823,
                0.4715,
                0.4607,
                0.4499,
                0.4389,
                0.4278,
                0.4167
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 631.42
        },
        "5kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9991,
                0.9977,
                0.9956,
                0.993,
                0.9897,
                0.9858,
                0.9813,
                0.9762,
                0.9704,
                0.9641,
                0.9571,
                0.9497,
                0.9423,
                0.9349,
                0.9275,
                0.9202,
                0.9128,
                0.9054,
                0.898,
                0.8907,
                0.8833,
                0.8759,
                0.8685,
                0.8611,
                0.8538,
                0.8464,
                0.839,
                0.8315,
                0.8239,
                0.8162,
                0.8085,
                0.8006,
                0.7927,
                0.7846,
                0.7765,
                0.7683,
                0.76,
                0.7516,
                0.7431,
                0.7345,
                0.7258,
                0.717,
                0.7082,
                0.6992,
                0.6902,
                0.6811,
                0.6718,
                0.6625,
                0.6531,
                0.6436,
                0.634,
                0.6244,
                0.6146,
                0.6047,
                0.5948,
                0.5847,
                0.5746,
                0.5644,
                0.5541,
                0.5437,
                0.5332,
                0.5226,
                0.5119,
                0.5011,
                0.4903,
                0.4793,
                0.4683,
                0.4571,
                0.4459,
                0.4346,
                0.4232,
                0.4117
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 1077.59
        },
        "8kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9994,
                0.9983,
                0.9965,
                0.9941,
                0.9911,
                0.9875,
                0.9833,
                0.9785,
                0.973,
                0.9669,
                0.9602,
                0.953,
                0.9456,
                0.9383,
                0.931,
                0.9236,
                0.9163,
                0.9089,
                0.9016,
                0.8942,
                0.8869,
                0.8795,
                0.8722,
                0.8648,
                0.8575,
                0.8501,
                0.8428,
                0.8354,
                0.8278,
                0.8202,
                0.8124,
                0.8046,
                0.7966,
                0.7885,
                0.7804,
                0.7721,
                0.7637,
                0.7552,
                0.7467,
                0.738,
                0.7292,
                0.7203,
                0.7113,
                0.7021,
                0.6929,
                0.6836,
                0.6742,
                0.6647,
                0.655,
                0.6453,
                0.6354,
                0.6255,
                0.6154,
                0.6053,
                0.595,
                0.5846,
                0.5742,
                0.5636,
                0.5529,
                0.5421,
                0.5312,
                0.5202,
                0.5091,
                0.4979,
                0.4866,
                0.4752,
                0.4637,
                0.4521,
                0.4403,
                0.4285,
                0.4165,
                0.4045
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 1766
        },
        "10kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9986,
                0.997,
                0.9948,
                0.992,
                0.9886,
                0.9846,
                0.9799,
                0.9746,
                0.9688,
                0.9623,
                0.9552,
                0.9479,
                0.9405,
                0.9332,
                0.9259,
                0.9186,
                0.9112,
                0.9039,
                0.8966,
                0.8893,
                0.8819,
                0.8746,
                0.8673,
                0.86,
                0.8526,
                0.8453,
                0.8379,
                0.8304,
                0.8228,
                0.8151,
                0.8072,
                0.7993,
                0.7912,
                0.783,
                0.7747,
                0.7663,
                0.7577,
                0.7491,
                0.7403,
                0.7315,
                0.7225,
                0.7134,
                0.7042,
                0.6948,
                0.6854,
                0.6758,
                0.6662,
                0.6564,
                0.6465,
                0.6365,
                0.6264,
                0.6161,
                0.6058,
                0.5953,
                0.5847,
                0.574,
                0.5632,
                0.5523,
                0.5413,
                0.5301,
                0.5189,
                0.5075,
                0.496,
                0.4844,
                0.4727,
                0.4608,
                0.4489,
                0.4368,
                0.4247,
                0.4124,
                0.4
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 2231
        },
        "15kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9994,
                0.9982,
                0.9964,
                0.994,
                0.991,
                0.9874,
                0.9832,
                0.9785,
                0.9731,
                0.9671,
                0.9605,
                0.9533,
                0.9461,
                0.9388,
                0.9315,
                0.9243,
                0.917,
                0.9097,
                0.9024,
                0.8952,
                0.8879,
                0.8806,
                0.8734,
                0.8661,
                0.8588,
                0.8515,
                0.8443,
                0.8369,
                0.8293,
                0.8216,
                0.8138,
                0.8059,
                0.7978,
                0.7896,
                0.7812,
                0.7728,
                0.7641,
                0.7554,
                0.7465,
                0.7374,
                0.7283,
                0.7189,
                0.7095,
                0.6999,
                0.6902,
                0.6803,
                0.6703,
                0.6602,
                0.6499,
                0.6395,
                0.629,
                0.6183,
                0.6075,
                0.5966,
                0.5855,
                0.5742,
                0.5629,
                0.5514,
                0.5398,
                0.528,
                0.5161,
                0.504,
                0.4919,
                0.4795,
                0.4671,
                0.4545,
                0.4418,
                0.4289,
                0.4159,
                0.4028,
                0.3895
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 3424
        },
        "20kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.999,
                0.9976,
                0.9957,
                0.9931,
                0.99,
                0.9862,
                0.9819,
                0.977,
                0.9715,
                0.9654,
                0.9587,
                0.9515,
                0.9443,
                0.9371,
                0.9299,
                0.9227,
                0.9154,
                0.9082,
                0.901,
                0.8938,
                0.8866,
                0.8793,
                0.8721,
                0.8649,
                0.8577,
                0.8505,
                0.8432,
                0.8358,
                0.8282,
                0.8205,
                0.8126,
                0.8045,
                0.7963,
                0.7879,
                0.7794,
                0.7707,
                0.7618,
                0.7528,
                0.7437,
                0.7343,
                0.7248,
                0.7152,
                0.7054,
                0.6954,
                0.6853,
                0.675,
                0.6645,
                0.6539,
                0.6432,
                0.6322,
                0.6211,
                0.6099,
                0.5985,
                0.5869,
                0.5752,
                0.5633,
                0.5513,
                0.5391,
                0.5267,
                0.5142,
                0.5015,
                0.4887,
                0.4757,
                0.4625,
                0.4492,
                0.4357,
                0.4221,
                0.4083,
                0.3943,
                0.3802
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 4641
        },
        "H.Mar.Walk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9992,
                0.9979,
                0.996,
                0.9935,
                0.9905,
                0.9868,
                0.9826,
                0.9778,
                0.9724,
                0.9664,
                0.9598,
                0.9527,
                0.9455,
                0.9383,
                0.9311,
                0.9239,
                0.9167,
                0.9095,
                0.9023,
                0.8951,
                0.8879,
                0.8807,
                0.8734,
                0.8662,
                0.859,
                0.8518,
                0.8446,
                0.8372,
                0.8296,
                0.8219,
                0.814,
                0.806,
                0.7978,
                0.7894,
                0.7809,
                0.7722,
                0.7633,
                0.7542,
                0.7451,
                0.7357,
                0.7262,
                0.7165,
                0.7066,
                0.6966,
                0.6864,
                0.6761,
                0.6655,
                0.6549,
                0.644,
                0.633,
                0.6218,
                0.6105,
                0.599,
                0.5873,
                0.5755,
                0.5635,
                0.5514,
                0.539,
                0.5265,
                0.5139,
                0.5011,
                0.4881,
                0.475,
                0.4616,
                0.4482,
                0.4345,
                0.4207,
                0.4068,
                0.3926,
                0.3783
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 4919
        },
        "25kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9986,
                0.997,
                0.9949,
                0.9922,
                0.9889,
                0.985,
                0.9806,
                0.9755,
                0.9699,
                0.9637,
                0.9569,
                0.9498,
                0.9426,
                0.9354,
                0.9283,
                0.9211,
                0.9139,
                0.9068,
                0.8996,
                0.8924,
                0.8853,
                0.8781,
                0.8709,
                0.8638,
                0.8566,
                0.8494,
                0.8422,
                0.8347,
                0.8271,
                0.8192,
                0.8112,
                0.8031,
                0.7947,
                0.7861,
                0.7774,
                0.7685,
                0.7594,
                0.7501,
                0.7407,
                0.731,
                0.7212,
                0.7112,
                0.701,
                0.6906,
                0.6801,
                0.6693,
                0.6584,
                0.6473,
                0.636,
                0.6246,
                0.6129,
                0.6011,
                0.5891,
                0.5769,
                0.5645,
                0.5519,
                0.5392,
                0.5263,
                0.5132,
                0.4999,
                0.4864,
                0.4728,
                0.4589,
                0.4449,
                0.4307,
                0.4164,
                0.4018,
                0.387,
                0.3721
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 5931
        },
        "30kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9993,
                0.9981,
                0.9964,
                0.9941,
                0.9912,
                0.9878,
                0.9838,
                0.9792,
                0.974,
                0.9683,
                0.962,
                0.9551,
                0.948,
                0.9409,
                0.9338,
                0.9267,
                0.9196,
                0.9125,
                0.9053,
                0.8982,
                0.8911,
                0.884,
                0.8769,
                0.8698,
                0.8627,
                0.8556,
                0.8484,
                0.8411,
                0.8336,
                0.8259,
                0.818,
                0.8098,
                0.8015,
                0.793,
                0.7842,
                0.7753,
                0.7661,
                0.7568,
                0.7472,
                0.7375,
                0.7275,
                0.7173,
                0.7069,
                0.6964,
                0.6856,
                0.6746,
                0.6634,
                0.652,
                0.6404,
                0.6286,
                0.6165,
                0.6043,
                0.5919,
                0.5792,
                0.5664,
                0.5534,
                0.5401,
                0.5267,
                0.513,
                0.4991,
                0.4851,
                0.4708,
                0.4563,
                0.4416,
                0.4268,
                0.4117,
                0.3964,
                0.3809,
                0.3652
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 7264
        },
        "40kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9986,
                0.997,
                0.995,
                0.9923,
                0.9892,
                0.9854,
                0.9812,
                0.9763,
                0.971,
                0.965,
                0.9586,
                0.9516,
                0.9446,
                0.9376,
                0.9306,
                0.9236,
                0.9166,
                0.9096,
                0.9026,
                0.8956,
                0.8886,
                0.8816,
                0.8746,
                0.8675,
                0.8605,
                0.8535,
                0.8464,
                0.839,
                0.8313,
                0.8234,
                0.8152,
                0.8068,
                0.7981,
                0.7892,
                0.7801,
                0.7706,
                0.761,
                0.7511,
                0.7409,
                0.7305,
                0.7198,
                0.7089,
                0.6977,
                0.6863,
                0.6746,
                0.6627,
                0.6505,
                0.6381,
                0.6255,
                0.6125,
                0.5994,
                0.5859,
                0.5723,
                0.5583,
                0.5442,
                0.5297,
                0.5151,
                0.5001,
                0.485,
                0.4695,
                0.4539,
                0.4379,
                0.4217,
                0.4053,
                0.3886,
                0.3717,
                0.3545
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 10038
        },
        "Mar.Walk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9989,
                0.9976,
                0.9956,
                0.9932,
                0.9902,
                0.9866,
                0.9826,
                0.9779,
                0.9727,
                0.967,
                0.9607,
                0.9539,
                0.947,
                0.94,
                0.933,
                0.926,
                0.919,
                0.912,
                0.9051,
                0.8981,
                0.8911,
                0.8841,
                0.8771,
                0.8701,
                0.8632,
                0.8562,
                0.8491,
                0.8418,
                0.8342,
                0.8263,
                0.8182,
                0.8099,
                0.8012,
                0.7923,
                0.7832,
                0.7738,
                0.7641,
                0.7542,
                0.744,
                0.7335,
                0.7228,
                0.7118,
                0.7006,
                0.6891,
                0.6773,
                0.6653,
                0.653,
                0.6405,
                0.6277,
                0.6146,
                0.6013,
                0.5877,
                0.5739,
                0.5598,
                0.5454,
                0.5308,
                0.5159,
                0.5008,
                0.4854,
                0.4697,
                0.4538,
                0.4376,
                0.4212,
                0.4045,
                0.3875,
                0.3703,
                0.3528
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 10655
        },
        "50kmWalk": {
            "conversions": [
                0.6496,
                0.6869,
                0.722,
                0.7549,
                0.7856,
                0.8141,
                0.8404,
                0.8645,
                0.8864,
                0.9061,
                0.9236,
                0.9389,
                0.952,
                0.964,
                0.976,
                0.988,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9989,
                0.9976,
                0.9958,
                0.9934,
                0.9904,
                0.987,
                0.983,
                0.9785,
                0.9735,
                0.9679,
                0.9618,
                0.9552,
                0.9483,
                0.9414,
                0.9345,
                0.9276,
                0.9207,
                0.9138,
                0.9069,
                0.9,
                0.8931,
                0.8862,
                0.8793,
                0.8724,
                0.8655,
                0.8586,
                0.8516,
                0.8443,
                0.8367,
                0.8288,
                0.8206,
                0.8122,
                0.8034,
                0.7943,
                0.785,
                0.7753,
                0.7654,
                0.7551,
                0.7446,
                0.7338,
                0.7226,
                0.7112,
                0.6995,
                0.6875,
                0.6751,
                0.6625,
                0.6496,
                0.6364,
                0.6229,
                0.6091,
                0.595,
                0.5806,
                0.566,
                0.551,
                0.5357,
                0.5201,
                0.5043,
                0.4881,
                0.4716,
                0.4549,
                0.4378,
                0.4205,
                0.4028,
                0.3849,
                0.3666,
                0.3481
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 12929
        },
        "HighJump": {
            "conversions": [
                0,
                0,
                0,
                1.956,
                1.6554,
                1.4671,
                1.3316,
                1.2377,
                1.1666,
                1.1182,
                1.08,
                1.0515,
                1.0303,
                1.0147,
                1.0035,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0079,
                1.0169,
                1.0261,
                1.0354,
                1.0449,
                1.0546,
                1.0645,
                1.0745,
                1.0848,
                1.0952,
                1.1059,
                1.1168,
                1.1278,
                1.1391,
                1.1506,
                1.1624,
                1.1744,
                1.1867,
                1.1992,
                1.2119,
                1.225,
                1.2383,
                1.252,
                1.2659,
                1.2801,
                1.2947,
                1.3096,
                1.3248,
                1.3405,
                1.3564,
                1.3728,
                1.3896,
                1.4068,
                1.4244,
                1.4425,
                1.461,
                1.48,
                1.4995,
                1.5196,
                1.5402,
                1.5613,
                1.583,
                1.6054,
                1.6283,
                1.652,
                1.6763,
                1.7014,
                1.7272,
                1.7539,
                1.7813,
                1.8097,
                1.8389,
                1.8691,
                1.9003,
                1.9326,
                1.966,
                2.0099,
                2.0559,
                2.104,
                2.1543,
                2.2072,
                2.2854,
                2.3694,
                2.4598,
                2.5574,
                2.663,
                2.7968,
                2.9447,
                3.1091,
                3.293,
                3.5
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 2.45
        },
        "PoleVault": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.4619,
                1.3323,
                1.2403,
                1.1732,
                1.1234,
                1.0863,
                1.0586,
                1.038,
                1.0149,
                1.0033,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0076,
                1.0152,
                1.023,
                1.031,
                1.039,
                1.0515,
                1.0643,
                1.0774,
                1.0908,
                1.1046,
                1.1187,
                1.1332,
                1.1481,
                1.1634,
                1.1791,
                1.1952,
                1.2118,
                1.2288,
                1.2463,
                1.2643,
                1.2828,
                1.3019,
                1.3216,
                1.3419,
                1.3628,
                1.3844,
                1.4067,
                1.4297,
                1.4534,
                1.478,
                1.5034,
                1.5297,
                1.5569,
                1.5851,
                1.6144,
                1.6448,
                1.6763,
                1.7091,
                1.7431,
                1.7786,
                1.8155,
                1.854,
                1.8942,
                1.9362,
                1.98,
                2.0259,
                2.0739,
                2.1243,
                2.1771,
                2.2327,
                2.2912,
                2.3529,
                2.4179,
                2.4867,
                2.5595,
                2.6476,
                2.7419,
                2.8432,
                2.9522,
                3.07,
                3.2316,
                3.4111,
                3.6117,
                3.8375,
                4.0933,
                4.3857,
                4.7231,
                5.1166,
                5.5818,
                6.14
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 6.14
        },
        "LongJump": {
            "conversions": [
                0,
                0,
                0,
                2.199,
                1.8568,
                1.6332,
                1.4745,
                1.3575,
                1.2701,
                1.203,
                1.1506,
                1.1095,
                1.0772,
                1.0517,
                1.0318,
                1.0113,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0098,
                1.0198,
                1.03,
                1.0404,
                1.051,
                1.0625,
                1.0743,
                1.0863,
                1.0986,
                1.1112,
                1.1241,
                1.1373,
                1.1507,
                1.1646,
                1.1787,
                1.1932,
                1.208,
                1.2233,
                1.2389,
                1.2549,
                1.2713,
                1.2882,
                1.3056,
                1.3234,
                1.3417,
                1.3605,
                1.3799,
                1.3998,
                1.4203,
                1.4414,
                1.4631,
                1.4855,
                1.5086,
                1.5324,
                1.557,
                1.5824,
                1.6087,
                1.6358,
                1.6639,
                1.6929,
                1.7229,
                1.7541,
                1.7863,
                1.8198,
                1.8546,
                1.8907,
                1.9283,
                1.9674,
                2.0082,
                2.0506,
                2.1051,
                2.1625,
                2.2232,
                2.2873,
                2.3553,
                2.467,
                2.5897,
                2.7253,
                2.876,
                3.0442,
                3.2664,
                3.5236,
                3.8248,
                4.1822,
                4.6134,
                5.2585,
                6.1134,
                7.3002,
                9.0587,
                11.9333
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 8.95
        },
        "TripleJump": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.2425,
                1.1799,
                1.1325,
                1.0965,
                1.0692,
                1.0484,
                1.0327,
                1.0218,
                1.0105,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0025,
                1.005,
                1.0076,
                1.0101,
                1.0127,
                1.024,
                1.0357,
                1.0475,
                1.0597,
                1.0721,
                1.0848,
                1.0979,
                1.1112,
                1.1249,
                1.1389,
                1.1533,
                1.168,
                1.1831,
                1.1986,
                1.2145,
                1.2308,
                1.2476,
                1.2649,
                1.2827,
                1.3009,
                1.3198,
                1.3394,
                1.3594,
                1.3802,
                1.4015,
                1.4233,
                1.4458,
                1.469,
                1.493,
                1.5178,
                1.5434,
                1.5699,
                1.5974,
                1.6258,
                1.6552,
                1.6857,
                1.7174,
                1.7502,
                1.7844,
                1.8199,
                1.8569,
                1.8953,
                1.9355,
                1.9773,
                2.021,
                2.0667,
                2.1144,
                2.1645,
                2.2169,
                2.272,
                2.3569,
                2.4484,
                2.5473,
                2.6545,
                2.7712,
                2.9595,
                3.1753,
                3.4251,
                3.7174,
                4.0644,
                4.6897,
                5.5424,
                6.774,
                8.7095,
                12.1933
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 18.29
        },
        "Hammer": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.6978,
                1.4182,
                1.2608,
                1.1645,
                1.1027,
                1.0625,
                1.0326,
                1.0086,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.015,
                1.0304,
                1.0464,
                1.0628,
                1.0798,
                1.0992,
                1.1194,
                1.1403,
                1.1621,
                1.1846,
                1.208,
                1.2324,
                1.2578,
                1.2843,
                1.1656,
                1.19,
                1.2156,
                1.2422,
                1.2701,
                1.2992,
                1.3297,
                1.3616,
                1.3952,
                1.4304,
                1.4058,
                1.4384,
                1.4725,
                1.5083,
                1.5458,
                1.5853,
                1.6268,
                1.6706,
                1.7168,
                1.7656,
                1.6112,
                1.6578,
                1.7072,
                1.7597,
                1.8155,
                1.8749,
                1.9384,
                2.0063,
                2.0791,
                2.1575,
                2.2417,
                2.333,
                2.432,
                2.5399,
                2.6577,
                2.787,
                2.9295,
                3.0874,
                3.2632,
                3.4604,
                3.6828,
                3.9358,
                4.2261,
                4.5627,
                4.9576,
                5.4272,
                5.9952,
                6.6959,
                7.5821,
                8.7387,
                10.3117
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 86.74
        },
        "Shotput": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.3528,
                1.271,
                1.2035,
                1.1468,
                1.0994,
                1.0596,
                1.0185,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0053,
                1.0107,
                1.0161,
                1.0216,
                1.0271,
                1.0432,
                1.0599,
                1.077,
                1.0948,
                1.1131,
                1.136,
                1.1598,
                1.1846,
                1.2106,
                1.1468,
                1.1701,
                1.1944,
                1.2198,
                1.2462,
                1.2736,
                1.3025,
                1.3325,
                1.364,
                1.397,
                1.2703,
                1.3061,
                1.3439,
                1.3841,
                1.4266,
                1.4719,
                1.5202,
                1.5719,
                1.6271,
                1.6864,
                1.3017,
                1.3377,
                1.3758,
                1.4161,
                1.4589,
                1.5043,
                1.5526,
                1.604,
                1.659,
                1.718,
                1.7816,
                1.8498,
                1.9234,
                2.0032,
                2.0898,
                2.1843,
                2.2877,
                2.4014,
                2.527,
                2.6665,
                2.8222,
                2.9972,
                3.1954,
                3.4217,
                3.6824,
                3.9862,
                4.3446,
                4.7738,
                5.2972,
                5.9494,
                6.7847
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 23.12
        },
        "Discus": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.4911,
                1.362,
                1.2681,
                1.1979,
                1.1448,
                1.1044,
                1.0583,
                1.0289,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0096,
                1.0194,
                1.0293,
                1.0396,
                1.0499,
                1.0701,
                1.091,
                1.1128,
                1.1355,
                1,
                1.0183,
                1.0371,
                1.0568,
                1.0772,
                1.0984,
                1.126,
                1.1549,
                1.1854,
                1.2176,
                1.1232,
                1.1467,
                1.1712,
                1.1968,
                1.2235,
                1.2514,
                1.2806,
                1.3112,
                1.3432,
                1.377,
                1.4127,
                1.45,
                1.4893,
                1.5309,
                1.5748,
                1.6217,
                1.6711,
                1.7236,
                1.7795,
                1.8391,
                1.9033,
                1.9718,
                2.0454,
                2.1247,
                2.2105,
                2.3034,
                2.4045,
                2.5148,
                2.6357,
                2.7689,
                2.9162,
                3.0801,
                3.2636,
                3.4702,
                3.7049,
                3.9735,
                4.2841,
                4.6474,
                5.0781,
                5.5967,
                6.2333
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 74.08
        },
        "Javelin": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.4743,
                1.3339,
                1.2316,
                1.1555,
                1.0982,
                1.0548,
                1.0258,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0084,
                1.0169,
                1.0256,
                1.0344,
                1.0434,
                1.0594,
                1.0758,
                1.0928,
                1.1102,
                1.1283,
                1.147,
                1.1663,
                1.1862,
                1.2069,
                1.2283,
                1.2505,
                1.2735,
                1.2973,
                1.322,
                1.279,
                1.3025,
                1.3269,
                1.3522,
                1.3785,
                1.4059,
                1.4344,
                1.464,
                1.4949,
                1.5271,
                1.4804,
                1.5114,
                1.5437,
                1.5775,
                1.6128,
                1.6496,
                1.6881,
                1.7286,
                1.771,
                1.8155,
                1.7461,
                1.7932,
                1.8428,
                1.8953,
                1.9509,
                2.0098,
                2.0724,
                2.139,
                2.2101,
                2.286,
                2.0612,
                2.1526,
                2.2524,
                2.362,
                2.4827,
                2.6164,
                2.7654,
                2.9324,
                3.1208,
                3.3352,
                3.5811,
                3.8662,
                4.2006,
                4.5983,
                5.0792,
                5.6724,
                6.4226,
                7.4014,
                8.7322,
                10.6465,
                13.6357
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 98.48
        },
        "Weight": {
            "conversions": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1.3107,
                1.2181,
                1.1534,
                1.1075,
                1.0744,
                1.0508,
                1.0262,
                1.0102,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1.0049,
                1.0099,
                1.015,
                1.0201,
                1.0252,
                1.0383,
                1.0518,
                1.0656,
                1.0797,
                1.0943,
                1.1093,
                1.1246,
                1.1404,
                1.1567,
                1.1734,
                1.1906,
                1.2082,
                1.2264,
                1.2452,
                1.1123,
                1.1306,
                1.1496,
                1.1692,
                1.1895,
                1.2105,
                1.2324,
                1.255,
                1.2785,
                1.3029,
                1.1392,
                1.1617,
                1.1852,
                1.2096,
                1.235,
                1.2615,
                1.2892,
                1.3181,
                1.3483,
                1.3799,
                1.2943,
                1.3266,
                1.3605,
                1.3962,
                1.4338,
                1.4735,
                1.5155,
                1.5599,
                1.607,
                1.6571,
                1.573,
                1.6238,
                1.678,
                1.736,
                1.7981,
                1.8648,
                1.9366,
                2.0143,
                2.0983,
                2.1898,
                2.2895,
                2.3988,
                2.519,
                2.6519,
                2.7996,
                2.9647,
                3.1505,
                3.3612,
                3.6022,
                3.8803,
                4.2049
            ],
            "isRoad": 0,
            "dist(km)": 0,
            "OC": 25.86
        },
        "50m": {
            "conversions": [
                0.5197,
                0.6346,
                0.7066,
                0.7579,
                0.796,
                0.8269,
                0.8523,
                0.8738,
                0.8921,
                0.9067,
                0.9218,
                0.9327,
                0.9438,
                0.9552,
                0.9635,
                0.9719,
                0.9805,
                0.9875,
                0.9964,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9982,
                0.9893,
                0.9823,
                0.9736,
                0.9668,
                0.9585,
                0.9519,
                0.9454,
                0.9374,
                0.9311,
                0.9233,
                0.9172,
                0.9097,
                0.9038,
                0.8979,
                0.8907,
                0.885,
                0.878,
                0.8724,
                0.867,
                0.8602,
                0.8549,
                0.8484,
                0.8432,
                0.8381,
                0.8318,
                0.8256,
                0.8207,
                0.8159,
                0.8099,
                0.8052,
                0.7994,
                0.7948,
                0.7903,
                0.7847,
                0.7803,
                0.7748,
                0.7694,
                0.7641,
                0.7589,
                0.7527,
                0.7476,
                0.7397,
                0.7328,
                0.7251,
                0.7176,
                0.7103,
                0.7013,
                0.6925,
                0.6831,
                0.6748,
                0.6659,
                0.6464,
                0.6274,
                0.6088,
                0.5894,
                0.5705,
                0.5405,
                0.5106,
                0.4805,
                0.4504,
                0.4203,
                0.3847,
                0.3489,
                0.3132,
                0.2774,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.05,
            "OC": 5.54
        },
        "55m": {
            "conversions": [
                0.5255,
                0.6399,
                0.7124,
                0.7634,
                0.8024,
                0.8338,
                0.859,
                0.8805,
                0.8991,
                0.9142,
                0.9285,
                0.9402,
                0.9522,
                0.9614,
                0.9707,
                0.9787,
                0.9868,
                0.9933,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9983,
                0.99,
                0.9819,
                0.9739,
                0.966,
                0.9598,
                0.9522,
                0.9446,
                0.9372,
                0.9314,
                0.9241,
                0.9171,
                0.9101,
                0.9045,
                0.8977,
                0.891,
                0.8844,
                0.8792,
                0.8728,
                0.8665,
                0.8602,
                0.8541,
                0.8492,
                0.8432,
                0.8373,
                0.8315,
                0.8257,
                0.8212,
                0.8156,
                0.81,
                0.8046,
                0.8003,
                0.7949,
                0.7897,
                0.7845,
                0.7804,
                0.7753,
                0.7693,
                0.7644,
                0.7586,
                0.7528,
                0.7472,
                0.7398,
                0.7325,
                0.7254,
                0.7175,
                0.7099,
                0.7007,
                0.6926,
                0.6831,
                0.6746,
                0.6656,
                0.6468,
                0.6278,
                0.6086,
                0.5893,
                0.5707,
                0.5403,
                0.5107,
                0.4803,
                0.4506,
                0.4204,
                0.3847,
                0.3489,
                0.3132,
                0.2774,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.055,
            "OC": 5.97
        },
        "60m": {
            "conversions": [
                0.5294,
                0.6442,
                0.7164,
                0.768,
                0.8068,
                0.8386,
                0.8635,
                0.885,
                0.9038,
                0.9194,
                0.9328,
                0.9453,
                0.9552,
                0.9653,
                0.9741,
                0.9816,
                0.9892,
                0.9953,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9976,
                0.9893,
                0.9818,
                0.9743,
                0.9667,
                0.9592,
                0.9517,
                0.9447,
                0.9378,
                0.9308,
                0.9239,
                0.9169,
                0.9104,
                0.904,
                0.8975,
                0.8911,
                0.8846,
                0.8786,
                0.8725,
                0.8665,
                0.8604,
                0.8544,
                0.8488,
                0.8431,
                0.8375,
                0.8318,
                0.8262,
                0.8209,
                0.8156,
                0.8104,
                0.8051,
                0.7998,
                0.7949,
                0.7899,
                0.785,
                0.78,
                0.7751,
                0.7696,
                0.764,
                0.7585,
                0.7529,
                0.7474,
                0.7399,
                0.7324,
                0.725,
                0.7175,
                0.71,
                0.7011,
                0.6922,
                0.6834,
                0.6745,
                0.6656,
                0.6466,
                0.6276,
                0.6085,
                0.5895,
                0.5705,
                0.5405,
                0.5105,
                0.4804,
                0.4504,
                0.4204,
                0.3847,
                0.3489,
                0.3132,
                0.2774,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.06,
            "OC": 6.39
        },
        "100m": {
            "conversions": [
                0.5344,
                0.6441,
                0.7156,
                0.7678,
                0.8078,
                0.8403,
                0.8671,
                0.89,
                0.909,
                0.9253,
                0.9395,
                0.9523,
                0.9636,
                0.9732,
                0.9819,
                0.9899,
                0.9959,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9968,
                0.9893,
                0.9823,
                0.9754,
                0.9684,
                0.9615,
                0.9545,
                0.948,
                0.9415,
                0.935,
                0.9285,
                0.922,
                0.9159,
                0.9099,
                0.9038,
                0.8978,
                0.8917,
                0.886,
                0.8803,
                0.8747,
                0.869,
                0.8633,
                0.858,
                0.8527,
                0.8473,
                0.842,
                0.8367,
                0.8317,
                0.8267,
                0.8217,
                0.8167,
                0.8117,
                0.807,
                0.8023,
                0.7975,
                0.7928,
                0.7881,
                0.7788,
                0.7695,
                0.7603,
                0.751,
                0.7417,
                0.7312,
                0.7208,
                0.7103,
                0.6999,
                0.6894,
                0.6778,
                0.6663,
                0.6547,
                0.6432,
                0.6316,
                0.6205,
                0.6093,
                0.5982,
                0.587,
                0.5759,
                0.5592,
                0.5425,
                0.5259,
                0.5092,
                0.4925,
                0.4423,
                0.3922,
                0.342,
                0.2919,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.1,
            "OC": 9.79
        },
        "200m": {
            "conversions": [
                0.5169,
                0.6129,
                0.6812,
                0.734,
                0.7765,
                0.8121,
                0.8426,
                0.8687,
                0.892,
                0.9126,
                0.9311,
                0.9475,
                0.9626,
                0.9763,
                0.9892,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9959,
                0.9879,
                0.98,
                0.972,
                0.9641,
                0.9568,
                0.9494,
                0.9421,
                0.9347,
                0.9274,
                0.9206,
                0.9138,
                0.9071,
                0.9003,
                0.8935,
                0.8872,
                0.8809,
                0.8745,
                0.8682,
                0.8619,
                0.856,
                0.8501,
                0.8443,
                0.8384,
                0.8325,
                0.827,
                0.8215,
                0.816,
                0.8105,
                0.805,
                0.7999,
                0.7947,
                0.7896,
                0.7844,
                0.7793,
                0.7732,
                0.7671,
                0.761,
                0.7549,
                0.7488,
                0.7375,
                0.7263,
                0.715,
                0.7038,
                0.6925,
                0.6811,
                0.6697,
                0.6583,
                0.6469,
                0.6355,
                0.622,
                0.6086,
                0.5951,
                0.5817,
                0.5682,
                0.5488,
                0.5294,
                0.51,
                0.4906,
                0.4712,
                0.4527,
                0.4342,
                0.4158,
                0.3973,
                0.3788,
                0.3514,
                0.324,
                0.2965,
                0.2691,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.2,
            "OC": 19.32
        },
        "300m": {
            "conversions": [
                0.525,
                0.6137,
                0.6795,
                0.7315,
                0.7746,
                0.8108,
                0.842,
                0.8691,
                0.8931,
                0.9141,
                0.9328,
                0.9494,
                0.964,
                0.9772,
                0.9891,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9983,
                0.9904,
                0.9826,
                0.975,
                0.9671,
                0.96,
                0.9527,
                0.9455,
                0.9384,
                0.9311,
                0.9245,
                0.918,
                0.9113,
                0.9047,
                0.8979,
                0.8918,
                0.8855,
                0.8792,
                0.8731,
                0.8668,
                0.8611,
                0.8552,
                0.8496,
                0.8436,
                0.838,
                0.8324,
                0.8271,
                0.8217,
                0.8161,
                0.8108,
                0.8058,
                0.8006,
                0.7955,
                0.7905,
                0.7855,
                0.7766,
                0.7675,
                0.7583,
                0.7494,
                0.7404,
                0.728,
                0.7156,
                0.7032,
                0.6908,
                0.6784,
                0.6671,
                0.6557,
                0.6445,
                0.6332,
                0.6219,
                0.607,
                0.5921,
                0.5771,
                0.5623,
                0.5474,
                0.5287,
                0.5099,
                0.4912,
                0.4725,
                0.4537,
                0.4327,
                0.4117,
                0.3907,
                0.3697,
                0.3487,
                0.3273,
                0.3059,
                0.2845,
                0.2631,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.3,
            "OC": 30
        },
        "400m": {
            "conversions": [
                0.5331,
                0.6146,
                0.6777,
                0.7291,
                0.7725,
                0.8095,
                0.8416,
                0.8695,
                0.894,
                0.9156,
                0.9344,
                0.9511,
                0.9656,
                0.9783,
                0.989,
                0.9984,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9929,
                0.9854,
                0.9778,
                0.9702,
                0.9632,
                0.9561,
                0.9491,
                0.942,
                0.935,
                0.9285,
                0.9219,
                0.9154,
                0.9088,
                0.9023,
                0.8962,
                0.8901,
                0.884,
                0.8779,
                0.8718,
                0.8661,
                0.8604,
                0.8547,
                0.849,
                0.8433,
                0.838,
                0.8326,
                0.8273,
                0.8219,
                0.8166,
                0.8116,
                0.8066,
                0.8016,
                0.7966,
                0.7916,
                0.7797,
                0.7677,
                0.7558,
                0.7438,
                0.7319,
                0.7184,
                0.7049,
                0.6913,
                0.6778,
                0.6643,
                0.6531,
                0.6419,
                0.6306,
                0.6194,
                0.6082,
                0.5919,
                0.5756,
                0.5592,
                0.5429,
                0.5266,
                0.5085,
                0.4904,
                0.4724,
                0.4543,
                0.4362,
                0.4127,
                0.3891,
                0.3656,
                0.342,
                0.3185,
                0.3031,
                0.2878,
                0.2724,
                0.2571,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.4,
            "OC": 43.18
        },
        "500m": {
            "conversions": [
                0.5387,
                0.6159,
                0.6769,
                0.7272,
                0.7701,
                0.807,
                0.8392,
                0.8673,
                0.8922,
                0.9139,
                0.933,
                0.9498,
                0.9644,
                0.977,
                0.9877,
                0.9969,
                0.9998,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9935,
                0.9851,
                0.977,
                0.9694,
                0.9616,
                0.9542,
                0.9465,
                0.9389,
                0.932,
                0.9248,
                0.9179,
                0.9108,
                0.9038,
                0.8972,
                0.8906,
                0.8842,
                0.8778,
                0.8713,
                0.8651,
                0.8591,
                0.853,
                0.8469,
                0.8409,
                0.8353,
                0.8296,
                0.8239,
                0.8183,
                0.8127,
                0.8074,
                0.8021,
                0.7968,
                0.7916,
                0.7863,
                0.7754,
                0.7644,
                0.7534,
                0.7424,
                0.7314,
                0.7186,
                0.7057,
                0.6928,
                0.6799,
                0.6671,
                0.6559,
                0.6448,
                0.6335,
                0.6224,
                0.6112,
                0.5949,
                0.5785,
                0.5621,
                0.5458,
                0.5294,
                0.5104,
                0.4913,
                0.4724,
                0.4533,
                0.4343,
                0.4111,
                0.3879,
                0.3648,
                0.3416,
                0.3185,
                0.3031,
                0.2878,
                0.2724,
                0.2571,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.5,
            "OC": 57.66
        },
        "600m": {
            "conversions": [
                0.5443,
                0.6173,
                0.676,
                0.7253,
                0.7677,
                0.8045,
                0.8368,
                0.8652,
                0.8902,
                0.9123,
                0.9314,
                0.9485,
                0.9632,
                0.9758,
                0.9865,
                0.9954,
                0.9999,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9926,
                0.9836,
                0.9755,
                0.9673,
                0.9591,
                0.9508,
                0.9428,
                0.9353,
                0.9277,
                0.9203,
                0.9127,
                0.9052,
                0.8983,
                0.8914,
                0.8844,
                0.8775,
                0.8706,
                0.8642,
                0.8577,
                0.8513,
                0.8449,
                0.8385,
                0.8325,
                0.8266,
                0.8206,
                0.8147,
                0.8087,
                0.8032,
                0.7977,
                0.7921,
                0.7866,
                0.7811,
                0.7711,
                0.761,
                0.751,
                0.741,
                0.731,
                0.7188,
                0.7066,
                0.6943,
                0.6821,
                0.6699,
                0.6588,
                0.6477,
                0.6365,
                0.6254,
                0.6143,
                0.5979,
                0.5815,
                0.565,
                0.5486,
                0.5322,
                0.5122,
                0.4922,
                0.4723,
                0.4523,
                0.4323,
                0.4096,
                0.3868,
                0.364,
                0.3412,
                0.3185,
                0.3031,
                0.2878,
                0.2724,
                0.2571,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.6,
            "OC": 72.15
        },
        "800m": {
            "conversions": [
                0.5555,
                0.6199,
                0.6743,
                0.7214,
                0.7628,
                0.7995,
                0.832,
                0.8608,
                0.8864,
                0.9089,
                0.9286,
                0.9458,
                0.9607,
                0.9732,
                0.9838,
                0.9925,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9971,
                0.9878,
                0.9785,
                0.9691,
                0.9598,
                0.9505,
                0.942,
                0.9335,
                0.9251,
                0.9166,
                0.9081,
                0.9003,
                0.8926,
                0.8848,
                0.8771,
                0.8693,
                0.8622,
                0.855,
                0.8479,
                0.8407,
                0.8336,
                0.827,
                0.8205,
                0.8139,
                0.8074,
                0.8008,
                0.7947,
                0.7887,
                0.7826,
                0.7766,
                0.7705,
                0.7624,
                0.7543,
                0.7462,
                0.7381,
                0.73,
                0.7191,
                0.7082,
                0.6972,
                0.6863,
                0.6754,
                0.6644,
                0.6534,
                0.6423,
                0.6313,
                0.6203,
                0.6038,
                0.5873,
                0.5708,
                0.5543,
                0.5378,
                0.5159,
                0.494,
                0.4722,
                0.4503,
                0.4284,
                0.4064,
                0.3844,
                0.3624,
                0.3404,
                0.3184,
                0.3031,
                0.2877,
                0.2724,
                0.257,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 0.8,
            "OC": 101.11
        },
        "1000m": {
            "conversions": [
                0.5623,
                0.6216,
                0.6733,
                0.719,
                0.7598,
                0.7964,
                0.8293,
                0.8586,
                0.8847,
                0.9079,
                0.9282,
                0.9459,
                0.961,
                0.9739,
                0.9846,
                0.9934,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9925,
                0.983,
                0.9735,
                0.964,
                0.9545,
                0.945,
                0.9364,
                0.9278,
                0.9191,
                0.9105,
                0.9019,
                0.894,
                0.8861,
                0.8783,
                0.8704,
                0.8625,
                0.8553,
                0.8481,
                0.8408,
                0.8336,
                0.8264,
                0.8198,
                0.8131,
                0.8065,
                0.7998,
                0.7932,
                0.7871,
                0.781,
                0.7748,
                0.7687,
                0.7626,
                0.7554,
                0.7483,
                0.7411,
                0.734,
                0.7268,
                0.7159,
                0.705,
                0.6941,
                0.6832,
                0.6723,
                0.6622,
                0.6521,
                0.642,
                0.6319,
                0.6218,
                0.606,
                0.5901,
                0.5743,
                0.5584,
                0.5426,
                0.521,
                0.4993,
                0.4777,
                0.456,
                0.4344,
                0.4112,
                0.3879,
                0.3647,
                0.3414,
                0.3182,
                0.3029,
                0.2876,
                0.2723,
                0.257,
                0.2417
            ],
            "isRoad": 0,
            "dist(km)": 1,
            "OC": 130.5
        },
        "1500m": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 1.5,
            "OC": 205.8
        },
        "1Mile": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9962,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 1.609344,
            "OC": 222.6
        },
        "2km": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.999,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 2,
            "OC": 283.2
        },
        "3km": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9962,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 3,
            "OC": 440
        },
        "2Mile": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 3.218688,
            "OC": 474.6
        },
        "4km": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 4,
            "OC": 598
        },
        "3Mile": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 4.828032,
            "OC": 730
        },
        "5kmRoad": {
            "conversions": [
                0.6062,
                0.6602,
                0.7102,
                0.7562,
                0.7982,
                0.8362,
                0.8702,
                0.9002,
                0.9262,
                0.9482,
                0.9662,
                0.9802,
                0.9922,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9987,
                0.997,
                0.9947,
                0.9918,
                0.9882,
                0.9839,
                0.979,
                0.9734,
                0.9672,
                0.9605,
                0.9538,
                0.9471,
                0.9404,
                0.9337,
                0.927,
                0.9203,
                0.9136,
                0.9069,
                0.9002,
                0.8935,
                0.8868,
                0.8801,
                0.8734,
                0.8667,
                0.86,
                0.8533,
                0.8466,
                0.8399,
                0.8332,
                0.8265,
                0.8198,
                0.8131,
                0.8064,
                0.7997,
                0.793,
                0.7863,
                0.7796,
                0.7729,
                0.7662,
                0.7592,
                0.7515,
                0.7433,
                0.7344,
                0.7249,
                0.7147,
                0.704,
                0.6926,
                0.6806,
                0.668,
                0.6547,
                0.6408,
                0.6263,
                0.6112,
                0.5955,
                0.5791,
                0.5621,
                0.5445,
                0.5262,
                0.5074,
                0.4879,
                0.4678,
                0.447,
                0.4257,
                0.4037,
                0.3811,
                0.3578,
                0.334,
                0.3095,
                0.2844,
                0.2586,
                0.2323,
                0.2053
            ],
            "isRoad": 1,
            "dist(km)": 5,
            "OC": 779
        },
        "5km": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 5,
            "OC": 757
        },
        "6kmRoad": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9995,
                0.9983,
                0.9965,
                0.994,
                0.9908,
                0.987,
                0.9824,
                0.9773,
                0.9714,
                0.9649,
                0.958,
                0.9511,
                0.9442,
                0.9373,
                0.9304,
                0.9235,
                0.9166,
                0.9096,
                0.9027,
                0.8958,
                0.8889,
                0.882,
                0.8751,
                0.8682,
                0.8613,
                0.8544,
                0.8475,
                0.8406,
                0.8337,
                0.8268,
                0.8199,
                0.813,
                0.8061,
                0.7992,
                0.7923,
                0.7854,
                0.7785,
                0.7715,
                0.7646,
                0.7577,
                0.7501,
                0.7419,
                0.7331,
                0.7237,
                0.7136,
                0.7028,
                0.6915,
                0.6795,
                0.6668,
                0.6535,
                0.6396,
                0.625,
                0.6098,
                0.594,
                0.5775,
                0.5604,
                0.5427,
                0.5243,
                0.5052,
                0.4856,
                0.4653,
                0.4443,
                0.4228,
                0.4005,
                0.3777,
                0.3542,
                0.3301,
                0.3053,
                0.2799,
                0.2538,
                0.2272,
                0.1998
            ],
            "isRoad": 1,
            "dist(km)": 6,
            "OC": 942
        },
        "6km": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 6,
            "OC": 919
        },
        "4MileRoad": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9997,
                0.9987,
                0.9971,
                0.9948,
                0.9918,
                0.9881,
                0.9837,
                0.9787,
                0.973,
                0.9666,
                0.9597,
                0.9527,
                0.9457,
                0.9387,
                0.9318,
                0.9248,
                0.9178,
                0.9108,
                0.9038,
                0.8968,
                0.8899,
                0.8829,
                0.8759,
                0.8689,
                0.8619,
                0.8549,
                0.8479,
                0.841,
                0.834,
                0.827,
                0.82,
                0.813,
                0.806,
                0.7991,
                0.7921,
                0.7851,
                0.7781,
                0.7711,
                0.7641,
                0.7571,
                0.7495,
                0.7412,
                0.7323,
                0.7228,
                0.7126,
                0.7018,
                0.6903,
                0.6782,
                0.6655,
                0.6521,
                0.6381,
                0.6235,
                0.6082,
                0.5923,
                0.5758,
                0.5586,
                0.5407,
                0.5223,
                0.5032,
                0.4834,
                0.463,
                0.442,
                0.4204,
                0.3981,
                0.3751,
                0.3516,
                0.3273,
                0.3025,
                0.277,
                0.2509,
                0.2241,
                0.1967
            ],
            "isRoad": 1,
            "dist(km)": 6.437376,
            "OC": 1014
        },
        "4Mile": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 6.437376,
            "OC": 990
        },
        "8kmRoad": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9986,
                0.9968,
                0.9944,
                0.9913,
                0.9874,
                0.9829,
                0.9777,
                0.9719,
                0.9653,
                0.9581,
                0.9509,
                0.9436,
                0.9364,
                0.9292,
                0.922,
                0.9147,
                0.9075,
                0.9003,
                0.893,
                0.8858,
                0.8786,
                0.8714,
                0.8641,
                0.8569,
                0.8497,
                0.8424,
                0.8352,
                0.828,
                0.8208,
                0.8135,
                0.8063,
                0.7991,
                0.7918,
                0.7846,
                0.7774,
                0.7702,
                0.7629,
                0.7557,
                0.7482,
                0.7401,
                0.7314,
                0.722,
                0.7119,
                0.7012,
                0.6899,
                0.6779,
                0.6653,
                0.652,
                0.638,
                0.6235,
                0.6082,
                0.5923,
                0.5758,
                0.5586,
                0.5408,
                0.5223,
                0.5032,
                0.4835,
                0.463,
                0.442,
                0.4203,
                0.3979,
                0.3749,
                0.3512,
                0.3269,
                0.302,
                0.2764,
                0.2501,
                0.2232,
                0.1957
            ],
            "isRoad": 1,
            "dist(km)": 8,
            "OC": 1272
        },
        "8km": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 8,
            "OC": 1247
        },
        "5MileRoad": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9986,
                0.9969,
                0.9944,
                0.9913,
                0.9875,
                0.983,
                0.9778,
                0.972,
                0.9654,
                0.9582,
                0.951,
                0.9438,
                0.9365,
                0.9293,
                0.9221,
                0.9148,
                0.9076,
                0.9004,
                0.8931,
                0.8859,
                0.8787,
                0.8714,
                0.8642,
                0.8569,
                0.8497,
                0.8425,
                0.8352,
                0.828,
                0.8208,
                0.8135,
                0.8063,
                0.7991,
                0.7918,
                0.7846,
                0.7774,
                0.7701,
                0.7629,
                0.7557,
                0.7482,
                0.7401,
                0.7314,
                0.722,
                0.7119,
                0.7012,
                0.6899,
                0.6779,
                0.6653,
                0.652,
                0.638,
                0.6235,
                0.6082,
                0.5924,
                0.5758,
                0.5587,
                0.5409,
                0.5224,
                0.5033,
                0.4835,
                0.4631,
                0.442,
                0.4203,
                0.398,
                0.375,
                0.3513,
                0.327,
                0.3021,
                0.2765,
                0.2502,
                0.2234,
                0.1958
            ],
            "isRoad": 1,
            "dist(km)": 8.04672,
            "OC": 1279
        },
        "5Mile": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 8.04672,
            "OC": 1255
        },
        "10kmRoad": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9996,
                0.9984,
                0.9966,
                0.9941,
                0.9908,
                0.9869,
                0.9822,
                0.9769,
                0.9708,
                0.964,
                0.9566,
                0.9491,
                0.9417,
                0.9342,
                0.9267,
                0.9192,
                0.9117,
                0.9043,
                0.8968,
                0.8893,
                0.8818,
                0.8743,
                0.8669,
                0.8594,
                0.8519,
                0.8444,
                0.8369,
                0.8295,
                0.822,
                0.8145,
                0.807,
                0.7995,
                0.7921,
                0.7846,
                0.7771,
                0.7696,
                0.7621,
                0.7547,
                0.7471,
                0.7391,
                0.7305,
                0.7211,
                0.7112,
                0.7005,
                0.6892,
                0.6772,
                0.6646,
                0.6513,
                0.6374,
                0.6228,
                0.6075,
                0.5916,
                0.575,
                0.5577,
                0.5398,
                0.5213,
                0.502,
                0.4821,
                0.4616,
                0.4404,
                0.4185,
                0.396,
                0.3728,
                0.3489,
                0.3244,
                0.2993,
                0.2734,
                0.247,
                0.2198,
                0.192
            ],
            "isRoad": 1,
            "dist(km)": 10,
            "OC": 1603
        },
        "10km": {
            "conversions": [
                0.6526,
                0.6899,
                0.725,
                0.7579,
                0.7886,
                0.8171,
                0.8434,
                0.8675,
                0.8894,
                0.9091,
                0.9266,
                0.9419,
                0.955,
                0.967,
                0.979,
                0.9893,
                0.9961,
                0.9996,
                1,
                1,
                1,
                1,
                1,
                0.9999,
                0.9991,
                0.9975,
                0.9952,
                0.9922,
                0.9885,
                0.984,
                0.9788,
                0.9729,
                0.9662,
                0.9592,
                0.9521,
                0.9451,
                0.938,
                0.931,
                0.924,
                0.9169,
                0.9099,
                0.9028,
                0.8958,
                0.8888,
                0.8817,
                0.8747,
                0.8676,
                0.8606,
                0.8536,
                0.8465,
                0.8395,
                0.8324,
                0.8254,
                0.8184,
                0.8113,
                0.8043,
                0.7972,
                0.7902,
                0.7832,
                0.7761,
                0.7691,
                0.762,
                0.755,
                0.7479,
                0.7402,
                0.7319,
                0.723,
                0.7134,
                0.7031,
                0.6923,
                0.6808,
                0.6687,
                0.6559,
                0.6425,
                0.6285,
                0.6138,
                0.5985,
                0.5825,
                0.566,
                0.5488,
                0.5309,
                0.5124,
                0.4933,
                0.4735,
                0.4531,
                0.4321,
                0.4104,
                0.3881,
                0.3652,
                0.3416,
                0.3174,
                0.2926,
                0.2671,
                0.2409,
                0.2142,
                0.1868
            ],
            "isRoad": 0,
            "dist(km)": 10,
            "OC": 1580
        },
        "12km": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9838,
                0.9786,
                0.9727,
                0.9662,
                0.9589,
                0.9513,
                0.9438,
                0.9362,
                0.9287,
                0.9211,
                0.9136,
                0.906,
                0.8984,
                0.8909,
                0.8833,
                0.8758,
                0.8682,
                0.8607,
                0.8531,
                0.8456,
                0.838,
                0.8305,
                0.8229,
                0.8154,
                0.8078,
                0.8003,
                0.7927,
                0.7852,
                0.7776,
                0.77,
                0.7625,
                0.7549,
                0.7474,
                0.7395,
                0.731,
                0.7218,
                0.7119,
                0.7013,
                0.6901,
                0.6782,
                0.6656,
                0.6524,
                0.6385,
                0.6239,
                0.6087,
                0.5928,
                0.5762,
                0.5589,
                0.541,
                0.5224,
                0.5031,
                0.4832,
                0.4626,
                0.4413,
                0.4194,
                0.3968,
                0.3735,
                0.3495,
                0.3249,
                0.2996,
                0.2736,
                0.247,
                0.2197,
                0.1917
            ],
            "isRoad": 1,
            "dist(km)": 12,
            "OC": 1942
        },
        "15km": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9994,
                0.998,
                0.996,
                0.9932,
                0.9898,
                0.9856,
                0.9807,
                0.975,
                0.9687,
                0.9616,
                0.954,
                0.9464,
                0.9387,
                0.9311,
                0.9235,
                0.9158,
                0.9082,
                0.9005,
                0.8929,
                0.8852,
                0.8776,
                0.87,
                0.8623,
                0.8547,
                0.847,
                0.8394,
                0.8317,
                0.8241,
                0.8165,
                0.8088,
                0.8012,
                0.7935,
                0.7859,
                0.7782,
                0.7706,
                0.763,
                0.7553,
                0.7477,
                0.7399,
                0.7315,
                0.7224,
                0.7127,
                0.7022,
                0.6911,
                0.6793,
                0.6668,
                0.6537,
                0.6398,
                0.6253,
                0.6101,
                0.5942,
                0.5776,
                0.5603,
                0.5424,
                0.5238,
                0.5045,
                0.4845,
                0.4638,
                0.4425,
                0.4204,
                0.3977,
                0.3743,
                0.3502,
                0.3255,
                0.3,
                0.2739,
                0.2471,
                0.2196,
                0.1914
            ],
            "isRoad": 1,
            "dist(km)": 15,
            "OC": 2455
        },
        "10Mile": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9995,
                0.9982,
                0.9963,
                0.9936,
                0.9902,
                0.9861,
                0.9813,
                0.9758,
                0.9695,
                0.9625,
                0.9549,
                0.9472,
                0.9396,
                0.9319,
                0.9242,
                0.9166,
                0.9089,
                0.9012,
                0.8935,
                0.8859,
                0.8782,
                0.8705,
                0.8629,
                0.8552,
                0.8475,
                0.8399,
                0.8322,
                0.8245,
                0.8168,
                0.8092,
                0.8015,
                0.7938,
                0.7862,
                0.7785,
                0.7708,
                0.7631,
                0.7555,
                0.7478,
                0.7401,
                0.7317,
                0.7227,
                0.713,
                0.7026,
                0.6915,
                0.6797,
                0.6673,
                0.6542,
                0.6403,
                0.6258,
                0.6106,
                0.5947,
                0.5782,
                0.5609,
                0.543,
                0.5244,
                0.505,
                0.485,
                0.4644,
                0.443,
                0.4209,
                0.3982,
                0.3748,
                0.3506,
                0.3258,
                0.3004,
                0.2742,
                0.2473,
                0.2198,
                0.1916
            ],
            "isRoad": 1,
            "dist(km)": 16.09344,
            "OC": 2640
        },
        "20km": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9988,
                0.9972,
                0.9948,
                0.9916,
                0.9878,
                0.9832,
                0.9779,
                0.9719,
                0.9651,
                0.9577,
                0.9499,
                0.9422,
                0.9344,
                0.9266,
                0.9189,
                0.9111,
                0.9034,
                0.8956,
                0.8878,
                0.8801,
                0.8723,
                0.8646,
                0.8568,
                0.849,
                0.8413,
                0.8335,
                0.8258,
                0.818,
                0.8103,
                0.8025,
                0.7947,
                0.787,
                0.7792,
                0.7715,
                0.7637,
                0.7559,
                0.7482,
                0.7404,
                0.7322,
                0.7234,
                0.7138,
                0.7035,
                0.6926,
                0.6809,
                0.6686,
                0.6555,
                0.6418,
                0.6273,
                0.6122,
                0.5963,
                0.5798,
                0.5625,
                0.5446,
                0.5259,
                0.5066,
                0.4866,
                0.4658,
                0.4444,
                0.4223,
                0.3994,
                0.3759,
                0.3517,
                0.3267,
                0.3011,
                0.2748,
                0.2478,
                0.2201,
                0.1917
            ],
            "isRoad": 1,
            "dist(km)": 20,
            "OC": 3315
        },
        "Half.Mar": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 21.0975,
            "OC": 3503
        },
        "25km": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 25,
            "OC": 4205
        },
        "30km": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 30,
            "OC": 5110
        },
        "Marathon": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 42.195,
            "OC": 7377
        },
        "50km": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 50,
            "OC": 8970
        },
        "50Mile": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 80.4672,
            "OC": 16080
        },
        "100km": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 100,
            "OC": 21360
        },
        "150km": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 150,
            "OC": 36300
        },
        "100Mile": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 160.9344,
            "OC": 39850
        },
        "200km": {
            "conversions": [
                0.6056,
                0.6596,
                0.7096,
                0.7556,
                0.7976,
                0.8356,
                0.8696,
                0.8996,
                0.9256,
                0.9476,
                0.9656,
                0.9796,
                0.9916,
                0.9993,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0.9998,
                0.9989,
                0.9973,
                0.995,
                0.992,
                0.9882,
                0.9837,
                0.9784,
                0.9725,
                0.9658,
                0.9584,
                0.9506,
                0.9428,
                0.935,
                0.9273,
                0.9195,
                0.9117,
                0.9039,
                0.8961,
                0.8884,
                0.8806,
                0.8728,
                0.865,
                0.8572,
                0.8495,
                0.8417,
                0.8339,
                0.8261,
                0.8183,
                0.8106,
                0.8028,
                0.795,
                0.7872,
                0.7794,
                0.7717,
                0.7639,
                0.7561,
                0.7483,
                0.7405,
                0.7324,
                0.7236,
                0.714,
                0.7038,
                0.6929,
                0.6813,
                0.6689,
                0.6559,
                0.6422,
                0.6277,
                0.6126,
                0.5968,
                0.5802,
                0.563,
                0.5451,
                0.5265,
                0.5071,
                0.4871,
                0.4664,
                0.4449,
                0.4228,
                0.4,
                0.3764,
                0.3522,
                0.3273,
                0.3017,
                0.2753,
                0.2483,
                0.2206,
                0.1921
            ],
            "isRoad": 1,
            "dist(km)": 200,
            "OC": 52800
        }
    }
};

const MIN_AGE = 5;
const MAX_AGE = 100;
class RunningAgeGrade {
    // Imported as JSON (see extract-table.mjs) rather than embedded as a huge
    // inline literal, so the class body stays readable and the data can be
    // linted/typed independently of the code that consumes it.
    static table = ageGradeTable;
    gender;
    age;
    constructor(gender, age) {
        this.gender = gender;
        this.age = age;
    }
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
    normalize(event, time) {
        if (!RunningAgeGrade.isAgeInRange(this.age)) {
            return 0;
        }
        const eventData = RunningAgeGrade.getEventData(this.gender, event);
        if (!eventData) {
            throw new Error(`Unknown running age-grade event "${event}" for gender "${this.gender}"`);
        }
        const conversionFactor = eventData.conversions[this.age - MIN_AGE];
        if (!conversionFactor || conversionFactor <= 0) {
            // No data published for this age (common at the youngest/oldest ends
            // of an event's range, e.g. hurdles below a minimum age).
            return 0;
        }
        const gradedStandard = eventData.OC / conversionFactor;
        if (!Number.isFinite(gradedStandard) || gradedStandard <= 0) {
            return 0;
        }
        return time / gradedStandard;
    }
    /** Whether age-grading data exists at all for this age. */
    static isAgeInRange(age) {
        return Number.isFinite(age) && age >= MIN_AGE && age <= MAX_AGE;
    }
    /** All event keys available for a given gender. */
    static getAvailableEvents(gender) {
        return Object.keys(RunningAgeGrade.table[gender] ?? {});
    }
    /** Whether a given event exists for a given gender. */
    static hasEvent(gender, event) {
        return Boolean(RunningAgeGrade.table[gender]?.[event]);
    }
    static getEventData(gender, event) {
        return RunningAgeGrade.table[gender]?.[event];
    }
}

var grading = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MAX_AGE: MAX_AGE,
    MIN_AGE: MIN_AGE,
    RunningAgeGrade: RunningAgeGrade
});

/*
calculate velocity at VO2Max
vO2Max in mL/(kg•min)
returns speed in km/h
*/
function vVo2Max(vO2Max) {
    return vO2Max / 3.5;
}
/*
  @param {Number} percentHR in decimal form
  @param {Number} vO2Max in mL/(kg•min)
  @returns {Number} speed in km/h
*/
function hrSpeed(percentHR, vO2Max) {
    const vO2MaxPercent = percentVO2Max(percentHR);
    const vO2Speed = vVo2Max(vO2Max);
    return vO2MaxPercent * vO2Speed;
}
/*
  @param {Number} percentHR in decimal form
  @param {Number} vO2Max in mL/(kg•min)
  @returns {Number} pace in min/mile
*/
function hrPace(percentHR, vO2Max) {
    const kph = hrSpeed(percentHR, vO2Max);
    // convert kph to min/km
    return 60 / kph;
}

var pace = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hrPace: hrPace,
    hrSpeed: hrSpeed,
    vVo2Max: vVo2Max
});

/*
@description a regression equation relating VO2 with running velocity. Used in conjuction with the "vO2" equation to create the Jack Daniel's VDOT tables.  Initially retrieved from "Oxygen Power: Performance Tables for Distance Runners" by Jack Daniels.
Conditioning for Distance Running - the Scientific Aspects, 1978
@param {Number} VO2 in mL/kg/minute
@returns {Number} velocity in meters/minute
*/
function velocity(vO2) {
    return 29.54 + 5.000663 * vO2 - 0.007546 * Math.pow(vO2, 2);
}
/*
@description a regression equation relating VO2 with running velocity. Used in conjuction with the "velocity" equation to create the Jack Daniel's VDOT tables.  Initially retrieved from "Oxygen Power: Performance Tables for Distance Runners" by Jack Daniels.
Conditioning for Distance Running - the Scientific Aspects, 1978
@param {Number} velocity in meters/minute
@returns {Number} VO2 in mL/kg/minute
*/
function vO2(velocity) {
    return -4.6 + 0.182258 * velocity + 0.000104 * Math.pow(velocity, 2);
}
/*
@description describes the percent of an individual's aerobic capacity the individual is capable of working at for how long.  Initially retrieved from "Oxygen Power: Performance Tables for Distance Runners" by Jack Daniels.
Conditioning for Distance Running - the Scientific Aspects, 1978
@param {Number} time spent running in minutes
@returns {Number} VO2 percentage in decimal form
*/
function vO2Percentage(time) {
    return 0.8 + Math.pow(0.1894393, -0.012778 * time) + Math.exp(-0.1932605 * time);
}
/*
  Easy / Long (E/L) pace
  @description 60-79% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
  @param {Number} vO2Max in mL/(kg•min)
  @returns {Number} pace in min/mile
*/
function easy(vO2Max) {
    return [hrPace(0.6, vO2Max), hrPace(0.79, vO2Max)];
}
/*
  Marathon (M) pace
  @description 80-85% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
  @param {Number} vO2Max in mL/(kg•min)
  @returns {Number} pace in min/mile
*/
function marathon(vO2Max) {
    return [hrPace(0.8, vO2Max), hrPace(0.85, vO2Max)];
}
/*
  Threshold (T) pace
  @description 82-88% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
  @param {Number} vO2Max in mL/(kg•min)
  @returns {Number} pace in min/mile
*/
function threshold(vO2Max) {
    return [hrPace(0.82, vO2Max), hrPace(0.88, vO2Max)];
}
/*
  Interval (I) pace
  @description 97-100% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
  @param {Number} vO2Max in mL/(kg•min)
  @returns {Number} pace in min/mile
*/
function interval(vO2Max) {
    return [hrPace(0.97, vO2Max), hrPace(1, vO2Max)];
}

var jackdaniels = /*#__PURE__*/Object.freeze({
    __proto__: null,
    easy: easy,
    interval: interval,
    marathon: marathon,
    threshold: threshold,
    vO2: vO2,
    vO2Percentage: vO2Percentage,
    velocity: velocity
});

var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    adjustment: adjustment,
    grading: grading,
    jackDaniels: jackdaniels,
    pace: pace
});

var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    running: index$3
});

/**
   * Represents a class for comparing and calculating various exercise physiology metrics.
   * This class is useful for researchers, trainers, and athletes to evaluate performance
   * across different weight classes and genders.
   */
class Compare {
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
        if (this.gender === exports.Gender.Female) {
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
        if (this.gender === exports.Gender.Female) {
            return 0;
        }
        return a - b * Math.pow(this.weight, -1.3925);
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
        if (this.gender === exports.Gender.Female) {
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
        let c = -2388645e-9;
        let d = -113732e-8;
        let e = 7.01863E-06;
        let f = -1.291e-8;
        if (this.gender === exports.Gender.Female) {
            a = 594.31747775582;
            b = -27.23842536447;
            c = 0.82112226871;
            d = -0.00930733913;
            e = 4.731582E-05;
            f = -9.054e-8;
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
class Jump {
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
const estimators = [
    /**
     * Abadie method.
     * Use for young adult females performing 5–10 repetitions.
     */
    formula({
        name: "Abadie",
        description: "Young adult females (18–24) performing 5–10 repetitions.",
        predict: (_reps, weight) => 7.24 + 1.05 * weight,
        weight: (rm) => (4 / 105) * (25 * rm - 181),
        isValid: (gender, age, reps) => gender === exports.Gender.Female && reps >= 5 && reps <= 10 && age > 17 && age < 25,
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
function applicableEstimators(gender, age, reps) {
    return estimators.filter((e) => e.isValid(gender, age, reps));
}
/** Look up a formula by name (typed, autocompletes against FormulaName). */
function getEstimator(name) {
    const found = estimators.find((e) => e.name === name);
    if (!found)
        throw new Error(`Unknown formula: ${name}`);
    return found;
}
/** Predict 1RM with a named formula, refusing to run it outside its valid range. */
function estimate1RM(name, gender, age, reps, weight) {
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
class RM {
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
        if (this.gender === exports.Gender.Female) {
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

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Compare: Compare,
    Jump: Jump,
    RM: RM,
    applicableEstimators: applicableEstimators,
    estimate1RM: estimate1RM,
    estimators: estimators,
    getEstimator: getEstimator
});

/*
  @param {string} unit type to be returned
  @param {Date} subtrahend
  @returns {Number} difference in units specified in the unit parameter
*/
function dateDelta(a, b, unit) {
    const units = {
        years: 1000 * 60 * 60 * 24 * 365,
        days: 1000 * 60 * 60 * 24,
        hours: 1000 * 60 * 60,
        minutes: 1000 * 60,
        seconds: 1000,
        milliseconds: 1
    }, difference = Math.abs(a.getTime() - b.getTime());
    return difference / units[unit];
}

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    dateDelta: dateDelta
});

exports.anthropometry = index$9;
exports.cardiovascular = index$7;
exports.composition = index$6;
exports.conversion = index$5;
exports.met = mets$1;
exports.models = index$4;
exports.sport = index$2;
exports.strength = index$1;
exports.utilities = index;
//# sourceMappingURL=index.cjs.map
