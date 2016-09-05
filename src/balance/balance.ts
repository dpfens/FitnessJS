/// <reference path="assessment.ts" />

namespace Fit {

  export namespace balance {

    /*
    creates a new Balance instance
    @class
    @classdesc creates a class to calculate balance
    */
    export class Balance {
      public gender: Gender;
      public dob: Date;
      public height: number;
      public weight: number;

      constructor(gender: Gender, dob: Date, height: number, weight: number) {
        this.gender = gender;
        this.dob = dob;
        this.height = height;
        this.weight = weight;

      }
    }

  }

}
