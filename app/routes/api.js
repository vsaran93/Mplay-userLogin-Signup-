var User = require('../models/user');

module.exports = function(router){
		//http://localhost:8080/users
		router.post('/users',function(req,res){
			var user = new User();
			user.username = req.body.username;
			user.password = req.body.password;
			user.email = req.body.email;
			if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == ''  ){
				res.json({success:false, message:'ensure username password or email were provided!'});
			} else {
				user.save(function(err){
					if (err){
						res.json({success:false, message:'username or email already exist'});
					} else {
						res.json({success:true, message:'user created!'});
					}
				});
			}
		});

		router.post('/authenticate',function(req,res){
			User.findOne({username:req.body.username}).select('email username password').exec(function(err, user){
				if (err) throw err;
				
				if(!user){
					res.json({success:false, message:'could not authenticate'});
				} else if (user){
					if (req.body.password){
						var validPassword = user.comparePassword(req.body.password);
					} else {
						res.json({success:false, message:'password is not provided'});
					}
					if (!validPassword){
						res.json({success:false, message:'could not aunthenticate password'});
					} else {
						res.json({success:true, message:'user authenticated!'});
					}
				}
			});

		})
		return router;
	}