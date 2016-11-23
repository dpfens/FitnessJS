/// <reference path="../enums.ts" />

namespace Fit {

  export namespace cardio {

    export namespace cardiac {

      interface Estimator {
          predict(dob: Date);

          age(hr: number);

      }

      export class Astrand implements Estimator {

        predict(dob: Date): number {
          let age = dob.delta("years");
          return 216.6-(0.84*age);
        }

        age(hr: number): number {
          return (hr-216.6)/-0.84;
        }
      }

      export class HF implements Estimator {

        predict(dob: Date): number {
          let age = dob.delta("years");
          return 220 - age;
        }

        age(hr: number): number {
          return 220 - hr;
        }
      }

    export class Gellish implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
        return 207-(0.7 * age);
     }

     age(hr: number): number {
        return (hr-207.0)/-0.7;
      }
    }

export class Gulati implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
        return 206-(0.88*age);
     }

     age(hr: number): number {
        return (hr-206.0)/-0.88;
     }
   }

export class LM implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
       return 206.3-(0.711 * age);
     }

     age(hr: number): number {
        return (hr-206.3)/-0.711;
     }
   }

export class Miller implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
        return 217-(0.85 * age);
     }

     age(hr: number): number {
        return (hr-217)/-0.85;
     }
   }

export class Nes implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
        return 211 - (0.64 * age);
     }

     age(hr: number): number {
        return (hr-211)/-0.64;
     }
}

export class OaklandL implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
        return 206.9 - (0.67 * age);
     }

     age(hr: number): number {
        return (hr-206.9)/-0.67;
     }
   }

export class OaklandNL1 implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
        return 191.5 - (0.002 * Math.pow(age,2) );
     }

     age(hr: number): number {
        return 5*Math.sqrt(3830-20*hr);
     }
   }

export class OaklandNL2 implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
        return 163 + (1.16 * age) - (0.018 * Math.pow(age, 2));
     }

     age(hr: number): number {
        return (-10./9)*(Math.sqrt(8176-45*hr)-29);
    }
  }

export class RL implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
        return 205.8 - (0.685 * age);
     }

     age(hr: number): number {
        return (hr-205.8)/-0.685;
     }
   }

export class TMS implements Estimator {

     predict(dob: Date): number {
       let age = dob.delta("years");
        return 208-(0.7*age);
     }

     age(hr: number): number {
        return (hr-208)/-0.7;
     }

   }

  export function mean_arterial_pressure(diastolic_bp: number, systolic_bp: number): number {
    return ((2 * diastolic_bp) + systolic_bp) / 3;
  }

  export function karvonen(intensity: number, rest: number, maximum: number): number {
    return intensity * (maximum - rest) + rest;
  }

  export function zoladz(hrMax: number, adjuster: number): number {
      return hrMax - adjuster;
    }

 }

  }

}
