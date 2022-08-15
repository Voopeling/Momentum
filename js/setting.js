// Выплывающее меню
let settingButton = document.querySelector('.setting-button')
let setting = document.querySelector('.setting-block')
settingButton.addEventListener('click', () => {
    setting.classList.toggle('active')
    settingButton.classList.toggle('active')
})

// Скрытие плеера
let player = document.querySelector('.player')
let hiddenPlayer = document.querySelector('#hidden-player')
let audioList = document.querySelector('.audio__list')
let hiddenPlaylist = document.querySelector('#hidden-playlist')
hiddenPlayer.addEventListener('change', () => {
    if (hiddenPlayer.checked) {
        player.style.left = '-300px'
    } else {
        player.style.left = '0'
    }
})
hiddenPlaylist.addEventListener('change', () => {
    if (hiddenPlaylist.checked) {
        audioList.style.left = '-300px'
    } else {
        audioList.style.left = '0'
    }
})

// Скрытие цитат
let quotes = document.querySelector('.quotes')
let hiddenQuotes = document.querySelector('#hidden-quotes')
hiddenQuotes.addEventListener('change', () => {
    if(hiddenQuotes.checked) {
        quotes.style.top = '1370px'
    } else {
        quotes.style.top = '1070px'
    }
})

// Скрытие погоды 
let hiddenWeather = document.querySelector('#hidden-weather')
let hiddenHumidity = document.querySelector('#hidden-humidity')
let hiddenWind = document.querySelector('#hidden-wind')
let weather = document.querySelector('.weather')
let humiditySetting = document.querySelector('.humidity')
let windSetting = document.querySelector('.wind')
hiddenWeather.addEventListener('change', () => {
    if (hiddenWeather.checked) {
        weather.style.right = '-350px'
    } else {
        weather.style.right = '0'
    }
})
hiddenHumidity.addEventListener('change', () => {
    if (hiddenHumidity.checked) {
        humiditySetting.style.marginLeft = '350px'
    } else {
        humiditySetting.style.marginLeft = '0'
    }
})
hiddenWind.addEventListener('change', () => {
    if (hiddenWind.checked) {
        windSetting.style.marginLeft = '350px'
    } else {
        windSetting.style.marginLeft = '0'
    }
})

// Скрытие приведствия
let hiddenTime = document.querySelector('#hidden-time')
let hiddenData = document.querySelector('#hidden-data')
let hiddenGreetings = document.querySelector('#hidden-greetings')
let timeSetting = document.querySelector('.time')
let dataSetting = document.querySelector('.data')
let greetingsSetting = document.querySelector('.greetings')
hiddenTime.addEventListener('change', () => {
    if (hiddenTime.checked) {
        timeSetting.style.opacity = '0'
    } else {
        timeSetting.style.opacity = '1'
    }
})
hiddenData.addEventListener('change', () => {
    if (hiddenData.checked) {
        dataSetting.style.opacity = '0'
    } else {
        dataSetting.style.opacity = '1'
    }
})
hiddenGreetings.addEventListener('change', () => {
    if (hiddenGreetings.checked) {
        greetingsSetting.style.opacity = '0'
    } else {
        greetingsSetting.style.opacity = '1'
    }
})