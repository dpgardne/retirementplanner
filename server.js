const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const morgan = require('morgan')
const mongoose = require('mongoose');
const User = require('./app/models/user')
const bodyParser = require('body-parser')

//middleware use

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(morgan('dev'))
//middleware end


app.get('/', (request, response) => {
response.send('welcome')
});

//to create new user
//go into postman and select post with localhost:3000/users then send. user[username] "newuser"
app.post('/users', function(req,res){
  const user = new User()
  //create new variable and named it user
  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email
  if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == '') {
    res.send('ensure username, email and password were provided')
  } else {
  user.save(function(err){
    if(err) {
    res.send(err)
  } else {
      res.send('user created')
    }
  })
  }
})

//to add a user in postman make sure is set to json and put it in raw field
// {
//
// "username": "davidsdfddsdf",
// "password": "wedsdsdr",
// "email": "ddddddsdsdd@gmail.com"
//
// }

  //use save to save the above information
//open new terminal tab and type mongo
  //show dbs then use retirement

//connect to mongo show error if not connected or success if connected
mongoose.connect('mongodb://localhost:27017/retirement',function(err){
  if(err) {
    console.log('not connect ' + err)
  } else {
    console.log('connected to mongo')
  }
});





app.listen(port, () => {
  console.log('I have started listening for requests')
})
