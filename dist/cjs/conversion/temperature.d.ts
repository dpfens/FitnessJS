export type TemperatureUnit = 'C' | 'F' | 'K' | 'R';
export declare class TemperatureConverter {
    private value;
    private currentUnit;
    private targetUnit;
    constructor(value: number, unit: TemperatureUnit);
    to(targetUnit: TemperatureUnit): this;
    val(): number;
}
//# sourceMappingURL=temperature.d.ts.map