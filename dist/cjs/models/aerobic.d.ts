export interface DistanceEstimatable {
    distance(t2: number): number;
}
export interface TimeEstimatable {
    time(d2: number): number;
}
/**
 * Abstract base class for aerobic performance models.
 * @class PerformanceModel
 * @abstract
 */
declare abstract class PerformanceModel {
    protected t1: number;
    protected d1: number;
    /**
     * @constructor
     * @param {number} d1 - Initial distance
     * @param {number} t1 - Initial time
     */
    constructor(d1: number, t1: number);
    /**
     * Estimate time for a given distance.
     * @abstract
     * @param {number} d2 - Target distance
     * @returns {number} Estimated time
     */
    time(_d2: number): number;
    /**
     * Estimate distance for a given time.
     * @abstract
     * @param {number} t2 - Target time
     * @returns {number} Estimated distance
     */
    distance(_t2: number): number;
}
/**
 * Riegel Running Model for estimating performance.
 * @class Riegel
 * @extends PerformanceModel
 * @implements DistanceEstimatable, TimeEstimatable
 */
export declare class Riegel extends PerformanceModel implements DistanceEstimatable, TimeEstimatable {
    private factor;
    static readonly RUNNINGMEN: number;
    static readonly RUNNINGMEN40: number;
    static readonly RUNNINGMEN50: number;
    static readonly RUNNINGMEN60: number;
    static readonly RUNNINGMEN70: number;
    static readonly RUNNINGWOMEN: number;
    static readonly SWIMMINGMEN: number;
    static readonly SWIMMINGWOMEN: number;
    static readonly NORDICMEN: number;
    static readonly RACEWALKMEN: number;
    static readonly ROLLERSKATINGMEN: number;
    static readonly CYCLINGMEN: number;
    static readonly SPEEDSKATINGMEN: number;
    /**
     * @constructor
     * @param {number} d1 - Initial distance
     * @param {number} t1 - Initial time
     * @param {number} [factor=1.06] - Fatigue factor
     */
    constructor(d1: number, t1: number, factor?: number);
    /**
     * Estimate time for a given distance using Riegel's model.
     * @param {number} d2 - Target distance
     * @returns {number} Estimated time
     * @example
     * const riegel = new Fit.models.aerobic.Riegel(10000, 3600, Riegel.RUNNINGMEN);
     * const estimatedTime = riegel.time(21097); // Estimate half-marathon time based on 10K performance
     */
    time(d2: number): number;
    /**
     * Estimate distance for a given time using Riegel's model.
     * @param {number} t2 - Target time
     * @returns {number} Estimated distance
     * @example
     * const riegel = new Fit.models.aerobic.Riegel(5000, 1200, Riegel.RUNNINGWOMEN);
     * const estimatedDistance = riegel.distance(3600); // Estimate distance covered in 1 hour based on 5K performance
     */
    distance(t2: number): number;
}
/**
 * Cameron Running Model for estimating performance.
 * @class Cameron
 * @extends PerformanceModel
 * @implements DistanceEstimatable, TimeEstimatable
 */
export declare class Cameron extends PerformanceModel implements DistanceEstimatable, TimeEstimatable {
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
    time(d2: number): number;
}
export declare class VV implements TimeEstimatable {
    protected t1: number;
    protected d1: number;
    /**
     * @constructor
     * @param {number} d1 - Initial distance
     * @param {number} t1 - Initial time
     */
    constructor(d1: number, t1: number);
    protected adj_timer(d1: number, t1: number): number;
    protected riegel_velocity(distance: number): number;
    /**
     * Estimate time for a given mileage using the VV model.
     * @param {number} mileage - Weekly mileage
     * @param {number} [d2=42195.0] - Target distance (default is marathon distance in meters)
     * @returns {number} Estimated time in seconds
     * @example
     * const vv = new Fit.models.aerobic.VV(10000, 2400); // 10K in 40 minutes
     * const marathonTime = vv.time(50); // Estimate marathon time for 50 miles per week
     */
    time(mileage: number, d2?: number): number;
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
    time2(mileage: number, d2: number, t2: number, distance?: number): number;
}
export {};
//# sourceMappingURL=aerobic.d.ts.map