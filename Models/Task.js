const mongoose = require('mongoose')

const Schema  = mongoose.Schema 

const taskSchema = new Schema ({
    task:{
        taskName: String,
        details: String,
        googleId: String
       
    }
});





const Task = mongoose.model('Task', taskSchema)
//const Calendar = mongoose.model('Calendar', calendarSchema)


module.exports = {
    Task
}