//Lydia Schmidt 07/21/25, source code from YouTube channel WesBos and w3schools.com, with help from Alexa Summers.

/* 
I had help from you to figure out how to change the color of the countdown clock when it reached 60 seconds(thank you again!),
and used a tutorial form w3schools.com to create a toggle function for a dark mode button.
*/

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');



function resume () {
  if (interval) {
    return
  }
  interval = setInterval(timer, 1000);
}

function pause () {
  clearInterval(interval);
  interval = null;
}

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
  displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
  //js modification - changes color after countdown reaches 60 seconds.
  if (seconds < 60) {
    timerDisplay.style.color = 'maroon';
    }else{
    timerDisplay.style.color = 'white';
  }
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});

//js modification - toggles a dark mode function when button is pressed.
function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

document.getElementById("dark-button").addEventListener("click", darkMode);
