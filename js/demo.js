var app = angular.module("demoApp", ['PersonCtrl']);

app.service('personService', function($rootScope) {
	var people = [],
	
	addPerson = function(person) {
		if (people.indexOf(person)=== -1) {
			people.push(person);
		}
	};
	
	getPerson = function(index) {
		if(index) {
			return people[index]
		} else {
			return people;
		}
		
	},
	
	removePerson = function(person) {
		var index = people.indexOf(person);
		people.splice(index, 1);
	};
	
	return {
		add: addPerson,
		get: getPerson,
		remove: removePerson,
	}
});


PersonCtrl = angular.module('PersonCtrl',[]);


PersonCtrl.controller('PersonOverviewCtrl', ['$scope','$rootScope' ,'personService',function($scope, $rootScope, personService) {
	$scope.people = personService.get();
	
	$scope.showIndex = function() {
		$scope.displayIndex = true;
		$scope.person = false;
		$scope.displayAddForm = false;
	}
	
	$scope.$on('showAddForm', function(e, d) {
		$scope.displayIndex = false;
		$scope.person = false;
		$scope.displayAddForm = true;
	});
	
	$scope.$on('showDetails', function(e, d) {
		$scope.displayIndex = false;
		$scope.person = d;
		$scope.displayAddForm = false; 
	});
	
}]);


PersonCtrl.controller('PersonIndexCtrl', ['$scope','personService',function($scope, personService) {
}]);

PersonCtrl.controller('PersonListCtrl', ['$scope','$rootScope' ,'personService',function($scope, $rootScope, personService) {
	
	$scope.edit = function(person) {
		 $scope.editing = person;
		 
	}
	
	$scope.remove = function(person) {
		personService.remove(person);
	}
	
	$scope.show = function(person) {
		$rootScope.$broadcast('showDetails', person);
	}
	
	$scope.showAddForm = function() {
		$scope.$emit('showAddForm', true);
	}
	
}]);

PersonCtrl.controller('PersonNewCtrl', ['$scope','personService',function($scope, personService) {

	$scope.person = {
		name: "",
		gender: "",
		age: 0,
		weight: 0,
		height: 0,
		race: "",
	}
	
	$scope.genders= [{label:"Female",value:"female"}, {label:"Male",value:"male"}]
	
	$scope.create = function(person) {
		person =  new Fit.Person(person.name, person.gender, new Date(person.dob), person.weight, person.height, null);
		personService.add(person);
	}
}]);

PersonCtrl.controller('PersonDetailCtrl',  ['$scope','personService',function($scope, personService) {
	$scope.bsa = $scope.person.BSA();
	$scope.rmr = $scope.person.RMR();
	$scope.predicted_tee = $scope.person.PredictedTEE();
	$scope.bmi_to_bf = $scope.person.BMIToBodyFat();
	$scope.hr_max = $scope.person.cardio.HeartRateMax();
}]);