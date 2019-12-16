const smoothScroll = () => {
  const navbarLinks = document.querySelectorAll("#navbar a");

  navbarLinks.forEach(e => e.addEventListener("click", navbarLinkClik));

  function navbarLinkClik(event) {
    smoothScroll(event);
  }

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");

    // Navbar height - sticky menu in smooth scroll

    const navBar = document.querySelector("#navbar");
    const navBarStyle = getComputedStyle(navBar);
    const navBarHeight = parseInt(navBarStyle["height"], 10);

    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - navBarHeight;

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
smoothScroll();


