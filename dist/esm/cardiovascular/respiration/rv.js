import { Gender } from "../../enums.js";
/** Normal-weight population regression */
export class NormalResidualVolumeEstimator {
    estimate({ age, height }) {
        const heightCm = height * 100;
        return 0.0275 * age + 0.0189 * heightCm - 2.6139;
    }
}
/** Overweight population regression */
export class OverweightResidualVolumeEstimator {
    estimate({ age, height }) {
        const heightCm = height * 100;
        return 0.0277 * age + 0.0138 * heightCm - 2.3967;
    }
}
/** Berglund regression */
export class BerglundResidualVolumeEstimator {
    estimate({ gender, age, height, weight }) {
        const heightCm = height * 100;
        if (gender === Gender.Female) {
            return 0.007 * age + 0.0268 * height - 3.42;
        }
        return 0.022 * age + 0.0198 * heightCm - 0.015 * weight - 1.54;
    }
}
/** Black regression */
export class BlackResidualVolumeEstimator {
    estimate({ age, height }) {
        const heightCm = height * 100;
        return 0.21 * age + 0.023 * heightCm - 2.978;
    }
}
/** Boren regression */
export class BorenResidualVolumeEstimator {
    estimate({ age, height }) {
        const heightCm = height * 100;
        return 0.0115 * age + 0.019 * heightCm - 2.24;
    }
}
/** Goldman regression */
export class GoldmanResidualVolumeEstimator {
    estimate({ gender, age, height }) {
        const heightCm = height * 100;
        if (gender === Gender.Female) {
            return 0.009 * age + 0.032 * heightCm - 3.9;
        }
        return 0.017 * age + 0.027 * heightCm - 3.477;
    }
}
/** O'Brien regression (requires body surface area) */
export class OBrienResidualVolumeEstimator {
    estimate({ age, height, bsa }) {
        const heightCm = height * 100;
        return 0.03 * age + 0.0387 * heightCm - 0.73 * bsa - 4.78;
    }
}
/**
 * @class
 * @classdesc estimates residual lung volume using a pluggable regression strategy
 */
export class ResidualVolume {
    strategy;
    params;
    constructor(strategy, params) {
        this.strategy = strategy;
        this.params = params;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    estimate() {
        return this.strategy.estimate(this.params);
    }
}
//# sourceMappingURL=rv.js.map