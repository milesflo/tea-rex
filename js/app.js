var app = angular.module("meanTea", ["ngRoute"]);

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