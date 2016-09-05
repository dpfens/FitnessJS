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
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var mets;
    (function (mets_1) {
        var MET = (function () {
            function MET(value, code, description) {
                this.correctedValue = function (person) {
                    var weightGrams = person.weight * 1000;
                    var hbRMR = person.cardio.rmr.revisedHB();
                    var kcalMinute = hbRMR / (1440);
                    var litersMinute = kcalMinute / 5;
                    var hbRMRmLKgMin = litersMinute / weightGrams;
                    return this.value * (3.5 / hbRMRmLKgMin);
                };
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
        function estimateKcal(mets, kg, hours) {
            return mets * kg * hours;
        }
        mets_1.estimateKcal = estimateKcal;
        function estimateKg(kcal, mets, hours) {
            return kcal / (mets * hours);
        }
        mets_1.estimateKg = estimateKg;
        function estimateHours(kcal, mets, kg) {
            return kcal / (mets * kg);
        }
        mets_1.estimateHours = estimateHours;
    })(mets = Fit.mets || (Fit.mets = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var balance;
    (function (balance) {
        var Balance = (function () {
            function Balance(gender, dob, height, weight) {
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return Balance;
        }());
        balance.Balance = Balance;
    })(balance = Fit.balance || (Fit.balance = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var cardio;
    (function (cardio) {
        var VO2 = (function () {
            function VO2(gender, dob, height, weight) {
                this.vo2Reserve = function (max, rest) {
                    if (rest === void 0) { rest = 3.5; }
                    return max - rest;
                };
                this.twelveMinVo2 = function (distance) {
                    return 0.0268 * distance - 11.3;
                };
                this.mileSteadyJogVo2 = function (time, hr) {
                    if (this.gender === this.Gender.Female) {
                        return 100.5 - 0.1636 * this.weight - 1.438 * time - 0.1928 * hr;
                    }
                    return 108.44 - (0.164 * this.weight) - (1.438 * time) - (0.193 * hr);
                };
                this.WalkingGrossVO2 = function (speed, grade) {
                    return (0.1 * speed) + (1.8 * speed * grade) + 3.5;
                };
                this.runningGrossVO2 = function (speed, grade) {
                    return (0.2 * speed) + (0.9 * speed * grade) + 3.5;
                };
                this.legErgometryGrossVO2 = function (mass, work) {
                    return 1.8 * work / mass + 3.5;
                };
                this.armErgometryGrossVO2 = function (mass, work) {
                    return 3.0 * work / mass;
                };
                this.steppingVo2 = function (height, frequency) {
                    return (frequency * 0.2) + (frequency * this.height * 1.8 * 1.33);
                };
                this.stairmasterMets = function (setting) {
                    return 0.556 + 7.45 * setting;
                };
                this.usopVO2Max = function (HRMax, HRResting) {
                    return 15.3 * (HRMax / HRResting);
                };
                this.foxErgometryVo2max = function (hr5) {
                    return 6300.0 - (19.26 * hr5);
                };
                this.treadmillWalkVo2max = function (speed, hr) {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 15.1 + (21.8 * speed) - (0.327 * hr) - (0.263 * age) + (0.00504 * (hr * this.age)) + (5.48 * 0.0);
                    }
                    return 15.1 + (21.8 * speed) - (0.327 * hr) - (0.263 * age) + (0.00504 * (hr * this.age)) + (5.48 * 1.0);
                };
                this.mileWalkVo2 = function (time, hrPeak) {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 132.853 - 0.0769 * this.weight - 0.3877 * age + 6.315 * 0.0 - 3.2649 * time - 0.1565 * hrPeak;
                    }
                    return 132.853 - 0.0769 * this.weight - 0.3877 * age + 6.315 * 1.0 - 3.2649 * time - 0.1565 * hrPeak;
                };
                this.mileHalfVo2George = function (time) {
                    if (this.gender === this.Gender.Female) {
                        return 88.02 - (0.1656 * this.weight) - (2.76 * time) + (3.716 * 0.0);
                    }
                    return 88.02 - (0.1656 * this.weight) - (2.76 * time) + (3.716 * 1.0);
                };
                this.mileHalfVo2Larson = function (time, hr) {
                    if (this.gender === this.Gender.Female) {
                        return 100.16 + (7.30 * 0.0) - (0.164 * this.weight) - (1.273 * time) - (0.1563 * hr);
                    }
                    return 100.16 + (7.30 * 1.0) - (0.164 * this.weight) - (1.273 * time) - (0.1563 * hr);
                };
                this.stepTestAstrand = function (hr) {
                    if (this.gender === this.Gender.Female) {
                        return 3.750 * ((this.weight + 3) / (hr - 65));
                    }
                    return 3.744 * ((this.weight + 5) / (hr - 62));
                };
                this.stepTestQueensCollege = function (hr) {
                    if (this.gender === this.Gender.Female) {
                        return 65.81 - (0.1847 * hr);
                    }
                    return 111.33 - (0.42 * hr);
                };
                this.treadmillJoggingVo2max = function (speed, hr) {
                    if (this.gender === this.Gender.Female) {
                        return 54.07 - (0.1938 * this.weight) - (4.47 * speed) + (0.01453 * hr) + (7.062 * 0.0);
                    }
                    return 54.07 - (0.1938 * this.weight) - (4.47 * speed) + (0.01453 * hr) + (7.062 * 1.0);
                };
                this.treadmillSubmaxVo2SingleStage = function (sm1, hr1, hrmax) {
                    if (this.gender === this.Gender.Female) {
                        return sm1 * ((hrmax - 72) / (hr1 - 72));
                    }
                    return sm1 * ((hrmax - 61) / (hr1 - 61));
                };
                this.treadmillSubmaxVo2Multistage = function (sm1, hr1, sm2, hr2, hrmax) {
                    var b = (sm2 - sm1) / (hr2 - hr1);
                    return sm2 + b * (hrmax - hr2);
                };
                this.mileVo2Child = function (time) {
                    var age = this.dob.delta("years");
                    var bmi = (this.weight / Math.pow(this.height / 100, 2));
                    return 108.94 - (8.41 * time) + 0.34 * Math.pow(time, 2) + 0.21 * age - (0.84 * bmi);
                };
                this.vo2maxBalke = function (time) {
                    if (this.gender === this.Gender.Female) {
                        return 1.38 * time + 5.22;
                    }
                    return 1.444 * time + 14.99;
                };
                this.vo2maxNaughtonMale = function (time) {
                    return (1.61 * time) + 3.60;
                };
                this.vo2maxBruce = function (time, time2, time3) {
                    if (this.gender === this.Gender.Female) {
                        return 4.38 * time - 3.90;
                    }
                    return 14.76 - 1.379 * time + 0.451 * time2 - 0.012 * time3;
                };
                this.vo2maxElderlyCardiac = function (time) {
                    return (2.282 * time) + 8.545;
                };
                this.shuttleRunVo2 = function (speed) {
                    var age = this.dob.delta("years");
                    return 31.025 + (3.238 * speed) - (3.248 * age) + 0.1536 * (age * speed);
                };
                this.cooperVo2 = function (distance) {
                    return (distance - 504.9) / 44.73;
                };
                this.cooperMiles = function (distance) {
                    return (35.97 * distance) - 11.29;
                };
                this.gilbertGaniels = function (velocity, time) {
                    var numerator = 0.000104 * Math.pow(velocity, 2) + 0.182258 * velocity - 4.6;
                    var denominator = 0.2989558 * Math.pow(Math.E, -0.1932605 * time) + 0.1894393 * Math.pow(Math.E, -0.012778 * time) + 0.8;
                    return numerator / denominator;
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return VO2;
        }());
        cardio.VO2 = VO2;
    })(cardio = Fit.cardio || (Fit.cardio = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var cardio;
    (function (cardio) {
        var HR = (function () {
            function HR(gender, dob, height, weight) {
                this.maxFox = function () {
                    var age = this.dob.delta("years");
                    return 208.0 - (0.7 * age);
                };
                this.maxGellish = function () {
                    var age = this.dob.delta("years");
                    return 207 - (0.7 * age);
                };
                this.maxAstrand = function () {
                    var age = this.dob.delta("years");
                    return 216.6 - (0.84 * age);
                };
                this.maxTanaka = function () {
                    var age = this.dob.delta("years");
                    return 208 - (0.7 * age);
                };
                this.maxGulati = function () {
                    var age = this.dob.delta("years");
                    return 206 - (0.88 * age);
                };
                this.meanArterialPressure = function (diastolic_bp, systolic_bp) {
                    return ((2 * diastolic_bp) + systolic_bp) / 3;
                };
                this.target = function (intensity, rest, max) {
                    return intensity * (max - rest) + rest;
                };
                this.rvBerglund = function () {
                    var age = this.dob.delta("years");
                    return (0.0115 * age) + (0.019 * this.height) - 2.24;
                };
                this.rvBoren = function () {
                    var age = this.dob.delta("years");
                    return (0.022 * age) + (0.0198 * this.height) - (0.015 * this.weight) - 1.54;
                };
                this.rvGoldman = function () {
                    var age = this.dob.delta("years");
                    return (0.017 * age) + (0.027 * this.height) - 3.477;
                };
                this.rvObrienFemale = function (bsa) {
                    var age = this.dob.delta("years");
                    return (0.03 * age) + (0.0387 * this.height) - (0.73 * bsa) - 4.78;
                };
                this.metsEstimator = function (maxHR, restingHR) {
                    var hrIndex = maxHR / restingHR;
                    return 6.0 * hrIndex - 5;
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return HR;
        }());
        cardio.HR = HR;
    })(cardio = Fit.cardio || (Fit.cardio = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var cardio;
    (function (cardio) {
        var RMR = (function () {
            function RMR(gender, dob, height, weight) {
                this.revisedHB = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return (447.6 + 9.25 * this.weight) + (3.10 * this.height) - (4.33 * age);
                    }
                    return (88.4 + 13.4 * this.weight) + (4.8 * this.height) - (5.68 * age);
                };
                this.msj = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return (9.99 * this.weight + 6.25 * this.height - 4.92 * age - 151);
                    }
                    return (9.99 * this.weight + 6.25 * this.height - 4.92 * age + 5);
                };
                this.kma = function (lbm) {
                    return 370 + (21.6 * lbm);
                };
                this.cunningham = function (lbm) {
                    return 500 + (22 * lbm);
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return RMR;
        }());
        cardio.RMR = RMR;
    })(cardio = Fit.cardio || (Fit.cardio = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var cardio;
    (function (cardio) {
        var TEE = (function () {
            function TEE(gender, dob, height, weight) {
                this.childSedentaryTee = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 135.3 - (30.8 * age) + 1 * ((10 * this.weight) + (934 * this.height));
                    }
                    return 88.5 - (61.9 * age) + 1 * ((26.7 * this.weight) + (903 * this.height));
                };
                this.childLowTee = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 135.3 - (30.8 * age) + 1.16 * ((10 * this.weight) + (934 * this.height));
                    }
                    return 88.5 - (61.9 * age) + 1.13 * ((26.7 * this.weight) + (903 * this.height));
                };
                this.childActiveTee = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 135.3 - (30.8 * age) + 1.31 * ((10 * this.weight) + (934 * this.height));
                    }
                    return 88.5 - (61.9 * age) + 1.26 * ((26.7 * this.weight) + (903 * this.height));
                };
                this.childVeryActiveTee = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 135.3 - (30.8 * age) + 1.56 * ((10 * this.weight) + (934 * this.height));
                    }
                    return 88.5 - (61.9 * age) + 1.42 * ((26.7 * this.weight) + (903 * this.height));
                };
                this.adultSedentaryTee = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 354 - (6.91 * age) + 1 * ((9.36 * this.weight) + (726 * this.height));
                    }
                    return 662 - (9.53 * age) + 1 * ((15.9 * this.weight) + (540 * this.height));
                };
                this.adultLowTee = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 662 - (9.53 * age) + 1.12 * ((15.9 * this.weight) + (540 * this.height));
                    }
                    return 662 - (9.53 * age) + 1.11 * ((15.9 * this.weight) + (540 * this.height));
                };
                this.adultActiveTee = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 662 - (9.53 * age) + 1.27 * ((15.9 * this.weight) + (540 * this.height));
                    }
                    return 662 - (9.53 * age) + 1.25 * ((15.9 * this.weight) + (540 * this.height));
                };
                this.adultVeryActiveTee = function () {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return 662 - (9.53 * age) + 1.45 * ((15.9 * this.weight) + (540 * this.height));
                    }
                    return 662 - (9.53 * age) + 1.48 * ((15.9 * this.weight) + (540 * this.height));
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return TEE;
        }());
        cardio.TEE = TEE;
    })(cardio = Fit.cardio || (Fit.cardio = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var cardio;
    (function (cardio) {
        var Cardiovascular = (function () {
            function Cardiovascular(gender, dob, height, weight) {
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
                this.vo2 = new cardio.VO2(gender, dob, height, weight);
                this.hr = new cardio.HR(gender, dob, height, weight);
                this.rmr = new cardio.RMR(gender, dob, height, weight);
                this.tee = new cardio.TEE(gender, dob, height, weight);
            }
            return Cardiovascular;
        }());
        cardio.Cardiovascular = Cardiovascular;
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
        var Indices = (function () {
            function Indices(gender, dob, height, weight) {
                this.bmi = function () {
                    var meters = this.height / 100;
                    return this.weight / (meters * meters);
                };
                this.ponderal = function () {
                    return this.weight / Math.pow(this.height, 3);
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
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
                    return (0.62 * (Math.pow(this.this.height, 2) / resistance)) + (0.21 * this.weight) + (0.1 * reactance) + 4.2;
                };
                this.ffmAdolescent = function (resistance, reactance) {
                    return (0.61 * (Math.pow(this.height, 2) / resistance)) + (0.25 * this.weight) + 1.31;
                };
                this.ffmAdultLean = function (resistance, reactance) {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return (0.000646 * Math.pow(this.height, 2)) - (0.014 * resistance) + (0.421 * this.weight) + 10.4;
                    }
                    return (0.00066360 * Math.pow(this.height, 2)) - (0.02117 * resistance) + (0.62854 * this.weight) - (0.12380 * age) + 9.33285;
                };
                this.ffmAdultObese = function (resistance, reactance) {
                    var age = this.dob.delta("years");
                    if (this.gender === this.Gender.Female) {
                        return (0.00091186 * Math.pow(this.height, 2)) - (0.1466 * resistance) + (0.29990 * this.weight) - (0.07012 * age) + 9.37938;
                    }
                    return (0.00088580 * Math.pow(this.height, 2)) - (0.02999 * resistance) + (0.42688 * this.weight) - (0.07002 * age) + 14.52435;
                };
                this.ffmAdultAthlete = function (resistance, reactance) {
                    if (this.gender === this.Gender.Female) {
                        return (0.282 * this.height) + (0.415 * this.weight) - (0.037 * resistance) + (0.096 * reactance) - 9.734;
                    }
                    return (0.186 * (Math.pow(this.height, 2) / resistance)) + (0.701 * this.weight) + 1.949;
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
                    return 0.03330 * Math.pow(this.weight, (0.7285 - 0.0188 * Math.log(this.weight))) * Math.pow(this.height, 0.3);
                };
                this.costeff = function () {
                    return (4 * this.weight + 7) / (90 + this.weight);
                };
                this.dubois = function () {
                    return 0.007184 * Math.pow(this.weight, 0.425) * Math.pow(this.height, 0.725);
                };
                this.fujimoto = function () {
                    return 0.008883 * Math.pow(this.weight, 0.444) * Math.pow(this.height, 0.663);
                };
                this.gehangeorge = function () {
                    return 0.0235 * Math.pow(this.weight, 0.51456) * Math.pow(this.height, 0.42246);
                };
                this.haycock = function () {
                    return 0.024265 * Math.pow(this.weight, 0.5378) * Math.pow(this.height, 0.3964);
                };
                this.mosteller = function () {
                    return Math.sqrt(this.weight * this.height) / 6;
                };
                this.schlich = function () {
                    if (this.gender === Fit.Gender.Female) {
                        return 0.000975482 * Math.pow(this.weight, 0.46) * Math.pow(this.height, 1.08);
                    }
                    return 0.000579479 * Math.pow(this.weight, 0.38) * Math.pow(this.height, 1.24);
                };
                this.shuterAslani = function () {
                    return 0.00949 * Math.pow(this.weight, 0.441) * Math.pow(this.height, 0.655);
                };
                this.takahira = function () {
                    return 0.007241 * Math.pow(this.weight, 0.425) * Math.pow(this.height, 0.725);
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
        var Composition = (function () {
            function Composition(gender, dob, height, weight) {
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
                this.density = new composition.Density(gender, dob, height, weight);
                ;
                this.indices = new composition.Indices(gender, dob, height, weight);
                ;
                this.mass = new composition.Mass(gender, dob, height, weight);
                ;
                this.surfaceArea = new composition.SurfaceArea(gender, dob, height, weight);
                ;
            }
            return Composition;
        }());
        composition.Composition = Composition;
    })(composition = Fit.composition || (Fit.composition = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var flexibility;
    (function (flexibility) {
        var Flexibility = (function () {
            function Flexibility(gender, dob, height, weight) {
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return Flexibility;
        }());
        flexibility.Flexibility = Flexibility;
    })(flexibility = Fit.flexibility || (Fit.flexibility = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var strength;
    (function (strength) {
        var Lifting = (function () {
            function Lifting(gender, dob, height, weight) {
                this.sinclair = function (obtainedTotal) {
                    var coefficientA = 0.794358141;
                    var coefficientB = 174.393;
                    if (this.gender === this.Gender.Female) {
                        coefficientA = 0.897260740;
                        coefficientB = 148.026;
                    }
                    if (this.weight >= coefficientB)
                        return 1;
                    var exponent = Math.pow(coefficientA * Math.log10(this.weight / coefficientB), 2);
                    return Math.pow(10, exponent);
                };
                this.wilks = function (weightLifted) {
                    var coefficient;
                    var a = -216.0475144;
                    var b = 16.2606339;
                    var c = -0.002388645;
                    var d = -0.00113732;
                    var e = 7.01863E-06;
                    var f = -1.291E-08;
                    if (this.gender === this.Gender.Female) {
                        a = 594.31747775582;
                        b = -27.23842536447;
                        c = 0.82112226871;
                        d = -0.00930733913;
                        e = 4.731582E-05;
                        f = -9.054E-08;
                    }
                    coefficient = 500 / (a + b * this.weight + c * Math.pow(this.weight, 2) + d * Math.pow(this.weight, 3) + e * Math.pow(this.weight, 4) + f * Math.pow(this.weight, 5));
                    return coefficient * weightLifted;
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return Lifting;
        }());
        strength.Lifting = Lifting;
    })(strength = Fit.strength || (Fit.strength = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var strength;
    (function (strength) {
        var Power = (function () {
            function Power(gender, dob, height, weight) {
                this.lewis = function (jumpHeight) {
                    return Math.sqrt(4.9 * this.weight) * Math.sqrt(jumpHeight) * 9.81;
                };
                this.peakPowerHarman = function (jumpHeight) {
                    return 61.9 * jumpHeight + 36 * this.weight + 1822;
                };
                this.meanPowerHarman = function (jumpHeight) {
                    return 21.1 * jumpHeight + 2.3 * this.weight + 1393;
                };
                this.peakPowerJB = function (jumpHeight) {
                    var height = this.height * 100;
                    return 78.6 * jumpHeight + 60.3 * this.weight + 15.3 * height + 1308;
                };
                this.meanPowerJB = function (jumpHeight) {
                    var height = this.height * 100;
                    return 43.8 * jumpHeight + 32.7 * this.weight - 16.8 * height + 431;
                };
                this.peakPowerSayer = function (jumpHeight) {
                    return 60.7 * jumpHeight + 45.3 * this.weight - 2055;
                };
                this.powerMK = function (verticalHeight, time) {
                    return (this.weight * (verticalHeight / time)) * 9.81;
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return Power;
        }());
        strength.Power = Power;
    })(strength = Fit.strength || (Fit.strength = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var strength;
    (function (strength) {
        var RM = (function () {
            function RM(gender, dob, height, weight) {
                this.brzycki = function (reps, weight) {
                    return weight / (1.0278 - (0.0278 * reps));
                };
                this.epley = function (reps, weight) {
                    return (weight * reps * 0.033) + weight;
                };
                this.lander = function (reps, weight) {
                    return weight / (1.013 - (0.0267123 * reps));
                };
                this.lombardi = function (reps, weight) {
                    return weight * Math.pow(reps, 0.10);
                };
                this.mayhew = function (reps, weight) {
                    return (100 * weight) / ((52.2 + 41.9) * Math.pow(Math.E, -0.055 * reps));
                };
                this.mayhewFootball = function (reps) {
                    return 226.7 + 7.1 * (reps);
                };
                this.oconnor = function (reps, weight) {
                    return weight * (1 + 0.025 * reps);
                };
                this.wathen = function (reps, weight) {
                    return (100 * weight) / (48.8 + (53.8 * Math.pow(Math.E, -0.075 * reps)));
                };
                this.fatigueRepMap = function (reps, weight) {
                    return weight / (1.0278 - (reps * 0.0278));
                };
                this.twoSetMax = function (rep1, weight1, rep2, weight2) {
                    return ((weight1 - weight2) / (rep2 - rep1)) * (rep1 - 1) + weight1;
                };
                this.relativeStrength = function (rm) {
                    return rm / this.weight;
                };
                this.ymcaUpperBodyRepMax = function (reps) {
                    if (this.gender === this.Gender.Female) {
                        return (0.31 * reps) + 19.2;
                    }
                    return (1.55 * reps) + 37.9;
                };
                this.femaleMiddleAgeRepMax = function (reps, weight) {
                    var age = this.dob.delta("years");
                    return (1.06 * weight) + (0.58 * reps) - (0.20 * age) - 3.41;
                };
                this.femaleOlderRepMax = function (reps, weight) {
                    var age = this.dob.delta("years");
                    return (0.92 * weight) + (0.79 * reps) - (0.20 * age) - 3.73;
                };
                this.femaleHipRepMax = function (reps, weight) {
                    return 100 * weight / (48.8 + Math.pow(53.8, (-0.075 * reps)));
                };
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
            }
            return RM;
        }());
        strength.RM = RM;
    })(strength = Fit.strength || (Fit.strength = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var strength;
    (function (strength) {
        var Strength = (function () {
            function Strength(gender, dob, height, weight) {
                this.gender = gender;
                this.dob = dob;
                this.height = height;
                this.weight = weight;
                this.lifting = new strength.Lifting(gender, dob, height, weight);
                this.power = new strength.Power(gender, dob, height, weight);
                this.rm = new strength.RM(gender, dob, height, weight);
            }
            return Strength;
        }());
        strength.Strength = Strength;
        ;
    })(strength = Fit.strength || (Fit.strength = {}));
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var Person = (function () {
        function Person(gender, dob, height, weight) {
            this.gender = gender;
            this.dob = dob;
            this.height = height;
            this.weight = weight;
            this.balance = new Fit.balance.Balance(gender, dob, height, weight);
            this.cardio = new Fit.cardio.Cardiovascular(gender, dob, height, weight);
            this.composition = new Fit.composition.Composition(gender, dob, height, weight);
            this.strength = new Fit.strength.Strength(gender, dob, height, weight);
        }
        return Person;
    }());
    Fit.Person = Person;
})(Fit || (Fit = {}));
var Fit;
(function (Fit) {
    var model;
    (function (model) {
        var aerobic;
        (function (aerobic) {
            var PerformanceModel = (function () {
                function PerformanceModel(t1, d1) {
                    this.predictTime = function (d2) { return 0; };
                    this.predictDistance = function (t2) { return 0; };
                    this.t1 = t1;
                    this.d1 = d1;
                }
                return PerformanceModel;
            }());
            var Riegel = (function (_super) {
                __extends(Riegel, _super);
                function Riegel() {
                    _super.apply(this, arguments);
                    this.predictTime = function (d2) {
                        if (this.t1 <= 0 || this.d1 <= 0 || d2 <= 0) {
                            return 0;
                        }
                        return this.t1 * Math.pow((d2 / this.d1), 1.06);
                    };
                    this.predictDistance = function (t2) {
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
                    this.predictTime = function (d2) {
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
                function elPace(vO2Max) {
                    return hrPace(0.7, vO2Max);
                }
                pace.elPace = elPace;
                function mPace(vO2Max) {
                    return hrPace(0.825, vO2Max);
                }
                pace.mPace = mPace;
                function tPace(vO2Max) {
                    return hrPace(0.85, vO2Max);
                }
                pace.tPace = tPace;
                function iPace(vO2Max) {
                    return hrPace(1, vO2Max);
                }
                pace.iPace = iPace;
            })(pace = running.pace || (running.pace = {}));
        })(running = sport.running || (sport.running = {}));
    })(sport = Fit.sport || (Fit.sport = {}));
})(Fit || (Fit = {}));
