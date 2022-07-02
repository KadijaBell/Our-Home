const express = require('express')
const router = express.Router()
const Task = require("../Models/Task");
const User = require('../Models/User');
const task = [];
const complete = [];




 

//post route for adding new task 
 router.post('/add', function createTask (req, res) {
    const createTask = req.body.createTask;
    //add the new task from the post route
    task.push(createTask);
    res.redirect("/");
});

router.post("/removetask", function(req, res) {
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
router.get("/", function(req, res) {
    res.render("list", { task: task, complete: complete });
});



  
 module.exports = router;