// Angular service module for connecting to JSON APIs
angular.module('playerServices', ['ngResource']).
	factory('Player', function($resource) {
		return $resource('players/:playerId', {}, {
			// Use this method for getting a list of polls
			query: { method: 'GET', params: { playerId: 'players' }, isArray: true }
		});
	});