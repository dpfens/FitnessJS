/// <reference path="../enums.ts" />

namespace Fit {

  export namespace strength {

    export class Compare {
      private gender: Gender;
      private dob: Date;
      private weight: number;
      private height: number;

    constructor(gender: Gender, weight: number) {
        this.gender = gender;
        this.weight = weight;
    }

    oCarroll(weightLifted: number): number {
        return weightLifted/Math.pow(this.weight-35, 1/3);
    }

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

    siffPower(): number {
        let a: number = 512.245;
        let b: number = 172970;
        let c: number = 1.3925;
        if(this.gender === Gender.Female) {
            return 0;
        }
        return a-b*Math.pow(this.weight, -c);
    }

    siff(power: boolean=false): number {
        if(power) {
            return this.siffPower();
        }
        return this.siffWeight();
    }

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

export class Jump {
  public weight: number;
  public height: number;

    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height;
    }

    bosco(duration: number, jump_count: number, total_flight_time: number): number {
        return (total_flight_time * duration * Math.pow(9.81,2)) / (4 * jump_count * (duration - total_flight_time) );
    }

    lewis(vJumpHeight: number): number {
        return Math.sqrt(4.9 * this.weight) * Math.sqrt(vJumpHeight) * 9.81;
    }

    harman(vJumpHeight: number, peak: boolean=false): number {
        let vJumpHeightCm: number = vJumpHeight * 100;
        if(peak) {
            return 61.9*vJumpHeightCm + 36*this.weight + 1822;
        }
        return 21.1 *vJumpHeightCm + 2.3*this.weight + 1393;
    }

    jb(vJumpHeight: number, peak: boolean=false): number {
        let bodyHeightCm: number = this.height * 100;
        let vJumpHeightCm: number = vJumpHeight * 100;
        if(peak) {
            return 78.6*vJumpHeightCm +60.3*this.weight + 15.3*bodyHeightCm + 1308;
        }
        return 43.8*vJumpHeightCm + 32.7*this.weight - 16.8*bodyHeightCm + 431;
    }

    sayer(vJumpHeight: number): number {
        let vJumpHeightCm: number = vJumpHeight * 100;
        return 60.7*vJumpHeightCm + 45.3*this.weight - 2055;
    }

    mk(vJumpHeight: number, time: number): number {
        return (this.weight * (vJumpHeight/time)) * 9.81;
    }
  }

export class RMEstimator {
  public reps: number;

    constructor(reps: number) {
        this.reps = reps;
    }

    predict(weight: number): number {
        throw new Error("The prediction method is not implemented");
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        throw new Error("The static isValid method is not implemented");
    }
}

export class Abadie extends RMEstimator {

    predict(weight: number): number {
        return 7.24 + (1.05* weight);
    }

    weight(rm: number): number {
        return (4./105)*(25*rm-181);
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return gender === Gender.Female && repetitions >= 5 && repetitions <= 10 && age > 17 && age < 25;
    }
}

export class Baechle extends RMEstimator {

    predict(weight: number): number {
        return weight * (1+(0.033* this.reps) );
    }

    weight(rm: number): number {
        return (1000*rm)/(33*this.reps + 1000);
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class Brzycki extends RMEstimator {

    predict(weight: number): number {
        return weight/(1.0278-(0.0278 * this.reps));
    }

    weight(rm: number): number {
        return (1.0278-(0.0278 * this.reps));
    }

    twoSet(weight: number, rep2: number, weight2: number): number {
        return ((weight - weight2)/(rep2 - this.reps)) * (this.reps - 1) + weight;
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class Epley extends RMEstimator {

    predict(weight: number): number {
        return (weight * this.reps * 0.033)+weight;
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class Landers extends RMEstimator {

    predict(weight: number): number {
        return weight/(1.013 - (0.0267123 * this.reps) );
    }

    weight(rm: number): number {
        return rm*(1.013 - (0.0267123 * this.reps) );
    }

    percent() {
        let value: number = 101.3 - (2.67123 * this.reps );
        return value / 100;
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class Lombardi extends RMEstimator {

    predict(weight: number): number {
        return weight*Math.pow(this.reps,0.10);
    }

    weight(rm: number): number {
        return rm/Math.pow(this.reps,0.10);
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return repetitions < 11;
    }
}

export class Mayhew extends RMEstimator {

    football() {
        return 226.7 + 7.1*(this.reps);
    }

    predict(weight: number): number {
        return (100*weight)/( 52.2 + 41.9 * Math.exp(-0.055 * this.reps) );
    }

    percent() {
        let value: number = 52.2 + 41.9* Math.exp(-0.055* this.reps);
        return value / 100;
    }

    weight(rm: number): number {
        return (rm*( 52.2 + 41.9 * Math.exp(-0.055 * this.reps) ) )/100;
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return repetitions < 15 && age > 17 && age < 25;
    }
}

export class McGlothin extends RMEstimator {

    predict(weight: number): number {
        return (100 * weight)/(101.3 - 2.67123 * this.reps);
    }

    weight(rm: number): number {
        return (rm*(101.3 - 2.67123 * this.reps) )/100;
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class  OConnor extends RMEstimator {

    predict(weight: number): number {
        return weight * (1+0.025*this.reps);
    }

    percent(weight: number): number {
        return (0.025 * (weight * this.reps)+ weight);
    }

    weight(rm: number): number {
        return (40.*rm)/(this.reps+40);
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class ReynoldsCP extends RMEstimator {

    predict(weight: number): number {
        return (1.1307 * weight) + 0.6998;
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class ReynoldsLP extends RMEstimator {

    predict(weight: number): number {
        return (1.09703 * weight) + 14.2546;
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class Wathan extends RMEstimator {

    predict(weight: number): number {
        return (100*weight) / (48.8+(53.8*Math.exp(-0.075 * this.reps) ) );
    }

    weight(rm: number): number {
        return (rm*(48.8+(53.8*Math.exp(-0.075 * this.reps) ) ) )/100;
    }

    static isValid(gender: Gender, age: number, repetitions: number, weight: number): boolean {
        return true;
    }
}

export class RM {
  public gender: Gender;
  public dob: Date;

    constructor(gender: Gender, dob: Date) {
        this.gender = gender;
        this.dob = dob;
      }

    ymcaUpperBody(reps: number): number {
        if(this.gender === Gender.Female) {
            return (0.31 * reps) + 19.2;
        }
        return (1.55 * reps) + 37.9;
    }

    femaleMiddleAge(reps: number, weight: number): number {
        let age = this.dob.delta("years");
        return  (1.06 * weight) + (0.58 * reps) - (0.20 * age) - 3.41;
    }

    femaleOlder(reps: number, weight: number): number {
        let age = this.dob.delta("years");
        return (0.92 * weight) + (0.79 * reps) - (0.20 * age) - 3.73;
    }

    relative(weight: number, rm: number): number {
        return rm / weight;
    }
}

  }
}
