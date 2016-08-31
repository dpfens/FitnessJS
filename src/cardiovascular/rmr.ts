/// <reference path="../enums.ts" />

namespace Fit {
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
    	return calories/day
    */
    revisedHB = function(): number {
      let age = this.dob.delta("years");
      if(this.gender === this.Gender.Female) {
        return (447.6 + 9.25 * this.weight ) + (3.10 * this.height) - (4.33 * age);
      }
    	return (88.4 + 13.4 * this.weight) + (4.8 * this.height) - (5.68 * age);
    }


    /*
    	Mifflin St Jeor
    	returns calories/day
    */
    msj = function(): number {
      let age = this.dob.delta("years");
      if(this.gender === this.Gender.Female) {
        return (9.99 * this.weight + 6.25 * this.height - 4.92 * age - 151);
      }
    	return (9.99 * this.weight + 6.25 * this.height - 4.92 * age + 5);
    }

    /*
    	Katch-McArdle
    	return calories/day
    */
    kma = function(lbm: number): number {
    	return 370 + (21.6 * lbm);
    }

    /*
    	Cunningham
    	return calories/day
    */
    cunningham = function(lbm: number): number {
    	return 500 + (22 * lbm);
    }


  }

}
