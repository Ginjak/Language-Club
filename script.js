document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".hamburger-menu-toggle-wraper");
  const bottomNav = document.getElementById("bottom-nav");
  const closeButton = document.querySelector(".close");

  // Apply initial transition style to `bottomNav`
  if (bottomNav) {
    bottomNav.style.transition = "top 0.3s linear";
    bottomNav.style.top = "-100vh"; // Start hidden

    // Show navigation
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        bottomNav.style.top = "0";
      });
    }

    // Hide navigation
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        bottomNav.style.top = "-100vh";
      });
    }
  }

  // Swiper
  if (typeof Swiper !== "undefined") {
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

    var brandSwiper = new Swiper("#brands", {
      loop: true,
      slidesPerView: 7,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      },
    });

    var commentSwiper = new Swiper("#comments-slider", {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Kalbu pasirinkimas
  const selectLng = document.getElementById("select-lng");
  const languageEnglish = document.querySelector(".language-english");
  const languageWrapper = document.querySelector(".language-wraper");

  if (selectLng && languageEnglish && languageWrapper) {
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
  }

  // Footer current year
  function displayCurrentYear() {
    const currentYear = new Date().getFullYear(); // Get the current year
    const elements = document.querySelectorAll(".current-year"); // Select all elements with the class 'current-year'

    // Update the text content of each selected element
    elements.forEach((element) => {
      element.textContent = currentYear;
    });
  }
  displayCurrentYear();

  // Textarea expansion
  const textarea = document.getElementById("pastabos");

  if (textarea) {
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".timeline");
  let isTimelineInView = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isTimelineInView = entry.isIntersecting;
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(timeline);

  // Handle mouse wheel scrolling
  window.addEventListener(
    "wheel",
    (e) => {
      if (isTimelineInView && e.deltaY !== 0) {
        if (timeline.scrollLeft + timeline.clientWidth < timeline.scrollWidth) {
          e.preventDefault();
          timeline.scrollLeft += e.deltaY;
        }
      }
    },
    { passive: false }
  );

  // Handle touch scrolling for mobile devices
  let touchStartX = 0;

  window.addEventListener(
    "touchstart",
    (e) => {
      if (isTimelineInView) {
        touchStartX = e.touches[0].pageX;
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (isTimelineInView) {
        const touchMoveX = e.touches[0].pageX;
        const deltaX = touchStartX - touchMoveX;

        if (timeline.scrollLeft + timeline.clientWidth < timeline.scrollWidth) {
          e.preventDefault();
          timeline.scrollLeft += deltaX;
        }
      }
    },
    { passive: false }
  );
});
