const nav = document.querySelector(".nav");
const send_email = document.getElementById("send_email");
const msg = document.querySelector(".msg");
const MENSAJE = "Mensaje recibido, nos contactaremos en breve!!";

window.addEventListener("scroll", fixNav);

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
