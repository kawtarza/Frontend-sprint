// 1.Find the timezones of :
// Anchorage (USA)
// Reykjavik (Iceland)
// Saint-Petersburg (Russia)
// And display the date and time of these cities along with the time and date of Brussels.



const getAnchorageTime =function(){
    document.getElementById('Anchorage').innerHTML = new Date().toLocaleString('fr-FR',{timeZone:'US/Alaska',timeStyle:"medium",hourCycle:'h24'})
}

getAnchorageTime()
setInterval(getAnchorageTime,1000);



const getReykjavikTime =function(){
    document.getElementById('Reykjavik').innerHTML = new Date().toLocaleString('fr-FR',{timeZone:'Atlantic/Reykjavik',timeStyle:"medium",hourCycle:'h24'})
}

getReykjavikTime()
setInterval(getReykjavikTime,1000);




const getSPTime =function(){
    document.getElementById('Saint-Petersburg').innerHTML = new   Date().toLocaleString('fr-FR',{timeZone:'Europe/Moscow',timeStyle:"medium",hourCycle:'h24'})
} 
getSPTime()
setInterval(getSPTime,1000);


const getBrusselsTime =function(){
    document.getElementById('Brussels').innerHTML = new Date().toLocaleString('fr-FR',{timeZone:'Europe/Brussels',timeStyle:"medium",hourCycle:'h24'})
}
getBrusselsTime()
setInterval(getBrusselsTime,1000);


// 2. Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
// Write a function to find how many days have passed since any point in time (after 1970).

// une erreur dans cette methode à trouver
// const today = new Date("26/10/2022"); 
// const birthday = new Date("05/06/1989"); 
// const Diff_temps = birthday.getTime() - today.getTime(); 

// const Diff_jours = Diff_temps / (1000 * 3600 * 24); 
// console.log(Diff_jours)

// alert("Le nombre de jours entre les deux dates est de " + Math.round(Diff_jours) + " jours");

// méthode qui fonctionne
// let birthday = new Date('1989-06-05')
// // let today = new Date('2022-10-26')
// let todate = new Date();

// console.log((today.getTime() / (1000 * 3600 * 24)) + 'days have passed betweeen my bithday and today');

// 
let birth = new Date('1989-06-05');
let today = new Date();

const days = (birth, today) =>{
    let difference = birth.getTime() - today.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
document.getElementById("Birth").innerHTML = (days(birth, today) +" days passed");

// Write a function to find how many days have passed since any point in time (after 1970).

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}


document.getElementById("Passed").innerHTML = (getNumberOfDays("2/1/2015", "3/1/2021"))+' days have passed'

// 3. Using timestamps, find the exact time and date we will be in 80000 hours.
// Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.
 
let d = new Date();
let a = d.getHours( 80000);



let hours = new Date().getTime();
let updatedHours = new Date(hours + 80000 *1000 * 3600);
const dates = updatedHours.toDateString();
const time = updatedHours.toLocaleTimeString();
console.log(dates);
console.log(time);


// 4. Using HTML, CSS (and javascript, of course) reproduce the following picture. This should be centered both horizontaly and vertically in your page.

// let now = new Date();
// const day  = document.querySelector("#days");


// const jours = new Array(7);

// jours [0]= "SUN";
// jours [1]= "MON";
// jours [2]= "TUES";
// jours [3]= "WED";
// jours [4]= "THUR";
// jours [5]= "FRI";
// jours [6]= "SAT";

let now = new Date();
const day  = document.querySelector("#days");
const numjour= document.querySelector("#numjour");
const date= document.querySelector("#date");
const heure= document.querySelector("#heure");
const mitutes= document.querySelector("#minutes");
const seconde= document.querySelector("#seconde");
const jours= ["SUN", "MON","TUES","WED","THUR","FRI","SAT"]
const mois =["JAN","FEV","MARS","AVR","MAI","JUIN","JUL","AOUT","SEPT","OCT","NOV","DEC"]
const horaire= document.querySelector('#horaire')

const year= document.querySelector("#year");



function refresh(){ 
    
// ("#days");
let now = new Date();
// day.textContent= jours[now.getDay()
// ]
day.innerHTML= jours[now.getDay()];

date.innerHTML = mois[now.getMonth()]
numjour.innerHTML= now.getDate()
year.innerHTML= now.getFullYear()


heure.innerHTML= now.getHours()+":"

let min=now.getMinutes()

if (min < 10) {min = "0" + min};  // add zero in front of numbers < 10
;
minutes.innerHTML= min+":"

let sec= now.getSeconds()

    if (sec < 10) {sec = "0" + sec};  // add zero in front of numbers < 10
    ;
    seconde.innerHTML= sec;
  } 
setInterval(refresh,1000);

let hor =
horaire.addEventListener("click", )
