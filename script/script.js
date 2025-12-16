function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyLanguage();
}

function applyLanguage() {
    let lang = localStorage.getItem("lang") || "ar";
    document.querySelectorAll("[data-ar]").forEach(el => {
        el.innerHTML = el.getAttribute("data-" + lang);
    });
}

applyLanguage();
const registerBtn = document.querySelector(".register-btn");
const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.getElementById("closeLogin");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginPopup.style.display = "flex";
});

closeLogin.addEventListener("click", () => {
  loginPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});
