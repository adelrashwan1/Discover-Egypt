/* =========================
   Language Toggle (AR / EN)
========================= */

let currentLang = "en";

function switchLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-ar]").forEach(element => {
    if (lang === "ar") {
      element.textContent = element.getAttribute("data-ar");
      document.body.style.direction = "rtl";
      document.body.style.textAlign = "right";
    } else {
      element.textContent = element.getAttribute("data-en");
      document.body.style.direction = "ltr";
      document.body.style.textAlign = "left";
    }
  });
}

/* =========================
   Simple Fade Animation
========================= */

const cards = document.querySelectorAll(".ancient-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});

/* =========================
   Button Hover Effect
========================= */

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 8px 20px rgba(39, 174, 96, 0.4)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});


// Default language on page load
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage("en"); // أو "ar" لو حابة عربي افتراضي
});
