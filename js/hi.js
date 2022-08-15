const timeOfDay = document.querySelector('.time-of-day')
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 6){
        timeOfDay.textContent = 'Доброй ночи,'
    } else if (hours < 12){
        timeOfDay.textContent = 'Доброе утро,'
    } else if (hours < 18){
        timeOfDay.textContent = 'Добрый день,'
    } else {
        timeOfDay.textContent = 'Вечер в хату,'
    }
    setTimeout(getTimeOfDay, 1000);
}
getTimeOfDay()

let user = document.querySelector('.name')
function setLocalStorage() {
    localStorage.setItem('user', user.value);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
    if(localStorage.getItem('user')) {
        user.value = localStorage.getItem('user');
    }
}
window.addEventListener('load', getLocalStorage) 