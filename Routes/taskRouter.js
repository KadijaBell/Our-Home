const express = require('express')
const router = express.Router()
const taskCtrl = require('../Controllers/taskCtrl.js')
const Task = require("../Models/Task")




// router.get('/:id', taskCtrl.show)
// router.get('/new', taskCtrl.new)
// router.delete('/:id', taskCtrl.destroy)
// router.get('/edit/:id', taskCtrl.edit )
router.get('/', taskCtrl.index) // gets all tasks for today could also be router.get('/today', taskCtrl.index)
router.post('/add', function(req, res){createTasks}) //creates tasks
router.get('/',async(req, res,) => {
  const allTask = await Task.find();
  res.render("task", {task: allTask})
})


 module.exports = router