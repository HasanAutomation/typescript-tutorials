"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/todos/3';
axios_1["default"].get(URL).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(id, title, finished);
});
var logTodo = function (id, title, completed) {
    console.log("\n  The Todo with ID: ".concat(id, "\n  Has a title of: ").concat(title, "\n  Is it finished: ").concat(completed, "\n"));
};
