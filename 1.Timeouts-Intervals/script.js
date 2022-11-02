// // Write a function that mimics the behaviour of a typewriter.
// // Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.



// let str = 'Prout'.split('');

// const interval = setInterval(() => {
//   document.write(str[0]);
//   str = str.slice(1);
  
//   if (!str.length) {
//     clearInterval(interval);
//   }
// }, 1000);


  



// // Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.




const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
let sec = 0;
let min = 0

setInterval(() => {
    seconds.innerText = `Time elapsed: ${sec} seconds`;
    sec++;
    if(sec == 60) {
        min++;
        sec = 0;
        minutes.innerText = `${min} minutes has passed`;
    }
}, 1000);







// 

const circles = document.querySelectorAll(".circle");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector("#score")

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

const randomCircle = () => {
    circles.forEach(circle => {
        circle.classList.remove('mole')
    })

    let randomCircle = circles[Math.floor(Math.random()*12)]
    randomCircle.classList.add('mole')

    hitPosition = randomCircle.id

}

circles.forEach(circle => {
    circle.addEventListener('mousedown', () => {
        if(circle.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

const moveMole = () => {
    timerId = setInterval(randomCircle, 1000)
}

moveMole();

const countDown = () => {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game Over! Your final score is " + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)