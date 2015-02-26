$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var docs = [
	{
	 name: "Person",
	 description: "",
	 arguments: [{
		 name: "name",
		 type: "string",
	 },
	 {
		 name: "gender",
		 type: "string",
	 },
	 {
		 name: "dob",
		 type: "date",
		 
	 },
	 {
		 name: "weight",
		 type: "string",
		 units: "kg"
	 },
	 {
		 name: "height",
		 type: "string",
		 units: "cm"
	 },
	 {
		 name: "race",
		 type: "string",
	 }],
	 methods: [{
		 name: "getAge",
		 arguments: [],
		 val: "years",
		 description: "",
		 equations: [],
		 example: "",
	 },
	 {
		 name: "bmiToBodyFat",
		 arguments: [],
		 val: "",
		 description: "",
		 equations: [
			{
				name: "child",
				val: "((1.51*bmi) - (0.70*age) - (3.6*gender) + 1.4) / 100",
				source: ""
			},
			{
				name: "adult",
				val: "((1.20*bmi) - (0.23*age) - (10.8*gender) - 5.4) / 100",
				source: ""
			}
		 ],
		 example: "",
	 },
	 {
		 name: "bodySurfaceArea",
		 arguments: [{
		 }],
		 val: "m<sup>3</sup>",
		 description: "",
		 equations: [
			{
				name: "Boyd",
				val: "0.03330 * Math.pow(wt,(0.7285-0.0188*Math.log(wt)))*Math.pow(ht,0.3)",
				source: ""
			},
			{
				name: "Costeff",
				val: "(4*wt+7)/(90+wt)",
				source: ""
			},
			{
				name: "DuBois",
				val: "0.0087184 * Math.pow(wt,0.425) * Math.pow(ht,0.725)",
				source: ""
			},
			{
				name: "Fujimoto",
				val: "0.008883 * Math.pow(wt, 0.444) * Math.pow(ht, 0.663)",
				source: ""
			},
			{
				name: "GehanGeorge",
				val: "0.0235 * Math.pow(wt, 0.51456) * Math.pow(ht, 0.42246)",
				source: ""
			},
			{
				name: "Haycock",
				val: "0.024265 * Math.pow(wt, 0.5378) * Math.pow(ht, 0.3964)",
				source: ""
			},
			{
				name: "Mosteller",
				val: "Math.sqrt(wt*ht)/60",
				source: ""
			},
			{
				name: "Takahira",
				val: "0.007241 * Math.pow(wt, 0.425) * Math.pow(ht,0.725)",
				source: ""
			},
		 ],
		 example: "",
	 },
	 {
		 name: "bodyVolume",
		 arguments: [{
			 name: "underwaterweight",
			 units: "mL"
		 	},
		 	{
				 name: "residualvolume",
				 units: "mL"
			 },
			 {
				 name: "gastrointestinalvolume",
				 units: "mL"
			 },
			 {
				 name: "waterdensity",
				 units: "g/mL"
			 },
		 ],
		 val: "m<sup>3</sup>",
		 description: "",
		 equations: [
			{
				name: "child",
				val: "((1.51*bmi) - (0.70*age) - (3.6*gender) + 1.4) / 100",
				source: ""
			},
			{
				name: "adult",
				val: "((1.20*bmi) - (0.23*age) - (10.8*gender) - 5.4) / 100",
				source: ""
			}
		 ],
		 example: "",
	 },
	 {
		 name: "dbToBodyFat",
		 arguments: [{
			 name: "bodydensity",
			 units: "g/mL"
		 }],
		 val: "%",
		 description: "",
		 equations: [
		 	{
		 		name: "Brozek",
		 		val: "(4.570/bd)-4.142",
		 		source: ""
		 	},
		 	{
		 		name: "Siri",
		 		val: "(4.95/bd)-4.50",
		 		source: ""
		 	}
		 ],
		 example: "",
	 },
	 {
		 name: "dbAtTLCNS",
		 arguments: [{
			 name: "bodydensity",
			 units: "g/mL"
		 }],
		 val: "g/mL",
		 description: "",
		 equations: [
		 	{
		 		name: "male",
		 		val: "0.5829*bd+0.4059",
		 		source: ""
		 	},
		 	{
		 		name: "female",
		 		val: "0.4745*bd + 0.5173",
		 		source: ""
		 	},
		 ],
		 example: "",
	 },
	 {
		 name: "netCaloricCost",
		 arguments: [{
			 name: "mets",
			 units: "METs"
		 }],
		 val: "kcal",
		 description: "",
		 equations: [
		 	{
		 		name: "child",
		 		val: "((1.51*bmi) - (0.70*age) - (3.6*gender) + 1.4) / 100",
		 		source: ""
		 	},
		 	{
		 		name: "adult",
		 		val: "((1.20*bmi) - (0.23*age) - (10.8*gender) - 5.4) / 100",
		 		source: ""
		 	},
		 ],
		 example: "",
	 },
	 {
		 name: "predictedTEE",
		 arguments: [],
		 val: "kcal",
		 description: "",
		 equations: [
		 	{
		 		name: "sedentary",
		 		val: "",
		 		source: ""
		 	},
		 	{
		 		name: "low",
		 		val: "",
		 		source: ""
		 	},
		 	{
		 		name: "active",
		 		val: "",
		 		source: ""
		 	},
		 	{
		 		name: "veryactive",
		 		val: "",
		 		source: ""
		 	},
		 ],
		 example: "",
	 },
	 {
		 name: "restingMetabolicRate",
		 arguments: [],
		 val: "kcal/day",
		 description: "",
		 equations: [
		 	{
		 		name: "Harris-Benedict",
		 		val: "",
		 		source: ""
		 	},
		 	{
		 		name: "Mifflin",
		 		val: "",
		 		source: ""
		 	},
		 ],
		 example: "",
	 },
	 {
		 name: "skinfoldDb",
		 arguments: [{
			 name: "sum",
			 units: "mm"
		 }],
		 val: "%",
		 description: "",
		 equations: [
		 	{
		 		name: "black",
		 		source: ""
		 	},
		 	{
		 		name: "white",
		 		source: ""
		 	},
		 	{
		 		name: "athlete",
		 		source: ""
		 	},
		 	{
		 		name: "collegeathlete",
		 		source: ""
		 	},
		 	{
		 		name: "child",
		 		source: ""
		 	},
		 ],
		 example: "",
	 },
	 ],
	},
	{
		 name: "Cardiovascular",
		 description: "",
		 arguments: [{
			 name: "gender",
			 type: "string",
		 },
		 {
			 name: "dob",
			 type: "date",
			 
		 },
		 {
			 name: "weight",
			 type: "string",
			 units: "kg"
		 },
		 {
			 name: "height",
			 type: "string",
			 units: "cm"
		 },
		 {
			 name: "race",
			 type: "string",
		 }],
		 methods: [{
			 name: "getAge",
			 arguments: [],
			 val: "years",
			 description: "",
			 equations: [],
			 example: "",
		 },
		 {
			 name: "fatFreeMass",
			 arguments: [{
				 name: "resistance",
				 units: "ohms"
			 	},
			 	{
				 name: "reactance",
				 units: "ohms"
			 	},
			 ],
			 val: "kg",
			 description: "",
			 equations: [
				{
					name: "child",
					val: "(0.62*(Math.pow(ht,2)/resistance)) + (0.21*wt) + (0.1*reactance) + 4.2",
					source: "Segal et al. (1980)"
				},
				{
					name: "adult",
					source: "Segal et al. (1980)"
				},
				{
					name: "athlete",
					source: ""
				}
			 ],
			 example: "",
		 },
		 {
			 name: "fieldTestsV02Max",
			 arguments: [
			    {
				 name: "time",
				 units: "seconds"
			 	},
			 	{
				 name: "hr",
				 units: "bpm"
			 	},
			 	{
					 name: "speed",
					 units: "m/s"
				},
			 ],
			 val: "mL/kg/min",
			 description: "",
			 equations: [
				{
					name: "20m Shuttle Run Test",
					val: "31.025 + (3.238*speed) - (3.248*age) + 0.1536*(age*speed)",
					source: "Leger et al. (1988)"
				},
				{
					name: "1.0 mile run/walk",
					val: "108.94 - (8.41 * time) + 0.34 * Math.pow(time,2) + 0.21*(age*gender) - (0.84*bmi)",
					source: "Cureton et al. (1995)"
				},
				{
					name: "12 minute Run Test",
					val: "0.0268*distance - 11.3",
					source: "Cooper (1968)"
				},
				{
					name: "15 minute run test",
					val: "0.0178*distance + 9.6",
					source: "Balke (1963)"
				},
				{
					name: "1 Mile Walk Test",
					val: "132.853 - .0769*wt - 0.3877*age + 6.315*gender - 3.2649*time - 0.1565*hr",
					source: "Kline et al. (1987)"
				},
				{
					name: "1 Mile steady-state jog",
					val: "100.5 - 0.1636 * wt - 1.438 * time - 0.1928 * hr",
					source: "George et al. (1993)"
				},
				{
					name: "Astrand Step Test",
					source: "Marley and Linnerud (1976)"
				},
				{
					name: "Queen's College Step Test",
					source: "McArdle et al. (1972)"
				},
			 ],
			 example: "",
		 },
		 {
			 name: "popV02Max",
			 arguments: [{
				 name: "time",
				 units: "seconds"
			 	},
			 	{
					 name: "time2",
					 units: "seconds"
				 },
				 {
					 name: "time3",
					 units: "seconds"
				 },
			 ],
			 val: "mL/kg/min",
			 description: "",
			 equations: [
				{
					name: "Naughton Protocol: Male cardiac patients",
					val: "(1.61*time) +3.60",
					source: "Foster et a. (1983)"
				},
				{
					name: "Balke Protocol: Active & Sedentary Men",
					val: "1.444 * time + 14.99",
					source: "Pollock et al. (1976)"
				},
				{
					name: "Bruce Protocol: Active & Sedentary Men",
					val: "14.76 - 1.379*time + 0.451*time2 - 0.012*time3",
					source: "Foster et al. (1984)"
				},
				{
					name: "Balke Protocol: Active & Sedentary Women",
					val: "1.38 * time + 5.22",
					source: "Pollock et al. (1982)"
				},
				{
					name: "Bruce Protocol: Active & Sedentary Women",
					val: "4.38 * time - 3.90",
					source: "Pollock et al. (1982)"
				},
				{
					name: "Bruce Protocol: Cardiac patients and Elderly Persons",
					val: "(2.282*time) + 8.545",
					source: "McConnell and Clark (1987)"
				}
			 ],
			 example: "",
		 },
		 {
			 name: "walkingVO2",
			 arguments: [{
				 name: "speed",
				 units: "m/min"
			 },
			 {
				 name: "grade",
				 units: "%"
			 }],
			 val: "mL/kg/min",
			 description: "",
			 equations: [
			 	{
			 		name: "walking VO2",
			 		val: "(speed * 0.1) + (1.8 * speed * grade)",
			 		source: ""
			 	},
			 ],
			 example: "",
		 },
		 {
			 name: "runningVO2",
			 arguments: [{
				 name: "speed",
				 units: "m/min"
			 },
			 {
				 name: "grade",
				 units: "%"
			 }],
			 val: "mL/kg/min",
			 description: "",
			 equations: [
			 	{
			 		name: "running VO2",
			 		val: "(speed * 0.2) + (speed * grade * 0.9)",
			 		source: ""
			 	},
			 ],
			 example: "",
		 },
		 {
			 name: "legErgometryVO2",
			 arguments: [{
				 name: "work",
				 units: "kgm / min"
			 }],
			 val: "mL/kg/min",
			 description: "",
			 equations: [
			 	{
			 		name: "Leg Ergometry VO2",
			 		val: "work/mass * 1.8 + 3.5",
			 		source: ""
			 	},
			 ],
			 example: "",
		 },
		 {
			 name: "armErgometryVO2",
			 arguments: [{
				 name: "work",
				 units: "kgm / min"
			 }],
			 val: "mL/kg/min",
			 description: "",
			 equations: [
			 	{
			 		name: "Arm Ergometry VO2",
			 		val: "work/mass * 3.0",
			 		source: ""
			 	},
			 ],
			 example: "",
		 },
		 {
			 name: "steppingVO2",
			 arguments: [{
				 name: "frequency",
				 units: "steps/minute"
			 },
			 {
				 name: "ht",
				 units: "meters"
			 }],
			 val: "mL/kg/min",
			 description: "",
			 equations: [
			 	{
			 		name: "Arm Ergometry VO2",
			 		val: "frequency * 0.2 + frequency * ht * 1.8 * 1.33",
			 		source: ""
			 	},
			 ],
			 example: "",
		 },
		 {
			 name: "vO2Reserve",
			 arguments: [{
				 name: "vO2max",
				 units: "mL/kg/min"
			 },
			 {
				 name: "VO2rest",
				 units: "mL/kg/min"
			 }],
			 val: "mL/kg/min",
			 description: "",
			 equations: [
			 	{
			 		name: "VO2 Reserve",
			 		val: "VO2max - VO2rest",
			 		source: ""
			 	},
			 ],
			 example: "",
		 },
		 {
			 name: "targetVO2",
			 arguments: [{
				 name: "intensity",
				 units: "%"
			 },
			 {
				 name: "vO2max",
				 units: "mL/kg/min"
			 },
			 {
				 name: "VO2rest",
				 units: "mL/kg/min"
			 }
			 ],
			 val: "%",
			 description: "",
			 equations: [
			 	{
			 		name: "targetVO2",
			 		val: "(intensity * reserve) + rest",
			 		source: ""
			 	},
			 ],
			 example: "",
		 },
		 {
			 name: "heartRateMax",
			 arguments: [],
			 val: "bpm",
			 description: "",
			 equations: [{
				 val: "208 - (0.7 * age)",
			 }],
			 example: "",
		 },
		 {
			 name: "stairMasterMets",
			 arguments: [{
				 name: "setting",
				 units: "MET"
			 },
			 ],
			 val: "METs",
			 description: "",
			 equations: [{
				 val: "0.556 + 7.45 * setting",
			 }],
			 example: "",
		 },
		 {
			 name: "residualVolume",
			 arguments: [{
				 name: "bodysurfacearea",
				 units: "m<sup>3</sup>"
			 },
			 ],
			 val: "METs",
			 description: "",
			 equations: [
			     {
			    	 name: "Berglund",
			    	 val: "(0.0115*age) + (0.019* ht) - 2.24",
			    	 source: ""
			     },
			     {
			    	 name: "Black",
			    	 val: "(0.021*age) + (0.023*ht) - 2.978",
			    	 source: ""
			     },
			     {
			    	 name: "Boren",
			    	 val: "(0.022*age) + (0.0198*ht) - (0.015*wt) - 1.54",
			    	 source: ""
			     },
			     {
			    	 name: "Goldman",
			    	 val: "(0.017*age) + (0.027*ht) - 3.477",
			    	 source: ""
			     },
			     {
			    	 name: "Obrien",
			    	 val: "(0.03*age) + (0.0387*ht) - (0.73*bsa) - 4.78",
			    	 source: ""
			     },
			 ],
			 example: "",
		 },
		 {
			 name: "targetHeartRate",
			 arguments: [{
				 name: "intensity",
				 units: "%"
			 },
			 {
				 name: "hrmax",
				 units: "bpm"
			 },
			 {
				 name: "hrrest",
				 units: "bpm"
			 }
			 ],
			 val: "bpm",
			 description: "",
			 equations: [{
				 val: "(intensity * (max - rest)) + rest",
			 }],
			 example: "",
		 },
		 {
			 name: "totalLungCapacity",
			 arguments: [{
				 name: "residualvolume",
				 units: "mL"
			 },
			 {
				 name: "vitalcapacity",
				 units: "bpm"
			 },
			 ],
			 val: "bpm",
			 description: "",
			 equations: [{
		    	 name: "Obrien",
		    	 val: "rv + vc",
		    	 source: ""
		     },],
			 example: "",
		 },
		 ],
		},
		{
			 name: "Muscle",
			 description: "",
			 arguments: [{
				 name: "gender",
				 type: "string",
			 },
			 {
				 name: "dob",
				 type: "date",
				 
			 },
			 {
				 name: "weight",
				 type: "string",
				 units: "kg"
			 },
			 {
				 name: "height",
				 type: "string",
				 units: "cm"
			 },
			 {
				 name: "race",
				 type: "string",
			 }],
			 methods: [{
				 name: "getAge",
				 arguments: [],
				 val: "years",
				 description: "",
				 equations: [],
				 example: "",
			 },
			 {
				 name: "isMuscleBalanced",
				 arguments: [{
					 name: "group",
					 units: "ohms"
				 	},
				 	{
					 name: "rm1",
					 units: "kg/lb"
				 	},
				 	{
						 name: "rm2",
						 units: "kg/lb"
					},
				 ],
				 val: "Boolean",
				 description: "",
				 equations: [
				 ],
				 example: "",
			 },
			 {
				 name: "fatigueRepMaximum",
				 arguments: [
				    {
					 name: "reps",
					 units: "number of repetitions"
				 	},
				 	{
					 name: "weight",
					 units: "lb"
				 	},
				 ],
				 val: "lb",
				 description: "",
				 equations: [
					{
						name: "",
						val: "wt / (1.0278 - (reps * 0.0278))",
						source: ""
					},
				 ],
				 example: "",
			 },
			 {
				 name: "femaleRepMax",
				 arguments: [{
					 name: "reps",
					 units: "number of repetitions"
				 	},
				 	{
					 name: "weight",
					 units: "kg"
				 	},
				 ],
				 val: "kg",
				 description: "",
				 equations: [
					{
						name: "Middle Age (40-50 years old)",
						val: "(1.06 * wt) + (0.58 * reps) - (0.20 * age) - 3.41",
						source: "Kuramoto & Payne (1995)"
					},
					{
						name: "Older adult (60-70 years old)",
						val: "(0.92 * wt) + (0.79 * reps) - (0.20 * age) - 3.73",
						source: "Kuramoto & Payne (1995)"
					},
				 ],
				 example: "",
			 },
			 {
				 name: "twoSetMaximum",
				 arguments: [{
					 name: "rep1",
					 units: "number of repetitions"
				 },
				 {
					 name: "weight1",
					 units: "kg/lb"
				 },
				 {
					 name: "rep2",
					 units: "number of repetitions"
				 },
				 {
					 name: "weight2",
					 units: "kg/lb"
				 }],
				 val: "kg/lb",
				 description: "",
				 equations: [
				 	{
				 		name: "twoSetMaximum",
				 		val: "((wt1 - wt2)/(rep2 - rep1)) * (rep1 - 1) + wt1",
				 		source: ""
				 	},
				 ],
				 example: "",
			 },
			 {
				 name: "YMCAUpperBodyRepMax",
				 arguments: [{
					 name: "reps",
					 units: "number of repetitions"
				 },],
				 val: "kg",
				 description: "",
				 equations: [
				 	{
				 		name: "male",
				 		val: "(1.55 * reps) + 37.9",
				 		source: "Kim, Mayhew, and Peterson (2002)"
				 	},
				 	{
				 		name: "female",
				 		val: "(0.31 * reps) + 19.2",
				 		source: "Kim, Mayhew, and Peterson (2002)"
				 	},
				 ],
				 example: "",
			 },
			 {
				 name: "relativeStrength",
				 arguments: [{
					 name: "1rm",
					 units: "kg"
				 }],
				 val: "%",
				 description: "",
				 equations: [
				 	{
				 		name: "Relative Strength",
				 		val: "rm / this.weight",
				 	},
				 ],
				 example: "",
			 },
			 ],
			}
];



