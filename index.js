//require express
const express = require('express');

//port on which server will run
const port = 8000;

//require database 
const db = require('./config/mongoose');

//require schema
const Task = require('./models/task');

//creating express app
const app = express();

//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//middleware for form
app.use(express.urlencoded());

//using assets folder for css and js
app.use(express.static('assets'));

//use express router
app.use('/', require('./routes/index.js'));

//sending request and populating database
app.post('/create-task', function (req, res) {
    Task.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    }, function (err, newTask) {
        if (err) {
            console.log('Error in creating a task!');
            return;
        }
        // console.log('*******', newTask); //just printing for checking new task is created successfully or not.
        return res.redirect('back');
    })
})

//for deleting task 
app.get('/delete-task/', function (req, res) {
    let id = req.query.id;
    Task.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    })
})

//server check
app.listen(port, function (err) {
    if (err) {
        console.log(`error on running server: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})