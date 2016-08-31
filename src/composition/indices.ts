/// <reference path="../enums.ts" />

namespace Fit {
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
		body mass in kg
		height in cm
		*/
		bmi = function():number {
			let meters = this.height / 100;
			return this.weight / (meters * meters);
		}

		/* Ponderal (Rohrer) Index
		body mass in kg
		height in cm
		*/
		ponderal = function():number {
			return 1000 * Math.pow(this.weight,1/3)/this.height;
		}

  }

}
