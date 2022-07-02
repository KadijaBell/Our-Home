const express = require('express');
const path = require('path');
const app = express();
const PORT = 4001; 
const taskRoutes = require ('./Routes/taskRouter');
const loginRoutes = require ('./Routes/loginRouter.js');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();


 //require db connections
 require('./Configurations/mongodb')
 require('./Configurations/passport')



app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.use(express.static(__dirname + '/Public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(
    session({
    secret: 'OurHome!!',
    resave: false,
    saveUninitialized: false
  }));
  

app.use(passport.initialize());
app.use(passport.session());


 //routes

 app.use ('/', loginRoutes); //go to login view when navigating to endpoint our-home.com/
 app.use ('/', taskRoutes); //after correct login go todolist navigating to endpoint our-home.com/tasks
 
 
//Port
app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})