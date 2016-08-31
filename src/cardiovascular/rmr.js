var revisedHB = function () {
    if (this.gender === Enums.Gender.Female) {
        return (447.6 + 9.25 * this.weight) + (3.10 * this.height) - (4.33 * this.age);
    }
    return (88.4 + 13.4 * this.weight) + (4.8 * this.height) - (5.68 * this.age);
};
var msj = function () {
    if (this.gender === Enums.Gender.Female) {
        return (9.99 * this.weight + 6.25 * this.height - 4.92 * this.age - 151);
    }
    return (9.99 * this.weight + 6.25 * this.height - 4.92 * this.age + 5);
};
var kma = function (lbm) {
    return 370 + (21.6 * lbm);
};
var cunningham = function (lbm) {
    return 500 + (22 * lbm);
};
