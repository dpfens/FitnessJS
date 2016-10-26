namespace Fit {

  export namespace strength {

    /*
    creates a new Power instance
    @class
    @classdesc creates a class for Powercalculations
    */
    export class Power {
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
      @descripion used to estimate peak power from vertical jump height.
      Useful for differentiating between two athletes with similar vertical jump heights
      Cross-validation against jumps from a force plate showed that the Lewis formula underestimated mean and peak power by up to 70%
      @param {Number} body mass (kg)
      @param {Number} jump height (meters)
      @returns {Number} power (watts)
      */
      lewis = function(jumpHeight: number): number {
        return Math.sqrt(4.9 * this.weight) * Math.sqrt(jumpHeight) * 9.81;
      }

      /*
      Harman et al. formula for peak power in a vertical jump
      @description
      @param {Number} body mass (kg)
      @param {Number} jump height (centimeters)
      @returns {Number} power (watts)
      */
      peakPowerHarman = function(jumpHeight: number): number {
        return 61.9*jumpHeight + 36*this.weight + 1822;
      }

      /*
      Harman et al. formula for mean power in a vertical jump
      @description
      @param {Number} body mass (kg)
      @param {Number} jump height (centimeters)
      @returns {Number} power (watts)
      */
      meanPowerHarman = function(jumpHeight: number): number {
        let jumpHeightCm = jumpHeight * 100;
        return 21.1 *jumpHeightCm + 2.3*this.weight + 1393;
      }

      /*
      Johnson and Bahamonde formula for peak power in a vertical jump
      @description
      @param {Number} body mass (kg)
      @param {Number} body height (centimeters)
      @param {Number} jump height (centimeters)
      @returns {Number} power (watts)
      */
      peakPowerJB = function(jumpHeight: number): number {
        let height = this.height * 100;
        let jumpHeightCm = jumpHeight * 100;
        return 78.6*jumpHeight +60.3*this.weight + 15.3*height + 1308;
      }

      /*
      Johnson and Bahamonde formula for mean power in a vertical jump
      @description
      @param {Number} body mass (kg)
      @param {Number} body height (centimeters)
      @param {Number} jump height (centimeters)
      @returns {Number} power (watts)
      */
      meanPowerJB = function(jumpHeight: number): number {
        let height = this.height * 100;
        let jumpHeightCm = jumpHeight * 100;
        return 43.8*jumpHeightCm + 32.7*this.weight - 16.8*height + 431;
      }

      /*
      Sayers et al. formula for mean power in a vertical jump
      @description
      @param {Number} body mass (kg)
      @param {Number} jump height (centimeters)
      @returns {Number} power (watts)
      */
      peakPowerSayer = function(jumpHeight: number): number {
        let jumpHeightCm = jumpHeight * 100;
        return 60.7*jumpHeightCm + 45.3*this.weight - 2055;
      }

      /*
      Margaria-Kalamen Test
      @description measures power by assessing
      the athlete’s ability to ascend stairs as rapidly as possible.
      It has been used, albeit sparingly, to assess an athlete since its inception in the 1960s
      @param {Number} body mass (kg)
      @param {Number} vertical height (meters)
      @returns {Number} power (watts)
      */
      powerMK = function(verticalHeight: number, time: number): number {
        return (this.weight * (verticalHeight/time)) * 9.81;
      }



    }

  }

}
