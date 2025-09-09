const toDoForm = document.getElementById("todo-form"),
    toDoInput = document.querySelector("#todo-form input"),
    todDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentNode;
    toDos = toDos.filter(items => items.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.className = "toDo";
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("span");
    button.className="toDo__button";
    button.innerHTML = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    todDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}