//require task
const Task = require('../models/task');

//require db
const db = require('../models/task');

//exporting todo function
module.exports.todo = function (req, res) {
    // return res.end('<h1>TODO App</h1>'); //just for checking.

    //rendering the home page
    Task.find({}, function (err, tasks) {
        //checking for error, if any
        if (err) {
            console.log('Error in fetching task from db');
            return;
        }
        return res.render('TODO_home', {
            title: "Task List",
            task_list: tasks
        });
    })
}