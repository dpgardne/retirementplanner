const User = require('../models/user')

module.exports = function(router) {

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
    return router;
}


//to add a user in postman make sure is set to json and put it in raw field
// {
//
// "username": "davidsdfddsdf",
// "password": "wedsdsdr",
// "email": "ddddddsdsdd@gmail.com"
//
// }
