const Task = require('../Models/calendar')



let index = (req, res)=>{
         res.render('index', {
             title:'Welcome Home'
            })

 }



let show = (req, res) => {
    res.render('task')
    
}

let create = (req,res) => {
    console.log(req.body)
        
    res.render('views/newTask')
        }

//         res.json({tsk, message:'Congrats Im Here'})
//     })
// }
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
    show,
    create,
    // destroy,
    // update,
    //new,
    //edit

}