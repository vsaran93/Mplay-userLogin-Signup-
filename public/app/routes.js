angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider){
	$routeProvider 
	.when('/',{
		templateUrl: 'app/views/pages/home.html'
	})
	.when('/about',{
		templateUrl:'app/views/pages/about.html'
	})
	.when('/register',{
		templateUrl:'app/views/pages/users/register.html',
		controller:'regCtrl',
		controllerAs:'register'
	})
	.when('/login',{
		templateUrl:'app/views/pages/users/login.html'
	})
	.otherwise({redirectTo:'/'});
});
