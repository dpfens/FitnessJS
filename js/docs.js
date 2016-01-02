var app = angular.module('docsApp', ['ngSanitize', "ngAnimate"]);

app.directive('prism', [function() {
    return {
        restrict: 'E',
        scope: {
        	code: '@',
        	language: '@'
        },
        template: '<pre><code class="language-{{language}}" ng-bind="code">{{ code }}</code></pre>',
        replace: true,
        link: function (scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element.find("code")[0]);
            });
            scope.$watch('code', function(v,o) {
            	if(v!==o) {
            		Prism.highlightElement(element.find("code")[0]);
            	}
			});
        }
    } 
}]);

app.service("docsService", [  function() {
	var docs = [
	    {
		 name: "Person",
		 description: "As people are the focus of healthcare, they are focus of FitnessJS. The Person object is capable of performing all calculations that FitnessJS has to offer.",
		 arguments: [ {
			 name: "name",
			 units: "string",
		 },
		 {
			 name: "gender",
			 units: "string",
		 },
		 {
			 name: "dob",
			 units: "date",
			 
		 },
		 {
			 name: "weight",
			 units: "kg"
		 },
		 {
			 name: "height",
			 units: "cm"
		 },
		 {
			 name: "race",
			 units: "string"
		 }],
		 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
		 '\n\n// call methods from Person\nme.getAge() 24.96'+
		 '\nme.cardio.getAge() 24.96',
		 methods: [{
			 name: "getAge",
			 arguments: [],
			 val: "years",
			 description: "",
			 equations: [],
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call getAge from Person\nme.getAge() 24.96',
		 },
		 {
			 name: "bmiToBodyFat",
			 arguments: [],
			 val: "percentage",
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
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call bmiToBodyFat from Person\nme.bmiToBodyFat() {\nchild: 0.2496275022760703,\nadult: 0.13499907862776397 }',
		 },
		 {
			 name: "bodySurfaceArea",
			 arguments: [],
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
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call bodySurfaceArea from Person\nme.bmiToBodyFat() \n{ Boyd: 2.045653492421787,\nCosteff: 1.5486111111111112,\nDuBois: 1.8308664274017985,\nFujimoto: 1.4725455220642767,\nGehanGeorge: 1.5368390922502115,\nHaycock: 1.5268447264673155,\nMosteller: 1.5198684153570663,\nTakahira: 1.5206120160598762\n}',
		 },
		 {
			 name: "bodyVolume",
			 arguments: [{
				 name: "underwaterweight",
				 units: "mL"
			 	},
			 	{
					 name: "residualvolume",
					 units: "L"
				 },
				 {
					 name: "gastrointestinalvolume",
					 units: "L"
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
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call bodyVolume from Person\nme.bodyVolume() 2.7',
		 },
		 {
			 name: "dbToBodyFat",
			 arguments: [{
				 name: "bodydensity",
				 units: "g/cm"
			 }],
			 val: "percentage",
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
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call dbToBodyFat from Person\nme.dbToBodyFat(1.0054) {\nBrozek: 0.4034545454545455,\nSiri: 0.4234135667396064\n}',
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
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call dbAtTLCNS from Person\nme.dbAtTLCNS(1.0054) 0.9919476599999999',
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
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call netCaloricCost from Person\nme.netCaloricCost(300) 283.5',
		 },
		 {
			 name: "predictedTEE",
			 arguments: [],
			 val: "kcal",
			 description: "",
			 equations: [
			 	{
			 		name: "Boy-Sedentary",
			 		val: "88.5 - (61.9 * age) + ((26.7*wt)+(903*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Boy-low",
			 		val: "88.5 - (61.9 * age) + 1.13*((26.7*wt)+(903*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Boy-active",
			 		val: "88.5 - (61.9 * age) + 1.26*((26.7*wt)+(903*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Boy-veryactive",
			 		val: "88.5 - (61.9 * age) + 1.42*((26.7*wt)+(903*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Man-Sedentary",
			 		val: "662 - (9.53 * age) + 1*((15.9*wt)+(540*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Man-Low",
			 		val: "662 - (9.53 * age) + 1.11*((15.9*wt)+(540*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Man-Active",
			 		val: "662 - (9.53 * age) + 1.25*((15.9*wt)+(540*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Man-veryactive",
			 		val: "662 - (9.53 * age) + 1.48*((15.9*wt)+(540*ht))",
			 		source: ""
			 	},
			 	
			 	{
			 		name: "Girl-Sedentary",
			 		val: "135.3 - (30.8 * age) + 1*((10*wt)+(934*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Girl-low",
			 		val: "135.3 - (30.8 * age) + 1.16*((10*wt)+(934*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Girl-active",
			 		val: "135.3 - (30.8 * age) + 1.31*((10*wt)+(934*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Girl-veryactive",
			 		val: "135.3 - (30.8 * age) + 1.56*((10*wt)+(934*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Woman-Sedentary",
			 		val: "354 - (6.91 * age) + 1*((9.36*wt)+(726*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Woman-Low",
			 		val: "662 - (9.53 * age) + 1.11*((15.9*wt)+(540*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Woman-Active",
			 		val: "662 - (9.53 * age) + 1.27*((15.9*wt)+(540*ht))",
			 		source: ""
			 	},
			 	{
			 		name: "Woman-veryactive",
			 		val: "662 - (9.53 * age) + 1.45*((15.9*wt)+(540*ht))",
			 		source: ""
			 	},
			 ],
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call predictedTEE from Person\nme.predictedTEE() {\nsedentary: 2115.226775083932,\nlow: 2301.148775083932,\nactive: 2537.7767750839316,\nveryactive: 2926.5227750839317\n}',
		 },
		 {
			 name: "restingMetabolicRate",
			 arguments: [],
			 val: "kcal/day",
			 description: "",
			 equations: [
			 	{
			 		name: "Harris-Benedict - Male",
			 		val: "66.473 + 13.751*wt + 5.0033*ht - 6.755*age",
			 		source: ""
			 	},
			 	{
			 		name: "Harris-Benedict - Female",
			 		val: "655.0955 + 9.463*wt + 1.8496*ht - 4.6756*age",
			 		source: ""
			 	},
			 	{
			 		name: "Mifflin - Male",
			 		val: "(9.99*wt + 6.25*ht + - 4.92*age)+5",
			 		source: ""
			 	},
			 	{
			 		name: "Mifflin - Female",
			 		val: "(9.99*wt + 6.25*ht + - 4.92*age)-161",
			 		source: ""
			 	},
			 ],
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call restingMetabolicRate from Person\nme.restingMetabolicRate() {\nHarris-Benedict: 1411.5651693627854,\nMifflin: 1384.619133866011\n}',
		 },
		 {
			 name: "skinfoldDb",
			 arguments: [{
				 name: "sum",
				 units: "mm"
			 }],
			 val: "percentage",
			 description: "",
			 equations: [
			 	{
			 		name: "black",
			 		source: "Jackson and Pollock (1978)"
			 	},
			 	{
			 		name: "white",
			 		source: "Jackson and Pollock (1978)"
			 	},
			 	{
			 		name: "athlete",
			 		source: "Jackson and Pollock (1978)"
			 	},
			 	{
			 		name: "collegeathlete - black",
			 		source: "Evans et al. (2005)"
			 	},
			 	{
			 		name: "collegeathlete - white",
			 		source: "Evans et al. (2005)"
			 	},
			 	{
			 		name: "child",
			 		source: "Slaughter et al. (1988)"
			 	},
			 ],
			 example: '// create instance of Person\nvar me = new Fit.Person("John Doe", "male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call skinfoldDb from Person\nme.skinfoldDb() {\nathlete: 1.1048321172156006,\nblack: 1.1048321172156006,\nchild: 1,\ncollegiateathlete: {\n\tblack: 0.6559999999999999,\n\twhite: 2.654 },\nwhite: 1.1029794830059514 }',
		 },
		 ],
		},
		{
			 name: "Cardiovascular",
			 description: "",
			 arguments: [{
				 name: "gender",
				 units: "string",
			 },
			 {
				 name: "dob",
				 units: "date",
				 
			 },
			 {
				 name: "weight",
				 units: "kg"
			 },
			 {
				 name: "height",
				 units: "cm"
			 },
			 {
				 name: "race",
				 units: "string"
			 }],
			 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
			 '\n\n// call method from instance of Cardiovascular\nmycardio.getAge() 24.96',
			 methods: [{
				 name: "getAge",
				 arguments: [],
				 val: "years",
				 description: "",
				 equations: [],
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call getAge from instance of Cardiovascular\nmycardio.getAge() 24.96',
			 },
			 {
				 name: "fatFreeMass",
				 arguments: [{
					 name: "resistance",
					 units: "\u2126"
				 	},
				 	{
					 name: "reactance",
					 units: "\u2126"
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
						name: "athlete - male",
						val: "(0.186*(Math.pow(ht,2)/resistance)) + (0.701*wt) + 1.949",
						source: "Oppliger et al. (1991)"
					},
					{
						name: "athlete - female",
						val: "(0.282*ht) + (0.415*wt) - (0.037*resistance) + (0.096*reactance) - 9.734",
						source: "Fornetti et al. (1999)"
					}
				 ],
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call fatFreeMass from instance of Cardiovascular\nmycardio.fatFreeMass(1000,3) {\nadult: {\n\taverage: 30.807956114636898,\n\tlean: 34.76353038022957,\n\tobese: 26.852381849044228 }\nathlete: 44.214175999999995 }',
			 },
			 {
				 name: "fieldTestsV02Max",
				 arguments: [
				    {
					 name: "time",
					 units: "seconds"
				 	},
				 	{
						 name: "distance",
						 units: "meters"
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call fieldTestsV02Max from instance of Cardiovascular\nmycardio.fieldTestsV02Max(30, 50, 140, 9) {\nFifteenMinuteTest: 10.49,\nMileHalf: [-0.006400000000007289, 38.532000000000004],\nTwelveMinuteTest: -9.96,\nmileRunWalk: 167.85996125929756,\nmileSteady: 21.533599999999996,\nmileWalk: 5.517826152501623,\nshuttle: 13.776866985058128 }',
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call popV02Max from instance of Cardiovascular\nmycardio.popV02Max(20,30,40) {\nfemale: {\n\tbalke: 32.82,\n\tbruce: 83.69999999999999 },\nmale: {\n\tbalke: 43.87,\n\tbruce: 0.23000000000000265,\n\tnaughton: 35.800000000000004 },\nelderlycardiac: 54.185 }',
			 },
			 {
				 name: "walkingVO2",
				 arguments: [{
					 name: "speed",
					 units: "m/min"
				 },
				 {
					 name: "grade",
					 units: "percentage"
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call walkingVO2 from instance of Cardiovascular\nmycardio.walkingVO2(100,0.2) 46',
			 },
			 {
				 name: "runningVO2",
				 arguments: [{
					 name: "speed",
					 units: "m/min"
				 },
				 {
					 name: "grade",
					 units: "percentage"
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call walkingVO2 from instance of Cardiovascular\nmycardio.walkingVO2(200,0.2) 76',
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call legErgometryVO2 from instance of Cardiovascular\nmycardio.legErgometryVO2(1234) 44.633333333333',
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call armErgometryVO2 from instance of Cardiovascular\nmycardio.armErgometryVO2(800) 44.444444444444',
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call steppingVO2 from instance of Cardiovascular\nmycardio.steppingVO2(50,0.3) 45.910000000000004',
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call vO2Reserve from instance of Cardiovascular\nmycardio.vO2Reserve(300,189) 111',
			 },
			 {
				 name: "targetVO2",
				 arguments: [{
					 name: "intensity",
					 units: "percentage"
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
				 val: "percentage",
				 description: "",
				 equations: [
				 	{
				 		name: "targetVO2",
				 		val: "(intensity * reserve) + rest",
				 		source: ""
				 	},
				 ],
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call targetVO2 from instance of Cardiovascular\nmycardio.targetVO2(.80,300,189) 88.8',
			 },
			 {
				 name: "heartRateMax",
				 arguments: [],
				 val: "bpm",
				 description: "",
				 equations: [{
					 val: "208 - (0.7 * age)",
				 }],
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call heartRateMax from instance of Cardiovascular\nmycardio.heartRateMax() 190.528',
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call stairMasterMets from instance of Cardiovascular\nmycardio.stairMasterMets(56) 417.756',
			 },
			 {
				 name: "residualVolume",
				 arguments: [{
					 name: "bodysurfacearea",
					 units: "m^3"
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
				    	 val: "(0.03*age) + (0.0387*ht) - (0.73*body surface area) - 4.78",
				    	 source: ""
				     },
				 ],
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call residualVolume from instance of Cardiovascular\nmycardio.residualVolume(56) {\nBerglund: 0.9719603859433432,\nBoren: 1.246254651369875,\nGoldman: 1.1037240487858129 }',
			 },
			 {
				 name: "targetHeartRate",
				 arguments: [{
					 name: "intensity",
					 units: "percentage"
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
				 example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call targetHeartRate from instance of Cardiovascular\nmycardio.targetHeartRate(.8,290.528,78) 120.50559999999999',
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
			    	 name: "",
			    	 val: "residual volumev + vital capacity",
			    	 source: ""
			     },],
			     example: '// create instance of Cardiovascular\nvar mycardio = new Fit.Cardiovascular("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call totalLungCapacity from instance of Cardiovascular\nmycardio.totalLungCapacity(1300, 4700) 6000',
			 },
			 ],
			},
			{
				 name: "Muscle",
				 description: "",
				 arguments: [{
					 name: "gender",
					 units: "string",
				 },
				 {
					 name: "dob",
					 units: "date",
					 
				 },
				 {
					 name: "weight",
					 units: "kg"
				 },
				 {
					 name: "height",
					 units: "cm"
				 },
				 {
					 name: "race",
					 units: "string"
				 }],
				 example: '// create instance of Muscle\nvar muscles = new Fit.Muscle("male", new Date(1990, 3,17), 54, 154)'+
				 '\n\n// call methods from Muscle\nmuscles.getAge() 24.96'+
				 '\nme.muscles.getAge() 24.96',
				 methods: [{
					 name: "getAge",
					 arguments: [],
					 val: "years",
					 description: "",
					 equations: [],
					 example: '// create instance of Muscle\nvar muscles = new Fit.Muscle("male", new Date(1990, 3,17), 54, 154)'+
					 '\n\n// call getAge from Muscle\nmuscles.getAge() 24.96',
				 },
				 {
					 name: "isMuscleBalanced",
					 arguments: [{
						 name: "group",
						 units: "\u2126"
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
					 val: "boolean",
					 description: "",
					 equations: [
					 ],
					 example: '// create instance of Muscle\nvar muscles = new Fit.Muscle("male", new Date(1990, 3,17), 54, 154)'+
					 '\n\n// call isMuscleBalanced from Muscle\nmuscles.isMuscleBalanced("hip", 50, 60) false',
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
					 example: '// create instance of Muscle\nvar muscles = new Fit.Muscle("male", new Date(1990, 3,17), 54, 154)'+
					 '\n\n// call fatigueRepMaximum from Muscle\nmuscles.fatigueRepMaximum(10, 95) 126.70045345425446',
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
					 example: '// create instance of Muscle\nvar muscles = new Fit.Muscle("female", new Date(1990, 3,17), 54, 154)'+
					 '\n\n// returns 0 is less than 40 or over 70\nmuscles.femaleRepMax(10, 95) 0',
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
					 example: '// create instance of Muscle\nvar muscles = new Fit.Muscle("male", new Date(1990, 3,17), 54, 154)'+
					 '\n\n// call twoSetMaximum from Muscle\nmuscles.twoSetMaximum(12,85,7,90) 96',
				 },
				 {
					 name: "YMCAUpperBodyRepMax",
					 arguments: [{
						 name: "reps",
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
					 example: '// create instance of Muscle\nvar muscles = new Fit.Muscle("male", new Date(1990, 3,17), 54, 154)'+
					 '\n\n// call YMCAUpperBodyRepMax from Muscle\nmuscles.YMCAUpperBodyRepMax(55) 123.15',
				 },
				 {
					 name: "relativeStrength",
					 arguments: [{
						 name: "1rm",
						 units: "kg"
					 }],
					 val: "percentage",
					 description: "",
					 equations: [
					 	{
					 		name: "Relative Strength",
					 		val: "rm / weight",
					 	},
					 ],
					 example: '// create instance of Muscle\nvar muscles = new Fit.Muscle("male", new Date(1990, 3,17), 54, 154)'+
					 '\n\n// call relativeStrength from Muscle\nmuscles.relativeStrength(40) 0.7407407407407407',
				 },
				 ],
				}
	],
	
	get = function() {
        return docs;
	};
    
    getModule = function(name){
        for(var i =0; i<docs.length; i++) {
            if (docs[i].name = name) {
                return docs[i];
            }
        }
        return false;
    }
    
    getMethod = function(moduleName, method){
        var module = getModule(moduleName);
        for(var i =0; j<module.methods.length; i++) {
            if(module.methods[i].name = method) {
                return module.methods[i]
            }
        }
        return false;
    }
	
	return {
		get: get,
        getModule: getModule,
        getMethod: getMethod,
	};
	
}]);

app.controller('overviewController', ['$scope','docsService', function($scope, docsService) {
	$scope.docs = docsService.get();
    $scope.index = true;
	
	$scope.$on('showIndex', function(e,d) {
		$scope.index = d;
		$scope.module = !d;
		$scope.method = !d;
	});
	
	$scope.$on('showModule', function(e,d) {
		$scope.index = false;
		$scope.module = d;
		$scope.method = false;
	});
	
	$scope.$on('showMethod', function(e,d) {
		$scope.index = false;
		$scope.module = false;
		$scope.method = d;
	});
}]);

app.controller('listController', ['$scope', function($scope) {
	$scope.showIndex = function() {
		$scope.$emit('showIndex', true);
	}
	
	$scope.showModule = function(module) {
		$scope.$emit('showModule', module);
	}
	
	$scope.showMethod = function(method) {
		$scope.$emit('showMethod', method);
	}
}]);

app.controller('indexController', ['$scope','docsService', function($scope, docsService) {
    $scope.showIndex = function() {
		$scope.$emit('showIndex', true);
	}
	
	$scope.showModule = function(name) {
        var module = docsService.getModule(name);
		$scope.$emit('showModule', module);
	}
	
	$scope.showMethod = function(module,method) {
        var method = docsService.getMethod(module, method);
		$scope.$emit('showMethod', method);
	}
}]);

app.controller('moduleController', ['$scope', function($scope) {
	$scope.argumentsList = $scope.module.arguments.map(function(v) { return (v.units)? '<span class="parameter-type">'+v.units+'</span> '+ v.name : v.name;});
	$scope.methodList = $scope.module.methods.map(function(v) { return v.name;});
	
	$scope.$watch('module', function(ov, nv) {
		if(nv!==ov) {
			$scope.argumentsList = $scope.module.arguments.map(function(v) { return (v.units)? '<span class="parameter-type">'+v.units+'</span> '+ v.name : v.name; });
			$scope.methodList = $scope.module.methods.map(function(v) { return v.name;});
		}
	});
}]);

app.controller('methodController', ['$scope', function($scope) {
	$scope.argumentsList = $scope.method.arguments.map(function(v) { return (v.units)? '<span class="parameter-type">'+v.units+'</span> '+ v.name : v.name;});
	
	$scope.$watch('method', function(ov, nv) {
		if(nv!==ov) {
			$scope.argumentsList = $scope.method.arguments.map(function(v) { return (v.units)? ' <span class="parameter-type">'+v.units+'</span> '+ v.name : v.name;});
		}
	});
}]);