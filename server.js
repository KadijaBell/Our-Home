const express = require('express');
const path = require('path');
const app = express();
const PORT = 4001; 
const taskRoutes = require ('./Routes/taskRouter');
const loginRoutes = require ('./Routes/loginRouter.js');
const bodyParser = require("body-parser");
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();


 //require db connections
 require('./Configurations/mongodb')
 require('./Configurations/passport')

 //routes
//  app.use ('/', taskRoutes)
//  app.use('/', homeRoutes)
 app.use ('/', loginRoutes); //go to login view when navigating to endpoint our-home.com/
 app.use ('/', taskRoutes); //after correct login go todolist navigating to endpoint our-home.com/tasks

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + 'public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true }));



app.use(session({
    secret: 'OurHome!!',
    resave: false,
    saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());






const task = [];
const complete = [];

// //post route for adding new task 
//  app.post('/add', function createTask (req, res) {
//     const createTask = req.body.createTask;
//     //add the new task from the post route
//     task.push(createTask);
//     res.redirect("/");
// });

app.post("/removetask", function(req, res) {
    const completeTask = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        //check if the completed task already exits in the task when checked, then remove it
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (const i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});

//render the ejs and display added task, completed task
app.get("/", function(req, res) {
    res.render("task", { task: task, complete: complete });
});

//Port
app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})