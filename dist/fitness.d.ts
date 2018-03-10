interface Math {
    log10(x: number): number;
}
interface Date {
    delta(unit: string, date?: Date): number;
}
declare module "conversion/system" {
    export class UnitConverter {
        private value;
        private currentUnit;
        constructor(value: number, unit: string);
        static addUnit: (baseUnit: string, prefixed: string, unitMultiplier: number) => void;
        to: (targetUnit: number) => any;
        val: () => number;
    }
}
declare module "conversion/swain" {
    export function percentVO2Max(hrPercentage: number): number;
    export function percentHrMax(vO2MaxPercentage: number): number;
}
declare module "conversion/temperature" {
    export class TemperatureConverter {
        private value;
        private currentUnit;
        constructor(value: number, unit: string);
        to: (targetUnit: number) => any;
        val: () => number;
    }
}
declare module "conversion/conversion" {
    import * as system from "conversion/system";
    import * as swain from "conversion/swain";
    import * as temperature from "conversion/temperature";
    export { system, swain, temperature };
}
declare module "mets" {
    export class MET {
        value: number;
        code: string;
        description: string;
        constructor(value: number, code: string, description: string);
    }
    export const mets: MET[];
    export function byCode(code: string): MET;
    export function estimateMETs(kcal: number, kg: number, hours: number): number;
    export function estimateKg(kcal: number, mets: number, hours: number): number;
    export function estimateHours(kcal: number, mets: number, kg: number): number;
    export function toKCal(mets: number, weight: number): number;
    export function fromVO2(vO2: number): number;
    export function karvonen(mets: number, intensity: number): number;
    export function target(vO2Max: number, intensity: number): number;
}
declare module "cardiovascular/cardiac" {
    export interface IEstimator {
        predict(dob: Date): any;
        age(hr: number): any;
    }
    export class Astrand implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class HF implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class Gellish implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class Gulati implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class LM implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class Miller implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class Nes implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class OaklandL implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class OaklandNL1 implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class OaklandNL2 implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class RL implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export class TMS implements IEstimator {
        predict(dob: Date): number;
        age(hr: number): number;
    }
    export function meanArterialPressure(diastolicBp: number, systolicBp: number): number;
    export function karvonen(intensity: number, rest: number, maximum: number): number;
    export function zoladz(hrMax: number, adjuster: number): number;
}
declare module "enums" {
    export enum Gender {
        Male = 0,
        Female = 1,
    }
    export enum Race {
        Asian = 0,
        Black = 1,
        Hispanic = 2,
    }
    export enum PAL {
        Sedentary = 0,
        Low = 1,
        Active = 2,
        VeryActive = 3,
    }
}
declare module "cardiovascular/energy" {
    import { Gender, PAL } from "enums";
    export class BMREstimator {
        gender: Gender;
        constructor(gender: Gender);
        predict(dob: Date, weight: number, height: number): number;
    }
    export class HB extends BMREstimator {
        predict(dob: Date, weight: number, height: number): number;
    }
    export class RevisedHB extends BMREstimator {
        predict(dob: Date, weight: number, height: number): number;
    }
    export class MSJ extends BMREstimator {
        predict(dob: Date, weight: number, height: number): number;
    }
    export class RMR {
        gender: Gender;
        dob: Date;
        height: number;
        weight: number;
        constructor(gender: Gender, dob: Date, weight: number, height: number);
        quick(): number;
        bsa(bsa: number): number;
    }
    export function kma(lbm: number): number;
    export function cunningham(lbm: number): number;
    export class TEEEstimator {
        gender: Gender;
        pal: PAL;
        constructor(gender: Gender, pal: PAL);
        predict(dob: Date, weight: number, height: number): number;
        fromActivity(weight: number, mets: number): number;
    }
    export class ChildTEE extends TEEEstimator {
        predict(dob: Date, weight: number, height: number): number;
    }
    export class AdultTEE extends TEEEstimator {
        predict(dob: Date, weight: number, height: number): number;
    }
    export class Terrain {
        weight: number;
        speed: number;
        load: number;
        constructor(weight: number, speed: number, load: number);
        pandolf(terrain: number, slope: number): number;
        santee(terrain: number, slope: number): number;
    }
}
declare module "cardiovascular/respiration" {
    import { Gender } from "enums";
    export class ResidualVolume {
        gender: Gender;
        dob: Date;
        weight: number;
        height: number;
        constructor(gender: Gender, dob: Date, weight: number, height: number);
        normal(): number;
        overweight(): number;
        berglund(): number;
        black(): number;
        boren(): number;
        goldman(): number;
        obrien(bsa: number): number;
    }
    export class VO2 {
        gender: Gender;
        dob: Date;
        weight: number;
        height: number;
        constructor(gender: Gender, dob: Date, weight: number, height: number);
        reserve(vo2Max: number, vo2Rest?: number): number;
        target(vo2Max: number, vo2Rest: number, intensity: number): number;
        cooper(distance: number): number;
        walkingGross(speed: number, grade: number): number;
        runningGross(speed: number, grade: number): number;
        legErgometryGross(mass: number, work: number): number;
        armErgometryGross(mass: number, work: number): number;
        steppingGross(height: number, frequency: number): number;
        usop(hrMax: number, restingHR: number): number;
        foxErgometry(hr5: number): number;
        ebbelingTreadmill(speed: number, hr: number): number;
        kline(time: number, hrPeak: number): number;
        larsen(time: number, hr: number): number;
        astrandStep(hr: number): number;
        qcStep(hr: number): number;
        georgeRW(time: number): number;
        georgeSteady(time: number, hr: number): number;
        georgeTreadmill(speed: number, hr: number): number;
        treadmillSubmaxSingleStage(sm1: number, hr1: number, hrmax: number): number;
        treadmillSubmaxVO2Multistage(sm1: number, hr1: number, sm2: number, hr2: number, hrMax: number): number;
        curetonChild(time: number): number;
        balke(time: number): number;
        balke15MinRun(distance: number): number;
        bruceMale(time: number, time2: number, time3: number): number;
        bruceFemale(time: number): number;
        bruceEC(time: number): number;
        leger(speed: number): number;
        gilbertDaniels(velocity: number, time: number): number;
    }
}
declare module "cardiovascular/cardiovascular" {
    import * as cardiac from "cardiovascular/cardiac";
    import * as energy from "cardiovascular/energy";
    import * as respiration from "cardiovascular/respiration";
    export { cardiac, energy, respiration };
}
declare module "composition/density" {
    import { Gender } from "enums";
    export class Density {
        private gender;
        private dob;
        private height;
        private weight;
        constructor(gender: Gender, dob: Date, height: number, weight: number);
        dbAtRV: (bd: number) => number;
        skinfoldDbChild: (sum2SKF: number) => number;
        skinfoldDbBlackHispanicFemale: (sum7SKF: number) => number;
        skinfoldDbWhiteMale: (sum3SKF: number) => number;
        skinfoldDbWhiteFemaleAnorexic: (sum3SKF: number) => number;
        skinfoldDbAthlete: (sum: number) => number;
        skinfoldDbCollegiateAthleteBlack: (sum: any) => number;
        skinfoldDbCollegiateAthleteWhite: (sum3SKF: number) => number;
        bodyVol: (uww: number, rv: number, gv: number) => number;
    }
}
declare module "composition/hydration" {
    export function dailyWaterNeed(): number;
}
declare module "composition/fat" {
    import { Gender } from "enums";
    export class Fat {
        static childBmi: (gender: Gender, dob: Date, weight: number, height: number) => number;
        static adultBmi: (gender: Gender, dob: Date, weight: number, height: number) => number;
        static waist: (gender: Gender, weight: number, waistCircumference: number) => number;
        brozek(bd: number): number;
        ortiz(bd: number): number;
        schutte(bd: number): number;
        siri(bd: number): number;
        wagner(bd: number): number;
    }
}
declare module "composition/index" {
    export class Index {
        private height;
        private weight;
        constructor(height: number, weight: number);
        bai(hipCircumference: number): number;
        bmi(): number;
        bmi_prime(upperLimit?: number): number;
        bsi(waistCircumference: number): number;
        corpulence(): number;
        sbsi(bsa: number, verticalTrunkCircumference: number, waistCircumference: number): number;
        WHR(waistCircumference: number, hipCircumference: number): number;
        WHtR(waistCircumference: any): number;
    }
}
declare module "composition/mass" {
    import { Gender } from "enums";
    export class Mass {
        private gender;
        private dob;
        private height;
        private weight;
        constructor(gender: Gender, dob: Date, height: number, weight: number);
        ffmChild: (resistance: number, reactance: number) => number;
        ffmAdolescent: (resistance: number, reactance: number) => number;
        ffmAdultLean: (resistance: number, reactance: number) => number;
        ffmAdultObese: (resistance: number, reactance: number) => number;
        ffmAdultAthlete: (resistance: number, reactance: number) => number;
    }
}
declare module "composition/stature" {
    import { Gender } from "enums";
    export class Stature {
        private gender;
        private dob;
        private height;
        private weight;
        constructor(gender: Gender, dob: Date, height: number, weight: number);
        statureUniversal: () => number;
        statureAmericanWhite: (femurLength: number) => number;
        statureAmericanBlack: (femurLength: number) => number;
        strideLength(): number;
    }
}
declare module "composition/surfacearea" {
    import { Gender } from "enums";
    export class SurfaceArea {
        private gender;
        private dob;
        private height;
        private weight;
        constructor(gender: Gender, dob: Date, height: number, weight: number);
        boyd: () => number;
        costeff: () => number;
        dubois: () => number;
        fujimoto: () => number;
        gehangeorge: () => number;
        haycock: () => number;
        mosteller: () => number;
        schlich: () => number;
        shuterAslani: () => number;
        takahira: () => number;
    }
}
declare module "composition/ideal" {
    import { Gender } from "enums";
    export class Ideal {
        gender: Gender;
        dob: Date;
        height: number;
        weight: number;
        constructor(gender: Gender, dob: Date, height: number, weight: number);
        hamwi: () => number;
        devine: () => number;
        robinson: () => number;
        miller: () => number;
        lemmens: () => number;
        willoughby: () => number;
        willoughbyWaist: () => number;
    }
}
declare module "composition/composition" {
    import * as density from "composition/density";
    import * as hydration from "composition/hydration";
    import * as fat from "composition/fat";
    import * as index from "composition/index";
    import * as mass from "composition/mass";
    import * as stature from "composition/stature";
    import * as surfaceArea from "composition/surfacearea";
    import * as ideal from "composition/ideal";
    export { density, hydration, fat, index, mass, stature, surfaceArea, ideal };
}
declare module "strength/strength" {
    import { Gender } from "enums";
    export class Compare {
        private gender;
        private dob;
        private weight;
        private height;
        constructor(gender: Gender, weight: number);
        oCarroll(weightLifted: number): number;
        siffWeight(): number;
        siffPower(): number;
        siff(power?: boolean): number;
        sinclair(obtainedTotal: number): number;
        wilks(weightLifted: number): number;
    }
    export class Jump {
        weight: number;
        height: number;
        constructor(weight: number, height: number);
        bosco(duration: number, jumpCount: number, totalFlightTime: number): number;
        lewis(vJumpHeight: number): number;
        harman(vJumpHeight: number, peak?: boolean): number;
        jb(vJumpHeight: number, peak?: boolean): number;
        sayer(vJumpHeight: number): number;
        mk(vJumpHeight: number, time: number): number;
    }
    export class RMEstimator {
        reps: number;
        constructor(reps: number);
        predict(weight: number): number;
    }
    export class Abadie extends RMEstimator {
        predict(weight: number): number;
        weight(rm: number): number;
    }
    export class Baechle extends RMEstimator {
        predict(weight: number): number;
        weight(rm: number): number;
    }
    export class Brzycki extends RMEstimator {
        predict(weight: number): number;
        weight(rm: number): number;
        twoSet(weight: number, rep2: number, weight2: number): number;
    }
    export class Epley extends RMEstimator {
        predict(weight: number): number;
    }
    export class Landers extends RMEstimator {
        predict(weight: number): number;
        weight(rm: number): number;
        percent(): number;
    }
    export class Lombardi extends RMEstimator {
        predict(weight: number): number;
        weight(rm: number): number;
    }
    export class Mayhew extends RMEstimator {
        football(): number;
        predict(weight: number): number;
        percent(): number;
        weight(rm: number): number;
    }
    export class McGlothin extends RMEstimator {
        predict(weight: number): number;
        weight(rm: number): number;
    }
    export class OConnor extends RMEstimator {
        predict(weight: number): number;
        percent(weight: number): number;
        weight(rm: number): number;
    }
    export class ReynoldsCP extends RMEstimator {
        predict(weight: number): number;
    }
    export class ReynoldsLP extends RMEstimator {
        predict(weight: number): number;
    }
    export class Wathan extends RMEstimator {
        predict(weight: number): number;
        weight(rm: number): number;
    }
    export class RM {
        gender: Gender;
        dob: Date;
        constructor(gender: Gender, dob: Date);
        ymcaUpperBody(reps: number): number;
        femaleMiddleAge(reps: number, weight: number): number;
        femaleOlder(reps: number, weight: number): number;
        relative(weight: number, rm: number): number;
    }
}
declare module "models/aerobic" {
    export abstract class PerformanceModel {
        protected t1: any;
        protected d1: any;
        constructor(d1: number, t1: number);
        time(d2: number): number;
        distance(t2: number): number;
    }
    export class Riegel extends PerformanceModel {
        time(d2: number): number;
        distance(t2: number): number;
    }
    export class Cameron extends PerformanceModel {
        time(d2: number): number;
    }
    export class VV {
        protected t1: any;
        protected d1: any;
        constructor(d1: number, t1: number);
        time(mileage: any, d2?: number): number;
        time2(mileage: number, d2: number, t2: number, distance?: number): number;
        private adj_timer(d1, t1);
        private riegel_velocity(distance);
    }
}
declare module "sport/running/adjustment" {
    export function temperature(seconds: any, farenheit: any): number;
}
declare module "sport/running/pace" {
    export function vVo2Max(vO2Max: number): number;
    export function hrSpeed(percentHR: number, vO2Max: number): number;
    export function hrPace(percentHR: number, vO2Max: number): number;
}
declare module "sport/running/grading" {
    import { Gender } from "enums";
    export class RunningAgeGrade {
        static table: any;
        gender: Gender;
        age: number;
        constructor(gender: Gender, age: number);
        normalize: (event: string, time: number) => number;
    }
}
declare module "sport/running/jackdaniels" {
    export function velocity(vO2: number): number;
    export function vO2(velocity: number): number;
    export function vO2Percentage(time: number): number;
    export function easy(vO2Max: number): number[];
    export function marathon(vO2Max: number): number[];
    export function threshold(vO2Max: number): number[];
    export function interval(vO2Max: number): number[];
}
declare module "sport/sport" {
    import * as adjustment from "sport/running/adjustment";
    import * as pace from "sport/running/pace";
    import * as grading from "sport/running/grading";
    import * as jackDaniels from "sport/running/jackdaniels";
    let running: {
        adjustment: typeof adjustment;
        pace: typeof pace;
        grading: typeof grading;
        jackDaniels: typeof jackDaniels;
    };
    export { running };
}
declare module "main" {
}
