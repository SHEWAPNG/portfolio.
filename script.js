console.log("This is a quote generator");

const navbar = document.querySelector(".navbar");
const navBarOffsetTop = navbar.offsetTop;
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 90, 86, 85, 83, 65, 60];

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= navBarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset + window.innerHeight <= progress.offsetTop) {
    console.log("progress");
    document.querySelectorAll(".progress-percent").forEach((element, i) => {
      element.style.width = `${progressBarPercents[i]}%`;
    });
  }
});

