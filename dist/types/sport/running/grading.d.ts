import type { Gender } from "../../enums.js";
export declare const MIN_AGE = 5;
export declare const MAX_AGE = 100;
export declare class RunningAgeGrade {
    private static readonly table;
    readonly gender: Gender;
    readonly age: number;
    constructor(gender: Gender, age: number);
    /**
     * Age-graded performance ratio for a given event and finish time.
     *
     * A value of 1.0 means the time exactly matches the age-graded standard
     * for this person's age and gender (derived from the event's world-class
     * mark, `OC`, adjusted by the age conversion factor). Lower values are
     * better performances relative to that standard; higher values are worse.
     *
     * @param event official event key, e.g. "5km", "Marathon", "100m"
     * @param time  finish time in seconds (or the event's native unit)
     * @returns the graded ratio, or 0 if the age is out of range or no
     *          conversion data exists for this age/event/gender combination
     */
    normalize(event: string, time: number): number;
    /** Whether age-grading data exists at all for this age. */
    static isAgeInRange(age: number): boolean;
    /** All event keys available for a given gender. */
    static getAvailableEvents(gender: Gender): string[];
    /** Whether a given event exists for a given gender. */
    static hasEvent(gender: Gender, event: string): boolean;
    private static getEventData;
}
//# sourceMappingURL=grading.d.ts.map