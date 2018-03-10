const temperatureTable: any = {
  C: {
    F: function(c: number): number { return c * 9 / 5 + 32; },
    K: function(c: number): number { return c + 273.15; },
    R: function(c: number): number { return c * 9 / 5 + 491.67; },
  },
  F: {
    C: function(f: number): number { return (f - 32) * 5 / 9; },
    K: function(f: number): number { return (f + 459.67) * 5 / 9; },
    R: function(f: number): number { return f + 459.67; },
  },
  K: {
    C: function(k: number): number { return k - 273.15; },
    F: function(k: number): number { return k * 9 / 5 - 459.67; },
    R: function(k: number): number { return k * 9 / 5; },
  },
  R: {
    C: function(r: number): number { return r * 5 / 9 - 273.15; },
    F: function(r: number): number { return r - 459.67; },
    K: function(r: number): number { return r * 5 / 9; },
},
};

export class TemperatureConverter {
    private value;
    private currentUnit;

    constructor(value: number, unit: string) {
      this.value = value;
      this.currentUnit = unit;
    }

    public to = function(targetUnit: number) {
      this.targetUnit = targetUnit;
      return this;
    };

    public val = function(): number {
      const currentUnit: string = this.currentUnit.toUpperCase();
      const targetUnit: string = this.targetUnit.toUpperCase();

      if (!temperatureTable[currentUnit] || !temperatureTable[currentUnit][targetUnit] ) {
        throw new Error(`Conversion not possible: &deg;${this.currentUnit} -> &deg;${this.targetUnit}`);
      }
      const conversionFunction: any = temperatureTable[currentUnit][targetUnit];

      return conversionFunction(this.value);
    };

}
