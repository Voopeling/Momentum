let body = document.querySelector('.body__wrapper')
let bgNum = '01'
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 6){
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${bgNum}.jpg`
        img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`;
    }} else if (hours < 12){
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${bgNum}.jpg`
        img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`;
    }} else if (hours < 18){
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${bgNum}.jpg`
        img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`;
    }} else {
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg`
        img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`;
    }}
    setTimeout(getTimeOfDay, 30000);
}
getTimeOfDay()

function getRandomNum() {
    bgNum = Math.floor(Math.random()*20)
    if (bgNum < 10) {
        bgNum = '0' + bgNum
    } 
    if (bgNum === '00') {
        bgNum = '01'
    }
    setTimeout(getRandomNum, 30000)
}
getRandomNum()

let right = document.querySelector('.right__scroll')
let left = document.querySelector('.left__scroll')
right.addEventListener('click', () => {
    if (bgNum !== 20){
        bgNum = Number(bgNum) + 1
        if ( bgNum < 10){
            bgNum = '0' + bgNum
        }
    } else {
        bgNum = '01'
    }
    getTimeOfDay()
})
left.addEventListener('click', () => {
    if (bgNum !== '01'){
        bgNum = Number(bgNum) - 1
        if ( bgNum < 10){
            bgNum = '0' + bgNum
        }
    } else {
        bgNum = '20'
    }
    getTimeOfDay()
})