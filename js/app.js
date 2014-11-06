var app = angular.module('proxy-angular', ['ngRoute', 'MainCtrl']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.otherwise('/');

	$routeProvider.when('/new', {
		templateUrl: '../views/_new.html'
	});
});