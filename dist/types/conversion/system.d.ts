export declare class UnitConverter {
    private static unitTable;
    private value;
    private currentUnit;
    private targetUnit;
    constructor(value: number, unit: string);
    to(targetUnit: string): this;
    val(): number;
    static addUnit(base: string, prefixed: string, multiplier: number, overwrite?: boolean): void;
    static addAlias(existing: string, alias: string): void;
}
//# sourceMappingURL=system.d.ts.map