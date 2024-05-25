/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    }
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  const isEmpty = contactName.value === '' ||
    contactEmail.value === '' ||
    contactSubject.value === ''
  if(isEmpty) {

    //Change to warning message
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    contactMessage.textContent = 'Write all the input fields 📩'

  } else {
    //email.sondForm('serviceID','templateID','#formID', publickey)
    emailjs.sendForm('service_z9xyrpn','template_dbhr3sh','#contact-form','p1JtK1k9_B7TcdE3R')
      .then(() => {
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent ✅'

        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)

      }, (error)=>{
        alert('Sorry! Something has failed: ', error)
      })
    
    contactName.value = '',
    contactEmail.value= '',
    contactSubject.value = ''
      
  }


}
contactForm.addEventListener('submit', sendEmail)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
