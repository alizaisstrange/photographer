gsap
.timeline({
  defaults: {
    duration: 1
  }
})
.add('start')
.from('.hero__title', {
  y: 100,
  opacity: 0
}, 'start')
.from('.hero__btn', {
  y: 100,
  opacity: 0
}, 'start')
.from('.hero__descr', {
  opacity: 0
}, 'start+=1')
.from('.img1', {
  scale: 0.5,
  opacity: 0
}, 'start+=1.5')
.from('.img2', {
  scale: 0.5,
  opacity: 0
}, 'start+=2')
.from('.img3', {
  scale: 0.5,
  opacity: 0
}, 'start+=2.5')
.from('.photos__author', {
  opacity: 0
}, 'start+=3')

var btnResets = document.querySelectorAll(".btn-reset");
var menu = document.querySelector("div.menu");
var tl = new TimelineLite({paused:true, onReverseComplete:reverseFunction}); //pause default
tl.from(".nav__list", {y: 20, opacity: 0}, 'start+=1')
tl.from(".menu__top", {opacity: 0.5,  backgroundPosition: "0px -50px"}, 'start')
tl.from(".social", {y: 20, opacity: 0}, 'start+=1.5')
tl.from(".menu__right", {y: 20, opacity: 0}, 'start+=1.5')
tl.from(".menu__container", {opacity: 0.5, backgroundPosition: "0px 50px"}, 'start+=0.5')


function reverseFunction() {
  menu.classList.remove('menu--open');
}

for (let btnReset of btnResets) {
  btnReset.onclick = function() {
    if(menu.classList.contains('menu--open')) {
      tl.reverse();
    }
    else {
      menu.classList.add('menu--open');
      tl.play();
    }
  }
}
