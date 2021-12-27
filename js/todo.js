const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");

let todos = [];
const TODOS_KEY = "todos";

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
    li.remove();
}

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
    const todo_li = document.createElement("li");
    todo_li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "X";
    button.className = "dlt_btn";
    button.addEventListener("click", deleteTodo);
    span.innerText = newTodo.text;

    todo_li.appendChild(span);
    todo_li.appendChild(button);
    todoList.appendChild(todo_li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now()
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}