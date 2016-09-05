/// <reference path="../enums.ts" />
/// <reference path="lifting.ts" />
/// <reference path="power.ts" />
/// <reference path="rm.ts" />

namespace Fit {

  export namespace strength {

    export class Strength {
      public gender: Gender;
      public dob: Date;
      public height: number;
      public weight: number;

      public lifting: Lifting;
      public power: Power;
      public rm: RM;

      constructor(gender: Gender, dob: Date, height: number, weight: number) {
        this.gender = gender;
        this.dob = dob;
        this.height = height;
        this.weight = weight;
        this.lifting = new Lifting(gender, dob, height, weight);
        this.power = new Power(gender, dob, height, weight);
        this.rm = new RM(gender, dob, height, weight);
      }
    };

  }
}
