interface Math {
    log10(x: number): number;
}
interface Date {
    delta(unit: string, date?: Date): number;
}
declare namespace Fit {
    module conversion {
        class UnitConverter {
            private value;
            private currentUnit;
            constructor(value: number, unit: string);
            to: (targetUnit: number) => any;
            val: () => number;
            static addUnit: (base: string, prefixed: string, multiplier: number) => void;
        }
    }
}
declare namespace Fit {
    module conversion {
        module SwainConverter {
            function percentVO2Max(hrPercentage: number): number;
            function percentHrMax(vO2MaxPercentage: number): number;
        }
    }
}
declare namespace Fit {
    module conversion {
        class TemperatureConverter {
            private value;
            private currentUnit;
            constructor(value: number, unit: string);
            to: (targetUnit: number) => any;
            val: () => number;
        }
    }
}
declare namespace Fit {
    enum Gender {
        Male = 0,
        Female = 1,
    }
    enum Race {
        Asian = 0,
        Black = 1,
        Hispanic = 2,
    }
    enum PAL {
        Sedentary = 0,
        Low = 1,
        Active = 2,
        VeryActive = 3,
    }
}
declare namespace Fit {
    namespace mets {
        class MET {
            value: number;
            code: string;
            description: string;
            constructor(value: number, code: string, description: string);
        }
        function byCode(code: string): MET;
        function estimateMETs(kcal: number, kg: number, hours: number): number;
        function estimateKg(kcal: number, mets: number, hours: number): number;
        function estimateHours(kcal: number, mets: number, kg: number): number;
        function toKCal(mets: number, weight: number): number;
        function fromVO2(vO2: number): number;
        function karvonen(mets: number, intensity: number): number;
        function target(vO2Max: number, intensity: number): number;
    }
}
declare namespace Fit {
    namespace balance {
    }
}
declare namespace Fit {
    namespace cardio {
        namespace cardiac {
            interface Estimator {
                predict(dob: Date): any;
                age(hr: number): any;
            }
            class Astrand implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class HF implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class Gellish implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class Gulati implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class LM implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class Miller implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class Nes implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class OaklandL implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class OaklandNL1 implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class OaklandNL2 implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class RL implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            class TMS implements Estimator {
                predict(dob: Date): number;
                age(hr: number): number;
            }
            function mean_arterial_pressure(diastolic_bp: number, systolic_bp: number): number;
            function karvonen(intensity: number, rest: number, maximum: number): number;
            function zoladz(hrMax: number, adjuster: number): number;
        }
    }
}
declare namespace Fit {
    namespace energy {
        class BMREstimator {
            gender: Gender;
            constructor(gender: Gender);
            predict(dob: Date, weight: number, height: number): number;
        }
        class HB extends BMREstimator {
            predict(dob: Date, weight: number, height: number): number;
        }
        class RevisedHB extends BMREstimator {
            predict(dob: Date, weight: number, height: number): number;
        }
        class MSJ extends BMREstimator {
            predict(dob: Date, weight: number, height: number): number;
        }
        class RMR {
            gender: Gender;
            dob: Date;
            height: number;
            weight: number;
            constructor(gender: Gender, dob: Date, weight: number, height: number);
            quick(): number;
            bsa(bsa: number): number;
        }
        function kma(lbm: number): number;
        function cunningham(lbm: number): number;
        class TEEEstimator {
            gender: Gender;
            pal: PAL;
            constructor(gender: Gender, pal: PAL);
            predict(dob: Date, weight: number, height: number): number;
            fromActivity(weight: number, mets: number): number;
        }
        class ChildTEE extends TEEEstimator {
            predict(dob: Date, weight: number, height: number): number;
        }
        class AdultTEE extends TEEEstimator {
            predict(dob: Date, weight: number, height: number): number;
        }
        class Terrain {
            weight: number;
            speed: number;
            load: number;
            constructor(weight: number, speed: number, load: number);
            pandolf(terrain: number, slope: number): number;
            santee(terrain: number, slope: number): number;
        }
    }
}
declare namespace Fit {
    namespace cardio {
        class ResidualVolume {
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
        class VO2 {
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
}
declare namespace Fit {
    namespace composition {
        class Density {
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
}
declare namespace Fit {
    namespace composition {
        function dailyWaterNeed(): number;
    }
}
declare namespace Fit {
    namespace composition {
        class Fat {
            constructor();
            brozek(bd: number): number;
            ortiz(bd: number): number;
            schutte(bd: number): number;
            siri(bd: number): number;
            wagner(bd: number): number;
            static childBmi: (gender: Gender, dob: Date, weight: number, height: number) => number;
            static adultBmi: (gender: Gender, dob: Date, weight: number, height: number) => number;
            static waist: (gender: Gender, weight: number, waistCircumference: number) => number;
        }
    }
}
declare namespace Fit {
    namespace composition {
        class Index {
            private height;
            private weight;
            constructor(height: number, weight: number);
            bai(hipCircumference: number): number;
            bmi(): number;
            bmi_prime(upper_limit?: number): number;
            bsi(waist_circumference: number): number;
            corpulence(): number;
            sbsi(bsa: number, vertical_trunk_circumference: number, waist_circumference: number): number;
            WHR(waistCircumference: number, hipCircumference: number): number;
            WHtR(waistCircumference: any): number;
        }
    }
}
declare namespace Fit {
    namespace composition {
        class Mass {
            private gender;
            private dob;
            private height;
            private weight;
            constructor(gender: Gender, dob: Date, height: number, weight: number);
            ffmChild: (resistance: any, reactance: any) => number;
            ffmAdolescent: (resistance: any, reactance: any) => number;
            ffmAdultLean: (resistance: any, reactance: any) => number;
            ffmAdultObese: (resistance: any, reactance: any) => number;
            ffmAdultAthlete: (resistance: any, reactance: any) => number;
        }
    }
}
declare namespace Fit {
    namespace composition {
        class Stature {
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
}
declare namespace Fit {
    namespace composition {
        class SurfaceArea {
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
}
declare namespace Fit {
    module composition {
        class Ideal {
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
}
declare namespace Fit {
    namespace flexibility {
    }
}
declare namespace Fit {
    namespace strength {
        class Compare {
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
        class Jump {
            weight: number;
            height: number;
            constructor(weight: number, height: number);
            bosco(duration: number, jump_count: number, total_flight_time: number): number;
            lewis(vJumpHeight: number): number;
            harman(vJumpHeight: number, peak?: boolean): number;
            jb(vJumpHeight: number, peak?: boolean): number;
            sayer(vJumpHeight: number): number;
            mk(vJumpHeight: number, time: number): number;
        }
        class RMEstimator {
            reps: number;
            constructor(reps: number);
            predict(weight: number): number;
        }
        class Abadie extends RMEstimator {
            predict(weight: number): number;
            weight(rm: number): number;
        }
        class Baechle extends RMEstimator {
            predict(weight: number): number;
            weight(rm: number): number;
        }
        class Brzycki extends RMEstimator {
            predict(weight: number): number;
            weight(rm: number): number;
            twoSet(weight: number, rep2: number, weight2: number): number;
        }
        class Epley extends RMEstimator {
            predict(weight: number): number;
        }
        class Landers extends RMEstimator {
            predict(weight: number): number;
            weight(rm: number): number;
            percent(): number;
        }
        class Lombardi extends RMEstimator {
            predict(weight: number): number;
            weight(rm: number): number;
        }
        class Mayhew extends RMEstimator {
            football(): number;
            predict(weight: number): number;
            percent(): number;
            weight(rm: number): number;
        }
        class McGlothin extends RMEstimator {
            predict(weight: number): number;
            weight(rm: number): number;
        }
        class OConnor extends RMEstimator {
            predict(weight: number): number;
            percent(weight: number): number;
            weight(rm: number): number;
        }
        class ReynoldsCP extends RMEstimator {
            predict(weight: number): number;
        }
        class ReynoldsLP extends RMEstimator {
            predict(weight: number): number;
        }
        class Wathan extends RMEstimator {
            predict(weight: number): number;
            weight(rm: number): number;
        }
        class RM {
            gender: Gender;
            dob: Date;
            constructor(gender: Gender, dob: Date);
            ymcaUpperBody(reps: number): number;
            femaleMiddleAge(reps: number, weight: number): number;
            femaleOlder(reps: number, weight: number): number;
            relative(weight: number, rm: number): number;
        }
    }
}
declare namespace Fit {
    namespace model {
        namespace aerobic {
            abstract class PerformanceModel {
                protected t1: any;
                protected d1: any;
                constructor(d1: number, t1: number);
                time(d2: number): number;
                distance(t2: number): number;
            }
            class Riegel extends PerformanceModel {
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
                constructor(d1: number, t1: number, factor?: number);
                time(d2: number): number;
                distance(t2: number): number;
            }
            class Cameron extends PerformanceModel {
                time(d2: number): number;
            }
            class VV {
                protected t1: any;
                protected d1: any;
                constructor(d1: number, t1: number);
                adj_timer(d1: number, t1: number): number;
                riegel_velocity(distance: number): number;
                time(mileage: any, d2?: number): number;
                time2(mileage: number, d2: number, t2: number, distance?: number): number;
            }
        }
    }
}
declare namespace Fit {
    namespace sport {
        namespace running {
            namespace adjustment {
                function temperature(seconds: any, farenheit: any): number;
            }
        }
    }
}
declare namespace Fit {
    namespace sport {
        namespace running {
            function vVo2Max(vO2Max: number): number;
            namespace pace {
                function hrSpeed(percentHR: number, vO2Max: number): number;
                function hrPace(percentHR: number, vO2Max: number): number;
            }
        }
    }
}
declare namespace Fit {
    namespace sport {
        namespace running {
            namespace grading {
            }
        }
    }
}
declare namespace Fit {
    namespace sport {
        namespace running {
            namespace jackDaniels {
                function velocity(vO2: number): number;
                function vO2(velocity: number): number;
                function vO2Percentage(time: number): number;
                function easy(vO2Max: number): number[];
                function marathon(vO2Max: number): number[];
                function threshold(vO2Max: number): number[];
                function interval(vO2Max: number): number[];
            }
        }
    }
}
