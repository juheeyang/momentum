const greetingContainer = document.querySelector(".greeting");

const USERNAME_KEY = "username";

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
    localStorage.setItem(USERNAME_KEY,value);
    paintGreeting(value);
}

function paintGreeting(value) {
    greetingContainer.innerHTML = "";
    const greeting = document.createElement("span");
    greeting.innerText = `Hello, ${value}`;
    greeting.className = "greeting_name";
    greetingContainer.appendChild(greeting);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintInput() {
    const input = document.createElement("input");
    input.placeholder = "Type your name here";
    input.type = "text";
    input.className = "input_name";
    const form = document.createElement("form");
    form.addEventListener("submit",handleSubmit);
    form.appendChild(input);
    greetingContainer.appendChild(form);

}

if(savedUsername === null) {
    paintInput();
} else {
    paintGreeting(savedUsername);
}