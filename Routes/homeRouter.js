const express = require('express')
const router = express.Router()
const Task = require("../Models/Task")


router.get('/',async(req, res,) => {
    const allTask = await Task.find();
    res.render("home", {task: allTask})
  })
  
module.exports = router;