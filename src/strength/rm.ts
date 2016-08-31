/// <reference path="../enums.ts" />


namespace Fit {
  export class RM {
    private gender: Gender;
    private dob: Date;
    private height: number;
    private weight: number;

    constructor(gender: Gender, dob: Date, height: number, weight: number) {
      this.gender = gender;
      this.dob = dob;
      this.height = height;
      this.weight = weight;
    }

    /*
    1-RM Formula
    Brzycki Formula
    returns a slightly lower estimated maximum than Epley when reps < 10
    */
    brzycki = function(reps: number, weight: number): number {
        return weight/(1.0278-(0.0278 * reps));
    }

    /*
    1-RM Formula
    Epley Formula (1985)
    returns a slightly higher estimated maximum than Brzycki when reps < 10
    */
    epley = function(reps: number, weight: number): number {
        return (weight * reps * 0.033)+weight;
    }

    /*
    1-RM Formula
    Lander Formula
    */
    lander = function(reps: number, weight: number): number {
        return weight/(1.013 - (0.0267123 * reps) );
    }

    /*
    1-RM Formula
    Lombardi Formula
    */
    lombardi = function(reps: number, weight: number): number {
        return weight*Math.pow(reps,0.10);
    }

    /*
    1-RM Formula
    Mayhew et al. Formula
    */
    mayhew = function(reps: number, weight: number): number {
        return (100*weight) / ( (52.2+41.9) * Math.pow(Math.E,-0.055*reps) );
    }

    /*
    1-RM Formula
    O'Connor et al. Formula
    */
    oconnor = function(reps: number, weight: number): number {
        return weight * (1+0.025*reps);
    }

    /*
    1-RM Formula
    Wathen Formula
    */
    wathen = function(reps: number, weight: number): number {
        return (100*weight) / (48.8+(53.8*Math.pow(Math.E,-0.075 * reps) ) );
    }

    /*
    1-RM Formula
    Based on number of repetitions to fatigue in one set
    reps must not exceed 10
    weight is the weight lifted in lb
    */
    fatigueRepMap = function(reps: number, weight: number): number {
        return weight / (1.0278 - (reps * 0.0278));
    }

    /*
    Based on the number of repetitions to fatigue obtained in two submaximal sets so long as number of reps is under 10
    weight1 and weight2 must be of same unit (kg or lb)
    */
    twoSetMax = function(rep1: number, weight1: number, rep2: number, weight2: number): number {
        return ((weight1 - weight2)/(rep2 - rep1)) * (rep1 - 1) + weight1;
    }

    /*
    Relative Strength
    rm is 1-Rep Maximum
    weight is the body mass of the individual
    rm and weight must be of the same unit (kg or lbs)
    */
    relativeStrength = function(rm: number): number {
        return rm / this.weight;
    }


    /*
    gender-specific 1-RM Formula for Younger adults (22 - 36 years old)
    Kim, Mayhew, and Peterson (2002)
    return value in kg
    */
    ymcaUpperBodyRepMax = function(reps: number): number {
        if(this.gender === this.Gender.Female) {
          return (0.31 * reps) + 19.2;
        }
        return (1.55 * reps) + 37.9;
    }

    /*
    Middle Age (40-50 years old) 1-RM
    Kuramoto & Payne (1995)
    */
    femaleMiddleAgeRepMax = function(reps: number, weight: number): number {
      let age = this.dob.delta("years");
      return  (1.06 * weight) + (0.58 * reps) - (0.20 * age) - 3.41;
    }

    /*
    Older adult (60-70 years old) 1-RM
    Kuramoto & Payne (1995)
    */
    femaleOlderRepMax = function(reps: number, weight: number): number {
      let age = this.dob.delta("years");
      return (0.92 * weight) + (0.79 * reps) - (0.20 * age) - 3.73;
    }

    femaleHipRepMax = function(reps: number, weight: number): number {
        return 100 * weight/(48.8+Math.pow(53.8,(-0.075*reps) ));
    }

  }

}
