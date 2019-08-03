// smooth scrolling
function smoothScroll(ev) {
  const section = document.getElementById(ev.currentTarget.hash.substr(1));
  if (section !== null) {
    ev.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// humburger menu
// ---- DOM Caching ----
var btn = document.querySelector(".hamburger-menu");
var sideMenu = document.querySelector(".sideNav");
var sideMenu_close = document.querySelector(".sideNav-close");

// ---- Triggers Slide Menu ----
btn.addEventListener("click", function() {
  sideMenu.classList.toggle("active");
  if (!this.classList.contains("hidden")) {
    console.log("A");
    this.classList.add("hidden");
  }
});

// ---- Close Menu ----
sideMenu_close.addEventListener("click", function() {
  sideMenu.classList.remove("active");
  btn.classList.remove("hidden");
});
