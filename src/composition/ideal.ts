import { Gender } from "../enums";

function inchesOverFt(value: number, upperBound: number): number {
    const inches: number = value * 39.3701;
    const upperBoundInches: number = upperBound * 39.3701;
    return inches % upperBoundInches;
}

export class Ideal {
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

    /*
    @description G. Hamwi (1964)
    @param {Number} height in inches
    @returns {Number} ideal weight in kg
    */
    public hamwi = function(): number {
        const inchesOver5Ft: number = inchesOverFt(this.height, 1.524);
        if (this.gender === Gender.Female) {
            return 45.5 + (2.2 * inchesOver5Ft);
        }
        return 48 + (2.7 * inchesOver5Ft);
    };

    /*
    @description Estimate the ideal weight based on height. B. Devine (1974)
    @param {Number} height in inches
    @returns {Number} ideal weight in kg
    */
    public devine = function(): number {
        const inchesOver5Ft: number = inchesOverFt(this.height, 1.524);
        if (this.gender === Gender.Female) {
            return 45.5 + (2.3 * inchesOver5Ft);
        }
        return 50 + (2.3 * inchesOver5Ft);
    };

    /*
    @description Estimate the ideal weight based on height. J. Robinson et al. (1983)
    @param {Number} height in inches
    @returns {Number} ideal weight in kg
    */
    public robinson = function(): number {
        const inchesOver5Ft: number = inchesOverFt(this.height, 1.524);
        if (this.gender === Gender.Female) {
            return 49 + (1.7 * inchesOver5Ft);
        }
        return 52 + (1.9 * inchesOver5Ft);
    };

    /*
    @description Estimate the ideal weight based on height. D. Miller Formula (1983)
    @param {Number} height in inches
    @returns {Number} ideal weight in kg
    */
    public miller = function(): number {
        const inchesOver5Ft: number = inchesOverFt(this.height, 1.524);
        if (this.gender === Gender.Female) {
            return 53.1 + (1.36 * inchesOver5Ft);
        }
        return 56.2 + (1.41 * inchesOver5Ft);
    };

    /*
    @description Estimate the ideal weight based on height. H. Lemmens et al. (2005)
    @param {Number} height in meters
    @returns {Number} ideal weight in kg
    */
    public lemmens = function(): number {
        return 22 * Math.pow(this.height, 2);
    };

    /*
    @description Estimate the weight of an athlete based on height
    @param {Number} height in inches
    @returns {Number} weight in lb
    */
    public willoughby = function(): number {
        const heightInches = this.height * 39.3701;
        const heightCubed = Math.pow(heightInches, 3);
        return heightCubed / 1906;
    };

    /*
    @description Estimate the waist of an athlete based on height
    @param {Number} height in inches
    @returns {Number} waist in inches
    */
    public willoughbyWaist = function(): number {
        const heightInches = this.height * 39.3701;
        return heightInches * 0.4584;
    };
}
