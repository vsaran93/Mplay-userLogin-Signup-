angular.module('mainController',['authServices'])
.controller('mainCtrl',function(Auth, $location, $timeout){
	var app = this;
	this.doLogin = function(loginData){
		app.errorMsg = false;
		app.loading = true;
		Auth.login(app.loginData).then(function(data){
			console.log(data.data.success);
			console.log(data.data.message);
			if(data.data.success){
				app.loading = false;
				app.successMsg = data.data.message+'...redirecting';
				$timeout(function() {$location.path('#/');}, 2000);
				
			}else{
				app.loading = false;
				app.errorMsg = data.data.message;
			}
		});
	};
});






