// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		// route for the classification page
		.when('/class', {
			templateUrl: 'pages/class.html',
			controller: 'classController'
		})

		// route for the sub classification page
		.when('/subClass', {
			templateUrl: 'pages/subClass.html',
			controller: 'subClassController'
		})

		// route for location page
		.when('/location', {
			templateUrl: 'pages/location.html',
			controller: 'locationController'
		});
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope, $http) {
	// create a message to display in our view
	$http({
		method: 'GET',
		url: '/index.php?type=1'
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.result = response['data'];
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});

});

scotchApp.controller('classController', function ($scope, $http) {
	$http({
		method: 'GET',
		url: '/index.php?type=2'
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.result = response['data'];
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
});

scotchApp.controller('subClassController', function ($scope, $http, $routeParams) {
	$url = '/index.php?type=3' + "&classId=" + $routeParams['classId'];
	$http({
		method: 'GET',
		url: $url
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.result = response['data'];
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
});

scotchApp.controller('locationController', function ($scope, $http) {
	$http({
		method: 'GET',
		url: '/index.php?type=4'
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.result = response['data'];
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
});