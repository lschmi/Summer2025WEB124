//Lydia Schmidt 07/12/25, source code from YouTube channels WesBos and Coding in Public

/* 
I used a tutorial from Coding in Publics YouTube's channel that explained how to show an active link
while making it accessible to screen readers using 'aria-current'.
I had never heard of aria before and am excited to learn more about it!
*/

const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  }else{
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);

//js modification - shows an active link to sighted people with color change and screen readers with aria.
document.querySelectorAll('.nav-link').forEach (link => {
  if(link.href === window.location.href){
    (link.setAttribute('aria-current', 'location'))
  }
})
