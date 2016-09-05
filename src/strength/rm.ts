namespace Fit {

  export namespace strength {

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
      @description a slightly lower estimated maximum than Epley when reps < 10
      @param {Number} reps
      @param {Number} weight in lb or kg
      @returns {Number} 1RM in unit provided (lb or kg)
      */
      brzycki = function(reps: number, weight: number): number {
          return weight/(1.0278-(0.0278 * reps));
      }

      /*
      1-RM Formula
      Epley Formula (1985)
      @description returns a slightly higher estimated maximum than Brzycki when reps < 10
      @param {Number} reps
      @param {Number} weight in lb or kg
      @returns {Number} 1RM in unit provided (lb or kg)
      */
      epley = function(reps: number, weight: number): number {
          return (weight * reps * 0.033)+weight;
      }

      /*
      1-RM Formula
      Lander Formula
      @param {Number} reps
      @param {Number} weight in lb or kg
      @returns {Number} 1RM in unit provided (lb or kg)
      */
      lander = function(reps: number, weight: number): number {
          return weight/(1.013 - (0.0267123 * reps) );
      }

      /*
      1-RM Formula
      Lombardi Formula
      @param {Number} reps
      @param {Number} weight in lb or kg
      @returns {Number} 1RM in unit provided (lb or kg)
      */
      lombardi = function(reps: number, weight: number): number {
          return weight*Math.pow(reps,0.10);
      }

      /*
      1-RM Formula
      Mayhew et al. Formula
      @param {Number} reps
      @param {Number} weight in lb or kg
      @returns {Number} 1RM in unit provided (lb or kg)
      */
      mayhew = function(reps: number, weight: number): number {
          return (100*weight) / ( (52.2+41.9) * Math.pow(Math.E,-0.055*reps) );
      }

      /*
      1-RM Formula
      Mayhew et al. Formula used in college football players
      @param {Number} reps
      @returns {Number} 1RM in lb
      */
      mayhewFootball = function(reps: number): number {
          return 226.7 + 7.1*(reps);
      }

      /*
      1-RM Formula
      O'Connor et al. Formula
      @param {Number} reps
      @param {Number} weight in lb or kg
      @returns {Number} 1RM in unit provided (lb or kg)
      */
      oconnor = function(reps: number, weight: number): number {
          return weight * (1+0.025*reps);
      }

      /*
      1-RM Formula
      Wathen Formula
      @param {Number} reps
      @param {Number} weight in lb or kg
      @returns {Number} 1RM in unit provided (lb or kg)
      */
      wathen = function(reps: number, weight: number): number {
          return (100*weight) / (48.8+(53.8*Math.pow(Math.E,-0.075 * reps) ) );
      }

      /*
      1-RM Formula
      @description Based on number of repetitions to fatigue in one set
      @param {Number} reps (must not exceed 10)
      @param {Number} weight in lb
      @returns {Number} 1RM in lb
      */
      fatigueRepMap = function(reps: number, weight: number): number {
          return weight / (1.0278 - (reps * 0.0278));
      }

      /*
      Based on the number of repetitions to fatigue obtained in two submaximal sets so long as number of reps is under 10
      weight1 and weight2 must be of same unit (kg or lb)
      @param {Number} rep1
      @param {Number} weight1 in lb or kg
      @param {Number} rep2
      @param {Number} weight2 in lb or kg
      @returns {Number} 1RM in chosen weight unit
      */
      twoSetMax = function(rep1: number, weight1: number, rep2: number, weight2: number): number {
          return ((weight1 - weight2)/(rep2 - rep1)) * (rep1 - 1) + weight1;
      }

      /*
      Relative Strength
      @param {Number} rm 1-RM in kg
      @param {Number} body mass in kg
      @returns {Number} relative strength as percentage (decimal)
      */
      relativeStrength = function(rm: number): number {
          return rm / this.weight;
      }


      /*
      @descripion gender-specific 1-RM Formula for Younger adults (22 - 36 years old)
      Kim, Mayhew, and Peterson (2002)
      @param {Number} repetitions
      @returns {Number} predicted 1-RM in kg
      */
      ymcaUpperBodyRepMax = function(reps: number): number {
          if(this.gender === this.Gender.Female) {
            return (0.31 * reps) + 19.2;
          }
          return (1.55 * reps) + 37.9;
      }

      /*
      @description Middle Age (40-50 years old) 1-RM
      Kuramoto & Payne (1995)
      @param {Number} age in years
      @param {Number} repetitions
      @param {Number} weight in kg that is lifted
      @returns {Number} predicted 1-RM in kg
      */
      femaleMiddleAgeRepMax = function(reps: number, weight: number): number {
        let age = this.dob.delta("years");
        return  (1.06 * weight) + (0.58 * reps) - (0.20 * age) - 3.41;
      }

      /*
      @description Older adult (60-70 years old) 1-RM
      Kuramoto & Payne (1995)
      @param {Number} age in years
      @param {Number} repetitions
      @param {Number} weight in kg that is lifted
      @returns {Number} predicted 1-RM in kg
      */
      femaleOlderRepMax = function(reps: number, weight: number): number {
        let age = this.dob.delta("years");
        return (0.92 * weight) + (0.79 * reps) - (0.20 * age) - 3.73;
      }

      /*
      @param {Number} repetitions
      @param {Number} weight in kg that is lifted
      @returns {Number} predicted 1-RM in kg
      */
      femaleHipRepMax = function(reps: number, weight: number): number {
          return 100 * weight/(48.8+Math.pow(53.8,(-0.075*reps) ));
      }

    }

  }

}
