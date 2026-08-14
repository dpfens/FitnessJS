import { Gender } from "../enums.js";
/** Boyd formula */
export class BoydStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return (0.0333 *
            Math.pow(weight, 0.6157 - 0.0188 * Math.log(weight)) *
            Math.pow(heightCm, 0.3));
    }
}
/** Costeff formula */
export class CosteffStrategy {
    calculate({ weight }) {
        return (4 * weight + 7) / (90 + weight);
    }
}
/** DuBois & DuBois formula */
export class DuboisStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.007184 * Math.pow(weight, 0.425) * Math.pow(heightCm, 0.725);
    }
}
/** Fujimoto formula */
export class FujimotoStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.008883 * Math.pow(weight, 0.444) * Math.pow(heightCm, 0.663);
    }
}
/** Gehan & George formula */
export class GehanGeorgeStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.0235 * Math.pow(weight, 0.51456) * Math.pow(heightCm, 0.42246);
    }
}
/** Haycock formula */
export class HaycockStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.024265 * Math.pow(weight, 0.5378) * Math.pow(heightCm, 0.3964);
    }
}
/** Mosteller formula */
export class MostellerStrategy {
    calculate({ height, weight }) {
        return Math.sqrt(weight * height) / 6;
    }
}
/** Schlich formula (gender-dependent) */
export class SchlichStrategy {
    calculate({ gender, height, weight }) {
        const heightCm = height * 100;
        if (gender === Gender.Female) {
            return 0.000975482 * Math.pow(weight, 0.46) * Math.pow(heightCm, 1.08);
        }
        return 0.000579479 * Math.pow(weight, 0.38) * Math.pow(heightCm, 1.24);
    }
}
/** Shuter & Aslani formula */
export class ShuterAslaniStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.00949 * Math.pow(weight, 0.441) * Math.pow(heightCm, 0.655);
    }
}
/** Takahira formula */
export class TakahiraStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.007241 * Math.pow(weight, 0.425) * Math.pow(heightCm, 0.725);
    }
}
/**
 * Context class for body surface area calculations.
 * Delegates the actual computation to a pluggable SurfaceAreaEstimator.
 * @class
 * @classdesc computes body surface area using a configurable algorithm
 */
export class SurfaceArea {
    strategy;
    params;
    constructor(strategy, gender, height, weight) {
        this.strategy = strategy;
        this.params = { gender, height, weight };
    }
    /**
     * Swap the algorithm used for calculation at runtime.
     */
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    /**
     * @returns {Number} surface area in meters^2, using the current strategy
     */
    calculate() {
        return this.strategy.calculate(this.params);
    }
}
//# sourceMappingURL=surface-area.js.map