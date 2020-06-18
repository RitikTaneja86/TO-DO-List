//required mongoose
const mongoose = require('mongoose');

//setting up connection to database
mongoose.connect('mongodb://localhost/task_list_db');

//using connection
const db = mongoose.connection;

//error handling
db.on('error', console.error.bind(console,'error connecting to db'));

//once database is opened
db.once('open', function() {
    console.log('Successfully Connected to the Database');
})