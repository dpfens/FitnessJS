/// <reference path="density.ts" />
/// <reference path="indices.ts" />
/// <reference path="mass.ts" />
/// <reference path="stature.ts" />
/// <reference path="surfacearea.ts" />

namespace Fit {
  export class Composition {
    public gender: Gender;
    public dob: Date;
    public height: number;
    public weight: number;

    public density: Density;
    public indices: Indices;
    public mass: Mass;
    public stature: Stature;
    public surfaceArea: SurfaceArea;

    constructor(gender: Gender, dob: Date, height: number, weight: number) {
      this.gender = gender;
      this.dob = dob;
      this.height = height;
      this.weight = weight;
      this.density = new Density(gender, dob, height, weight);;
      this.indices = new Indices(gender, dob, height, weight);;
      this.mass = new Mass(gender, dob, height, weight);;
      this.surfaceArea = new SurfaceArea(gender, dob, height, weight);;
    }

  }

}