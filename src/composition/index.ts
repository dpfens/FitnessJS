/// <reference path="../enums.ts" />

namespace Fit {

  export namespace composition {

    /*
  	creates a new Indices instance
  	@class
  	@classdesc creates an Indices class for body compositon index calculations
  	*/
    export class Index {
      private height: number;
      private weight: number;

      constructor(height: number, weight: number) {
        this.height = height;
        this.weight = weight;

      }

      bai(hipCircumference: number): number {
        let numerator: number = 100 * hipCircumference;
        let denominator: number = this.height * Math.sqrt(this.height)
        return (numerator/denominator) - 18;
      }

  		/*
  		BMI
  		@param {Number} body mass in kg
  		@param {Number} height in meters
      @returns {Number} BMI
  		*/
  		bmi():number {
  			let meters = this.height;
  			return this.weight / (meters * meters);
  		}

      bmi_prime(upper_limit: number=25.9): number {
        return this.bmi()/upper_limit;
      }

      bsi(waist_circumference: number): number {
        return waist_circumference / Math.pow(this.bmi(), 2/3) * Math.pow(this.height, 0.5)
      }

  		/* Corpulence (Ponderal/Rohrer) Index
  		@param {Number}body mass in kg
  		@param {Number} height in meters
      @returns {Number} Ponderal Index
  		*/
  		corpulence():number {
  			return this.weight/Math.pow(this.height,3);
  		}

      sbsi(bsa: number, vertical_trunk_circumference: number, waist_circumference: number): number {
        return (Math.pow(this.height, 7/4)* Math.pow(waist_circumference, 5/6) )/(bsa * vertical_trunk_circumference);
      }

      WHR(waistCircumference:number , hipCircumference: number): number {
        return waistCircumference/hipCircumference;
      }

      WHtR(waistCircumference): number {
        return waistCircumference/this.height;
      }

    }

  }

}
