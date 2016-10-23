/// <reference path="../enums.ts" />

namespace Fit {

  export namespace cardio {


    /*
    creates a new RMR
    @class
    @classdesc creates an class to calculate resting metabolic rate
    */
    export class RMR {
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
      	Revised Harris-Benedict BMR Equations
        @param {Number} age in years
        @param {Number} weight in kilograms
        @param {Number} height in centimeters
      	@returns {Number} basal metabolic rate in kcals/day
      */
      revisedHB = function(): number {
        let age = this.dob.delta("years");
        let cm = this.height * 100;
        if(this.gender === Gender.Female) {
          return (447.6 + 9.25 * this.weight ) + (3.10 * cm) - (4.33 * age);
        }
      	return (88.4 + 13.4 * this.weight) + (4.8 * cm) - (5.68 * age);
      }


      /*
      	Mifflin St Jeor
        @param {Number} age in years
        @param {Number} weight in kilograms
        @param {Number} height in centimeters
      	@returns {Number} basal metabolic rate in kcals/day
      */
      msj = function(): number {
        let age = this.dob.delta("years");
        let cm = this.height * 100;
        if(this.gender === Gender.Female) {
          return (9.99 * this.weight + 6.25 * cm - 4.92 * age - 151);
        }
      	return (9.99 * this.weight + 6.25 * cm - 4.92 * age + 5);
      }

      /*
      	Katch-McArdle
        @param {Number} lbm in kilograms
      	@returns {Number} basal metabolic rate in kcals/day
      */
      kma = function(lbm: number): number {
      	return 370 + (21.6 * lbm);
      }

      /*
      	Cunningham
        @param {Number} lbm in kilograms
      	@returns {Number} resting metabolic rate in kcals/day
      */
      cunningham = function(lbm: number): number {
      	return 500 + (22 * lbm);
      }


    }

  }

}
