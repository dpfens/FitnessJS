/// <reference path="../enums.ts" />

namespace Fit {

  export namespace strength {

    /**
     * Represents a class for comparing and calculating various exercise physiology metrics.
     * This class is useful for researchers, trainers, and athletes to evaluate performance
     * across different weight classes and genders.
     */
    export class Compare {
      private gender: Gender;
      private dob: Date;
      private weight: number;
      private height: number;

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
        let a: number = 512.245;
        let b: number = 172970;
        let c: number = 1.3925;
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
        let exponent: number = Math.pow( coefficientA * Math.log10(this.weight/coefficientB), 2 );
        let multiplier: number = Math.pow(10, exponent);
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
        let coefficient: number = 500/(a + b*this.weight + c * Math.pow(this.weight, 2) + d * Math.pow(this.weight, 3) + e * Math.pow(this.weight, 4) + f * Math.pow(this.weight, 5) );
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
        let vJumpHeightCm: number = vJumpHeight * 100;
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
        let bodyHeightCm: number = this.height * 100;
        let vJumpHeightCm: number = vJumpHeight * 100;
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
        let vJumpHeightCm: number = vJumpHeight * 100;
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
 * Represents the base class for One Repetition Maximum (1RM) estimators.
 */
export class RMEstimator {
  public reps: number;

    /**
   * Creates a new RMEstimator instance.
   * @param reps The number of repetitions performed.
   */
    constructor(reps: number) {
        this.reps = reps;
    }

    /**
   * Predicts the 1RM based on the given weight and number of repetitions.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @throws Error This method must be implemented by subclasses.
   */
    predict(weight: number): number {
        throw new Error("The prediction method is not implemented");
    }

    /**
   * Checks if the estimator is valid for the given parameters.
   * @param gender The gender of the individual.
   * @param age The age of the individual.
   * @param repetitions The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns True if the estimator is valid for the given parameters, false otherwise.
   * @throws Error This method must be implemented by subclasses.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        throw new Error("The static isValid method is not implemented");
    }
}

/**
 * Represents the Abadie 1RM estimation method.
 * Use this class when estimating 1RM for young adult females performing 5-10 repetitions.
 */
export class Abadie extends RMEstimator {

    /**
   * Predicts the 1RM using the Abadie method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const abadie = new Abadie(8);
   * const oneRM = abadie.predict(100); // Predicts 1RM for 100kg lifted 8 times
   */
    predict(weight: number): number {
        return 7.24 + (1.05* weight);
    }

    /**
   * Calculates the weight that can be lifted for the given 1RM.
   * @param rm The one-repetition maximum.
   * @returns The weight that can be lifted for the given 1RM.
   */
    weight(rm: number): number {
        return (4./105)*(25*rm-181);
    }

    /**
   * Checks if the Abadie method is valid for the given parameters.
   * @param gender The gender of the individual.
   * @param age The age of the individual.
   * @param repetitions The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns True if the method is valid, false otherwise.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return gender === Gender.Female && repetitions >= 5 && repetitions <= 10 && age > 17 && age < 25;
    }
}

export class Baechle extends RMEstimator {

    /**
   * Predicts the 1RM using the Baechle method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const baechle = new Baechle(6);
   * const oneRM = baechle.predict(80); // Predicts 1RM for 80kg lifted 6 times
   */
    predict(weight: number): number {
        return weight * (1+(0.033* this.reps) );
    }

    /**
   * Calculates the weight that can be lifted for the given 1RM.
   * @param rm The one-repetition maximum.
   * @returns The weight that can be lifted for the given 1RM.
   */
    weight(rm: number): number {
        return (1000*rm)/(33*this.reps + 1000);
    }

    /**
   * Checks if the Baechle method is valid for the given parameters.
   * @returns Always returns true as this method has no specific limitations.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class Brzycki extends RMEstimator {

    /**
   * Predicts the 1RM using the Brzycki method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const brzycki = new Brzycki(5);
   * const oneRM = brzycki.predict(100); // Predicts 1RM for 100kg lifted 5 times
   */
    predict(weight: number): number {
        return weight/(1.0278-(0.0278 * this.reps));
    }

    /**
   * Calculates the weight that can be lifted for the given 1RM.
   * @param rm The one-repetition maximum.
   * @returns The weight that can be lifted for the given 1RM.
   */
    weight(rm: number): number {
        return (1.0278-(0.0278 * this.reps));
    }

    /**
   * Estimates 1RM using two sets of data.
   * @param weight The weight lifted in the first set.
   * @param rep2 The number of repetitions performed in the second set.
   * @param weight2 The weight lifted in the second set.
   * @returns The estimated 1RM.
   * @example
   * const brzycki = new Brzycki(8);
   * const oneRM = brzycki.twoSet(80, 6, 85); // Estimates 1RM using two sets of data
   */
    twoSet(weight: number, rep2: number, weight2: number): number {
        return ((weight - weight2)/(rep2 - this.reps)) * (this.reps - 1) + weight;
    }

    /**
   * Checks if the Brzycki method is valid for the given parameters.
   * @returns Always returns true as this method has no specific limitations.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

/**
 * Represents the Epley 1RM estimation method.
 * Use this class for general 1RM estimation, as it has no specific limitations.
 */
export class Epley extends RMEstimator {

    /**
   * Predicts the 1RM using the Epley method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const epley = new Epley(6);
   * const oneRM = epley.predict(90); // Predicts 1RM for 90kg lifted 6 times
   */
    predict(weight: number): number {
        return (weight * this.reps * 0.033)+weight;
    }

    /**
   * Checks if the Epley method is valid for the given parameters.
   * @returns Always returns true as this method has no specific limitations.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

/**
 * Represents the Landers 1RM estimation method.
 * Use this class for general 1RM estimation, as it has no specific limitations.
 */
export class Landers extends RMEstimator {

    /**
   * Predicts the 1RM using the Landers method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const landers = new Landers(7);
   * const oneRM = landers.predict(85); // Predicts 1RM for 85kg lifted 7 times
   */
    predict(weight: number): number {
        return weight/(1.013 - (0.0267123 * this.reps) );
    }

    /**
   * Calculates the weight that can be lifted for the given 1RM.
   * @param rm The one-repetition maximum.
   * @returns The weight that can be lifted for the given 1RM.
   */
    weight(rm: number): number {
        return rm*(1.013 - (0.0267123 * this.reps) );
    }

    /**
   * Calculates the percentage of 1RM for the given number of repetitions.
   * @returns The percentage of 1RM.
   * @example
   * const landers = new Landers(5);
   * const percentOfOneRM = landers.percent(); // Calculates the percentage of 1RM for 5 reps
   */
    percent() {
        let value: number = 101.3 - (2.67123 * this.reps );
        return value / 100;
    }

    /**
   * Checks if the Landers method is valid for the given parameters.
   * @returns Always returns true as this method has no specific limitations.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

/**
 * Represents the Lombardi 1RM estimation method.
 * Use this class when estimating 1RM for repetitions less than 11.
 */
export class Lombardi extends RMEstimator {

    /**
   * Predicts the 1RM using the Lombardi method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const lombardi = new Lombardi(8);
   * const oneRM = lombardi.predict(75); // Predicts 1RM for 75kg lifted 8 times
   */
    predict(weight: number): number {
        return weight*Math.pow(this.reps,0.10);
    }

    /**
   * Calculates the weight that can be lifted for the given 1RM.
   * @param rm The one-repetition maximum.
   * @returns The weight that can be lifted for the given 1RM.
   */
    weight(rm: number): number {
        return rm/Math.pow(this.reps,0.10);
    }

    /**
   * Checks if the Lombardi method is valid for the given parameters.
   * @param gender The gender of the individual.
   * @param age The age of the individual.
   * @param repetitions The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns True if the method is valid, false otherwise.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return repetitions < 11;
    }
}

/**
 * Represents the Mayhew 1RM estimation method.
 * Use this class when estimating 1RM for young adults (18-25 years) performing less than 15 repetitions.
 */
export class Mayhew extends RMEstimator {

    /**
   * Predicts the 1RM for football players using the Mayhew method.
   * @returns The predicted 1RM for football players.
   * @example
   * const mayhew = new Mayhew(10);
   * const footballOneRM = mayhew.football(); // Predicts 1RM for football players performing 10 reps
   */
    football() {
        return 226.7 + 7.1*(this.reps);
    }

    /**
   * Predicts the 1RM using the Mayhew method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const mayhew = new Mayhew(7);
   * const oneRM = mayhew.predict(80); // Predicts 1RM for 80kg lifted 7 times
   */
    predict(weight: number): number {
        return (100*weight)/( 52.2 + 41.9 * Math.exp(-0.055 * this.reps) );
    }

    /**
   * Calculates the percentage of 1RM for the given number of repetitions.
   * @returns The percentage of 1RM.
   * @example
   * const mayhew = new Mayhew(5);
   * const percentOfOneRM = mayhew.percent(); // Calculates the percentage of 1RM for 5 reps
   */
    percent() {
        let value: number = 52.2 + 41.9* Math.exp(-0.055* this.reps);
        return value / 100;
    }

    /**
   * Calculates the weight that can be lifted for the given 1RM.
   * @param rm The one-repetition maximum.
   * @returns The weight that can be lifted for the given 1RM.
   */
    weight(rm: number): number {
        return (rm*( 52.2 + 41.9 * Math.exp(-0.055 * this.reps) ) )/100;
    }
    /**
   * Checks if the Mayhew method is valid for the given parameters.
   * @param gender The gender of the individual.
   * @param age The age of the individual.
   * @param repetitions The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns True if the method is valid, false otherwise.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return repetitions < 15 && age > 17 && age < 25;
    }
}

/**
 * Represents the McGlothin 1RM estimation method.
 * Use this class for general 1RM estimation, as it has no specific limitations.
 */
export class McGlothin extends RMEstimator {

    /**
   * Predicts the 1RM using the McGlothin method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const mcglothin = new McGlothin(6);
   * const oneRM = mcglothin.predict(70); // Predicts 1RM for 70kg lifted 6 times
   */
    predict(weight: number): number {
        return (100 * weight)/(101.3 - 2.67123 * this.reps);
    }

    /**
   * Calculates the weight that can be lifted for the given 1RM.
   * @param rm The one-repetition maximum.
   * @returns The weight that can be lifted for the given 1RM.
   */
    weight(rm: number): number {
        return (rm*(101.3 - 2.67123 * this.reps) )/100;
    }

    /**
   * Checks if the McGlothin method is valid for the given parameters.
   * @returns Always returns true as this method has no specific limitations.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}


/**
 * Represents the O'Connor 1RM estimation method.
 * Use this class for general 1RM estimation, as it has no specific limitations.
 */
export class  OConnor extends RMEstimator {

    /**
   * Predicts the 1RM using the O'Connor method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const oconnor = new OConnor(8);
   * const oneRM = oconnor.predict(75); // Predicts 1RM for 75kg lifted 8 times
   */
    predict(weight: number): number {
        return weight * (1+0.025*this.reps);
    }

    /**
   * Calculates the percentage of 1RM for the given number of repetitions.
   * @returns The percentage of 1RM.
   * @example
   * const oconnor = new OConnor(5);
   * const percentOfOneRM = oconnor.percent(); // Calculates the percentage of 1RM for 5 reps
   */
    percent(weight: number): number {
        return (0.025 * (weight * this.reps)+ weight);
    }

    /**
   * Calculates the weight that can be lifted for the given 1RM.
   * @param rm The one-repetition maximum.
   * @returns The weight that can be lifted for the given 1RM.
   */
    weight(rm: number): number {
        return (40.*rm)/(this.reps+40);
    }

    /**
   * Checks if the OConnor method is valid for the given parameters.
   * @returns Always returns true as this method has no specific limitations.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

/**
 * Represents the Reynolds CP (chest press) 1RM estimation method.
 * Use this class for estimating 1RM specifically for chest press exercises.
 */
export class ReynoldsCP extends RMEstimator {

    /**
   * Predicts the 1RM using the Reynolds CP method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const reynoldsCP = new ReynoldsCP(7);
   * const oneRM = reynoldsCP.predict(80); // Predicts 1RM for 80kg lifted 7 times in chest press
   */
    predict(weight: number): number {
        return (1.1307 * weight) + 0.6998;
    }

    /**
   * Checks if the ReynoldsCP method is valid for the given parameters.
   * @returns Always returns true as this method has no specific limitations.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

/**
 * Represents the Reynolds LP (leg press) 1RM estimation method.
 * Use this class for estimating 1RM specifically for leg press exercises.
 */
export class ReynoldsLP extends RMEstimator {

    /**
   * Predicts the 1RM using the Reynolds LP method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const reynoldsLP = new ReynoldsLP(6);
   * const oneRM = reynoldsLP.predict(150); // Predicts 1RM for 150kg lifted 6 times in leg press
   */
    predict(weight: number): number {
        return (1.09703 * weight) + 14.2546;
    }

    /**
   * Checks if the ReynoldsLP method is valid for the given parameters.
   * @returns Always returns true as this method has no specific limitations.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}


/**
 * Represents the Wathan 1RM estimation method.
 * Use this class for general 1RM estimation, as it has no specific limitations.
 */
export class Wathan extends RMEstimator {
    
    /**
   * Predicts the 1RM using the Wathan method.
   * @param weight The weight lifted for the given number of repetitions.
   * @returns The predicted 1RM.
   * @example
   * const wathan = new Wathan(5);
   * const oneRM = wathan.predict(90); // Predicts 1RM for 90kg lifted 5 times
   */
    predict(weight: number): number {
        return (100*weight) / (48.8+(53.8*Math.exp(-0.075 * this.reps) ) );
    }

    /**
   * Calculates the weight that can be lifted for the given 1RM.
   * @param rm The one-repetition maximum.
   * @returns The weight that can be lifted for the given 1RM.
   */
    weight(rm: number): number {
        return (rm*(48.8+(53.8*Math.exp(-0.075 * this.reps) ) ) )/100;
    }

    /**
   * Checks if the Wathan method is valid for the given parameters.
   * @returns Always returns true as this method has no specific limitations.
   */
    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

/**
 * Represents various One Repetition Maximum (1RM) estimation methods.
 * Use this class to perform 1RM calculations based on gender and age.
 */
export class RM {
  public gender: Gender;
  public dob: Date;

  /**
   * Creates a new RM instance.
   * @param gender The gender of the individual.
   * @param dob The date of birth of the individual.
   */
    constructor(gender: Gender, dob: Date) {
        this.gender = gender;
        this.dob = dob;
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
        let age = this.dob.delta("years");
        return  (1.06 * weight) + (0.58 * reps) - (0.20 * age) - 3.41;
    }

    /**
   * Estimates 1RM for older females.
   * @param reps The number of repetitions performed.
   * @param weight The weight lifted.
   * @returns The estimated 1RM.
   */
    femaleOlder(reps: number, weight: number): number {
        let age = this.dob.delta("years");
        return (0.92 * weight) + (0.79 * reps) - (0.20 * age) - 3.73;
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

  }
}
