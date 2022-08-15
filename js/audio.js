let play = document.querySelector('.play')
let previous = document.querySelector('.previous')
let next = document.querySelector('.next')
let audio = document.querySelector('audio')
let playImg = document.querySelector('.play__img')
let isPlay = false
let song = 0
let listAudio = document.querySelectorAll('.audio__item')
let songLength = document.querySelector('.length')
let progressBar = document.querySelector('.progress-bar')
let volumeSlider = document.querySelector('.volume-slider')
let volumeButton = document.querySelector('.volume-button')
let volumeImg = document.querySelector('#volume-img')
audio.volume = .50;
const audioCollection = [
    {
        title: 'Группа крови',
        duration: '04:00',
        src: './music/Виктор Цой - Группа крови.mp3',
    },
    {
        title: 'Звезда по имени Солнце',
        duration: '03:24',
        src: './music/Виктор Цой - Звезда по имени Солнце.mp3',
    },
    {
        title: 'Кукушка',
        duration: '06:40',
        src: './music/Виктор Цой - Кукушка.mp3',
    },
    {
        title: 'Пачка сигарет',
        duration: '04:29',
        src: './music/Виктор Цой - Пачка сигарет.mp3',
    },
]
function listStyle() {
    listAudio[song].style.color = "grey"
    songLength.textContent = audioCollection[song].duration
    for (let i = 0; i < listAudio.length; i++){
        if(i !== song){
            listAudio[i].style.color = "#fff"
        }
    }
}
play.addEventListener('click', () => {
    if (isPlay === false){
        audio.play()
        isPlay = true
        playImg.src = 'https://momentum-2021q3.netlify.app/assets/svg/pause.svg'
    } else if (isPlay){
        audio.pause()
        isPlay = false
        playImg.src = 'https://momentum-2021q3.netlify.app/assets/svg/play.svg'
    }
    listStyle()
})
function nextSong() {
    if (song > 2){
        song = 0
    } else {
        song++
    }
    audio.src = audioCollection[song].src
    if (isPlay){
        audio.play()
    }
    listStyle()
}

function prevSong() {
    if (song <= 0){
        song = 3
    } else {
        song = song - 1
    }
    audio.src = audioCollection[song].src
    if (isPlay === true){
        audio.play()
    }
    listStyle()
}
previous.addEventListener('click', prevSong)
next.addEventListener('click', nextSong)

audio.addEventListener('ended', function(){
    nextSong();
});
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};
function updateProgressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
    document.querySelector('.current').innerHTML = (formatTime(Math.floor(audio.currentTime)));
};

setInterval(updateProgressValue, 500);

function changeProgressBar() {
    audio.currentTime = progressBar.value;
};
volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    volumeWidth = newVolume * 100 + '%'
    document.querySelector('.volume-percentage').style.width = volumeWidth;
    localStorage.setItem('volumeWidth', volumeWidth);
    localStorage.setItem('volume', audio.volume);  
})
function getLocalStorage(){
    if(localStorage.getItem('volumeWidth') && localStorage.getItem('volume')){
        document.querySelector('.volume-percentage').style.width = localStorage.getItem('volumeWidth');
        audio.volume = localStorage.getItem('volume')
    }
}
window.addEventListener('load', getLocalStorage)

volumeButton.addEventListener('click', () => {
    if (audio.volume > 0){
        document.querySelector('.volume-percentage').style.width = 0
        audio.volume = 0
        volumeImg.classList.add('icono-volumeMute')
        volumeImg.classList.remove('icono-volumeHigh')
    } else if (audio.volume === 0) {
        if(localStorage.getItem('volumeWidth') && localStorage.getItem('volume')){
            document.querySelector('.volume-percentage').style.width = localStorage.getItem('volumeWidth');
            audio.volume = localStorage.getItem('volume')
        }
        volumeImg.classList.remove('icono-volumeMute')
        volumeImg.classList.add('icono-volumeHigh')
    }
})