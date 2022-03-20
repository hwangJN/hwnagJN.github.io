const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden" //css
const USERNAME_KEY = "username" //string


function onLoginSubmit(event){
    event.preventDefault(); //브라우저가 기본으로 하는 일을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value); //입력 받은 값을 storage에 저장
    paintGreeting();
}

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerHTML = `Hello ${username}! <br/> Have a nice day.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreeting();
}