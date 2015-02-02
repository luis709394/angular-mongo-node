// Controller for the poll list
function PlayerListCtrl($scope, Player) {
	$scope.players = Player.query();
}


