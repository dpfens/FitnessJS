/// <reference path="../enums.ts" />

namespace Fit {

  export namespace composition {

    /*
  	creates a new  Mass instance
  	@class
  	@classdesc creates an Mass class for body mass calculations
  	*/
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
      @description Lohman(1992) Fat free mass in white boys and girls, 8-15 years
      @param {Number} height in cm
      @param {Number} weight in kg
      @param {Number} resistance in ohms
      @param {Number} reactance in ohms
      @returns {Number} Fat Free Mass in kg
      */
      ffmChild = function(resistance, reactance): number {
        let heightCm = this.height * 100;
        return (0.62*(Math.pow(heightCm,2)/resistance)) + (0.21*this.weight) + (0.1*reactance) + 4.2;
      }

      /*
      Houtkooper e al. (1992) fat free mass in white boys and girls, 10-19 years
      @param {Number} height in cm
      @param {Number} weight in kg
      @param {Number} resistance in ohms
      @param {Number} reactance in ohms
      @returns {Number} Fat Free Mass in kg
      */
      ffmAdolescent = function(resistance, reactance): number {
        let heightCm = this.height * 100;
        return (0.61*(Math.pow(heightCm,2)/resistance)) + (0.25*this.weight) + 1.31;
      }

      /*
      @param {Number} age in years
      @param {Number} height in cm
      @param {Number} weight in kg
      @param {Number} resistance in ohms
      @param {Number} reactance in ohms
      @returns {Number} Fat Free Mass in kg
      */
      ffmAdultLean = function(resistance, reactance): number {
        let age = this.dob.delta("years");
        let heightCm = this.height * 100;
        /*
        American Indian, black, Hispanic, and White Women
        %BF < .30 Segal et al. (1988)
        */
        if(this.gender === this.Gender.Female) {
          return (0.000646*Math.pow(heightCm,2)) - (0.014 * resistance) + (0.421*this.weight) + 10.4;
        }
        /*
        American Indian, black, Hispanic, and White Men
        %BF < .20 Segal et al. (1988)
        */
        return (0.00066360*Math.pow(heightCm,2)) - (0.02117 * resistance) + (0.62854*this.weight) - (0.12380 * age) + 9.33285;
      }

      /*
      @param {Number} age in years
      @param {Number} height in cm
      @param {Number} weight in kg
      @param {Number} resistance in ohms
      @param {Number} reactance in ohms
      @returns {Number} Fat Free Mass in kg
      */
      ffmAdultObese = function(resistance, reactance): number {
        let age = this.dob.delta("years");
        let heightCm = this.height * 100;
        /*
        American Indian, black, Hispanic, and White Women
        %BF > .30 Segal et al. (1988)
        */
        if(this.gender === this.Gender.Female) {
          return (0.00091186*Math.pow(heightCm,2)) - (0.1466 * resistance) + (0.29990*this.weight) - (0.07012 * age) + 9.37938;
        }
        /*
        American Indian, black, Hispanic, and White Men
        %BF > .20 Segal et al. (1988)
        */
          return (0.00088580*Math.pow(heightCm,2)) - (0.02999 * resistance) + (0.42688*this.weight) - (0.07002 * age) + 14.52435;
      }


      /*
      @param {Number} height in cm
      @param {Number} weight in kg
      @param {Number} resistance in ohms
      @param {Number} reactance in ohms
      @returns {Number} Fat Free Mass in kg
      */
      ffmAdultAthlete = function(resistance, reactance): number {
        let heightCm = this.height * 100;
        /*
        Female athletes 18-27 years
        Fornetti et al. (1999)
        */
        if(this.gender === this.Gender.Female) {
          return (0.282*heightCm) + (0.415*this.weight) - (0.037*resistance) + (0.096*reactance) - 9.734;
        }
        /*
        Male athletes 19-40 years
        Oppliger et al. (1991)
        */
        return (0.186*(Math.pow(heightCm,2)/resistance)) + (0.701*this.weight) + 1.949;
      }

    }

  }

}
