/// <reference path="../enums.ts" />

namespace Fit {

  export namespace energy {

    /**
     * Base class for estimating Basal Metabolic Rate (BMR)
     * @class BMREstimator
     */
    export class BMREstimator {
      public gender: Gender;

      constructor(gender: Gender) {
        this.gender = gender;
      }

      /**
       * Predicts BMR based on given parameters
       * @param dob Date of birth
       * @param weight Weight in kg
       * @param height Height in cm
       * @returns Estimated BMR in kcal/day
       * @throws Error if not implemented in derived class
       */
      predict(dob: Date, weight: number, height: number): number {
        throw new Error("The prediction method is not implemented");
      }

    }

    /**
     * Harris-Benedict equation for estimating BMR
     * @class HB
     * @extends BMREstimator
     */
    export class HB extends BMREstimator {

        /**
       * Predicts BMR using the Harris-Benedict equation
       * @param dob Date of birth
       * @param weight Weight in kg
       * @param height Height in cm
       * @returns Estimated BMR in kcal/day
       * 
       * @example
       * const hbEstimator = new Fit.cardio.energy.HB(Gender.Female);
       * const bmr = hbEstimator.predict(new Date(1990, 0, 1), 65, 170);
       * console.log(bmr); // Outputs the estimated BMR
       * 
       * When to use: For general population BMR estimation, widely used but may overestimate in some cases
       */
        predict(dob: Date, weight: number, height: number): number {
          let age = dob.delta("years");
            if(this.gender === Gender.Female) {
                return (9.5634*weight)+(1.8496*height)-(4.6756*age)+655.0955;
            }
            return (13.7516*weight)+(5.0033*height)-(6.7550*age)+66.4730;
        }

    }

    /**
     * Revised Harris-Benedict equation for estimating BMR
     * @class RevisedHB
     * @extends BMREstimator
     */
    export class RevisedHB extends BMREstimator {

        /**
       * Predicts BMR using the Revised Harris-Benedict equation
       * @param dob Date of birth
       * @param weight Weight in kg
       * @param height Height in cm
       * @returns Estimated BMR in kcal/day
       * 
       * @example
       * const revisedHBEstimator = new Fit.cardio.energy.RevisedHB(Gender.Male);
       * const bmr = revisedHBEstimator.predict(new Date(1988, 5, 15), 80, 180);
       * console.log(bmr); // Outputs the estimated BMR
       * 
       * When to use: For a more accurate BMR estimation compared to the original Harris-Benedict equation, especially for individuals with higher body mass
       */
        predict(dob: Date, weight: number, height: number): number {
          let age = dob.delta("years");
            if(this.gender === Gender.Female) {
                return (9.247*weight)+(3.098*height)-(4.330*age)+447.593;
            }
            return (13.397*weight)+(4.799*height)-(5.677*age)+88.362;
        }

    }

    /**
     * Mifflin-St Jeor equation for estimating BMR
     * @class MSJ
     * @extends BMREstimator
     */
    export class MSJ extends BMREstimator {

        /**
       * Predicts BMR using the Mifflin-St Jeor equation
       * @param dob Date of birth
       * @param weight Weight in kg
       * @param height Height in cm
       * @returns Estimated BMR in kcal/day
       * 
       * @example
       * const msjEstimator = new Fit.cardio.energy.MSJ(Gender.Female);
       * const bmr = msjEstimator.predict(new Date(1992, 3, 20), 65, 170);
       * console.log(bmr); // Outputs the estimated BMR
       * 
       * When to use: Considered one of the most accurate equations for estimating BMR in non-obese individuals
       */
        predict(dob: Date, weight: number, height: number): number {
          let age = dob.delta("years");
            if(this.gender === Gender.Female) {
                return (9.99 * weight + 6.25 * height - 4.92 * age - 161);
            }
            return (9.99 * weight + 6.25 * height - 4.92 * age + 5);
        }

    }

    /**
     * Resting Metabolic Rate (RMR) calculator
     * @class RMR
     */
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

        /**
       * Calculates quick estimate of RMR
       * @returns Estimated RMR in kcal/day
       * 
       * @example
       * const rmrCalculator = new Fit.cardio.energy.RMR(Gender.Male, new Date(1985, 5, 15), 75, 180);
       * const quickRMR = rmrCalculator.quick();
       * console.log(quickRMR);
       * 
       * When to use: For a rapid, rough estimate of RMR when precise calculations are not necessary
       */
        quick(): number {
            if(this.gender === Gender.Female) {
                return this.weight * 22;
            }
            return this.weight * 24.2;
        }

        /**
       * Calculates RMR based on Body Surface Area (BSA)
       * @param bsa Body Surface Area in m²
       * @returns Estimated RMR in kcal/day
       * 
       * @example
       * const rmrCalculator = new Fit.cardio.energy.RMR(Gender.Female, new Date(1990, 3, 20), 60, 165);
       * const bsaRMR = rmrCalculator.bsa(1.65);
       * console.log(bsaRMR);
       * 
       * When to use: When a more accurate RMR estimate is needed, especially for individuals with unusual body compositions
       */
        bsa(bsa: number): number {
            if (this.gender ===  Gender.Female) {
                return bsa * 840;
            }
            return bsa * 912;
        }

    }

    /**
     * Katch-McArdle formula for calculating RMR
     * @param lbm Lean Body Mass in kg
     * @returns Estimated RMR in kcal/day
     * 
     * @example
     * const lbm = 55; // kg
     * const rmr = Fit.cardio.energy.kma(lbm);
     * console.log(rmr);
     * 
     * When to use: When lean body mass is known, provides a more accurate estimate for athletes or individuals with higher muscle mass
     */
    export function kma(lbm: number): number {
        return 370 + (21.6 * lbm);
    }

    /**
     * Cunningham equation for calculating RMR
     * @param lbm Lean Body Mass in kg
     * @returns Estimated RMR in kcal/day
     * 
     * @example
     * const lbm = 60; // kg
     * const rmr = Fit.cardio.energy.cunningham(lbm);
     * console.log(rmr);
     * 
     * When to use: Similar to Katch-McArdle, use when lean body mass is known. Often preferred for athletes due to its accuracy in this population
     */
    export function cunningham(lbm: number): number {
        return 500 + (22 * lbm);
    }

    /**
     * Base class for estimating Total Energy Expenditure (TEE)
     * @class TEEEstimator
     */
    export class TEEEstimator {
      public gender: Gender;
      public pal: PAL;

        constructor(gender: Gender, pal: PAL) {
            this.gender = gender;
            this.pal = pal;
        }

        /**
       * Predicts TEE based on given parameters
       * @param dob Date of birth
       * @param weight Weight in kg
       * @param height Height in cm
       * @returns Estimated TEE in kcal/day
       * @throws Error if not implemented in derived class
       */
        predict(dob: Date, weight: number, height: number): number {
            throw new Error("The prediction method is not implemented");
        }

        /**
       * Calculates energy expenditure from physical activity
       * @param weight Weight in kg
       * @param mets Metabolic Equivalent of Task (MET) value
       * @returns Energy expenditure in kcal/hour
       * 
       * @example
       * const teeEstimator = new Fit.cardio.energy.TEEEstimator(Gender.Male, PAL.Active);
       * const energyExpenditure = teeEstimator.fromActivity(75, 6);
       * console.log(energyExpenditure);
       * 
       * When to use: To estimate energy expenditure for a specific activity based on its MET value
       */
        fromActivity(weight: number, mets: number): number {
            return (mets * 3.5 * weight)/200;
        }
    }

    /**
     * Estimates Total Energy Expenditure (TEE) for children
     * @class ChildTEE
     * @extends TEEEstimator
     */
    export class ChildTEE extends TEEEstimator {

        /**
       * Predicts TEE for children based on gender, physical activity level, age, weight, and height
       * @param dob Date of birth
       * @param weight Weight in kg
       * @param height Height in cm
       * @returns Estimated TEE in kcal/day
       * 
       * @example
       * const childTEEEstimator = new Fit.cardio.energy.(Gender.Male, PAL.Active);
       * const tee = childTEEEstimator.predict(new Date(2010, 1, 1), 35, 140);
       * console.log(tee); // Outputs the estimated TEE
       * 
       * When to use: For estimating total energy expenditure in children and adolescents, taking into account their growth and development
       */
        predict(dob: Date, weight: number, height: number): number {
          let age = dob.delta("years");
            if (this.pal ===  PAL.Sedentary && this.gender ===  Gender.Male) {
                return 88.5 - (61.9 * age) + 1*((26.7*weight)+(903*height));
            } else if(this.pal ===  PAL.Sedentary && this.gender ===  Gender.Female) {
                return 135.3 - (30.8 * age) + 1*((10*weight)+(934*height));
            } else if(this.pal ===  PAL.Low && this.gender ===  Gender.Male) {
                return 88.5 - (61.9 * age) + 1.13*((26.7*weight)+(903*height));
            } else if(this.pal ===  PAL.Low && this.gender ===  Gender.Female) {
                return 135.3 - (30.8 * age) + 1.16*((10*weight)+(934*height));
            } else if(this.pal ===  PAL.Active && this.gender ===  Gender.Male) {
                return 88.5 - (61.9 * age) + 1.26*((26.7*weight)+(903*height));
            } else if(this.pal ===  PAL.Active && this.gender ===  Gender.Female) {
                return 135.3 - (30.8 * age) + 1.31*((10*weight)+(934*height));
            } else if(this.pal ===  PAL.VeryActive && this.gender ===  Gender.Male) {
                return 88.5 - (61.9 * age) + 1.42*((26.7* weight)+(903* height));
            } else if(this.pal ===  PAL.VeryActive && this.gender ===  Gender.Female) {
                return 135.3 - (30.8 * age) + 1.56*((10*weight)+(934*height));
            }
            return 0;
        }
    }

    /**
     * Estimates Total Energy Expenditure (TEE) for adults
     * @class AdultTEE
     * @extends TEEEstimator
     */
    export class AdultTEE extends TEEEstimator {

        /**
       * Predicts TEE for adults based on gender, physical activity level, age, weight, and height
       * @param dob Date of birth
       * @param weight Weight in kg
       * @param height Height in cm
       * @returns Estimated TEE in kcal/day
       * 
       * @example
       * const adultTEEEstimator = new Fit.cardio.energy.AdultTEE(Gender.Female, PAL.Active);
       * const tee = adultTEEEstimator.predict(new Date(1985, 5, 15), 65, 170);
       * console.log(tee); // Outputs the estimated TEE
       * 
       * When to use: For estimating total energy expenditure in adults, considering their physical activity level
       */
        predict(dob: Date, weight: number, height: number): number {
          let age = dob.delta("years");
            if(this.pal ===  PAL.Sedentary && this.gender ===  Gender.Male) {
                return 662 - (9.53 * age) + 1*((15.9 * weight) + (540 * height))
            } else if(this.pal ===  PAL.Sedentary && this.gender ===  Gender.Female) {
                return 354 - (6.91 * age) + 1*((9.36*weight)+(726*height))
            } else if(this.pal ===  PAL.Low && this.gender ===  Gender.Male) {
                return 662 - (9.53 * age) + 1.11*((15.9*weight)+(540*height))
            } else if(this.pal ===  PAL.Low && this.gender ===  Gender.Female) {
                return 662 - (9.53 * age) + 1.12*((15.9*weight)+(540*height))
            } else if(this.pal ===  PAL.Active && this.gender ===  Gender.Male) {
                return 662 - (9.53 * age) + 1.25*((15.9*weight)+(540*height))
            } else if(this.pal ===  PAL.Active && this.gender ===  Gender.Female) {
                return 662 - (9.53 * age) + 1.27*((15.9*weight)+(540*height))
            } else if(this.pal ===  PAL.VeryActive && this.gender ===  Gender.Male) {
                return 662 - (9.53 * age) + 1.48*((15.9*weight)+(540*height))
            } else if(this.pal ===  PAL.VeryActive && this.gender ===  Gender.Female) {
                return 662 - (9.53 * age) + 1.45*((15.9*weight)+(540*height));
            }
            return 0;
        }
    }

    /**
     * Calculates energy expenditure for walking/running on different terrains
     * @class Terrain
     */
    export class Terrain {
      public weight: number;
      public speed: number;
      public load: number;

      constructor(weight: number, speed: number, load: number) {
          this.weight = weight;
          this.speed = speed;
          this.load = load;
      }

      /**
       * Calculates energy expenditure using Pandolf equation
       * @param terrain Terrain coefficient
       * @param slope Slope in decimal form (e.g., 0.05 for 5% grade)
       * @returns Energy expenditure in watts
       * 
       * @example
       * const terrain = new Fit.cardio.energy.Terrain(70, 1.4, 10);
       * const energyExpenditure = terrain.pandolf(1.2, 0.03);
       * console.log(energyExpenditure);
       * 
       * When to use: For estimating energy expenditure during load carriage on various terrains and slopes
       */
      pandolf(terrain: number, slope: number): number {
          let total_weight: number = this.weight + this.load;
          return (1.5*this.weight) + 2.0*(total_weight)*Math.pow(this.load/this.weight,2)+terrain*total_weight*(1.5*Math.pow(this.speed,2)+0.25*this.speed*slope)
      }

      /**
       * Calculates energy expenditure using Santee equation (modified Pandolf equation)
       * @param terrain Terrain coefficient
       * @param slope Slope in decimal form (e.g., 0.05 for 5% grade)
       * @returns Energy expenditure in watts
       * 
       * @example
       * const terrain = new Fit.cardio.energy.Terrain(70, 1.4, 10);
       * const energyExpenditure = terrain.santee(1.2, 0.03);
       * console.log(energyExpenditure);
       * 
       * When to use: For more accurate energy expenditure estimation during downhill walking with loads
       */
      santee(terrain: number, slope: number): number {
          let total_weight: number = this.weight + this.load;
          let energy: number = this.speed * slope;
          let speed_squared: number = Math.pow(this.speed,2)

          let part1: number = 1.5*this.weight+2*Math.pow(this.load/this.weight,2);
          let part2: number = terrain*total_weight*(1.5*speed_squared+0.35*energy);
          let part3_1: number = (energy*total_weight) / 3.5;
          let part3_2: number = (total_weight* Math.pow(slope+6,2) ) / this.weight;
          let part3_3: number = 25-speed_squared;
          return part1 + part2-terrain*(part3_1-part3_2+part3_3);
      }

    }




  }

}
