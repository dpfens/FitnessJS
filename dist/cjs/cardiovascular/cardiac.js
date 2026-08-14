"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TMS = exports.RL = exports.OaklandNL2 = exports.OaklandNL1 = exports.OaklandL = exports.Nes = exports.Miller = exports.LM = exports.Gulati = exports.Gellish = exports.HF = exports.Astrand = void 0;
exports.mean_arterial_pressure = mean_arterial_pressure;
exports.karvonen = karvonen;
exports.zoladz = zoladz;
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
exports.Astrand = Astrand;
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
exports.HF = HF;
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
exports.Gellish = Gellish;
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
exports.Gulati = Gulati;
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
exports.LM = LM;
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
exports.Miller = Miller;
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
exports.Nes = Nes;
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
exports.OaklandL = OaklandL;
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
exports.OaklandNL1 = OaklandNL1;
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
        return (-10. / 9) * (Math.sqrt(8176 - 45 * hr) - 29);
    }
}
exports.OaklandNL2 = OaklandNL2;
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
exports.RL = RL;
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
exports.TMS = TMS;
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
function karvonen(intensity, rest, maximum) {
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
//# sourceMappingURL=cardiac.js.map