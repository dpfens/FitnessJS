/// <reference path='interface.ts'/>

namespace Fit {

  export namespace model {

    export namespace aerobic {

      export abstract class PerformanceModel {
        protected t1;
        protected d1;

        constructor(d1: number, t1: number) {
          this.d1 = d1;
          this.t1 = t1;
        }

        time(d2: number): number { return 0}

        distance(t2: number): number { return 0}

      }


      export class Riegel extends PerformanceModel implements DistanceEstimatable, TimeEstimatable {
        /*
          Riegel Running Model
          @description Error rate 4.1% according to http://cs229.stanford.edu/proj2015/247_report.pdf
          @static
          @param {Number} t1 = time
          @param {Number} d1 = old distance
          @param {Number} d2 = new distance
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

        constructor(d1: number, t1: number, factor=1.06) {
          super(d1, t1);
          this.factor = factor;
        }

        time(d2: number): number {
          if(this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
            return 0;
          }
          return this.t1 * Math.pow( (d2/this.d1), this.factor);
        }

        /*
          Derived from the Riegel Running Model
          @static
          @description d2 = d1*t2^(50/53)/t1^(50/53)
          @param {Number} t1 = time
          @param {Number} d1 = old distance
          @param {Number} t2 = new time
          d1 & d2 must be in the same unit
          @returns {Number} d2 = estimated distance travelled in t2 in same unit as d1
        */
        distance(t2: number): number {
          if(this.t1 <= 0 || this.d1 <= 0 || t2 <= 0) {
            return 0;
          }
          let factor = 1.0/this.factor;
          return this.d1*Math.pow(t2, factor)/Math.pow(this.t1, factor);
        }

      }

      export class Cameron extends PerformanceModel implements DistanceEstimatable, TimeEstimatable {
        /*
          Cameron Running Model
          @description Works well for:
            post-1945 records at the 800m through the 10000m;
            from 1964 onward for the marathon
          @param {Number} t1 = time in seconds
          @param {Number} d1 = distance in miles
          @param {Number} d2 = distance in miles
          @returns {Number} t2 = estimated time to travel d2 in seconds
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

        constructor(d1: number, t1: number) {
          this.d1 = d1;
          this.t1 = t1;
        }

        adj_timer(d1: number, t1: number): number {
          return d1/(d1/t1);
        }

        riegel_velocity(distance: number): number {
          let adj_timer = this.adj_timer(this.d1, this.t1);
          return distance/(adj_timer* Math.pow(distance/this.d1,1.06) );
        }

        time(mileage, d2=42195.0): number {
            let riegel_velocity = this.riegel_velocity(d2);
            let velocity = 0.16018617+(0.83076202*riegel_velocity)+(0.6423826*(mileage/10) );
            let minutes = (d2/60)/velocity;
            let seconds = minutes * 60;
            return seconds;
        }

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
