/// <reference path="../enums.ts" />

namespace Fit {

  export namespace cardio {

    /*
    creates a new VO2 instance
    @class
    @classdesc creates a class to calculate VO2
    */
    export class VO2 {
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
      @param {Number} max is VO2max in mL/kg/hour
      @param {Number} rest is resting VO2, defaults to 3.5 mL/kg/hour
      @returns {Number} VO2Reserve in mL/kg/hour
      */
  		vo2Reserve = function(max: number, rest=3.5): number {
  			return max - rest;
  		}

      /*
        @param {Number} distance in meters ran in 12 minutes
        @returns {Number} VO2Max in mL/kg/min
      */
  		twelveMinVo2 = function(distance: number): number {
  			return 0.0268 * distance - 11.3;
  		}

      /*
      BYU Jog Test
      @description The standard error of the estimate of maximal oxygen uptake from
      the Rockport walking test is 5.0 mL O2/kg/min.
      This is about 1.0 mL O2/kg/min better than most submaximal bike,
      treadmill, or step tests.
      @param {Number} time in minutes
      @param {Number} weight in kg
      @param {Number} hr during exercise in BPM
      @returns {Number} VO2 in mL/kg/min
  		*/
  		mileSteadyJogVo2 = function(time: number, hr: number): number {
        if(this.gender === this.Gender.Female) {
  			     return 100.5 - 0.1636 * this.weight - 1.438 * time - 0.1928 * hr;
        }
        return 108.44-(0.164*this.weight) - (1.438 * time) - (0.193 * hr);
      }

      /*
      @description For speeds of 50-100 m/min (1.9-3.7 mph)
      @param {Number} mass in kg
      @param {Number} work in (kg*m)/min
      @returns {Number} Gross VO2 in mL/kg/min
  		*/
  		WalkingGrossVO2 = function(speed: number, grade: number): number {
  			return (0.1*speed) + (1.8*speed*grade) + 3.5;
  		}

      /*
      @description For speeds >134 m·min-1 (>5.0 mph).
      If truly jogging (not walking), this equations can also
      be used for speeds of 80-134 m·min-1 (3-5 mph)
      @param {Number} mass in kg
      @param {Number} work in (kg*m)/min
      @returns {Number} Gross VO2 in mL/kg/min
  		*/
  		runningGrossVO2 = function(speed: number, grade: number): number {
  			return (0.2*speed) + (0.9*speed*grade) + 3.5;
  		}

      /*
      @description For work rates between 50 and 200 W (300-1200 kgm·min-1)
      @param {Number} mass in kg
      @param {Number} work in (kg*m)/min
      @returns {Number} Gross VO2 in mL/kg/min
  		*/
  		legErgometryGrossVO2 = function(mass: number, work: number): number {
  			return 1.8 * work/mass + 3.5;
  		}

      /*
      @description For work rates between 25 and 125 W (150-750 kgm·min-1)
      @param {Number} mass in kg
      @param {Number} work in (kg*m)/min
      @returns {Number} Gross VO2 in mL/kg/min
  		*/
  		armErgometryGrossVO2 = function(mass: number, work: number): number {
  			return 3.0 * work/mass;
  		}

      /*
      @description Appropriate for stepping rates between 12 and 30
      steps/min and step heights between 0.04 m (1.6 in.) and
      0.40 m (15.7 in.)
      @param {Number} frequency in steps/min
      @param {Number} height is step height in meters
      @returns {Number} VO2 in mL/kg/min
  		*/
  		steppingVo2 = function(height: number, frequency: number): number {
  			return (frequency * 0.2) + (frequency * this.height * 1.8 * 1.33);
  		}

      /*
  		Fox (1973) single stage cycle ergometer
  		@description single workload (900kgm/min or 150W) for 5 minutes
  		measure workload after 5 minutes
      @param {Number} setting on StairMaster 4000 PT MET Value
      @returns {Number} Actual METs in kcal/kg/hour
  		*/
  		stairmasterMets = function(setting: number): number {
  			return 0.556 + 7.45 * setting;
  		}

      /*
      Uth–Sørensen–Overgaard–Pedersen VO2Max estimation
      @param {Number} HRMax in BPM
      @param {Number} HRResting in BPM
      @returns VO2Max in mL/kg/min
      */
      usopVO2Max = function(HRMax: number, HRResting): number {
        return 15.3 * (HRMax/HRResting);
      }

  		/*
  		Fox (1973) single stage cycle ergometer
  		single workload (900kgm/min or 150W) for 5 minutes
  		measure workload after 5 minutes
      @param {Number} hr5 heart rate after 5 minutes in BPM
      @returns {Number} VO2Max in mL/(kg*min)
  		*/
  		foxErgometryVo2max = function(hr5: number): number {
  			return 6300.0 - ( 19.26 * hr5 );
  		}

  		/*
  		Single Stage Treadmill Walk VO2max
  		Ebbeling and colleagues (1991)
  		used for low-risk adults 20-59 years old
      @param {Number} age in years
  		@param {Number} speed in mph
  		@param {Number} heart rate (hr) in bpm
      @returns {Number} VO2Max in mL/kg/min
  		*/
  		treadmillWalkVo2max = function(speed: number, hr: number): number {
        let age = this.dob.delta("years");
        if(this.gender === this.Gender.Female) {
  		    return 15.1+(21.8*speed)-(0.327*hr)-(0.263*age)+( 0.00504*(hr*this.age) )+(5.48*0.0);
  		  }
  			return 15.1+(21.8*speed)-(0.327*hr)-(0.263*age)+( 0.00504*(hr*this.age) )+(5.48*1.0);
  		}

  		/*
  		1 Mile Walk Test
  		Kline et al. (1987)
  		for gender field, 1 for male, 0 for female
  		@param {Number}time in minutes
      @param {Number} weight in lb
      @param {Number} Peak heart rate in BPM at the end of the last one-quarter mile
      @returns mL/(kg*min)
  		*/
  		mileWalkVo2 = function( time: number, hrPeak: number): number {
        let age = this.dob.delta("years");
  		  if(this.gender === this.Gender.Female) {
  		    return 132.853 - 0.0769*this.weight - 0.3877*age + 6.315*0.0 - 3.2649*time - 0.1565*hrPeak;
  		  }
  			return 132.853 - 0.0769*this.weight - 0.3877*age + 6.315*1.0 - 3.2649*time - 0.1565*hrPeak;
  		}

  		/*
  		1.5 mile run/walk
  		George et al. (1993)
  		@param {Number} time in minutes
      @param {Number} weight in kg
      @returns {Number} VO2max in ml/kg/min
  		*/
  		mileHalfVo2George = function(time: number): number {
  		  if(this.gender === this.Gender.Female) {
  		    return 88.02 - (0.1656*this.weight) - (2.76*time) + (3.716*0.0);
  		  }
  			return 88.02 - (0.1656*this.weight) - (2.76*time) + (3.716*1.0);
  		}

  		/*
  		# 1.5 mile run/walk
  		Larson et al (2002)
      @param {Number} time in minutes
      @param {Number} weight in kg
      @returns {Number} VO2max in ml/kg/min
  		*/
  		mileHalfVo2Larson = function(time: number, hr: number): number {
  		  if(this.gender === this.Gender.Female) {
  		    return 100.16 + (7.30*0.0) - (0.164*this.weight) - (1.273 * time) - (0.1563 * hr);
  		  }
  		  return 100.16 + (7.30*1.0) - (0.164*this.weight) - (1.273 * time) - (0.1563 * hr);
  		}

  		/*
  		Astrand Step Test
  		Marley and Linnerud (1976)
      @param hr in bpm
      @param weight in kg
      @returns {Number} VO2max in ml/kg*min
  		*/
  		stepTestAstrand = function(hr: number): number {
        if(this.gender === this.Gender.Female) {
          return 3.750*((this.weight+3)/(hr-65));
        }
  			return 3.744*((this.weight+5)/(hr-62));
  		}


  		/*
  		Queen's College Step Test
  		McArdle et al. (1972)
      @param hr in bpm
      @returns {Number} VO2max in ml/kg*min
  		*/
  		stepTestQueensCollege = function(hr: number): number {
        if(this.gender === this.Gender.Female) {
          return 65.81-(0.1847 * hr);
        }
  			return 111.33 - (0.42 * hr);
  		}


  		/*
  		Single Stage Treadmill Jog VO2max
  		George et al. (1993)
  		used for younger adults (18 - 28 years old)
  		4.3 mph < speed < 7.5 mph for men
  		client should jog at speed for 3 minutes
  		hr < 180 bpm
  		body this.weight in kg
  		speed in mph
  		hr in in bpm
  		*/
  		treadmillJoggingVo2max = function(speed: number, hr: number): number {
  		  if(this.gender === this.Gender.Female) {
  		    return 54.07-(0.1938* this.weight)-(4.47*speed)+( 0.01453*hr ) +(7.062*0.0);
  		  }
  		  return 54.07-(0.1938*this.weight)-(4.47*speed)+( 0.01453*hr ) +(7.062*1.0);
  		}


  		/*
  		Treadmill VO2 Max (Single Stage Models)
  		Client must reach steady state (130 < heart rate < 150)
  		*/
  		treadmillSubmaxVo2SingleStage = function(sm1: number, hr1: number, hrmax: number): number {
  		  if(this.gender === this.Gender.Female) {
  		    return sm1*( (hrmax-72) / (hr1-72) );
  		  }
  		  return sm1*( (hrmax-61) / (hr1-61) );
  		}

  		/*
  		Treadmill VO2 Max (MultiStage Model)
  		Client must reach steady state (115 < heart rate < 155)
  		Universal to all genders
  		*/
  		treadmillSubmaxVo2Multistage = function(sm1: number, hr1: number, sm2: number, hr2: number, hrmax: number): number {
  			let b = (sm2-sm1)/(hr2-hr1);
  			return sm2+b*(hrmax-hr2);
  		}

  		/*
  		1.0 mile run/walk (8-17 years old)
  		Cureton et al. (1995)
  		for gender field, 1 for male, 0 for female
  		use with children bwtween 8 and 17 years old
  		time in minutes
  		*/
  		mileVo2Child = function(time: number): number {
        let age = this.dob.delta("years");
  			let bmi = (this.weight/Math.pow(this.height/100, 2));
  			return 108.94 - (8.41 * time) + 0.34 * Math.pow(time,2) + 0.21*age - (0.84*bmi);
  		}

  		vo2maxBalke = function(time: number): number {
  		  /*
  		  Balke Protocol
  		  Active & Sedentary Women
  		  Pollock et al. (1982)
  		  SEE = 2.20 (mL/kg/min)
  		  */
  		  if(this.gender === this.Gender.Female) {
  		    return 1.38 * time + 5.22;
  		  }
  		  /*
  		  Active & Sedentary Men
  		  Pollock et al. (1976)
  		  SEE = 2.50 (mL/kg/min)
  		  */
  			return 1.444 * time + 14.99;
  		}

  		/*
  		Naughton Protocol
  		Male cardiac patients
  		Foster et a. (1983)
  		SEE = 2.60 (mL/kg/min)
  		*/
  		vo2maxNaughtonMale = function(time: number): number {
  			return (1.61*time) +3.60;
  		}

  		/*
  		Bruce Protocol
  		Active & Sedentary Women
  		Pollock et al. (1982)
  		SEE = 2.70 (mL/kg/min)
  		*/
  		vo2maxBruce = function(time: number, time2: number, time3: number): number {
  		  if(this.gender === this.Gender.Female) {
  		    return 4.38 * time - 3.90;
  		  }

  		  return 14.76 - 1.379*time + 0.451*time2 - 0.012*time3;
  		}



  		/*
  		Bruce Protocol
  		Cardiac patients and Elderly Persons
  		McConnell and Clark (1987)
  		SEE = 4.9 (mL/kg/min)
  		*/
  		vo2maxElderlyCardiac = function(time: number): number {
  			return (2.282*time) + 8.545;
  		}

  		/*
  		20m Shuttle Run Test
  		Leger et al. (1988)
  		Children 8-19 years old)
  		*/
  		shuttleRunVo2 = function(speed: number): number {
        let age = this.dob.delta("years");
  			return 31.025 + (3.238*speed) - (3.248*age) + 0.1536*(age*speed);
  		}

      /*
      Cooper Test for VO2Max
      @param {Number} distance in meters ran in 12 minutes
      @returns {Number} VO2Max in ml/kg/min
      */
      cooperVo2 = function(distance: number): number {
        return (distance - 504.9) /44.73;
      }

      /*
      Cooper Test for VO2Max using miles
      @param {Number} distance in miles ran in 12 minutes
      @returns {Number}  VO2Max in ml/kg/min
      */
      cooperMiles = function(distance: number): number {
        return (35.97*distance) - 11.29;
      }


  		/*
  		Daniels Gilbert Equation for VO2max
  		Daniels and Gilbert devised an equation for approximating VO2 max based on tabulated race results data.
  		@param {Number} velocity in meters/minute
  		@param {Number} time in minutes
      @returns {Number}  VO2Max in ml/kg/min
  		*/
  		gilbertGaniels = function(velocity: number, time: number): number {
  			let numerator= 0.000104*Math.pow(velocity,2)+0.182258* velocity-4.6;
  			let denominator= 0.2989558*Math.pow(Math.E, -0.1932605*time)+0.1894393*Math.pow(Math.E,-0.012778*time)+0.8;
  			return numerator/denominator;
  		}

    }

    export namespace energy {

      /*
      @description obtained from http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000960
      @param {Number} percentVO2 being exercised at
      @returns {Number} percentage carbohydrate contribute to energy when exercising at a given percent of VO2Max
      */
      function carbohydrate(percentVO2: number): number {
        return 0.565973 * Math.pow(percentVO2,2)+0.376443 * percentVO2-0.000295601;
      }

      /*
      @description obtained from http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000960
      @param {Number} percentVO2 being exercised at
      @returns {Number} percentage fat contribute to energy when exercising at a given percent of VO2Max
      */
      function fat(percentVO2: number): number {
        return -0.565973 * Math.pow(percentVO2,2)-.376443 * percentVO2+1.0003;
      }

    }

  }

}
