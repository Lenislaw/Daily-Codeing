// // WERSJA 1

// // Mobile Navigation Toggler
// const openNavMenu = () => {
//   const navbarToggler = document.querySelector(".navbar-toggler");
//   const nav = document.querySelector(".navbar");
//   const navbarLinks = document.querySelectorAll(".navbar li");

//   navbarToggler.addEventListener("click", () => {
//     //Toggle Nav
//     nav.classList.toggle("navbar-active");
//     //Animate Links
//     navbarLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
//           0.6}s`;
//       }
//     });

//     // Navbar toggler Animation
//     navbarToggler.classList.toggle("toggle");
//   });
// };
// const app = () => {
//   openNavMenu();
// };

// app();

// WERSJA 2

// Mobile Navigation Toggler
const openNavMenu = () => {
  //Handlers
  const navbarToggler = document.querySelector(".navbar-toggler");
  const nav = document.querySelector(".navbar");
  const navbarLinks = document.querySelectorAll(".navbar li");
  const fbButton = document.querySelector(".social .fb");

  //Toggler and NavMenu Event's
  navbarToggler.addEventListener("click", navbarTogglerClick);
  navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));
  //Functions
  function navbarTogglerClick() {
    //Shows or hide Mobile NavBar Toggler
    navbarToggler.classList.toggle("toggle");
    // Shows or hide NavBar mobile
    nav.classList.toggle("navbar-active");
    //Display fbButton
    fbButton.classList.toggle("non-show-fb");
    //Animation for Mobile NavBar slide
    navbarLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.6}s`;
      }
    });
  }

  function navbarLinkClick() {
    if (nav.classList.contains("navbar-active")) {
      navbarToggler.click();
    }
  }
};

// Date in footer
const footerYear = () => {
  //handler
  const footer = document.querySelector("footer .foot .date");
  //Get today's date
  const dateToday = new Date();
  //Setup today's year
  let year = dateToday.getFullYear();
  //Change span text
  footer.innerText = year;
};

//Smooth scroll
const smoothScroll = () => {
  const navbarLinks = document.querySelectorAll(".navbar a");
  navbarLinks.forEach(e => e.addEventListener("click", navbarLinkClick));

  function navbarLinkClick(event) {
    smoothScroll(event);
  }

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");

    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;

    let duration = 1200;

    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      );

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
    // Options to change http://gizma.com/easing/
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }
  }
};
//Animations for divs
const animations = () => {
  AOS.init({
    offset: 300, //img height for better effect
    duration: 800,
    once: true,
    delay: 100
  });
};
const gallery = () => {
  const lightbox = GLightbox({
    touchNavigation: true,
    loopAtEnd: true,
    zoom: false
  });
};
// Dynamic Contact
const contact = () => {
  const street = document.querySelector(".street-adress");
  const phone = document.querySelector(".phone-number");
  const email = document.querySelector(".email-adress");

  street.innerText = "  ul.Bardzka 99/6";
  phone.innerText = "889-999-999";
  email.innerText = "gomath@gmailm";
};

//Back to top button

const backToTop = () => {
  const backToTopButton = document.querySelector("#back-to-top-btn");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (window.pageYOffset > 700) {
      // Show backToTopButton
      if (!backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnExit");
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
      }
    } else {
      // Hide backToTopButton
      if (backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnEntrance");
        backToTopButton.classList.add("btnExit");
        setTimeout(function() {
          backToTopButton.style.display = "none";
        }, 250);
      }
    }
  }

  backToTopButton.addEventListener("click", smoothScrollBackToTop);

  // function backToTop() {
  //   window.scrollTo(0, 0);

  function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      );
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
};

// const howtogo = () => {
//   const howtogo = document.querySelector(".how-to-go");

//   howtogo.addEventListener("click", () => {
//     howtogo.setAttribute(
//       "href",
//       "https://jakdojade.pl/wroclaw/trasa/?tn=Bardzka&tc=51.0820341:17.0492936&tsn=Bardzka&ft=LOCATION_TYPE_STOP&tt=LOCATION_TYPE_STOP"
//     );
//     setTimeout(function() {
//       howtogo.setAttribute("href", "");
//     }, 2000);
//   });
// };

//All app functions
const app = () => {
  animations();
  gallery();
  smoothScroll();
  backToTop();
  openNavMenu();
  contact();
  // howtogo();
  footerYear();
};

app();

// const przystanek = 'https://jakdojade.pl/wroclaw/trasa/?tn=Bardzka&tc=51.0820341:17.0492936&tsn=Bardzka&ft=LOCATION_TYPE_STOP&tt=LOCATION_TYPE_STOP';
