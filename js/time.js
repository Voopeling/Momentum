const time = document.querySelector('.time');
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate()
}
showTime();
function showDate() {
    const data = document.querySelector('.data');
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric',};
    const currentDate = date.toLocaleDateString('ru-RU', options);
    data.textContent = currentDate
}