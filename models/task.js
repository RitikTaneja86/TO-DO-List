//require mongoose 
const mongoose = require('mongoose');

//creating new mongoose schema
const taskSchema = new mongoose.Schema({
    task: {
    type: String,
    required: true
    },
    category: {
        type: String
    },
    date: {
        type: String
    }
})

//creating and exporting model
const Task = mongoose.model('task', taskSchema);
module.exports = Task