const clock = document.getElementById("clock");
const login_Form = document.querySelector("#login-form");


function getClock(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth()).padStart(2, "0");
    const day = String(today.getDate()).padStart(2,"0");
    const hour = String(today.getHours()).padStart(2,"0");
    const minute = String(today.getMinutes()).padStart(2,"0");
    const second = String(today.getSeconds()).padStart(2,"0");
    
    clock.innerHTML = `Date <br/ >${year} / ${month} / ${day} <br/> Time <br/> ${hour} : ${minute} : ${second}`;
}
function CLOCKSTART(event){
    event.preventDefault();
    getClock();
    setInterval(getClock, 1000);
    clock.classList.remove("hidden");
}
function paintClock(){
    getClock();
    setInterval(getClock, 1000);
    clock.classList.remove("hidden");
}

const NAME_KEY = "username";
const saveName = localStorage.getItem(NAME_KEY);

if (saveName === null){
    login_Form.addEventListener("submit", CLOCKSTART);
}
else{
    paintClock();
}

