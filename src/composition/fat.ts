import { Gender } from "../enums";

export class Fat {

    /*
    @description Estimate body fat percentage from bmi in children
    @param {Number} age in years
    @param {Number} weight in kg
    @param {Number} height in meters
    @returns {Number} body fat percentage as a decimal
    */
    public static childBmi = function(gender: Gender, dob: Date, weight: number, height: number): number {
        const age = dob.delta("years");
        const bmi = (weight / Math.pow(height, 2));
        if (this.gender === Gender.Female) {
            return ((1.51 * bmi) - (0.70 * age) + 1.4) / 100;
        }
        return ((1.51 * bmi) - (0.70 * age) - (3.6) + 1.4) / 100;
    };

    /*
    @description Estimate body fat percentage from bmi in adults
    @param {Number} age in years
    @param {Number} weight in kg
    @param {Number} height in meters
    @returns {Number} body fat percentage as a decimal
    */
    public static adultBmi = function(gender: Gender, dob: Date, weight: number, height: number): number {
        const age = dob.delta("years");
        const meters = height;
        const bmi = (weight / Math.pow(meters, 2));
        if (gender === Gender.Female) {
            return ((1.20 * bmi) - (0.23 * age) - 5.4) / 100;
        }
        return ((1.20 * bmi) - (0.23 * age) - (10.8) - 5.4) / 100;
    };

    /*
    @param {Number} weight in lb
    @param {Number} waist in inches
    @returns percent body fat
    */
    public static waist = function(gender: Gender, weight: number, waistCircumference: number): number {
        const weightLb = weight * 2.2;
        const waistCircumferenceInches = waistCircumference * 39.3701;
        if (gender === Gender.Female) {
            return 100 * (-76.76 + 4.15 * waistCircumferenceInches - 0.082 * weightLb) / weightLb;
        }
        return 100 * (-98.42 + 4.15 * waistCircumferenceInches - 0.082 * weightLb) / weightLb;
    };

    /*
    Body fat percentage
    Population - specific Formulas for converting Body Density (Db) to Percent Body Fat (%BF)
    @param {Number} bd is body density in g / cc
    */

    public brozek(bd: number): number {
        return (4.570 / bd) - 4.142;
    }

    /*
    @description Percent Fat Equation (for African American females)
    @param {Number} bd is body density in g / cc
    @returns {Number} body fat percentage as a decimal
    */
    public ortiz(bd: number): number {
        return (4.832 / bd) - 4.369;
    }

    /*
    @description Percent Fat Equation (for African American males)
    @param {Number} bd is body density in g / cc
    @returns {Number} body fat percentage as a decimal
    */
    public schutte(bd: number): number {
        return (4.374 / bd) - 3.928;
    }

    /*
    @param {Number} bd is body density in g / cc
    @returns {Number} body fat percentage as a decimal
    */
    public siri(bd: number): number {
        return (4.95 / bd) - 4.5;
    }

    /*
    @description Percent Fat Equation (for African American males)
    @param {Number} bd is body density in g / cc
    @returns {Number} body fat percentage as a decimal
    */
    public wagner(bd: number): number {
        return (4.86 / bd) - 4.39;
    }

}
