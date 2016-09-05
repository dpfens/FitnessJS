/// <reference path="vo2.ts" />
/// <reference path="hr.ts" />
/// <reference path="rmr.ts" />
/// <reference path="tee.ts" />

namespace Fit {

  export namespace cardio {

    /*
    creates a new Cardiovascular instance
    @class
    @classdesc creates a Cardiovascular class for cardio calculations
    */
    export class Cardiovascular {
      public gender: Gender;
      public dob: Date;
      public height: number;
      public weight: number;

      public vo2: VO2;
      public hr: HR;
      public rmr: RMR;
      public tee: TEE;

      constructor(gender: Gender, dob: Date, height: number, weight: number) {
        this.gender = gender;
        this.dob = dob;
        this.height = height;
        this.weight = weight;
        this.vo2 = new VO2(gender, dob, height, weight);
        this.hr = new HR(gender, dob, height, weight);
        this.rmr = new RMR(gender, dob, height, weight);
        this.tee = new TEE(gender, dob, height, weight);
      }

    }

  }

}
