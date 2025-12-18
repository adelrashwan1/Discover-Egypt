// Language Functions - Only ONE setLanguage function
function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyLanguage();
    
    // Optional: Show feedback without alert
    showLanguageFeedback(lang);
}

function applyLanguage() {
    let lang = localStorage.getItem("lang") || "ar";
    document.querySelectorAll("[data-ar]").forEach(el => {
        el.innerHTML = el.getAttribute("data-" + lang);
    });
    
    // Update RTL if needed
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

function showLanguageFeedback(lang) {
    // Optional: Remove if you don't want any feedback
    console.log(`Language set to: ${lang.toUpperCase()}`);
}

// Register/Login Popup
const registerBtn = document.querySelector(".register-btn");
const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.getElementById("closeLogin");

if (registerBtn && loginPopup) {
    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginPopup.style.display = "flex";
    });
}

if (closeLogin) {
    closeLogin.addEventListener("click", () => {
        loginPopup.style.display = "none";
    });
}

if (loginPopup) {
    window.addEventListener("click", (e) => {
        if (e.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });
}

// Hamburger menu toggle - Only if elements exist
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navLinks.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Initialize language on page load
applyLanguage();