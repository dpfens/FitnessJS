/// <reference path="../enums.ts" />

/*
Body Density
*/

namespace Fit {

	export class Density {
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

		dbAtTLCNS = function(bd: number): number {
			return 0.5829 * bd + 0.4059;
		}

		skinfoldDbChild = function(sum: number): number {
		  if(this.gender === Gender.Female) {
		    return (0.610*sum) + 5.1;
		  }
		  return (0.735*sum) + 1.0;
		}

		skinfoldDbBlackHispanic = function(sum: number): number {
			let age = this.dob.delta("years");
		  if(this.gender === Gender.Female) {
		    return 1.0970 - (0.00046971*sum) + (0.00000056*Math.pow(sum, 2)) - (0.00012828*age);
		  }
			return 1.112 - (0.00043499*sum) + (0.00000055*Math.pow(sum, 2)) - (0.00028826*age);
		}


		skinfoldDbWhiteMale = function(sum: number): number {
			let age = this.dob.delta("years");
			return  1.10938 - (0.0008267*sum) + (0.0000016*Math.pow(sum, 2)) - (0.0002574*age);
		}

		skinfoldDbWhiteFemaleAnorexic = function(sum: number): number {
			let age = this.dob.delta("years");
			return 1.0994921 - (0.0009929*sum) + (0.0000023*Math.pow(sum, 2)) - (0.00001392*age);
		}


		skinfoldDbAthlete = function(sum: number): number {
			let age = this.dob.delta("years");
		  if(this.gender === Gender.Female) {
		    return 1.096095 - (0.0006952*sum) + (0.0000011*Math.pow(sum, 2)) - (0.0000714*age);
		  }
			return 1.112 - (0.00043499*sum) + (0.00000055*Math.pow(sum, 2)) - (0.00028826*age) ;
		}


		skinfoldDbCollegiateAthleteBlack = function(sum): number {
		  if(this.gender === Gender.Female) {
		    return  8.997 + (0.2468*sum) - (1.998);
		  }
			return 8.997 + (0.2468*sum) - (6.343 * 1) - (1.998);
		}


		skinfoldDbCollegiateAthleteWhite = function(sum): number {
		  if(this.gender === Gender.Female) {
		    return 8.997 + (0.2468*sum);
		  }
			return 8.997 + (0.2468*sum) - (6.343 * 1);
		}

		/*
		Body Volume
		uww = underwater this.weight
		rb = residual volume in mL
		gv = volume of air in gastrointestinal tract(default: 100mL)
		*/

		bodyVol = function(uww: number, rv: number, gv: number): number {
		    let waterDensity = 1;
		    return ((this.weight - uww)/ waterDensity) - (rv - gv);
		}

		/*
		Body fat percentage
		Population-specific Formulas for converting Body Density (Db) to Percent Body Fat (%BF)
		*/

		brozekBf = function(bd:number): number {
		    return (4.570/bd)-4.142;
		}

		siri = function(bd: number): number {
		    return (4.95/bd)-4.50;
		}

		childBmiToBf = function(): number {
			let age = this.dob.delta("years");
		  let bmi = (this.weight/Math.pow(this.height/100, 2));
		  if(this.gender === Gender.Female) {
		    return ((1.51*bmi) - (0.70*age) + 1.4) / 100;
		  }
		  return ((1.51*bmi) - (0.70*age) - (3.6) + 1.4) / 100;
		}
		adultBmiToBf = function(): number {
			let age = this.dob.delta("years");
		  let bmi = (this.weight/Math.pow(this.height/100, 2));
		  if(this.gender === Gender.Female) {
		    return ((1.20*bmi) - (0.23*age) - 5.4) / 100;
		  }
		  return ((1.20*bmi) - (0.23*age) - (10.8) - 5.4) / 100;
		}

	}


}
