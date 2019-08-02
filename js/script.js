// smooth scrolling
function smoothScroll(ev) {
  const section = document.getElementById(ev.currentTarget.hash.substr(1));
  if (section !== null) {
    ev.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  }
}
