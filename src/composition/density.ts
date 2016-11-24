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

			/*
			@param {Number} bd at TLCNS in g/cc
			returns {Number} Body density at residual volume in g/cc
			*/
			dbAtRV = function(bd: number): number {
				if(this.gender === Gender.Female) {
					return 0.4745 * bd + 0.5173;
				}
				return 0.5829 * bd + 0.4059;
			}

			/*
			@param {Number} sum2SKF in millimeters
			@return {Number} %body density
			*/
			skinfoldDbChild = function(sum2SKF: number): number {
			  if(this.gender === Gender.Female) {
			    return (0.610*sum2SKF) + 5.1;
			  }
			  return (0.735*sum2SKF) + 1.0;
			}

			/*
			@param {Number} sum7SKF in millimeters (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
			@return {Number} %body density
			*/
			skinfoldDbBlackHispanicFemale = function(sum7SKF: number): number {
				let age = this.dob.delta("years");
			  if(this.gender === Gender.Female) {
			    return 1.0970 - (0.00046971*sum7SKF) + (0.00000056*Math.pow(sum7SKF, 2)) - (0.00012828*age);
			  }
				return 1.112 - (0.00043499*sum7SKF) + (0.00000055*Math.pow(sum7SKF, 2)) - (0.00028826*age);
			}

			/*
			@param {Number} sum3SKF in millimeters (chest + abdomen + thigh)
			@return {Number} %body density
			*/
			skinfoldDbWhiteMale = function(sum3SKF: number): number {
				let age = this.dob.delta("years");
				return  1.10938 - (0.0008267*sum3SKF) + (0.0000016*Math.pow(sum3SKF, 2)) - (0.0002574*age);
			}

			/*
			@param {Number} sum3SKF in millimeters (triceps + suprailiac + thigh)
			@return {Number} %body density
			*/
			skinfoldDbWhiteFemaleAnorexic = function(sum3SKF: number): number {
				let age = this.dob.delta("years");
				return 1.0994921 - (0.0009929*sum3SKF) + (0.0000023*Math.pow(sum3SKF, 2)) - (0.00001392*age);
			}

			/*
			@param {Number} sum in mm (adbodem + thigh + triceps)
			@returns {Number} body density in g/cc
			*/
			skinfoldDbAthlete = function(sum: number): number {
				let age = this.dob.delta("years");
			  if(this.gender === Gender.Female) {
					// sum is sum4SKF (triceps + anterior suprailiac + abdomen + thigh)
			    return 1.096095 - (0.0006952*sum) + (0.0000011*Math.pow(sum, 2)) - (0.0000714*age);
			  }
				// sum is sum7SKF (chest + abdomen + thigh + triceps + subscapular + suprailiac + midaxilla)
				return 1.112 - (0.00043499*sum) + (0.00000055*Math.pow(sum, 2)) - (0.00028826*age) ;
			}

			/*
			@description For use with black collegiate athletes, 18-34
			@param {Number} sum3SKF in mm (adbodem + thigh + triceps)
			@returns {Number} body density in g/cc
			*/
			skinfoldDbCollegiateAthleteBlack = function(sum): number {
			  if(this.gender === Gender.Female) {
			    return  8.997 + (0.2468*sum) - (1.998);
			  }
				return 8.997 + (0.2468*sum) - (6.343 * 1) - (1.998);
			}

			/*
			@description For use with white collegiate athletes, 18-34
			@param {Number} sum3SKF in mm (abdomen + thigh + triceps)
			@returns {Number} body density in g/cc
			*/
			skinfoldDbCollegiateAthleteWhite = function(sum3SKF: number): number {
			  if(this.gender === Gender.Female) {
			    return 8.997 + (0.2468*sum3SKF);
			  }
				return 8.997 + (0.2468*sum3SKF) - (6.343 * 1);
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

		}

	}


}
