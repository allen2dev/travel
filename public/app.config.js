'use strict';

angular.
	module('travelApp').
	config(['$locationProvider', '$routeProvider',
		function config ($locationProvider, $routeProvider) {
			// body...
			$locationProvider.html5Mode(true);

			$routeProvider.
				when('/', {
					template: '<home></home>'
				}).
				when('/about', {
					template: '<about></about>'
				}).
				otherwise('/');
		}
	]);