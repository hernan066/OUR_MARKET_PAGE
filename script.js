const nav = document.querySelector(".nav");
const menu = document.querySelector(".links__menu-mobile");
const menu_toggle = document.querySelector(".menu-toggle");
const myCheckbox = document.querySelector(".myCheckbox");
const links_menu = document.querySelectorAll(".menu-mobile");
const send_email = document.getElementById("send_email");

const msg = document.querySelector(".msg");
const MENSAJE = "Mensaje recibido, nos contactaremos en breve!!";

window.addEventListener("scroll", fixNav);

links_menu.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("active");
    myCheckbox.checked = false;
  });
});

menu_toggle.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

send_email.addEventListener("click", (e) => {
  msg.innerHTML = MENSAJE;

  setTimeout(() => {
    msg.innerHTML = "";
  }, "5000");
});

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
