var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }
        var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function () { }, fBound = function () {
            return fToBind.apply(this instanceof fNOP
                ? this
                : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
        if (this.prototype) {
            fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();
        return fBound;
    };
}
Math.log10 = Math.log10 || function (x) {
    return Math.log(x) / Math.LN10;
};
Date.prototype.delta = function (unit, date) {
    if (date === void 0) { date = new Date(); }
    var units = {
        years: 1000 * 60 * 60 * 24 * 365,
        days: 1000 * 60 * 60 * 24,
        hours: 1000 * 60 * 60,
        minutes: 1000 * 60,
        seconds: 1000,
        milliseconds: 1
    }, difference = this.getTime() - date.getTime();
    return difference / units[unit];
};
var Fit;
(function (Fit) {
    var conversion;
    (function (conversion) {
        var unitTable = {};
        var UnitConverter = (function () {
            function UnitConverter(value, unit) {
                this.to = function (targetUnit) {
                    this.targetUnit = targetUnit;
                    return this;
                };
                this.val = function () {
                    var target = unitTable[this.targetUnit];
                    var current = unitTable[this.currentUnit];
                    if (!target || !current || target.base != current.base) {
                        throw new Error("Conversion not possible: " + this.currentUnit + " -> " + this.targetUnit);
                    }
                    return this.value * (current.multiplier / target.multiplier);
                };
                this.value = value;
                this.currentUnit = unit;
            }
            UnitConverter.addUnit = function (base, prefixed, multiplier) {
                unitTable[prefixed] = { base: base, actual: prefixed, multiplier: multiplier };
            };
            return UnitConverter;
        }());
        conversion.UnitConverter = UnitConverter;
        var siPrefixes = ['Y', 'Z', 'E', 'P', 'T', 'G', 'M', 'k', 'h', 'da', '', 'd', 'c', 'm', 'u', 'n', 'p', 'f', 'a', 'z', 'y'];
        var siFactors = [24, 21, 18, 15, 12, 9, 6, 3, 2, 1, 0, -1, -2, -3, -6, -9, -12, -15, -18, -21, -24];
        var siUnits = ['g', 'b', 'L', 'm', 'A', 'cd', 'mol', 'K', 'are', 'Pa', 'J', 'W',];
        for (var j = 0; j < siUnits.length; j++) {
            var base = siUnits[j];
            for (var i = 0; i < siPrefixes.length; i++) {
                UnitConverter.addUnit(base, siPrefixes[i] + base, Math.pow(10, siFactors[i]));
            }
        }
        UnitConverter.addUnit('g', 'ounce', 28.3495231);
        UnitConverter.addUnit('g', 'oz', 28.3495231);
        UnitConverter.addUnit('g', 'pound', 453.59237);
        UnitConverter.addUnit('g', 'lb', 453.59237);
        UnitConverter.addUnit('s', 'seconds', 1);
        UnitConverter.addUnit('s', 'minutes', 60);
        UnitConverter.addUnit('s', 'hours', 3600000);
        UnitConverter.addUnit('s', 'days', 86400);
        UnitConverter.addUnit('s', 'years', 3.154E7);
        UnitConverter.addUnit('m', 'inches', 0.0254);
        UnitConverter.addUnit('m', 'feet', 0.3048);
        UnitConverter.addUnit('m', 'miles', 1609.344);
        UnitConverter.addUnit('m', 'leagues', 5556);
        UnitConverter.addUnit('m', 'yards', 0.9144);
        UnitConverter.addUnit('m^2', 'inches^2', 0.00064516);
        UnitConverter.addUnit('m^2', 'feet^2', 0.0929);
        UnitConverter.addUnit('m^2', 'miles^2', 2.59E6);
        UnitConverter.addUnit('m^2', 'leagues^2', 3.087E7);
        UnitConverter.addUnit('m^2', 'yards^2', 2.590);
        UnitConverter.addUnit('m^2', 'acres', 4046.86);
        UnitConverter.addUnit('m^3', 'mm^3', 1e-9);
        UnitConverter.addUnit('m^3', 'cm^3', 1E-6);
        UnitConverter.addUnit('m^3', 'm^3', 1);
        UnitConverter.addUnit('m^3', 'km^3', 1e9);
        UnitConverter.addUnit('m^3', 'L', 0.001);
        UnitConverter.addUnit('m^3', 'inches^3', 1.63871E-5);
        UnitConverter.addUnit('m^3', 'cups', 0.000236588);
        UnitConverter.addUnit('m^3', 'pints', 0.000473176);
        UnitConverter.addUnit('m^3', 'quarts', 0.000946353);
        UnitConverter.addUnit('m^3', 'gal', 0.004329);
        UnitConverter.addUnit('m^3', 'feet^3', 0.0283168);
        UnitConverter.addUnit('m^3', 'yards^3', 0.764555);
        UnitConverter.addUnit('m/s', 'cm/s', 0.01);
        UnitConverter.addUnit('m/s', 'm/s', 1);
        UnitConverter.addUnit('m/s', 'kps', 1000);
        UnitConverter.addUnit('m/s', 'm/min', 0.0166667);
        UnitConverter.addUnit('m/s', 'cm/h', 2.77778e-6);
        UnitConverter.addUnit('m/s', 'm/h', 0.000277778);
        UnitConverter.addUnit('m/s', 'kph', 0.277778);
        UnitConverter.addUnit('m/s', 'mph', 0.44704);
        UnitConverter.addUnit('m/s', 'ft/s', 0.3048);
        UnitConverter.addUnit('m/s^2', 'cm/s^2', 0.01);
        UnitConverter.addUnit('m/s^2', 'm/s^2', 1);
        UnitConverter.addUnit('m/s^2', 'km/s^2', 1000);
        UnitConverter.addUnit('m/s^2', 'in/s^2', 0.0254);
        UnitConverter.addUnit('m/s^2', 'ft/s^2', 0.3048);
        UnitConverter.addUnit('m/s^2', 'mi/s^2', 1609.344);
        UnitConverter.addUnit('N', 'lbf', 4.44822);
        UnitConverter.addUnit('N', 'dyne', 1e-5);
        UnitConverter.addUnit('Pa', 'torr', 133.322);
        UnitConverter.addUnit('Pa', 'atm', 101325);
        UnitConverter.addUnit('Pa', 'psi', 6894.76);
        UnitConverter.addUnit('Pa', 'lbf/in^2', 6894.76);
        UnitConverter.addUnit('Pa', 'lbf/ft^2', 47.8803);
        UnitConverter.addUnit('Pa', 'kgf/m^2', 9.807);
        UnitConverter.addUnit('J', 'btu', 1055.06);
        UnitConverter.addUnit('J', 'ft-lbf', 1.35582);
        UnitConverter.addUnit('J', 'erg', 1e-7);
        UnitConverter.addUnit('J', 'hp-h', 2684519.5377);
        UnitConverter.addUnit('W', 'hp', 745.7);
        UnitConverter.addUnit('W', 'ft-lbf/s', 0.74);
        UnitConverter.addUnit('MET', 'MET', 1);
        UnitConverter.addUnit('MET', 'mL/kg/min', 3.5);
        UnitConverter.addUnit('MET', 'kcal/kg/hr', 3.5);
        UnitConverter.addUnit('min/mile', 'min/mile', 1);
        UnitConverter.addUnit('min/mile', 'min/km', 0.621371);
        UnitConverter.addUnit('min/mile', 'hour/km', 0.0103562);
        UnitConverter.addUnit('min/mile', 's/m', 0.0372823);
        UnitConverter.addUnit('min/mile', 'min/m', 0.000621371);
        UnitConverter.addUnit('min/mile', 's/100m', 3.72822715);
        UnitConverter.addUnit('min/mile', 's/ft', 0.01136361);
        UnitConverter.addUnit('min/mile', 'min/ft', 0.000189394);
        UnitConverter.addUnit('min/mile', 's/yd', 0.0340909);
        UnitConverter.addUnit('min/mile', 's/100yd', 3.40909091);
    })(conversion = Fit.conversion || (Fit.conversion = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var conversion;
    (function (conversion) {
        var SwainConverter;
        (function (SwainConverter) {
            function percentVO2Max(hrPercentage) {
                var convertedPercentage = hrPercentage * 100;
                var formulaResult = (convertedPercentage - 37.182) / 0.6463;
                return formulaResult / 100;
            }
            SwainConverter.percentVO2Max = percentVO2Max;
            function percentHrMax(vO2MaxPercentage) {
                var convertedPercentage = vO2MaxPercentage * 100;
                var formulaResult = (0.6463 * convertedPercentage) + 37.182;
                return formulaResult / 100;
            }
            SwainConverter.percentHrMax = percentHrMax;
        })(SwainConverter = conversion.SwainConverter || (conversion.SwainConverter = {}));
    })(conversion = Fit.conversion || (Fit.conversion = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var conversion;
    (function (conversion) {
        var temperatureTable = {
            C: {
                F: function (c) { return c * 9 / 5 + 32; },
                K: function (c) { return c + 273.15; },
                R: function (c) { return c * 9 / 5 + 491.67; }
            },
            F: {
                C: function (f) { return (f - 32) * 5 / 9; },
                K: function (f) { return (f + 459.67) * 5 / 9; },
                R: function (f) { return f + 459.67; }
            },
            K: {
                C: function (k) { return k - 273.15; },
                F: function (k) { return k * 9 / 5 - 459.67; },
                R: function (k) { return k * 9 / 5; }
            },
            R: {
                C: function (r) { return r * 5 / 9 - 273.15; },
                F: function (r) { return r - 459.67; },
                K: function (r) { return r * 5 / 9; }
            }
        };
        var TemperatureConverter = (function () {
            function TemperatureConverter(value, unit) {
                this.to = function (targetUnit) {
                    this.targetUnit = targetUnit;
                    return this;
                };
                this.val = function () {
                    var currentUnit = this.currentUnit.toUpperCase();
                    var targetUnit = this.targetUnit.toUpperCase();
                    if (!temperatureTable[currentUnit] || !temperatureTable[currentUnit][targetUnit]) {
                        throw new Error("Conversion not possible: &deg;" + this.currentUnit + " -> &deg;" + this.targetUnit);
                    }
                    var conversionFunction = temperatureTable[currentUnit][targetUnit];
                    return conversionFunction(this.value);
                };
                this.value = value;
                this.currentUnit = unit;
            }
            return TemperatureConverter;
        }());
        conversion.TemperatureConverter = TemperatureConverter;
    })(conversion = Fit.conversion || (Fit.conversion = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    (function (Gender) {
        Gender[Gender["Male"] = 0] = "Male";
        Gender[Gender["Female"] = 1] = "Female";
    })(Fit.Gender || (Fit.Gender = {}));
    var Gender = Fit.Gender;
    (function (Race) {
        Race[Race["Asian"] = 0] = "Asian";
        Race[Race["Black"] = 1] = "Black";
        Race[Race["Hispanic"] = 2] = "Hispanic";
    })(Fit.Race || (Fit.Race = {}));
    var Race = Fit.Race;
    (function (PAL) {
        PAL[PAL["Sedentary"] = 0] = "Sedentary";
        PAL[PAL["Low"] = 1] = "Low";
        PAL[PAL["Active"] = 2] = "Active";
        PAL[PAL["VeryActive"] = 3] = "VeryActive";
    })(Fit.PAL || (Fit.PAL = {}));
    var PAL = Fit.PAL;
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var mets;
    (function (mets_1) {
        var MET = (function () {
            function MET(value, code, description) {
                this.value = value;
                this.code = code;
                this.description = description;
            }
            return MET;
        }());
        var mets = [
            new MET(14.0, "01003", "bicycling, mountain, uphill, vigorous"),
            new MET(16.0, "01004", "bicycling, mountain, competitive, racing"),
            new MET(8.5, "01008", "bicycling, BMX"),
            new MET(8.5, "01009", "bicycling, mountain, general"),
            new MET(4.0, "01010", "bicycling, <10 mph, leisure, to work or for pleasure (Taylor Code 115)"),
            new MET(6.8, "01011", "bicycling, to/from work, self selected pace"),
            new MET(5.8, "01013", "bicycling, on dirt or farm road, moderate pace"),
            new MET(7.5, "01015", "bicycling, general"),
            new MET(3.5, "01018", "bicycling, leisure, 5.5 mph"),
            new MET(6.8, "01020", "bicycling, 10-11.9 mph, leisure, slow, light effort"),
            new MET(8.0, "01030", "bicycling, 12-13.9 mph, leisure, moderate effort"),
            new MET(10.0, "01040", "bicycling, 14-15.9 mph, racing or leisure, fast, vigorous effort"),
            new MET(12.0, "01050", "bicycling, 16-19 mph, racing/not drafting or > 19 mph drafting, very fast, racing general"),
            new MET(15.8, "01060", "bicycling, > 20 mph, racing, not drafting"),
            new MET(8.5, "01065", "bicycling, 12 mph, seated, hands on brake hoods or bar drops, 80 rpm"),
            new MET(9.0, "01066", "bicycling, 12 mph, standing, hands on brake hoods, 60 rpm"),
            new MET(5.0, "01070", "unicycling"),
            new MET(2.3, "02001", "activity promoting video game (e.g., Wii Fit), light effort (e.g., balance, yoga)"),
            new MET(3.8, "02003", "activity promoting video game (e.g., Wii Fit), moderate effort (e.g., aerobic, resistance)"),
            new MET(7.2, "02005", "activity promoting video/arcade game (e.g., Exergaming, Dance Dance Revolution), vigorous effort"),
            new MET(5.0, "02008", "army type obstacle course exercise, boot camp training program\\u00a0"),
            new MET(7.0, "02010", "bicycling, stationary, general"),
            new MET(3.5, "02011", "bicycling, stationary, 30-50 watts, very light to light effort"),
            new MET(6.8, "02012", "bicycling, stationary, 90-100 watts, moderate to vigorous effort"),
            new MET(8.8, "02013", "bicycling, stationary, 101-160 watts, vigorous effort"),
            new MET(11.0, "02014", "bicycling, stationary, 161-200 watts, vigorous effort"),
            new MET(14.0, "02015", "bicycling, stationary, 201-270 watts, very vigorous effort"),
            new MET(4.8, "02017", "bicycling, stationary, 51-89 watts, light-to-moderate effort"),
            new MET(8.5, "02019", "bicycling, stationary, RPM/Spin bike class"),
            new MET(8.0, "02020", "calisthenics (e.g., push ups, sit ups, pull-ups, jumping jacks), vigorous effort"),
            new MET(3.8, "02022", "calisthenics (e.g., push ups, sit ups, pull-ups, lunges), moderate effort"),
            new MET(2.8, "02024", "calisthenics (e.g., situps, abdominal crunches), light effort"),
            new MET(3.5, "02030", "calisthenics, light or moderate effort, general (example: back exercises), going up & down from floor (Taylor Code 150)"),
            new MET(4.3, "02035", "circuit training, moderate effort"),
            new MET(8.0, "02040", "circuit training, including kettlebells, some aerobic movement with minimal rest, general, vigorous intensity"),
            new MET(3.5, "02045", "Curves exercise routines in women"),
            new MET(5.0, "02048", "Elliptical trainer, moderate effort\\u00a0"),
            new MET(6.0, "02050", "resistance training (weight lifting - free weight, nautilus or universal-type), power lifting or body building, vigorous effort (Taylor Code 210)"),
            new MET(5.0, "02052", "resistance (weight) training, squats , slow or explosive effort"),
            new MET(3.5, "02054", "resistance (weight) training, multiple exercises, 8-15 repetitions at varied resistance\\u00a0"),
            new MET(5.5, "02060", "health club exercise, general (Taylor Code 160)"),
            new MET(9.0, "02065", "stair-treadmill ergometer, general"),
            new MET(11.0, "02068", "rope skipping, general"),
            new MET(6.0, "02070", "rowing, stationary ergometer, general, vigorous effort"),
            new MET(4.8, "02071", "rowing, stationary, general, moderate effort"),
            new MET(7.0, "02072", "rowing, stationary, 100 watts, moderate effort"),
            new MET(8.5, "02073", "rowing, stationary, 150 watts, vigorous effort"),
            new MET(12.0, "02074", "rowing, stationary, 200 watts, very vigorous effort"),
            new MET(6.8, "02080", "ski machine, general"),
            new MET(11.0, "02085", "slide board exercise, general"),
            new MET(6.0, "02090", "slimnastics, jazzercise"),
            new MET(2.3, "02101", "stretching, mild"),
            new MET(3.0, "02105", "pilates, general"),
            new MET(6.8, "02110", "teaching exercise class (e.g., aerobic, water)"),
            new MET(2.8, "02112", "therapeutic exercise ball, Fitball exercise"),
            new MET(2.8, "02115", "upper body exercise, arm ergometer"),
            new MET(4.3, "02117", "upper body exercise, stationary bicycle - Airdyne (arms only) 40 rpm, moderate"),
            new MET(5.3, "02120", "water aerobics, water calisthenics, water exercise"),
            new MET(1.3, "02135", "whirlpool, sitting"),
            new MET(2.3, "02140", "video exercise workouts, TV conditioning programs (e.g., yoga, stretching), light effort"),
            new MET(4.0, "02143", "video exercise workouts, TV conditioning programs (e.g., cardio-resistance), moderate effort"),
            new MET(6.0, "02146", "video exercise workouts, TV conditioning programs (e.g., cardio-resistance), vigorous effort"),
            new MET(2.5, "02150", "yoga, Hatha"),
            new MET(4.0, "02160", "yoga, Power"),
            new MET(2.0, "02170", "yoga, Nadisodhana"),
            new MET(3.3, "02180", "yoga, Surya Namaskar"),
            new MET(5.3, "02200", "native New Zealander physical activities (e.g., Haka Powhiri, Moteatea, Waita Tira, Whakawatea, etc.) , general, moderate effort"),
            new MET(6.8, "02205", "native New Zealander physical activities (e.g., Haka, Taiahab), general, vigorous effort"),
            new MET(5.0, "03010", "ballet, modern, or jazz, general, rehearsal or class"),
            new MET(6.8, "03012", "ballet, modern, or jazz, performance, vigorous effort"),
            new MET(4.8, "03014", "tap"),
            new MET(7.3, "03015", "aerobic, general"),
            new MET(7.5, "03016", "aerobic, step, with 6 - 8 inch step"),
            new MET(9.5, "03017", "aerobic, step, with 10 - 12 inch step"),
            new MET(5.5, "03018", "aerobic, step, with 4-inch step"),
            new MET(8.5, "03019", "bench step class, general"),
            new MET(5.0, "03020", "aerobic, low impact"),
            new MET(7.3, "03021", "aerobic, high impact"),
            new MET(10.0, "03022", "aerobic dance wearing 10-15 lb weights"),
            new MET(4.5, "03025", "ethnic or cultural dancing (e.g., Greek, Middle Eastern, hula, salsa, merengue, bamba y plena, flamenco, belly, and swing)"),
            new MET(5.5, "03030", "ballroom, fast (Taylor Code 125)"),
            new MET(7.8, "03031", "general dancing (e.g., disco, folk, Irish step dancing, line dancing, polka, contra, country)"),
            new MET(11.3, "03038", "ballroom dancing, competitive, general"),
            new MET(3.0, "03040", "ballroom, slow (e.g., waltz, foxtrot, slow dancing, samba, tango, 19th century dance, mambo, cha cha)"),
            new MET(5.5, "03050", "Anishinaabe Jingle Dancing"),
            new MET(3.5, "03060", "Caribbean dance (Abakua, Beguine, Bellair, Bongo, Brukin's, Caribbean Quadrills, Dinki Mini, Gere, Gumbay, Ibo, Jonkonnu, Kumina, Oreisha, Jambu)"),
            new MET(3.5, "04001", "fishing, general"),
            new MET(4.5, "04005", "fishing, crab fishing"),
            new MET(4.0, "04007", "fishing, catching fish with hands"),
            new MET(4.3, "04010", "fishing related, digging worms, with shovel"),
            new MET(4.0, "04020", "fishing from river bank and walking"),
            new MET(2.0, "04030", "fishing from boat or canoe, sitting"),
            new MET(3.5, "04040", "fishing from river bank, standing (Taylor Code 660)"),
            new MET(6.0, "04050", "fishing in stream, in waders (Taylor Code 670)"),
            new MET(2.0, "04060", "fishing, ice, sitting"),
            new MET(1.8, "04061", "fishing, jog or line, standing, general"),
            new MET(3.5, "04062", "fishing, dip net, setting net and retrieving fish, general"),
            new MET(3.8, "04063", "fishing, set net, setting net and retrieving fish, general"),
            new MET(3.0, "04064", "fishing, fishing wheel, setting net and retrieving fish, general"),
            new MET(2.3, "04065", "fishing with a spear, standing"),
            new MET(2.5, "04070", "hunting, bow and arrow, or crossbow"),
            new MET(6.0, "04080", "hunting, deer, elk, large game (Taylor Code 170)"),
            new MET(11.3, "04081", "hunting large game, dragging carcass"),
            new MET(4.0, "04083", "hunting large marine animals"),
            new MET(2.5, "04085", "hunting large game, from a hunting stand, limited walking"),
            new MET(2.0, "04086", "hunting large game from a car, plane, or boat"),
            new MET(2.5, "04090", "hunting, duck, wading"),
            new MET(3.0, "04095", "hunting, flying fox, squirrel"),
            new MET(5.0, "04100", "hunting, general"),
            new MET(6.0, "04110", "hunting, pheasants or grouse (Taylor Code 680)"),
            new MET(3.3, "04115", "hunting, birds"),
            new MET(5.0, "04120", "hunting, rabbit, squirrel, prairie chick, raccoon, small game (Taylor Code 690)"),
            new MET(3.3, "04123", "hunting, pigs, wild"),
            new MET(2.0, "04124", "trapping game, general"),
            new MET(9.5, "04125", "hunting, hiking with hunting gear"),
            new MET(2.5, "04130", "pistol shooting or trap shooting, standing"),
            new MET(2.3, "04140", "rifle exercises, shooting, lying down"),
            new MET(2.5, "04145", "rifle exercises, shooting, kneeling or standing"),
            new MET(3.3, "05010", "cleaning, sweeping carpet or floors, general"),
            new MET(2.3, "05011", "cleaning, sweeping, slow, light effort"),
            new MET(3.8, "05012", "cleaning, sweeping, slow, moderate effort"),
            new MET(3.5, "05020", "cleaning, heavy or major (e.g. wash car, wash windows, clean garage), moderate effort"),
            new MET(3.5, "05021", "cleaning, mopping, standing, moderate effort"),
            new MET(3.2, "05022", "cleaning windows, washing windows, general"),
            new MET(2.5, "05023", "mopping, standing, light effort"),
            new MET(4.5, "05024", "polishing floors, standing, walking slowly, using electric polishing machine"),
            new MET(2.8, "05025", "multiple household tasks all at once, light effort"),
            new MET(3.5, "05026", "multiple household tasks all at once, moderate effort"),
            new MET(4.3, "05027", "multiple household tasks all at once, vigorous effort"),
            new MET(3.3, "05030", "cleaning, house or cabin, general, moderate effort"),
            new MET(2.3, "05032", "dusting or polishing furniture, general"),
            new MET(3.3, "05035", "kitchen activity, general, (e.g., cooking, washing dishes, cleaning up), moderate effort"),
            new MET(2.5, "05040", "cleaning, general (straightening up, changing linen, carrying out trash, light effort"),
            new MET(1.8, "05041", "wash dishes, standing or in general (not broken into stand/walk components)"),
            new MET(2.5, "05042", "wash dishes, clearing dishes from table, walking, light effort"),
            new MET(3.3, "05043", "vacuuming, general, moderate effort"),
            new MET(3.0, "05044", "butchering animals, small"),
            new MET(6.0, "05045", "butchering animal, large, vigorous effort"),
            new MET(2.3, "05046", "cutting and smoking fish, drying fish or meat"),
            new MET(4.0, "05048", "tanning hides, general"),
            new MET(3.5, "05049", "cooking or food preparation, moderate effort"),
            new MET(2.0, "05050", "cooking or food preparation - standing or sitting or in general (not broken into stand/walk components), manual appliances, light effort"),
            new MET(2.5, "05051", "serving food, setting table, implied walking or standing"),
            new MET(2.5, "05052", "cooking or food preparation, walking"),
            new MET(2.5, "05053", "feeding household animals"),
            new MET(2.5, "05055", "putting away groceries (e.g. carrying groceries, shopping without a grocery cart), carrying packages"),
            new MET(7.5, "05056", "carrying groceries upstairs"),
            new MET(3.0, "05057", "cooking Indian bread on an outside stove"),
            new MET(2.3, "05060", "food shopping with or without a grocery cart, standing or walking"),
            new MET(2.3, "05065", "non-food shopping, with or without a cart, standing or walking"),
            new MET(1.8, "05070", "ironing"),
            new MET(1.3, "05080", "knitting, sewing, light effort, wrapping presents, sitting"),
            new MET(2.8, "05082", "sewing with a machine"),
            new MET(2.0, "05090", "laundry, fold or hang clothes, put clothes in washer or dryer, packing suitcase, washing clothes by hand,implied standing, light effort"),
            new MET(4.0, "05092", "laundry, hanging wash, washing clothes by hand, moderate effort"),
            new MET(2.3, "05095", "laundry, putting away clothes, gathering clothes to pack, putting away laundry,implied walking"),
            new MET(3.3, "05100", "making bed, changing linens"),
            new MET(5.0, "05110", "maple syruping/sugar bushing (including carrying buckets, carrying wood)"),
            new MET(5.8, "05120", "moving furniture, household items, carrying boxes"),
            new MET(5.0, "05121", "moving, lifting light loads"),
            new MET(4.8, "05125", "organizing room"),
            new MET(3.5, "05130", "scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, moderate effort"),
            new MET(2.0, "05131", "scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, light effort"),
            new MET(6.5, "05132", "scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, vigorous effort"),
            new MET(4.0, "05140", "sweeping garage, sidewalk or outside of house"),
            new MET(3.5, "05146", "standing, packing/unpacking boxes, occasional lifting of lightweight household items, loading or unloading items in car, moderate effort"),
            new MET(3.0, "05147", "implied walking, putting away household items, moderate effort"),
            new MET(2.5, "05148", "watering  plants"),
            new MET(2.5, "05149", "building a fire inside"),
            new MET(9.0, "05150", "moving household items upstairs, carrying boxes or furniture"),
            new MET(2.0, "05160", "standing, light effort tasks (pump gas, change light bulb, etc.)"),
            new MET(3.5, "05165", "walking, moderate effort tasks, non-cleaning (readying to leave, shut/lock doors, close windows, etc.)"),
            new MET(2.2, "05170", "sitting, playing with child(ren), light effort, only active periods"),
            new MET(2.8, "05171", "standing, playing with child(ren) light effort, only active periods"),
            new MET(3.5, "05175", "walking/running, playing with child(ren), moderate effort, only active periods"),
            new MET(5.8, "05180", "walking/running, playing with child(ren), vigorous effort, only active periods"),
            new MET(3.0, "05181", "walking and carrying small child, child weighing 15 lbs or more"),
            new MET(2.3, "05182", "walking, moderate effort tasks, non-cleaning (readying to leave, shut/lock doors, close windows, etc.)"),
            new MET(2.0, "05183", "standing, holding child"),
            new MET(2.5, "05184", "child care, infant, general"),
            new MET(2.0, "05185", "child care, sitting/kneeling (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), light effort, general"),
            new MET(3.0, "05186", "child care, standing (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), moderate effort"),
            new MET(1.5, "05188", "reclining with baby"),
            new MET(2.0, "05189", "breastfeeding, sitting or reclining"),
            new MET(2.5, "05190", "sit, playing with animals, light effort, only active periods"),
            new MET(2.8, "05191", "stand, playing with animals, light effort, only active periods"),
            new MET(3.0, "05192", "walk/run, playing with animals, general, light effort, only active periods"),
            new MET(4.0, "05193", "walk/run, playing with animals, moderate effort, only active periods"),
            new MET(5.0, "05194", "walk/run, playing with animals, vigorous effort, only active periods"),
            new MET(3.5, "05195", "standing, bathing dog"),
            new MET(2.3, "05197", "animal care, household animals, general"),
            new MET(4.0, "05200", "elder care, disabled adult, bathing, dressing, moving into and out of bed, only active periods "),
            new MET(2.3, "05205", "elder care, disabled adult, feeding, combing hair, light effort, only active periods"),
            new MET(3.0, "06010", "airplane repair"),
            new MET(4.0, "06020", "automobile body work"),
            new MET(3.3, "06030", "automobile repair, light or moderate effort"),
            new MET(3.0, "06040", "carpentry, general, workshop (Taylor Code 620)"),
            new MET(6.0, "06050", "carpentry, outside house, installing rain gutters (Taylor Code 640),carpentry, outside house, building a fence"),
            new MET(3.8, "06052", "carpentry, outside house, building a fence"),
            new MET(3.3, "06060", "carpentry, finishing or refinishing cabinets or furniture"),
            new MET(6.0, "06070", "carpentry, sawing hardwood"),
            new MET(4.0, "06072", "carpentry, home remodeling tasks, moderate effort"),
            new MET(2.3, "06074", "carpentry, home remodeling tasks, light effort\\u00a0"),
            new MET(5.0, "06080", "caulking, chinking log cabin"),
            new MET(4.5, "06090", "caulking, except log cabin"),
            new MET(5.0, "06100", "cleaning gutters"),
            new MET(5.0, "06110", "excavating garage"),
            new MET(5.0, "06120", "hanging storm windows"),
            new MET(5.0, "06122", "hanging sheet rock inside house"),
            new MET(3.0, "06124", "hammering nails"),
            new MET(2.5, "06126", "home repair, general, light effort"),
            new MET(4.5, "06127", "home repair, general, moderate effort"),
            new MET(6.0, "06128", "home repair, general, vigorous effort"),
            new MET(4.5, "06130", "laying or removing carpet"),
            new MET(3.8, "06140", "laying tile or linoleum,repairing appliances"),
            new MET(3.0, "06144", "repairing appliances"),
            new MET(5.0, "06150", "painting, outside home (Taylor Code 650)"),
            new MET(3.3, "06160", "painting inside house,wallpapering, scraping paint"),
            new MET(4.5, "06165", "painting, (Taylor Code 630)"),
            new MET(3.0, "06167", "plumbing, general"),
            new MET(3.0, "06170", "put on and removal of tarp - sailboat"),
            new MET(6.0, "06180", "roofing"),
            new MET(4.5, "06190", "sanding floors with a power sander"),
            new MET(4.5, "06200", "scraping and painting sailboat or powerboat"),
            new MET(2.0, "06205", "sharpening tools"),
            new MET(5.0, "06210", "spreading dirt with a shovel"),
            new MET(4.5, "06220", "washing and waxing hull of sailboat or airplane"),
            new MET(2.0, "06225", "washing and waxing car"),
            new MET(4.5, "06230", "washing fence, painting fence, moderate effort"),
            new MET(3.3, "06240", "wiring, tapping-splicing"),
            new MET(1.0, "07010", "lying quietly and watching television"),
            new MET(1.3, "07011", "lying quietly, doing nothing, lying in bed awake, listening to music (not talking or reading)"),
            new MET(1.3, "07020", "sitting quietly and watching television"),
            new MET(1.3, "07021", "sitting quietly, general"),
            new MET(1.5, "07022", "sitting quietly, fidgeting, general, fidgeting hands"),
            new MET(1.8, "07023", "sitting, fidgeting feet"),
            new MET(1.3, "07024", "sitting, smoking"),
            new MET(1.5, "07025", "sitting, listening to music (not talking or reading) or watching a movie in a theater"),
            new MET(1.3, "07026", "sitting at a desk, resting head in hands"),
            new MET(1.3, "07040", "standing quietly, standing in a line"),
            new MET(1.8, "07041", "standing, fidgeting"),
            new MET(1.3, "07050", "reclining, writing"),
            new MET(1.3, "07060", "reclining, talking or talking on phone"),
            new MET(1.3, "07070", "reclining, reading"),
            new MET(1.0, "07075", "meditating"),
            new MET(3.3, "08009", "carrying, loading or stacking wood, loading/unloading or carrying lumber, light-to-moderate effort"),
            new MET(5.5, "08010", "carrying, loading or stacking wood, loading/unloading or carrying lumber"),
            new MET(4.5, "08019", "chopping wood, splitting logs, moderate effort"),
            new MET(6.3, "08020", "chopping wood, splitting logs, vigorous effort"),
            new MET(3.5, "08025", "clearing light brush, thinning garden, moderate effort"),
            new MET(6.3, "08030", "clearing brush/land, undergrowth, or ground, hauling branches, wheelbarrow chores, vigorous effort"),
            new MET(5.0, "08040", "digging sandbox, shoveling sand"),
            new MET(3.5, "08045", "digging, spading, filling garden, composting, light-to-moderate effort"),
            new MET(5.0, "08050", "digging, spading, filling garden, compositing, (Taylor Code 590)"),
            new MET(7.8, "08052", "digging, spading, filling garden, composting, vigorous effort"),
            new MET(2.8, "08055", "driving tractor"),
            new MET(8.3, "08057", "felling trees, large size"),
            new MET(5.3, "08058", "felling trees, small-medium size"),
            new MET(5.8, "08060", "gardening with heavy power tools, tilling a garden, chain saw"),
            new MET(2.3, "08065", "gardening, using containers, older adults > 60 years"),
            new MET(4.0, "08070", "irrigation channels, opening and closing ports"),
            new MET(6.3, "08080", "laying crushed rock"),
            new MET(5.0, "08090", "laying sod"),
            new MET(5.5, "08095", "mowing lawn, general"),
            new MET(2.5, "08100", "mowing lawn, riding mower (Taylor Code 550)"),
            new MET(6.0, "08110", "mowing lawn, walk, hand mower (Taylor Code 570)"),
            new MET(5.0, "08120", "mowing lawn, walk, power mower, moderate or vigorous effort"),
            new MET(4.5, "08125", "mowing lawn, power mower, light or moderate effort (Taylor Code 590)"),
            new MET(2.5, "08130", "operating snow blower, walking"),
            new MET(2.0, "08135", "planting, potting, transplanting seedlings or plants, light effort"),
            new MET(4.3, "08140", "planting seedlings, shrub, stooping, moderate effort"),
            new MET(4.3, "08145", "planting crops or garden, stooping, moderate effort"),
            new MET(4.5, "08150", "planting trees"),
            new MET(3.8, "08160", "raking lawn or leaves, moderate effort"),
            new MET(4.0, "08165", "raking lawn (Taylor Code 600)"),
            new MET(4.0, "08170", "raking roof with snow rake"),
            new MET(3.0, "08180", "riding snow blower"),
            new MET(4.0, "08190", "sacking grass, leaves"),
            new MET(5.5, "08192", "shoveling dirt or mud"),
            new MET(5.3, "08195", "shoveling snow, by hand, moderate effort"),
            new MET(6.0, "08200", "shovelling snow, by hand (Taylor Code 610)"),
            new MET(7.5, "08202", "shoveling snow, by hand, vigorous effort"),
            new MET(4.0, "08210", "trimming shrubs or trees, manual cutter"),
            new MET(3.5, "08215", "trimming shrubs or trees, power cutter, using leaf blower, edge, moderate effort"),
            new MET(3.0, "08220", "walking, applying fertilizer or seeding a lawn, push applicator"),
            new MET(1.5, "08230", "watering lawn or garden, standing or walking"),
            new MET(3.5, "08239", "weeding, cultivating garden, light-to-moderate effort"),
            new MET(4.5, "08240", "weeding, cultivating garden (Taylor Code 580)"),
            new MET(5.0, "08241", "weeding, cultivating garden, using a hoe, moderate-to-vigorous effort"),
            new MET(3.8, "08245", "gardening, general, moderate effort"),
            new MET(3.5, "08246", "picking fruit off trees, picking fruits/vegetables, moderate effort"),
            new MET(4.5, "08248", "picking fruit off trees, gleaning fruits, picking fruits/vegetables, climbing ladder to pick fruit, vigorous effort"),
            new MET(3.3, "08250", "implied walking/standing - picking up yard, light, picking flowers or vegetables"),
            new MET(3.0, "08251", "walking, gathering gardening tools"),
            new MET(5.5, "08255", "wheelbarrow, pushing garden cart or wheelbarrow"),
            new MET(3.0, "08260", "yard work, general, light effort"),
            new MET(4.0, "08261", "yard work, general, moderate effort"),
            new MET(6.0, "08262", "yard work, general, vigorous effort"),
            new MET(1.5, "09000", "board game playing, sitting"),
            new MET(2.5, "09005", "casino gambling, standing"),
            new MET(1.5, "09010", "card playing, sitting"),
            new MET(1.5, "09013", "chess game, sitting"),
            new MET(1.5, "09015", "copying documents, standing"),
            new MET(1.8, "09020", "drawing, writing, painting, standing"),
            new MET(1.0, "09025", "laughing, sitting"),
            new MET(1.3, "09030", "sitting, reading, book, newspaper, etc."),
            new MET(1.3, "09040", "sitting, writing, desk work, typing"),
            new MET(1.0, "09045", "sitting, playing traditional video game, computer game"),
            new MET(1.8, "09050", "standing, talking in person, on the phone, computer, or text messaging, light effort"),
            new MET(1.5, "09055", "sitting, talking in person, on the phone, computer, or text messaging, light effort"),
            new MET(1.3, "09060", "sitting, studying, general, including reading and/or writing, light effort"),
            new MET(1.8, "09065", "sitting, in class, general, including note-taking or class discussion"),
            new MET(1.8, "09070", "standing, reading"),
            new MET(2.5, "09071", "standing, miscellaneous"),
            new MET(1.8, "09075", "sitting, arts and crafts,\\u00a0 carving wood, weaving, spinning wool, light effort"),
            new MET(3.0, "09080", "sitting, arts and crafts,\\u00a0 carving wood, weaving, spinning wool, moderate effort"),
            new MET(2.5, "09085", "standing, arts and crafts, sand painting, carving, weaving, light effort"),
            new MET(3.3, "09090", "standing, arts and crafts, sand painting, carving, weaving, moderate effort"),
            new MET(3.5, "09095", "standing, arts and crafts, sand painting, carving, weaving, vigorous effort"),
            new MET(1.8, "09100", "retreat/family reunion activities involving sitting, relaxing, talking, eating"),
            new MET(3.0, "09101", "retreat/family reunion activities involving playing games with children"),
            new MET(2.0, "09105", "touring/traveling/vacation involving riding in a vehicle"),
            new MET(3.5, "09106", "touring/traveling/vacation involving walking"),
            new MET(2.5, "09110", "camping involving standing, walking, sitting, light-to-moderate effort"),
            new MET(1.5, "09115", "sitting at a sporting event, spectator"),
            new MET(1.8, "10010", "accordion, sitting"),
            new MET(2.3, "10020", "cello, sitting"),
            new MET(2.3, "10030", "conducting orchestra, standing"),
            new MET(3.8, "10040", "drums, sitting"),
            new MET(3.0, "10045", "drumming (e.g., bongo, conga, benbe), moderate, sitting"),
            new MET(2.0, "10050", "flute, sitting"),
            new MET(1.8, "10060", "horn, standing"),
            new MET(2.3, "10070", "piano, sitting"),
            new MET(3.5, "10080", "trombone, standing"),
            new MET(1.8, "10090", "trumpet, standing"),
            new MET(2.5, "10100", "violin, sitting"),
            new MET(1.8, "10110", "woodwind, sitting"),
            new MET(2.0, "10120", "guitar, classical, folk, sitting"),
            new MET(3.0, "10125", "guitar, rock and roll band, standing"),
            new MET(4.0, "10130", "marching band, baton twirling, walking, moderate pace, general"),
            new MET(5.5, "10131", "marching band, playing an instrument, walking, brisk pace, general"),
            new MET(3.5, "10135", "marching band, drum major, walking"),
            new MET(2.3, "11003", "active workstation, treadmill desk, walking"),
            new MET(3.0, "11006", "airline flight attendant"),
            new MET(4.0, "11010", "bakery, general, moderate effort"),
            new MET(2.0, "11015", "bakery, light effort"),
            new MET(2.3, "11020", "bookbinding"),
            new MET(6.0, "11030", "building road, driving heavy machinery"),
            new MET(2.0, "11035", "building road, directing traffic, standing"),
            new MET(2.5, "11038", "carpentry, general, light effort"),
            new MET(4.3, "11040", "carpentry, general, moderate effort"),
            new MET(7.0, "11042", "carpentry, general, heavy or vigorous effort"),
            new MET(8.0, "11050", "carrying heavy loads (e.g., bricks, tools)"),
            new MET(8.0, "11060", "carrying moderate loads up stairs, moving boxes 25-49 lbs"),
            new MET(4.0, "11070", "chambermaid, hotel housekeeper, making bed, cleaning bathroom, pushing cart"),
            new MET(5.3, "11080", "coal mining, drilling coal, rock"),
            new MET(5.0, "11090", "coal mining, erecting supports"),
            new MET(5.5, "11100", "coal mining, general"),
            new MET(6.3, "11110", "coal mining, shoveling coal"),
            new MET(2.5, "11115", "cook, chef"),
            new MET(4.0, "11120", "construction, outside, remodeling, new structures (e.g., roof repair, miscellaneous"),
            new MET(2.3, "11125", "custodial work, light effort (e.g., cleaning sink and toilet, dusting, vacuuming, light cleaning)"),
            new MET(3.8, "11126", "custodial work, moderate effort (e.g., electric buffer, feathering arena floors, mopping, taking out trash, vacuuming)"),
            new MET(2.0, "11128", "driving delivery truck, taxi, shuttle bus, school bus"),
            new MET(3.3, "11130", "electrical work (e.g., hook up wire, tapping-splicing)"),
            new MET(1.8, "11135", "engineer (e.g., mechanical or electrical)"),
            new MET(7.8, "11145", "farming, vigorous effort (e.g., baling hay, cleaning barn)"),
            new MET(4.8, "11146", "farming, moderate effort (e.g., feeding animals, chasing cattle by walking and/or horseback, spreading manure, harvesting crops)"),
            new MET(2.0, "11147", "farming, light effort (e.g., cleaning animal sheds, preparing animal feed)"),
            new MET(2.8, "11170", "farming, driving tasks (e.g., driving tractor or harvester)"),
            new MET(3.5, "11180", "farming, feeding small animals"),
            new MET(4.3, "11190", "farming, feeding cattle, horses"),
            new MET(4.3, "11191", "farming, hauling water for animals, general hauling water"),
            new MET(4.5, "11192", "farming, taking care of animals (e.g., grooming, brushing, shearing sheep, assisting with birthing, medical care, branding), general"),
            new MET(3.8, "11195", "farming, rice, planting, grain milling activities"),
            new MET(3.5, "11210", "farming, milking by hand, cleaning pails, moderate effort"),
            new MET(1.3, "11220", "farming, milking by machine, light effort"),
            new MET(8.0, "11240", "fire fighter, general"),
            new MET(6.8, "11244", "fire fighter, rescue victim, automobile accident, using pike pole"),
            new MET(8.0, "11245", "fire fighter, raising and climbing ladder with full gear, simulated fire suppression"),
            new MET(9.0, "11246", "fire fighter, hauling hoses on ground, carrying/hoisting equipment, breaking down walls, wearing full gear"),
            new MET(3.5, "11247", "fishing, commercial, light effort"),
            new MET(5.0, "11248", "fishing, commercial, moderate effort"),
            new MET(7.0, "11249", "fishing, commercial, vigorous effort"),
            new MET(17.5, "11250", "forestry, ax chopping, very fast, 1.25 kg axe, 51 blows/min, extremely vigorous effort"),
            new MET(5.0, "11260", "forestry, ax chopping, slow, 1.25 kg axe, 19 blows/min, moderate effort"),
            new MET(8.0, "11262", "forestry, ax chopping, fast, 1.25 kg axe, 35 blows/min, vigorous effort"),
            new MET(4.5, "11264", "forestry, moderate effort (e.g., sawing wood with power saw, weeding, hoeing)"),
            new MET(8.0, "11266", "forestry, vigorous effort (e.g., barking, felling, or trimming trees, carrying or stacking logs, felling trees, planting seeds, sawing lumber by hand )"),
            new MET(4.5, "11370", "furriery"),
            new MET(4.0, "11375", "garbage collector, walking, dumping bins into truck"),
            new MET(1.8, "11378", "hairstylist (e.g., plaiting hair, manicure, make-up artist)"),
            new MET(7.3, "11380", "horse grooming, including feeding, cleaning stalls, bathing, brushing, clipping, longeing and exercising horses."),
            new MET(4.3, "11381", "horse, feeding, watering, cleaning stalls, implied walking and lifting loads"),
            new MET(7.3, "11390", "horse racing, galloping"),
            new MET(5.8, "11400", "horse racing, trotting"),
            new MET(3.8, "11410", "horse racing, walking"),
            new MET(3.0, "11413", "kitchen maid"),
            new MET(4.0, "11415", "lawn keeper, yard work, general"),
            new MET(3.3, "11418", "laundry worker"),
            new MET(3.0, "11420", "locksmith"),
            new MET(3.0, "11430", "machine tooling (e.g., machining, working sheet metal, machine fitter, operating lathe, welding) light-to-moderate effort"),
            new MET(5.0, "11450", "machine tooling, operating punch press, moderate effort"),
            new MET(1.8, "11472", "manager, property"),
            new MET(2.8, "11475", "manual or unskilled labor, general, light effort"),
            new MET(4.5, "11476", "manual or unskilled labor, general, moderate effort"),
            new MET(6.5, "11477", "manual or unskilled labor, general, vigorous effort"),
            new MET(4.3, "11480", "masonry, concrete, moderate effort"),
            new MET(2.5, "11482", "masonry, concrete, light effort"),
            new MET(4.0, "11485", "massage therapist, standing"),
            new MET(7.5, "11490", "moving, carrying or pushing heavy objects, 75 lbs or more, only active time (e.g., desks, moving van work)"),
            new MET(12.0, "11495", "skindiving or SCUBA diving as a frogman, Navy Seal"),
            new MET(2.5, "11500", "operating heavy duty equipment, automated, not driving"),
            new MET(4.5, "11510", "orange grove work, picking fruit"),
            new MET(3.3, "11514", "painting,house, furniture, moderate effort"),
            new MET(3.0, "11516", "plumbing activities"),
            new MET(2.0, "11520", "printing, paper industry worker, standing"),
            new MET(2.5, "11525", "police, directing traffic, standing"),
            new MET(2.5, "11526", "police, driving a squad car, sitting"),
            new MET(1.3, "11527", "police, riding in a squad car, sitting"),
            new MET(4.0, "11528", "police, making an arrest, standing"),
            new MET(2.3, "11529", "postal carrier, walking to deliver mail"),
            new MET(2.0, "11530", "shoe repair, general"),
            new MET(7.8, "11540", "shoveling, digging ditches"),
            new MET(8.8, "11550", "shoveling, more than 16 pounds/minute, deep digging, vigorous effort"),
            new MET(5.0, "11560", "shoveling, less than 10 pounds/minute, moderate effort"),
            new MET(6.5, "11570", "shoveling, 10 to 15 pounds/minute, vigorous effort"),
            new MET(1.5, "11580", "sitting tasks, light effort (e.g., office work, chemistry lab work, computer work, light assembly repair, watch repair, reading, desk work)"),
            new MET(1.5, "11585", "sitting meetings, light effort, general, and/or with talking involved (e.g., eating at a business meeting)"),
            new MET(2.5, "11590", "sitting tasks, moderate effort (e.g., pushing heavy levers, riding mower/forklift, crane operation)"),
            new MET(2.8, "11593", "sitting, teaching stretching or yoga, or light effort exercise class"),
            new MET(3.0, "11600", "standing tasks, light effort (e.g., bartending, store clerk, assembling, filing, duplicating, librarian, putting up a Christmas tree, standing and talking at work, changing clothes when teaching physical education,standing)"),
            new MET(3.0, "11610", "standing, light/moderate effort (e.g., assemble/repair heavy parts, welding,stocking parts,auto repair,standing, packing boxes, nursing patient care)"),
            new MET(4.5, "11615", "standing, moderate effort, lifting items continuously, 10 \\u2013 20 lbs, with limited walking or resting"),
            new MET(3.5, "11620", "standing, moderate effort, intermittent lifting 50 lbs, hitch/twisting ropes"),
            new MET(4.5, "11630", "standing, moderate/heavy tasks (e.g., lifting more than 50 lbs, masonry, painting, paper hanging)"),
            new MET(5.3, "11708", "steel mill, moderate effort (e.g., fettling, forging, tipping molds)"),
            new MET(8.3, "11710", "steel mill, vigorous effort (e.g., hand rolling, merchant mill rolling, removing slag, tending furnace)"),
            new MET(2.3, "11720", "tailoring, cutting fabric"),
            new MET(2.5, "11730", "tailoring, general"),
            new MET(1.8, "11740", "tailoring, hand sewing"),
            new MET(2.5, "11750", "tailoring, machine sewing"),
            new MET(3.5, "11760", "tailoring, pressing"),
            new MET(2.0, "11763", "tailoring, weaving, light effort (e.g., finishing operations, washing, dyeing, inspecting cloth, counting yards, paperwork)"),
            new MET(4.0, "11765", "tailoring, weaving, moderate effort (e.g., spinning and weaving operations, delivering boxes of yam to spinners, loading of warp bean, pinwinding, conewinding, warping, cloth cutting)"),
            new MET(6.5, "11766", "truck driving, loading and unloading truck, tying down load, standing, walking and carrying heavy loads"),
            new MET(1.3, "11770", "typing, electric, manual or computer"),
            new MET(6.3, "11780", "using heavy power tools such as pneumatic tools (e.g., jackhammers, drills)"),
            new MET(8.0, "11790", "using heavy tools (not power) such as shovel, pick, tunnel bar, spade"),
            new MET(2.0, "11791", "walking on job, less than 2.0 mph, very slow speed, in office or lab area"),
            new MET(3.5, "11792", "walking on job, 3.0 mph, in office, moderate speed, not carrying anything"),
            new MET(4.3, "11793", "walking on job, 3.5 mph, in office, brisk speed, not carrying anything"),
            new MET(3.5, "11795", "walking on job, 2.5 mph, slow speed and carrying light objects less than 25 pounds"),
            new MET(3.0, "11796", "walking, gathering things at work, ready to leave"),
            new MET(3.8, "11797", "walking, 2.5 mph, slow speed, carrying heavy objects more than 25 lbs"),
            new MET(4.5, "11800", "walking, 3.0 mph, moderately and carrying light objects less than 25 lbs"),
            new MET(3.5, "11805", "walking, pushing a wheelchair"),
            new MET(4.8, "11810", "walking, 3.5 mph, briskly and carrying objects less than 25 pounds"),
            new MET(5.0, "11820", "walking or walk downstairs or standing, carrying objects about 25 to 49 pounds"),
            new MET(6.5, "11830", "walking or walk downstairs or standing, carrying objects about 50 to 74 pounds"),
            new MET(7.5, "11840", "walking or walk downstairs or standing, carrying objects about 75 to 99 pounds"),
            new MET(8.5, "11850", "walking or walk downstairs or standing, carrying objects about 100 pounds or over"),
            new MET(3.0, "11870", "working in scene shop, theater actor, backstage employee"),
            new MET(6.0, "12010", "jog/walk combination (jogging component of less than 10 minutes) (Taylor Code 180)"),
            new MET(7.0, "12020", "jogging, general"),
            new MET(8.0, "12025", "jogging, in place"),
            new MET(4.5, "12027", "jogging, on a mini-tramp"),
            new MET(6.0, "12029", "running, 4 mph (15 min/mile)"),
            new MET(8.3, "12030", "running, 5 mph (12 min/mile)"),
            new MET(9.0, "12040", "running, 5.2 mph (11.5 min/mile)"),
            new MET(9.8, "12050", "running, 6 mph (10 min/mile)"),
            new MET(10.5, "12060", "running, 6.7 mph (9 min/mile)"),
            new MET(11.0, "12070", "running, 7 mph (8.5 min/mile)"),
            new MET(11.8, "12080", "running, 7.5 mph (8 min/mile)"),
            new MET(11.8, "12090", "running, 8 mph (7.5 min/mile)"),
            new MET(12.3, "12100", "running, 8.6 mph (7 min/mile)"),
            new MET(12.8, "12110", "running, 9 mph (6.5 min/mile)"),
            new MET(14.5, "12120", "running, 10 mph (6 min/mile)"),
            new MET(16.0, "12130", "running, 11 mph (5.5 min/mile)"),
            new MET(19.0, "12132", "running, 12 mph (5 min/mile)"),
            new MET(19.8, "12134", "running, 13 mph (4.6 min/mile)"),
            new MET(23.0, "12135", "running, 14 mph (4.3 min/mile)"),
            new MET(9.0, "12140", "running, cross country"),
            new MET(8.0, "12150", "running, (Taylor code 200)"),
            new MET(15.0, "12170", "running, stairs, up"),
            new MET(10.0, "12180", "running, on a track, team practice"),
            new MET(8.0, "12190", "running, training, pushing a wheelchair or baby carrier"),
            new MET(13.3, "12200", "running, marathon"),
            new MET(2.3, "13000", "getting ready for bed, general, standing"),
            new MET(1.8, "13009", "sitting on toilet, eliminating while standing or squating"),
            new MET(1.5, "13010", "bathing, sitting"),
            new MET(2.5, "13020", "dressing, undressing, standing or sitting"),
            new MET(1.5, "13030", "eating, sitting"),
            new MET(2.0, "13035", "talking and eating or eating only, standing"),
            new MET(1.5, "13036", "taking medication, sitting or standing"),
            new MET(2.0, "13040", "grooming, washing hands, shaving, brushing teeth, putting on make-up, sitting or standing"),
            new MET(2.5, "13045", "hairstyling, standing"),
            new MET(1.3, "13046", "having hair or nails done by someone else, sitting"),
            new MET(2.0, "13050", "showering, toweling off, standing"),
            new MET(2.8, "14010", "active, vigorous effort"),
            new MET(1.8, "14020", "general, moderate effort"),
            new MET(1.3, "14030", "passive, light effort, kissing, hugging"),
            new MET(5.5, "15000", "Alaska Native Games, Eskimo Olympics, general"),
            new MET(4.3, "15010", "archery, non-hunting"),
            new MET(7.0, "15020", "badminton, competitive (Taylor Code 450)"),
            new MET(5.5, "15030", "badminton, social singles and doubles, general"),
            new MET(8.0, "15040", "basketball, game (Taylor Code 490)"),
            new MET(6.0, "15050", "basketball, non-game, general (Taylor Code 480)"),
            new MET(6.5, "15055", "basketball, general"),
            new MET(7.0, "15060", "basketball, officiating (Taylor Code 500)"),
            new MET(4.5, "15070", "basketball, shooting baskets"),
            new MET(9.3, "15072", "basketball, drills, practice"),
            new MET(7.8, "15075", "basketball, wheelchair"),
            new MET(2.5, "15080", "billiards"),
            new MET(3.0, "15090", "bowling (Taylor Code 390)"),
            new MET(3.8, "15092", "bowling, indoor, bowling alley"),
            new MET(12.8, "15100", "boxing, in ring, general"),
            new MET(5.5, "15110", "boxing, punching bag"),
            new MET(7.8, "15120", "boxing, sparring"),
            new MET(7.0, "15130", "broomball"),
            new MET(5.8, "15135", "children\\u2019s games, adults playing (e.g., hopscotch, 4-square, dodge ball, playground apparatus, t-ball, tetherball, marbles, jacks, arcade games), moderate effort"),
            new MET(6.0, "15138", "cheerleading, gymnastic moves, competitive"),
            new MET(4.0, "15140", "coaching, football, soccer, basketball, baseball, swimming, etc."),
            new MET(8.0, "15142", "coaching, actively playing sport with players"),
            new MET(4.8, "15150", "cricket, batting, bowling, fielding"),
            new MET(3.3, "15160", "croquet"),
            new MET(4.0, "15170", "curling"),
            new MET(2.5, "15180", "darts, wall or lawn"),
            new MET(6.0, "15190", "drag racing, pushing or driving a car"),
            new MET(8.5, "15192", "auto racing, open wheel"),
            new MET(6.0, "15200", "fencing"),
            new MET(8.0, "15210", "football, competitive"),
            new MET(8.0, "15230", "football, touch, flag, general (Taylor Code 510)"),
            new MET(4.0, "15232", "football, touch, flag, light effort"),
            new MET(2.5, "15235", "football or baseball, playing catch"),
            new MET(3.0, "15240", "frisbee playing, general"),
            new MET(8.0, "15250", "frisbee, ultimate"),
            new MET(4.8, "15255", "golf, general"),
            new MET(4.3, "15265", "golf, walking, carrying clubs"),
            new MET(3.0, "15270", "golf, miniature, driving range"),
            new MET(5.3, "15285", "golf, walking, pulling clubs"),
            new MET(3.5, "15290", "golf, using power cart (Taylor Code 070)"),
            new MET(3.8, "15300", "gymnastics, general"),
            new MET(4.0, "15310", "hacky sack"),
            new MET(12.0, "15320", "handball, general (Taylor Code 520)"),
            new MET(8.0, "15330", "handball, team"),
            new MET(4.0, "15335", "high ropes course, multiple elements"),
            new MET(3.5, "15340", "hang gliding"),
            new MET(7.8, "15350", "hockey, field"),
            new MET(8.0, "15360", "hockey, ice, general"),
            new MET(10.0, "15362", "hockey, ice, competitive"),
            new MET(5.5, "15370", "horseback riding, general"),
            new MET(4.3, "15375", "horse chores, feeding, watering, cleaning stalls, implied walking and lifting loads"),
            new MET(4.5, "15380", "saddling, cleaning, grooming, harnessing and unharnessing horse"),
            new MET(5.8, "15390", "horseback riding, trotting"),
            new MET(7.3, "15395", "horseback riding, canter or gallop"),
            new MET(3.8, "15400", "horseback riding,walking"),
            new MET(9.0, "15402", "horseback riding, jumping"),
            new MET(1.8, "15408", "horse cart, driving, standing or sitting"),
            new MET(3.0, "15410", "horseshoe pitching, quoits"),
            new MET(12.0, "15420", "jai alai"),
            new MET(5.3, "15425", "martial arts, different types, slower pace, novice performers, practice"),
            new MET(10.3, "15430", "martial arts, different types, moderate pace (e.g., judo, jujitsu, karate, kick boxing, tae kwan do, tai-bo, Muay Thai boxing)"),
            new MET(4.0, "15440", "juggling"),
            new MET(7.0, "15450", "kickball"),
            new MET(8.0, "15460", "lacrosse"),
            new MET(3.3, "15465", "lawn bowling, bocce ball, outdoor"),
            new MET(4.0, "15470", "moto-cross, off-road motor sports, all-terrain vehicle, general"),
            new MET(9.0, "15480", "orienteering"),
            new MET(10.0, "15490", "paddleball, competitive"),
            new MET(6.0, "15500", "paddleball, casual, general (Taylor Code 460)"),
            new MET(8.0, "15510", "polo, on horseback"),
            new MET(10.0, "15520", "racquetball, competitive"),
            new MET(7.0, "15530", "racquetball, general (Taylor Code 470)"),
            new MET(8.0, "15533", "rock or mountain climbing (Taylor Code 470) "),
            new MET(7.5, "15535", "rock climbing, ascending rock, high difficulty"),
            new MET(5.8, "15537", "rock climbing, ascending or traversing rock, low-to-moderate difficulty"),
            new MET(5.0, "15540", "rock climbing, rappelling"),
            new MET(4.0, "15542", "rodeo sports, general, light effort"),
            new MET(5.5, "15544", "rodeo sports, general, moderate effort"),
            new MET(7.0, "15546", "rodeo sports, general, vigorous effort"),
            new MET(12.3, "15550", "rope jumping, fast pace, 120-160 skips/min"),
            new MET(11.8, "15551", "rope jumping, moderate pace, 100-120 skips/min, general,\\u00a0 2 foot skip, plain bounce"),
            new MET(8.8, "15552", "rope jumping, slow pace, < 100 skips/min, 2 foot skip, rhythm bounce"),
            new MET(8.3, "15560", "rugby, union, team, competitive"),
            new MET(6.3, "15562", "rugby, touch, non-competitive"),
            new MET(3.0, "15570", "shuffleboard"),
            new MET(5.0, "15580", "skateboarding, general, moderate effort"),
            new MET(6.0, "15582", "skateboarding, competitive, vigorous effort"),
            new MET(7.0, "15590", "skating, roller (Taylor Code 360)"),
            new MET(7.5, "15591", "rollerblading, in-line skating, 14.4 km/h (9.0 mph), recreational pace"),
            new MET(9.8, "15592", "rollerblading, in-line skating, 17.7 km/h (11.0 mph), moderate pace, exercise training"),
            new MET(12.3, "15593", "rollerblading, in-line skating, 21.0 to 21.7 km/h (13.0 to 13.6 mph), fast pace, exercise training"),
            new MET(14.0, "15594", "rollerblading, in-line skating, 24.0 km/h (15.0 mph), maximal effort"),
            new MET(3.5, "15600", "skydiving, base jumping, bungee jumping"),
            new MET(10.0, "15605", "soccer, competitive"),
            new MET(7.0, "15610", "soccer, casual, general (Taylor Code 540)"),
            new MET(5.0, "15620", "softball or baseball, fast or slow pitch, general (Taylor Code 440)"),
            new MET(4.0, "15625", "softball, practice"),
            new MET(4.0, "15630", "softball, officiating"),
            new MET(6.0, "15640", "softball,pitching"),
            new MET(3.3, "15645", "sports spectator, very excited, emotional, physically moving\\u00a0"),
            new MET(12.0, "15650", "squash (Taylor Code 530)"),
            new MET(7.3, "15652", "squash, general"),
            new MET(4.0, "15660", "table tennis, ping pong (Taylor Code 410)"),
            new MET(3.0, "15670", "tai chi, qi gong, general"),
            new MET(1.5, "15672", "tai chi, qi gong, sitting, light effort"),
            new MET(7.3, "15675", "tennis, general"),
            new MET(6.0, "15680", "tennis, doubles (Taylor Code 430)"),
            new MET(4.5, "15685", "tennis, doubles"),
            new MET(8.0, "15690", "tennis, singles (Taylor Code 420)"),
            new MET(5.0, "15695", "tennis, hitting balls, non-game play, moderate effort"),
            new MET(3.5, "15700", "trampoline, recreational"),
            new MET(4.5, "15702", "trampoline, competitive"),
            new MET(4.0, "15710", "volleyball (Taylor Code 400)"),
            new MET(6.0, "15711", "volleyball, competitive, in gymnasium"),
            new MET(3.0, "15720", "volleyball, non-competitive, 6 - 9 member team, general"),
            new MET(8.0, "15725", "volleyball, beach, in sand"),
            new MET(6.0, "15730", "wrestling (one match = 5 minutes)"),
            new MET(7.0, "15731", "wallyball, general"),
            new MET(4.0, "15732", "track and field (e.g., shot, discus, hammer throw)"),
            new MET(6.0, "15733", "track and field (e.g., high jump, long jump, triple jump, javelin, pole vault)"),
            new MET(10.0, "15734", "track and field (e.g., steeplechase, hurdles)"),
            new MET(2.5, "16010", "automobile or light truck (not a semi) driving"),
            new MET(1.3, "16015", "riding in a car or truck"),
            new MET(1.3, "16016", "riding in a bus or train"),
            new MET(1.8, "16020", "flying airplane or helicopter"),
            new MET(3.5, "16030", "motor scooter, motorcycle"),
            new MET(6.3, "16035", "pulling rickshaw"),
            new MET(6.0, "16040", "pushing plane in and out of hangar"),
            new MET(2.5, "16050", "truck, semi, tractor, > 1 ton, or bus, driving"),
            new MET(3.5, "16060", "walking for transportation, 2.8-3.2 mph, level, moderate pace, firm surface"),
            new MET(7.0, "17010", "backpacking (Taylor Code 050)"),
            new MET(7.8, "17012", "backpacking, hiking or organized walking with a daypack"),
            new MET(5.0, "17020", "carrying 15 pound load (e.g. suitcase), level ground or downstairs"),
            new MET(2.3, "17021", "carrying 15 lb child, slow walking"),
            new MET(8.3, "17025", "carrying load upstairs, general"),
            new MET(5.0, "17026", "carrying 1 to 15 lb load, upstairs"),
            new MET(6.0, "17027", "carrying 16 to 24 lb load, upstairs"),
            new MET(8.0, "17028", "carrying 25 to 49 lb load, upstairs"),
            new MET(10.0, "17029", "carrying 50 to 74 lb load, upstairs"),
            new MET(12.0, "17030", "carrying > 74 lb load, upstairs"),
            new MET(3.5, "17031", "loading /unloading a car, implied walking"),
            new MET(6.3, "17033", "climbing hills, no load"),
            new MET(6.5, "17035", "climbing hills with 0 to 9 lb load"),
            new MET(7.3, "17040", "climbing hills with 10 to 20 lb load"),
            new MET(8.3, "17050", "climbing hills with 21 to 42 lb load"),
            new MET(9.0, "17060", "climbing hills with 42+ lb load"),
            new MET(3.5, "17070", "descending stairs"),
            new MET(6.0, "17080", "hiking, cross country (Taylor Code 040)"),
            new MET(5.3, "17082", "hiking or walking at a normal pace through fields and hillsides"),
            new MET(2.5, "17085", "bird watching, slow walk"),
            new MET(4.5, "17088", "marching, moderate speed, military, no pack"),
            new MET(8.0, "17090", "marching rapidly, military, no pack"),
            new MET(4.0, "17100", "pushing or pulling stroller with child or walking with children, 2.5 to 3.1 mph"),
            new MET(3.8, "17105", "pushing a wheelchair, non-occupational\\u00a0"),
            new MET(6.5, "17110", "race walking"),
            new MET(8.0, "17130", "stair climbing, using or climbing up ladder (Taylor Code 030)"),
            new MET(4.0, "17133", "stair climbing, slow pace"),
            new MET(8.8, "17134", "stair climbing, fast pace"),
            new MET(5.0, "17140", "using crutches"),
            new MET(2.0, "17150", "walking, household"),
            new MET(2.0, "17151", "walking, less than 2.0 mph, level, strolling, very slow"),
            new MET(2.8, "17152", "walking, 2.0 mph, level, slow pace, firm surface"),
            new MET(3.5, "17160", "walking for pleasure (Taylor Code 010)"),
            new MET(2.5, "17161", "walking from house to car or bus, from car or bus to go places, from car or bus to and from the worksite"),
            new MET(2.5, "17162", "walking to neighbor\\u2019s house or family\\u2019s house for social reasons"),
            new MET(3.0, "17165", "walking the dog"),
            new MET(3.0, "17170", "walking, 2.5 mph, level, firm surface"),
            new MET(3.3, "17180", "walking, 2.5 mph, downhill"),
            new MET(3.5, "17190", "walking, 2.8 to 3.2 mph, level, moderate pace, firm surface"),
            new MET(4.3, "17200", "walking, 3.5 mph, level, brisk, firm surface, walking for exercise"),
            new MET(5.3, "17210", "walking, 2.9 to 3.5 mph, uphill, 1 to 5% grade"),
            new MET(8.0, "17211", "walking, 2.9 to 3.5 mph, uphill, 6% to 15% grade"),
            new MET(5.0, "17220", "walking, 4.0 mph, level, firm surface, very brisk pace"),
            new MET(7.0, "17230", "walking, 4.5 mph, level, firm surface, very, very brisk"),
            new MET(8.3, "17231", "walking, 5.0 mph, level, firm surface"),
            new MET(9.8, "17235", "walking, 5.0 mph, uphill, 3% grade"),
            new MET(3.5, "17250", "walking, for pleasure, work break"),
            new MET(4.8, "17260", "walking, grass track"),
            new MET(4.5, "17262", "walking, normal pace, plowed field or sand"),
            new MET(4.0, "17270", "walking, to work or class (Taylor Code 015)"),
            new MET(2.5, "17280", "walking, to and from an outhouse"),
            new MET(4.8, "17302", "walking, for exercise, 3.5 to 4 mph, with ski poles, Nordic walking, level, moderate pace"),
            new MET(9.5, "17305", "walking, for exercise, 5.0 mph, with ski poles, Nordic walking, level, fast pace"),
            new MET(6.8, "17310", "walking, for exercise, with ski poles, Nordic walking, uphill"),
            new MET(6.0, "17320", "walking, backwards, 3.5 mph, level"),
            new MET(8.0, "17325", "walking, backwards, 3.5 mph, uphill, 5% grade"),
            new MET(2.5, "18010", "boating, power, driving"),
            new MET(1.3, "18012", "boating, power, passenger, light"),
            new MET(4.0, "18020", "canoeing, on camping trip (Taylor Code 270)"),
            new MET(3.3, "18025", "canoeing, harvesting wild rice, knocking rice off the stalks"),
            new MET(7.0, "18030", "canoeing, portaging"),
            new MET(2.8, "18040", "canoeing, rowing, 2.0-3.9 mph, light effort"),
            new MET(5.8, "18050", "canoeing, rowing, 4.0-5.9 mph, moderate effort"),
            new MET(12.5, "18060", "canoeing, rowing, kayaking, competition, >6 mph, vigorous effort"),
            new MET(3.5, "18070", "canoeing, rowing, for pleasure, general (Taylor Code 250)"),
            new MET(12.0, "18080", "canoeing, rowing, in competition, or crew or sculling (Taylor Code 260)"),
            new MET(3.0, "18090", "diving, springboard or platform"),
            new MET(5.0, "18100", "kayaking, moderate effort"),
            new MET(4.0, "18110", "paddle boat"),
            new MET(3.0, "18120", "sailing, boat and board sailing, windsurfing, ice sailing, general (Taylor Code 235)"),
            new MET(4.5, "18130", "sailing, in competition"),
            new MET(3.3, "18140", "sailing, Sunfish/Laser/Hobby Cat, Keel boats, ocean sailing, yachting, leisure"),
            new MET(6.0, "18150", "skiing, water or wakeboarding (Taylor Code 220)"),
            new MET(7.0, "18160", "jet skiing, driving, in water"),
            new MET(15.8, "18180", "skindiving, fast"),
            new MET(11.8, "18190", "skindiving, moderate"),
            new MET(7.0, "18200", "skindiving, scuba diving, general (Taylor Code 310)"),
            new MET(5.0, "18210", "snorkeling (Taylor Code 310)"),
            new MET(3.0, "18220", "surfing, body or board, general"),
            new MET(5.0, "18222", "surfing, body or board, competitive"),
            new MET(6.0, "18225", "paddle boarding, standing"),
            new MET(9.8, "18230", "swimming laps, freestyle, fast, vigorous effort"),
            new MET(5.8, "18240", "swimming laps, freestyle, front crawl, slow, light or moderate effort"),
            new MET(9.5, "18250", "swimming, backstroke, general, training or competition"),
            new MET(4.8, "18255", "swimming, backstroke, recreational"),
            new MET(10.3, "18260", "swimming, breaststroke, general, training or competition"),
            new MET(5.3, "18265", "swimming, breaststroke, recreational"),
            new MET(13.8, "18270", "swimming, butterfly, general"),
            new MET(10.0, "18280", "swimming, crawl, fast speed, ~75 yards/minute, vigorous effort"),
            new MET(8.3, "18290", "swimming, crawl, medium speed, ~50 yards/minute, vigorous effort"),
            new MET(6.0, "18300", "swimming, lake, ocean, river (Taylor Codes 280, 295)"),
            new MET(6.0, "18310", "swimming, leisurely, not lap swimming, general"),
            new MET(7.0, "18320", "swimming, sidestroke, general"),
            new MET(8.0, "18330", "swimming, synchronized"),
            new MET(9.8, "18340", "swimming, treading water, fast, vigorous effort"),
            new MET(3.5, "18350", "swimming, treading water, moderate effort, general"),
            new MET(2.3, "18352", "tubing, floating on a river, general"),
            new MET(5.5, "18355", "water aerobics, water calisthenics"),
            new MET(10.0, "18360", "water polo"),
            new MET(3.0, "18365", "water volleyball"),
            new MET(2.5, "18367", "water walking, light effort, slow pace"),
            new MET(4.5, "18368", "water walking, moderate effort, moderate pace"),
            new MET(6.8, "18369", "water walking, vigorous effort, brisk pace"),
            new MET(5.0, "18370", "whitewater rafting, kayaking, or canoeing"),
            new MET(5.0, "18380", "windsurfing, not pumping for speed"),
            new MET(11.0, "18385", "windsurfing or kitesurfing, crossing trial"),
            new MET(13.5, "18390", "windsurfing, competition, pumping for speed"),
            new MET(7.5, "19005", "dog sledding, mushing"),
            new MET(2.5, "19006", "dog sledding, passenger"),
            new MET(6.0, "19010", "moving ice house, set up/drill holes"),
            new MET(2.0, "19011", "ice fishing, sitting"),
            new MET(14.0, "19018", "skating, ice dancing"),
            new MET(5.5, "19020", "skating, ice, 9 mph or less"),
            new MET(7.0, "19030", "skating, ice, general (Taylor Code 360)"),
            new MET(9.0, "19040", "skating, ice, rapidly, more than 9 mph, not competitive"),
            new MET(13.3, "19050", "skating, speed, competitive"),
            new MET(7.0, "19060", "ski jumping, climb up carrying skis"),
            new MET(7.0, "19075", "skiing, general"),
            new MET(6.8, "19080", "skiing, cross country, 2.5 mph, slow or light effort, ski walking"),
            new MET(9.0, "19090", "skiing, cross country, 4.0-4.9 mph, moderate speed and effort, general"),
            new MET(12.5, "19100", "skiing, cross country, 5.0-7.9 mph, brisk speed, vigorous effort"),
            new MET(15.0, "19110", "skiing, cross country, >8.0 mph, elite skier, racing"),
            new MET(15.5, "19130", "skiing, cross country, hard snow, uphill, maximum, snow mountaineering"),
            new MET(13.3, "19135", "skiing, cross-country, skating"),
            new MET(13.5, "19140", "skiing, cross-country, biathlon, skating technique"),
            new MET(4.3, "19150", "skiing, downhill, alpine or snowboarding, light effort, active time only"),
            new MET(5.3, "19160", "skiing, downhill, alpine or snowboarding, moderate effort, general, active time only"),
            new MET(8.0, "19170", "skiing, downhill, vigorous effort, racing"),
            new MET(12.5, "19175", "skiing, roller, elite racers"),
            new MET(7.0, "19180", "sledding, tobogganing, bobsledding, luge (Taylor Code 370)"),
            new MET(5.3, "19190", "snow shoeing, moderate effort"),
            new MET(10.0, "19192", "snow shoeing, vigorous effort"),
            new MET(3.5, "19200", "snowmobiling, driving, moderate"),
            new MET(2.0, "19202", "snowmobiling, passenger"),
            new MET(5.3, "19252", "snow shoveling, by hand, moderate effort"),
            new MET(7.5, "19254", "snow shoveling, by hand, vigorous effort"),
            new MET(2.5, "19260", "snow blower, walking and pushing"),
            new MET(1.3, "20000", "sitting in church, in service, attending a ceremony, sitting quietly"),
            new MET(2.0, "20001", "sitting, playing an instrument at church"),
            new MET(1.8, "20005", "sitting in church, talking or singing, attending a ceremony, sitting, active participation"),
            new MET(1.3, "20010", "sitting, reading religious materials at home"),
            new MET(1.3, "20015", "standing quietly in church, attending a ceremony"),
            new MET(2.0, "20020", "standing, singing in church, attending a ceremony, standing, active participation"),
            new MET(1.3, "20025", "kneeling in church or at home, praying"),
            new MET(1.8, "20030", "standing, talking in church"),
            new MET(2.0, "20035", "walking in church"),
            new MET(2.0, "20036", "walking, less than 2.0 mph, very slow"),
            new MET(3.5, "20037", "walking, 3.0 mph, moderate speed, not carrying anything"),
            new MET(4.3, "20038", "walking, 3.5 mph, brisk speed, not carrying anything"),
            new MET(2.0, "20039", "walk/stand combination for religious purposes, usher"),
            new MET(5.0, "20040", "praise with dance or run, spiritual dancing in church"),
            new MET(2.5, "20045", "serving food at church"),
            new MET(2.0, "20046", "preparing food at church"),
            new MET(3.3, "20047", "washing dishes, cleaning kitchen at church"),
            new MET(1.5, "20050", "eating at church"),
            new MET(2.0, "20055", "eating/talking at church or standing eating, American Indian Feast days"),
            new MET(3.3, "20060", "cleaning church"),
            new MET(4.0, "20061", "general yard work at church"),
            new MET(3.5, "20065", "standing, moderate effort (e.g., lifting heavy objects, assembling at fast rate)"),
            new MET(4.5, "20095", "standing, moderate-to-heavy effort, manual labor, lifting \\u2265 50 lbs, heavy maintenance"),
            new MET(1.3, "20100", "typing, electric, manual, or computer"),
            new MET(1.5, "21000", "sitting, meeting, general, and/or with talking involved"),
            new MET(1.5, "21005", "sitting, light office work, in general"),
            new MET(2.5, "21010", "sitting, moderate work"),
            new MET(2.3, "21015", "standing, light work (filing, talking, assembling)"),
            new MET(2.0, "21016", "sitting, child care, only active periods"),
            new MET(3.0, "21017", "standing, child care, only active periods"),
            new MET(3.5, "21018", "walk/run play with children, moderate, only active periods"),
            new MET(5.8, "21019", "walk/run play with children, vigorous, only active periods"),
            new MET(3.0, "21020", "standing, light/moderate work (e.g., pack boxes, assemble/repair, set up chairs/furniture)"),
            new MET(3.5, "21025", "standing, moderate (lifting 50 lbs., assembling at fast rate)"),
            new MET(4.5, "21030", "standing, moderate/heavy work"),
            new MET(1.3, "21035", "typing, electric, manual, or computer"),
            new MET(2.0, "21040", "walking, less than 2.0 mph, very slow"),
            new MET(3.5, "21045", "walking, 3.0 mph, moderate speed, not carrying anything"),
            new MET(4.3, "21050", "walking, 3.5 mph, brisk speed, not carrying anything"),
            new MET(3.5, "21055", "walking, 2.5 mph slowly and carrying objects less than 25 pounds"),
            new MET(4.5, "21060", "walking, 3.0 mph moderately and carrying objects less than 25 pounds, pushing something"),
            new MET(4.8, "21065", "walking, 3.5 mph, briskly and carrying objects less than 25 pounds"),
            new MET(3.0, "21070", "walk/stand combination, for volunteer purposes"),
            new MET(1.5, "21000", "sitting, meeting, general, and/or with talking involved"),
            new MET(1.5, "21005", "sitting, light office work, in general"),
            new MET(2.5, "21010", "sitting, moderate work"),
            new MET(2.3, "21015", "standing, light work (filing, talking, assembling)"),
            new MET(2.0, "21016", "sitting, child care, only active periods"),
            new MET(3.0, "21017", "standing, child care, only active periods"),
            new MET(3.5, "21018", "walk/run play with children, moderate, only active periods"),
            new MET(5.8, "21019", "walk/run play with children, vigorous, only active periods"),
            new MET(3.0, "21020", "standing, light/moderate work (e.g., pack boxes, assemble/repair, set up chairs/furniture)"),
            new MET(3.5, "21025", "standing, moderate (lifting 50 lbs., assembling at fast rate)"),
            new MET(4.5, "21030", "standing, moderate/heavy work"),
            new MET(1.3, "21035", "typing, electric, manual, or computer"),
            new MET(2.0, "21040", "walking, less than 2.0 mph, very slow"),
            new MET(3.5, "21045", "walking, 3.0 mph, moderate speed, not carrying anything"),
            new MET(4.3, "21050", "walking, 3.5 mph, brisk speed, not carrying anything"),
            new MET(3.5, "21055", "walking, 2.5 mph slowly and carrying objects less than 25 pounds"),
            new MET(4.5, "21060", "walking, 3.0 mph moderately and carrying objects less than 25 pounds, pushing something"),
            new MET(4.8, "21065", "walking, 3.5 mph, briskly and carrying objects less than 25 pounds"),
            new MET(3.0, "21070", "walk/stand combination, for volunteer purposes")
        ];
        function byCode(code) {
            for (var _i = 0, mets_2 = mets; _i < mets_2.length; _i++) {
                var entry = mets_2[_i];
                if (entry.code === code)
                    return entry;
            }
            return null;
        }
        mets_1.byCode = byCode;
        ;
        function estimateMETs(kcal, kg, hours) {
            return kcal / kg / hours;
        }
        mets_1.estimateMETs = estimateMETs;
        function estimateKg(kcal, mets, hours) {
            return kcal / (mets * hours);
        }
        mets_1.estimateKg = estimateKg;
        function estimateHours(kcal, mets, kg) {
            return kcal / (mets * kg);
        }
        mets_1.estimateHours = estimateHours;
        function toKCal(mets, weight) {
            return (mets * 3.5 * weight) / 200;
        }
        mets_1.toKCal = toKCal;
        function fromVO2(vO2) {
            return vO2 / 3.5;
        }
        mets_1.fromVO2 = fromVO2;
        function karvonen(mets, intensity) {
            return intensity * (mets - 1) + 1;
        }
        mets_1.karvonen = karvonen;
        function target(vO2Max, intensity) {
            var mets = fromVO2(vO2Max);
            var targetMets = karvonen(mets, intensity);
            return targetMets;
        }
        mets_1.target = target;
    })(mets = Fit.mets || (Fit.mets = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var cardio;
    (function (cardio) {
        var cardiac;
        (function (cardiac) {
            var Astrand = (function () {
                function Astrand() {
                }
                Astrand.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 216.6 - (0.84 * age);
                };
                Astrand.prototype.age = function (hr) {
                    return (hr - 216.6) / -0.84;
                };
                return Astrand;
            }());
            cardiac.Astrand = Astrand;
            var HF = (function () {
                function HF() {
                }
                HF.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 220 - age;
                };
                HF.prototype.age = function (hr) {
                    return 220 - hr;
                };
                return HF;
            }());
            cardiac.HF = HF;
            var Gellish = (function () {
                function Gellish() {
                }
                Gellish.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 207 - (0.7 * age);
                };
                Gellish.prototype.age = function (hr) {
                    return (hr - 207.0) / -0.7;
                };
                return Gellish;
            }());
            cardiac.Gellish = Gellish;
            var Gulati = (function () {
                function Gulati() {
                }
                Gulati.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 206 - (0.88 * age);
                };
                Gulati.prototype.age = function (hr) {
                    return (hr - 206.0) / -0.88;
                };
                return Gulati;
            }());
            cardiac.Gulati = Gulati;
            var LM = (function () {
                function LM() {
                }
                LM.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 206.3 - (0.711 * age);
                };
                LM.prototype.age = function (hr) {
                    return (hr - 206.3) / -0.711;
                };
                return LM;
            }());
            cardiac.LM = LM;
            var Miller = (function () {
                function Miller() {
                }
                Miller.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 217 - (0.85 * age);
                };
                Miller.prototype.age = function (hr) {
                    return (hr - 217) / -0.85;
                };
                return Miller;
            }());
            cardiac.Miller = Miller;
            var Nes = (function () {
                function Nes() {
                }
                Nes.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 211 - (0.64 * age);
                };
                Nes.prototype.age = function (hr) {
                    return (hr - 211) / -0.64;
                };
                return Nes;
            }());
            cardiac.Nes = Nes;
            var OaklandL = (function () {
                function OaklandL() {
                }
                OaklandL.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 206.9 - (0.67 * age);
                };
                OaklandL.prototype.age = function (hr) {
                    return (hr - 206.9) / -0.67;
                };
                return OaklandL;
            }());
            cardiac.OaklandL = OaklandL;
            var OaklandNL1 = (function () {
                function OaklandNL1() {
                }
                OaklandNL1.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 191.5 - (0.002 * Math.pow(age, 2));
                };
                OaklandNL1.prototype.age = function (hr) {
                    return 5 * Math.sqrt(3830 - 20 * hr);
                };
                return OaklandNL1;
            }());
            cardiac.OaklandNL1 = OaklandNL1;
            var OaklandNL2 = (function () {
                function OaklandNL2() {
                }
                OaklandNL2.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 163 + (1.16 * age) - (0.018 * Math.pow(age, 2));
                };
                OaklandNL2.prototype.age = function (hr) {
                    return (-10. / 9) * (Math.sqrt(8176 - 45 * hr) - 29);
                };
                return OaklandNL2;
            }());
            cardiac.OaklandNL2 = OaklandNL2;
            var RL = (function () {
                function RL() {
                }
                RL.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 205.8 - (0.685 * age);
                };
                RL.prototype.age = function (hr) {
                    return (hr - 205.8) / -0.685;
                };
                return RL;
            }());
            cardiac.RL = RL;
            var TMS = (function () {
                function TMS() {
                }
                TMS.prototype.predict = function (dob) {
                    var age = dob.delta("years");
                    return 208 - (0.7 * age);
                };
                TMS.prototype.age = function (hr) {
                    return (hr - 208) / -0.7;
                };
                return TMS;
            }());
            cardiac.TMS = TMS;
            function mean_arterial_pressure(diastolic_bp, systolic_bp) {
                return ((2 * diastolic_bp) + systolic_bp) / 3;
            }
            cardiac.mean_arterial_pressure = mean_arterial_pressure;
            function karvonen(intensity, rest, maximum) {
                return intensity * (maximum - rest) + rest;
            }
            cardiac.karvonen = karvonen;
            function zoladz(hrMax, adjuster) {
                return hrMax - adjuster;
            }
            cardiac.zoladz = zoladz;
        })(cardiac = cardio.cardiac || (cardio.cardiac = {}));
    })(cardio = Fit.cardio || (Fit.cardio = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var energy;
    (function (energy) {
        var BMREstimator = (function () {
            function BMREstimator(gender) {
                this.gender = gender;
            }
            BMREstimator.prototype.predict = function (dob, weight, height) {
                throw new Error("The prediction method is not implemented");
            };
            return BMREstimator;
        }());
        var HB = (function (_super) {
            __extends(HB, _super);
            function HB() {
                _super.apply(this, arguments);
            }
            HB.prototype.predict = function (dob, weight, height) {
                var age = dob.delta("years");
                if (this.gender === Fit.Gender.Female) {
                    return (9.5634 * weight) + (1.8496 * height) - (4.6756 * age) + 655.0955;
                }
                return (13.7516 * weight) + (5.0033 * height) - (6.7550 * age) + 66.4730;
            };
            return HB;
        }(BMREstimator));
        energy.HB = HB;
        var RevisedHB = (function (_super) {
            __extends(RevisedHB, _super);
            function RevisedHB() {
                _super.apply(this, arguments);
            }
            RevisedHB.prototype.predict = function (dob, weight, height) {
                var age = dob.delta("years");
                if (this.gender === Fit.Gender.Female) {
                    return (9.5634 * weight) + (1.8496 * height) - (4.6756 * age) + 655.0955;
                }
                return (13.7516 * weight) + (5.0033 * height) - (6.7550 * age) + 66.4730;
            };
            return RevisedHB;
        }(BMREstimator));
        energy.RevisedHB = RevisedHB;
        var MSJ = (function (_super) {
            __extends(MSJ, _super);
            function MSJ() {
                _super.apply(this, arguments);
            }
            MSJ.prototype.predict = function (dob, weight, height) {
                var age = dob.delta("years");
                if (this.gender === Fit.Gender.Female) {
                    return (9.99 * weight + 6.25 * height - 4.92 * age - 161);
                }
                return (9.99 * weight + 6.25 * height - 4.92 * age + 5);
            };
            return MSJ;
        }(BMREstimator));
        energy.MSJ = MSJ;
        var RMR = (function () {
            function RMR(gender, dob, weight, height) {
                this.gender = gender;
                this.dob = dob;
                this.weight = weight;
                this.height = height;
            }
            RMR.prototype.quick = function () {
                if (this.gender === Fit.Gender.Female) {
                    return this.weight * 22;
                }
                return this.weight * 24.2;
            };
            RMR.prototype.bsa = function (bsa) {
                if (this.gender === Fit.Gender.Female) {
                    return bsa * 840;
                }
                return bsa * 912;
            };
            return RMR;
        }());
        energy.RMR = RMR;
        function kma(lbm) {
            return 370 + (21.6 * lbm);
        }
        energy.kma = kma;
        function cunningham(lbm) {
            return 500 + (22 * lbm);
        }
        energy.cunningham = cunningham;
        var TEEEstimator = (function () {
            function TEEEstimator(gender, pal) {
                this.gender = gender;
                this.pal = pal;
            }
            TEEEstimator.prototype.predict = function (dob, weight, height) {
                throw new Error("The prediction method is not implemented");
            };
            TEEEstimator.prototype.fromActivity = function (weight, mets) {
                return (mets * 3.5 * weight) / 200;
            };
            return TEEEstimator;
        }());
        var ChildTEE = (function (_super) {
            __extends(ChildTEE, _super);
            function ChildTEE() {
                _super.apply(this, arguments);
            }
            ChildTEE.prototype.predict = function (dob, weight, height) {
                var age = dob.delta("years");
                if (this.pal === Fit.PAL.Sedentary && this.gender === Fit.Gender.Male) {
                    return 88.5 - (61.9 * age) + 1 * ((26.7 * weight) + (903 * height));
                }
                else if (this.pal === Fit.PAL.Sedentary && this.gender === Fit.Gender.Female) {
                    return 135.3 - (30.8 * age) + 1 * ((10 * weight) + (934 * height));
                }
                else if (this.pal === Fit.PAL.Low && this.gender === Fit.Gender.Male) {
                    return 88.5 - (61.9 * age) + 1.13 * ((26.7 * weight) + (903 * height));
                }
                else if (this.pal === Fit.PAL.Low && this.gender === Fit.Gender.Female) {
                    return 135.3 - (30.8 * age) + 1.16 * ((10 * weight) + (934 * height));
                }
                else if (this.pal === Fit.PAL.Active && this.gender === Fit.Gender.Male) {
                    return 88.5 - (61.9 * age) + 1.26 * ((26.7 * weight) + (903 * height));
                }
                else if (this.pal === Fit.PAL.Active && this.gender === Fit.Gender.Female) {
                    return 135.3 - (30.8 * age) + 1.31 * ((10 * weight) + (934 * height));
                }
                else if (this.pal === Fit.PAL.VeryActive && this.gender === Fit.Gender.Male) {
                    return 88.5 - (61.9 * age) + 1.42 * ((26.7 * weight) + (903 * height));
                }
                else if (this.pal === Fit.PAL.VeryActive && this.gender === Fit.Gender.Female) {
                    return 135.3 - (30.8 * age) + 1.56 * ((10 * weight) + (934 * height));
                }
                return 0;
            };
            return ChildTEE;
        }(TEEEstimator));
        energy.ChildTEE = ChildTEE;
        var AdultTEE = (function (_super) {
            __extends(AdultTEE, _super);
            function AdultTEE() {
                _super.apply(this, arguments);
            }
            AdultTEE.prototype.predict = function (dob, weight, height) {
                var age = dob.delta("years");
                if (this.pal === Fit.PAL.Sedentary && this.gender === Fit.Gender.Male) {
                    return 662 - (9.53 * age) + 1 * ((15.9 * weight) + (540 * height));
                }
                else if (this.pal === Fit.PAL.Sedentary && this.gender === Fit.Gender.Female) {
                    return 354 - (6.91 * age) + 1 * ((9.36 * weight) + (726 * height));
                }
                else if (this.pal === Fit.PAL.Low && this.gender === Fit.Gender.Male) {
                    return 662 - (9.53 * age) + 1.11 * ((15.9 * weight) + (540 * height));
                }
                else if (this.pal === Fit.PAL.Low && this.gender === Fit.Gender.Female) {
                    return 662 - (9.53 * age) + 1.12 * ((15.9 * weight) + (540 * height));
                }
                else if (this.pal === Fit.PAL.Active && this.gender === Fit.Gender.Male) {
                    return 662 - (9.53 * age) + 1.25 * ((15.9 * weight) + (540 * height));
                }
                else if (this.pal === Fit.PAL.Active && this.gender === Fit.Gender.Female) {
                    return 662 - (9.53 * age) + 1.27 * ((15.9 * weight) + (540 * height));
                }
                else if (this.pal === Fit.PAL.VeryActive && this.gender === Fit.Gender.Male) {
                    return 662 - (9.53 * age) + 1.48 * ((15.9 * weight) + (540 * height));
                }
                else if (this.pal === Fit.PAL.VeryActive && this.gender === Fit.Gender.Female) {
                    return 662 - (9.53 * age) + 1.45 * ((15.9 * weight) + (540 * height));
                }
                return 0;
            };
            return AdultTEE;
        }(TEEEstimator));
        energy.AdultTEE = AdultTEE;
    })(energy = Fit.energy || (Fit.energy = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var cardio;
    (function (cardio) {
        var ResidualVolume = (function () {
            function ResidualVolume(gender, dob, weight, height) {
                this.gender = gender;
                this.dob = dob;
                this.weight = weight;
                this.height = height;
            }
            ResidualVolume.prototype.normal = function () {
                var age = this.dob.delta("years");
                var heightCm = this.height * 100;
                return 0.0275 * age + 0.0189 * heightCm - 2.6139;
            };
            ResidualVolume.prototype.overweight = function () {
                var age = this.dob.delta("years");
                var heightCm = this.height * 100;
                return 0.0277 * age + 0.0138 * heightCm - 2.3967;
            };
            ResidualVolume.prototype.berglund = function () {
                var age = this.dob.delta("years");
                var heightCm = this.height * 100;
                if (this.gender === Fit.Gender.Female) {
                    return 0.007 * age + 0.0268 * this.height - 3.42;
                }
                return (0.022 * age) + (0.0198 * heightCm) - (0.015 * this.weight) - 1.54;
            };
            ResidualVolume.prototype.black = function () {
                var age = this.dob.delta("years");
                var heightCm = this.height * 100;
                return 0.21 * age + 0.023 * heightCm - 2.978;
            };
            ResidualVolume.prototype.boren = function () {
                var age = this.dob.delta("years");
                var heightCm = this.height * 100;
                return (0.0115 * age) + (0.019 * heightCm) - 2.24;
            };
            ResidualVolume.prototype.goldman = function () {
                var age = this.dob.delta("years");
                var heightCm = this.height * 100;
                if (this.gender === Fit.Gender.Female) {
                    return 0.009 * age + 0.032 * heightCm - 3.9;
                }
                return (0.017 * age) + (0.027 * heightCm) - 3.477;
            };
            ResidualVolume.prototype.obrien = function (bsa) {
                var age = this.dob.delta("years");
                var heightCm = this.height * 100;
                return (0.03 * age) + (0.0387 * heightCm) - (0.73 * bsa) - 4.78;
            };
            return ResidualVolume;
        }());
        cardio.ResidualVolume = ResidualVolume;
        var VO2 = (function () {
            function VO2(gender, dob, weight, height) {
                this.gender = gender;
                this.dob = dob;
                this.weight = weight;
                this.height = height;
            }
            VO2.prototype.reserve = function (vo2Max, vo2Rest) {
                if (vo2Rest === void 0) { vo2Rest = 3.5; }
                return vo2Max - vo2Rest;
            };
            VO2.prototype.target = function (vo2Max, vo2Rest, intensity) {
                return intensity * (vo2Max - vo2Rest) + vo2Rest;
            };
            VO2.prototype.cooper = function (distance) {
                return 0.0268 * distance - 11.3;
            };
            VO2.prototype.walkingGross = function (speed, grade) {
                return (0.1 * speed) + (1.8 * speed * grade);
            };
            VO2.prototype.runningGross = function (speed, grade) {
                return (0.2 * speed) + (0.9 * speed * grade);
            };
            VO2.prototype.legErgometryGross = function (mass, work) {
                return 3.5 + 1.8 * (work / mass);
            };
            VO2.prototype.armErgometryGross = function (mass, work) {
                return (3.0 * work / mass);
            };
            VO2.prototype.steppingGross = function (height, frequency) {
                return (0.2 * frequency) + (frequency * this.height * 1.8 * 1.33);
            };
            VO2.prototype.usop = function (hrMax, restingHR) {
                return 15.3 * (hrMax / restingHR);
            };
            VO2.prototype.foxErgometry = function (hr5) {
                return 6300.0 - (19.26 * hr5);
            };
            VO2.prototype.ebbelingTreadmill = function (speed, hr) {
                var age = this.dob.delta("years");
                if (this.gender === Fit.Gender.Female) {
                    return 15.1 + (21.8 * speed) - (0.327 * hr) - (0.263 * age) + (0.00504 * (hr * age)) + (5.48 * 0.0);
                }
                return 15.1 + (21.8 * speed) - (0.327 * hr) - (0.263 * age) + (0.00504 * (hr * age)) + (5.48 * 1.0);
            };
            VO2.prototype.kline = function (time, hrPeak) {
                var age = this.dob.delta("years");
                if (this.gender === Fit.Gender.Female) {
                    return 132.853 - 0.0769 * this.weight - 0.3877 * age + 6.315 * 0.0 - 3.2649 * time - 0.1565 * hrPeak;
                }
                return 132.853 - 0.0769 * this.weight - 0.3877 * age + 6.315 * 1.0 - 3.2649 * time - 0.1565 * hrPeak;
            };
            VO2.prototype.larsen = function (time, hr) {
                if (this.gender === Fit.Gender.Female) {
                    return 100.16 + (7.30 * 0.0) - (0.164 * this.weight) - (1.273 * time) - (0.1563 * hr);
                }
                return 100.16 + (7.30 * 1.0) - (0.164 * this.weight) - (1.273 * time) - (0.1563 * hr);
            };
            VO2.prototype.astrandStep = function (hr) {
                if (this.gender === Fit.Gender.Female) {
                    return 3.750 * ((this.weight + 3) / (hr - 65));
                }
                return 3.744 * ((this.weight + 5) / (hr - 62));
            };
            VO2.prototype.qcStep = function (hr) {
                if (this.gender === Fit.Gender.Female) {
                    return 65.81 - (0.1847 * hr);
                }
                return 111.33 - (0.42 * hr);
            };
            VO2.prototype.georgeRW = function (time) {
                if (this.gender === Fit.Gender.Female) {
                    return 88.02 - (0.1656 * this.weight) - (2.76 * time) + (3.716 * 0.0);
                }
                return 88.02 - (0.1656 * this.weight) - (2.76 * time) + (3.716 * 1.0);
            };
            VO2.prototype.georgeSteady = function (time, hr) {
                if (this.gender === Fit.Gender.Female) {
                    return 100.5 - 0.1636 * this.weight - 1.438 * time - 0.1928 * hr;
                }
                return 100.5 - 0.1636 * this.weight - 1.438 * time - 0.1928 * hr + 8.344;
            };
            VO2.prototype.georgeTreadmill = function (speed, hr) {
                if (this.gender === Fit.Gender.Female) {
                    return 54.07 - (0.1938 * this.weight) - (4.47 * speed) + (0.01453 * hr) + (7.062 * 0.0);
                }
                return 54.07 - (0.1938 * this.weight) - (4.47 * speed) + (0.01453 * hr) + (7.062 * 1.0);
            };
            VO2.prototype.treadmillSubmaxSingleStage = function (sm1, hr1, hrmax) {
                if (this.gender === Fit.Gender.Female) {
                    return sm1 * ((hrmax - 72) / (hr1 - 72));
                }
                return sm1 * ((hrmax - 61) / (hr1 - 61));
            };
            VO2.prototype.treadmillSubmaxVO2Multistage = function (sm1, hr1, sm2, hr2, hrMax) {
                var b = (sm2 - sm1) / (hr2 - hr1);
                return sm2 + b * (hrMax - hr2);
            };
            VO2.prototype.curetonChild = function (time) {
                var age = this.dob.delta("years");
                var bmi = (this.weight / Math.pow(this.height / 100, 2));
                return 108.94 - (8.41 * time) + 0.34 * 108.94 - (8.41 * time) + 0.34 * Math.pow(time, 2) + 0.21 * age - (0.84 * bmi);
            };
            VO2.prototype.balke = function (time) {
                if (this.gender === Fit.Gender.Female) {
                    return 1.38 * time + 5.22;
                }
                return 1.444 * time + 14.99;
            };
            VO2.prototype.balke15MinRun = function (distance) {
                return 0.0178 * distance + 9.6;
            };
            VO2.prototype.bruceMale = function (time, time2, time3) {
                return 14.76 - 1.379 * time + 0.451 * time2 - 0.012 * time3;
            };
            VO2.prototype.bruceFemale = function (time) {
                return 4.38 * time - 3.90;
            };
            VO2.prototype.bruceEC = function (time) {
                return (2.282 * time) + 8.545;
            };
            VO2.prototype.leger = function (speed) {
                var age = this.dob.delta("years");
                return 31.025 + (3.238 * speed) - (3.248 * age) + 0.1536 * (age * speed);
            };
            VO2.prototype.gilbertDaniels = function (velocity, time) {
                var numerator = 0.000104 * Math.pow(velocity, 2) + 0.182258 * velocity - 4.6;
                var denominator = 0.2989558 * Math.exp(-0.1932605 * time) + 0.1894393 * Math.exp(-0.012778 * time) + 0.8;
                return numerator / denominator;
            };
            return VO2;
        }());
        cardio.VO2 = VO2;
    })(cardio = Fit.cardio || (Fit.cardio = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var composition;
    (function (composition) {
        var Density = (function () {
            function Density(gender, dob, height, weight) {
                this.dbAtRV = function (bd) {
                    if (this.gender === Fit.Gender.Female) {
                        return 0.4745 * bd + 0.5173;
                    }
                    return 0.5829 * bd + 0.4059;
                };
                this.skinfoldDbChild = function (sum2SKF) {
                    if (this.gender === Fit.Gender.Female) {
                        return (0.610 * sum2SKF) + 5.1;
                    }
                    return (0.735 * sum2SKF) + 1.0;
                };
                this.skinfoldDbBlackHispanicFemale = function (sum7SKF) {
                    var age = this.dob.delta("years");
                    if (this.gender === Fit.Gender.Female) {
                        return 1.0970 - (0.00046971 * sum7SKF) + (0.00000056 * Math.pow(sum7SKF, 2)) - (0.00012828 * age);
                    }
                    return 1.112 - (0.00043499 * sum7SKF) + (0.00000055 * Math.pow(sum7SKF, 2)) - (0.00028826 * age);
                };
                this.skinfoldDbWhiteMale = function (sum3SKF) {
                    var age = this.dob.delta("years");
                    return 1.10938 - (0.0008267 * sum3SKF) + (0.0000016 * Math.pow(sum3SKF, 2)) - (0.0002574 * age);
                };
                this.skinfoldDbWhiteFemaleAnorexic = function (sum3SKF) {
                    var age = this.dob.delta("years");
                    return 1.0994921 - (0.0009929 * sum3SKF) + (0.0000023 * Math.pow(sum3SKF, 2)) - (0.00001392 * age);
                };
                this.skinfoldDbAthlete = function (sum) {
                    var age = this.dob.delta("years");
                    if (this.gender === Fit.Gender.Female) {
                        return 1.096095 - (0.0006952 * sum) + (0.0000011 * Math.pow(sum, 2)) - (0.0000714 * age);
                    }
                    return 1.112 - (0.00043499 * sum) + (0.00000055 * Math.pow(sum, 2)) - (0.00028826 * age);
                };
                this.skinfoldDbCollegiateAthleteBlack = function (sum) {
                    if (this.gender === Fit.Gender.Female) {
                        return 8.997 + (0.2468 * sum) - (1.998);
                    }
                    return 8.997 + (0.2468 * sum) - (6.343 * 1) - (1.998);
                };
                this.skinfoldDbCollegiateAthleteWhite = function (sum3SKF) {
                    if (this.gender === Fit.Gender.Female) {
                        return 8.997 + (0.2468 * sum3SKF);
                    }
                    return 8.997 + (0.2468 * sum3SKF) - (6.343 * 1);
                };
                this.bodyVol = function (uww, rv, gv) {
                    var waterDensity = 1;
                    return ((this.weight - uww) / waterDensity) - (rv - gv);
                };
                this.brozekBf = function (bd) {
                    return (4.570 / bd) - 4.142;
                };
                this.ortizBf = function (bd) {
                    return (4.832 / bd) - 4.369;
                };
                this.SchuttleBf = function (bd) {
                    return (4.374 / bd) - 3.928;
                };
                this.siriBf = function (bd) {
                    return (4.95 / bd) - 4.5;
                };
                this.wagnerBf = function (bd) {
                    return (4.86 / bd) - 4.39;
                };
                this.childBmiToBf = function () {
                    var age = this.dob.delta("years");
                    var bmi = (this.weight / Math.pow(this.height / 100, 2));
                    if (this.gender === Fit.Gender.Female) {
                        return ((1.51 * bmi) - (0.70 * age) + 1.4) / 100;
                    }
                    return ((1.51 * bmi) - (0.70 * age) - (3.6) + 1.4) / 100;
                };
                this.adultBmiToBf = function () {
                    var age = this.dob.delta("years");
                    var bmi = (this.weight / Math.pow(this.height / 100, 2));
                    if (this.gender === Fit.Gender.Female) {
                        return ((1.20 * bmi) - (0.23 * age) - 5.4) / 100;
                    }
                    return ((1.20 * bmi) - (0.23 * age) - (10.8) - 5.4) / 100;
                };
                this.WaistBF = function (waist) {
                    var weightLb = this.weight * 2.2;
                    if (this.gender === Fit.Gender.Female) {
                        return 100 * (-76.76 + 4.15 * waist - 0.082 * weightLb) / weightLb;
                    }
                    return 100 * (-98.42 + 4.15 * waist - 0.082 * weightLb) / weightLb;
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return Density;
        }());
        composition.Density = Density;
    })(composition = Fit.composition || (Fit.composition = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var composition;
    (function (composition) {
        function dailyWaterNeed() {
            return 0.033 * this.weight;
        }
        composition.dailyWaterNeed = dailyWaterNeed;
    })(composition = Fit.composition || (Fit.composition = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var composition;
    (function (composition) {
        var Indices = (function () {
            function Indices(gender, dob, height, weight) {
                this.bmi = function () {
                    var meters = this.height / 100;
                    return this.weight / (meters * meters);
                };
                this.corpulence = function () {
                    return this.weight / Math.pow(this.height, 3);
                };
                this.sbsi = function (bsa, vertical_trunk_circumference, waist_circumference) {
                    return (Math.pow(this.height, 7 / 4) * Math.pow(waist_circumference, 5 / 6)) / (bsa * vertical_trunk_circumference);
                };
                this.WHR = function (waistCircumference, hipCircumference) {
                    return waistCircumference / hipCircumference;
                };
                this.WHtR = function (waistCircumference) {
                    return waistCircumference / this.height;
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            Indices.prototype.bai = function (hipCircumference) {
                var numerator = 100 * hipCircumference;
                var denominator = this.height * Math.sqrt(this.height);
                return (numerator / denominator) - 18;
            };
            Indices.prototype.bmi_prime = function (upper_limit) {
                if (upper_limit === void 0) { upper_limit = 25.9; }
                return this.bmi() / upper_limit;
            };
            Indices.prototype.bsi = function (waist_circumference) {
                return waist_circumference / Math.pow(this.bmi(), 2 / 3) * Math.pow(this.height, 0.5);
            };
            return Indices;
        }());
        composition.Indices = Indices;
    })(composition = Fit.composition || (Fit.composition = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var composition;
    (function (composition) {
        var Mass = (function () {
            function Mass(gender, dob, height, weight) {
                this.ffmChild = function (resistance, reactance) {
                    var heightCm = this.height * 100;
                    return (0.62 * (Math.pow(heightCm, 2) / resistance)) + (0.21 * this.weight) + (0.1 * reactance) + 4.2;
                };
                this.ffmAdolescent = function (resistance, reactance) {
                    var heightCm = this.height * 100;
                    return (0.61 * (Math.pow(heightCm, 2) / resistance)) + (0.25 * this.weight) + 1.31;
                };
                this.ffmAdultLean = function (resistance, reactance) {
                    var age = this.dob.delta("years");
                    var heightCm = this.height * 100;
                    if (this.gender === this.Gender.Female) {
                        return (0.000646 * Math.pow(heightCm, 2)) - (0.014 * resistance) + (0.421 * this.weight) + 10.4;
                    }
                    return (0.00066360 * Math.pow(heightCm, 2)) - (0.02117 * resistance) + (0.62854 * this.weight) - (0.12380 * age) + 9.33285;
                };
                this.ffmAdultObese = function (resistance, reactance) {
                    var age = this.dob.delta("years");
                    var heightCm = this.height * 100;
                    if (this.gender === this.Gender.Female) {
                        return (0.00091186 * Math.pow(heightCm, 2)) - (0.1466 * resistance) + (0.29990 * this.weight) - (0.07012 * age) + 9.37938;
                    }
                    return (0.00088580 * Math.pow(heightCm, 2)) - (0.02999 * resistance) + (0.42688 * this.weight) - (0.07002 * age) + 14.52435;
                };
                this.ffmAdultAthlete = function (resistance, reactance) {
                    var heightCm = this.height * 100;
                    if (this.gender === this.Gender.Female) {
                        return (0.282 * heightCm) + (0.415 * this.weight) - (0.037 * resistance) + (0.096 * reactance) - 9.734;
                    }
                    return (0.186 * (Math.pow(heightCm, 2) / resistance)) + (0.701 * this.weight) + 1.949;
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return Mass;
        }());
        composition.Mass = Mass;
    })(composition = Fit.composition || (Fit.composition = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var composition;
    (function (composition) {
        var Stature = (function () {
            function Stature(gender, dob, height, weight) {
                this.statureUniversal = function () {
                    var age = this.dob.delta("years");
                    return 1.009 * this.height - 0.0426 * age + 12.1;
                };
                this.statureAmericanWhite = function (femurLength) {
                    if (this.gender === this.Gender.Female) {
                        return 2.47 * femurLength + 54.10;
                    }
                    return 2.32 * femurLength + 65.53;
                };
                this.statureAmericanBlack = function (femurLength) {
                    if (this.gender === this.Gender.Female) {
                        return 2.28 * femurLength + 59.76;
                    }
                    return 2.10 * femurLength + 72.22;
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            Stature.prototype.strideLength = function () {
                var heightCm = this.height * 100;
                var strideLength;
                if (this.gender === Fit.Gender.Female) {
                    var strideLength_1 = 0.413 * heightCm;
                }
                else {
                    var strideLength_2 = 0.415 * heightCm;
                }
                return strideLength / 100;
            };
            return Stature;
        }());
        composition.Stature = Stature;
    })(composition = Fit.composition || (Fit.composition = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var composition;
    (function (composition) {
        var SurfaceArea = (function () {
            function SurfaceArea(gender, dob, height, weight) {
                this.boyd = function () {
                    var heightCm = this.height * 100;
                    var weightG = this.weight * 1000;
                    return 0.03330 * Math.pow(this.weight, (0.6157 - 0.0188 * Math.log(this.weight))) * Math.pow(heightCm, 0.3);
                };
                this.costeff = function () {
                    return (4 * this.weight + 7) / (90 + this.weight);
                };
                this.dubois = function () {
                    var heightCm = this.height * 100;
                    return 0.007184 * Math.pow(this.weight, 0.425) * Math.pow(heightCm, 0.725);
                };
                this.fujimoto = function () {
                    var heightCm = this.height * 100;
                    return 0.008883 * Math.pow(this.weight, 0.444) * Math.pow(heightCm, 0.663);
                };
                this.gehangeorge = function () {
                    var heightCm = this.height * 100;
                    return 0.0235 * Math.pow(this.weight, 0.51456) * Math.pow(heightCm, 0.42246);
                };
                this.haycock = function () {
                    var heightCm = this.height * 100;
                    return 0.024265 * Math.pow(this.weight, 0.5378) * Math.pow(heightCm, 0.3964);
                };
                this.mosteller = function () {
                    return Math.sqrt(this.weight * this.height) / 6;
                };
                this.schlich = function () {
                    var heightCm = this.height * 100;
                    if (this.gender === Fit.Gender.Female) {
                        return 0.000975482 * Math.pow(this.weight, 0.46) * Math.pow(heightCm, 1.08);
                    }
                    return 0.000579479 * Math.pow(this.weight, 0.38) * Math.pow(heightCm, 1.24);
                };
                this.shuterAslani = function () {
                    var heightCm = this.height * 100;
                    return 0.00949 * Math.pow(this.weight, 0.441) * Math.pow(heightCm, 0.655);
                };
                this.takahira = function () {
                    var heightCm = this.height * 100;
                    return 0.007241 * Math.pow(this.weight, 0.425) * Math.pow(heightCm, 0.725);
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return SurfaceArea;
        }());
        composition.SurfaceArea = SurfaceArea;
    })(composition = Fit.composition || (Fit.composition = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var composition;
    (function (composition) {
        function inchesOverFt(value, upperBound) {
            var inches = value * 39.3701;
            var upperBoundInches = upperBound * 39.3701;
            return inches % upperBoundInches;
        }
        var Ideal = (function () {
            function Ideal(gender, dob, height, weight) {
                this.hamwi = function () {
                    var inchesOver5Ft = inchesOverFt(this.height, 1.524);
                    if (this.gender === Fit.Gender.Female) {
                        return 45.5 + (2.2 * inchesOver5Ft);
                    }
                    return 48 + (2.7 * inchesOver5Ft);
                };
                this.devine = function () {
                    var inchesOver5Ft = inchesOverFt(this.height, 1.524);
                    if (this.gender === Fit.Gender.Female) {
                        return 45.5 + (2.3 * inchesOver5Ft);
                    }
                    return 50 + (2.3 * inchesOver5Ft);
                };
                this.robinson = function () {
                    var inchesOver5Ft = inchesOverFt(this.height, 1.524);
                    if (this.gender === Fit.Gender.Female) {
                        return 49 + (1.7 * inchesOver5Ft);
                    }
                    return 52 + (1.9 * inchesOver5Ft);
                };
                this.miller = function () {
                    var inchesOver5Ft = inchesOverFt(this.height, 1.524);
                    if (this.gender === Fit.Gender.Female) {
                        return 53.1 + (1.36 * inchesOver5Ft);
                    }
                    return 56.2 + (1.41 * inchesOver5Ft);
                };
                this.lemmens = function () {
                    return 22 * Math.pow(this.height, 2);
                };
                this.willoughby = function () {
                    var heightInches = this.height * 39.3701;
                    var heightCubed = Math.pow(heightInches, 3);
                    return heightCubed / 1906;
                };
                this.willoughbyWaist = function () {
                    var heightInches = this.height * 39.3701;
                    return heightInches * 0.4584;
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return Ideal;
        }());
        composition.Ideal = Ideal;
    })(composition = Fit.composition || (Fit.composition = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var strength;
    (function (strength) {
        var Compare = (function () {
            function Compare(gender, weight) {
                this.gender = gender;
                this.weight = weight;
            }
            Compare.prototype.oCarroll = function (weightLifted) {
                return weightLifted / Math.pow(this.weight - 35, 1 / 3);
            };
            Compare.prototype.siffWeight = function () {
                var a = 512.245;
                var b = 146230;
                var c = 1.605;
                if (this.gender === Fit.Gender.Female) {
                    a = 943.063;
                    b = 0.05142;
                    c = 257.314;
                    return c - a * Math.exp(-b * this.weight);
                }
                return a - b * Math.pow(this.weight, -c);
            };
            Compare.prototype.siffPower = function () {
                var a = 512.245;
                var b = 172970;
                var c = 1.3925;
                if (this.gender === Fit.Gender.Female) {
                    return 0;
                }
                return a - b * Math.pow(this.weight, -c);
            };
            Compare.prototype.siff = function (power) {
                if (power === void 0) { power = false; }
                if (power) {
                    return this.siffPower();
                }
                return this.siffWeight();
            };
            Compare.prototype.sinclair = function (obtainedTotal) {
                var coefficientA = 0.794358141;
                var coefficientB = 174.393;
                if (this.gender === Fit.Gender.Female) {
                    coefficientA = 0.897260740;
                    coefficientB = 148.026;
                }
                if (this.weight > coefficientB) {
                    return 1;
                }
                var exponent = Math.pow(coefficientA * Math.log10(this.weight / coefficientB), 2);
                var multiplier = Math.pow(10, exponent);
                return multiplier * obtainedTotal;
            };
            Compare.prototype.wilks = function (weightLifted) {
                var a = -216.0475144;
                var b = 16.2606339;
                var c = -0.002388645;
                var d = -0.00113732;
                var e = 7.01863E-06;
                var f = -1.291E-08;
                if (this.gender === Fit.Gender.Female) {
                    a = 594.31747775582;
                    b = -27.23842536447;
                    c = 0.82112226871;
                    d = -0.00930733913;
                    e = 4.731582E-05;
                    f = -9.054E-08;
                }
                var coefficient = 500 / (a + b * this.weight + c * Math.pow(this.weight, 2) + d * Math.pow(this.weight, 3) + e * Math.pow(this.weight, 4) + f * Math.pow(this.weight, 5));
                return coefficient * weightLifted;
            };
            return Compare;
        }());
        strength.Compare = Compare;
        var Jump = (function () {
            function Jump(weight, height) {
                this.weight = weight;
                this.height = height;
            }
            Jump.prototype.bosco = function (duration, jump_count, total_flight_time) {
                return (total_flight_time * duration * Math.pow(9.81, 2)) / (4 * jump_count * (duration - total_flight_time));
            };
            Jump.prototype.lewis = function (vJumpHeight) {
                return Math.sqrt(4.9 * this.weight) * Math.sqrt(vJumpHeight) * 9.81;
            };
            Jump.prototype.harman = function (vJumpHeight, peak) {
                if (peak === void 0) { peak = false; }
                var vJumpHeightCm = vJumpHeight * 100;
                if (peak) {
                    return 61.9 * vJumpHeightCm + 36 * this.weight + 1822;
                }
                return 21.1 * vJumpHeightCm + 2.3 * this.weight + 1393;
            };
            Jump.prototype.jb = function (vJumpHeight, peak) {
                if (peak === void 0) { peak = false; }
                var bodyHeightCm = this.height * 100;
                var vJumpHeightCm = vJumpHeight * 100;
                if (peak) {
                    return 78.6 * vJumpHeightCm + 60.3 * this.weight + 15.3 * bodyHeightCm + 1308;
                }
                return 43.8 * vJumpHeightCm + 32.7 * this.weight - 16.8 * bodyHeightCm + 431;
            };
            Jump.prototype.sayer = function (vJumpHeight) {
                var vJumpHeightCm = vJumpHeight * 100;
                return 60.7 * vJumpHeightCm + 45.3 * this.weight - 2055;
            };
            Jump.prototype.mk = function (vJumpHeight, time) {
                return (this.weight * (vJumpHeight / time)) * 9.81;
            };
            return Jump;
        }());
        var RMEstimator = (function () {
            function RMEstimator(reps) {
                this.reps = reps;
            }
            RMEstimator.prototype.predict = function (weight) {
                throw new Error("The prediction method is not implemented");
            };
            return RMEstimator;
        }());
        var Abadie = (function (_super) {
            __extends(Abadie, _super);
            function Abadie() {
                _super.apply(this, arguments);
            }
            Abadie.prototype.predict = function (weight) {
                return 7.24 + (1.05 * weight);
            };
            Abadie.prototype.weight = function (rm) {
                return (4. / 105) * (25 * rm - 181);
            };
            return Abadie;
        }(RMEstimator));
        strength.Abadie = Abadie;
        var Baechle = (function (_super) {
            __extends(Baechle, _super);
            function Baechle() {
                _super.apply(this, arguments);
            }
            Baechle.prototype.predict = function (weight) {
                return weight * (1 + (0.033 * this.reps));
            };
            Baechle.prototype.weight = function (rm) {
                return (1000 * rm) / (33 * this.reps + 1000);
            };
            return Baechle;
        }(RMEstimator));
        strength.Baechle = Baechle;
        var Brzycki = (function (_super) {
            __extends(Brzycki, _super);
            function Brzycki() {
                _super.apply(this, arguments);
            }
            Brzycki.prototype.predict = function (weight) {
                return weight / (1.0278 - (0.0278 * this.reps));
            };
            Brzycki.prototype.weight = function (rm) {
                return (1.0278 - (0.0278 * this.reps));
            };
            Brzycki.prototype.twoSet = function (weight, rep2, weight2) {
                return ((weight - weight2) / (rep2 - this.reps)) * (this.reps - 1) + weight;
            };
            return Brzycki;
        }(RMEstimator));
        strength.Brzycki = Brzycki;
        var Epley = (function (_super) {
            __extends(Epley, _super);
            function Epley() {
                _super.apply(this, arguments);
            }
            Epley.prototype.predict = function (weight) {
                return (weight * this.reps * 0.033) + weight;
            };
            return Epley;
        }(RMEstimator));
        strength.Epley = Epley;
        var Landers = (function (_super) {
            __extends(Landers, _super);
            function Landers() {
                _super.apply(this, arguments);
            }
            Landers.prototype.predict = function (weight) {
                return weight / (1.013 - (0.0267123 * this.reps));
            };
            Landers.prototype.weight = function (rm) {
                return rm * (1.013 - (0.0267123 * this.reps));
            };
            Landers.prototype.percent = function () {
                var value = 101.3 - (2.67123 * this.reps);
                return value / 100;
            };
            return Landers;
        }(RMEstimator));
        strength.Landers = Landers;
        var Lombardi = (function (_super) {
            __extends(Lombardi, _super);
            function Lombardi() {
                _super.apply(this, arguments);
            }
            Lombardi.prototype.predict = function (weight) {
                return weight * Math.pow(this.reps, 0.10);
            };
            Lombardi.prototype.weight = function (rm) {
                return rm / Math.pow(this.reps, 0.10);
            };
            return Lombardi;
        }(RMEstimator));
        strength.Lombardi = Lombardi;
        var Mayhew = (function (_super) {
            __extends(Mayhew, _super);
            function Mayhew() {
                _super.apply(this, arguments);
            }
            Mayhew.prototype.football = function () {
                return 226.7 + 7.1 * (this.reps);
            };
            Mayhew.prototype.predict = function (weight) {
                return (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * this.reps));
            };
            Mayhew.prototype.percent = function () {
                var value = 52.2 + 41.9 * Math.exp(-0.055 * this.reps);
                return value / 100;
            };
            Mayhew.prototype.weight = function (rm) {
                return (rm * (52.2 + 41.9 * Math.exp(-0.055 * this.reps))) / 100;
            };
            return Mayhew;
        }(RMEstimator));
        strength.Mayhew = Mayhew;
        var McGlothin = (function (_super) {
            __extends(McGlothin, _super);
            function McGlothin() {
                _super.apply(this, arguments);
            }
            McGlothin.prototype.predict = function (weight) {
                return (100 * weight) / (101.3 - 2.67123 * this.reps);
            };
            McGlothin.prototype.weight = function (rm) {
                return (rm * (101.3 - 2.67123 * this.reps)) / 100;
            };
            return McGlothin;
        }(RMEstimator));
        strength.McGlothin = McGlothin;
        var OConnor = (function (_super) {
            __extends(OConnor, _super);
            function OConnor() {
                _super.apply(this, arguments);
            }
            OConnor.prototype.predict = function (weight) {
                return weight * (1 + 0.025 * this.reps);
            };
            OConnor.prototype.percent = function (weight) {
                return (0.025 * (weight * this.reps) + weight);
            };
            OConnor.prototype.weight = function (rm) {
                return (40. * rm) / (this.reps + 40);
            };
            return OConnor;
        }(RMEstimator));
        strength.OConnor = OConnor;
        var ReynoldsCP = (function (_super) {
            __extends(ReynoldsCP, _super);
            function ReynoldsCP() {
                _super.apply(this, arguments);
            }
            ReynoldsCP.prototype.predict = function (weight) {
                return (1.1307 * weight) + 0.6998;
            };
            return ReynoldsCP;
        }(RMEstimator));
        strength.ReynoldsCP = ReynoldsCP;
        var ReynoldsLP = (function (_super) {
            __extends(ReynoldsLP, _super);
            function ReynoldsLP() {
                _super.apply(this, arguments);
            }
            ReynoldsLP.prototype.predict = function (weight) {
                return (1.09703 * weight) + 14.2546;
            };
            return ReynoldsLP;
        }(RMEstimator));
        strength.ReynoldsLP = ReynoldsLP;
        var Wathan = (function (_super) {
            __extends(Wathan, _super);
            function Wathan() {
                _super.apply(this, arguments);
            }
            Wathan.prototype.predict = function (weight) {
                return (100 * weight) / (48.8 + (53.8 * Math.exp(-0.075 * this.reps)));
            };
            Wathan.prototype.weight = function (rm) {
                return (rm * (48.8 + (53.8 * Math.exp(-0.075 * this.reps)))) / 100;
            };
            return Wathan;
        }(RMEstimator));
        strength.Wathan = Wathan;
        var RM = (function () {
            function RM(gender, dob) {
                this.gender = gender;
                this.dob = dob;
            }
            RM.prototype.ymcaUpperBody = function (reps) {
                if (this.gender === Fit.Gender.Female) {
                    return (0.31 * reps) + 19.2;
                }
                return (1.55 * reps) + 37.9;
            };
            RM.prototype.femaleMiddleAge = function (reps, weight) {
                var age = this.dob.delta("years");
                return (1.06 * weight) + (0.58 * reps) - (0.20 * age) - 3.41;
            };
            RM.prototype.femaleOlder = function (reps, weight) {
                var age = this.dob.delta("years");
                return (0.92 * weight) + (0.79 * reps) - (0.20 * age) - 3.73;
            };
            RM.prototype.relative = function (weight, rm) {
                return rm / weight;
            };
            return RM;
        }());
        strength.RM = RM;
    })(strength = Fit.strength || (Fit.strength = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var model;
    (function (model) {
        var aerobic;
        (function (aerobic) {
            var PerformanceModel = (function () {
                function PerformanceModel(t1, d1) {
                    this.time = function (d2) { return 0; };
                    this.distance = function (t2) { return 0; };
                    this.t1 = t1;
                    this.d1 = d1;
                }
                return PerformanceModel;
            }());
            var Riegel = (function (_super) {
                __extends(Riegel, _super);
                function Riegel() {
                    _super.apply(this, arguments);
                    this.time = function (d2) {
                        if (this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
                            return 0;
                        }
                        return this.t1 * Math.pow((d2 / this.d1), 1.06);
                    };
                    this.distance = function (t2) {
                        if (this.t1 <= 0 || this.d1 <= 0 || t2 <= 0) {
                            return 0;
                        }
                        return this.d1 * Math.pow(t2, 50 / 53) / Math.pow(this.t1, 50 / 53);
                    };
                }
                return Riegel;
            }(PerformanceModel));
            aerobic.Riegel = Riegel;
            var Cameron = (function (_super) {
                __extends(Cameron, _super);
                function Cameron() {
                    _super.apply(this, arguments);
                    this.time = function (d2) {
                        if (this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
                            return 0;
                        }
                        var a = 13.49681 - 0.048865 * this.d1 + 2.438936 / Math.pow(this.d1, 0.7905);
                        var b = 13.49681 - 0.048865 * d2 + 2.438936 / Math.pow(d2, 0.7905);
                        return (this.t1 / this.d1) * (a / b) * d2;
                    };
                }
                return Cameron;
            }(PerformanceModel));
            aerobic.Cameron = Cameron;
        })(aerobic = model.aerobic || (model.aerobic = {}));
    })(model = Fit.model || (Fit.model = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var sport;
    (function (sport) {
        var running;
        (function (running) {
            var adjustment;
            (function (adjustment) {
                function temperature(seconds, farenheit) {
                    var factors = {
                        "60F": 1,
                        "65F": 1.0075,
                        "70F": 1.015,
                        "75F": 1.0225,
                        "80F": 1.03,
                        "85F": 1.0375,
                        "90F": 1.045,
                        "95F": 1.0525,
                        "100F": 1.06
                    };
                    return seconds * factors[seconds + "F"];
                }
                adjustment.temperature = temperature;
            })(adjustment = running.adjustment || (running.adjustment = {}));
        })(running = sport.running || (sport.running = {}));
    })(sport = Fit.sport || (Fit.sport = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var sport;
    (function (sport) {
        var running;
        (function (running) {
            function vVo2Max(vO2Max) {
                return vO2Max / 3.5;
            }
            running.vVo2Max = vVo2Max;
            var pace;
            (function (pace) {
                function hrSpeed(percentHR, vO2Max) {
                    var vO2MaxPercent = Fit.conversion.SwainConverter.percentVO2Max(percentHR);
                    var vO2Speed = vVo2Max(vO2Max);
                    return vO2MaxPercent * vO2Speed;
                }
                pace.hrSpeed = hrSpeed;
                function hrPace(percentHR, vO2Max) {
                    var kph = hrSpeed(percentHR, vO2Max);
                    return kph / 60;
                }
                pace.hrPace = hrPace;
                function easy(vO2Max) {
                    return hrPace(0.7, vO2Max);
                }
                pace.easy = easy;
                function marathon(vO2Max) {
                    return hrPace(0.825, vO2Max);
                }
                pace.marathon = marathon;
                function threshold(vO2Max) {
                    return hrPace(0.85, vO2Max);
                }
                pace.threshold = threshold;
                function interval(vO2Max) {
                    return hrPace(1, vO2Max);
                }
                pace.interval = interval;
            })(pace = running.pace || (running.pace = {}));
        })(running = sport.running || (sport.running = {}));
    })(sport = Fit.sport || (Fit.sport = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var sport;
    (function (sport) {
        var running;
        (function (running) {
            var grading;
            (function (grading) {
                var RunningAgeGrade = (function () {
                    function RunningAgeGrade(gender, age) {
                        this.normalize = function (event, time) {
                            if (this.age < 5 || this.age > 100) {
                                return 0;
                            }
                            var world_record = RunningAgeGrade.table[this.gender][event]["OC"];
                            var graded_world_record = world_record / RunningAgeGrade.table[this.gender][event]["conversions"][this.age - 5];
                            return time / graded_world_record;
                        };
                        this.gender = gender;
                        this.age = age;
                    }
                    RunningAgeGrade.table = { "female": { "50Hur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7021, 0.911, 0.9828, 0.9976, 0.9998, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.991, 0.9809, 0.971, 0.9155, 0.9047, 0.8942, 0.8849, 0.8749, 0.865, 0.8554, 0.8469, 0.8377, 0.8287, 0.8368, 0.8269, 0.8172, 0.8078, 0.7994, 0.7903, 0.7815, 0.7729, 0.7644, 0.7569, 0.7667, 0.7569, 0.7466, 0.7373, 0.7282, 0.7187, 0.7101, 0.701, 0.6928, 0.6842, 0.6763, 0.6652, 0.655, 0.6446, 0.635, 0.6252, 0.6123, 0.5998, 0.5879, 0.5765, 0.5654, 0.5477, 0.5311, 0.5154, 0.5007, 0.4867, 0.4678, 0.4502, 0.434, 0.4188, 0.4047, 0.3845, 0.3662, 0.3495, 0.3343, 0.3204, 0.3009, 0.2835, 0.268, 0.2541, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 6.58 }, "55Hur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7021, 0.911, 0.9828, 0.9976, 0.9998, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.991, 0.9809, 0.971, 0.9155, 0.9047, 0.8942, 0.8849, 0.8749, 0.865, 0.8554, 0.8469, 0.8377, 0.8287, 0.8368, 0.8269, 0.8172, 0.8078, 0.7994, 0.7903, 0.7815, 0.7729, 0.7644, 0.7569, 0.7667, 0.7569, 0.7466, 0.7373, 0.7282, 0.7187, 0.7101, 0.701, 0.6928, 0.6842, 0.6763, 0.6652, 0.655, 0.6446, 0.635, 0.6252, 0.6123, 0.5998, 0.5879, 0.5765, 0.5654, 0.5477, 0.5311, 0.5154, 0.5007, 0.4867, 0.4678, 0.4502, 0.434, 0.4188, 0.4047, 0.3845, 0.3662, 0.3495, 0.3343, 0.3204, 0.3009, 0.2835, 0.268, 0.2541, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 7.12 }, "60Hur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7021, 0.911, 0.9828, 0.9976, 0.9998, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.991, 0.9809, 0.971, 0.9155, 0.9047, 0.8942, 0.8849, 0.8749, 0.865, 0.8554, 0.8469, 0.8377, 0.8287, 0.8368, 0.8269, 0.8172, 0.8078, 0.7994, 0.7903, 0.7815, 0.7729, 0.7644, 0.7569, 0.7667, 0.7569, 0.7466, 0.7373, 0.7282, 0.7187, 0.7101, 0.701, 0.6928, 0.6842, 0.6763, 0.6652, 0.655, 0.6446, 0.635, 0.6252, 0.6123, 0.5998, 0.5879, 0.5765, 0.5654, 0.5477, 0.5311, 0.5154, 0.5007, 0.4867, 0.4678, 0.4502, 0.434, 0.4188, 0.4047, 0.3845, 0.3662, 0.3495, 0.3343, 0.3204, 0.3009, 0.2835, 0.268, 0.2541, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 7.69 }, "ShortHur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8617, 0.8829, 0.9105, 0.9328, 0.9509, 0.966, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9959, 0.9919, 0.9879, 0.9831, 0.9791, 0.9737, 0.9683, 0.9629, 0.9576, 1.0941, 1.0824, 1.072, 1.0608, 1.0499, 1.0383, 1.0278, 1.0183, 1.0083, 0.9984, 1.0517, 1.04, 1.0278, 1.0158, 1.0041, 0.9919, 0.9815, 0.9706, 0.9599, 0.9495, 0.9502, 0.9314, 0.9126, 0.8939, 0.8753, 0.8568, 0.8334, 0.8102, 0.7867, 0.7636, 0.74, 0.7221, 0.7046, 0.6867, 0.669, 0.6512, 0.6271, 0.603, 0.5789, 0.555, 0.5309, 0.5152, 0.4994, 0.4838, 0.4678, 0.4522, 0.4358, 0.4193, 0.4028, 0.3864, 0.37, 0.3556, 0.3411, 0.3267, 0.3122, 0.2978, 0.2866, 0.2754, 0.2641, 0.2529, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 12.21 }, "LongHur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.7144, 0.8933, 0.9216, 0.9441, 0.9618, 0.9758, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9887, 0.9729, 0.9576, 0.9429, 0.9285, 0.9146, 0.901, 0.888, 0.8753, 0.8628, 0.8508, 0.8392, 0.8278, 0.8167, 1.1572, 1.1376, 1.1186, 1.1, 1.0823, 1.0651, 1.0485, 1.0323, 1.0165, 1.0013, 1.0941, 1.0767, 1.0599, 1.0435, 1.0277, 1.0124, 0.9956, 0.9794, 0.9637, 0.9485, 0.9338, 0.9133, 0.8936, 0.875, 0.8569, 0.8397, 0.8193, 0.7999, 0.7815, 0.7639, 0.747, 0.7221, 0.6988, 0.677, 0.6565, 0.6372, 0.6085, 0.5824, 0.5583, 0.5362, 0.5158, 0.4751, 0.4403, 0.4103, 0.3841, 0.3611, 0.3286, 0.3015, 0.2785, 0.2588, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 52.34 }, "Steeple": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.2796, 1.3548, 1.4094, 1.4478, 0.9824, 0.9936, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.4474, 1.4351, 1.423, 1.4109, 1.3992, 1.3876, 1.3762, 1.3651, 1.354, 1.3432, 1.3325, 1.3221, 1.3117, 1.3015, 1.2916, 1.2816, 1.272, 1.2624, 1.2531, 1.2437, 1.2346, 1.2256, 1.2167, 1.208, 1.1993, 1.1908, 1.1701, 1.1502, 1.1309, 1.1122, 1.0941, 1.0767, 1.0599, 1.0435, 1.0277, 1.0123, 0.9956, 0.9794, 0.9637, 0.9485, 0.9338, 0.9133, 0.8937, 0.8749, 0.8569, 0.8397, 0.8193, 0.8, 0.7815, 0.7639, 0.747, 0.7221, 0.6988, 0.677, 0.6565, 0.6372, 0.6085, 0.5824, 0.5583, 0.5362, 0.5158, 0.4751, 0.4403, 0.4103, 0.3841, 0.3611, 0.3286, 0.3015, 0.2785, 0.2588, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 541.59 }, "1500mWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9625, 0.955, 0.9475, 0.94, 0.9325, 0.925, 0.9175, 0.91, 0.9025, 0.895, 0.8875, 0.88, 0.8725, 0.865, 0.8575, 0.85, 0.8424, 0.8346, 0.8267, 0.8187, 0.8106, 0.8024, 0.794, 0.7855, 0.7769, 0.7682, 0.7593, 0.7503, 0.7412, 0.732, 0.7226, 0.7131, 0.7035, 0.6938, 0.6839, 0.6739, 0.6638, 0.6536, 0.6433, 0.6328, 0.6222, 0.6115, 0.6006, 0.5896, 0.5785, 0.5673, 0.556, 0.5445, 0.5329, 0.5212, 0.5094, 0.4974, 0.4853, 0.4731, 0.4608, 0.4483, 0.4357, 0.423, 0.4102, 0.3972, 0.3841], "isRoad": 0, "dist(km)": 0, "OC": 337 }, "1MileWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9625, 0.955, 0.9475, 0.94, 0.9325, 0.925, 0.9175, 0.91, 0.9025, 0.895, 0.8875, 0.88, 0.8725, 0.865, 0.8575, 0.8499, 0.8423, 0.8344, 0.8265, 0.8185, 0.8103, 0.802, 0.7935, 0.785, 0.7763, 0.7675, 0.7586, 0.7495, 0.7404, 0.7311, 0.7216, 0.7121, 0.7024, 0.6926, 0.6827, 0.6727, 0.6625, 0.6522, 0.6418, 0.6313, 0.6206, 0.6098, 0.5989, 0.5879, 0.5767, 0.5655, 0.554, 0.5425, 0.5309, 0.5191, 0.5072, 0.4952, 0.483, 0.4707, 0.4583, 0.4458, 0.4332, 0.4204, 0.4075, 0.3945, 0.3814], "isRoad": 0, "dist(km)": 0, "OC": 362 }, "3kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9625, 0.955, 0.9475, 0.94, 0.9325, 0.925, 0.9175, 0.91, 0.9025, 0.895, 0.8875, 0.8799, 0.8722, 0.8643, 0.8563, 0.8482, 0.84, 0.8317, 0.8232, 0.8146, 0.8059, 0.797, 0.7881, 0.779, 0.7697, 0.7604, 0.7509, 0.7414, 0.7316, 0.7218, 0.7118, 0.7018, 0.6915, 0.6812, 0.6708, 0.6602, 0.6495, 0.6386, 0.6277, 0.6166, 0.6054, 0.5941, 0.5826, 0.5711, 0.5594, 0.5476, 0.5356, 0.5235, 0.5113, 0.499, 0.4866, 0.474, 0.4613, 0.4485, 0.4356, 0.4225, 0.4093, 0.396, 0.3826, 0.369, 0.3554], "isRoad": 0, "dist(km)": 0, "OC": 695 }, "5kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9625, 0.955, 0.9475, 0.94, 0.9325, 0.925, 0.9175, 0.9099, 0.9023, 0.8945, 0.8866, 0.8785, 0.8703, 0.862, 0.8536, 0.8451, 0.8364, 0.8276, 0.8187, 0.8097, 0.8005, 0.7912, 0.7818, 0.7723, 0.7626, 0.7528, 0.7429, 0.7329, 0.7227, 0.7125, 0.702, 0.6915, 0.6809, 0.6701, 0.6592, 0.6482, 0.637, 0.6258, 0.6144, 0.6028, 0.5912, 0.5794, 0.5675, 0.5555, 0.5434, 0.5311, 0.5187, 0.5062, 0.4936, 0.4808, 0.4679, 0.4549, 0.4418, 0.4286, 0.4152, 0.4017, 0.388, 0.3743, 0.3604, 0.3464, 0.3323], "isRoad": 0, "dist(km)": 0, "OC": 1187 }, "8kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9625, 0.955, 0.9475, 0.94, 0.9324, 0.9247, 0.9169, 0.9089, 0.9008, 0.8926, 0.8843, 0.8758, 0.8673, 0.8586, 0.8497, 0.8408, 0.8317, 0.8225, 0.8132, 0.8037, 0.7942, 0.7845, 0.7747, 0.7647, 0.7546, 0.7445, 0.7341, 0.7237, 0.7131, 0.7025, 0.6916, 0.6807, 0.6697, 0.6585, 0.6472, 0.6357, 0.6242, 0.6125, 0.6007, 0.5888, 0.5767, 0.5645, 0.5522, 0.5398, 0.5273, 0.5146, 0.5018, 0.4889, 0.4759, 0.4627, 0.4494, 0.436, 0.4224, 0.4088, 0.395, 0.3811, 0.3671, 0.3529, 0.3386, 0.3242, 0.3097], "isRoad": 0, "dist(km)": 0, "OC": 1944 }, "10kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9625, 0.955, 0.9475, 0.9398, 0.932, 0.9241, 0.9161, 0.9079, 0.8997, 0.8913, 0.8827, 0.8741, 0.8653, 0.8564, 0.8474, 0.8383, 0.829, 0.8196, 0.8101, 0.8005, 0.7907, 0.7808, 0.7708, 0.7607, 0.7504, 0.74, 0.7295, 0.7189, 0.7081, 0.6972, 0.6862, 0.6751, 0.6639, 0.6525, 0.641, 0.6294, 0.6176, 0.6057, 0.5937, 0.5816, 0.5694, 0.557, 0.5445, 0.5319, 0.5192, 0.5063, 0.4933, 0.4802, 0.467, 0.4536, 0.4401, 0.4265, 0.4128, 0.3989, 0.3849, 0.3708, 0.3566, 0.3423, 0.3278, 0.3132, 0.2985], "isRoad": 0, "dist(km)": 0, "OC": 2457 }, "15kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9623, 0.9546, 0.9467, 0.9387, 0.9306, 0.9223, 0.9139, 0.9054, 0.8968, 0.888, 0.8792, 0.8702, 0.8611, 0.8518, 0.8424, 0.8329, 0.8233, 0.8136, 0.8037, 0.7937, 0.7836, 0.7734, 0.763, 0.7525, 0.7419, 0.7312, 0.7203, 0.7093, 0.6982, 0.687, 0.6756, 0.6642, 0.6526, 0.6408, 0.629, 0.617, 0.6049, 0.5927, 0.5803, 0.5679, 0.5553, 0.5425, 0.5297, 0.5167, 0.5036, 0.4904, 0.4771, 0.4636, 0.45, 0.4363, 0.4225, 0.4085, 0.3945, 0.3802, 0.3659, 0.3515, 0.3369, 0.3222, 0.3074, 0.2924, 0.2773], "isRoad": 0, "dist(km)": 0, "OC": 3761 }, "20kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9617, 0.9537, 0.9456, 0.9373, 0.9289, 0.9204, 0.9118, 0.903, 0.8942, 0.8852, 0.876, 0.8668, 0.8574, 0.8479, 0.8383, 0.8286, 0.8187, 0.8087, 0.7986, 0.7883, 0.778, 0.7675, 0.7569, 0.7461, 0.7353, 0.7243, 0.7132, 0.702, 0.6906, 0.6791, 0.6675, 0.6558, 0.6439, 0.632, 0.6199, 0.6076, 0.5953, 0.5828, 0.5702, 0.5575, 0.5447, 0.5317, 0.5186, 0.5054, 0.492, 0.4786, 0.465, 0.4513, 0.4374, 0.4235, 0.4094, 0.3952, 0.3808, 0.3664, 0.3518, 0.3371, 0.3223, 0.3073, 0.2923, 0.2771, 0.2617], "isRoad": 0, "dist(km)": 0, "OC": 5089 }, "H.Mar.Walk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9615, 0.9535, 0.9453, 0.937, 0.9286, 0.92, 0.9113, 0.9025, 0.8936, 0.8846, 0.8754, 0.8661, 0.8567, 0.8471, 0.8375, 0.8277, 0.8178, 0.8077, 0.7976, 0.7873, 0.7769, 0.7663, 0.7557, 0.7449, 0.734, 0.723, 0.7118, 0.7005, 0.6891, 0.6776, 0.6659, 0.6542, 0.6423, 0.6303, 0.6181, 0.6058, 0.5934, 0.5809, 0.5683, 0.5555, 0.5426, 0.5296, 0.5165, 0.5032, 0.4898, 0.4763, 0.4627, 0.4489, 0.435, 0.421, 0.4069, 0.3926, 0.3783, 0.3638, 0.3491, 0.3344, 0.3195, 0.3045, 0.2894, 0.2741, 0.2588], "isRoad": 0, "dist(km)": 0, "OC": 5411 }, "25kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9609, 0.9526, 0.9443, 0.9359, 0.9273, 0.9186, 0.9098, 0.9008, 0.8918, 0.8826, 0.8733, 0.8638, 0.8542, 0.8446, 0.8347, 0.8248, 0.8147, 0.8046, 0.7943, 0.7838, 0.7733, 0.7626, 0.7518, 0.7408, 0.7298, 0.7186, 0.7073, 0.6959, 0.6843, 0.6727, 0.6609, 0.6489, 0.6369, 0.6247, 0.6124, 0.6, 0.5875, 0.5748, 0.562, 0.5491, 0.5361, 0.5229, 0.5096, 0.4962, 0.4827, 0.469, 0.4552, 0.4413, 0.4273, 0.4132, 0.3989, 0.3845, 0.37, 0.3553, 0.3405, 0.3256, 0.3106, 0.2955, 0.2802, 0.2648, 0.2493], "isRoad": 0, "dist(km)": 0, "OC": 6577 }, "30kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9599, 0.9516, 0.9431, 0.9345, 0.9258, 0.9169, 0.9079, 0.8988, 0.8896, 0.8802, 0.8708, 0.8612, 0.8514, 0.8416, 0.8316, 0.8215, 0.8113, 0.801, 0.7905, 0.7799, 0.7692, 0.7583, 0.7474, 0.7363, 0.7251, 0.7138, 0.7023, 0.6907, 0.679, 0.6672, 0.6552, 0.6431, 0.6309, 0.6186, 0.6062, 0.5936, 0.5809, 0.5681, 0.5551, 0.542, 0.5288, 0.5155, 0.5021, 0.4885, 0.4748, 0.461, 0.4471, 0.433, 0.4188, 0.4045, 0.3901, 0.3755, 0.3608, 0.346, 0.3311, 0.316, 0.3008, 0.2855, 0.2701, 0.2546, 0.2389], "isRoad": 0, "dist(km)": 0, "OC": 8118 }, "40kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9581, 0.9495, 0.9407, 0.9319, 0.9229, 0.9138, 0.9046, 0.8952, 0.8857, 0.8761, 0.8664, 0.8566, 0.8466, 0.8365, 0.8263, 0.8159, 0.8055, 0.7949, 0.7842, 0.7733, 0.7623, 0.7513, 0.74, 0.7287, 0.7173, 0.7057, 0.694, 0.6821, 0.6702, 0.6581, 0.6459, 0.6336, 0.6211, 0.6085, 0.5958, 0.583, 0.5701, 0.557, 0.5438, 0.5305, 0.517, 0.5034, 0.4898, 0.4759, 0.462, 0.4479, 0.4337, 0.4194, 0.405, 0.3904, 0.3757, 0.3609, 0.346, 0.331, 0.3158, 0.3005, 0.285, 0.2695, 0.2538, 0.238, 0.2221], "isRoad": 0, "dist(km)": 0, "OC": 11334 }, "Mar.Walk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9577, 0.949, 0.9402, 0.9313, 0.9223, 0.9132, 0.9039, 0.8945, 0.885, 0.8753, 0.8656, 0.8557, 0.8456, 0.8355, 0.8252, 0.8148, 0.8043, 0.7937, 0.7829, 0.772, 0.761, 0.7499, 0.7386, 0.7272, 0.7157, 0.7041, 0.6924, 0.6805, 0.6685, 0.6563, 0.6441, 0.6317, 0.6192, 0.6066, 0.5939, 0.581, 0.568, 0.5549, 0.5416, 0.5283, 0.5148, 0.5011, 0.4874, 0.4735, 0.4596, 0.4455, 0.4312, 0.4169, 0.4024, 0.3878, 0.373, 0.3582, 0.3432, 0.3281, 0.3129, 0.2975, 0.282, 0.2664, 0.2507, 0.2349, 0.2189], "isRoad": 0, "dist(km)": 0, "OC": 12062 }, "50kmWalk": { "conversions": [0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9966, 0.994, 0.9906, 0.9865, 0.9816, 0.976, 0.9696, 0.9563, 0.9475, 0.9386, 0.9295, 0.9203, 0.9111, 0.9016, 0.8921, 0.8824, 0.8726, 0.8627, 0.8527, 0.8425, 0.8322, 0.8218, 0.8113, 0.8006, 0.7898, 0.7789, 0.7679, 0.7567, 0.7454, 0.734, 0.7225, 0.7108, 0.6991, 0.6871, 0.6751, 0.663, 0.6507, 0.6383, 0.6258, 0.6131, 0.6004, 0.5875, 0.5745, 0.5613, 0.548, 0.5347, 0.5211, 0.5075, 0.4937, 0.4799, 0.4658, 0.4517, 0.4375, 0.4231, 0.4086, 0.3939, 0.3792, 0.3643, 0.3493, 0.3342, 0.3189, 0.3035, 0.2881, 0.2724, 0.2567, 0.2408, 0.2248, 0.2087], "isRoad": 0, "dist(km)": 0, "OC": 14706 }, "HighJump": { "conversions": [0, 0, 0, 1.5713, 1.4616, 1.3749, 1.3062, 1.2441, 1.1943, 1.1484, 1.1176, 1.0885, 1.0609, 1.0398, 1.0245, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0097, 1.0146, 1.0245, 1.0347, 1.0408, 1.0503, 1.0663, 1.0773, 1.0885, 1.1008, 1.1117, 1.1297, 1.1421, 1.1547, 1.1681, 1.1808, 1.1943, 1.2151, 1.2294, 1.2442, 1.259, 1.2744, 1.2981, 1.3145, 1.331, 1.3484, 1.366, 1.3933, 1.4122, 1.4307, 1.4514, 1.4718, 1.4929, 1.5255, 1.5466, 1.5714, 1.5954, 1.6202, 1.6587, 1.6829, 1.7131, 1.7417, 1.7712, 1.8174, 1.8456, 1.8829, 1.9174, 1.9533, 2.0096, 2.0431, 2.09, 2.1327, 2.1771, 2.2234, 2.2879, 2.3483, 2.4302, 2.5181, 2.5802, 2.6795, 2.7867, 2.9028, 2.9857, 3.1194, 3.2656, 3.4262, 3.6034, 3.7321, 3.9434, 4.18], "isRoad": 0, "dist(km)": 0, "OC": 2.09 }, "PoleVault": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.5015, 1.3446, 1.2262, 1.1419, 1.0752, 1.0279, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0218, 1.0362, 1.051, 1.0663, 1.0819, 1.0981, 1.1147, 1.1319, 1.1496, 1.1678, 1.1866, 1.2061, 1.2262, 1.247, 1.2685, 1.2907, 1.3138, 1.3377, 1.3624, 1.3881, 1.4148, 1.4426, 1.4714, 1.5015, 1.5282, 1.5606, 1.5944, 1.6297, 1.6667, 1.7053, 1.7458, 1.7882, 1.8327, 1.8796, 1.9288, 1.9808, 2.0356, 2.0935, 2.1548, 2.2198, 2.2889, 2.3624, 2.4408, 2.5245, 2.6142, 2.7105, 2.8142, 2.9261, 3.0473, 3.179, 3.3226, 3.4797, 3.6525, 3.8433, 4.0551, 4.2917, 4.5575, 4.8585, 5.202, 5.5978, 6.0588, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "isRoad": 0, "dist(km)": 0, "OC": 5.15 }, "LongJump": { "conversions": [0, 0, 0, 1.7864, 1.642, 1.5253, 1.4296, 1.3477, 1.2789, 1.2188, 1.1677, 1.1241, 1.0867, 1.0532, 1.0245, 1.008, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.008, 1.0148, 1.0231, 1.0301, 1.0387, 1.0503, 1.0636, 1.0758, 1.0883, 1.1023, 1.1157, 1.1308, 1.1446, 1.1587, 1.1742, 1.1899, 1.2051, 1.2228, 1.2389, 1.2561, 1.2746, 1.2921, 1.3101, 1.331, 1.3502, 1.3698, 1.3926, 1.4135, 1.4351, 1.4596, 1.4832, 1.507, 1.5347, 1.5602, 1.5883, 1.6172, 1.6455, 1.6786, 1.7091, 1.742, 1.7778, 1.812, 1.8477, 1.8894, 1.9285, 1.9789, 2.0324, 2.0889, 2.1486, 2.2118, 2.2788, 2.35, 2.4258, 2.5067, 2.5931, 2.705, 2.8271, 2.9606, 3.1074, 3.2696, 3.4495, 3.6505, 3.8763, 4.1319, 4.4235, 4.8205, 5.2958, 5.875, 6.5965, 7.52], "isRoad": 0, "dist(km)": 0, "OC": 7.52 }, "TripleJump": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.2768, 1.2072, 1.1499, 1.1009, 1.0602, 1.0258, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0137, 1.0251, 1.0361, 1.048, 1.0595, 1.0719, 1.0839, 1.097, 1.1095, 1.1232, 1.1364, 1.1507, 1.1645, 1.1796, 1.1941, 1.21, 1.2253, 1.242, 1.2581, 1.2757, 1.2927, 1.3113, 1.3293, 1.349, 1.368, 1.3889, 1.4091, 1.4312, 1.4527, 1.4762, 1.499, 1.5241, 1.5485, 1.5752, 1.6012, 1.6299, 1.6595, 1.6885, 1.7203, 1.7514, 1.7857, 1.8192, 1.8563, 1.8926, 1.9327, 1.972, 2.0156, 2.0584, 2.106, 2.1528, 2.2048, 2.2694, 2.3414, 2.4181, 2.496, 2.5833, 2.6957, 2.8182, 2.9524, 3.1, 3.2632, 3.4444, 3.6471, 3.875, 4.1333, 4.4286, 4.8287, 5.3082, 5.8935, 6.6239, 7.561], "isRoad": 0, "dist(km)": 0, "OC": 15.5 }, "Hammer": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.3167, 1.2222, 1.1493, 1.0845, 1.0405, 1.0132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0125, 1.0355, 1.0594, 1.0847, 1.111, 1.1387, 1.1677, 1.1984, 1.2306, 1.2648, 1.3007, 1.3389, 1.3792, 1.4222, 1.4678, 1.5166, 1.5685, 1.6245, 1.6842, 1.7488, 1.2506, 1.2736, 1.2974, 1.3221, 1.3478, 1.3745, 1.4023, 1.4312, 1.4614, 1.4928, 1.5256, 1.56, 1.5959, 1.6334, 1.6728, 1.7141, 1.7576, 1.8033, 1.8514, 1.9022, 1.9557, 2.0125, 2.0727, 2.1365, 2.2044, 2.2766, 2.354, 2.4367, 2.5254, 2.6208, 2.7235, 2.8351, 2.9559, 3.0874, 3.2312, 3.3886, 3.5632, 3.7561, 3.9711, 4.2123, 4.4837, 4.7945, 5.1505, 5.5636, 6.0487, 6.6247, 7.3264, 8.1915, 9.2883, 10.7242, 12.6783], "isRoad": 0, "dist(km)": 0, "OC": 77 }, "Shotput": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.4781, 1.3535, 1.2524, 1.1701, 1.1018, 1.0448, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0157, 1.0352, 1.056, 1.0776, 1.0996, 1.1231, 1.147, 1.1722, 1.1986, 1.2259, 1.2551, 1.2858, 1.3173, 1.351, 1.3858, 1.4233, 1.4619, 1.3876, 1.4117, 1.4377, 1.4638, 1.4908, 1.5191, 1.5489, 1.5792, 1.6107, 1.6434, 1.6782, 1.7144, 1.7515, 1.7903, 1.8309, 1.8744, 1.9194, 1.9661, 2.0151, 2.0686, 2.1227, 2.1802, 2.2406, 2.3068, 2.3746, 2.4468, 2.5229, 2.6071, 2.694, 2.7869, 2.8876, 2.9974, 3.1128, 3.2375, 3.3726, 3.5222, 3.6857, 3.8618, 4.0556, 4.2698, 4.5143, 4.7844, 5.0854, 5.4269, 5.8325, 6.2845, 6.8163, 7.4441, 8.2291, 9.1619, 10.3385], "isRoad": 0, "dist(km)": 0, "OC": 22.63 }, "Discus": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.3692, 1.2262, 1.1344, 1.0732, 1.0323, 1.0046, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0004, 1.0144, 1.0288, 1.0436, 1.0589, 1.0744, 1.0904, 1.1071, 1.1241, 1.1418, 1.1601, 1.1788, 1.1983, 1.2185, 1.2391, 1.2607, 1.283, 1.3059, 1.3299, 1.3545, 1.3803, 1.4071, 1.4348, 1.4637, 1.4936, 1.525, 1.5578, 1.5918, 1.6275, 1.6649, 1.7036, 1.7447, 1.7874, 1.8325, 1.8796, 1.9296, 1.9824, 2.0379, 2.0966, 2.1591, 2.2248, 2.2953, 2.37, 2.4498, 2.5355, 2.6265, 2.7253, 2.4063, 2.5041, 2.6096, 2.7244, 2.8508, 2.9886, 3.1411, 3.3089, 3.4957, 3.7048, 3.9416, 4.2105, 4.5176, 4.8731, 5.2929, 5.7868, 6.384, 7.1177, 8.0503, 9.253, 10.88], "isRoad": 0, "dist(km)": 0, "OC": 76.8 }, "Javelin": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.7048, 1.5253, 1.3942, 1.2955, 1.2197, 1.1611, 1.0896, 1.0429, 1.0139, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9989, 1.0213, 1.0445, 1.069, 1.0946, 1.1215, 1.1496, 1.1793, 1.2106, 1.2435, 1.2782, 1.3151, 1.3541, 1.3953, 1.3645, 1.3971, 1.4314, 1.4673, 1.5052, 1.545, 1.587, 1.6313, 1.6782, 1.7278, 1.746, 1.7844, 1.8241, 1.8661, 1.91, 1.9559, 2.0038, 2.0546, 2.108, 2.1642, 2.2231, 2.2855, 2.3518, 2.4212, 2.4957, 2.5749, 2.6594, 2.7485, 2.8449, 2.9483, 3.059, 3.1781, 3.3077, 3.4483, 3.6014, 3.7672, 3.9502, 4.1524, 4.3739, 4.6232, 4.9021, 5.218, 5.5725, 5.9836, 6.4602, 7.0157, 7.6761, 8.4785, 9.4682, 10.7038, 12.3333], "isRoad": 0, "dist(km)": 0, "OC": 73 }, "Weight": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.3229, 1.2103, 1.1238, 1.0727, 1.0306, 1.0021, 1, 1.0137, 1.0288, 1.0442, 1.0602, 1.0766, 1.0936, 1.1111, 1.1292, 1.1507, 1.1699, 1.1895, 1.2096, 1.2311, 1.2527, 1.2752, 1.2988, 1.3229, 1.3478, 1.3745, 1.4014, 1.4294, 1.4595, 1.4899, 1.5216, 1.5554, 1.5903, 1.6265, 1.6655, 1.7052, 1.2414, 1.2634, 1.2861, 1.3097, 1.3348, 1.3601, 1.3866, 1.4149, 1.4434, 1.4732, 1.2741, 1.3024, 1.3326, 1.3634, 1.3964, 1.4307, 1.4667, 1.5051, 1.5445, 1.5871, 1.6312, 1.6785, 1.7277, 1.7811, 1.838, 1.8972, 1.9618, 2.0292, 2.1034, 2.1811, 2.2667, 2.3576, 2.4583, 2.5652, 2.6849, 2.8149, 2.9574, 3.1176, 3.2915, 3.4911, 3.7131, 3.9664, 4.2599, 4.5914, 4.9894, 5.4529, 6.0204, 6.7045, 7.5884, 8.7085, 10.2609], "isRoad": 0, "dist(km)": 0, "OC": 23.6 }, "50m": { "conversions": [0.5114, 0.6545, 0.7447, 0.8085, 0.8558, 0.8917, 0.9193, 0.9406, 0.957, 0.9696, 0.9792, 0.9865, 0.9919, 0.9959, 0.9988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9999, 0.9881, 0.9762, 0.9643, 0.9538, 0.9433, 0.9327, 0.9222, 0.9117, 0.9023, 0.8928, 0.8834, 0.8739, 0.8645, 0.856, 0.8475, 0.8389, 0.8304, 0.8219, 0.8142, 0.8065, 0.7987, 0.791, 0.7833, 0.7763, 0.7693, 0.7622, 0.7552, 0.7482, 0.7418, 0.7354, 0.7289, 0.7225, 0.7161, 0.7072, 0.6984, 0.6895, 0.6807, 0.6718, 0.6633, 0.6547, 0.6462, 0.6376, 0.6291, 0.6206, 0.612, 0.6035, 0.5949, 0.5864, 0.5709, 0.5554, 0.5398, 0.5243, 0.5088, 0.4885, 0.4681, 0.4478, 0.4274, 0.4071, 0.374, 0.3409, 0.3079, 0.2748, 0.2417], "isRoad": 0, "dist(km)": 0.05, "OC": 5.96 }, "55m": { "conversions": [0.5181, 0.6588, 0.7463, 0.8077, 0.8532, 0.8879, 0.9146, 0.9354, 0.9517, 0.9644, 0.9743, 0.9819, 0.9878, 0.9922, 0.9955, 0.9979, 0.9995, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9999, 0.9881, 0.9762, 0.9643, 0.9538, 0.9433, 0.9327, 0.9222, 0.9117, 0.9023, 0.8928, 0.8834, 0.8739, 0.8645, 0.856, 0.8475, 0.8389, 0.8304, 0.8219, 0.8142, 0.8065, 0.7987, 0.791, 0.7833, 0.7763, 0.7693, 0.7622, 0.7552, 0.7482, 0.7418, 0.7354, 0.7289, 0.7225, 0.7161, 0.7072, 0.6984, 0.6895, 0.6807, 0.6718, 0.6633, 0.6547, 0.6462, 0.6376, 0.6291, 0.6206, 0.612, 0.6035, 0.5949, 0.5864, 0.5709, 0.5554, 0.5398, 0.5243, 0.5088, 0.4885, 0.4681, 0.4478, 0.4274, 0.4071, 0.374, 0.3409, 0.3079, 0.2748, 0.2417], "isRoad": 0, "dist(km)": 0.055, "OC": 6.45 }, "60m": { "conversions": [0.5233, 0.662, 0.7473, 0.8068, 0.8509, 0.8845, 0.9107, 0.9312, 0.9474, 0.9602, 0.9703, 0.9783, 0.9845, 0.9893, 0.993, 0.9958, 0.9978, 0.9992, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9999, 0.9881, 0.9762, 0.9643, 0.9538, 0.9433, 0.9327, 0.9222, 0.9117, 0.9023, 0.8928, 0.8834, 0.8739, 0.8645, 0.856, 0.8475, 0.8389, 0.8304, 0.8219, 0.8142, 0.8065, 0.7987, 0.791, 0.7833, 0.7763, 0.7693, 0.7622, 0.7552, 0.7482, 0.7418, 0.7354, 0.7289, 0.7225, 0.7161, 0.7072, 0.6984, 0.6895, 0.6807, 0.6718, 0.6633, 0.6547, 0.6462, 0.6376, 0.6291, 0.6206, 0.612, 0.6035, 0.5949, 0.5864, 0.5709, 0.5554, 0.5398, 0.5243, 0.5088, 0.4885, 0.4681, 0.4478, 0.4274, 0.4071, 0.374, 0.3409, 0.3079, 0.2748, 0.2417], "isRoad": 0, "dist(km)": 0.06, "OC": 6.92 }, "100m": { "conversions": [0.5333, 0.6647, 0.743, 0.797, 0.8369, 0.8678, 0.8924, 0.9123, 0.9288, 0.9425, 0.954, 0.9637, 0.9719, 0.9789, 0.9848, 0.9897, 0.9939, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9899, 0.9781, 0.9663, 0.9545, 0.944, 0.9335, 0.923, 0.9125, 0.902, 0.8926, 0.8832, 0.8739, 0.8645, 0.8551, 0.8466, 0.8381, 0.8297, 0.8212, 0.8127, 0.805, 0.7974, 0.7897, 0.7821, 0.7744, 0.7674, 0.7604, 0.7535, 0.7465, 0.7395, 0.7331, 0.7267, 0.7204, 0.714, 0.7076, 0.6983, 0.689, 0.6798, 0.6705, 0.6612, 0.6538, 0.6465, 0.6391, 0.6318, 0.6244, 0.6071, 0.5898, 0.5725, 0.5552, 0.5379, 0.5215, 0.5052, 0.4888, 0.4725, 0.4561, 0.4348, 0.4135, 0.3923, 0.371, 0.3497, 0.3281, 0.3065, 0.2849, 0.2633, 0.2417], "isRoad": 0, "dist(km)": 0.1, "OC": 10.49 }, "200m": { "conversions": [0.5006, 0.6287, 0.7079, 0.764, 0.8066, 0.8404, 0.8678, 0.8907, 0.9099, 0.9263, 0.9405, 0.9528, 0.9635, 0.9728, 0.9811, 0.9882, 0.9945, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.994, 0.9813, 0.9687, 0.956, 0.9434, 0.9323, 0.9211, 0.91, 0.8988, 0.8877, 0.8778, 0.8679, 0.858, 0.8481, 0.8382, 0.8293, 0.8205, 0.8116, 0.8028, 0.7939, 0.7859, 0.7779, 0.77, 0.762, 0.754, 0.7468, 0.7396, 0.7324, 0.7252, 0.718, 0.7114, 0.7049, 0.6983, 0.6918, 0.6852, 0.6792, 0.6732, 0.6673, 0.6613, 0.6553, 0.6428, 0.6303, 0.6178, 0.6053, 0.5928, 0.5759, 0.5589, 0.542, 0.525, 0.5081, 0.4886, 0.469, 0.4495, 0.4299, 0.4104, 0.3911, 0.3718, 0.3524, 0.3331, 0.3138, 0.2994, 0.285, 0.2705, 0.2561, 0.2417], "isRoad": 0, "dist(km)": 0.2, "OC": 21.34 }, "300m": { "conversions": [0.4912, 0.6114, 0.6884, 0.7443, 0.7876, 0.8225, 0.8514, 0.8758, 0.8967, 0.9148, 0.9306, 0.9445, 0.9569, 0.9679, 0.9777, 0.9865, 0.9944, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9954, 0.9823, 0.9709, 0.9594, 0.9479, 0.9364, 0.925, 0.9148, 0.9046, 0.8944, 0.8842, 0.874, 0.8648, 0.8557, 0.8466, 0.8375, 0.8283, 0.8201, 0.8119, 0.8037, 0.7955, 0.7872, 0.7798, 0.7723, 0.7649, 0.7575, 0.75, 0.7433, 0.7365, 0.7297, 0.7229, 0.7162, 0.7076, 0.699, 0.6904, 0.6818, 0.6732, 0.6628, 0.6525, 0.6422, 0.6319, 0.6215, 0.6094, 0.5973, 0.5851, 0.573, 0.5609, 0.5457, 0.5306, 0.5154, 0.5003, 0.4851, 0.4688, 0.4525, 0.4362, 0.4199, 0.4036, 0.386, 0.3684, 0.3508, 0.3332, 0.3156, 0.3008, 0.2861, 0.2712, 0.2565, 0.2417], "isRoad": 0, "dist(km)": 0.3, "OC": 33 }, "400m": { "conversions": [0.4819, 0.5939, 0.6688, 0.7246, 0.7686, 0.8047, 0.8351, 0.8609, 0.8835, 0.9032, 0.9207, 0.9363, 0.9503, 0.963, 0.9744, 0.9848, 0.9943, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9927, 0.9811, 0.9696, 0.958, 0.9477, 0.9374, 0.9271, 0.9168, 0.9065, 0.8972, 0.888, 0.8787, 0.8695, 0.8602, 0.8518, 0.8435, 0.8351, 0.8268, 0.8184, 0.8108, 0.8032, 0.7957, 0.7881, 0.7805, 0.7736, 0.7667, 0.7598, 0.7529, 0.746, 0.7397, 0.7333, 0.727, 0.7206, 0.7143, 0.7037, 0.693, 0.6824, 0.6717, 0.6611, 0.6464, 0.6317, 0.6171, 0.6024, 0.5877, 0.5759, 0.5642, 0.5524, 0.5407, 0.5289, 0.5155, 0.5022, 0.4888, 0.4755, 0.4621, 0.449, 0.4359, 0.4229, 0.4098, 0.3967, 0.3808, 0.3649, 0.3491, 0.3332, 0.3173, 0.3022, 0.2871, 0.2719, 0.2568, 0.2417], "isRoad": 0, "dist(km)": 0.4, "OC": 47.6 }, "500m": { "conversions": [0.5111, 0.6116, 0.681, 0.734, 0.7765, 0.8117, 0.8415, 0.867, 0.8892, 0.9086, 0.9257, 0.9408, 0.9542, 0.9661, 0.9767, 0.9862, 0.9947, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9954, 0.9843, 0.973, 0.963, 0.953, 0.943, 0.933, 0.9229, 0.9139, 0.9049, 0.8958, 0.8868, 0.8777, 0.8695, 0.8614, 0.8531, 0.845, 0.8368, 0.8283, 0.8197, 0.8113, 0.8028, 0.7943, 0.7862, 0.7781, 0.77, 0.7618, 0.7537, 0.7453, 0.7368, 0.7284, 0.7199, 0.7114, 0.7001, 0.6887, 0.6774, 0.666, 0.6547, 0.6399, 0.6251, 0.6104, 0.5956, 0.5809, 0.5687, 0.5566, 0.5444, 0.5323, 0.5201, 0.5068, 0.4937, 0.4804, 0.4672, 0.454, 0.4411, 0.4281, 0.4153, 0.4024, 0.3895, 0.3743, 0.3592, 0.3442, 0.329, 0.3139, 0.2995, 0.2851, 0.2706, 0.2561, 0.2417], "isRoad": 0, "dist(km)": 0.5, "OC": 63.7 }, "600m": { "conversions": [0.5404, 0.6292, 0.6933, 0.7434, 0.7844, 0.8187, 0.8479, 0.8731, 0.8949, 0.914, 0.9306, 0.9452, 0.958, 0.9692, 0.979, 0.9876, 0.995, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9989, 0.9881, 0.9783, 0.9686, 0.9589, 0.9491, 0.9394, 0.9305, 0.9217, 0.9129, 0.9041, 0.8953, 0.8872, 0.8792, 0.8712, 0.8632, 0.8551, 0.8457, 0.8363, 0.8269, 0.8175, 0.8081, 0.7988, 0.7894, 0.7801, 0.7708, 0.7615, 0.7509, 0.7403, 0.7297, 0.7191, 0.7086, 0.6965, 0.6845, 0.6724, 0.6604, 0.6483, 0.6335, 0.6186, 0.6038, 0.5889, 0.574, 0.5615, 0.5489, 0.5364, 0.5238, 0.5113, 0.4982, 0.4851, 0.472, 0.459, 0.4459, 0.4331, 0.4204, 0.4077, 0.395, 0.3822, 0.3679, 0.3535, 0.3392, 0.3249, 0.3105, 0.2968, 0.283, 0.2692, 0.2555, 0.2417], "isRoad": 0, "dist(km)": 0.6, "OC": 80 }, "800m": { "conversions": [0.5989, 0.6645, 0.7177, 0.7622, 0.8001, 0.8327, 0.8609, 0.8853, 0.9064, 0.9247, 0.9406, 0.9541, 0.9656, 0.9755, 0.9836, 0.9903, 0.9957, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9906, 0.9814, 0.9722, 0.9638, 0.9554, 0.9471, 0.9387, 0.9303, 0.9226, 0.9149, 0.9072, 0.8995, 0.8918, 0.8806, 0.8693, 0.8581, 0.8468, 0.8356, 0.8239, 0.8121, 0.8004, 0.7886, 0.7769, 0.7621, 0.7473, 0.7324, 0.7176, 0.7028, 0.6893, 0.6759, 0.6624, 0.649, 0.6355, 0.6205, 0.6054, 0.5904, 0.5753, 0.5603, 0.547, 0.5336, 0.5203, 0.5069, 0.4936, 0.4808, 0.468, 0.4552, 0.4424, 0.4296, 0.4172, 0.4048, 0.3925, 0.3801, 0.3677, 0.3549, 0.3421, 0.3293, 0.3165, 0.3037, 0.2913, 0.2789, 0.2665, 0.2541, 0.2417], "isRoad": 0, "dist(km)": 0.8, "OC": 113.28 }, "1000m": { "conversions": [0.6157, 0.6699, 0.7185, 0.7623, 0.8016, 0.8367, 0.8676, 0.8947, 0.918, 0.9379, 0.9545, 0.9681, 0.9792, 0.9879, 0.9946, 0.9997, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9912, 0.9827, 0.9738, 0.9647, 0.9559, 0.9469, 0.938, 0.9289, 0.9198, 0.9113, 0.9028, 0.8942, 0.8856, 0.8771, 0.8661, 0.8549, 0.8439, 0.8327, 0.8217, 0.8103, 0.7988, 0.7874, 0.7759, 0.7645, 0.7509, 0.7373, 0.7236, 0.7099, 0.6963, 0.6836, 0.671, 0.6583, 0.6457, 0.633, 0.6192, 0.6054, 0.5916, 0.5778, 0.564, 0.5515, 0.5389, 0.5263, 0.5137, 0.5011, 0.4888, 0.4761, 0.463, 0.4496, 0.4359, 0.4221, 0.4079, 0.3935, 0.3787, 0.3635, 0.3478, 0.3316, 0.3151, 0.2983, 0.2811, 0.2639, 0.2464, 0.2284, 0.2102, 0.1916], "isRoad": 0, "dist(km)": 1, "OC": 146.5 }, "1500m": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9971, 0.9946, 0.9913, 0.9871, 0.9822, 0.9765, 0.9701, 0.9628, 0.9547, 0.9459, 0.9362, 0.9258, 0.9151, 0.9044, 0.8937, 0.8831, 0.8724, 0.8617, 0.851, 0.8403, 0.8297, 0.819, 0.8083, 0.7976, 0.7869, 0.7763, 0.7656, 0.7549, 0.7442, 0.7335, 0.7229, 0.7122, 0.7015, 0.6908, 0.6801, 0.6695, 0.6588, 0.6481, 0.6374, 0.6267, 0.6161, 0.6054, 0.5947, 0.584, 0.5733, 0.5627, 0.552, 0.5413, 0.5306, 0.5199, 0.5087, 0.4962, 0.4825, 0.4676, 0.4515, 0.4343, 0.4158, 0.3961, 0.3752, 0.3531, 0.3299, 0.3054, 0.2797, 0.2528, 0.2247, 0.1955, 0.165, 0.1333, 0.1004, 0.0663], "isRoad": 0, "dist(km)": 1.5, "OC": 232.47 }, "1Mile": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9972, 0.9948, 0.9915, 0.9875, 0.9827, 0.9771, 0.9707, 0.9636, 0.9557, 0.9469, 0.9375, 0.9272, 0.9165, 0.9058, 0.8951, 0.8844, 0.8737, 0.863, 0.8523, 0.8416, 0.8309, 0.8202, 0.8095, 0.7988, 0.7881, 0.7774, 0.7667, 0.756, 0.7453, 0.7346, 0.7239, 0.7132, 0.7025, 0.6918, 0.6811, 0.6704, 0.6597, 0.649, 0.6383, 0.6276, 0.6169, 0.6062, 0.5955, 0.5848, 0.5741, 0.5634, 0.5527, 0.542, 0.5313, 0.5206, 0.5091, 0.4965, 0.4827, 0.4678, 0.4516, 0.4343, 0.4158, 0.3961, 0.3752, 0.3532, 0.3299, 0.3055, 0.2799, 0.2532, 0.2252, 0.1961, 0.1658, 0.1343, 0.1016, 0.0677], "isRoad": 0, "dist(km)": 1.609344, "OC": 251.6 }, "2km": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9976, 0.9953, 0.9923, 0.9885, 0.984, 0.9787, 0.9727, 0.9659, 0.9584, 0.9501, 0.9411, 0.9313, 0.9208, 0.91, 0.8992, 0.8885, 0.8777, 0.867, 0.8562, 0.8454, 0.8347, 0.8239, 0.8132, 0.8024, 0.7916, 0.7809, 0.7701, 0.7594, 0.7486, 0.7378, 0.7271, 0.7163, 0.7056, 0.6948, 0.684, 0.6733, 0.6625, 0.6518, 0.641, 0.6302, 0.6195, 0.6087, 0.598, 0.5872, 0.5764, 0.5657, 0.5549, 0.5442, 0.5334, 0.5225, 0.5106, 0.4976, 0.4834, 0.4682, 0.4517, 0.4341, 0.4154, 0.3956, 0.3746, 0.3524, 0.3292, 0.3047, 0.2792, 0.2525, 0.2246, 0.1957, 0.1655, 0.1343, 0.1019, 0.0684], "isRoad": 0, "dist(km)": 2, "OC": 321.5 }, "3km": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9994, 0.9981, 0.9962, 0.9935, 0.9902, 0.9861, 0.9813, 0.9759, 0.9697, 0.9628, 0.9553, 0.947, 0.938, 0.9283, 0.918, 0.9071, 0.8962, 0.8854, 0.8745, 0.8636, 0.8527, 0.8419, 0.831, 0.8201, 0.8092, 0.7984, 0.7875, 0.7766, 0.7657, 0.7549, 0.744, 0.7331, 0.7222, 0.7114, 0.7005, 0.6896, 0.6787, 0.6678, 0.657, 0.6461, 0.6352, 0.6243, 0.6135, 0.6026, 0.5917, 0.5808, 0.57, 0.5591, 0.5482, 0.5373, 0.5257, 0.5131, 0.4993, 0.4845, 0.4686, 0.4517, 0.4336, 0.4145, 0.3942, 0.3729, 0.3506, 0.3271, 0.3026, 0.277, 0.2503, 0.2225, 0.1936, 0.1637, 0.1327, 0.1006, 0.0674], "isRoad": 0, "dist(km)": 3, "OC": 501.42 }, "2Mile": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9994, 0.9982, 0.9963, 0.9937, 0.9904, 0.9864, 0.9817, 0.9764, 0.9703, 0.9635, 0.9561, 0.9479, 0.9391, 0.9295, 0.9193, 0.9085, 0.8976, 0.8867, 0.8758, 0.8649, 0.854, 0.8431, 0.8322, 0.8213, 0.8104, 0.7995, 0.7886, 0.7777, 0.7668, 0.7559, 0.745, 0.7341, 0.7232, 0.7123, 0.7014, 0.6906, 0.6797, 0.6688, 0.6579, 0.647, 0.6361, 0.6252, 0.6143, 0.6034, 0.5925, 0.5816, 0.5707, 0.5598, 0.5489, 0.538, 0.5263, 0.5135, 0.4997, 0.4848, 0.4688, 0.4518, 0.4337, 0.4146, 0.3944, 0.3731, 0.3508, 0.3275, 0.303, 0.2775, 0.251, 0.2234, 0.1947, 0.165, 0.1342, 0.1023, 0.0694], "isRoad": 0, "dist(km)": 3.218688, "OC": 541.5 }, "4km": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9967, 0.9943, 0.9912, 0.9874, 0.983, 0.9779, 0.9721, 0.9656, 0.9585, 0.9507, 0.9422, 0.9331, 0.9233, 0.9128, 0.9019, 0.8909, 0.88, 0.869, 0.8581, 0.8471, 0.8361, 0.8252, 0.8142, 0.8033, 0.7923, 0.7814, 0.7704, 0.7594, 0.7485, 0.7375, 0.7266, 0.7156, 0.7047, 0.6937, 0.6827, 0.6718, 0.6608, 0.6499, 0.6389, 0.628, 0.617, 0.606, 0.5951, 0.5841, 0.5732, 0.5622, 0.5513, 0.5401, 0.528, 0.5149, 0.5007, 0.4855, 0.4693, 0.4521, 0.4339, 0.4147, 0.3944, 0.3731, 0.3508, 0.3275, 0.3031, 0.2777, 0.2514, 0.2239, 0.1955, 0.1661, 0.1356, 0.1041, 0.0716], "isRoad": 0, "dist(km)": 4, "OC": 683 }, "3Mile": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9987, 0.997, 0.9947, 0.9918, 0.9882, 0.9839, 0.979, 0.9735, 0.9673, 0.9604, 0.9529, 0.9448, 0.936, 0.9265, 0.9164, 0.9056, 0.8946, 0.8836, 0.8726, 0.8616, 0.8506, 0.8396, 0.8286, 0.8176, 0.8066, 0.7955, 0.7845, 0.7735, 0.7625, 0.7515, 0.7405, 0.7295, 0.7185, 0.7075, 0.6965, 0.6854, 0.6744, 0.6634, 0.6524, 0.6414, 0.6304, 0.6194, 0.6084, 0.5974, 0.5864, 0.5753, 0.5643, 0.5533, 0.5419, 0.5294, 0.516, 0.5015, 0.4861, 0.4696, 0.4522, 0.4337, 0.4143, 0.3938, 0.3724, 0.3499, 0.3265, 0.302, 0.2766, 0.2501, 0.2227, 0.1942, 0.1648, 0.1343, 0.1029, 0.0704], "isRoad": 0, "dist(km)": 4.828032, "OC": 833 }, "5kmRoad": { "conversions": [0.701, 0.7343, 0.7658, 0.7954, 0.8232, 0.8493, 0.8734, 0.8958, 0.9164, 0.9351, 0.952, 0.968, 0.984, 0.996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9977, 0.9959, 0.9935, 0.9906, 0.9871, 0.9831, 0.9785, 0.9734, 0.9678, 0.9616, 0.9549, 0.9476, 0.9398, 0.9314, 0.9225, 0.9131, 0.9034, 0.8937, 0.884, 0.8743, 0.8645, 0.8548, 0.8451, 0.8354, 0.8257, 0.816, 0.8063, 0.7966, 0.7869, 0.7772, 0.7674, 0.7577, 0.748, 0.7383, 0.7286, 0.7189, 0.7092, 0.6995, 0.6898, 0.6801, 0.6703, 0.6606, 0.6509, 0.6412, 0.6315, 0.6218, 0.612, 0.6013, 0.5897, 0.5772, 0.5637, 0.5493, 0.534, 0.5177, 0.5004, 0.4823, 0.4632, 0.4431, 0.4221, 0.4002, 0.3773, 0.3535, 0.3288, 0.3031, 0.2764, 0.2489, 0.2204, 0.1909], "isRoad": 1, "dist(km)": 5, "OC": 886 }, "5km": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9987, 0.9971, 0.9948, 0.9919, 0.9883, 0.9841, 0.9793, 0.9737, 0.9676, 0.9608, 0.9533, 0.9452, 0.9365, 0.9271, 0.917, 0.9063, 0.8953, 0.8843, 0.8733, 0.8623, 0.8512, 0.8402, 0.8292, 0.8182, 0.8072, 0.7961, 0.7851, 0.7741, 0.7631, 0.7521, 0.741, 0.73, 0.719, 0.708, 0.697, 0.6859, 0.6749, 0.6639, 0.6529, 0.6419, 0.6308, 0.6198, 0.6088, 0.5978, 0.5868, 0.5757, 0.5647, 0.5537, 0.5422, 0.5297, 0.5161, 0.5016, 0.4861, 0.4696, 0.4521, 0.4335, 0.414, 0.3935, 0.372, 0.3495, 0.3259, 0.3014, 0.2759, 0.2494, 0.2219, 0.1933, 0.1638, 0.1333, 0.1018, 0.0692], "isRoad": 0, "dist(km)": 5, "OC": 864.68 }, "6kmRoad": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9977, 0.9958, 0.9933, 0.9904, 0.9868, 0.9827, 0.9781, 0.9728, 0.9671, 0.9608, 0.9539, 0.9465, 0.9385, 0.93, 0.9209, 0.9112, 0.9013, 0.8914, 0.8815, 0.8716, 0.8616, 0.8517, 0.8418, 0.8319, 0.822, 0.8121, 0.8021, 0.7922, 0.7823, 0.7724, 0.7625, 0.7526, 0.7426, 0.7327, 0.7228, 0.7129, 0.703, 0.693, 0.6831, 0.6732, 0.6633, 0.6534, 0.6435, 0.6335, 0.6236, 0.6137, 0.6036, 0.5926, 0.5807, 0.5678, 0.554, 0.5393, 0.5236, 0.507, 0.4894, 0.4709, 0.4515, 0.4311, 0.4098, 0.3875, 0.3643, 0.3402, 0.3151, 0.2891, 0.2621, 0.2342, 0.2054, 0.1756], "isRoad": 1, "dist(km)": 6, "OC": 1071 }, "6km": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9988, 0.9972, 0.995, 0.9922, 0.9888, 0.9848, 0.9801, 0.9749, 0.969, 0.9624, 0.9553, 0.9475, 0.9391, 0.9301, 0.9205, 0.9103, 0.8994, 0.8883, 0.8771, 0.866, 0.8548, 0.8437, 0.8325, 0.8214, 0.8102, 0.7991, 0.7879, 0.7768, 0.7657, 0.7545, 0.7434, 0.7322, 0.7211, 0.7099, 0.6988, 0.6876, 0.6765, 0.6653, 0.6542, 0.643, 0.6319, 0.6208, 0.6096, 0.5985, 0.5873, 0.5762, 0.565, 0.5539, 0.5426, 0.5305, 0.5174, 0.5033, 0.4882, 0.472, 0.4549, 0.4368, 0.4177, 0.3976, 0.3765, 0.3543, 0.3312, 0.3071, 0.282, 0.2559, 0.2288, 0.2007, 0.1715, 0.1414, 0.1103, 0.0782], "isRoad": 0, "dist(km)": 6, "OC": 1051 }, "4MileRoad": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9977, 0.9958, 0.9933, 0.9903, 0.9867, 0.9826, 0.9779, 0.9726, 0.9668, 0.9605, 0.9535, 0.946, 0.938, 0.9294, 0.9202, 0.9105, 0.9005, 0.8905, 0.8805, 0.8705, 0.8605, 0.8505, 0.8405, 0.8305, 0.8205, 0.8105, 0.8005, 0.7905, 0.7805, 0.7705, 0.7605, 0.7506, 0.7406, 0.7306, 0.7206, 0.7106, 0.7006, 0.6906, 0.6806, 0.6706, 0.6606, 0.6506, 0.6406, 0.6306, 0.6206, 0.6106, 0.6004, 0.5893, 0.5772, 0.5642, 0.5503, 0.5354, 0.5196, 0.5029, 0.4852, 0.4665, 0.447, 0.4265, 0.405, 0.3826, 0.3593, 0.335, 0.3098, 0.2837, 0.2566, 0.2285, 0.1996, 0.1697], "isRoad": 1, "dist(km)": 6.437376, "OC": 1152 }, "4Mile": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9988, 0.9972, 0.9951, 0.9924, 0.989, 0.985, 0.9804, 0.9752, 0.9694, 0.963, 0.956, 0.9483, 0.9401, 0.9312, 0.9217, 0.9117, 0.901, 0.8898, 0.8786, 0.8674, 0.8562, 0.845, 0.8338, 0.8226, 0.8114, 0.8002, 0.789, 0.7778, 0.7666, 0.7554, 0.7443, 0.7331, 0.7219, 0.7107, 0.6995, 0.6883, 0.6771, 0.6659, 0.6547, 0.6435, 0.6323, 0.6211, 0.6099, 0.5987, 0.5875, 0.5763, 0.5651, 0.5539, 0.5427, 0.5309, 0.518, 0.5041, 0.4893, 0.4734, 0.4565, 0.4387, 0.4198, 0.3999, 0.3791, 0.3572, 0.3343, 0.3105, 0.2856, 0.2598, 0.2329, 0.205, 0.1762, 0.1463, 0.1154, 0.0836], "isRoad": 0, "dist(km)": 6.437376, "OC": 1132 }, "8kmRoad": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9976, 0.9956, 0.9931, 0.99, 0.9864, 0.9821, 0.9773, 0.972, 0.966, 0.9595, 0.9524, 0.9447, 0.9365, 0.9276, 0.9183, 0.9083, 0.8981, 0.8878, 0.8776, 0.8673, 0.8571, 0.8468, 0.8366, 0.8263, 0.8161, 0.8058, 0.7956, 0.7854, 0.7751, 0.7649, 0.7546, 0.7444, 0.7341, 0.7239, 0.7136, 0.7034, 0.6931, 0.6829, 0.6727, 0.6624, 0.6522, 0.6419, 0.6317, 0.6214, 0.6112, 0.6009, 0.5904, 0.5788, 0.5664, 0.553, 0.5387, 0.5234, 0.5072, 0.4901, 0.472, 0.453, 0.433, 0.4121, 0.3903, 0.3675, 0.3438, 0.3191, 0.2935, 0.2669, 0.2395, 0.211, 0.1817, 0.1514], "isRoad": 1, "dist(km)": 8, "OC": 1442 }, "8km": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9988, 0.9974, 0.9953, 0.9927, 0.9895, 0.9857, 0.9813, 0.9764, 0.9708, 0.9647, 0.958, 0.9507, 0.9428, 0.9343, 0.9253, 0.9157, 0.9055, 0.8947, 0.8834, 0.872, 0.8607, 0.8493, 0.838, 0.8266, 0.8153, 0.804, 0.7926, 0.7813, 0.7699, 0.7586, 0.7472, 0.7359, 0.7245, 0.7132, 0.7019, 0.6905, 0.6792, 0.6678, 0.6565, 0.6451, 0.6338, 0.6224, 0.6111, 0.5997, 0.5884, 0.5771, 0.5657, 0.5544, 0.543, 0.5315, 0.519, 0.5055, 0.491, 0.4755, 0.459, 0.4416, 0.4231, 0.4036, 0.3831, 0.3616, 0.3391, 0.3157, 0.2912, 0.2657, 0.2392, 0.2117, 0.1832, 0.1537, 0.1233, 0.0918], "isRoad": 0, "dist(km)": 8, "OC": 1425 }, "5MileRoad": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9976, 0.9956, 0.9931, 0.99, 0.9864, 0.9821, 0.9773, 0.9719, 0.966, 0.9594, 0.9523, 0.9447, 0.9364, 0.9276, 0.9182, 0.9082, 0.898, 0.8877, 0.8775, 0.8672, 0.857, 0.8467, 0.8365, 0.8262, 0.816, 0.8057, 0.7955, 0.7852, 0.775, 0.7647, 0.7545, 0.7442, 0.734, 0.7237, 0.7134, 0.7032, 0.6929, 0.6827, 0.6724, 0.6622, 0.6519, 0.6417, 0.6314, 0.6212, 0.6109, 0.6007, 0.5901, 0.5786, 0.5661, 0.5527, 0.5384, 0.5231, 0.5069, 0.4897, 0.4716, 0.4526, 0.4326, 0.4117, 0.3899, 0.3671, 0.3433, 0.3187, 0.293, 0.2665, 0.239, 0.2106, 0.1812, 0.1509], "isRoad": 1, "dist(km)": 8.04672, "OC": 1452 }, "5Mile": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9988, 0.9974, 0.9953, 0.9927, 0.9895, 0.9857, 0.9813, 0.9764, 0.9709, 0.9647, 0.958, 0.9507, 0.9429, 0.9344, 0.9254, 0.9158, 0.9056, 0.8948, 0.8835, 0.8722, 0.8608, 0.8495, 0.8381, 0.8268, 0.8154, 0.8041, 0.7927, 0.7814, 0.77, 0.7587, 0.7473, 0.736, 0.7246, 0.7133, 0.7019, 0.6906, 0.6792, 0.6679, 0.6565, 0.6452, 0.6338, 0.6225, 0.6111, 0.5998, 0.5884, 0.5771, 0.5657, 0.5544, 0.543, 0.5315, 0.519, 0.5055, 0.491, 0.4756, 0.4591, 0.4416, 0.4231, 0.4037, 0.3832, 0.3617, 0.3392, 0.3157, 0.2913, 0.2658, 0.2393, 0.2118, 0.1833, 0.1539, 0.1234, 0.0919], "isRoad": 0, "dist(km)": 8.04672, "OC": 1435 }, "10kmRoad": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9975, 0.9955, 0.993, 0.9898, 0.986, 0.9817, 0.9768, 0.9713, 0.9652, 0.9585, 0.9512, 0.9433, 0.9349, 0.9259, 0.9162, 0.906, 0.8955, 0.885, 0.8745, 0.864, 0.8535, 0.843, 0.8325, 0.822, 0.8115, 0.801, 0.7905, 0.78, 0.7695, 0.759, 0.7485, 0.738, 0.7275, 0.717, 0.7065, 0.696, 0.6855, 0.675, 0.6645, 0.654, 0.6435, 0.633, 0.6225, 0.612, 0.6015, 0.591, 0.5801, 0.5681, 0.5553, 0.5415, 0.5268, 0.5111, 0.4945, 0.4769, 0.4585, 0.439, 0.4187, 0.3973, 0.3751, 0.3519, 0.3278, 0.3027, 0.2767, 0.2497, 0.2219, 0.193, 0.1633, 0.1325], "isRoad": 1, "dist(km)": 10, "OC": 1820 }, "10km": { "conversions": [0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9955, 0.993, 0.99, 0.9863, 0.9821, 0.9774, 0.9721, 0.9662, 0.9598, 0.9528, 0.9453, 0.9372, 0.9285, 0.9193, 0.9096, 0.8992, 0.8883, 0.877, 0.8655, 0.854, 0.8425, 0.831, 0.8195, 0.808, 0.7965, 0.785, 0.7735, 0.762, 0.7505, 0.739, 0.7275, 0.716, 0.7045, 0.693, 0.6815, 0.67, 0.6585, 0.647, 0.6355, 0.624, 0.6125, 0.601, 0.5895, 0.578, 0.5665, 0.555, 0.5435, 0.532, 0.52, 0.507, 0.493, 0.478, 0.462, 0.445, 0.427, 0.408, 0.388, 0.367, 0.345, 0.322, 0.298, 0.273, 0.247, 0.22, 0.192, 0.163, 0.133, 0.102], "isRoad": 0, "dist(km)": 10, "OC": 1801.09 }, "12km": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9975, 0.9955, 0.993, 0.9898, 0.986, 0.9817, 0.9768, 0.9713, 0.9652, 0.9585, 0.9512, 0.9433, 0.9349, 0.9259, 0.9162, 0.906, 0.8955, 0.885, 0.8745, 0.864, 0.8535, 0.843, 0.8325, 0.822, 0.8115, 0.801, 0.7905, 0.78, 0.7695, 0.759, 0.7485, 0.738, 0.7275, 0.717, 0.7065, 0.696, 0.6855, 0.675, 0.6645, 0.654, 0.6435, 0.633, 0.6225, 0.612, 0.6015, 0.5908, 0.5792, 0.5667, 0.5533, 0.539, 0.5238, 0.5077, 0.4907, 0.4729, 0.4541, 0.4344, 0.4139, 0.3924, 0.37, 0.3468, 0.3226, 0.2976, 0.2716, 0.2448, 0.2171, 0.1884, 0.1589, 0.1285], "isRoad": 1, "dist(km)": 12, "OC": 2194 }, "15km": { "conversions": [0.5945, 0.6382, 0.6793, 0.7178, 0.7537, 0.787, 0.8177, 0.8458, 0.8713, 0.8942, 0.9145, 0.9335, 0.9525, 0.9696, 0.9829, 0.9924, 0.9981, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9956, 0.9931, 0.9901, 0.9865, 0.9823, 0.9776, 0.9724, 0.9666, 0.9602, 0.9533, 0.9458, 0.9378, 0.9293, 0.9201, 0.9105, 0.9003, 0.8898, 0.8793, 0.8688, 0.8583, 0.8478, 0.8373, 0.8268, 0.8163, 0.8058, 0.7953, 0.7848, 0.7743, 0.7638, 0.7533, 0.7428, 0.7323, 0.7218, 0.7113, 0.7008, 0.6903, 0.6798, 0.6693, 0.6588, 0.6483, 0.6378, 0.6273, 0.6168, 0.6063, 0.5956, 0.5841, 0.5718, 0.5587, 0.5447, 0.5299, 0.5142, 0.4977, 0.4804, 0.4622, 0.4432, 0.4233, 0.4026, 0.381, 0.3586, 0.3354, 0.3113, 0.2864, 0.2606, 0.234, 0.2065, 0.1782, 0.1491, 0.1191], "isRoad": 1, "dist(km)": 15, "OC": 2755 }, "10Mile": { "conversions": [0.6525, 0.6924, 0.7301, 0.7656, 0.7989, 0.83, 0.8589, 0.8856, 0.9101, 0.9324, 0.9525, 0.9715, 0.9905, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9956, 0.9931, 0.9901, 0.9865, 0.9823, 0.9776, 0.9724, 0.9666, 0.9602, 0.9533, 0.9458, 0.9378, 0.9293, 0.9201, 0.9105, 0.9003, 0.8898, 0.8793, 0.8688, 0.8583, 0.8478, 0.8373, 0.8268, 0.8163, 0.8058, 0.7953, 0.7848, 0.7743, 0.7638, 0.7533, 0.7428, 0.7323, 0.7218, 0.7113, 0.7008, 0.6903, 0.6798, 0.6693, 0.6588, 0.6483, 0.6378, 0.6273, 0.6168, 0.6063, 0.5954, 0.5837, 0.5713, 0.5579, 0.5438, 0.5288, 0.513, 0.4964, 0.479, 0.4607, 0.4416, 0.4217, 0.401, 0.3794, 0.357, 0.3338, 0.3097, 0.2849, 0.2592, 0.2326, 0.2053, 0.1771, 0.1481, 0.1183], "isRoad": 1, "dist(km)": 16.09344, "OC": 2961 }, "20km": { "conversions": [0.6525, 0.6924, 0.7301, 0.7656, 0.7989, 0.83, 0.8589, 0.8856, 0.9101, 0.9324, 0.9525, 0.9715, 0.9905, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9956, 0.9931, 0.9901, 0.9865, 0.9823, 0.9776, 0.9724, 0.9666, 0.9602, 0.9533, 0.9458, 0.9378, 0.9293, 0.9201, 0.9105, 0.9003, 0.8898, 0.8793, 0.8688, 0.8583, 0.8478, 0.8373, 0.8268, 0.8163, 0.8058, 0.7953, 0.7848, 0.7743, 0.7638, 0.7533, 0.7428, 0.7323, 0.7218, 0.7113, 0.7008, 0.6903, 0.6798, 0.6693, 0.6588, 0.6483, 0.6378, 0.6273, 0.6168, 0.606, 0.5945, 0.5823, 0.5692, 0.5554, 0.5408, 0.5255, 0.5093, 0.4924, 0.4747, 0.4563, 0.4371, 0.4171, 0.3963, 0.3748, 0.3525, 0.3294, 0.3055, 0.2809, 0.2555, 0.2293, 0.2023, 0.1746, 0.1461, 0.1169], "isRoad": 1, "dist(km)": 20, "OC": 3700 }, "Half.Mar": { "conversions": [0.5945, 0.6382, 0.6793, 0.7178, 0.7537, 0.787, 0.8177, 0.8458, 0.8713, 0.8942, 0.9145, 0.9335, 0.9525, 0.9696, 0.9829, 0.9924, 0.9981, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9956, 0.9931, 0.9901, 0.9865, 0.9823, 0.9776, 0.9724, 0.9666, 0.9602, 0.9533, 0.9458, 0.9378, 0.9293, 0.9201, 0.9105, 0.9003, 0.8898, 0.8793, 0.8688, 0.8583, 0.8478, 0.8373, 0.8268, 0.8163, 0.8058, 0.7953, 0.7848, 0.7743, 0.7638, 0.7533, 0.7428, 0.7323, 0.7218, 0.7113, 0.7008, 0.6903, 0.6798, 0.6693, 0.6588, 0.6483, 0.6378, 0.6273, 0.6168, 0.6059, 0.5942, 0.5818, 0.5687, 0.5548, 0.5401, 0.5246, 0.5084, 0.4915, 0.4738, 0.4553, 0.436, 0.416, 0.3953, 0.3738, 0.3515, 0.3284, 0.3046, 0.2801, 0.2548, 0.2287, 0.2018, 0.1742, 0.1459, 0.1168], "isRoad": 1, "dist(km)": 21.0975, "OC": 3912 }, "25km": { "conversions": [0.6525, 0.6924, 0.7301, 0.7656, 0.7989, 0.83, 0.8589, 0.8856, 0.9101, 0.9324, 0.9525, 0.9715, 0.9905, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9955, 0.993, 0.9899, 0.9863, 0.9821, 0.9774, 0.972, 0.9662, 0.9597, 0.9528, 0.9452, 0.9371, 0.9284, 0.9192, 0.9094, 0.8991, 0.8885, 0.8778, 0.8672, 0.8566, 0.846, 0.8354, 0.8247, 0.8141, 0.8035, 0.7929, 0.7822, 0.7716, 0.761, 0.7504, 0.7398, 0.7291, 0.7185, 0.7079, 0.6973, 0.6866, 0.676, 0.6654, 0.6548, 0.6441, 0.6335, 0.6229, 0.6123, 0.6011, 0.5891, 0.5764, 0.5629, 0.5486, 0.5335, 0.5177, 0.5011, 0.4838, 0.4657, 0.4468, 0.4271, 0.4067, 0.3855, 0.3635, 0.3407, 0.3172, 0.293, 0.2679, 0.2421, 0.2155, 0.1881, 0.16, 0.1311, 0.1014], "isRoad": 1, "dist(km)": 25, "OC": 4665 }, "30km": { "conversions": [0.6525, 0.6924, 0.7301, 0.7656, 0.7989, 0.83, 0.8589, 0.8856, 0.9101, 0.9324, 0.9525, 0.9715, 0.9905, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9975, 0.9954, 0.9928, 0.9895, 0.9857, 0.9813, 0.9762, 0.9706, 0.9643, 0.9575, 0.95, 0.942, 0.9333, 0.9241, 0.9142, 0.9038, 0.893, 0.8822, 0.8715, 0.8607, 0.85, 0.8392, 0.8285, 0.8177, 0.807, 0.7962, 0.7855, 0.7747, 0.764, 0.7532, 0.7424, 0.7317, 0.7209, 0.7102, 0.6994, 0.6887, 0.6779, 0.6672, 0.6564, 0.6457, 0.6349, 0.6241, 0.6133, 0.6018, 0.5894, 0.5763, 0.5625, 0.5478, 0.5323, 0.5161, 0.4991, 0.4813, 0.4628, 0.4434, 0.4233, 0.4024, 0.3807, 0.3583, 0.335, 0.311, 0.2862, 0.2606, 0.2342, 0.2071, 0.1792, 0.1504, 0.121, 0.0907], "isRoad": 1, "dist(km)": 30, "OC": 5660 }, "Marathon": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592], "isRoad": 1, "dist(km)": 42.195, "OC": 8125 }, "50km": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592], "isRoad": 1, "dist(km)": 50, "OC": 9820 }, "50Mile": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592], "isRoad": 1, "dist(km)": 80.4672, "OC": 17760 }, "100km": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592], "isRoad": 1, "dist(km)": 100, "OC": 23591 }, "150km": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592], "isRoad": 1, "dist(km)": 150, "OC": 39700 }, "100Mile": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592], "isRoad": 1, "dist(km)": 160.9344, "OC": 43500 }, "200km": { "conversions": [0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592], "isRoad": 1, "dist(km)": 200, "OC": 57600 } }, "male": { "50Hur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8039, 0.8493, 0.8972, 0.9241, 0.9855, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0153, 1.0055, 0.9973, 0.9878, 0.9799, 0.9707, 0.9631, 0.9542, 0.9468, 0.9383, 0.9311, 0.9229, 0.9159, 0.908, 0.9012, 0.8935, 0.887, 0.8795, 0.8732, 0.867, 0.866, 0.8619, 0.8578, 0.8538, 0.8498, 0.8459, 0.8391, 0.8314, 0.8249, 0.8175, 0.843, 0.8249, 0.8075, 0.7909, 0.7758, 0.7604, 0.7457, 0.7315, 0.7185, 0.7053, 0.7381, 0.7359, 0.7329, 0.7307, 0.7285, 0.7256, 0.7235, 0.6913, 0.6612, 0.6342, 0.6266, 0.6003, 0.5762, 0.5534, 0.5328, 0.5137, 0.4876, 0.4641, 0.443, 0.4234, 0.4056, 0.3842, 0.365, 0.3476, 0.3318, 0.3174, 0.2987, 0.2821, 0.2672, 0.2538, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 6.25 }, "55Hur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8039, 0.8493, 0.8972, 0.9241, 0.9855, 0.9992, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0153, 1.0055, 0.9973, 0.9878, 0.9799, 0.9707, 0.9631, 0.9542, 0.9468, 0.9383, 0.9311, 0.9229, 0.9159, 0.908, 0.9012, 0.8935, 0.887, 0.8795, 0.8732, 0.867, 0.866, 0.8619, 0.8578, 0.8538, 0.8498, 0.8459, 0.8391, 0.8314, 0.8249, 0.8175, 0.843, 0.8249, 0.8075, 0.7909, 0.7758, 0.7604, 0.7457, 0.7315, 0.7185, 0.7053, 0.7381, 0.7359, 0.7329, 0.7307, 0.7285, 0.7256, 0.7235, 0.6913, 0.6612, 0.6342, 0.6266, 0.6003, 0.5762, 0.5534, 0.5328, 0.5137, 0.4876, 0.4641, 0.443, 0.4234, 0.4056, 0.3842, 0.365, 0.3476, 0.3318, 0.3174, 0.2987, 0.2821, 0.2672, 0.2538, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 6.76 }, "60Hur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8039, 0.8494, 0.8972, 0.9241, 0.9855, 0.9992, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0153, 1.0055, 0.9973, 0.9878, 0.9799, 0.9707, 0.9631, 0.9542, 0.9468, 0.9383, 0.9311, 0.9229, 0.9159, 0.908, 0.9012, 0.8935, 0.887, 0.8795, 0.8732, 0.867, 0.866, 0.8619, 0.8578, 0.8538, 0.8498, 0.8459, 0.8391, 0.8314, 0.8249, 0.8175, 0.843, 0.8249, 0.8075, 0.7909, 0.7758, 0.7604, 0.7457, 0.7315, 0.7185, 0.7053, 0.7381, 0.7359, 0.7329, 0.7307, 0.7285, 0.7256, 0.7235, 0.6913, 0.6612, 0.6342, 0.6266, 0.6003, 0.5762, 0.5534, 0.5328, 0.5137, 0.4876, 0.4641, 0.443, 0.4234, 0.4056, 0.3842, 0.365, 0.3476, 0.3318, 0.3174, 0.2987, 0.2821, 0.2672, 0.2538, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 7.3 }, "ShortHur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8039, 0.8493, 0.8972, 0.9241, 0.9855, 0.9992, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0148, 1.0118, 1.0088, 1.0059, 1.0029, 0.9999, 0.9912, 0.9824, 0.9737, 0.9649, 0.9562, 0.9483, 0.9404, 0.9326, 0.9247, 0.9168, 0.9096, 0.9024, 0.8952, 0.888, 0.9745, 0.9613, 0.9481, 0.9349, 0.9217, 0.9085, 0.897, 0.8855, 0.8739, 0.8624, 0.9017, 0.8879, 0.8741, 0.8602, 0.8464, 0.8326, 0.8208, 0.8089, 0.7971, 0.7852, 0.9938, 0.9838, 0.9738, 0.9637, 0.9537, 0.9437, 0.9237, 0.9037, 0.8838, 0.8638, 0.8607, 0.8361, 0.8115, 0.7869, 0.7623, 0.7377, 0.7131, 0.6885, 0.664, 0.6394, 0.6148, 0.5875, 0.5601, 0.5328, 0.5054, 0.4781, 0.447, 0.416, 0.3849, 0.3539, 0.3228], "isRoad": 0, "dist(km)": 0, "OC": 12.91 }, "LongHur": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8692, 0.9083, 0.9375, 0.9588, 0.9742, 0.985, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9964, 0.9855, 0.975, 0.9647, 0.9545, 0.9447, 0.9349, 0.9254, 0.9162, 0.9069, 0.8981, 0.8892, 0.8806, 0.8723, 0.8639, 0.8558, 0.8478, 0.84, 0.8052, 0.8032, 0.8014, 0.7995, 0.7976, 0.7958, 0.794, 0.7828, 0.7719, 0.7614, 1.1056, 1.0979, 1.0899, 1.0824, 1.0627, 1.0435, 1.0252, 1.0075, 0.9903, 0.9738, 0.9945, 0.9724, 0.9512, 0.9309, 0.9115, 0.8931, 0.8752, 0.858, 0.8415, 0.8256, 0.8103, 0.7958, 0.7818, 0.7683, 0.7551, 0.7425, 0.7045, 0.6702, 0.6391, 0.6107, 0.5847, 0.5439, 0.5085, 0.4773, 0.4499, 0.4253, 0.3692, 0.3262, 0.2921, 0.2645, 0.2417], "isRoad": 0, "dist(km)": 0, "OC": 46.78 }, "Steeple": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.3336, 1.3842, 1.4235, 1.4444, 0.9818, 0.9929, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9999, 0.9897, 0.9798, 0.97, 0.9605, 0.9511, 0.9419, 0.9329, 0.9241, 0.9154, 0.9069, 0.8986, 0.8904, 0.8823, 0.8744, 0.8666, 0.859, 0.8515, 0.8442, 0.8369, 0.8298, 0.8228, 0.8159, 0.8092, 0.8025, 0.7959, 0.7895, 0.7832, 0.7769, 1.2139, 1.1862, 1.1599, 1.1346, 1.1106, 1.0875, 1.0653, 1.044, 1.0236, 1.0039, 0.985, 0.9668, 0.9493, 0.9323, 0.916, 0.9002, 0.885, 0.8702, 0.856, 0.8422, 0.8288, 0.8066, 0.7856, 0.7657, 0.7467, 0.7287, 0.7007, 0.6747, 0.6506, 0.6281, 0.6072, 0.5748, 0.5456, 0.5193, 0.4954, 0.4736, 0.4504, 0.4293, 0.4101, 0.3926, 0.3765], "isRoad": 0, "dist(km)": 0, "OC": 473.63 }, "1500mWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9968, 0.9945, 0.9915, 0.9879, 0.9837, 0.9788, 0.9734, 0.9673, 0.9605, 0.9532, 0.9458, 0.9384, 0.931, 0.9235, 0.9161, 0.9087, 0.9013, 0.8939, 0.8865, 0.879, 0.8716, 0.8642, 0.8568, 0.8494, 0.842, 0.8345, 0.8269, 0.8193, 0.8116, 0.8039, 0.796, 0.7881, 0.7801, 0.772, 0.7639, 0.7557, 0.7474, 0.739, 0.7306, 0.722, 0.7134, 0.7048, 0.696, 0.6872, 0.6783, 0.6693, 0.6603, 0.6512, 0.642, 0.6327, 0.6234, 0.6139, 0.6044, 0.5949, 0.5852, 0.5755, 0.5657, 0.5558, 0.5459, 0.5358, 0.5257, 0.5156, 0.5053, 0.495, 0.4846, 0.4741, 0.4636, 0.4529, 0.4422, 0.4315, 0.4206], "isRoad": 0, "dist(km)": 0, "OC": 309 }, "1MileWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9985, 0.9968, 0.9945, 0.9916, 0.988, 0.9838, 0.9789, 0.9735, 0.9674, 0.9606, 0.9533, 0.9459, 0.9385, 0.9311, 0.9237, 0.9162, 0.9088, 0.9014, 0.894, 0.8866, 0.8792, 0.8718, 0.8643, 0.8569, 0.8495, 0.8421, 0.8346, 0.8271, 0.8195, 0.8118, 0.804, 0.7962, 0.7882, 0.7802, 0.7722, 0.764, 0.7558, 0.7475, 0.7391, 0.7307, 0.7222, 0.7136, 0.7049, 0.6961, 0.6873, 0.6784, 0.6694, 0.6604, 0.6512, 0.642, 0.6327, 0.6234, 0.6139, 0.6044, 0.5948, 0.5852, 0.5755, 0.5656, 0.5558, 0.5458, 0.5357, 0.5256, 0.5154, 0.5052, 0.4948, 0.4844, 0.4739, 0.4634, 0.4527, 0.442, 0.4312, 0.4203], "isRoad": 0, "dist(km)": 0, "OC": 332.37 }, "3kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9987, 0.9972, 0.995, 0.9922, 0.9887, 0.9846, 0.9799, 0.9746, 0.9686, 0.9621, 0.9549, 0.9475, 0.9401, 0.9327, 0.9253, 0.9179, 0.9105, 0.9031, 0.8957, 0.8883, 0.8809, 0.8735, 0.8661, 0.8587, 0.8513, 0.8439, 0.8364, 0.8289, 0.8213, 0.8136, 0.8058, 0.798, 0.7901, 0.782, 0.7739, 0.7658, 0.7575, 0.7492, 0.7407, 0.7322, 0.7236, 0.715, 0.7062, 0.6974, 0.6885, 0.6795, 0.6704, 0.6612, 0.652, 0.6426, 0.6332, 0.6237, 0.6142, 0.6045, 0.5948, 0.585, 0.5751, 0.5651, 0.555, 0.5449, 0.5346, 0.5243, 0.5139, 0.5035, 0.4929, 0.4823, 0.4715, 0.4607, 0.4499, 0.4389, 0.4278, 0.4167], "isRoad": 0, "dist(km)": 0, "OC": 631.42 }, "5kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9991, 0.9977, 0.9956, 0.993, 0.9897, 0.9858, 0.9813, 0.9762, 0.9704, 0.9641, 0.9571, 0.9497, 0.9423, 0.9349, 0.9275, 0.9202, 0.9128, 0.9054, 0.898, 0.8907, 0.8833, 0.8759, 0.8685, 0.8611, 0.8538, 0.8464, 0.839, 0.8315, 0.8239, 0.8162, 0.8085, 0.8006, 0.7927, 0.7846, 0.7765, 0.7683, 0.76, 0.7516, 0.7431, 0.7345, 0.7258, 0.717, 0.7082, 0.6992, 0.6902, 0.6811, 0.6718, 0.6625, 0.6531, 0.6436, 0.634, 0.6244, 0.6146, 0.6047, 0.5948, 0.5847, 0.5746, 0.5644, 0.5541, 0.5437, 0.5332, 0.5226, 0.5119, 0.5011, 0.4903, 0.4793, 0.4683, 0.4571, 0.4459, 0.4346, 0.4232, 0.4117], "isRoad": 0, "dist(km)": 0, "OC": 1077.59 }, "8kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 0.9994, 0.9983, 0.9965, 0.9941, 0.9911, 0.9875, 0.9833, 0.9785, 0.973, 0.9669, 0.9602, 0.953, 0.9456, 0.9383, 0.931, 0.9236, 0.9163, 0.9089, 0.9016, 0.8942, 0.8869, 0.8795, 0.8722, 0.8648, 0.8575, 0.8501, 0.8428, 0.8354, 0.8278, 0.8202, 0.8124, 0.8046, 0.7966, 0.7885, 0.7804, 0.7721, 0.7637, 0.7552, 0.7467, 0.738, 0.7292, 0.7203, 0.7113, 0.7021, 0.6929, 0.6836, 0.6742, 0.6647, 0.655, 0.6453, 0.6354, 0.6255, 0.6154, 0.6053, 0.595, 0.5846, 0.5742, 0.5636, 0.5529, 0.5421, 0.5312, 0.5202, 0.5091, 0.4979, 0.4866, 0.4752, 0.4637, 0.4521, 0.4403, 0.4285, 0.4165, 0.4045], "isRoad": 0, "dist(km)": 0, "OC": 1766 }, "10kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9986, 0.997, 0.9948, 0.992, 0.9886, 0.9846, 0.9799, 0.9746, 0.9688, 0.9623, 0.9552, 0.9479, 0.9405, 0.9332, 0.9259, 0.9186, 0.9112, 0.9039, 0.8966, 0.8893, 0.8819, 0.8746, 0.8673, 0.86, 0.8526, 0.8453, 0.8379, 0.8304, 0.8228, 0.8151, 0.8072, 0.7993, 0.7912, 0.783, 0.7747, 0.7663, 0.7577, 0.7491, 0.7403, 0.7315, 0.7225, 0.7134, 0.7042, 0.6948, 0.6854, 0.6758, 0.6662, 0.6564, 0.6465, 0.6365, 0.6264, 0.6161, 0.6058, 0.5953, 0.5847, 0.574, 0.5632, 0.5523, 0.5413, 0.5301, 0.5189, 0.5075, 0.496, 0.4844, 0.4727, 0.4608, 0.4489, 0.4368, 0.4247, 0.4124, 0.4], "isRoad": 0, "dist(km)": 0, "OC": 2231 }, "15kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 0.9999, 0.9994, 0.9982, 0.9964, 0.994, 0.991, 0.9874, 0.9832, 0.9785, 0.9731, 0.9671, 0.9605, 0.9533, 0.9461, 0.9388, 0.9315, 0.9243, 0.917, 0.9097, 0.9024, 0.8952, 0.8879, 0.8806, 0.8734, 0.8661, 0.8588, 0.8515, 0.8443, 0.8369, 0.8293, 0.8216, 0.8138, 0.8059, 0.7978, 0.7896, 0.7812, 0.7728, 0.7641, 0.7554, 0.7465, 0.7374, 0.7283, 0.7189, 0.7095, 0.6999, 0.6902, 0.6803, 0.6703, 0.6602, 0.6499, 0.6395, 0.629, 0.6183, 0.6075, 0.5966, 0.5855, 0.5742, 0.5629, 0.5514, 0.5398, 0.528, 0.5161, 0.504, 0.4919, 0.4795, 0.4671, 0.4545, 0.4418, 0.4289, 0.4159, 0.4028, 0.3895], "isRoad": 0, "dist(km)": 0, "OC": 3424 }, "20kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9976, 0.9957, 0.9931, 0.99, 0.9862, 0.9819, 0.977, 0.9715, 0.9654, 0.9587, 0.9515, 0.9443, 0.9371, 0.9299, 0.9227, 0.9154, 0.9082, 0.901, 0.8938, 0.8866, 0.8793, 0.8721, 0.8649, 0.8577, 0.8505, 0.8432, 0.8358, 0.8282, 0.8205, 0.8126, 0.8045, 0.7963, 0.7879, 0.7794, 0.7707, 0.7618, 0.7528, 0.7437, 0.7343, 0.7248, 0.7152, 0.7054, 0.6954, 0.6853, 0.675, 0.6645, 0.6539, 0.6432, 0.6322, 0.6211, 0.6099, 0.5985, 0.5869, 0.5752, 0.5633, 0.5513, 0.5391, 0.5267, 0.5142, 0.5015, 0.4887, 0.4757, 0.4625, 0.4492, 0.4357, 0.4221, 0.4083, 0.3943, 0.3802], "isRoad": 0, "dist(km)": 0, "OC": 4641 }, "H.Mar.Walk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9999, 0.9992, 0.9979, 0.996, 0.9935, 0.9905, 0.9868, 0.9826, 0.9778, 0.9724, 0.9664, 0.9598, 0.9527, 0.9455, 0.9383, 0.9311, 0.9239, 0.9167, 0.9095, 0.9023, 0.8951, 0.8879, 0.8807, 0.8734, 0.8662, 0.859, 0.8518, 0.8446, 0.8372, 0.8296, 0.8219, 0.814, 0.806, 0.7978, 0.7894, 0.7809, 0.7722, 0.7633, 0.7542, 0.7451, 0.7357, 0.7262, 0.7165, 0.7066, 0.6966, 0.6864, 0.6761, 0.6655, 0.6549, 0.644, 0.633, 0.6218, 0.6105, 0.599, 0.5873, 0.5755, 0.5635, 0.5514, 0.539, 0.5265, 0.5139, 0.5011, 0.4881, 0.475, 0.4616, 0.4482, 0.4345, 0.4207, 0.4068, 0.3926, 0.3783], "isRoad": 0, "dist(km)": 0, "OC": 4919 }, "25kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9986, 0.997, 0.9949, 0.9922, 0.9889, 0.985, 0.9806, 0.9755, 0.9699, 0.9637, 0.9569, 0.9498, 0.9426, 0.9354, 0.9283, 0.9211, 0.9139, 0.9068, 0.8996, 0.8924, 0.8853, 0.8781, 0.8709, 0.8638, 0.8566, 0.8494, 0.8422, 0.8347, 0.8271, 0.8192, 0.8112, 0.8031, 0.7947, 0.7861, 0.7774, 0.7685, 0.7594, 0.7501, 0.7407, 0.731, 0.7212, 0.7112, 0.701, 0.6906, 0.6801, 0.6693, 0.6584, 0.6473, 0.636, 0.6246, 0.6129, 0.6011, 0.5891, 0.5769, 0.5645, 0.5519, 0.5392, 0.5263, 0.5132, 0.4999, 0.4864, 0.4728, 0.4589, 0.4449, 0.4307, 0.4164, 0.4018, 0.387, 0.3721], "isRoad": 0, "dist(km)": 0, "OC": 5931 }, "30kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9999, 0.9993, 0.9981, 0.9964, 0.9941, 0.9912, 0.9878, 0.9838, 0.9792, 0.974, 0.9683, 0.962, 0.9551, 0.948, 0.9409, 0.9338, 0.9267, 0.9196, 0.9125, 0.9053, 0.8982, 0.8911, 0.884, 0.8769, 0.8698, 0.8627, 0.8556, 0.8484, 0.8411, 0.8336, 0.8259, 0.818, 0.8098, 0.8015, 0.793, 0.7842, 0.7753, 0.7661, 0.7568, 0.7472, 0.7375, 0.7275, 0.7173, 0.7069, 0.6964, 0.6856, 0.6746, 0.6634, 0.652, 0.6404, 0.6286, 0.6165, 0.6043, 0.5919, 0.5792, 0.5664, 0.5534, 0.5401, 0.5267, 0.513, 0.4991, 0.4851, 0.4708, 0.4563, 0.4416, 0.4268, 0.4117, 0.3964, 0.3809, 0.3652], "isRoad": 0, "dist(km)": 0, "OC": 7264 }, "40kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9986, 0.997, 0.995, 0.9923, 0.9892, 0.9854, 0.9812, 0.9763, 0.971, 0.965, 0.9586, 0.9516, 0.9446, 0.9376, 0.9306, 0.9236, 0.9166, 0.9096, 0.9026, 0.8956, 0.8886, 0.8816, 0.8746, 0.8675, 0.8605, 0.8535, 0.8464, 0.839, 0.8313, 0.8234, 0.8152, 0.8068, 0.7981, 0.7892, 0.7801, 0.7706, 0.761, 0.7511, 0.7409, 0.7305, 0.7198, 0.7089, 0.6977, 0.6863, 0.6746, 0.6627, 0.6505, 0.6381, 0.6255, 0.6125, 0.5994, 0.5859, 0.5723, 0.5583, 0.5442, 0.5297, 0.5151, 0.5001, 0.485, 0.4695, 0.4539, 0.4379, 0.4217, 0.4053, 0.3886, 0.3717, 0.3545], "isRoad": 0, "dist(km)": 0, "OC": 10038 }, "Mar.Walk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9976, 0.9956, 0.9932, 0.9902, 0.9866, 0.9826, 0.9779, 0.9727, 0.967, 0.9607, 0.9539, 0.947, 0.94, 0.933, 0.926, 0.919, 0.912, 0.9051, 0.8981, 0.8911, 0.8841, 0.8771, 0.8701, 0.8632, 0.8562, 0.8491, 0.8418, 0.8342, 0.8263, 0.8182, 0.8099, 0.8012, 0.7923, 0.7832, 0.7738, 0.7641, 0.7542, 0.744, 0.7335, 0.7228, 0.7118, 0.7006, 0.6891, 0.6773, 0.6653, 0.653, 0.6405, 0.6277, 0.6146, 0.6013, 0.5877, 0.5739, 0.5598, 0.5454, 0.5308, 0.5159, 0.5008, 0.4854, 0.4697, 0.4538, 0.4376, 0.4212, 0.4045, 0.3875, 0.3703, 0.3528], "isRoad": 0, "dist(km)": 0, "OC": 10655 }, "50kmWalk": { "conversions": [0.6496, 0.6869, 0.722, 0.7549, 0.7856, 0.8141, 0.8404, 0.8645, 0.8864, 0.9061, 0.9236, 0.9389, 0.952, 0.964, 0.976, 0.988, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9976, 0.9958, 0.9934, 0.9904, 0.987, 0.983, 0.9785, 0.9735, 0.9679, 0.9618, 0.9552, 0.9483, 0.9414, 0.9345, 0.9276, 0.9207, 0.9138, 0.9069, 0.9, 0.8931, 0.8862, 0.8793, 0.8724, 0.8655, 0.8586, 0.8516, 0.8443, 0.8367, 0.8288, 0.8206, 0.8122, 0.8034, 0.7943, 0.785, 0.7753, 0.7654, 0.7551, 0.7446, 0.7338, 0.7226, 0.7112, 0.6995, 0.6875, 0.6751, 0.6625, 0.6496, 0.6364, 0.6229, 0.6091, 0.595, 0.5806, 0.566, 0.551, 0.5357, 0.5201, 0.5043, 0.4881, 0.4716, 0.4549, 0.4378, 0.4205, 0.4028, 0.3849, 0.3666, 0.3481], "isRoad": 0, "dist(km)": 0, "OC": 12929 }, "HighJump": { "conversions": [0, 0, 0, 1.956, 1.6554, 1.4671, 1.3316, 1.2377, 1.1666, 1.1182, 1.08, 1.0515, 1.0303, 1.0147, 1.0035, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0079, 1.0169, 1.0261, 1.0354, 1.0449, 1.0546, 1.0645, 1.0745, 1.0848, 1.0952, 1.1059, 1.1168, 1.1278, 1.1391, 1.1506, 1.1624, 1.1744, 1.1867, 1.1992, 1.2119, 1.225, 1.2383, 1.252, 1.2659, 1.2801, 1.2947, 1.3096, 1.3248, 1.3405, 1.3564, 1.3728, 1.3896, 1.4068, 1.4244, 1.4425, 1.461, 1.48, 1.4995, 1.5196, 1.5402, 1.5613, 1.583, 1.6054, 1.6283, 1.652, 1.6763, 1.7014, 1.7272, 1.7539, 1.7813, 1.8097, 1.8389, 1.8691, 1.9003, 1.9326, 1.966, 2.0099, 2.0559, 2.104, 2.1543, 2.2072, 2.2854, 2.3694, 2.4598, 2.5574, 2.663, 2.7968, 2.9447, 3.1091, 3.293, 3.5], "isRoad": 0, "dist(km)": 0, "OC": 2.45 }, "PoleVault": { "conversions": [0, 0, 0, 0, 0, 0, 0, 1.4619, 1.3323, 1.2403, 1.1732, 1.1234, 1.0863, 1.0586, 1.038, 1.0149, 1.0033, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0076, 1.0152, 1.023, 1.031, 1.039, 1.0515, 1.0643, 1.0774, 1.0908, 1.1046, 1.1187, 1.1332, 1.1481, 1.1634, 1.1791, 1.1952, 1.2118, 1.2288, 1.2463, 1.2643, 1.2828, 1.3019, 1.3216, 1.3419, 1.3628, 1.3844, 1.4067, 1.4297, 1.4534, 1.478, 1.5034, 1.5297, 1.5569, 1.5851, 1.6144, 1.6448, 1.6763, 1.7091, 1.7431, 1.7786, 1.8155, 1.854, 1.8942, 1.9362, 1.98, 2.0259, 2.0739, 2.1243, 2.1771, 2.2327, 2.2912, 2.3529, 2.4179, 2.4867, 2.5595, 2.6476, 2.7419, 2.8432, 2.9522, 3.07, 3.2316, 3.4111, 3.6117, 3.8375, 4.0933, 4.3857, 4.7231, 5.1166, 5.5818, 6.14], "isRoad": 0, "dist(km)": 0, "OC": 6.14 }, "LongJump": { "conversions": [0, 0, 0, 2.199, 1.8568, 1.6332, 1.4745, 1.3575, 1.2701, 1.203, 1.1506, 1.1095, 1.0772, 1.0517, 1.0318, 1.0113, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0098, 1.0198, 1.03, 1.0404, 1.051, 1.0625, 1.0743, 1.0863, 1.0986, 1.1112, 1.1241, 1.1373, 1.1507, 1.1646, 1.1787, 1.1932, 1.208, 1.2233, 1.2389, 1.2549, 1.2713, 1.2882, 1.3056, 1.3234, 1.3417, 1.3605, 1.3799, 1.3998, 1.4203, 1.4414, 1.4631, 1.4855, 1.5086, 1.5324, 1.557, 1.5824, 1.6087, 1.6358, 1.6639, 1.6929, 1.7229, 1.7541, 1.7863, 1.8198, 1.8546, 1.8907, 1.9283, 1.9674, 2.0082, 2.0506, 2.1051, 2.1625, 2.2232, 2.2873, 2.3553, 2.467, 2.5897, 2.7253, 2.876, 3.0442, 3.2664, 3.5236, 3.8248, 4.1822, 4.6134, 5.2585, 6.1134, 7.3002, 9.0587, 11.9333], "isRoad": 0, "dist(km)": 0, "OC": 8.95 }, "TripleJump": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 1.2425, 1.1799, 1.1325, 1.0965, 1.0692, 1.0484, 1.0327, 1.0218, 1.0105, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0025, 1.005, 1.0076, 1.0101, 1.0127, 1.024, 1.0357, 1.0475, 1.0597, 1.0721, 1.0848, 1.0979, 1.1112, 1.1249, 1.1389, 1.1533, 1.168, 1.1831, 1.1986, 1.2145, 1.2308, 1.2476, 1.2649, 1.2827, 1.3009, 1.3198, 1.3394, 1.3594, 1.3802, 1.4015, 1.4233, 1.4458, 1.469, 1.493, 1.5178, 1.5434, 1.5699, 1.5974, 1.6258, 1.6552, 1.6857, 1.7174, 1.7502, 1.7844, 1.8199, 1.8569, 1.8953, 1.9355, 1.9773, 2.021, 2.0667, 2.1144, 2.1645, 2.2169, 2.272, 2.3569, 2.4484, 2.5473, 2.6545, 2.7712, 2.9595, 3.1753, 3.4251, 3.7174, 4.0644, 4.6897, 5.5424, 6.774, 8.7095, 12.1933], "isRoad": 0, "dist(km)": 0, "OC": 18.29 }, "Hammer": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.6978, 1.4182, 1.2608, 1.1645, 1.1027, 1.0625, 1.0326, 1.0086, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.015, 1.0304, 1.0464, 1.0628, 1.0798, 1.0992, 1.1194, 1.1403, 1.1621, 1.1846, 1.208, 1.2324, 1.2578, 1.2843, 1.1656, 1.19, 1.2156, 1.2422, 1.2701, 1.2992, 1.3297, 1.3616, 1.3952, 1.4304, 1.4058, 1.4384, 1.4725, 1.5083, 1.5458, 1.5853, 1.6268, 1.6706, 1.7168, 1.7656, 1.6112, 1.6578, 1.7072, 1.7597, 1.8155, 1.8749, 1.9384, 2.0063, 2.0791, 2.1575, 2.2417, 2.333, 2.432, 2.5399, 2.6577, 2.787, 2.9295, 3.0874, 3.2632, 3.4604, 3.6828, 3.9358, 4.2261, 4.5627, 4.9576, 5.4272, 5.9952, 6.6959, 7.5821, 8.7387, 10.3117], "isRoad": 0, "dist(km)": 0, "OC": 86.74 }, "Shotput": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.3528, 1.271, 1.2035, 1.1468, 1.0994, 1.0596, 1.0185, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0053, 1.0107, 1.0161, 1.0216, 1.0271, 1.0432, 1.0599, 1.077, 1.0948, 1.1131, 1.136, 1.1598, 1.1846, 1.2106, 1.1468, 1.1701, 1.1944, 1.2198, 1.2462, 1.2736, 1.3025, 1.3325, 1.364, 1.397, 1.2703, 1.3061, 1.3439, 1.3841, 1.4266, 1.4719, 1.5202, 1.5719, 1.6271, 1.6864, 1.3017, 1.3377, 1.3758, 1.4161, 1.4589, 1.5043, 1.5526, 1.604, 1.659, 1.718, 1.7816, 1.8498, 1.9234, 2.0032, 2.0898, 2.1843, 2.2877, 2.4014, 2.527, 2.6665, 2.8222, 2.9972, 3.1954, 3.4217, 3.6824, 3.9862, 4.3446, 4.7738, 5.2972, 5.9494, 6.7847], "isRoad": 0, "dist(km)": 0, "OC": 23.12 }, "Discus": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.4911, 1.362, 1.2681, 1.1979, 1.1448, 1.1044, 1.0583, 1.0289, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0096, 1.0194, 1.0293, 1.0396, 1.0499, 1.0701, 1.091, 1.1128, 1.1355, 1, 1.0183, 1.0371, 1.0568, 1.0772, 1.0984, 1.126, 1.1549, 1.1854, 1.2176, 1.1232, 1.1467, 1.1712, 1.1968, 1.2235, 1.2514, 1.2806, 1.3112, 1.3432, 1.377, 1.4127, 1.45, 1.4893, 1.5309, 1.5748, 1.6217, 1.6711, 1.7236, 1.7795, 1.8391, 1.9033, 1.9718, 2.0454, 2.1247, 2.2105, 2.3034, 2.4045, 2.5148, 2.6357, 2.7689, 2.9162, 3.0801, 3.2636, 3.4702, 3.7049, 3.9735, 4.2841, 4.6474, 5.0781, 5.5967, 6.2333], "isRoad": 0, "dist(km)": 0, "OC": 74.08 }, "Javelin": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.4743, 1.3339, 1.2316, 1.1555, 1.0982, 1.0548, 1.0258, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0084, 1.0169, 1.0256, 1.0344, 1.0434, 1.0594, 1.0758, 1.0928, 1.1102, 1.1283, 1.147, 1.1663, 1.1862, 1.2069, 1.2283, 1.2505, 1.2735, 1.2973, 1.322, 1.279, 1.3025, 1.3269, 1.3522, 1.3785, 1.4059, 1.4344, 1.464, 1.4949, 1.5271, 1.4804, 1.5114, 1.5437, 1.5775, 1.6128, 1.6496, 1.6881, 1.7286, 1.771, 1.8155, 1.7461, 1.7932, 1.8428, 1.8953, 1.9509, 2.0098, 2.0724, 2.139, 2.2101, 2.286, 2.0612, 2.1526, 2.2524, 2.362, 2.4827, 2.6164, 2.7654, 2.9324, 3.1208, 3.3352, 3.5811, 3.8662, 4.2006, 4.5983, 5.0792, 5.6724, 6.4226, 7.4014, 8.7322, 10.6465, 13.6357], "isRoad": 0, "dist(km)": 0, "OC": 98.48 }, "Weight": { "conversions": [0, 0, 0, 0, 0, 0, 0, 0, "", 1.3107, 1.2181, 1.1534, 1.1075, 1.0744, 1.0508, 1.0262, 1.0102, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0049, 1.0099, 1.015, 1.0201, 1.0252, 1.0383, 1.0518, 1.0656, 1.0797, 1.0943, 1.1093, 1.1246, 1.1404, 1.1567, 1.1734, 1.1906, 1.2082, 1.2264, 1.2452, 1.1123, 1.1306, 1.1496, 1.1692, 1.1895, 1.2105, 1.2324, 1.255, 1.2785, 1.3029, 1.1392, 1.1617, 1.1852, 1.2096, 1.235, 1.2615, 1.2892, 1.3181, 1.3483, 1.3799, 1.2943, 1.3266, 1.3605, 1.3962, 1.4338, 1.4735, 1.5155, 1.5599, 1.607, 1.6571, 1.573, 1.6238, 1.678, 1.736, 1.7981, 1.8648, 1.9366, 2.0143, 2.0983, 2.1898, 2.2895, 2.3988, 2.519, 2.6519, 2.7996, 2.9647, 3.1505, 3.3612, 3.6022, 3.8803, 4.2049], "isRoad": 0, "dist(km)": 0, "OC": 25.86 }, "50m": { "conversions": [0.5197, 0.6346, 0.7066, 0.7579, 0.796, 0.8269, 0.8523, 0.8738, 0.8921, 0.9067, 0.9218, 0.9327, 0.9438, 0.9552, 0.9635, 0.9719, 0.9805, 0.9875, 0.9964, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9982, 0.9893, 0.9823, 0.9736, 0.9668, 0.9585, 0.9519, 0.9454, 0.9374, 0.9311, 0.9233, 0.9172, 0.9097, 0.9038, 0.8979, 0.8907, 0.885, 0.878, 0.8724, 0.867, 0.8602, 0.8549, 0.8484, 0.8432, 0.8381, 0.8318, 0.8256, 0.8207, 0.8159, 0.8099, 0.8052, 0.7994, 0.7948, 0.7903, 0.7847, 0.7803, 0.7748, 0.7694, 0.7641, 0.7589, 0.7527, 0.7476, 0.7397, 0.7328, 0.7251, 0.7176, 0.7103, 0.7013, 0.6925, 0.6831, 0.6748, 0.6659, 0.6464, 0.6274, 0.6088, 0.5894, 0.5705, 0.5405, 0.5106, 0.4805, 0.4504, 0.4203, 0.3847, 0.3489, 0.3132, 0.2774, 0.2417], "isRoad": 0, "dist(km)": 0.05, "OC": 5.54 }, "55m": { "conversions": [0.5255, 0.6399, 0.7124, 0.7634, 0.8024, 0.8338, 0.859, 0.8805, 0.8991, 0.9142, 0.9285, 0.9402, 0.9522, 0.9614, 0.9707, 0.9787, 0.9868, 0.9933, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9983, 0.99, 0.9819, 0.9739, 0.966, 0.9598, 0.9522, 0.9446, 0.9372, 0.9314, 0.9241, 0.9171, 0.9101, 0.9045, 0.8977, 0.891, 0.8844, 0.8792, 0.8728, 0.8665, 0.8602, 0.8541, 0.8492, 0.8432, 0.8373, 0.8315, 0.8257, 0.8212, 0.8156, 0.81, 0.8046, 0.8003, 0.7949, 0.7897, 0.7845, 0.7804, 0.7753, 0.7693, 0.7644, 0.7586, 0.7528, 0.7472, 0.7398, 0.7325, 0.7254, 0.7175, 0.7099, 0.7007, 0.6926, 0.6831, 0.6746, 0.6656, 0.6468, 0.6278, 0.6086, 0.5893, 0.5707, 0.5403, 0.5107, 0.4803, 0.4506, 0.4204, 0.3847, 0.3489, 0.3132, 0.2774, 0.2417], "isRoad": 0, "dist(km)": 0.055, "OC": 5.97 }, "60m": { "conversions": [0.5294, 0.6442, 0.7164, 0.768, 0.8068, 0.8386, 0.8635, 0.885, 0.9038, 0.9194, 0.9328, 0.9453, 0.9552, 0.9653, 0.9741, 0.9816, 0.9892, 0.9953, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9976, 0.9893, 0.9818, 0.9743, 0.9667, 0.9592, 0.9517, 0.9447, 0.9378, 0.9308, 0.9239, 0.9169, 0.9104, 0.904, 0.8975, 0.8911, 0.8846, 0.8786, 0.8725, 0.8665, 0.8604, 0.8544, 0.8488, 0.8431, 0.8375, 0.8318, 0.8262, 0.8209, 0.8156, 0.8104, 0.8051, 0.7998, 0.7949, 0.7899, 0.785, 0.78, 0.7751, 0.7696, 0.764, 0.7585, 0.7529, 0.7474, 0.7399, 0.7324, 0.725, 0.7175, 0.71, 0.7011, 0.6922, 0.6834, 0.6745, 0.6656, 0.6466, 0.6276, 0.6085, 0.5895, 0.5705, 0.5405, 0.5105, 0.4804, 0.4504, 0.4204, 0.3847, 0.3489, 0.3132, 0.2774, 0.2417], "isRoad": 0, "dist(km)": 0.06, "OC": 6.39 }, "100m": { "conversions": [0.5344, 0.6441, 0.7156, 0.7678, 0.8078, 0.8403, 0.8671, 0.89, 0.909, 0.9253, 0.9395, 0.9523, 0.9636, 0.9732, 0.9819, 0.9899, 0.9959, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9968, 0.9893, 0.9823, 0.9754, 0.9684, 0.9615, 0.9545, 0.948, 0.9415, 0.935, 0.9285, 0.922, 0.9159, 0.9099, 0.9038, 0.8978, 0.8917, 0.886, 0.8803, 0.8747, 0.869, 0.8633, 0.858, 0.8527, 0.8473, 0.842, 0.8367, 0.8317, 0.8267, 0.8217, 0.8167, 0.8117, 0.807, 0.8023, 0.7975, 0.7928, 0.7881, 0.7788, 0.7695, 0.7603, 0.751, 0.7417, 0.7312, 0.7208, 0.7103, 0.6999, 0.6894, 0.6778, 0.6663, 0.6547, 0.6432, 0.6316, 0.6205, 0.6093, 0.5982, 0.587, 0.5759, 0.5592, 0.5425, 0.5259, 0.5092, 0.4925, 0.4423, 0.3922, 0.342, 0.2919, 0.2417], "isRoad": 0, "dist(km)": 0.1, "OC": 9.79 }, "200m": { "conversions": [0.5169, 0.6129, 0.6812, 0.734, 0.7765, 0.8121, 0.8426, 0.8687, 0.892, 0.9126, 0.9311, 0.9475, 0.9626, 0.9763, 0.9892, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9959, 0.9879, 0.98, 0.972, 0.9641, 0.9568, 0.9494, 0.9421, 0.9347, 0.9274, 0.9206, 0.9138, 0.9071, 0.9003, 0.8935, 0.8872, 0.8809, 0.8745, 0.8682, 0.8619, 0.856, 0.8501, 0.8443, 0.8384, 0.8325, 0.827, 0.8215, 0.816, 0.8105, 0.805, 0.7999, 0.7947, 0.7896, 0.7844, 0.7793, 0.7732, 0.7671, 0.761, 0.7549, 0.7488, 0.7375, 0.7263, 0.715, 0.7038, 0.6925, 0.6811, 0.6697, 0.6583, 0.6469, 0.6355, 0.622, 0.6086, 0.5951, 0.5817, 0.5682, 0.5488, 0.5294, 0.51, 0.4906, 0.4712, 0.4527, 0.4342, 0.4158, 0.3973, 0.3788, 0.3514, 0.324, 0.2965, 0.2691, 0.2417], "isRoad": 0, "dist(km)": 0.2, "OC": 19.32 }, "300m": { "conversions": [0.525, 0.6137, 0.6795, 0.7315, 0.7746, 0.8108, 0.842, 0.8691, 0.8931, 0.9141, 0.9328, 0.9494, 0.964, 0.9772, 0.9891, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9983, 0.9904, 0.9826, 0.975, 0.9671, 0.96, 0.9527, 0.9455, 0.9384, 0.9311, 0.9245, 0.918, 0.9113, 0.9047, 0.8979, 0.8918, 0.8855, 0.8792, 0.8731, 0.8668, 0.8611, 0.8552, 0.8496, 0.8436, 0.838, 0.8324, 0.8271, 0.8217, 0.8161, 0.8108, 0.8058, 0.8006, 0.7955, 0.7905, 0.7855, 0.7766, 0.7675, 0.7583, 0.7494, 0.7404, 0.728, 0.7156, 0.7032, 0.6908, 0.6784, 0.6671, 0.6557, 0.6445, 0.6332, 0.6219, 0.607, 0.5921, 0.5771, 0.5623, 0.5474, 0.5287, 0.5099, 0.4912, 0.4725, 0.4537, 0.4327, 0.4117, 0.3907, 0.3697, 0.3487, 0.3273, 0.3059, 0.2845, 0.2631, 0.2417], "isRoad": 0, "dist(km)": 0.3, "OC": 30 }, "400m": { "conversions": [0.5331, 0.6146, 0.6777, 0.7291, 0.7725, 0.8095, 0.8416, 0.8695, 0.894, 0.9156, 0.9344, 0.9511, 0.9656, 0.9783, 0.989, 0.9984, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9929, 0.9854, 0.9778, 0.9702, 0.9632, 0.9561, 0.9491, 0.942, 0.935, 0.9285, 0.9219, 0.9154, 0.9088, 0.9023, 0.8962, 0.8901, 0.884, 0.8779, 0.8718, 0.8661, 0.8604, 0.8547, 0.849, 0.8433, 0.838, 0.8326, 0.8273, 0.8219, 0.8166, 0.8116, 0.8066, 0.8016, 0.7966, 0.7916, 0.7797, 0.7677, 0.7558, 0.7438, 0.7319, 0.7184, 0.7049, 0.6913, 0.6778, 0.6643, 0.6531, 0.6419, 0.6306, 0.6194, 0.6082, 0.5919, 0.5756, 0.5592, 0.5429, 0.5266, 0.5085, 0.4904, 0.4724, 0.4543, 0.4362, 0.4127, 0.3891, 0.3656, 0.342, 0.3185, 0.3031, 0.2878, 0.2724, 0.2571, 0.2417], "isRoad": 0, "dist(km)": 0.4, "OC": 43.18 }, "500m": { "conversions": [0.5387, 0.6159, 0.6769, 0.7272, 0.7701, 0.807, 0.8392, 0.8673, 0.8922, 0.9139, 0.933, 0.9498, 0.9644, 0.977, 0.9877, 0.9969, 0.9998, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9935, 0.9851, 0.977, 0.9694, 0.9616, 0.9542, 0.9465, 0.9389, 0.932, 0.9248, 0.9179, 0.9108, 0.9038, 0.8972, 0.8906, 0.8842, 0.8778, 0.8713, 0.8651, 0.8591, 0.853, 0.8469, 0.8409, 0.8353, 0.8296, 0.8239, 0.8183, 0.8127, 0.8074, 0.8021, 0.7968, 0.7916, 0.7863, 0.7754, 0.7644, 0.7534, 0.7424, 0.7314, 0.7186, 0.7057, 0.6928, 0.6799, 0.6671, 0.6559, 0.6448, 0.6335, 0.6224, 0.6112, 0.5949, 0.5785, 0.5621, 0.5458, 0.5294, 0.5104, 0.4913, 0.4724, 0.4533, 0.4343, 0.4111, 0.3879, 0.3648, 0.3416, 0.3185, 0.3031, 0.2878, 0.2724, 0.2571, 0.2417], "isRoad": 0, "dist(km)": 0.5, "OC": 57.66 }, "600m": { "conversions": [0.5443, 0.6173, 0.676, 0.7253, 0.7677, 0.8045, 0.8368, 0.8652, 0.8902, 0.9123, 0.9314, 0.9485, 0.9632, 0.9758, 0.9865, 0.9954, 0.9999, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9926, 0.9836, 0.9755, 0.9673, 0.9591, 0.9508, 0.9428, 0.9353, 0.9277, 0.9203, 0.9127, 0.9052, 0.8983, 0.8914, 0.8844, 0.8775, 0.8706, 0.8642, 0.8577, 0.8513, 0.8449, 0.8385, 0.8325, 0.8266, 0.8206, 0.8147, 0.8087, 0.8032, 0.7977, 0.7921, 0.7866, 0.7811, 0.7711, 0.761, 0.751, 0.741, 0.731, 0.7188, 0.7066, 0.6943, 0.6821, 0.6699, 0.6588, 0.6477, 0.6365, 0.6254, 0.6143, 0.5979, 0.5815, 0.565, 0.5486, 0.5322, 0.5122, 0.4922, 0.4723, 0.4523, 0.4323, 0.4096, 0.3868, 0.364, 0.3412, 0.3185, 0.3031, 0.2878, 0.2724, 0.2571, 0.2417], "isRoad": 0, "dist(km)": 0.6, "OC": 72.15 }, "800m": { "conversions": [0.5555, 0.6199, 0.6743, 0.7214, 0.7628, 0.7995, 0.832, 0.8608, 0.8864, 0.9089, 0.9286, 0.9458, 0.9607, 0.9732, 0.9838, 0.9925, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9971, 0.9878, 0.9785, 0.9691, 0.9598, 0.9505, 0.942, 0.9335, 0.9251, 0.9166, 0.9081, 0.9003, 0.8926, 0.8848, 0.8771, 0.8693, 0.8622, 0.855, 0.8479, 0.8407, 0.8336, 0.827, 0.8205, 0.8139, 0.8074, 0.8008, 0.7947, 0.7887, 0.7826, 0.7766, 0.7705, 0.7624, 0.7543, 0.7462, 0.7381, 0.73, 0.7191, 0.7082, 0.6972, 0.6863, 0.6754, 0.6644, 0.6534, 0.6423, 0.6313, 0.6203, 0.6038, 0.5873, 0.5708, 0.5543, 0.5378, 0.5159, 0.494, 0.4722, 0.4503, 0.4284, 0.4064, 0.3844, 0.3624, 0.3404, 0.3184, 0.3031, 0.2877, 0.2724, 0.257, 0.2417], "isRoad": 0, "dist(km)": 0.8, "OC": 101.11 }, "1000m": { "conversions": [0.5623, 0.6216, 0.6733, 0.719, 0.7598, 0.7964, 0.8293, 0.8586, 0.8847, 0.9079, 0.9282, 0.9459, 0.961, 0.9739, 0.9846, 0.9934, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9925, 0.983, 0.9735, 0.964, 0.9545, 0.945, 0.9364, 0.9278, 0.9191, 0.9105, 0.9019, 0.894, 0.8861, 0.8783, 0.8704, 0.8625, 0.8553, 0.8481, 0.8408, 0.8336, 0.8264, 0.8198, 0.8131, 0.8065, 0.7998, 0.7932, 0.7871, 0.781, 0.7748, 0.7687, 0.7626, 0.7554, 0.7483, 0.7411, 0.734, 0.7268, 0.7159, 0.705, 0.6941, 0.6832, 0.6723, 0.6622, 0.6521, 0.642, 0.6319, 0.6218, 0.606, 0.5901, 0.5743, 0.5584, 0.5426, 0.521, 0.4993, 0.4777, 0.456, 0.4344, 0.4112, 0.3879, 0.3647, 0.3414, 0.3182, 0.3029, 0.2876, 0.2723, 0.257, 0.2417], "isRoad": 0, "dist(km)": 1, "OC": 130.5 }, "1500m": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 1.5, "OC": 205.8 }, "1Mile": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9962, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 1.609344, "OC": 222.6 }, "2km": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.999, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 2, "OC": 283.2 }, "3km": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9962, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 3, "OC": 440 }, "2Mile": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 3.218688, "OC": 474.6 }, "4km": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 4, "OC": 598 }, "3Mile": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 4.828032, "OC": 730 }, "5kmRoad": { "conversions": [0.6062, 0.6602, 0.7102, 0.7562, 0.7982, 0.8362, 0.8702, 0.9002, 0.9262, 0.9482, 0.9662, 0.9802, 0.9922, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9987, 0.997, 0.9947, 0.9918, 0.9882, 0.9839, 0.979, 0.9734, 0.9672, 0.9605, 0.9538, 0.9471, 0.9404, 0.9337, 0.927, 0.9203, 0.9136, 0.9069, 0.9002, 0.8935, 0.8868, 0.8801, 0.8734, 0.8667, 0.86, 0.8533, 0.8466, 0.8399, 0.8332, 0.8265, 0.8198, 0.8131, 0.8064, 0.7997, 0.793, 0.7863, 0.7796, 0.7729, 0.7662, 0.7592, 0.7515, 0.7433, 0.7344, 0.7249, 0.7147, 0.704, 0.6926, 0.6806, 0.668, 0.6547, 0.6408, 0.6263, 0.6112, 0.5955, 0.5791, 0.5621, 0.5445, 0.5262, 0.5074, 0.4879, 0.4678, 0.447, 0.4257, 0.4037, 0.3811, 0.3578, 0.334, 0.3095, 0.2844, 0.2586, 0.2323, 0.2053], "isRoad": 1, "dist(km)": 5, "OC": 779 }, "5km": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 5, "OC": 757 }, "6kmRoad": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9995, 0.9983, 0.9965, 0.994, 0.9908, 0.987, 0.9824, 0.9773, 0.9714, 0.9649, 0.958, 0.9511, 0.9442, 0.9373, 0.9304, 0.9235, 0.9166, 0.9096, 0.9027, 0.8958, 0.8889, 0.882, 0.8751, 0.8682, 0.8613, 0.8544, 0.8475, 0.8406, 0.8337, 0.8268, 0.8199, 0.813, 0.8061, 0.7992, 0.7923, 0.7854, 0.7785, 0.7715, 0.7646, 0.7577, 0.7501, 0.7419, 0.7331, 0.7237, 0.7136, 0.7028, 0.6915, 0.6795, 0.6668, 0.6535, 0.6396, 0.625, 0.6098, 0.594, 0.5775, 0.5604, 0.5427, 0.5243, 0.5052, 0.4856, 0.4653, 0.4443, 0.4228, 0.4005, 0.3777, 0.3542, 0.3301, 0.3053, 0.2799, 0.2538, 0.2272, 0.1998], "isRoad": 1, "dist(km)": 6, "OC": 942 }, "6km": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 6, "OC": 919 }, "4MileRoad": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9987, 0.9971, 0.9948, 0.9918, 0.9881, 0.9837, 0.9787, 0.973, 0.9666, 0.9597, 0.9527, 0.9457, 0.9387, 0.9318, 0.9248, 0.9178, 0.9108, 0.9038, 0.8968, 0.8899, 0.8829, 0.8759, 0.8689, 0.8619, 0.8549, 0.8479, 0.841, 0.834, 0.827, 0.82, 0.813, 0.806, 0.7991, 0.7921, 0.7851, 0.7781, 0.7711, 0.7641, 0.7571, 0.7495, 0.7412, 0.7323, 0.7228, 0.7126, 0.7018, 0.6903, 0.6782, 0.6655, 0.6521, 0.6381, 0.6235, 0.6082, 0.5923, 0.5758, 0.5586, 0.5407, 0.5223, 0.5032, 0.4834, 0.463, 0.442, 0.4204, 0.3981, 0.3751, 0.3516, 0.3273, 0.3025, 0.277, 0.2509, 0.2241, 0.1967], "isRoad": 1, "dist(km)": 6.437376, "OC": 1014 }, "4Mile": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 6.437376, "OC": 990 }, "8kmRoad": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9986, 0.9968, 0.9944, 0.9913, 0.9874, 0.9829, 0.9777, 0.9719, 0.9653, 0.9581, 0.9509, 0.9436, 0.9364, 0.9292, 0.922, 0.9147, 0.9075, 0.9003, 0.893, 0.8858, 0.8786, 0.8714, 0.8641, 0.8569, 0.8497, 0.8424, 0.8352, 0.828, 0.8208, 0.8135, 0.8063, 0.7991, 0.7918, 0.7846, 0.7774, 0.7702, 0.7629, 0.7557, 0.7482, 0.7401, 0.7314, 0.722, 0.7119, 0.7012, 0.6899, 0.6779, 0.6653, 0.652, 0.638, 0.6235, 0.6082, 0.5923, 0.5758, 0.5586, 0.5408, 0.5223, 0.5032, 0.4835, 0.463, 0.442, 0.4203, 0.3979, 0.3749, 0.3512, 0.3269, 0.302, 0.2764, 0.2501, 0.2232, 0.1957], "isRoad": 1, "dist(km)": 8, "OC": 1272 }, "8km": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 8, "OC": 1247 }, "5MileRoad": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9986, 0.9969, 0.9944, 0.9913, 0.9875, 0.983, 0.9778, 0.972, 0.9654, 0.9582, 0.951, 0.9438, 0.9365, 0.9293, 0.9221, 0.9148, 0.9076, 0.9004, 0.8931, 0.8859, 0.8787, 0.8714, 0.8642, 0.8569, 0.8497, 0.8425, 0.8352, 0.828, 0.8208, 0.8135, 0.8063, 0.7991, 0.7918, 0.7846, 0.7774, 0.7701, 0.7629, 0.7557, 0.7482, 0.7401, 0.7314, 0.722, 0.7119, 0.7012, 0.6899, 0.6779, 0.6653, 0.652, 0.638, 0.6235, 0.6082, 0.5924, 0.5758, 0.5587, 0.5409, 0.5224, 0.5033, 0.4835, 0.4631, 0.442, 0.4203, 0.398, 0.375, 0.3513, 0.327, 0.3021, 0.2765, 0.2502, 0.2234, 0.1958], "isRoad": 1, "dist(km)": 8.04672, "OC": 1279 }, "5Mile": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 8.04672, "OC": 1255 }, "10kmRoad": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9984, 0.9966, 0.9941, 0.9908, 0.9869, 0.9822, 0.9769, 0.9708, 0.964, 0.9566, 0.9491, 0.9417, 0.9342, 0.9267, 0.9192, 0.9117, 0.9043, 0.8968, 0.8893, 0.8818, 0.8743, 0.8669, 0.8594, 0.8519, 0.8444, 0.8369, 0.8295, 0.822, 0.8145, 0.807, 0.7995, 0.7921, 0.7846, 0.7771, 0.7696, 0.7621, 0.7547, 0.7471, 0.7391, 0.7305, 0.7211, 0.7112, 0.7005, 0.6892, 0.6772, 0.6646, 0.6513, 0.6374, 0.6228, 0.6075, 0.5916, 0.575, 0.5577, 0.5398, 0.5213, 0.502, 0.4821, 0.4616, 0.4404, 0.4185, 0.396, 0.3728, 0.3489, 0.3244, 0.2993, 0.2734, 0.247, 0.2198, 0.192], "isRoad": 1, "dist(km)": 10, "OC": 1603 }, "10km": { "conversions": [0.6526, 0.6899, 0.725, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.955, 0.967, 0.979, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.984, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.938, 0.931, 0.924, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.762, 0.755, 0.7479, 0.7402, 0.7319, 0.723, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.566, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868], "isRoad": 0, "dist(km)": 10, "OC": 1580 }, "12km": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9838, 0.9786, 0.9727, 0.9662, 0.9589, 0.9513, 0.9438, 0.9362, 0.9287, 0.9211, 0.9136, 0.906, 0.8984, 0.8909, 0.8833, 0.8758, 0.8682, 0.8607, 0.8531, 0.8456, 0.838, 0.8305, 0.8229, 0.8154, 0.8078, 0.8003, 0.7927, 0.7852, 0.7776, 0.77, 0.7625, 0.7549, 0.7474, 0.7395, 0.731, 0.7218, 0.7119, 0.7013, 0.6901, 0.6782, 0.6656, 0.6524, 0.6385, 0.6239, 0.6087, 0.5928, 0.5762, 0.5589, 0.541, 0.5224, 0.5031, 0.4832, 0.4626, 0.4413, 0.4194, 0.3968, 0.3735, 0.3495, 0.3249, 0.2996, 0.2736, 0.247, 0.2197, 0.1917], "isRoad": 1, "dist(km)": 12, "OC": 1942 }, "15km": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9994, 0.998, 0.996, 0.9932, 0.9898, 0.9856, 0.9807, 0.975, 0.9687, 0.9616, 0.954, 0.9464, 0.9387, 0.9311, 0.9235, 0.9158, 0.9082, 0.9005, 0.8929, 0.8852, 0.8776, 0.87, 0.8623, 0.8547, 0.847, 0.8394, 0.8317, 0.8241, 0.8165, 0.8088, 0.8012, 0.7935, 0.7859, 0.7782, 0.7706, 0.763, 0.7553, 0.7477, 0.7399, 0.7315, 0.7224, 0.7127, 0.7022, 0.6911, 0.6793, 0.6668, 0.6537, 0.6398, 0.6253, 0.6101, 0.5942, 0.5776, 0.5603, 0.5424, 0.5238, 0.5045, 0.4845, 0.4638, 0.4425, 0.4204, 0.3977, 0.3743, 0.3502, 0.3255, 0.3, 0.2739, 0.2471, 0.2196, 0.1914], "isRoad": 1, "dist(km)": 15, "OC": 2455 }, "10Mile": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9995, 0.9982, 0.9963, 0.9936, 0.9902, 0.9861, 0.9813, 0.9758, 0.9695, 0.9625, 0.9549, 0.9472, 0.9396, 0.9319, 0.9242, 0.9166, 0.9089, 0.9012, 0.8935, 0.8859, 0.8782, 0.8705, 0.8629, 0.8552, 0.8475, 0.8399, 0.8322, 0.8245, 0.8168, 0.8092, 0.8015, 0.7938, 0.7862, 0.7785, 0.7708, 0.7631, 0.7555, 0.7478, 0.7401, 0.7317, 0.7227, 0.713, 0.7026, 0.6915, 0.6797, 0.6673, 0.6542, 0.6403, 0.6258, 0.6106, 0.5947, 0.5782, 0.5609, 0.543, 0.5244, 0.505, 0.485, 0.4644, 0.443, 0.4209, 0.3982, 0.3748, 0.3506, 0.3258, 0.3004, 0.2742, 0.2473, 0.2198, 0.1916], "isRoad": 1, "dist(km)": 16.09344, "OC": 2640 }, "20km": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9988, 0.9972, 0.9948, 0.9916, 0.9878, 0.9832, 0.9779, 0.9719, 0.9651, 0.9577, 0.9499, 0.9422, 0.9344, 0.9266, 0.9189, 0.9111, 0.9034, 0.8956, 0.8878, 0.8801, 0.8723, 0.8646, 0.8568, 0.849, 0.8413, 0.8335, 0.8258, 0.818, 0.8103, 0.8025, 0.7947, 0.787, 0.7792, 0.7715, 0.7637, 0.7559, 0.7482, 0.7404, 0.7322, 0.7234, 0.7138, 0.7035, 0.6926, 0.6809, 0.6686, 0.6555, 0.6418, 0.6273, 0.6122, 0.5963, 0.5798, 0.5625, 0.5446, 0.5259, 0.5066, 0.4866, 0.4658, 0.4444, 0.4223, 0.3994, 0.3759, 0.3517, 0.3267, 0.3011, 0.2748, 0.2478, 0.2201, 0.1917], "isRoad": 1, "dist(km)": 20, "OC": 3315 }, "Half.Mar": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 21.0975, "OC": 3503 }, "25km": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 25, "OC": 4205 }, "30km": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 30, "OC": 5110 }, "Marathon": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 42.195, "OC": 7377 }, "50km": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 50, "OC": 8970 }, "50Mile": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 80.4672, "OC": 16080 }, "100km": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 100, "OC": 21360 }, "150km": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 150, "OC": 36300 }, "100Mile": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 160.9344, "OC": 39850 }, "200km": { "conversions": [0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921], "isRoad": 1, "dist(km)": 200, "OC": 52800 } } };
                    return RunningAgeGrade;
                }());
            })(grading = running.grading || (running.grading = {}));
        })(running = sport.running || (sport.running = {}));
    })(sport = Fit.sport || (Fit.sport = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var sport;
    (function (sport) {
        var running;
        (function (running) {
            var jackDaniels;
            (function (jackDaniels) {
                function velocity(vO2) {
                    return 29.54 + 5.000663 * vO2 - 0.007546 * Math.pow(vO2, 2);
                }
                jackDaniels.velocity = velocity;
                function vO2(velocity) {
                    return -4.60 + 0.182258 * velocity + 0.000104 * Math.pow(velocity, 2);
                }
                jackDaniels.vO2 = vO2;
                function vO2Percentage(time) {
                    return 0.8 + Math.pow(0.1894393, -0.012778 * time) + Math.exp(-0.1932605 * time);
                }
                jackDaniels.vO2Percentage = vO2Percentage;
            })(jackDaniels = running.jackDaniels || (running.jackDaniels = {}));
        })(running = sport.running || (sport.running = {}));
    })(sport = Fit.sport || (Fit.sport = {}));
})(Fit || (Fit = {}));
//# sourceMappingURL=fitness.js.map