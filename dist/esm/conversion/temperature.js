const temperatureTable = {
    C: {
        F: (c) => c * 9 / 5 + 32,
        K: (c) => c + 273.15,
        R: (c) => c * 9 / 5 + 491.67,
    },
    F: {
        C: (f) => (f - 32) * 5 / 9,
        K: (f) => (f + 459.67) * 5 / 9,
        R: (f) => f + 459.67,
    },
    K: {
        C: (k) => k - 273.15,
        F: (k) => k * 9 / 5 - 459.67,
        R: (k) => k * 9 / 5,
    },
    R: {
        C: (r) => r * 5 / 9 - 273.15,
        F: (r) => r - 459.67,
        K: (r) => r * 5 / 9,
    },
};
export class TemperatureConverter {
    value;
    currentUnit;
    targetUnit;
    constructor(value, unit) {
        this.value = value;
        this.currentUnit = unit;
    }
    to(targetUnit) {
        this.targetUnit = targetUnit;
        return this;
    }
    val() {
        if (this.currentUnit === this.targetUnit) {
            return this.value;
        }
        const conversionFunction = temperatureTable[this.currentUnit][this.targetUnit];
        if (!conversionFunction) {
            throw new Error(`Conversion not possible: °${this.currentUnit} -> °${this.targetUnit}`);
        }
        return conversionFunction(this.value);
    }
}
//# sourceMappingURL=temperature.js.map