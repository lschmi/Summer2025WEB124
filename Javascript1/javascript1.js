//Lydia Schmidt, 06/22/25, source code from YouTube channels WesBos
/* 
It was difficult trying to figure out what to target in the css for the if statement.
I tried style.transition first because that was the css value but that didn’t work.
I eventually found a forum explaining that I needed to target not just the transition but the duration of the transition,
and a comment under the video also explained how to make it work.
*/

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  //js modification - keeps the seconds hand from transitioning backwards after a full rotation.
  if(seconds==0) {
    secondHand.style.transitionDuration = '0s'
    minsHand.style.transitionDuration = '0s'
    hourHand.style.transitionDuration = '0s'
  }else{
    secondHand.style.transitionDuration = '0.5s'
    minsHand.style.transitionDuration = '0.5s'
    hourHand.style.transitionDuration = '0.5s'
  }
}

setInterval(setDate, 1000);

setDate();
