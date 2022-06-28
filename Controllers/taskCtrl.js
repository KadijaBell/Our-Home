const Task = require('../Models/Task')
const task = [];
const complete = [];


function index(req, res, next) {
    console.log(req.query)
  
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Task.find(modelQuery)
    .sort(sortKey).exec(function(err, students) {
      if (err) return next(err);
      res.render('task', {
        tasks,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
  }
  

// let show = (req, res) => {
//     res.render('/Views/task/task.ejs')
    
// }
let createTasks = (req, res) => {
    const createTask = req.body.createTask;
    //add the new task from the post route
    task.push(createTask);
    res.redirect("/");
}

        
// let destroy = (req,res) => {
//     Task.findByIdAndDelete(req.params.id, (err, tsk)=>{
//         if(err){
//             res.status(400).json(err)
//             return
//         }

//         res.json({message: 'Item Removed'})
//     })


    
// }

// let update = (req,res)=> {
//     Task.findByIdAndUpdate(req.params.id, req.body,(err, tsk) =>{
//         if(err){
//             res.status(400).json(err)
//             return
//         }

//         res.json(tsk)
//     })
// }

// let new = (req,res) =>{
//     Task
// }



 module.exports = {
  index,
//     show,
createTasks,

    // destroy,
    // update,
    //new,
    //edit

}