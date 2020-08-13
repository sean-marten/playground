$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "GET",
    }).then(function(todos) {
        const $todoList = $(".todo-list");
        todos.forEach(function(todo) {
            const $todo = $("<li>").addClass("list-group-item");
            const $div = $("<div>").addClass("md-v-line");
            const $i = $("<i>");
            todo.completed ? $i.addClass("fas fa-check mr-5") : $i.addClass("fas fa-times mr-5");
            $todo.append($div, $i, todo.title);
            $todoList.append($todo);
        });
    })
});