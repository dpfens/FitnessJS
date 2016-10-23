/// <reference path="../enums.ts" />

namespace Fit {

  export namespace composition {

    /*
  	creates a new SurfaceArea instance
  	@class
  	@classdesc creates an Indices class for body surface area calculations
  	*/
    export class SurfaceArea {
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
      @param {Number} height in cm
      @param {Number} weight in grams
      @returns {Number} surface area in meters^2
      */
      boyd = function(): number {
        let heightCm = this.height * 100;
        let weightG = this.weight * 1000;
        return 0.03330 * Math.pow(this.weight,(0.6157-0.0188*Math.log(this.weight)))*Math.pow(heightCm,0.3);
      }

      /*
      @param {Number} weight in kg
      @returns {Number} surface area in meters^2
      */
      costeff = function(): number {
        return (4*this.weight+7)/(90+this.weight);
      }

      /*
      @param {Number} height in cm
      @param {Number} weight in kg
      @returns {Number} surface area in meters^2
      */
      dubois = function(): number {
        let heightCm = this.height * 100;
        return 0.007184 * Math.pow(this.weight,0.425) * Math.pow(heightCm,0.725);
      }

      /*
      @param {Number} height in cm
      @param {Number} weight in kg
      @returns {Number} surface area in meters^2
      */
      fujimoto = function(): number {
        let heightCm = this.height * 100;
        return 0.008883 * Math.pow(this.weight, 0.444) * Math.pow(heightCm, 0.663);
      }

      /*
      @param {Number} height in cm
      @param {Number} weight in kg
      @returns {Number} surface area in meters^2
      */
      gehangeorge = function(): number {
        let heightCm = this.height * 100;
        return 0.0235 * Math.pow(this.weight, 0.51456) * Math.pow(heightCm, 0.42246);
      }

      /*
      @param {Number} height in cm
      @param {Number} weight in kg
      @returns {Number} surface area in meters^2
      */
      haycock = function(): number {
        let heightCm = this.height * 100;
        return 0.024265 * Math.pow(this.weight, 0.5378) * Math.pow(heightCm, 0.3964);
      }

      /*
      @param {Number} height in m
      @param {Number} weight in kg
      @returns {Number} surface area in meters^2
      */
      mosteller = function(): number {
          return Math.sqrt(this.weight*this.height)/6;
      }


      /*
      @param {Number} height in cm
      @param {Number} weight in kg
      @returns {Number} surface area in meters^2
      */
      schlich = function(): number {
        let heightCm = this.height * 100;
        if(this.gender === Gender.Female) {
          return 0.000975482 * Math.pow(this.weight, 0.46) * Math.pow(heightCm, 1.08);
        }
        return 0.000579479 * Math.pow(this.weight, 0.38) * Math.pow(heightCm, 1.24);
      }

      /*
      @param {Number} height in cm
      @param {Number} weight in kg
      @returns {Number} surface area in meters^2
      */
      shuterAslani = function(): number {
        let heightCm = this.height * 100;
        return 0.00949 * Math.pow(this.weight, 0.441) * Math.pow(heightCm, 0.655);
      }

      /*
      @param {Number} height in cm
      @param {Number} weight in kg
      @returns {Number} surface area in meters^2
      */
      takahira = function(): number {
        let heightCm = this.height * 100;
        return 0.007241 * Math.pow(this.weight, 0.425) * Math.pow(heightCm, 0.725);
      }

    }

  }

}
