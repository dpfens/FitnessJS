import { Gender } from "../enums";

export class ResidualVolume {
    public gender: Gender;
    public dob: Date;
    public weight: number;
    public height: number;

    constructor(gender: Gender, dob: Date, weight: number, height: number) {
        this.gender = gender;
        this.dob = dob;
        this.weight = weight;
        this.height = height;
    }

    public normal(): number {
        const age: number = this.dob.delta("years");
        const heightCm: number = this.height * 100;
        return 0.0275 * age + 0.0189 * heightCm - 2.6139;
    }

    public overweight(): number {
        const age: number = this.dob.delta("years");
        const heightCm: number = this.height * 100;
        return 0.0277 * age + 0.0138 * heightCm - 2.3967;
    }

    public berglund(): number {
        const age: number = this.dob.delta("years");
        const heightCm: number = this.height * 100;
        if (this.gender === Gender.Female) {
            return 0.007 * age + 0.0268 * this.height - 3.42;
        }
        return (0.022 * age) + (0.0198 * heightCm) - (0.015 * this.weight) - 1.54;
    }

    public black(): number {
        const age: number = this.dob.delta("years");
        const heightCm: number = this.height * 100;
        return 0.21 * age + 0.023 * heightCm - 2.978;
    }

    public boren(): number {
        const age: number = this.dob.delta("years");
        const heightCm: number = this.height * 100;
        return (0.0115 * age) + (0.019 * heightCm) - 2.24;
    }

    public goldman(): number {
        const age: number = this.dob.delta("years");
        const heightCm: number = this.height * 100;
        if (this.gender === Gender.Female) {
            return 0.009 * age + 0.032 * heightCm - 3.9;
        }
        return (0.017 * age) + (0.027 * heightCm) - 3.477;
    }

    public obrien(bsa: number): number {
        const age: number = this.dob.delta("years");
        const heightCm: number = this.height * 100;
        return (0.03 * age) + (0.0387 * heightCm) - (0.73 * bsa) - 4.78;
    }
}

export class VO2 {
    public gender: Gender;
    public dob: Date;
    public weight: number;
    public height: number;

    constructor(gender: Gender, dob: Date, weight: number, height: number) {
        this.gender = gender;
        this.dob = dob;
        this.weight = weight;
        this.height = height;
    }

    public reserve(vo2Max: number, vo2Rest: number = 3.5): number {
        return vo2Max - vo2Rest;
    }

    public target(vo2Max: number, vo2Rest: number, intensity: number): number {
        return intensity * (vo2Max - vo2Rest) + vo2Rest;
    }

    public cooper(distance: number): number {
        return 0.0268 * distance - 11.3;
    }

    public walkingGross(speed: number, grade: number): number {
        return (0.1 * speed) + (1.8 * speed * grade);
    }

    public runningGross(speed: number, grade: number): number {
        return (0.2 * speed) + (0.9 * speed * grade);
    }

    public legErgometryGross(mass: number, work: number): number {
        return 3.5 + 1.8 * (work / mass);
    }

    public armErgometryGross(mass: number, work: number): number {
        return (3.0 * work / mass);
    }

    public steppingGross(height: number, frequency: number): number {
        return (0.2 * frequency) + (frequency * this.height * 1.8 * 1.33);
    }

    public usop(hrMax: number, restingHR: number): number {
        return 15.3 * (hrMax / restingHR);
    }

    public foxErgometry(hr5: number): number {
        return 6300.0 - (19.26 * hr5);
    }

    public ebbelingTreadmill(speed: number, hr: number): number {
        const age: number = this.dob.delta("years");
        if (this.gender === Gender.Female) {
            return 15.1 + (21.8 * speed) - (0.327 * hr) - (0.263 * age) + (0.00504 * (hr * age) ) + (5.48 * 0.0);
        }
        return 15.1 + (21.8 * speed) - (0.327 * hr) - (0.263 * age) + ( 0.00504 * (hr * age) ) + (5.48 * 1.0);
    }

    public kline(time: number, hrPeak: number): number {
        const age: number = this.dob.delta("years");
        if (this.gender === Gender.Female) {
            return 132.853 - 0.0769 * this.weight - 0.3877 * age + 6.315 * 0.0 - 3.2649 * time - 0.1565 * hrPeak;
        }
        return 132.853 - 0.0769 * this.weight - 0.3877 * age + 6.315 * 1.0 - 3.2649 * time - 0.1565 * hrPeak;
    }

    public larsen(time: number, hr: number): number {
        if (this.gender === Gender.Female) {
            return 100.16 + (7.30 * 0.0) - (0.164 * this.weight) - (1.273 * time) - (0.1563 * hr);
        }
        return 100.16 + (7.30 * 1.0) - (0.164 * this.weight) - (1.273 * time) - (0.1563 * hr);
    }

    public astrandStep(hr: number): number {
        if (this.gender === Gender.Female) {
            return 3.750 * ((this.weight + 3) / (hr - 65));
        }
        return 3.744 * ((this.weight + 5) / (hr - 62));
    }

    public qcStep(hr: number): number {
        if (this.gender === Gender.Female) {
            return 65.81 - (0.1847 * hr);
        }
        return 111.33 - (0.42 * hr);
    }

    public georgeRW(time: number): number {
        if (this.gender === Gender.Female) {
            return 88.02 - (0.1656 * this.weight) - (2.76 * time) + (3.716 * 0.0);
        }
        return 88.02 - (0.1656 * this.weight) - (2.76 * time) + (3.716 * 1.0);
    }

    public georgeSteady(time: number, hr: number): number {
        if (this.gender === Gender.Female) {
            return 100.5 - 0.1636 * this.weight - 1.438 * time - 0.1928 * hr;
        }
        return 100.5 - 0.1636 * this.weight - 1.438 * time - 0.1928 * hr + 8.344;
    }

    public georgeTreadmill(speed: number, hr: number): number {
        if (this.gender === Gender.Female) {
            return 54.07 - (0.1938 * this.weight) - (4.47 * speed) + ( 0.01453 * hr ) + (7.062 * 0.0);
        }
        return 54.07 - (0.1938 * this.weight) - (4.47 * speed) + ( 0.01453 * hr ) + (7.062 * 1.0);
    }

    public treadmillSubmaxSingleStage(sm1: number, hr1: number, hrmax: number): number {
        if (this.gender === Gender.Female) {
            return sm1 * ( (hrmax - 72) / (hr1 - 72) );
        }
        return sm1 * ( (hrmax - 61) / (hr1 - 61) );
    }

    public treadmillSubmaxVO2Multistage(sm1: number, hr1: number, sm2: number, hr2: number, hrMax: number): number {
        const b: number = (sm2 - sm1) / (hr2 - hr1);
        return sm2 + b * (hrMax - hr2);
    }

    public curetonChild(time: number): number {
        const age: number = this.dob.delta("years");
        const bmi: number = (this.weight / Math.pow(this.height, 2));
        return 108.94 - (8.41 * time) + 0.34 * 108.94 - (8.41 * time) + 0.34 * Math.pow(time, 2) + 0.21 * age - (0.84 * bmi);
    }

    public balke(time: number): number {
        if (this.gender === Gender.Female) {
            return 1.38 * time + 5.22;
        }
        return 1.444 * time + 14.99;
    }

    public balke15MinRun(distance: number): number {
        return 0.0178 * distance + 9.6;
    }

    public bruceMale(time: number, time2: number, time3: number): number {
        return 14.76 - 1.379 * time + 0.451 * time2 - 0.012 * time3;
    }

    public bruceFemale(time: number): number {
        return 4.38 * time - 3.90;
    }

    public bruceEC(time: number): number {
        return (2.282 * time) + 8.545;
    }

    public leger(speed: number): number {
        const age: number = this.dob.delta("years");
        return 31.025 + (3.238 * speed) - (3.248 * age) + 0.1536 * (age * speed);
    }

    public gilbertDaniels(velocity: number, time: number): number {
        const numerator: number = 0.000104 * Math.pow(velocity, 2) + 0.182258 * velocity - 4.6;
        const denominator: number = 0.2989558 * Math.exp(-0.1932605 * time) + 0.1894393 * Math.exp(-0.012778 * time) + 0.8;
        return numerator / denominator;
    }
}
