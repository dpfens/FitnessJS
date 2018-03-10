const unitTable: any = {};

export class UnitConverter {
  private value;
  private currentUnit;

  constructor(value: number, unit: string) {
    this.value = value;
    this.currentUnit = unit;
  }

  public static addUnit = function(baseUnit: string, prefixed: string, unitMultiplier: number): void {
      unitTable[prefixed] = { base: baseUnit, actual: prefixed, multiplier: unitMultiplier };
  };

  public to = function(targetUnit: number) {
    this.targetUnit = targetUnit;
    return this;
  };

  public val = function(): number {
    // first, convert from the current value to the base unit
    const target = unitTable[this.targetUnit];
    const current = unitTable[this.currentUnit];

    if (!target || !current || target.base !== current.base) {
        throw new Error(`Conversion not possible: ${this.currentUnit} -> ${this.targetUnit}`);
    }

    return this.value * (current.multiplier / target.multiplier);
  };

}

// add the 7 base SI units along with prefixes
const siPrefixes: string[] = ["Y", "Z", "E", "P", "T", "G", "M", "k", "h", "da", "", "d", "c", "m", "u", "n", "p", "f", "a", "z", "y"];
const siFactors: number[] = [24, 21, 18, 15, 12, 9, 6, 3, 2, 1, 0, -1, -2, -3, -6, -9, -12, -15, -18, -21, -24];
const siUnits: string[] = ["g", "b", "L", "m", "A", "cd", "mol", "K", "are", "Pa", "J", "W"];

let base: string;
for (base of siUnits) {
  for (let i = 0; i < siPrefixes.length; i++) {
      UnitConverter.addUnit(base, siPrefixes[i] + base, Math.pow(10, siFactors[i]));
  }
}

// we use the SI gram unit as the base; this allows
// us to convert between SI and English units
UnitConverter.addUnit("g", "ounce", 28.3495231);
UnitConverter.addUnit("g", "oz", 28.3495231);
UnitConverter.addUnit("g", "pound", 453.59237);
UnitConverter.addUnit("g", "lb", 453.59237);

// Time
UnitConverter.addUnit("s", "seconds", 1);
UnitConverter.addUnit("s", "minutes", 60);
UnitConverter.addUnit("s", "hours", 3600000);
UnitConverter.addUnit("s", "days", 86400);
UnitConverter.addUnit("s", "years", 3.154E7);

// Distance
UnitConverter.addUnit("m", "inches", 0.0254);
UnitConverter.addUnit("m", "feet", 0.3048);
UnitConverter.addUnit("m", "miles", 1609.344);
UnitConverter.addUnit("m", "leagues", 5556);
UnitConverter.addUnit("m", "yards", 0.9144);

// Area
UnitConverter.addUnit("m^2", "inches^2", 0.00064516);
UnitConverter.addUnit("m^2", "feet^2", 0.0929);
UnitConverter.addUnit("m^2", "miles^2", 2.59E6);
UnitConverter.addUnit("m^2", "leagues^2", 3.087E7);
UnitConverter.addUnit("m^2", "yards^2", 2.590);
UnitConverter.addUnit("m^2", "acres", 4046.86);

// Volume
UnitConverter.addUnit("m^3", "mm^3", 1e-9);
UnitConverter.addUnit("m^3", "cm^3", 1E-6);
UnitConverter.addUnit("m^3", "m^3", 1);
UnitConverter.addUnit("m^3", "km^3", 1e9);
UnitConverter.addUnit("m^3", "L", 0.001);
UnitConverter.addUnit("m^3", "inches^3", 1.63871E-5);
UnitConverter.addUnit("m^3", "cups", 0.000236588);
UnitConverter.addUnit("m^3", "pints", 0.000473176);
UnitConverter.addUnit("m^3", "quarts", 0.000946353);
UnitConverter.addUnit("m^3", "gal", 0.004329);
UnitConverter.addUnit("m^3", "feet^3", 0.0283168);
UnitConverter.addUnit("m^3", "yards^3", 0.764555);

// Speed
UnitConverter.addUnit("m/s", "cm/s", 0.01);
UnitConverter.addUnit("m/s", "m/s", 1);
UnitConverter.addUnit("m/s", "kps", 1000);
UnitConverter.addUnit("m/s", "m/min", 0.0166667);
UnitConverter.addUnit("m/s", "cm/h", 2.77778e-6);
UnitConverter.addUnit("m/s", "m/h", 0.000277778);
UnitConverter.addUnit("m/s", "kph", 0.277778);
UnitConverter.addUnit("m/s", "mph", 0.44704);
UnitConverter.addUnit("m/s", "ft/s", 0.3048);

// Acceleration
UnitConverter.addUnit("m/s^2", "cm/s^2", 0.01);
UnitConverter.addUnit("m/s^2", "m/s^2", 1);
UnitConverter.addUnit("m/s^2", "km/s^2", 1000);
UnitConverter.addUnit("m/s^2", "in/s^2", 0.0254);
UnitConverter.addUnit("m/s^2", "ft/s^2", 0.3048);
UnitConverter.addUnit("m/s^2", "mi/s^2", 1609.344);

// Force
UnitConverter.addUnit("N", "lbf", 4.44822);
UnitConverter.addUnit("N", "dyne", 1e-5);

// Pressure
UnitConverter.addUnit("Pa", "torr", 133.322);
UnitConverter.addUnit("Pa", "atm", 101325);
UnitConverter.addUnit("Pa", "psi", 6894.76);
UnitConverter.addUnit("Pa", "lbf/in^2", 6894.76);
UnitConverter.addUnit("Pa", "lbf/ft^2", 47.8803);
UnitConverter.addUnit("Pa", "kgf/m^2", 9.807);

// Energy
UnitConverter.addUnit("J", "btu", 1055.06);
UnitConverter.addUnit("J", "ft-lbf", 1.35582);
UnitConverter.addUnit("J", "erg", 1e-7);
UnitConverter.addUnit("J", "hp-h", 2684519.5377);

// Power
UnitConverter.addUnit("W", "hp", 745.7);
UnitConverter.addUnit("W", "ft-lbf/s", 0.74);

// METs
UnitConverter.addUnit("MET", "MET", 1);
UnitConverter.addUnit("MET", "mL/kg/min", 3.5);
UnitConverter.addUnit("MET", "kcal/kg/hr", 3.5);

// Pace
UnitConverter.addUnit("min/mile", "min/mile", 1);
UnitConverter.addUnit("min/mile", "min/km", 0.621371);
UnitConverter.addUnit("min/mile", "hour/km", 0.0103562);
UnitConverter.addUnit("min/mile", "s/m", 0.0372823);
UnitConverter.addUnit("min/mile", "min/m", 0.000621371);
UnitConverter.addUnit("min/mile", "s/100m", 3.72822715);
UnitConverter.addUnit("min/mile", "s/ft", 0.01136361);
UnitConverter.addUnit("min/mile", "min/ft", 0.000189394);
UnitConverter.addUnit("min/mile", "s/yd", 0.0340909);
UnitConverter.addUnit("min/mile", "s/100yd", 3.40909091);
