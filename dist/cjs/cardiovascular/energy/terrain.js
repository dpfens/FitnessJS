"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terrain = exports.SanteeStrategy = exports.PandolfStrategy = void 0;
/**
 * estimates energy expenditure using the Pandolf equation.
 *
 * When to use: For estimating energy expenditure during load carriage
 * on various terrains and slopes.
 */
class PandolfStrategy {
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
    estimate(params) {
        const { weight, speed, load, terrain, slope } = params;
        const totalWeight = weight + load;
        return (1.5 * weight +
            2.0 * totalWeight * Math.pow(load / weight, 2) +
            terrain * totalWeight * (1.5 * Math.pow(speed, 2) + 0.25 * speed * slope));
    }
}
exports.PandolfStrategy = PandolfStrategy;
/**
 * estimates energy expenditure using the Santee equation
 * (a modified version of the Pandolf equation).
 *
 * When to use: For more accurate energy expenditure estimation during
 * downhill walking with loads.
 */
class SanteeStrategy {
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
    estimate(params) {
        const { weight, speed, load, terrain, slope } = params;
        const totalWeight = weight + load;
        const energy = speed * slope;
        const speedSquared = Math.pow(speed, 2);
        const part1 = 1.5 * weight + 2 * Math.pow(load / weight, 2);
        const part2 = terrain * totalWeight * (1.5 * speedSquared + 0.35 * energy);
        const part3_1 = (energy * totalWeight) / 3.5;
        const part3_2 = (totalWeight * Math.pow(slope + 6, 2)) / weight;
        const part3_3 = 25 - speedSquared;
        return part1 + part2 - terrain * (part3_1 - part3_2 + part3_3);
    }
}
exports.SanteeStrategy = SanteeStrategy;
/**
 * Context class for calculating energy expenditure for walking/running
 * on different terrains. Delegates the actual calculation to a
 * pluggable {@link TerrainEnergyExpenditureEstimator}.
 *
 * @class Terrain
 */
class Terrain {
    strategy;
    /**
     * @param strategy The energy expenditure calculation strategy to use
     * (e.g., {@link PandolfStrategy} or {@link SanteeStrategy})
     */
    constructor(strategy) {
        this.strategy = strategy;
    }
    /**
     * Swaps the calculation strategy at runtime.
     * @param strategy The new strategy to use
     */
    setStrategy(strategy) {
        this.strategy = strategy;
    }
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
    estimate(params) {
        return this.strategy.estimate(params);
    }
}
exports.Terrain = Terrain;
//# sourceMappingURL=terrain.js.map