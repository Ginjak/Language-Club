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
  const timelineContainer = document.querySelector(".timeline-container");
  let isTimelineInView = false;
  let startX = 0;
  let scrollLeft = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const viewportHeight = window.innerHeight;
        const entryTop = entry.boundingClientRect.top;
        const entryBottom = entry.boundingClientRect.bottom;

        if (
          entry.isIntersecting &&
          entryTop >= 0 &&
          entryBottom <= viewportHeight + 400
        ) {
          isTimelineInView = true;
        } else {
          isTimelineInView = false;
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(timelineContainer);

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

  // Touch events for mobile devices
  timeline.addEventListener("touchstart", (e) => {
    if (isTimelineInView) {
      startX = e.touches[0].pageX - timeline.offsetLeft;
      scrollLeft = timeline.scrollLeft;
    }
  });

  timeline.addEventListener("touchmove", (e) => {
    if (isTimelineInView) {
      const x = e.touches[0].pageX - timeline.offsetLeft;
      const walk = x - startX;
      timeline.scrollLeft = scrollLeft - walk;
    }
  });
});
