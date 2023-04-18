// swiper slider
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide: "true",
  fade: true,
  grabCursor: "true",
  dynamicBullets: true,
  freeMode: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1110: {
      slidesPerView: 3,
    },
  },
});

// menubar
var menu = document.querySelector("#menubar");
var nav = document.querySelector(".nav");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
  header.classList.toggle("stickys");
};

// window scroll navbar sticky
var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
  menu.classList.remove("fa-times");
  nav.classList.remove("active");
});

// typed.js
const typed = new Typed(".multiple-text", {
  strings: ["web developer", "front end developer", "sanjay singh"],
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
  ".home .content h2, .about .box h2,.service .card-body,.work .card-body ,.resume .card-body ,.blog .card-body ,.contact .card-body",
  { origin: "top" }
);

ScrollReveal().reveal(
  ".home .content .span, .home .icons,.about .box .about_me,.work .container-fluid,.service .swiper, .work .list,.blog .container .cont2",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(
  ".about .img img,.about .box p,.resume .resume-content .container1 h3,.resume .resume-content .container1,.blog .container .cont1,.contact .container .info",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(
  ".about .box h3,.resume .resume-content .container2 h3,.resume .resume-content .container2,.blog .container .cont3,.contact .container .contact-form form",
  {
    origin: "right",
  }
);

// work section
