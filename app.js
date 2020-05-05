const itmes = document.querySelectorAll("#timeline li");
const footer = document.querySelector("#footer");
const select = document.querySelector("#directional");
const phoneInput = document.querySelector("#phone");
const navbarLinks = document.querySelectorAll("#navigation a");
const button = document.querySelector(".btn");
const techImgs = document.querySelectorAll(".technologies .tech");
const smoothScrollTime = 2500;
const slideSwitchTime = 1500;
const c = new Countries();

const navbarLinkClik = (e) => {
  const clickTarget = e.path[0].hash;
  smoothScroll(clickTarget, smoothScrollTime);
};
const smoothScroll = (target, duration) => {
  const whereToGo = document.querySelector(target);
  const targetPosition = whereToGo.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  requestAnimationFrame(animation);
};

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  itmes.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });
};

// SLIDER
const reset = () => {
  const icons = Array.from(techImgs);
  icons.forEach((el) => (el.style.display = "none"));
};
const slide = () => {
  const icons = Array.from(techImgs);
  let current = 0;
  intervalSlide = setInterval(() => {
    if (current === icons.length - 1) {
      current = -1;
    }
    reset();
    techImgs[current + 1].style.display = "flex";

    current++;
  }, slideSwitchTime);
};

c.getCountries().then((data) => {
  data.country.forEach((el) => {
    if (el.name === "Poland") {
      select.innerHTML += `<option value="+${el.callingCodes}" selected>${el.alpha2Code} +${el.callingCodes}</option>`;
    } else {
      select.innerHTML += `<option value="+${el.callingCodes}">${el.alpha2Code} +${el.callingCodes}</option>`;
    }
  });
});
// Year in footer
const footerYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  footer.innerHTML = `All rights reserved &copy; ${year} `;
};
footerYear();

// Events
phoneInput.addEventListener("keydown", (e) => {
  if (
    (e.keyCode < 58 && e.keyCode > 47) ||
    e.keyCode === 8 ||
    e.keyCode === 9
  ) {
  } else {
    e.preventDefault();
  }
});
window.addEventListener("load", slide);
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
navbarLinks.forEach((e) => e.addEventListener("click", navbarLinkClik));
