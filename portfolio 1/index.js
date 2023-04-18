var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
  menu.classList.remove("fa-times");
  nav.classList.remove("active");
});

// navbar
var nav = document.querySelector(".nav");
var menu = document.querySelector("#menubar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
  header.classList.toggle("stickys");
};

// typed.js
const typed = new Typed(".multiple-text", {
  strings: ["front end developer", "web developer", "blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true,
});

// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  delay: 200,
  duration: 2000,
});
ScrollReveal().reveal(
  ".home .content h3, .about h2,.about .p,.about .content h1,.service h2,.resume h2, .resume .p,.portfolio h2,.portfolio .p ,.contact h2,resume .resume-content .container2 h3",
  { origin: "top" }
);

ScrollReveal().reveal(
  ".home .content h2,.home .content .btn,.service .content .box,.resume .resume-content .container1 h3,.resume .resume-content .container1 h3,.resume .resume-content .container2 h3,.portfolio .port-container .content,.resume .resume-content .container2 .box,.contact form,.about .content .box p,.service .p",
  { origin: "bottom" }
);

ScrollReveal().reveal(
  ".about .content img,.resume .resume-content .container1 .box, .contact .address,.about .content .info",
  { origin: "left" }
);

// active link navbar

// for only practice

// header sticky
// var header = document.querySelector('header');
// window.addEventListener('scroll', function () {
//     header.classList.toggle('sticky', window.scrollY > 0);
//     menu.classList.remove('fa-times');
//     nav.classList.remove('active');
// })

// // menubar

// var menu = document.querySelector('#menubar');
// var nav = document.querySelector('.nav');
// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     nav.classList.toggle('active');
//     header.classList.toggle('stickys');
// }

// // typed.js
// const typed = new Typed('.multiple-text', {
//     strings :['front end developer', 'blogger', 'web developer', 'youtuber'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backdelay: 1000,
//     loop:true
// })

// // scroll reveal

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     delay: 100,
//     duration: 1000
// });
// ScrollReveal().reveal('             ', { orign: 'top' });
