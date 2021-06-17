const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEL = document.querySelector('#time');
const board = document.querySelector('#board')
let time = 0;
let score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', e => {
    if(e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'))
        screens[1].classList.add('up'); 
        startGame()
    }
})


board.addEventListener('click', e => {
    if(e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    timeEL.innerHTML = `00:${time}`;
    setTime(time)
}

function decreaseTime() {
    if(time === 0) {
        finishGame()
    }else {
        let current = --time
    if(current < 10){
        current = `0${current}`
    } 
    timeEL.innerHTML = `00:${current}`;
    setTime(current)
    }
    
}

function setTime(value) {
    timeEL.innerHTML = `00:${value}`;
}
function finishGame() {
    timeEL.parentNode.classList.add('hide');
    board.innerHTML =  `<h1>Cчет: <span class="primary">${score}</span> </h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const {width,height} = board.getBoundingClientRect()
    const x = getRandomNumber(0,width - size) 
    const y = getRandomNumber(0,height - size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    board.append(circle)

}


function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}