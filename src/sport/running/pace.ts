namespace Fit {

  export namespace sport {

    export namespace running {

      /*
      calculate velocity at VO2Max
      vO2Max in mL/(kg•min)
      returns speed in km/h
      */
      export function vVo2Max(vO2Max: number): number {
        return vO2Max/3.5;
      }

      export namespace pace {

        export function hrSpeed(percentHR: number, vO2Max: number): number {
          let vO2MaxPercent = conversion.SwainConverter.percentVO2Max(percentHR);
          let vO2Speed =vVo2Max(vO2Max);
          return vO2MaxPercent * vO2Speed;
        }

        export function hrPace(percentHR: number, vO2Max: number): number {
          let kph = hrSpeed(percentHR, vO2Max);
          // convert kph to min/km
          return kph/60;
        }

        /*
          Easy / Long (E/L) pace
          60-79% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
          vO2Max in mL/(kg•min)
          return speed in min/km
        */
        export function elPace(vO2Max: number): number {
          return hrPace(0.7, vO2Max);
        }


        /*
          Marathon (M) pace
          80-85% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
          vO2Max in mL/(kg•min)
          return speed in km/h
        */
        export function mPace(vO2Max: number): number {
          return hrPace(0.825, vO2Max);
        }

        /*
          Threshold (T) pace
          82-88% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
          vO2Max in mL/(kg•min)
          return speed in km/h
        */
        export function tPace(vO2Max: number): number {
          return hrPace(0.85, vO2Max);
        }

        /*
          Threshold (T) pace
          97-100% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
          vO2Max in mL/(kg•min)
          return speed in km/h
        */
        export function iPace(vO2Max: number): number {
          return hrPace(1, vO2Max);
        }
      }

    }


  }

}
