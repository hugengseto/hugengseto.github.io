//typing say hello
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#sayHello", {
    speed: 100,
    waitUntilVisible: true,
  })
    .type("Halo semua 👋, saya", { delay: 500 })
    .delete(17)
    .type("el")
    .move(null, { to: "END" })
    .type("lo everyone 👋, i am", { delay: 500 })
    .go();
});

//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  // menampung nilai offsetTop
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  // Mengecek jika nilai scrollY lebih besar dari nilai fixedNav
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
    header.classList.remove("navbar-fixed");
  }
};

//humberger
const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar humberger
window.addEventListener("click", function (e) {
  if (e.target != humberger && e.target != navMenu) {
    humberger.classList.remove("humberger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan posisi toggle sesuai mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
