/// <reference path="balance/balance.ts" />
/// <reference path="cardiovascular/cardiovascular.ts" />
/// <reference path="composition/composition.ts" />
/// <reference path="flexibility/flexibility.ts" />
/// <reference path="strength/strength.ts" />

namespace Fit {
  export class Person {
    public gender: Gender;
    public dob: Date;
    public height: number; // in meters
    public weight: number; // in kg

    public balance: balance.Balance;
    public cardio: cardio.Cardiovascular;
    public composition: composition.Composition;
    public flexibility: flexibility.Flexibility;
    public strength: strength.Strength;


    constructor(gender: Gender, dob: Date, height: number, weight: number) {
      this.gender = gender;
      this.dob = dob;
      this.height = height;
      this.weight = weight;
      this.balance = new balance.Balance(gender, dob, height, weight);
      this.cardio = new cardio.Cardiovascular(gender, dob, height, weight);
      this.composition = new composition.Composition(gender, dob, height, weight);
      this.strength = new strength.Strength(gender, dob, height, weight);
    }
  }

}
