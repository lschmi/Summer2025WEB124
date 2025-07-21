//Lydia Schmidt 07/19/25, source code from YouTube channel WesBos

/* 
Unfortunately I tried to bite off more than I could chew.
I finished following along with the tutorial but couldn’t figure out how to make the changes I wanted work with the code,
so I wasn’t able to make any changes to this project.
*/
  const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
