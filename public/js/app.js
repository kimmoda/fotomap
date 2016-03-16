var app = angular.module('app', [
	'ngRoute',
	'projectsController'
]);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {

	$httpProvider.defaults.useXDomain = true;

	$routeProvider
	.when('/', {
		templateUrl: "partials/projects.html",
		controller: "ProjectsController"
	})
	.when('/about', {
		templateUrl: "partials/about.html"
	})
	.otherwise({
		redirectTo: '/'
	})

	$locationProvider.html5Mode(true);
}]);