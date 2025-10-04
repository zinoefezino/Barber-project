document.getElementById("hamburger").addEventListener("click", function () {
  const nav = document.querySelector("nav");
  const hamburgerIcon = this.querySelector("i");
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times");
  } else {
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  }
});
