const API_KEY = "0db7106ec70e7b086c079aaf5db4af9c";

function onGeo(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live it", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const name = document.querySelector("#weather span:last-child");
        name.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}` ;
    });
}

function onGeoerr() {
    alert("can't find you");
}
navigator.geolocation.getCurrentPosition(onGeo, onGeoerr);

