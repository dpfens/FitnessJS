/// <reference path="assessment.ts" />
/// <reference path="hr.ts" />
/// <reference path="rmr.ts" />
/// <reference path="tee.ts" />

namespace Fit {
  export class Cardiovascular {
    public gender: Gender;
    public dob: Date;
    public height: number;
    public weight: number;
    
    public assessment: Assessment;
    public hr: HR;
    public rmr: RMR;
    public tee: TEE;

    constructor(gender: Gender, dob: Date, height: number, weight: number) {
      this.gender = gender;
      this.dob = dob;
      this.height = height;
      this.weight = weight;
      this.assessment = new Assessment(gender, dob, height, weight);
      this.hr = new HR(gender, dob, height, weight);;
      this.rmr = new RMR(gender, dob, height, weight);;
      this.tee = new TEE(gender, dob, height, weight);;
    }

  }

}
