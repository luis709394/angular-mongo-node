// Angular module, defining routes for the app
angular.module('players', ['playerServices']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/players', { templateUrl: 'partials/list.html', controller: PlayerListCtrl }).
                     // If invalid route, just redirect to the main list view
			otherwise({ redirectTo: '/players' });
	}]);