/// <reference path="../enums.ts" />

namespace Fit {
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

    boyd = function(): number {
        return 0.03330 * Math.pow(this.weight,(0.7285-0.0188*Math.log(this.weight)))*Math.pow(this.height,0.3);
    }

    costeff = function(): number {
        return (4*this.weight+7)/(90+this.weight);
    }

    dubois = function(): number {
        return 0.0087184 * Math.pow(this.weight,0.425) * Math.pow(this.height,0.725);
    }

    fujimoto = function(): number {
        return 0.008883 * Math.pow(this.weight, 0.444) * Math.pow(this.height, 0.663);
    }

    gehangeorge = function(): number {
        return 0.0235 * Math.pow(this.weight, 0.51456) * Math.pow(this.height, 0.42246);
    }

    haycock = function(): number {
        return 0.024265 * Math.pow(this.weight, 0.5378) * Math.pow(this.height, 0.3964);
    }

    mosteller = function(): number {
        return Math.sqrt(this.weight*this.height)/60;
    }

    tahahira = function(): number {
        return 0.007241 * Math.pow(this.weight, 0.425) * Math.pow(this.height,0.725);
    }

  }

}
