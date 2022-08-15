let button = document.querySelector('.quotes__button')
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')
button.addEventListener('click',async function() {
    const quotes = '../data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    let random = Math.floor(Math.random()*data.length)
    let randomValue = data[random]
    quote.textContent = randomValue.text
    author.textContent = randomValue.author
    
})