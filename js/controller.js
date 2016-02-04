app.controller("Catalogue", function($scope, $rootScope, $routeParams, $http, $location) {
	$scope.message = "Hello!";
	$http.get("./../teas.json").then(function(response) {
		console.log(response);
		$scope.items = response.data;
		// $scope.orderBy = "price";

		for (var i = 0; i < $scope.items.length; i++) {
			if ($scope.items[i].inStock == true) {
				$scope.items[i].inStock = "Yes";
			}
		}
	})
})