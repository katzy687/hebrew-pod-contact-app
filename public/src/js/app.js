var app = angular.module('myApp', ['ngMaterial', 'ui.router', 'ngAnimate']);

app.run(function(){
  console.log('myApp is ready!');
});


// Routing
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  	.state('home', {
  		url: '/home',
  		templateUrl: 'templates/home.html',
      controller: 'ListController'
  	})

  	.state('adduser', {
  		url: '/adduser',
  		templateUrl: 'templates/adduser.html',
  		controller: 'ListController'
  	});

	$urlRouterProvider.otherwise('/home');
}]);
