var hrMax = function () {
    return 208.0 - (0.7 * this.age);
};
var hrMaxGellish = function () {
    return 206.9 - (0.67 * this.age);
};
var meanArterialPressure = function (diastolic_bp, systolic_bp) {
    return ((2 * diastolic_bp) + systolic_bp) / 3;
};
var targetHR = function (intensity, rest, max) {
    return intensity * (max - rest) + rest;
};
var rvBerglund = function () {
    return (0.0115 * this.age) + (0.019 * this.height) - 2.24;
};
var rvBoren = function () {
    return (0.022 * this.age) + (0.0198 * this.height) - (0.015 * this.weight) - 1.54;
};
var rvGoldman = function () {
    return (0.017 * this.age) + (0.027 * this.height) - 3.477;
};
var rvObrienFemale = function (bsa) {
    return (0.03 * this.age) + (0.0387 * this.height) - (0.73 * bsa) - 4.78;
};
var metsEstimator = function (maxHR, restingHR) {
    var hrIndex = maxHR / restingHR;
    return 6.0 * hrIndex - 5;
};
