//https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=25aafde39a70c2cff3afc3d2ca55c5d2&units=metric
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
let city = document.querySelector('.weather__input')
async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=e1716f73e593d35d0ab259a341b12eff&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    wind.textContent = `Скорость ветра: ${data.wind.speed} м/с`;
    humidity.textContent = `Влажность: ${data.main.humidity} %`
    let weatherDes = data.weather[0].description.split('')
    weatherDes[0] = weatherDes[0].toUpperCase()
    weatherDes = weatherDes.join('')
    weatherDescription.textContent = `${weatherDes}`;
}
getWeather()
city.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        getWeather()
    }
});
function setLocalStorage() {
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}
window.addEventListener('load', getLocalStorage)
window.addEventListener('load', getWeather)