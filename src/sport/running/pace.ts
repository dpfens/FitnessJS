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

        /*
          @param {Number} percentHR in decimal form
          @param {Number} vO2Max in mL/(kg•min)
          @returns {Number} speed in km/h
        */
        export function hrSpeed(percentHR: number, vO2Max: number): number {
          let vO2MaxPercent = conversion.SwainConverter.percentVO2Max(percentHR);
          let vO2Speed =vVo2Max(vO2Max);
          return vO2MaxPercent * vO2Speed;
        }

        /*
          @param {Number} percentHR in decimal form
          @param {Number} vO2Max in mL/(kg•min)
          @returns {Number} pace in min/mile
        */
        export function hrPace(percentHR: number, vO2Max: number): number {
          let kph = hrSpeed(percentHR, vO2Max);
          // convert kph to min/km
          return 60/kph;
        }

        /*
          Easy / Long (E/L) pace
          @description 60-79% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
          @param {Number} vO2Max in mL/(kg•min)
          @returns {Number} pace in min/mile
        */
        export function easy(vO2Max: number): number[] {
          return [hrPace(0.6, vO2Max), hrPace(0.79, vO2Max)];
        }


        /*
          Marathon (M) pace
          @description 80-85% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
          @param {Number} vO2Max in mL/(kg•min)
          @returns {Number} pace in min/mile
        */
        export function marathon(vO2Max: number): number[] {
          return [hrPace(0.8, vO2Max), hrPace(0.85, vO2Max)];
        }

        /*
          Threshold (T) pace
          @description 82-88% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
          @param {Number} vO2Max in mL/(kg•min)
          @returns {Number} pace in min/mile
        */
        export function threshold(vO2Max: number): number[] {
          return [hrPace(0.82, vO2Max), hrPace(0.88, vO2Max)];
        }

        /*
          Interval (I) pace
          @description 97-100% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
          @param {Number} vO2Max in mL/(kg•min)
          @returns {Number} pace in min/mile
        */
        export function interval(vO2Max: number): number[] {
          return [hrPace(0.97, vO2Max), hrPace(1, vO2Max)];
        }
      }

    }


  }

}
