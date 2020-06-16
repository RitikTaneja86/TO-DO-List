module.exports.todo = function(req, res) {
    // return res.end('<h1>TODO App</h1>'); //just for checking.

    return res.render('TODO_home', {
        title: "Task List"
    });
}