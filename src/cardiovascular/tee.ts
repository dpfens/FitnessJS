namespace Fit {
  export class TEE {
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
		All equations take
    weight in kg
		height in meters
		age in years
		*/

		childSedentaryTee = function(): number {
      let age = this.dob.delta("years");
			if(this.gender === this.Gender.Female) {
				return 135.3 - (30.8 * age) + 1*((10*this.weight)+(934*this.height));
			}
			return 88.5 - (61.9 * age) + 1*((26.7*this.weight)+(903*this.height));
		}

		childLowTee = function(): number {
      let age = this.dob.delta("years");
			if(this.gender === this.Gender.Female) {
				return 135.3 - (30.8 * age) + 1.16*((10*this.weight)+(934*this.height));
			}
			return 88.5 - (61.9 * age) + 1.13*((26.7*this.weight)+(903*this.height));
		}

		childActiveTee = function(): number {
      let age = this.dob.delta("years");
			if(this.gender === this.Gender.Female) {
				return 135.3 - (30.8 * age) + 1.31*((10*this.weight)+(934*this.height));
			}
			return 88.5 - (61.9 * age) + 1.26*((26.7*this.weight)+(903*this.height));
		}

		childVeryActiveTee = function(): number {
      let age = this.dob.delta("years");
			if(this.gender === this.Gender.Female) {
				return 135.3 - (30.8 * age) + 1.56*((10*this.weight)+(934*this.height));
			}
			return 88.5 - (61.9 * age) + 1.42*((26.7* this.weight)+(903* this.height));
		}


		adultSedentaryTee = function(): number {
      let age = this.dob.delta("years");
			if(this.gender === this.Gender.Female) {
				return 354 - (6.91 * age) + 1*((9.36*this.weight)+(726*this.height));
			}
		  return 662 - (9.53 * age) + 1*((15.9 * this.weight) + (540 * this.height));
		}

		adultLowTee = function(): number {
      let age = this.dob.delta("years");
			if(this.gender === this.Gender.Female) {
				return 662 - (9.53 * age) + 1.12*((15.9*this.weight)+(540*this.height));
			}
			return 662 - (9.53 * age) + 1.11*((15.9*this.weight)+(540*this.height));
		}

		adultActiveTee = function(): number {
      let age = this.dob.delta("years");
			if(this.gender === this.Gender.Female) {
				return 662 - (9.53 * age) + 1.27*((15.9*this.weight)+(540*this.height));
			}
		  return 662 - (9.53 * age) + 1.25*((15.9*this.weight)+(540*this.height)) ;
		}

		adultVeryActiveTee = function(): number {
      let age = this.dob.delta("years");
			if(this.gender === this.Gender.Female) {
				return 662 - (9.53 * age) + 1.45*((15.9*this.weight)+(540*this.height));
			}
		  return 662 - (9.53 * age) + 1.48*((15.9*this.weight)+(540*this.height));
		}


  }

}
