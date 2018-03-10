/*
creates a new Indices instance
@class
@classdesc creates an Indices class for body compositon index calculations
*/
export class Index {
    private height: number;
    private weight: number;

    constructor(height: number, weight: number) {
      this.height = height;
      this.weight = weight;

    }

    public bai(hipCircumference: number): number {
      const numerator: number = 100 * hipCircumference;
      const denominator: number = this.height * Math.sqrt(this.height);
      return (numerator / denominator) - 18;
    }
    /*
    BMI
    @param {Number} body mass in kg
    @param {Number} height in meters
    @returns {Number} BMI
    */
    public bmi(): number {
        const meters = this.height;
        return this.weight / (meters * meters);
    }

    public bmi_prime(upperLimit: number = 25.9): number {
        return this.bmi() / upperLimit;
    }

    public bsi(waistCircumference: number): number {
        return waistCircumference / Math.pow(this.bmi(), 2 / 3) * Math.pow(this.height, 0.5);
    }

    /* Corpulence (Ponderal / Rohrer) Index
    @param {Number}body mass in kg
    @param {Number} height in meters
    @returns {Number} Ponderal Index
    */
    public corpulence(): number {
        return this.weight / Math.pow(this.height, 3);
    }

    public sbsi(bsa: number, verticalTrunkCircumference: number, waistCircumference: number): number {
        return (Math.pow(this.height, 7 / 4) * Math.pow(waistCircumference, 5 / 6) ) / (bsa * verticalTrunkCircumference);
    }

    public WHR(waistCircumference: number , hipCircumference: number): number {
        return waistCircumference / hipCircumference;
    }

    public WHtR(waistCircumference): number {
        return waistCircumference / this.height;
    }
}
