app.controller("Catalogue", function($scope, $rootScope, $routeParams, $http, $location) {
	window.scope = $scope;
	$scope.message = "Hello!";
	$scope.teaCategories =[""];

	$http.get("./../teas.json").then(function(response) {
		console.log(response);
		$scope.items = response.data;
		// $scope.orderBy = "price";

		function categories(arr) {
		    for (var n = 0; n < arr.length; n++) {
		    	var current = arr[n];
		    	var index = $scope.teaCategories.indexOf(current);
		    	if (index === -1) {
		    		$scope.teaCategories.push(arr[n]);
		    		}
		    	}
		};


		for (var i = 0; i < $scope.items.length; i++) {
			categories($scope.items[i].categories);

			if ($scope.items[i].inStock == true) {
				$scope.items[i].inStock = "Yes";
			} else {
				$scope.items[i].inStock = "No";
			}

		}
	})
})

app.controller("Cart", function(noiceCart) {

})