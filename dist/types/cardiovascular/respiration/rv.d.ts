import { Gender } from "../../enums.js";
export interface ResidualVolumeParams {
    gender: Gender;
    age: number;
    height: number;
    weight: number;
}
/** Params required by strategies that also need body surface area (e.g. O'Brien) */
export interface OBrienResidualVolumeParams extends ResidualVolumeParams {
    bsa: number;
}
/**
 * Strategy interface for residual volume estimation formulas.
 * Generic so strategies with extra param requirements (e.g. O'Brien's bsa)
 * can extend ResidualVolumeParams without polluting the base interface.
 */
export interface ResidualVolumeEstimator<T extends ResidualVolumeParams = ResidualVolumeParams> {
    estimate(params: T): number;
}
/** Normal-weight population regression */
export declare class NormalResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ age, height }: ResidualVolumeParams): number;
}
/** Overweight population regression */
export declare class OverweightResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ age, height }: ResidualVolumeParams): number;
}
/** Berglund regression */
export declare class BerglundResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ gender, age, height, weight }: ResidualVolumeParams): number;
}
/** Black regression */
export declare class BlackResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ age, height }: ResidualVolumeParams): number;
}
/** Boren regression */
export declare class BorenResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ age, height }: ResidualVolumeParams): number;
}
/** Goldman regression */
export declare class GoldmanResidualVolumeEstimator implements ResidualVolumeEstimator {
    estimate({ gender, age, height }: ResidualVolumeParams): number;
}
/** O'Brien regression (requires body surface area) */
export declare class OBrienResidualVolumeEstimator implements ResidualVolumeEstimator<OBrienResidualVolumeParams> {
    estimate({ age, height, bsa }: OBrienResidualVolumeParams): number;
}
/**
 * @class
 * @classdesc estimates residual lung volume using a pluggable regression strategy
 */
export declare class ResidualVolume<T extends ResidualVolumeParams = ResidualVolumeParams> {
    private strategy;
    private params;
    constructor(strategy: ResidualVolumeEstimator<T>, params: T);
    setStrategy(strategy: ResidualVolumeEstimator<T>): void;
    estimate(): number;
}
//# sourceMappingURL=rv.d.ts.map