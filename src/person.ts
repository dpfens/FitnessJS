/// <reference path="polyfills.ts"/>
/// <reference path="utilities/date.ts"/>
/// <reference path="balance/balance.ts" />
/// <reference path="cardiovascular/cardiovascular.ts" />
/// <reference path="composition/composition.ts" />
/// <reference path="flexibility/flexibility.ts" />
/// <reference path="strength/strength.ts" />
/// <reference path="mets.ts"/>
/// <reference path="enums.ts" />

namespace Fit {
  export class Person {
    public gender: Gender;
    public dob: Date;
    public height: number; // in meters
    public weight: number; // in kg

    public balance: Balance;
    public cardio: Cardiovascular;
    public composition: Composition;
    public flexibility: Flexibility;
    public strength: Strength;


    constructor(gender: Gender, dob: Date, height: number, weight: number) {
      this.gender = gender;
      this.dob = dob;
      this.height = height;
      this.weight = weight;
      this.balance = new Balance(gender, dob, height, weight);
      this.cardio = new Cardiovascular(gender, dob, height, weight);
      this.composition = new Composition(gender, dob, height, weight);
      this.strength = new Strength(gender, dob, height, weight);
    }
  }

}
