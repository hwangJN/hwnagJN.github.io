const API_KEY = "ec5c36e34f040e79ed2d8e60817e0948";
const loginFORM = document.querySelector("#login-form");
const watherDIV = document.querySelector("#weather");
const Weather = document.querySelector("#weather span:first-child");
const City = document.querySelector("#weather span:last-child");

function onGeeOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        City.innerText = data.name;
        Weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;      
    });

}   
function onGeoError(){
    alert("Can't find you. NO weather for you.");
}
function handleWeatherSubmit(){
    watherDIV.classList.remove("hidden");
}

const nameKey = "username";
const savenamE = localStorage.getItem(nameKey);

if (savenamE === null){
    loginFORM.addEventListener("submit", handleWeatherSubmit);
    navigator.geolocation.getCurrentPosition(onGeeOk, onGeoError);
}
else{
    watherDIV.classList.remove("hidden");
    navigator.geolocation.getCurrentPosition(onGeeOk, onGeoError);
}


