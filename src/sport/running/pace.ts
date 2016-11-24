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

      }

    }


  }

}
