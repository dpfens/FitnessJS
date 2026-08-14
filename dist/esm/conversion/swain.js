/*
Swain Equation for converting %HRmax to %VO2Max
hrPercentage is the percentage of maximum heart rate
returns percentage of VO2Max as decimal
*/
export function percentVO2Max(hrPercentage) {
    const convertedPercentage = hrPercentage * 100;
    const formulaResult = (convertedPercentage - 37.182) / 0.6463;
    return formulaResult / 100;
}
/*
Swain Equation for converting %VO2Max to %HRMax
vO2MaxPercentage is the percentage of VO2Max
returns percentage of HRMax as decimal
*/
export function percentHrMax(vO2MaxPercentage) {
    const convertedPercentage = vO2MaxPercentage * 100;
    const formulaResult = (0.6463 * convertedPercentage) + 37.182;
    return formulaResult / 100;
}
//# sourceMappingURL=swain.js.map