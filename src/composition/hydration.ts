/// <reference path="../enums.ts" />

/*
Body Density
*/

namespace Fit {

	export namespace composition {

		/*
		creates a new Density instance
		@class
		@classdesc creates a Density class for body density calculations
		*/
		export class Hydration {
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
			@param {Double} weight in kg
			@returns {Double} L/day of water
			*/
			dailyNeeds = function(): number {
			  return 0.033 * this.weight;
			}

		}

	}


}
