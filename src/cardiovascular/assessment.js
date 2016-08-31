var vo2Reserve = function (max, rest) {
    return max - rest;
};
var twelveMinVo2 = function (distance) {
    return 0.0268 * distance - 11.3;
};
var mileSteadyJogVo2 = function (time, hr) {
    return 100.5 - 0.1636 * this.weight - 1.438 * time - 0.1928 * hr;
};
var legErgometry = function (mass, work) {
    return 1.8 * work / mass + 3.5;
};
var armErgometry = function (mass, work) {
    return 3.0 * work / mass;
};
var steppingVo2 = function (height, frequency) {
    return (frequency * 0.2) + (frequency * this.height * 1.8 * 1.33);
};
var stairmasterMets = function (setting) {
    return 0.556 + 7.45 * setting;
};
var foxErgometryVo2max = function (hr5) {
    return 6300.0 - (19.26 * hr5);
};
var treadmillWalkVo2max = function (speed, hr) {
    if (this.gender === Enums.Gender.Female) {
        return 15.1 + (21.8 * speed) - (0.327 * hr) - (0.263 * this.age) + (0.00504 * (hr * this.age)) + (5.48 * 0.0);
    }
    return 15.1 + (21.8 * speed) - (0.327 * hr) - (0.263 * this.age) + (0.00504 * (hr * this.age)) + (5.48 * 1.0);
};
var mileWalkVo2 = function (time, hr) {
    if (this.gender === Enums.Gender.Female) {
        return 132.853 - 0.0769 * this.weight - 0.3877 * this.age + 6.315 * 0.0 - 3.2649 * time - 0.1565 * hr;
    }
    return 132.853 - 0.0769 * this.weight - 0.3877 * this.age + 6.315 * 1.0 - 3.2649 * time - 0.1565 * hr;
};
var mileHalfVo2George = function (time) {
    if (this.gender === Enums.Gender.Female) {
        return 88.02 - (0.1656 * this.weight) - (2.76 * time) + (3.716 * 0.0);
    }
    return 88.02 - (0.1656 * this.weight) - (2.76 * time) + (3.716 * 1.0);
};
var mileHalfVo2Larson = function (time, hr) {
    if (this.gender === Enums.Gender.Female) {
        return 100.16 + (7.30 * 0.0) - (0.164 * this.weight) - (1.273 * time) - (0.1563 * hr);
    }
    return 100.16 + (7.30 * 1.0) - (0.164 * this.weight) - (1.273 * time) - (0.1563 * hr);
};
var stepTestAstrand = function (hr) {
    return 3.744 * ((this.weight + 5) / (hr - 62));
};
var stepTestQueensCollege = function (hr) {
    return 111.33 - (0.42 * hr);
};
var treadmillJoggingVo2max = function (speed, hr) {
    if (this.gender === Enums.Gender.Female) {
        return 54.07 - (0.1938 * this.weight) - (4.47 * speed) + (0.01453 * hr) + (7.062 * 0.0);
    }
    return 54.07 - (0.1938 * this.weight) - (4.47 * speed) + (0.01453 * hr) + (7.062 * 1.0);
};
var treadmillSubmaxVo2SingleStage = function (sm1, hr1, hrmax) {
    if (this.gender === Enums.Gender.Female) {
        return sm1 * ((hrmax - 72) / (hr1 - 72));
    }
    return sm1 * ((hrmax - 61) / (hr1 - 61));
};
var treadmillSubmaxVo2Multistage = function (sm1, hr1, sm2, hr2, hrmax) {
    var b = (sm2 - sm1) / (hr2 - hr1);
    return sm2 + b * (hrmax - hr2);
};
var mileVo2Child = function (time) {
    var bmi = (this.weight / Math.pow(this.height / 100, 2));
    return 108.94 - (8.41 * time) + 0.34 * Math.pow(time, 2) + 0.21 * (this.age) - (0.84 * bmi);
};
var vo2maxBalke = function (time) {
    if (this.gender === Enums.Gender.Female) {
        return 1.38 * time + 5.22;
    }
    return 1.444 * time + 14.99;
};
var vo2maxNaughtonMale = function (time) {
    return (1.61 * time) + 3.60;
};
var vo2maxBruce = function (time, time2, time3) {
    if (this.gender === Enums.Gender.Female) {
        return 4.38 * time - 3.90;
    }
    return 14.76 - 1.379 * time + 0.451 * time2 - 0.012 * time3;
};
var vo2maxElderlyCardiac = function (time) {
    return (2.282 * time) + 8.545;
};
var shuttleRunVo2 = function (speed) {
    return 31.025 + (3.238 * speed) - (3.248 * this.age) + 0.1536 * (this.age * speed);
};
var gilbertGaniels = function (velocity, time) {
    var numerator = 0.000104 * Math.pow(velocity, 2) + 0.182258 * velocity - 4.6;
    var denominator = 0.2989558 * Math.pow(Math.E, -0.1932605 * time) + 0.1894393 * Math.pow(Math.E, -0.012778 * time) + 0.8;
    return numerator / denominator;
};
