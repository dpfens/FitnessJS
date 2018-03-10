export abstract class PerformanceModel {
  protected t1;
  protected d1;

  constructor(d1: number, t1: number) {
    this.d1 = d1;
    this.t1 = t1;
  }

  public time(d2: number): number { return 0; }

  public distance(t2: number): number { return 0; }

}

export class Riegel extends PerformanceModel {
  /*
    Riegel Running Model
    @description Error rate 4.1% according to http://cs229.stanford.edu/proj2015/247_report.pdf
    @static
    @param {Number} t1 = time
    @param {Number} d1 = old distance
    @param {Number} d2 = new distance
    d1 & d2 must be in the same unit
    @returns {Number} t2 = estimated time to travel d2 in same unit as t1
  */
  public time(d2: number): number {
      if (this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
          return 0;
      }
      return this.t1 * Math.pow( (d2 / this.d1), 1.06 );
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
  public distance(t2: number): number {
      if (this.t1 <= 0 || this.d1 <= 0 || t2 <= 0) {
          return 0;
      }
      return this.d1 * Math.pow(t2, 50 / 53) / Math.pow(this.t1, 50 / 53);
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
  public time(d2: number): number {
      if (this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
          return 0;
      }
      const a = 13.49681 - 0.048865 * this.d1 + 2.438936 / Math.pow(this.d1, 0.7905);
      const b = 13.49681 - 0.048865 * d2 + 2.438936 / Math.pow(d2, 0.7905);
      return (this.t1 / this.d1) * (a / b) * d2;
  }
}

export class VV {
  protected t1;
  protected d1;

  constructor(d1: number, t1: number) {
    this.d1 = d1;
    this.t1 = t1;
  }

  public time(mileage, d2 = 42195.0): number {
      const riegelVelocity = this.riegel_velocity(d2);
      const velocity = 0.16018617 + (0.83076202 * riegelVelocity) + (0.6423826 * (mileage / 10) );
      const minutes = (d2 / 60) / velocity;
      const seconds = minutes * 60;
      return seconds;
  }

  public time2(mileage: number, d2: number, t2: number, distance = 42195.0): number {
      const adjTimerR1: number = this.adj_timer(this.d1, this.t1);
      const adjTimerR2: number = this.adj_timer(d2, t2);
      const kR2R1: number = Math.log(adjTimerR2 / adjTimerR1) / Math.log(d2 / this.d1);
      const kMarathon: number = 1.4510756 + (-0.23797948 * kR2R1) + (-0.01410023 * (mileage / 10) );
      const seconds: number = (adjTimerR2 * Math.pow(distance / d2, kMarathon) );
      return seconds;
  }

  private adj_timer(d1: number, t1: number): number {
      return d1 / (d1 / t1);
  }

  private riegel_velocity(distance: number): number {
      const adjTimer = this.adj_timer(this.d1, this.t1);
      return distance / (adjTimer * Math.pow(distance / this.d1, 1.06) );
  }
}
