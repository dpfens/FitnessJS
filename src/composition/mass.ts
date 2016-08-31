/// <reference path="../enums.ts" />

namespace Fit {
  export class Mass {
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
    Fat Free Mass (FFM)
    this.height in cm
    this.weight in kg
    resistance, reactance in ohms
    */

    /*
    White boys and girls, 8-15 years
    Lohman(1992)
    */
    ffmChild = function(resistance, reactance): number {
        return (0.62*(Math.pow(this.this.height,2)/resistance)) + (0.21*this.weight) + (0.1*reactance) + 4.2;
    }

    /*
    White boys and girls, 10-19 years
    Houtkooper e al. (1992)
    */
    ffmAdolescent = function(resistance, reactance): number {
        return (0.61*(Math.pow(this.height,2)/resistance)) + (0.25*this.weight) + 1.31;
    }


    ffmAdultLean = function(resistance, reactance): number {
      let age = this.dob.delta("years");
      /*
      American Indian, black, Hispanic, and White Women
      %BF < .30 Segal et al. (1988)
      */
      if(this.gender === this.Gender.Female) {
        return (0.000646*Math.pow(this.height,2)) - (0.014 * resistance) + (0.421*this.weight) + 10.4;
      }
      /*
      American Indian, black, Hispanic, and White Men
      %BF < .20 Segal et al. (1988)
      */
      return (0.00066360*Math.pow(this.height,2)) - (0.02117 * resistance) + (0.62854*this.weight) - (0.12380 * age) + 9.33285;
    }

    ffmAdultObese = function(resistance, reactance): number {
      let age = this.dob.delta("years");
      /*
      American Indian, black, Hispanic, and White Women
      %BF > .30 Segal et al. (1988)
      */
      if(this.gender === this.Gender.Female) {
        return (0.00091186*Math.pow(this.height,2)) - (0.1466 * resistance) + (0.29990*this.weight) - (0.07012 * age) + 9.37938;
      }
      /*
      American Indian, black, Hispanic, and White Men
      %BF > .20 Segal et al. (1988)
      */
        return (0.00088580*Math.pow(this.height,2)) - (0.02999 * resistance) + (0.42688*this.weight) - (0.07002 * age) + 14.52435;
    }


    ffmAdultAthlete = function(resistance, reactance): number {
      /*
      Female athletes 18-27 years
      Fornetti et al. (1999)
      */
      if(this.gender === this.Gender.Female) {
        return (0.282*this.height) + (0.415*this.weight) - (0.037*resistance) + (0.096*reactance) - 9.734;
      }
      /*
      Male athletes 19-40 years
      Oppliger et al. (1991)
      */
      return (0.186*(Math.pow(this.height,2)/resistance)) + (0.701*this.weight) + 1.949;
    }


  }

}
