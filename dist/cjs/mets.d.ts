export interface MET {
    value: number;
    code: string;
    description: string;
}
export declare function byCode(code: string): Readonly<MET> | null;
export declare function estimateMETs(kcal: number, kg: number, hours: number): number;
export declare function estimateKg(kcal: number, mets: number, hours: number): number;
export declare function estimateHours(kcal: number, mets: number, kg: number): number;
export declare function toKCal(mets: number, weight: number): number;
export declare function fromVO2(vO2: number): number;
export declare function karvonen(mets: number, intensity: number): number;
export declare function target(vO2Max: number, intensity: number): number;
//# sourceMappingURL=mets.d.ts.map