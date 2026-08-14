import { Gender } from "../../enums.js";
/**
 * Age-grading data for a single event: a conversion factor per age
 * (index 0 = age 5, matching the constructor's `age - MIN_AGE` lookup),
 * plus the event's outstanding/world-class comparison time or mark (`OC`)
 * and basic metadata about the event itself.
 */
export interface AgeGradeEventData {
    conversions: number[];
    isRoad: 0 | 1;
    "dist(km)": number;
    OC: number;
}
export type AgeGradeGenderTable = Record<string, AgeGradeEventData>;
export type AgeGradeTable = Record<Gender, AgeGradeGenderTable>;
export declare const ageGradeTable: AgeGradeTable;
//# sourceMappingURL=age-grade-table.d.ts.map