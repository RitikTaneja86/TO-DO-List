const express = require('express');
const port = 8000;
const app = express();


//setup the view engine
app.set('view engine','ejs');
app.set('views','./views');


//use express router
app.use('/',require('./routes/index.js'));


//server check
app.listen(port, function(err) {
    if(err) {
        console.log(`error on running server: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})