const API_KEY = "1c106b293fa52d2c87a6272d09dd6bdd";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document. querySelector("#weather span:first-child");
        weather.innerText = `${Math.floor(data.main.temp)}°C @ ${data.name}`;
    });
    
}

function onGeoError(){
    alert("Can't find your location. No Weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);