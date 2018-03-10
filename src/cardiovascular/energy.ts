import {Gender, PAL}  from "../enums";

export class BMREstimator {
  public gender: Gender;

  constructor(gender: Gender) {
    this.gender = gender;
  }

  public predict(dob: Date, weight: number, height: number): number {
      throw new Error("The prediction method is not implemented");
  }

}

export class HB extends BMREstimator {

    public predict(dob: Date, weight: number, height: number): number {
        const age: number = dob.delta("years");
        if (this.gender === Gender.Female) {
            return (9.5634 * weight) + (1.8496 * height) - (4.6756 * age) + 655.0955;
        }
        return (13.7516 * weight) + (5.0033 * height) - (6.7550 * age) + 66.4730;
    }

}

export class RevisedHB extends BMREstimator {

    public predict(dob: Date, weight: number, height: number): number {
        const age: number = dob.delta("years");
        if (this.gender === Gender.Female) {
            return (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593;
        }
        return (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362;
    }

}

export class MSJ extends BMREstimator {

    public predict(dob: Date, weight: number, height: number): number {
        const age: number = dob.delta("years");
        if (this.gender === Gender.Female) {
            return (9.99 * weight + 6.25 * height - 4.92 * age - 161);
        }
        return (9.99 * weight + 6.25 * height - 4.92 * age + 5);
    }

}

export class RMR {
  public gender: Gender;
  public dob: Date;
  public height: number;
  public weight: number;

    constructor(gender: Gender, dob: Date, weight: number, height: number) {
        this.gender = gender;
        this.dob = dob;
        this.weight = weight;
        this.height = height;
    }

    public quick(): number {
        if (this.gender === Gender.Female) {
            return this.weight * 22;
        }
        return this.weight * 24.2;
    }

    public bsa(bsa: number): number {
        if (this.gender ===  Gender.Female) {
            return bsa * 840;
        }
        return bsa * 912;
    }

}

export function kma(lbm: number): number {
    return 370 + (21.6 * lbm);
}

export function cunningham(lbm: number): number {
    return 500 + (22 * lbm);
}

export class TEEEstimator {
  public gender: Gender;
  public pal: PAL;

    constructor(gender: Gender, pal: PAL) {
        this.gender = gender;
        this.pal = pal;
    }

    public predict(dob: Date, weight: number, height: number): number {
        throw new Error("The prediction method is not implemented");
    }

    public fromActivity(weight: number, mets: number): number {
        return (mets * 3.5 * weight) / 200;
    }
}

export class ChildTEE extends TEEEstimator {

    public predict(dob: Date, weight: number, height: number): number {
        const age: number = dob.delta("years");
        if (this.pal ===  PAL.Sedentary && this.gender ===  Gender.Male) {
            return 88.5 - (61.9 * age) + 1 * ((26.7 * weight) + (903 * height));
        } else if (this.pal ===  PAL.Sedentary && this.gender ===  Gender.Female) {
            return 135.3 - (30.8 * age) + 1 * ((10 * weight) + (934 * height));
        } else if (this.pal ===  PAL.Low && this.gender ===  Gender.Male) {
            return 88.5 - (61.9 * age) + 1.13 * ((26.7 * weight) + (903 * height));
        } else if (this.pal ===  PAL.Low && this.gender ===  Gender.Female) {
            return 135.3 - (30.8 * age) + 1.16 * ((10 * weight) + (934 * height));
        } else if (this.pal ===  PAL.Active && this.gender ===  Gender.Male) {
            return 88.5 - (61.9 * age) + 1.26 * ((26.7 * weight) + (903 * height));
        } else if (this.pal ===  PAL.Active && this.gender ===  Gender.Female) {
            return 135.3 - (30.8 * age) + 1.31 * ((10 * weight) + (934 * height));
        } else if (this.pal ===  PAL.VeryActive && this.gender ===  Gender.Male) {
            return 88.5 - (61.9 * age) + 1.42 * ((26.7 * weight) + (903 * height));
        } else if (this.pal ===  PAL.VeryActive && this.gender ===  Gender.Female) {
            return 135.3 - (30.8 * age) + 1.56 * ((10 * weight) + (934 * height));
        }
        return 0;
    }
}

export class AdultTEE extends TEEEstimator {

    public predict(dob: Date, weight: number, height: number): number {
        const age: number = dob.delta("years");
        if (this.pal ===  PAL.Sedentary && this.gender ===  Gender.Male) {
            return 662 - (9.53 * age) + 1 * ((15.9 * weight) + (540 * height));
        } else if (this.pal ===  PAL.Sedentary && this.gender ===  Gender.Female) {
            return 354 - (6.91 * age) + 1 * ((9.36 * weight) + (726 * height));
        } else if (this.pal ===  PAL.Low && this.gender ===  Gender.Male) {
            return 662 - (9.53 * age) + 1.11 * ((15.9 * weight) + (540 * height));
        } else if (this.pal ===  PAL.Low && this.gender ===  Gender.Female) {
            return 662 - (9.53 * age) + 1.12 * ((15.9 * weight) + (540 * height));
        } else if (this.pal ===  PAL.Active && this.gender ===  Gender.Male) {
            return 662 - (9.53 * age) + 1.25 * ((15.9 * weight) + (540 * height));
        } else if (this.pal ===  PAL.Active && this.gender ===  Gender.Female) {
            return 662 - (9.53 * age) + 1.27 * ((15.9 * weight) + (540 * height));
        } else if (this.pal ===  PAL.VeryActive && this.gender ===  Gender.Male) {
            return 662 - (9.53 * age) + 1.48 * ((15.9 * weight) + (540 * height));
        } else if (this.pal ===  PAL.VeryActive && this.gender ===  Gender.Female) {
            return 662 - (9.53 * age) + 1.45 * ((15.9 * weight) + (540 * height));
        }
        return 0;
    }
}

export class Terrain {
  public weight: number;
  public speed: number;
  public load: number;

  constructor(weight: number, speed: number, load: number) {
      this.weight = weight;
      this.speed = speed;
      this.load = load;
  }

  public pandolf(terrain: number, slope: number): number {
      const totalWeight: number = this.weight + this.load;
      return (1.5 * this.weight) + 2.0 * (totalWeight) * Math.pow(this.load / this.weight, 2) + terrain * totalWeight * (1.5 * Math.pow(this.speed, 2) + 0.25 * this.speed * slope);
  }

  public santee(terrain: number, slope: number): number {
      const totalWeight: number = this.weight + this.load;
      const kineticEnergy: number = this.speed * slope;
      const speedSquared: number = Math.pow(this.speed, 2);

      const part1: number = 1.5 * this.weight + 2 * Math.pow(this.load / this.weight, 2);
      const part2: number = terrain * totalWeight * (1.5 * speedSquared + 0.35 * kineticEnergy);
      const part31: number = (kineticEnergy * totalWeight) / 3.5;
      const part32: number = (totalWeight * Math.pow(slope + 6, 2) ) / this.weight;
      const part33: number = 25 - speedSquared;
      return part1 + part2 - terrain * (part31 - part32 + part33);
  }

}
