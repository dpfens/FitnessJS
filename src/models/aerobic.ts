namespace Fit {

  export namespace model {

    export namespace aerobic {

      abstract class PerformanceModel {
        private t1;
        private d1;

        constructor(t1: number, d1: number) {
          this.t1 = t1;
          this.d1 = d1;
        }

        predictTime = function(d2: number): number { return 0}

        predictDistance = function(t2: number): number { return 0}

      }


      export class Riegel extends PerformanceModel {
        /*
          Riegel Running Model
          @description t2 = t1 * (d2/d1) ^ 1.06
          @static
          @param {Number} t1 = time
          @param {Number} d1 = old distance
          @param {Number} d2 = new distance
          d1 & d2 must be in the same unit
          @returns {Number} t2 = estimated time to travel d2 in same unit as t1
        */
        predictTime = function(d2: number): number {
          if(this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
            return 0;
          }
          return this.t1 * Math.pow( (d2/this.d1), 1.06 );
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
        predictDistance = function(t2: number): number {
          if(this.t1 <= 0 || this.d1 <= 0 || t2 <= 0) {
            return 0;
          }
          return this.d1*Math.pow(t2, 50/53)/Math.pow(this.t1, 50/53);
        }

      }

      export class Cameron extends PerformanceModel {
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
        predictTime = function(d2: number): number {
          if(this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
            return 0;
          }
          let a = 13.49681 - 0.048865*this.d1 + 2.438936/Math.pow(this.d1,0.7905);
          let b = 13.49681 - 0.048865*d2 + 2.438936/Math.pow(d2,0.7905);
          return (this.t1/this.d1) * (a/b) * d2;
        }
      }

    }

  }

}
