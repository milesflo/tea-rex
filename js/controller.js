app.controller("Catalogue", function($scope, $rootScope, $routeParams, $http, $location) {
	$scope.message = "Hello!";
	$http.get("./../teas.json").then(function(response) {
		console.log(response);
		$scope.items = response.data;
	})
})