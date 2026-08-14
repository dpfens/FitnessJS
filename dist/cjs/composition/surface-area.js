"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurfaceArea = exports.TakahiraStrategy = exports.ShuterAslaniStrategy = exports.SchlichStrategy = exports.MostellerStrategy = exports.HaycockStrategy = exports.GehanGeorgeStrategy = exports.FujimotoStrategy = exports.DuboisStrategy = exports.CosteffStrategy = exports.BoydStrategy = void 0;
const enums_js_1 = require("../enums.js");
/** Boyd formula */
class BoydStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return (0.0333 *
            Math.pow(weight, 0.6157 - 0.0188 * Math.log(weight)) *
            Math.pow(heightCm, 0.3));
    }
}
exports.BoydStrategy = BoydStrategy;
/** Costeff formula */
class CosteffStrategy {
    calculate({ weight }) {
        return (4 * weight + 7) / (90 + weight);
    }
}
exports.CosteffStrategy = CosteffStrategy;
/** DuBois & DuBois formula */
class DuboisStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.007184 * Math.pow(weight, 0.425) * Math.pow(heightCm, 0.725);
    }
}
exports.DuboisStrategy = DuboisStrategy;
/** Fujimoto formula */
class FujimotoStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.008883 * Math.pow(weight, 0.444) * Math.pow(heightCm, 0.663);
    }
}
exports.FujimotoStrategy = FujimotoStrategy;
/** Gehan & George formula */
class GehanGeorgeStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.0235 * Math.pow(weight, 0.51456) * Math.pow(heightCm, 0.42246);
    }
}
exports.GehanGeorgeStrategy = GehanGeorgeStrategy;
/** Haycock formula */
class HaycockStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.024265 * Math.pow(weight, 0.5378) * Math.pow(heightCm, 0.3964);
    }
}
exports.HaycockStrategy = HaycockStrategy;
/** Mosteller formula */
class MostellerStrategy {
    calculate({ height, weight }) {
        return Math.sqrt(weight * height) / 6;
    }
}
exports.MostellerStrategy = MostellerStrategy;
/** Schlich formula (gender-dependent) */
class SchlichStrategy {
    calculate({ gender, height, weight }) {
        const heightCm = height * 100;
        if (gender === enums_js_1.Gender.Female) {
            return 0.000975482 * Math.pow(weight, 0.46) * Math.pow(heightCm, 1.08);
        }
        return 0.000579479 * Math.pow(weight, 0.38) * Math.pow(heightCm, 1.24);
    }
}
exports.SchlichStrategy = SchlichStrategy;
/** Shuter & Aslani formula */
class ShuterAslaniStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.00949 * Math.pow(weight, 0.441) * Math.pow(heightCm, 0.655);
    }
}
exports.ShuterAslaniStrategy = ShuterAslaniStrategy;
/** Takahira formula */
class TakahiraStrategy {
    calculate({ height, weight }) {
        const heightCm = height * 100;
        return 0.007241 * Math.pow(weight, 0.425) * Math.pow(heightCm, 0.725);
    }
}
exports.TakahiraStrategy = TakahiraStrategy;
/**
 * Context class for body surface area calculations.
 * Delegates the actual computation to a pluggable SurfaceAreaEstimator.
 * @class
 * @classdesc computes body surface area using a configurable algorithm
 */
class SurfaceArea {
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
exports.SurfaceArea = SurfaceArea;
//# sourceMappingURL=surface-area.js.map