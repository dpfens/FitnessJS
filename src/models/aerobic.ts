/// <reference path='interface.ts'/>

namespace Fit {

  export namespace model {

    export namespace aerobic {

      /**
       * Abstract base class for aerobic performance models.
       * @class PerformanceModel
       * @abstract
       */
      export abstract class PerformanceModel {
        protected t1;
        protected d1;

        /**
         * @constructor
         * @param {number} d1 - Initial distance
         * @param {number} t1 - Initial time
         */
        constructor(d1: number, t1: number) {
          this.d1 = d1;
          this.t1 = t1;
        }

        /**
         * Estimate time for a given distance.
         * @abstract
         * @param {number} d2 - Target distance
         * @returns {number} Estimated time
         */
        time(d2: number): number { return 0}

        /**
         * Estimate distance for a given time.
         * @abstract
         * @param {number} t2 - Target time
         * @returns {number} Estimated distance
         */
        distance(t2: number): number { return 0}

      }

      /**
       * Riegel Running Model for estimating performance.
       * @class Riegel
       * @extends PerformanceModel
       * @implements DistanceEstimatable, TimeEstimatable
       */
      export class Riegel extends PerformanceModel implements DistanceEstimatable, TimeEstimatable {
        /*
          Riegel Running Model
          @description Error rate 4.1% according to http://cs229.stanford.edu/proj2015/247_report.pdf
          @static
          @param {Number} t1 = time
          @param {Number} d1 = old distance
          @param {Number} d2 = new Fit.models.aerobic.distance
          @param {Number} factor = fatigue factor in a given competition, defaults to model default: 1.06
          d1 & d2 must be in the same unit
          @returns {Number} t2 = estimated time to travel d2 in same unit as t1
        */
        private factor: number;

        static readonly RUNNINGMEN: number = 1.07732;
        static readonly RUNNINGMEN40: number = 1.05352;
        static readonly RUNNINGMEN50: number = 1.05374;
        static readonly RUNNINGMEN60: number = 1.05603;
        static readonly RUNNINGMEN70: number = 1.06370;

        static readonly RUNNINGWOMEN: number = 1.08283;

        static readonly SWIMMINGMEN: number = 1.02977;
        static readonly SWIMMINGWOMEN: number = 1.03256;

        static readonly NORDICMEN: number = 1.01421;

        static readonly RACEWALKMEN: number = 1.05379;
        static readonly ROLLERSKATINGMEN: number = 1.13709;

        static readonly CYCLINGMEN: number = 1.04834;
        static readonly SPEEDSKATINGMEN: number = 1.06017;
        /**
         * @constructor
         * @param {number} d1 - Initial distance
         * @param {number} t1 - Initial time
         * @param {number} [factor=1.06] - Fatigue factor
         */
        constructor(d1: number, t1: number, factor=1.06) {
          super(d1, t1);
          this.factor = factor;
        }

        /**
         * Estimate time for a given distance using Riegel's model.
         * @param {number} d2 - Target distance
         * @returns {number} Estimated time
         * @example
         * const riegel = new Fit.models.aerobic.Riegel(10000, 3600, Riegel.RUNNINGMEN);
         * const estimatedTime = riegel.time(21097); // Estimate half-marathon time based on 10K performance
         */
        time(d2: number): number {
          if(this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
            return 0;
          }
          return this.t1 * Math.pow( (d2/this.d1), this.factor);
        }

        /**
         * Estimate distance for a given time using Riegel's model.
         * @param {number} t2 - Target time
         * @returns {number} Estimated distance
         * @example
         * const riegel = new Fit.models.aerobic.Riegel(5000, 1200, Riegel.RUNNINGWOMEN);
         * const estimatedDistance = riegel.distance(3600); // Estimate distance covered in 1 hour based on 5K performance
         */
        distance(t2: number): number {
          if(this.t1 <= 0 || this.d1 <= 0 || t2 <= 0) {
            return 0;
          }
          let factor = 1.0/this.factor;
          return this.d1*Math.pow(t2, factor)/Math.pow(this.t1, factor);
        }

      }

      /**
       * Cameron Running Model for estimating performance.
       * @class Cameron
       * @extends PerformanceModel
       * @implements DistanceEstimatable, TimeEstimatable
       */
      export class Cameron extends PerformanceModel implements DistanceEstimatable, TimeEstimatable {

        /**
         * Estimate time for a given distance using Cameron's model.
         * Works well for:
            post-1945 records at the 800m through the 10000m;
            from 1964 onward for the marathon
         * @param {number} d2 - Target distance in miles
         * @returns {number} Estimated time in seconds
         * @example
         * const cameron = new Fit.models.aerobic.Cameron(5, 1200); // 5 miles in 1200 seconds
         * const marathonTime = cameron.time(26.2); // Estimate marathon time
         */
        time(d2: number): number {
          if(this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
            return 0;
          }
          let a = 13.49681 - 0.048865*this.d1 + 2.438936/Math.pow(this.d1,0.7905);
          let b = 13.49681 - 0.048865*d2 + 2.438936/Math.pow(d2,0.7905);
          return (this.t1/this.d1) * (a/b) * d2;
        }
      }


      export class VV implements TimeEstimatable {
        protected t1;
        protected d1;

        /**
         * @constructor
         * @param {number} d1 - Initial distance
         * @param {number} t1 - Initial time
         */
        constructor(d1: number, t1: number) {
          this.d1 = d1;
          this.t1 = t1;
        }

        protected adj_timer(d1: number, t1: number): number {
          return d1/(d1/t1);
        }

        protected riegel_velocity(distance: number): number {
          let adj_timer = this.adj_timer(this.d1, this.t1);
          return distance/(adj_timer* Math.pow(distance/this.d1,1.06) );
        }

        /**
         * Estimate time for a given mileage using the VV model.
         * @param {number} mileage - Weekly mileage
         * @param {number} [d2=42195.0] - Target distance (default is marathon distance in meters)
         * @returns {number} Estimated time in seconds
         * @example
         * const vv = new Fit.models.aerobic.VV(10000, 2400); // 10K in 40 minutes
         * const marathonTime = vv.time(50); // Estimate marathon time for 50 miles per week
         */
        time(mileage, d2=42195.0): number {
            let riegel_velocity = this.riegel_velocity(d2);
            let velocity = 0.16018617+(0.83076202*riegel_velocity)+(0.6423826*(mileage/10) );
            let minutes = (d2/60)/velocity;
            let seconds = minutes * 60;
            return seconds;
        }

        /**
         * Alternative time estimation method using two performance points.
         * @param {number} mileage - Weekly mileage
         * @param {number} d2 - Second performance distance
         * @param {number} t2 - Second performance time
         * @param {number} [distance=42195.0] - Target distance (default is marathon distance in meters)
         * @returns {number} Estimated time in seconds
         * @example
         * const vv = new Fit.models.aerobic.VV(5000, 1200); // 5K in 20 minutes
         * const marathonTime = vv.time2(60, 10000, 2520, 42195); // Estimate marathon time based on 5K, 10K, and 60 miles per week
         */
        time2(mileage: number, d2: number, t2: number, distance=42195.0): number {
          let adj_timer_r1: number = this.adj_timer(this.d1, this.t1);
          let adj_timer_r2: number = this.adj_timer(d2, t2);
          let k_r2_r1: number = Math.log(adj_timer_r2/adj_timer_r1)/Math.log(d2/this.d1);
          let k_marathon: number = 1.4510756+(-0.23797948*k_r2_r1)+(-0.01410023*(mileage/10) );
          let seconds: number = (adj_timer_r2*Math.pow(distance/d2, k_marathon) );
          return seconds;
        }
      }

    }

  }

}
