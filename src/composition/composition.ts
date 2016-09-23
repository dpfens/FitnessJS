/// <reference path="density.ts" />
/// <reference path="hydration.ts" />
/// <reference path="indices.ts" />
/// <reference path="mass.ts" />
/// <reference path="stature.ts" />
/// <reference path="surfacearea.ts" />
/// <reference path="ideal.ts" />

namespace Fit {

  export namespace composition {

    /*
    creates a new Composition instance
    @class
    @classdesc creates a Composition class for body composition calculations
    */
    export class Composition {
      public gender: Gender;
      public dob: Date;
      public height: number;
      public weight: number;

      public density: Density;
      public hydration: Hydration;
      public ideal: Ideal;
      public indices: Indices;
      public mass: Mass;
      public stature: Stature;
      public surfaceArea: SurfaceArea;

      constructor(gender: Gender, dob: Date, height: number, weight: number) {
        this.gender = gender;
        this.dob = dob;
        this.height = height;
        this.weight = weight;
        this.density = new Density(gender, dob, height, weight);
        this.hydration = new Hydration(gender, dob, height, weight);
        this.ideal = new Ideal(gender, dob, height, weight);
        this.indices = new Indices(gender, dob, height, weight);
        this.mass = new Mass(gender, dob, height, weight);
        this.surfaceArea = new SurfaceArea(gender, dob, height, weight);
      }

    }

  }

}
