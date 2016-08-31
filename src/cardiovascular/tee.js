var childSedentaryTee = function () {
    if (this.gender === Enums.Gender.Female) {
        return 135.3 - (30.8 * this.age) + 1 * ((10 * this.weight) + (934 * this.height));
    }
    return 88.5 - (61.9 * this.age) + 1 * ((26.7 * this.weight) + (903 * this.height));
};
var childLowTee = function () {
    if (this.gender === Enums.Gender.Female) {
        return 135.3 - (30.8 * this.age) + 1.16 * ((10 * this.weight) + (934 * this.height));
    }
    return 88.5 - (61.9 * this.age) + 1.13 * ((26.7 * this.weight) + (903 * this.height));
};
var childActiveTee = function () {
    if (this.gender === Enums.Gender.Female) {
        return 135.3 - (30.8 * this.age) + 1.31 * ((10 * this.weight) + (934 * this.height));
    }
    return 88.5 - (61.9 * this.age) + 1.26 * ((26.7 * this.weight) + (903 * this.height));
};
var childVeryActiveTee = function () {
    if (this.gender === Enums.Gender.Female) {
        return 135.3 - (30.8 * this.age) + 1.56 * ((10 * this.weight) + (934 * this.height));
    }
    return 88.5 - (61.9 * this.age) + 1.42 * ((26.7 * this.weight) + (903 * this.height));
};
var adultSedentaryTee = function () {
    if (this.gender === Enums.Gender.Female) {
        return 354 - (6.91 * this.age) + 1 * ((9.36 * this.weight) + (726 * this.height));
    }
    return 662 - (9.53 * this.age) + 1 * ((15.9 * this.weight) + (540 * this.height));
};
var adultLowTee = function () {
    if (this.gender === Enums.Gender.Female) {
        return 662 - (9.53 * this.age) + 1.12 * ((15.9 * this.weight) + (540 * this.height));
    }
    return 662 - (9.53 * this.age) + 1.11 * ((15.9 * this.weight) + (540 * this.height));
};
var adultActiveTee = function () {
    if (this.gender === Enums.Gender.Female) {
        return 662 - (9.53 * this.age) + 1.27 * ((15.9 * this.weight) + (540 * this.height));
    }
    return 662 - (9.53 * this.age) + 1.25 * ((15.9 * this.weight) + (540 * this.height));
};
var adultVeryActiveTee = function () {
    if (this.gender === Enums.Gender.Female) {
        return 662 - (9.53 * this.age) + 1.45 * ((15.9 * this.weight) + (540 * this.height));
    }
    return 662 - (9.53 * this.age) + 1.48 * ((15.9 * this.weight) + (540 * this.height));
};
