export interface IEstimator {
    predict(dob: Date);

    age(hr: number);

}

export class Astrand implements IEstimator {
    public predict(dob: Date): number {
        const age: number = dob.delta("years");
        return 216.6 - (0.84 * age);
    }

    public age(hr: number): number {
        return (hr - 216.6) / -0.84;
    }
}

export class HF implements IEstimator {
    public predict(dob: Date): number {
        const age: number = dob.delta("years");
        return 220 - age;
    }

    public age(hr: number): number {
        return 220 - hr;
    }
}

export class Gellish implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 207 - (0.7 * age);
    }

    public age(hr: number): number {
       return (hr - 207.0) / -0.7;
    }
}

export class Gulati implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 206 - (0.88 * age);
    }

    public age(hr: number): number {
       return (hr - 206.0) / -0.88;
    }
}

export class LM implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 206.3 - (0.711 * age);
    }

    public age(hr: number): number {
      return (hr - 206.3) / -0.711;
    }
}

export class Miller implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 217 - (0.85 * age);
    }

    public age(hr: number): number {
       return (hr - 217) / -0.85;
    }
}

export class Nes implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 211 - (0.64 * age);
    }

    public age(hr: number): number {
       return (hr - 211) / -0.64;
    }
}

export class OaklandL implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 206.9 - (0.67 * age);
    }

    public age(hr: number): number {
       return (hr - 206.9) / -0.67;
    }
}

export class OaklandNL1 implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 191.5 - (0.002 * Math.pow(age, 2) );
    }

    public age(hr: number): number {
       return 5 * Math.sqrt(3830 - 20 * hr);
    }
}

export class OaklandNL2 implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 163 + (1.16 * age) - (0.018 * Math.pow(age, 2));
    }

    public age(hr: number): number {
       return (-10. / 9) * (Math.sqrt(8176 - 45 * hr) - 29);
    }
}

export class RL implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 205.8 - (0.685 * age);
    }

    public age(hr: number): number {
      return (hr - 205.8) / -0.685;
    }
}

export class TMS implements IEstimator {

    public predict(dob: Date): number {
       const age: number = dob.delta("years");
       return 208 - (0.7 * age);
    }

    public age(hr: number): number {
       return (hr - 208) / -0.7;
    }

}

export function meanArterialPressure(diastolicBp: number, systolicBp: number): number {
return ((2 * diastolicBp) + systolicBp) / 3;
}

export function karvonen(intensity: number, rest: number, maximum: number): number {
return intensity * (maximum - rest) + rest;
}

export function zoladz(hrMax: number, adjuster: number): number {
return hrMax - adjuster;
}
