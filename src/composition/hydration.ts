/// <reference path="../enums.ts" />

/*
Body Density
*/

namespace Fit {

	export namespace composition {

			/*
			@param {Double} weight in kg
			@returns {Double} L/day of water
			*/
			export function dailyWaterNeed(): number {
			  return 0.033 * this.weight;
			}

	}


}
