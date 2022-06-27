const Task = require('../Models/Task')
const task = [];
const complete = [];



// let index = (req, res)=>{
//          res.render('index', {
//              title:'Welcome Home'
//             })

//  }



// let show = (req, res) => {
//     res.render('/Views/task/task.ejs')
    
// }

function create (req, res) {
    const createTask = req.body.createTask;
       task.push(createTask)
            res.redirect('/')
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
//     index,
//     show,
 create
    // destroy,
    // update,
    //new,
    //edit

}