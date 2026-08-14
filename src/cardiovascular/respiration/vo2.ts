import { Gender } from "../../enums.js";

/**
 * VO2max estimation formulas. Each method corresponds to a distinct fitness
 * test protocol and takes whatever inputs that protocol produces — these are
 * not interchangeable strategies, since you can't estimate VO2max from a
 * step-test heart rate using a formula that expects a 12-minute run distance.
 */
export class VO2MaxEstimation {
  private gender: Gender;
  private age: number;
  private weight: number;
  private height: number;

  constructor(gender: Gender, age: number, weight: number, height: number) {
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.height = height;
  }

  /**
   * Cooper 12-minute run test.
   * @param distance - distance covered in 12 minutes, in meters
   */
  cooper(distance: number): number {
    return 0.0268 * distance - 11.3;
  }

  /**
   * Balke treadmill protocol.
   * @param time - test duration in minutes
   */
  balke(time: number): number {
    if (this.gender === Gender.Female) {
      return 1.38 * time + 5.22;
    }
    return 1.444 * time + 14.99;
  }

  /**
   * Balke 15-minute run test.
   * @param distance - distance covered in 15 minutes, in meters
   */
  balke15MinRun(distance: number): number {
    return 0.0178 * distance + 9.6;
  }

  /**
   * Bruce protocol, male-specific multi-term regression.
   * @param time - total test time in minutes
   * @param time2 - time^2 term (as used in the original regression)
   * @param time3 - time^3 term (as used in the original regression)
   */
  bruceMale(time: number, time2: number, time3: number): number {
    return 14.76 - 1.379 * time + 0.451 * time2 - 0.012 * time3;
  }

  /**
   * Bruce protocol, female-specific regression.
   * @param time - total test time in minutes
   */
  bruceFemale(time: number): number {
    return 4.38 * time - 3.9;
  }

  /**
   * Bruce protocol, elderly/cardiac (EC) population regression.
   * @param time - total test time in minutes
   */
  bruceEC(time: number): number {
    return 2.282 * time + 8.545;
  }

  /**
   * Léger 20m shuttle run (beep test).
   * @param speed - final stage speed in km/h
   */
  leger(speed: number): number {
    return 31.025 + 3.238 * speed - 3.248 * this.age + 0.1536 * (this.age * speed);
  }

  /**
   * Åstrand-Rhyming single-stage step test.
   * @param hr - steady-state heart rate during the step test
   */
  astrandStep(hr: number): number {
    if (this.gender === Gender.Female) {
      return 3.75 * ((this.weight + 3) / (hr - 65));
    }
    return 3.744 * ((this.weight + 5) / (hr - 62));
  }

  /**
   * Queens College (QC) step test.
   * @param hr - recovery heart rate
   */
  qcStep(hr: number): number {
    if (this.gender === Gender.Female) {
      return 65.81 - 0.1847 * hr;
    }
    return 111.33 - 0.42 * hr;
  }

  /**
   * George submaximal treadmill walk test.
   * @param speed - walking speed
   * @param hr - steady-state heart rate
   */
  georgeTreadmill(speed: number, hr: number): number {
    const genderTerm = this.gender === Gender.Female ? 0 : 7.062;
    return 54.07 - 0.1938 * this.weight - 4.47 * speed + 0.01453 * hr + genderTerm;
  }

  /**
   * George ratio-weighted (RW) walk test.
   * @param time - walk time in minutes
   */
  georgeRW(time: number): number {
    const genderTerm = this.gender === Gender.Female ? 0 : 3.716;
    return 88.02 - 0.1656 * this.weight - 2.76 * time + genderTerm;
  }

  /**
   * George steady-state jog test.
   * @param time - jog time in minutes
   * @param hr - steady-state heart rate
   */
  georgeSteady(time: number, hr: number): number {
    const genderTerm = this.gender === Gender.Female ? 0 : 8.344;
    return 100.5 - 0.1636 * this.weight - 1.438 * time - 0.1928 * hr + genderTerm;
  }

  /**
   * Kline (Rockport) walk test.
   * @param time - walk time in minutes
   * @param hrPeak - heart rate at end of walk
   */
  kline(time: number, hrPeak: number): number {
    const genderTerm = this.gender === Gender.Female ? 0 : 6.315;
    return (
      132.853 -
      0.0769 * this.weight -
      0.3877 * this.age +
      genderTerm -
      3.2649 * time -
      0.1565 * hrPeak
    );
  }

  /**
   * Larsen walk/jog test.
   * @param time - test time in minutes
   * @param hr - steady-state heart rate
   */
  larsen(time: number, hr: number): number {
    const genderTerm = this.gender === Gender.Female ? 0 : 7.3;
    return 100.16 + genderTerm - 0.164 * this.weight - 1.273 * time - 0.1563 * hr;
  }

  /**
   * Ebbeling single-stage submaximal treadmill test.
   * @param speed - treadmill speed
   * @param hr - steady-state heart rate
   */
  ebbelingTreadmill(speed: number, hr: number): number {
    const genderTerm = this.gender === Gender.Female ? 0 : 5.48;
    return (
      15.1 +
      21.8 * speed -
      0.327 * hr -
      0.263 * this.age +
      0.00504 * (hr * this.age) +
      genderTerm
    );
  }

  /**
   * Cureton child/adolescent 1-mile run test.
   *
   * Note: fixes a duplicated term present in the original implementation
   * (the `108.94 - 8.41 * time` expression was being added twice).
   * @param time - 1-mile run time in minutes
   */
  curetonChild(time: number): number {
    const bmi = this.weight / Math.pow(this.height, 2);
    return 108.94 - 8.41 * time + 0.34 * Math.pow(time, 2) + 0.21 * this.age - 0.84 * bmi;
  }

  /**
   * Fox single-stage submaximal ergometry test.
   * @param hr5 - heart rate at 5 minutes
   */
  foxErgometry(hr5: number): number {
    return 6300.0 - 19.26 * hr5;
  }

  /**
   * US Olympic Committee (USOP) field estimate.
   * @param hrMax - maximum heart rate
   * @param restingHR - resting heart rate
   */
  usop(hrMax: number, restingHR: number): number {
    return 15.3 * (hrMax / restingHR);
  }

  /**
   * Single-stage submaximal treadmill extrapolation.
   * @param sm1 - submaximal VO2 measured at stage 1
   * @param hr1 - heart rate at stage 1
   * @param hrmax - maximum (or age-predicted max) heart rate
   */
  treadmillSubmaxSingleStage(sm1: number, hr1: number, hrmax: number): number {
    const restingHR = this.gender === Gender.Female ? 72 : 61;
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
  treadmillSubmaxVO2Multistage(
    sm1: number,
    hr1: number,
    sm2: number,
    hr2: number,
    hrMax: number
  ): number {
    const b = (sm2 - sm1) / (hr2 - hr1);
    return sm2 + b * (hrMax - hr2);
  }

  /**
   * Gilbert & Daniels running economy / VO2 model.
   * @param velocity - running velocity
   * @param time - race/effort duration in minutes
   */
  gilbertDaniels(velocity: number, time: number): number {
    const numerator = 0.000104 * Math.pow(velocity, 2) + 0.182258 * velocity - 4.6;
    const denominator =
      0.2989558 * Math.exp(-0.1932605 * time) +
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
export class EnergyCostEstimation {
  private height: number;

  constructor(height: number) {
    this.height = height;
  }

  /**
   * Gross VO2 cost of walking (ACSM metabolic equation).
   * @param speed - walking speed in m/min
   * @param grade - treadmill grade as a decimal fraction (e.g. 0.05 for 5%)
   */
  walkingGross(speed: number, grade: number): number {
    return 0.1 * speed + 1.8 * speed * grade;
  }

  /**
   * Gross VO2 cost of running (ACSM metabolic equation).
   * @param speed - running speed in m/min
   * @param grade - treadmill grade as a decimal fraction
   */
  runningGross(speed: number, grade: number): number {
    return 0.2 * speed + 0.9 * speed * grade;
  }

  /**
   * Gross VO2 cost of leg ergometry.
   * @param mass - body mass in kg
   * @param work - work rate in kgm/min
   */
  legErgometryGross(mass: number, work: number): number {
    return 3.5 + 1.8 * (work / mass);
  }

  /**
   * Gross VO2 cost of arm ergometry.
   * @param mass - body mass in kg
   * @param work - work rate in kgm/min
   */
  armErgometryGross(mass: number, work: number): number {
    return 3.0 * (work / mass);
  }

  /**
   * Gross VO2 cost of bench/step stepping.
   * @param frequency - stepping rate in steps/min
   */
  steppingGross(frequency: number): number {
    return 0.2 * frequency + frequency * this.height * 1.8 * 1.33;
  }
}

/**
 * Computes VO2 reserve: the difference between VO2max and resting VO2.
 * @param vo2Max - maximum oxygen uptake
 * @param vo2Rest - resting oxygen uptake (defaults to the standard 1 MET, 3.5 ml/kg/min)
 */
export function vo2Reserve(vo2Max: number, vo2Rest: number = 3.5): number {
  return vo2Max - vo2Rest;
}

/**
 * Computes a target VO2 at a given exercise intensity, using the
 * Karvonen-style VO2 reserve method.
 * @param vo2Max - maximum oxygen uptake
 * @param vo2Rest - resting oxygen uptake
 * @param intensity - target intensity as a decimal fraction (e.g. 0.6 for 60%)
 */
export function vo2Target(vo2Max: number, vo2Rest: number, intensity: number): number {
  return intensity * (vo2Max - vo2Rest) + vo2Rest;
}