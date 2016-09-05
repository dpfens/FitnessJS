/// <reference path="../enums.ts" />

namespace Fit {

  export namespace strength {

    /*
    creates a new Lifting instance
    @class
    @classdesc creates a class for lifting calculations
    */
    export class Lifting {
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
        @param {Number} obtainedTotal weight in kg
        @returns {Number} sinclair coefficient
      */
      sinclair = function(obtainedTotal: number): number {
        let coefficientA = 0.794358141;
      	let coefficientB =  174.393;
        if(this.gender === this.Gender.Female) {
          coefficientA = 0.897260740;
        	coefficientB = 148.026;
        }
        if(this.weight >= coefficientB) return 1;

        let exponent = Math.pow(  coefficientA * Math.log10(this.weight/coefficientB), 2 );
        return Math.pow(10, exponent);
      }

      /*
        @param {Number} body mass in kg
        @param {Number} weightLifted in kg
        @returns {Number} wilks coefficient
      */
      wilks = function(weightLifted: number): number {
        let coefficient;
      	let a = -216.0475144;
      	let b = 16.2606339;
      	let c = -0.002388645;
      	let d = -0.00113732;
      	let e = 7.01863E-06;
      	let f = -1.291E-08;

        if(this.gender === this.Gender.Female) {
          a = 594.31747775582;
          b = -27.23842536447;
          c = 0.82112226871;
          d = -0.00930733913;
          e = 4.731582E-05;
          f = -9.054E-08;
        }

        coefficient = 500/(a + b*this.weight + c * Math.pow(this.weight, 2) + d * Math.pow(this.weight, 3) + e * Math.pow(this.weight, 4) + f * Math.pow(this.weight, 5) );
        return coefficient * weightLifted;
      }

    }

  }

}
