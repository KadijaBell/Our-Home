const mongoose = require('mongoose')

const Schema  = mongoose.Schema 

const taskSchema = new Schema (
    
    { 
        taskName: String,
        details: String
    

})


const calendarSchema = new Schema(
    {
        date: String,
        time: Number
    }
)


const Task = mongoose.model('Task', taskSchema)
const Calendar = mongoose.model('Calendar', calendarSchema)


module.exports = {
    Task,
    Calendar
}