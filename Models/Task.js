const mongoose = require('mongoose');



const taskSchema = new mongoose.Schema ({
    task:{
        taskName: String,
        details: String
        
       
    }
});





 module.exports = mongoose.model('Task', taskSchema);



