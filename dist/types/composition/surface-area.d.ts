import { Gender } from "../enums.js";
export interface SurfaceAreaParams {
    gender: Gender;
    height: number;
    weight: number;
}
/**
 * Strategy interface for body surface area calculation algorithms.
 */
export interface SurfaceAreaEstimator {
    calculate(params: SurfaceAreaParams): number;
}
/** Boyd formula */
export declare class BoydStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Costeff formula */
export declare class CosteffStrategy implements SurfaceAreaEstimator {
    calculate({ weight }: SurfaceAreaParams): number;
}
/** DuBois & DuBois formula */
export declare class DuboisStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Fujimoto formula */
export declare class FujimotoStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Gehan & George formula */
export declare class GehanGeorgeStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Haycock formula */
export declare class HaycockStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Mosteller formula */
export declare class MostellerStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Schlich formula (gender-dependent) */
export declare class SchlichStrategy implements SurfaceAreaEstimator {
    calculate({ gender, height, weight }: SurfaceAreaParams): number;
}
/** Shuter & Aslani formula */
export declare class ShuterAslaniStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/** Takahira formula */
export declare class TakahiraStrategy implements SurfaceAreaEstimator {
    calculate({ height, weight }: SurfaceAreaParams): number;
}
/**
 * Context class for body surface area calculations.
 * Delegates the actual computation to a pluggable SurfaceAreaEstimator.
 * @class
 * @classdesc computes body surface area using a configurable algorithm
 */
export declare class SurfaceArea {
    private strategy;
    private params;
    constructor(strategy: SurfaceAreaEstimator, gender: Gender, height: number, weight: number);
    /**
     * Swap the algorithm used for calculation at runtime.
     */
    setStrategy(strategy: SurfaceAreaEstimator): void;
    /**
     * @returns {Number} surface area in meters^2, using the current strategy
     */
    calculate(): number;
}
//# sourceMappingURL=surface-area.d.ts.map