
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
    greeting.innerText = `HELLO ${username}`;
    greeting.classList.remove(HIDDEN);
}


function handleLoginSubmit(info) {
    info.preventDefault();
    //const username = loginInput.value;
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY , username);
    loginForm.classList.add(HIDDEN);
    paintGreeting(username);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", handleLoginSubmit);
}
else {
    loginForm.classList.add(HIDDEN);
    paintGreeting(savedUsername);
}