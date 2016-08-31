/// <reference path="assessment.ts" />

namespace Fit {
  export class Flexibility {
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
