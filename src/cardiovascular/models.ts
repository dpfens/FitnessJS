namespace Fit {
  export class Models {
    private gender: Gender;
    private dob: Date;
    private height: number;
    private weight: number;

    constructor(gender: Gender, dob: Date, height: number, weight: number) {
      this.gender = gender;
      this.dob = dob;
      this.height = height;
      this.weight = weight;
    }

    /*
    	Riegel Running Model
    	t1 = time
    	d1 = old distance
    	d2 = new distance
    	d1 & d2 must be in the same unit
    	return t2 = estimated time to travel d2 in same unit as t1
    */
    static riegel = function(t1: number, d1: number, d2) {
            if(t1 <= 0 || d1 <= 0 || d2 <= 0) {
                    return 0;
            }
            return t1 * Math.pow( (d2/d1), 1.06 );
    }

    /*
    	Cameron Running Model
    	t1 = time in seconds
    	d1 = distance in miles
    	d2 = distance in miles
    	returns t2 = estimated time to travel d2
    */
    static cameron = function(t1: number, d1: number, d2) {
    	if(t1 <= 0 || d1 <= 0 || d2 <= 0) {
                    return 0;
            }
    	let a = 13.49681 - 0.048865*d1 + 2.438936/Math.pow(d1,0.7905);
    	let b = 13.49681 - 0.048865*d2 + 2.438936/Math.pow(d2,0.7905);
    	return (t1/d1) * (a/b) * d2;
    }

  }

}
