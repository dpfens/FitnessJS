export type TemperatureUnit = 'C' | 'F' | 'K' | 'R';

type ConversionFn = (value: number) => number;

const temperatureTable: Record<TemperatureUnit, Partial<Record<TemperatureUnit, ConversionFn>>> = {
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
  private value: number;
  private currentUnit: TemperatureUnit;
  private targetUnit!: TemperatureUnit;

  constructor(value: number, unit: TemperatureUnit) {
    this.value = value;
    this.currentUnit = unit;
  }

  to(targetUnit: TemperatureUnit): this {
    this.targetUnit = targetUnit;
    return this;
  }

  val(): number {
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