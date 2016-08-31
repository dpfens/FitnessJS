/// <reference path="../enums.ts" />

namespace Fit {
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
		For use with older adults
		*/
		max = function(): number {
      let age = this.dob.delta("years");
			return 208.0 - (0.7 * age);
		}

		/*
		Gellish et al.
		http://www.myfitnesspal.com/blog/mmmaddox/view/american-college-of-sports-medicine-american-heart-association-training-recommendations-254928
		*/
		maxGellish = function(): number {
      let age = this.dob.delta("years");
			return 206.9 - (0.67 * age);
		}

		meanArterialPressure = function(diastolic_bp: number, systolic_bp: number): number {
			return ( (2*diastolic_bp) + systolic_bp) / 3;
		}

		/*
		Target heart rate
		ACSM (2010) recommendation using 40% to 85% Heart Rate Reserve (HRR) for intensity

		intensity as a relative exercise intensity (10% = 0.10)
		rest is resting heart rate in BPM
		max is maximum heart rate in BPM
		*/
		target = function(intensity: number, rest: number, max: number): number {
			return intensity * (max - rest) + rest;
		}

		/*
		Residual Volume formulas
		*/
		rvBerglund = function(): number {
      let age = this.dob.delta("years");
			return (0.0115*age) + (0.019* this.height) - 2.24;
		}

		rvBoren = function(): number {
      let age = this.dob.delta("years");
			return (0.022*age) + (0.0198*this.height) - (0.015*this.weight) - 1.54;
		}

		rvGoldman = function(): number {
      let age = this.dob.delta("years");
			return (0.017*age) + (0.027*this.height) - 3.477;
		}

		rvObrienFemale = function(bsa: number): number {
      let age = this.dob.delta("years");
			return (0.03*age) + (0.0387*this.height) - (0.73*bsa) - 4.78;
		}

		/*
			Wicks et al.
			http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3841054/
			max_hr = highest measured HR during activity
			resting_hr = resting HR (absolute)
		*/
		metsEstimator = function (maxHR: number, restingHR: number): number {
			let hrIndex = maxHR/restingHR;
			return 6.0 * hrIndex - 5;
		}


  }

}
