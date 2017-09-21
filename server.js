const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const morgan = require('morgan')
const mongoose = require('mongoose');
//define router
const router = express.Router();
const appRoutes = require('./app/routes/api')(router);
const path = require('path')


const bodyParser = require('body-parser')

//middleware use
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))
app.use('/api', appRoutes)
//api/users

//middleware end


app.get('*', (req, res) => {
res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
});



  //use save to save the above information
//open new terminal tab and type mongo
  //show dbs then use retirement

//connect to mongo show error if not connected or success if connected
// mongoose.connect('mongodb://localhost:27017/retirement',function(err){
//   if(err) {
//     console.log('not connect ' + err)
//   } else {
//     console.log('connected to mongo')
//   }
// });

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/retirement';
mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=> {
  console.log('connect to mongo')
})




app.listen(port, () => {
  console.log('I have started listening for requests')
})
