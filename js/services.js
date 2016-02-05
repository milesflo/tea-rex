app.factory('noiceCart', function() {
	//array of tea objects to get total price.
	var noice = {};
	
	noice.cart = [];

	noice.addCart = function(obj, quant) {
		quantity = parseInt(quant) || 1;
		for (i= 0; i < noice.cart.length; i++) {
			if (noice.cart[i].name == obj.name) {
				noice.cart[i].quantity += quantity;
				return;
			}
		}
		obj.quantity = quantity;
		noice.cart.push(obj);
		console.log(noice.cart);
	};


	noice.deleteItem = function(obj) {
		var index = $scope.cart.indexOf(obj);
		$scope.cart.splice(index, 1);
		console.log(noice.cart);
	};
	return noice;
});