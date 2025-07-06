//Lydia Schmidt 07/05/25, source code from YouTube channel WesBos and website Medium

/* 
I used an event listener to uncheck checkboxes when a reset button was clicked.
At first I only tried to set the checkbox status to false and it didn't work.
Eventually I found an article on Medium.com showing I needed to cycle through all
the checkboxes to make the command work, like how WesBos made the shift command work.
(I had a no duh moment when I saw that)
*/

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e) {

  let inBetween = false;
  
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


//js modification - resets checkboxes after button is clicked.
const reset = document.getElementById('ResetButton');

reset.addEventListener('click', function() {
        checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
});

