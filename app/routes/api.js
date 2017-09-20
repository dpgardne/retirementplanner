const User = require('../models/user')
var jwt = require('jsonwebtoken');
var secret = 'meal'

module.exports = function(router) {

//user registration
router.post('/users', function(req,res){
  //no longer app.post future routs use router
  const user = new User()
  //create new variable and named it user
  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email
  if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == ''){
    res.json({success: false, message: 'ensure username, email and password were provided'})
} else {
  user.save(function(err){
    if(err) {
    res.json({success: false, message: 'ensure username, email and password were provided'})
  } else {
      res.json({success: true, message: 'new user created'})
      }
    });
  }
})

  //user login route
  //http://localhost:post/api/authenticate
  router.post('/authenticate', function(req, res){
    User.findOne({username: req.body.username}).select('email username password').exec(function(err, user){
      if(err) throw err;
      if(!user) {
        res.json({success: false, message: 'could not authenticate user'})
      } else if (user) {
          if(req.body.password) {
          var validPassword = user.comparePassword(req.body.password)
        } else {
          res.json({success: false, message: 'No password provided'})
        }
          if(!validPassword) {
            res.json({success: false, message: 'Could not authenticate password'})
          } else {
            var token = jwt.sign({ username: user.username, email: user.email }, secret, {expiresIn: '24h'})
            res.json({success: true, message: 'User authenticated', token: token})
          }
      }
    });
  });

    return router;
}





//to add a user in postman make sure is set to json and put it in raw field
// {
// "username": "davidsdfddsdf",
// "password": "wedsdsdr",
// "email": "ddddddsdsdd@gmail.com"
// }
