$(document).ready(function() {
    $('select').material_select();
});


var app = angular.module("meanTea", ["ngRoute"]);

app.filter('cents', function($filter) {
	return function (input) {
		return (input/100);
	}
})

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "partials/catalogue.html",
		controller: "Catalogue"
	}).when('/cart', {
		templateUrl: "partials/cart.html",
		controller: "Cart"
	}).otherwise({
		redirectTo: "/"
	})
})