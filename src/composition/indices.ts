/// <reference path="../enums.ts" />

namespace Fit {

  export namespace composition {

    /*
  	creates a new Indices instance
  	@class
  	@classdesc creates an Indices class for body compositon index calculations
  	*/
    export class Indices {
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
  		BMI
  		@param {Number} body mass in kg
  		@param {Number} height in meters
      @returns {Number} BMI
  		*/
  		bmi = function():number {
  			let meters = this.height / 100;
  			return this.weight / (meters * meters);
  		}

  		/* Ponderal (Rohrer) Index
  		@param {Number}body mass in kg
  		@param {Number} height in meters
      @returns {Number} Ponderal Index
  		*/
  		ponderal = function():number {
  			return this.weight/Math.pow(this.height,3);
  		}

    }

  }

}
