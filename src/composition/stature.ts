/// <reference path="../enums.ts" />


namespace Fit {
  export class Stature {
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
		Raxter et al. (2006) noted a discrepancy between the average soft tissue correction
		factor of Fully’s 1956 sample (10.5 cm) and their own (12.4 cm). They devised new
		equations to correct for this soft tissue factor discrepancy, as well as for the gradual
		effects of age on stature.
		*/
		statureUniversal = function(): number {
      let age = this.dob.delta("years");
			return 1.009 * this.height - 0.0426 * age + 12.1;
		}


		/*
		Formulas obtained from https://digital.library.txstate.edu/bitstream/handle/10877/4055/fulltext.pdf
		Regression Formulae Using the femurLength (Trotter and Gleser 1952, 1958)
		*/

		statureAmericanWhite = function(femurLength: number): number {
		  if(this.gender === this.Gender.Female) {
		      return 2.47 * femurLength + 54.10;
		  }
			return 2.32 * femurLength + 65.53;
		}

		statureAmericanBlack = function(femurLength: number): number {
		  if(this.gender === this.Gender.Female) {
		    return 2.28 * femurLength + 59.76;
		  }
			return 2.10 * femurLength + 72.22;
		}


  }

}
