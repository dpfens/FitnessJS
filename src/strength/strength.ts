import { Gender } from "../enums";

export class Compare {
  private gender: Gender;
  private dob: Date;
  private weight: number;
  private height: number;

    constructor(gender: Gender, weight: number) {
        this.gender = gender;
        this.weight = weight;
    }

    public oCarroll(weightLifted: number): number {
        return weightLifted / Math.pow(this.weight - 35, 1 / 3);
    }

    public siffWeight(): number {
        let a: number = 512.245;
        let b: number = 146230;
        let c: number = 1.605;
        if (this.gender === Gender.Female) {
            a = 943.063;
            b = 0.05142;
            c = 257.314;
            return c - a * Math.exp( - b * this.weight);
        }
        return a - b * Math.pow(this.weight, - c);
    }

    public siffPower(): number {
        const a: number = 512.245;
        const b: number = 172970;
        const c: number = 1.3925;
        if (this.gender === Gender.Female) {
            return 0;
        }
        return a - b * Math.pow(this.weight, - c);
    }

    public siff(power: boolean = false): number {
        if (power) {
            return this.siffPower();
        }
        return this.siffWeight();
    }

    public sinclair(obtainedTotal: number): number {
        let coefficientA: number = 0.794358141;
        let coefficientB: number = 174.393;
        if (this.gender === Gender.Female) {
            coefficientA = 0.897260740;
            coefficientB = 148.026;
        }
        if (this.weight > coefficientB) {
             return 1;
        }
        const exponent: number = Math.pow( coefficientA * Math.log10(this.weight / coefficientB), 2 );
        const multiplier: number = Math.pow(10, exponent);
        return multiplier * obtainedTotal;
    }

    public wilks(weightLifted: number): number {
        let a: number = -216.0475144;
        let b: number = 16.2606339;
        let c: number = -0.002388645;
        let d: number = -0.00113732;
        let e: number = 7.01863E-06;
        let f: number = -1.291E-08;

        if (this.gender === Gender.Female) {
            a = 594.31747775582;
            b = -27.23842536447;
            c = 0.82112226871;
            d = -0.00930733913;
            e = 4.731582E-05;
            f = -9.054E-08;
        }
        const coefficient: number = 500 / (a + b * this.weight + c * Math.pow(this.weight, 2) + d * Math.pow(this.weight, 3) + e * Math.pow(this.weight, 4) + f * Math.pow(this.weight, 5) );
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

    public bosco(duration: number, jumpCount: number, totalFlightTime: number): number {
        return (totalFlightTime * duration * Math.pow(9.81, 2)) / (4 * jumpCount * (duration - totalFlightTime));
    }

    public lewis(vJumpHeight: number): number {
        return Math.sqrt(4.9 * this.weight) * Math.sqrt(vJumpHeight) * 9.81;
    }

    public harman(vJumpHeight: number, peak: boolean = false): number {
        const vJumpHeightCm: number = vJumpHeight * 100;
        if (peak) {
            return 61.9 * vJumpHeightCm + 36 * this.weight + 1822;
        }
        return 21.1 * vJumpHeightCm + 2.3 * this.weight + 1393;
    }

    public jb(vJumpHeight: number, peak: boolean = false): number {
        const bodyHeightCm: number = this.height * 100;
        const vJumpHeightCm: number = vJumpHeight * 100;
        if (peak) {
            return 78.6 * vJumpHeightCm + 60.3 * this.weight + 15.3 * bodyHeightCm + 1308;
        }
        return 43.8 * vJumpHeightCm + 32.7 * this.weight - 16.8 * bodyHeightCm + 431;
    }

    public sayer(vJumpHeight: number): number {
        const vJumpHeightCm: number = vJumpHeight * 100;
        return 60.7 * vJumpHeightCm + 45.3 * this.weight - 2055;
    }

    public mk(vJumpHeight: number, time: number): number {
        return (this.weight * (vJumpHeight / time)) * 9.81;
    }
}

export class RMEstimator {
    public reps: number;

    constructor(reps: number) {
        this.reps = reps;
    }

    public predict(weight: number): number {
        throw new Error("The prediction method is not implemented");
    }
}

export class Abadie extends RMEstimator {

    public predict(weight: number): number {
        return 7.24 + (1.05 * weight);
    }

    public weight(rm: number): number {
        return (4. / 105) * (25 * rm - 181);
    }
}

export class Baechle extends RMEstimator {

    public predict(weight: number): number {
        return weight * (1 + (0.033 * this.reps) );
    }

    public weight(rm: number): number {
        return (1000 * rm) / (33 * this.reps + 1000);
    }
}

export class Brzycki extends RMEstimator {

    public predict(weight: number): number {
        return weight / (1.0278 - (0.0278 * this.reps));
    }

    public weight(rm: number): number {
        return (1.0278 - (0.0278 * this.reps));
    }

    public twoSet(weight: number, rep2: number, weight2: number): number {
        return ((weight - weight2) / (rep2 - this.reps)) * (this.reps - 1) + weight;
    }
}

export class Epley extends RMEstimator {

    public predict(weight: number): number {
        return (weight * this.reps * 0.033) + weight;
    }
}

export class Landers extends RMEstimator {

    public predict(weight: number): number {
        return weight / (1.013 - (0.0267123 * this.reps) );
    }

    public weight(rm: number): number {
        return rm * (1.013 - (0.0267123 * this.reps) );
    }

    public percent() {
        const value: number = 101.3 - (2.67123 * this.reps );
        return value / 100;
    }
}

export class Lombardi extends RMEstimator {

    public predict(weight: number): number {
        return weight * Math.pow(this.reps, 0.10);
    }

    public weight(rm: number): number {
        return rm / Math.pow(this.reps, 0.10);
    }
}

export class Mayhew extends RMEstimator {

    public football() {
        return 226.7 + 7.1 * (this.reps);
    }

    public predict(weight: number): number {
        return (100 * weight) / ( 52.2 + 41.9 * Math.exp( - 0.055 * this.reps) );
    }

    public percent() {
        const value: number = 52.2 + 41.9 * Math.exp( - 0.055 * this.reps);
        return value / 100;
    }

    public weight(rm: number): number {
        return (rm * ( 52.2 + 41.9 * Math.exp( - 0.055 * this.reps) ) ) / 100;
    }
}

export class McGlothin extends RMEstimator {

    public predict(weight: number): number {
        return (100 * weight) / (101.3 - 2.67123 * this.reps);
    }

    public weight(rm: number): number {
        return (rm * (101.3 - 2.67123 * this.reps) ) / 100;
    }
}

export class  OConnor extends RMEstimator {

    public predict(weight: number): number {
        return weight * (1 + 0.025 * this.reps);
    }

    public percent(weight: number): number {
        return (0.025 * (weight * this.reps) + weight);
    }

    public weight(rm: number): number {
        return (40. * rm) / (this.reps + 40);
    }
}

export class ReynoldsCP extends RMEstimator {

    public predict(weight: number): number {
        return (1.1307 * weight) + 0.6998;
    }
}

export class ReynoldsLP extends RMEstimator {

    public predict(weight: number): number {
        return (1.09703 * weight) + 14.2546;
    }
}

export class Wathan extends RMEstimator {

    public predict(weight: number): number {
        return (100 * weight) / (48.8 + (53.8 * Math.exp( - 0.075 * this.reps) ) );
    }

    public weight(rm: number): number {
        return (rm * (48.8 + (53.8 * Math.exp( - 0.075 * this.reps) ) ) ) / 100;
    }
}

export class RM {
    public gender: Gender;
    public dob: Date;

    constructor(gender: Gender, dob: Date) {
        this.gender = gender;
        this.dob = dob;
      }

    public ymcaUpperBody(reps: number): number {
        if (this.gender === Gender.Female) {
            return (0.31 * reps) + 19.2;
        }
        return (1.55 * reps) + 37.9;
    }

    public femaleMiddleAge(reps: number, weight: number): number {
        const age = this.dob.delta("years");
        return  (1.06 * weight) + (0.58 * reps) - (0.20 * age) - 3.41;
    }

    public femaleOlder(reps: number, weight: number): number {
        const age = this.dob.delta("years");
        return (0.92 * weight) + (0.79 * reps) - (0.20 * age) - 3.73;
    }

    public relative(weight: number, rm: number): number {
        return rm / weight;
    }
}
