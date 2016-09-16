namespace Fit {

	export module composition {

    function inchesOverFt(value: number, upperBound: number): number {
      let inches = value * 39.3701;
      let upperBoundInches = upperBound * 39.3701;
      return inches % upperBoundInches;
    }

    export class Ideal {
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
      }

      /*
      @description G. Hamwi (1964)
      @param {Number} height in inches
      @returns {Number} ideal weight in kg
      */
      hamwi = function(): number {
        let inchesOver5Ft = inchesOverFt(this.height, 1.524);
        if(this.gender === Gender.Female) {
          return 45.5 + (2.2*inchesOver5Ft);
        }
        return 48 + (2.7*inchesOver5Ft);
      }

      /*
      @description Estimate the ideal weight based on height. B. Devine (1974)
      @param {Number} height in inches
      @returns {Number} ideal weight in kg
      */
      devine = function(): number {
        let inchesOver5Ft = inchesOverFt(this.height, 1.524);
        if(this.gender === Gender.Female) {
          return 45.5 + (2.3*inchesOver5Ft);
        }
        return 50 + (2.3*inchesOver5Ft);
      }

      /*
      @description Estimate the ideal weight based on height. J. Robinson et al. (1983)
      @param {Number} height in inches
      @returns {Number} ideal weight in kg
      */
      robinson = function(): number {
        let inchesOver5Ft = inchesOverFt(this.height, 1.524);
        if(this.gender === Gender.Female) {
          return 49 + (1.7*inchesOver5Ft);
        }
        return 52 + (1.9*inchesOver5Ft);
      }

      /*
      @description Estimate the ideal weight based on height. D. Miller Formula (1983)
      @param {Number} height in inches
      @returns {Number} ideal weight in kg
      */
      miller = function(): number {
        let inchesOver5Ft = inchesOverFt(this.height, 1.524);
        if(this.gender === Gender.Female) {
          return 53.1 + (1.36*inchesOver5Ft);
        }
        return 56.2 + (1.41*inchesOver5Ft);
      }

      /*
      @description Estimate the ideal weight based on height. H. Lemmens et al. (2005)
      @param {Number} height in meters
      @returns {Number} ideal weight in kg
      */
      lemmens = function(): number {
        return 22 * Math.pow(this.height,2);
      }

      /*
      @description Estimate the weight of an athlete based on height
      @param {Number} height in inches
      @returns {Number} weight in lb
      */
      willoughby = function(): number {
        let heightInches = this.height * 39.3701;
        let heightCubed = Math.pow(heightInches, 3);
        return heightCubed/1906;
      }

      /*
      @description Estimate the waist of an athlete based on height
      @param {Number} height in inches
      @returns {Number} waist in inches
      */
      willoughbyWaist = function(): number {
        let heightInches = this.height * 39.3701;
        return heightInches * 0.4584;
      }

    }

  }

}
