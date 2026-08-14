import { ageGradeTable } from './age-grade-table.js';
export const MIN_AGE = 5;
export const MAX_AGE = 100;
export class RunningAgeGrade {
    // Imported as JSON (see extract-table.mjs) rather than embedded as a huge
    // inline literal, so the class body stays readable and the data can be
    // linted/typed independently of the code that consumes it.
    static table = ageGradeTable;
    gender;
    age;
    constructor(gender, age) {
        this.gender = gender;
        this.age = age;
    }
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
    normalize(event, time) {
        if (!RunningAgeGrade.isAgeInRange(this.age)) {
            return 0;
        }
        const eventData = RunningAgeGrade.getEventData(this.gender, event);
        if (!eventData) {
            throw new Error(`Unknown running age-grade event "${event}" for gender "${this.gender}"`);
        }
        const conversionFactor = eventData.conversions[this.age - MIN_AGE];
        if (!conversionFactor || conversionFactor <= 0) {
            // No data published for this age (common at the youngest/oldest ends
            // of an event's range, e.g. hurdles below a minimum age).
            return 0;
        }
        const gradedStandard = eventData.OC / conversionFactor;
        if (!Number.isFinite(gradedStandard) || gradedStandard <= 0) {
            return 0;
        }
        return time / gradedStandard;
    }
    /** Whether age-grading data exists at all for this age. */
    static isAgeInRange(age) {
        return Number.isFinite(age) && age >= MIN_AGE && age <= MAX_AGE;
    }
    /** All event keys available for a given gender. */
    static getAvailableEvents(gender) {
        return Object.keys(RunningAgeGrade.table[gender] ?? {});
    }
    /** Whether a given event exists for a given gender. */
    static hasEvent(gender, event) {
        return Boolean(RunningAgeGrade.table[gender]?.[event]);
    }
    static getEventData(gender, event) {
        return RunningAgeGrade.table[gender]?.[event];
    }
}
//# sourceMappingURL=grading.js.map