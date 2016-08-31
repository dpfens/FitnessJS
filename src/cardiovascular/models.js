"use strict";
var riegel = function (t1, d1, d2) {
    if (t1 <= 0 || d1 <= 0 || d2 <= 0) {
        return 0;
    }
    return t1 * Math.pow((d2 / d1), 1.06);
};
exports.riegel = riegel;
var cameron = function (t1, d1, d2) {
    if (t1 <= 0 || d1 <= 0 || d2 <= 0) {
        return 0;
    }
    var a = 13.49681 - 0.048865 * d1 + 2.438936 / Math.pow(d1, 0.7905);
    var b = 13.49681 - 0.048865 * d2 + 2.438936 / Math.pow(d2, 0.7905);
    return (t1 / d1) * (a / b) * d2;
};
exports.cameron = cameron;
