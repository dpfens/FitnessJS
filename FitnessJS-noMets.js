var Fit = (function() {

	/* Exercise Physiology Library
	 * Version: 0.7.0
	 * Created: March 2013
	 * Updated: Feb 22 2015
	 */

	function Cardiovascular(gender, dob, ht, wt, race) {
		this.gender = gender;
		this.dateofbirth = dob || new Date();
		this.height = ht || 1;
		this.weight = wt || 1;
		this.race = race || null;
	}

	Cardiovascular.prototype = {
		
		getAge: function() {
			var diff = new Date() - this.dateofbirth;
			return diff / 31556900000;
		},
		
		
		// Skinfold tests
		            	
		/*
		*  Fat Free Body Mass (FFM) based on impedance
		* resistance in ohms
		* ht in centimeters (cm)
		* wt in kg
		* returns fat free mass (FFM) in kg
		*/
		fatFreeMass : function(resistance, reactance) {
			resistance = parseFloat(resistance) || 0,
			reactance = parseFloat(reactance) || 0,
			gender = this.gender,
			age = this.getAge(),
			wt = this.weight,
			ht = this.height,
		    results = {};
		            		
		    /*
		    * White boys and girls, 8-15 years
		    * Lohman(1992)
		    */
		    if(age >= 8 && age <= 15) {
		    	results.child = (0.62*(Math.pow(ht,2)/resistance)) + (0.21*wt) + (0.1*reactance) + 4.2;
		    }
		            		
		    /*
		    * White boys and girls, 10-19 years
		    * Houtkooper e al. (1992)
		    */
		    if(age >= 10 && age <= 19) {
		    	results.adolescent = (0.61*(Math.pow(ht,2)/resistance)) + (0.25*wt) + 1.31;
		    	
		    }
		            		
		    if(gender === "male") { // male
		    	if(age >= 17 && age <= 62) { // Adults between 17 and 62
		    	results.adult = {
		            /*
		            * American Indian, black, Hispanic, and White Men
		            * %BF < .20 Segal et al. (1988)
		            */ 
		            lean: (0.00066360*Math.pow(ht,2)) - (0.02117 * resistance) + (0.62854*wt) - (0.12380 * age) + 9.33285,
		            /*
		            * American Indian, black, Hispanic, and White Men
		            * %BF > .20 Segal et al. (1988)
		            */ 
		            obese: (0.00088580*Math.pow(ht,2)) - (0.02999 * resistance) + (0.42688*wt) - (0.07002 * age) + 14.52435,
		    	}
		    	/*
		    	 * Male athletes 19-40 years
		    	 * Oppliger et al. (1991)
		    	 */
		    	if (age >= 19 && age <= 40) {
		    		results.athlete = (0.186*(Math.pow(ht,2)/resistance)) + (0.701*wt) + 1.949;
		    	}
		    	results.adult.average = (results.adult.lean + results.adult.obese) / 2;
		    	}
		    }
		    else if(gender === "female") {
		    	if(age >= 17 && age <= 62 && gender === 'female') { // Adults between 17 and 62
		    	results['adult'] = {
		    		/*
		    		* American Indian, black, Hispanic, and White Women
		    		* %BF < .30 Segal et al. (1988)
		    		*/ 
		    		lean: (0.000646*Math.pow(ht,2)) - (0.014 * resistance) + (0.421*wt) + 10.4,
		    		/*
		    		* American Indian, black, Hispanic, and White Women
		    		* %BF > .30 Segal et al. (1988)
		    		*/ 
		    		obese: (0.00091186*Math.pow(ht,2)) - (0.1466 * resistance) + (0.29990*wt) - (0.07012 * age) + 9.37938,
		    	};
		    	results.adult.average = (results.adult.lean + results.adult.obese) / 2;
		    	}
		    	/*
		    	 * Female athletes 18-27 years
		    	 * Fornetti et al. (1999)
		    	 */
		    	if (age >= 18 && age <=27) {
		    	results.athlete = (0.282*ht) + (0.415*wt) - (0.037*resistance) + (0.096*reactance) - 9.734;
		    	}
		    
		    }
		return results;
		},
		            		
		/****************************** Cardiovascular Assessments, Tests, and Formulas ****************************************/
		            		
		fieldTestsV02Max: function(time, distance, hr, speed) {
			gender = this.gender,
			age = this.getAge(),
			wt = this.weight,
			bmi = (this.weight/Math.pow(this.height, 2)),
			results = {};
			            	        	
			if(gender === "female") {
				gender = 0;
			} else if(gender === "male") {
				gender = 1;
			}
			            	        	
			/*
			*  20m Shuttle Run Test
			*  Leger et al. (1988)
			*  Children 8-19 years old)
			*/
			if(age && speed) {
				results.shuttle = 31.025 + (3.238*speed) - (3.248*age) + 0.1536*(age*speed);
			}
		
			/*
			* 1.0 mile run/walk (8-17 years old)
			* Cureton et al. (1995)
			* for gender field, 1 for male, 0 for female
			*/
			if(bmi && time && gender) {
				results.mileRunWalk =108.94 - (8.41 * time) + 0.34 * Math.pow(time,2) + 0.21*(age*gender) - (0.84*bmi);
			}
			if(distance) {
				/*
				 * 12 minute Run Test
			     * Cooper (1968)
			     * distance expected in meters
			     */
				results.TwelveMinuteTest = 0.0268*distance - 11.3;
				/*
			    * 15 minute run test
			    * Balke (1963)
			    * distance expected in meters 
			    */
			    results.FifteenMinuteTest = 0.0178*distance + 9.6;
			}
			            	        	
			/*
			*  1 Mile Walk Test
			*  Kline et al. (1987)
			*  for gender field, 1 for male, 0 for female
			*  
			*/
			if(age && wt && gender && time && hr) {
				results.mileWalk = 132.853 - .0769*wt - 0.3877*age + 6.315*gender - 3.2649*time - 0.1565*hr;
			}
			            	        	
			/*
			* 1.0 mile steady-state jog
			* George et al. (1993)
			*/
			if(time && hr && wt) {
				results.mileSteady = 100.5 - 0.1636 * wt - 1.438 * time - 0.1928 * hr;
				results.MileHalf = [88.02 - (0.1656*wt) - (2.76*time) + (3.716*gender),
				100.16 + (7.30*gender) - (0.164*wt) - (1.273 * time) - (0.1563 * hr)];
			}
			if(hr && wt) {
				/*
				 * Astrand Step Test
			     * Marley and Linnerud (1976)
		
			     * Queen's College Step Test
			     * McArdle et al. (1972)
			     * For gender field, 1 for male, 0 for female
			     */
			     // Male
			     if(gender ==="male") {
			    	 results.astrand = 3.744*((wt+5)/(hr-62));
			    	 results.queenscollege = 111.33 - (0.42 * hr); 
			     } // Female
			     else if(gender === "female") { 
			    	 results.astrand = 3.750*((wt-3)/(hr-65)); 
			    	 results.queenscollege = 65.81 - (0.1847 * hr); 
			     }	
			 }
			            	        	    	        	
			 return results;
		},
		            	        
		// VO2 Max
		popV02Max: function(time, time2, time3) {
			time = parseFloat(time),
			time2 = parseFloat(time2) || 0,
			time3 = parseFloat(time3) || 0;
			results = {
				male: {
					/*
			            * Active & Sedentary Men
			            * Pollock et al. (1976)
			            * SEE = 2.50 (mL/kg/min)
			            */
			            balke: 1.444 * time + 14.99,
			            /*
			            * Naughton Protocol
			            * Male cardiac patients
			            * Foster et a. (1983)
			            * SEE = 2.60 (mL/kg/min)
			            */
			            naughton: (1.61*time) +3.60, 
			       },
			       female: {
			    	   /*
			    	    * Balke Protocol
			            * Active & Sedentary Women
			            * Pollock et al. (1982)
			            * SEE = 2.20 (mL/kg/min)
			            */
			            balke: 1.38 * time + 5.22,
			            /*
			            * Bruce Protocol
			            * Active & Sedentary Women
			            * Pollock et al. (1982)
			            * SEE = 2.70 (mL/kg/min)
			            */
			            bruce: 4.38 * time - 3.90,
			       },
			       /*
			       * Bruce Protocol
			       * Cardiac patients and Elderly Persons
			       * McConnell and Clark (1987)
			       * SEE = 4.9 (mL/kg/min)
			       */
			       elderlycardiac: (2.282*time) + 8.545,
			  };
			  if (time2 && time3) {
				  /*
			      * Bruce Protocol
			      * Active & Sedentary Men
			      * Foster et al. (1984)
			      * SEE = 3.35 (mL/kg/min)
			      */
			      results.male.bruce = 14.76 - 1.379*time + 0.451*time2 - 0.012*time3;
			  }
			  return results;
		},
		            	        
		/*
		* Walking VO2
		* speed of treadmill in meters / minute
		* grade (% incline) of treadmill in decimal form (e.g. 10% = 0.10) 
		*/
		walkingVO2: function(speed, grade) {
			return (speed * 0.1) + (1.8 * speed * grade);
		},
		/*
		* Running VO2
		* speed of treadmill in meters / minute
		* grade (% incline) of treadmill in decimal form (e.g. 10% = 0.10) 
		*/
		runningVO2: function(speed, grade) {
			return (speed * 0.2) + (speed * grade * 0.9);
		},
		            	        
		/* Leg Ergometry VO2
		* work rate in kgm / min; 1 Watt = 6 kgm / min
		* body mass in kilograms; 1 kg = 2.2 lb
		*/
		legErgometryVO2: function(work, mass) {
			var mass= this.weight;
			return work/mass * 1.8 + 3.5;
		},
		            	        
		/* Arm Ergometry VO2
		* work rate in kgm / min; 1 Watt = 6 kgm / min
		* body mass in kilograms; 1 kg = 2.2 lb
		*/
		armErgometryVO2: function(wor55k) {
			var mass= this.weight;
			return work/mass * 3.0;
		},
		            	        
		/* Stepping VO2
		* frequency of stepping in steps per minute
		* bench ht in meters; 1 inch = 0.0254 meters
		*/
		SteppingVO2: function(frequency, ht) {
			return frequency * 0.2 + frequency * ht * 1.8 * 1.33;
		},
		            	        
		// Submaximal Tests
		            	        
		/*
		* VO2 Reserve
		* max is Max VO2
		* rest is Resting VO2
		* reserve and rest must be of same unit type (METs or mL/kg/min)
		* 1 MET = 3.5 mL/kg/min
		*/
		vO2Reserve: function(max, rest) {
			data = max - rest;
			return data;
		},
		            	        
		/*
		* Target VO2 
		* intensity as relative exercise percentage (e.g. 10% = 0.10)
		* reserve is Reserve VO2
		* rest is Resting VO2
		* reserve and rest must be of same unit type (METs or mL/kg/min)
		* 1 MET = 3.5 mL/kg/min
		*/
		targetVO2: function(intensity, reserve, rest) {
			data = (intensity * reserve) + rest;
			return data;
		},
		            	        
		// HR Max
		heartRateMax: function() {
			age = this.getAge();
			data = 208 - (0.7 * age);
			return data;
		},
		            	        
		/*
		* Target Heart Rate
		* intensity as relative exercise percentage (e.g. 10% = 0.10)
		* ACSM (2010) recommendati using 40% to 85% Hear Rate Reserve (HRR) for intensity
		* rest is resting heart rate
		* max is maximum heart rate
		* max and rest must be of same unit type
		*/
		targetHeartRate: function(intensity, rest, max) {
			data = (intensity * (max - rest)) + rest;
			return data;
		},
		            	        
		// Device Specific Formulas
		            	        
		/*
		* Accurate StairMaster 4000 PT METs
		* setting is the Stairmaster MET setting
		*/
		stairMasterMets: function(setting) {
			return 0.556 + 7.45 * setting
		},
		            	        
		/*
		 * Tidal Volume (TV = IC - IRV)
		 * Inspiratory Reserve Volume (IRV = ERV + TV - VC)
		 * Expiratory Reserve Volume (ERV = FRC - RV) 
		 * Residual Volume (RV)
		 * age in years
		 * bsa in meters squared ( body surface area for females) or kilograms (body mass for males)
		*/ 
		residualVolume: function(bsa) {
			gender = this.gender,
			age = this.getAge(),
			ht = this.height,
			wt = this.weight,
			bsa = bsa || 0,
			data = {};
			if(gender === "male") {
				data = {
				Berglund: (0.0115*age) + (0.019* ht) - 2.24,
				Boren: (0.022*age) + (0.0198*ht) - (0.015*wt) - 1.54,
				Goldman: (0.017*age) + (0.027*ht) - 3.477,
				}
			}
			else if(gender === "female") {
				data = {
				Berglund: (0.0115*age) + (0.019* ht) - 2.24,
				Black: (0.021*age) + (0.023*ht) - 2.978,
				Goldman: (0.017*age) + (0.027*ht) - 3.477,
				}
				if (bsa) {
					data.Obrien = (0.03*age) + (0.0387*ht) - (0.73*bsa) - 4.78
				}
			}
			return data;
		},   
		
		// Vital Capacity (VC = ERB + TV + IRV)
		// Inspiratory Capacity (IC = TV + IRV)
		// Functional Residual Capacity (FRC = RV + ERV)
		// Total Lung Capacity (TLC = RV + VC)
		totalLungCapacity: function(rv,vc) {
			rv = parseFloat(rv) || 1300, vc = parseFloat(vc) || 4700;       	        	
			return rv + vc;
		},
		
	}

	// PT Muscular Module
	function Muscle(gender, dob, ht, wt, race) {
		this.gender = gender;
		this.dateofbirth = dob;
		this.weight = wt;
		this.height = ht;
		this.race = race;
	}

	Muscle.prototype = {
		
		getAge: function() {
			var diff = new Date() - this.dateofbirth;
			return diff / 31556900000;
		},
		
		
			
		isMuscleBalanced: function( group, rm1, rm2) {
			rm1 = parseFloat(rm1), rm2 = parseFloat(rm2)
			var ratio = rm1/rm2,
			balanceratios = {
				hip: 1,
				elbow: 1,
				trunk: 1,
				ankle: 1,
				shoulders: (2/3),
				knee: 1.5,
				shoulderrotation: 1.5,
				ankleflexion: 3
		};
			if(ratio > 0.9 * balanceratios[group] || ratio < 1.1 * balanceratios[group]) {
				return true;
			} else {
				return false;
			}
		},
		
	      /******************* Muscle Balance and RM *****************/
	        
		/*
		* 1-RM Formula
		* Based on number of repetitions to fatigue in one set
		* wt is the wt lifted in lb
		*/
		fatigueRepMaximum: function(reps, wt) {
			data = wt / (1.0278 - (reps * 0.0278));
			return data;
		},
		            		
		/*
		* 1-RM Formula
		* Based on the number of repetitions to fatigue obtained in two submaximal sets so long as number of reps is under 10
		* wt1 and wt2 must be of same unit (kg or lb)
		*/
		twoSetMaximum : function(rep1, wt1, rep2, wt2) {
			rep1 = parseFloat(rep1) || 1,
			wt1 = wt1 || 1,
			rep2 = parseFloat(rep2) || 1,
			wt2 = wt2 || 1,
			data = 0;
			data = ((wt1 - wt2)/(rep2 - rep1)) * (rep1 - 1) + wt1;
			return data;
		},
		            		
		/*
		*  gender-specific 1-RM Formula for Younger adults (22 - 36 years old)
		*  Kim, Mayhew, and Peterson (2002)
		*  return value in kg
		*  For gender field, 1 for male, 0 for female
		*/
		YMCAUpperBodyRepMax : function(reps) {
			gender = this.gender;
			reps = parseFloat(reps) || 0,
			data = 0;
			if (gender === "male") {
				data = (1.55 * reps) + 37.9; // male
			} else if(gender === "female") {
				data = (0.31 * reps) + 19.2; // female
			}
			return data;
		},
		            		
		/*
		* Relative Strength
		* rm is 1-Rep Maximum
		* wt is the body mass of the individual
		* rm and wt must be of the same unit (kg or lbs)
		*/
		relativeStrength: function(rm) {
			return rm / this.weight;
		},

		/*
		* Middle Age (40-50 years old) & Older adult (60-70 years old) 1-RM
		* Kuramoto & Payne (1995)
		*/
		femaleRepMax: function(reps, wt) {
			age = this.getAge(),
			data = 0;
			if (age >= 40 && age <= 50) {
				data = (1.06 * wt) + (0.58 * reps) - (0.20 * age) - 3.41;
			} else if(age >= 60 && age <= 70) {
				data = (0.92 * wt) + (0.79 * reps) - (0.20 * age) - 3.73;
			}
			return data;
		},
	}

	function Person(name, gender, dob, wt, ht, race) {
		this.name = name || "John Doe";
		this.gender = gender;
		this.dateofbirth = dob || new Date();
		this.weight = parseFloat(wt) || 1;
		this.height = parseFloat(ht) || 1;
		this.race = race || null;
		this.cardio = new Cardiovascular(gender, this.dateofbirth, this.height, this.weight, race);
		this.muscle = new Muscle(gender, this.dateofbirth, this.height, this.weight, race);
	};

	Person.prototype = {
			
		getAge: function() {
			var diff = new Date() - this.dateofbirth;
			return diff / 31556900000;
		},
		
		
		/****************************** Body Composition ****************************************/
		
		
		/*
		* Net Caloric Cost
		* Mets must be in MET form (not mL/kg/min)
		*/
		netCaloricCost : function(mets) {
			wt = this.weight,
			data = mets * 3.5 * (wt/200);
			return data;
		},
		               	
		bmiToBodyFat : function() {
			gender = this.gender,
			age = this.getAge(),
			bmi = (this.weight/Math.pow(this.height/100, 2));
			if(gender === "male") { // male
				gender = 1;
			} else if (gender === "female") { // male
				gender = 0;
			}
			data = {
				child: ((1.51*bmi) - (0.70*age) - (3.6*gender) + 1.4) / 100,
				adult: ((1.20*bmi) - (0.23*age) - (10.8*gender) - 5.4) / 100
				}
			return data;
		},
		            	
		/*
		* Population-specific Formulas for converting Body Density (Db) to Percent Body Fat (%BF) 
		*/
		dbToBodyFat : function(bd) {
			bd = parseFloat(bd) || 0,
			data = {
				// Brozek and colleagues (1963)
				Brozek: (4.57/bd)-4.142,
				// Siri (1961)
				Siri: (4.95/bd)-4.50
			};
		    return data;
		},
		            	
		/*
		* Skinfold tests
		*/
		skinfoldDb : function (sum) {
			sum = parseFloat(sum) || 0,
			age = this.getAge(),
			data = {};
			if(this.gender === "male" ) { // male
			data = {
				// Jackson and Pollock (1978)
				black: 1.112 - (0.00043499*sum) + (0.00000055*Math.pow(sum, 2)) - (0.00028826*age),
				// Jackson and Pollock (1978)
				white: 1.10938 - (0.0008267*sum) + (0.0000016*Math.pow(sum, 2)) - (0.0002574*age),
				// Jackson and Pollock (1978)
				athlete: 1.112 - (0.00043499*sum) + (0.00000055*Math.pow(sum, 2)) - (0.00028826*age),
				// Evans et al. (2005)
				collegiateathlete: {
					black: 8.997 + (0.2468*sum) - (6.343 * 1) - (1.998),
					white: 8.997 + (0.2468*sum) - (6.343 * 1),
				},
				// Slaughter et al. (1988)
				child: (0.735*sum) + 1.0
				}
			} else if(this.gender === "female") {
			data = {
				// Jackson et al(1980)
				blackhispanic: 1.0970 - (0.00046971*sum) + (0.00000056*Math.pow(sum, 2)) - (0.00012828*age),
				// Jackson et al. (1980)
				whiteanorexic: 1.0994921 - (0.0009929*sum) + (0.0000023*Math.pow(sum, 2)) - (0.00001392*age),
				// Jackson et al. (1980)
				athlete: 1.096095 - (0.0006952*sum) + (0.0000011*Math.pow(sum, 2)) - (0.0000714*age),
				// Evans et al. (2005)
				collegiateathlete: {
					black: 8.997 + (0.2468*sum) - (1.998),
					white: 8.997 + (0.2468*sum),
				},
				// Slaughter et al. (1988)
				child: (0.610*sum) + 5.1
			}
			}
			return data;
		},
		
		/*
		* calculate Body Density at TLCNS
		*/
		dbAtTLCNS : function(bd) {
			bd = parseFloat(bd) || 0;
			gender = this.gender,
			data=0;
			if(gender === "female") {
			data = 0.4745*bd + 0.5173;
			}
			else if(gender === "male") {
			data = 0.5829*bd+0.4059;
			}
			return data;
		},
		            	
		/*
		* ulation of body surface area in Meters^2
		* wt in kilogams (kg)
		* ht in centimeters (cm)
		*/
		bodySurfaceArea : function() {
			wt = this.weight,
			ht = this.height;
		    data = { 
		    	Boyd: 0.03330 * Math.pow(wt,(0.7285-0.0188*Math.log(wt)))*Math.pow(ht,0.3),
		    	Costeff: (4*wt+7)/(90+wt),
		        DuBois: 0.0087184 * Math.pow(wt,0.425) * Math.pow(ht,0.725),
		        Fujimoto: 0.008883 * Math.pow(wt, 0.444) * Math.pow(ht, 0.663),
		        GehanGeorge: 0.0235 * Math.pow(wt, 0.51456) * Math.pow(ht, 0.42246),
		        Haycock: 0.024265 * Math.pow(wt, 0.5378) * Math.pow(ht, 0.3964),
		        Mosteller: Math.sqrt(wt*ht)/60,
		        Takahira: 0.007241 * Math.pow(wt, 0.425) * Math.pow(ht,0.725) 
		    };
		    return data;
		},
		            	
		/*
		* Body volume calculation from hydrostatic weighing
		* uww is Underwater wt
		* rv is Residual Volume in mL
		* gv is Volume of air in gastrointestinal tract (GV) (default: 100mL)
		 */
		bodyVolume : function(uww, rv, gv, wd) {
		    wt = this.weight,
		    gv = gv || 0.1,
		    wd = parseFloat(wd) | 1,
		    data = ((wt-uww)/wd)-(rv+gv);
		    return data;
		},
		
		/*
		* Resting Metabolic Rate
		* wt in kg, ht in cm, age in years
		*/
		restingMetabolicRate : function() {
			gender = this.gender;
			age = this.getAge(),
			wt = this.weight,
			ht = this.height;
			if(gender ==="male") {
				data = {'Harris-Benedict': 66.473 + 13.751*wt + 5.0033*ht - 6.755*age,'Mifflin': (9.99*wt + 6.25*ht + - 4.92*age)+5} // male
			} else if(gender === "female") {
				data = {'Harris-Benedict': 655.0955 + 9.463*wt + 1.8496*ht - 4.6756*age,'Mifflin': (9.99*wt + 6.25*ht + - 4.92*age)-161}// female
		    }
			return data;
		},
		            	
		/*
		* Total Daily Energy Expenditure of Children and Adults
		* age in years
		* wt in kilograms (kg)
		* ht in meters
		* returns object with sedentary (1.0 < PAL < 1.4), low activity (1.4 < PAL < 1.6), active (1.6 < PAL < 1.9), and very active (1.9 < PAL < 2.5)
		* 
		*/
		predictedTEE : function() {
			gender =  this.gender;
			age = this.getAge(),
			wt = this.weight,
			ht = this.height /100,
			data = {};
		    if(gender === "male") { // male
		    	if (age >= 3 && age <= 18) {
		    	data = {
		    		sedentary: 88.5 - (61.9 * age) + 1*((26.7*wt)+(903*ht)),
		    		low: 88.5 - (61.9 * age) + 1.13*((26.7*wt)+(903*ht)),
		    		active: 88.5 - (61.9 * age) + 1.26*((26.7*wt)+(903*ht)),
		    		veryactive: 88.5 - (61.9 * age) + 1.42*((26.7*wt)+(903*ht)),
		           }
		    	}
		    	else if (age >= 19) {
		    	data = {
		    		sedentary: 662 - (9.53 * age) + 1*((15.9*wt)+(540*ht)),
		    		low: 662 - (9.53 * age) + 1.11*((15.9*wt)+(540*ht)),
		    		active: 662 - (9.53 * age) + 1.25*((15.9*wt)+(540*ht)),
		    		veryactive: 662 - (9.53 * age) + 1.48*((15.9*wt)+(540*ht)),
		            }
		        }
		    } else if(gender === "female") {
		    	if (age >= 3 && age <= 18) {
		    	data = {
		    		sedentary: 135.3 - (30.8 * age) + 1*((10*wt)+(934*ht)),
		    		low: 135.3 - (30.8 * age) + 1.16*((10*wt)+(934*ht)),
		    		active: 135.3 - (30.8 * age) + 1.31*((10*wt)+(934*ht)),
		    		veryactive: 135.3 - (30.8 * age) + 1.56*((10*wt)+(934*ht)),
		    	}
		    	}
		    	else if (age >= 19) {
		    	data = {
		    		sedentary: 354 - (6.91 * age) + 1*((9.36*wt)+(726*ht)),
		    		low: 662 - (9.53 * age) + 1.12*((15.9*wt)+(540*ht)),
		    		active: 662 - (9.53 * age) + 1.27*((15.9*wt)+(540*ht)),
		    		veryactive: 662 - (9.53 * age) + 1.45*((15.9*wt)+(540*ht)),
		    	}
		    	}
		    }
		    return data;
		},
		
	}
	
	return {
		Person: Person,
		Cardiovascular: Cardiovascular,
		Muscle: Muscle,
	}
	
})();