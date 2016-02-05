app.factory('noiceCart', function() {
	//array of tea objects to get total price.
	var noice = {};
	
	noice.cart = [];

	noice.addCart = function(obj, quant) {
		quantity = parseFloat(quant) || 1;
		for (var i = 0; i < noice.cart.length; i++) {
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
		for (var i = 0; i < noice.cart.length; i++) {
			if (noice.cart[i].name == obj.name) {
				noice.cart.splice(i, 1);
			}
		}
		console.log(noice.cart);
	};


	return noice;
});