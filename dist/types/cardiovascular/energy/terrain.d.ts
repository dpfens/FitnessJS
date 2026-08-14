/**
 * Parameters required for energy expenditure calculations.
 */
export interface TerrainEnergyExpenditureParams {
    /** Body weight of the individual, in kilograms */
    weight: number;
    /** Walking/running speed, in meters per second */
    speed: number;
    /** External load carried, in kilograms */
    load: number;
    /** Terrain coefficient (e.g., 1.0 for treadmill, 1.2 for dirt road, etc.) */
    terrain: number;
    /** Slope in decimal form (e.g., 0.05 for 5% grade) */
    slope: number;
}
/**
 * Strategy interface for energy expenditure calculation algorithms.
 * Implement this to add new equations without modifying existing code.
 */
export interface TerrainEnergyExpenditureEstimator {
    /**
     * estimates energy expenditure in watts.
     * @param params Parameters required for the calculation
     * @returns Energy expenditure in watts
     */
    estimate(params: TerrainEnergyExpenditureParams): number;
}
/**
 * estimates energy expenditure using the Pandolf equation.
 *
 * When to use: For estimating energy expenditure during load carriage
 * on various terrains and slopes.
 */
export declare class PandolfStrategy implements TerrainEnergyExpenditureEstimator {
    /**
     * @param params Parameters required for the calculation
     * @returns Energy expenditure in watts
     *
     * @example
     * const strategy = new PandolfStrategy();
     * const energyExpenditure = strategy.estimate({
     *   weight: 70,
     *   speed: 1.4,
     *   load: 10,
     *   terrain: 1.2,
     *   slope: 0.03,
     * });
     * console.log(energyExpenditure);
     */
    estimate(params: TerrainEnergyExpenditureParams): number;
}
/**
 * estimates energy expenditure using the Santee equation
 * (a modified version of the Pandolf equation).
 *
 * When to use: For more accurate energy expenditure estimation during
 * downhill walking with loads.
 */
export declare class SanteeStrategy implements TerrainEnergyExpenditureEstimator {
    /**
     * @param params Parameters required for the calculation
     * @returns Energy expenditure in watts
     *
     * @example
     * const strategy = new SanteeStrategy();
     * const energyExpenditure = strategy.estimate({
     *   weight: 70,
     *   speed: 1.4,
     *   load: 10,
     *   terrain: 1.2,
     *   slope: 0.03,
     * });
     * console.log(energyExpenditure);
     */
    estimate(params: TerrainEnergyExpenditureParams): number;
}
/**
 * Context class for calculating energy expenditure for walking/running
 * on different terrains. Delegates the actual calculation to a
 * pluggable {@link TerrainEnergyExpenditureEstimator}.
 *
 * @class Terrain
 */
export declare class Terrain {
    private strategy;
    /**
     * @param strategy The energy expenditure calculation strategy to use
     * (e.g., {@link PandolfStrategy} or {@link SanteeStrategy})
     */
    constructor(strategy: TerrainEnergyExpenditureEstimator);
    /**
     * Swaps the calculation strategy at runtime.
     * @param strategy The new strategy to use
     */
    setStrategy(strategy: TerrainEnergyExpenditureEstimator): void;
    /**
     * estimates energy expenditure using the currently assigned strategy.
     * @param params Parameters required for the calculation
     * @returns Energy expenditure in watts
     *
     * @example
     * const terrain = new Terrain(new PandolfStrategy());
     * const energyExpenditure = terrain.estimate({
     *   weight: 70,
     *   speed: 1.4,
     *   load: 10,
     *   terrain: 1.2,
     *   slope: 0.03,
     * });
     * console.log(energyExpenditure);
     *
     * // Swap strategies without changing calling code
     * terrain.setStrategy(new SanteeStrategy());
     * const santeeResult = terrain.estimate({
     *   weight: 70,
     *   speed: 1.4,
     *   load: 10,
     *   terrain: 1.2,
     *   slope: 0.03,
     * });
     */
    estimate(params: TerrainEnergyExpenditureParams): number;
}
//# sourceMappingURL=terrain.d.ts.map