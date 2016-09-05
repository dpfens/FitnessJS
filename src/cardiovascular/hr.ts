/// <reference path="../enums.ts" />

namespace Fit {

  export namespace cardio {

    /*
    creates a new HR
    @class
    @classdesc creates an HR class to calculate heart rate calculations
    */
    export class HR {
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
  		Fox(1971)
      @description Recommended for use with older adults
      @params {Number} age in years
      @returns {Number} max heart rate in bpm
  		*/
  		maxFox = function(): number {
        let age = this.dob.delta("years");
  			return 208.0 - (0.7 * age);
  		}

  		/*
  		Gellish (2007)
      @description For use on men and women participants in an adult fitness program with broad range of age and fitness levels
  		@see http://www.myfitnesspal.com/blog/mmmaddox/view/american-college-of-sports-medicine-american-heart-association-training-recommendations-254928
      @params {Number} age in years
      @returns {Number} max heart rate in bpm
      */
  		maxGellish = function(): number {
        let age = this.dob.delta("years");
  			return 207 - (0.7 * age);
  		}

      /*
      Astrand (1952)
      @description For use on men and women ages 4 to 34 yr
      @params {Number} age in years
      @returns {Number} max heart rate in bpm
      */
      maxAstrand = function(): number {
        let age = this.dob.delta("years");
        return 216.6-(0.84*age);
      }

      /*
      Tanaka (2001)
      @description For use on healthy men and women
      @params {Number} age in years
      @returns {Number} max heart rate in bpm
      */
      maxTanaka = function(): number {
        let age = this.dob.delta("years");
        return 208-(0.7*age);
      }

      /*
      Gulati (2010)
      @description For use on asymptomatic middle aged women referred for stress testing
      @params {Number} age in years
      @returns {Number} max heart rate in bpm
      */
      maxGulati = function(): number {
        let age = this.dob.delta("years");
        return 206-(0.88*age);
      }


  		meanArterialPressure = function(diastolic_bp: number, systolic_bp: number): number {
  			return ( (2*diastolic_bp) + systolic_bp) / 3;
  		}

  		/*
  		Target heart rate
  		@description ACSM (2010) recommendation using 40% to 85% Heart Rate Reserve (HRR) for intensity

  		@param {Number} intensity as a relative exercise intensity (10% = 0.10)
  		@param {Number} rest as resting heart rate in BPM
  		@param {Number} max as maximum heart rate in BPM
      @returns {Number} heart rate in BPM
  		*/
  		target = function(intensity: number, rest: number, max: number): number {
  			return intensity * (max - rest) + rest;
  		}

  		/*
  		Berglund formula for residual volume
      @params {Number} height in cm
      @params {Number} age in years
      @returns {Number} residual volume in mL
  		*/
  		rvBerglund = function(): number {
        let age = this.dob.delta("years");
  			return (0.0115*age) + (0.019* this.height) - 2.24;
  		}

      /*
  		Boren formula for residual volume
      @params {Number} height in cm
      @params {Number} age in years
      @params {Number} weight in kg
      @returns {Number} residual volume in mL
  		*/
  		rvBoren = function(): number {
        let age = this.dob.delta("years");
  			return (0.022*age) + (0.0198*this.height) - (0.015*this.weight) - 1.54;
  		}

      /*
  		Goldman formula for residual volume
      @params {Number} height in cm
      @params {Number} age in years
      @params {Number} weight in kg
      @returns {Number} residual volume in mL
  		*/
  		rvGoldman = function(): number {
        let age = this.dob.delta("years");
  			return (0.017*age) + (0.027*this.height) - 3.477;
  		}

      /*
  		OBrien formula for residual volume
      @params {Number} height in cm
      @params {Number} age in years
      @params {Number} weight in kg
      @returns {Number} residual volume in mL
  		*/
  		rvObrienFemale = function(bsa: number): number {
        let age = this.dob.delta("years");
  			return (0.03*age) + (0.0387*this.height) - (0.73*bsa) - 4.78;
  		}

  		/*
  		Wicks et al.
  		@see: http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3841054/
  		@params {Number} max_hr highest measured HR during activity in BPM
  		@returns {Number} return METs in kcal/(kg*min)
  		*/
  		metsEstimator = function (maxHR: number, restingHR: number): number {
  			let hrIndex = maxHR/restingHR;
  			return 6.0 * hrIndex - 5;
  		}

    }

  }

}
