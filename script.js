// Mobile menu toggle

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".hamburger-menu-toggle-wraper");
  const bottomNav = document.getElementById("bottom-nav");
  const closeButton = document.querySelector(".close");

  // Apply initial transition style to `bottomNav`
  bottomNav.style.transition = "top 0.3s linear";
  bottomNav.style.top = "-100vh"; // Start hidden

  // Show navigation
  menuToggle.addEventListener("click", () => {
    bottomNav.style.top = "0";
  });

  // Hide navigation
  closeButton.addEventListener("click", () => {
    bottomNav.style.top = "-100vh";
  });
});

// Swiper

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      pagination: false,
    },
  },
});

// Kalbu pasirinkimas
document.addEventListener("DOMContentLoaded", function () {
  const selectLng = document.getElementById("select-lng");
  const languageEnglish = document.querySelector(".language-english");
  const languageWrapper = document.querySelector(".language-wraper");

  selectLng.addEventListener("click", function () {
    languageEnglish.classList.toggle("d-none");
    languageEnglish.classList.toggle("d-block");
  });

  languageWrapper.addEventListener("mouseleave", function () {
    if (languageEnglish.classList.contains("d-block")) {
      languageEnglish.classList.remove("d-block");
      languageEnglish.classList.add("d-none");
    }
  });

  languageWrapper.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (languageEnglish.classList.contains("d-block")) {
        languageEnglish.classList.remove("d-block");
        languageEnglish.classList.add("d-none");
      }
    });
  });
});
