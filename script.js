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

// document.addEventListener("DOMContentLoaded", () => {
//   const timeline = document.querySelector(".timeline");
//   let isTimelineInView = false;
//   let isTimelineScrolledToEnd = false;

//   // Set up the IntersectionObserver to detect when the timeline is in view (even partially)
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         isTimelineInView = entry.isIntersecting;
//       });
//     },
//     { threshold: 0.1 }
//   );
//   observer.observe(timeline);

//   // Function to check if the timeline is fully scrolled to the end
//   function checkIfTimelineScrolledToEnd() {
//     isTimelineScrolledToEnd =
//       timeline.scrollLeft + timeline.clientWidth >= timeline.scrollWidth - 1;
//     console.log("Is timeline scrolled to the end?", isTimelineScrolledToEnd);
//   }

//   // Handle mouse wheel scrolling for desktop
//   window.addEventListener(
//     "wheel",
//     (e) => {
//       // If the timeline is scrolled to the end, allow main page scroll
//       if (isTimelineInView && isTimelineScrolledToEnd) {
//         return; // Let the page scroll
//       }

//       // Prevent the page scroll only if the timeline is not fully scrolled to the end
//       if (isTimelineInView && e.deltaY !== 0) {
//         timeline.scrollLeft += e.deltaY;
//         e.preventDefault(); // Prevent the page scroll
//       }
//     },
//     { passive: false }
//   );

//   // Handle mouse drag scrolling for desktop (click and hold)
//   let isDragging = false;
//   let mouseStartX = 0;

//   timeline.addEventListener("mousedown", (e) => {
//     if (isTimelineInView) {
//       isDragging = true;
//       mouseStartX = e.pageX;
//       timeline.style.cursor = "grabbing"; // Change cursor to indicate dragging
//     }
//   });

//   window.addEventListener(
//     "mousemove",
//     (e) => {
//       if (isDragging && isTimelineInView) {
//         const mouseMoveX = e.pageX;
//         const deltaX = mouseStartX - mouseMoveX;
//         timeline.scrollLeft += deltaX;
//         mouseStartX = mouseMoveX; // Update starting point to continue dragging
//       }
//     },
//     { passive: false }
//   );

//   window.addEventListener("mouseup", () => {
//     isDragging = false;
//     timeline.style.cursor = "grab"; // Change cursor back to default
//   });

//   // Prevent text selection during drag for smoother experience
//   window.addEventListener("selectstart", (e) => {
//     if (isDragging) {
//       e.preventDefault();
//     }
//   });

//   // Handle touch scrolling for mobile devices
//   if (window.innerWidth < 768) {
//     let touchStartX = 0;

//     window.addEventListener(
//       "touchstart",
//       (e) => {
//         if (isTimelineInView) {
//           touchStartX = e.touches[0].pageX;
//         }
//       },
//       { passive: true }
//     );

//     window.addEventListener(
//       "touchmove",
//       (e) => {
//         if (isTimelineInView) {
//           const touchMoveX = e.touches[0].pageX;
//           const deltaX = touchStartX - touchMoveX;
//           timeline.scrollLeft += deltaX;
//           e.preventDefault(); // Prevent the page scroll
//         }
//       },
//       { passive: false }
//     );
//   }
// });

const timeline = document.querySelector("#svarbi-info .timeline");

let isMouseDown = false;
let startX;
let scrollLeft;

timeline.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - timeline.offsetLeft;
  scrollLeft = timeline.scrollLeft;
  timeline.style.cursor = "grabbing"; // Change cursor when dragging
});

timeline.addEventListener("mouseleave", () => {
  isMouseDown = false;
  timeline.style.cursor = "grab"; // Reset cursor when leaving the container
});

timeline.addEventListener("mouseup", () => {
  isMouseDown = false;
  timeline.style.cursor = "grab"; // Reset cursor after releasing mouse
});

timeline.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - timeline.offsetLeft;
  const walk = (x - startX) * 3; // Adjust the speed of scrolling (higher number = faster)
  timeline.scrollLeft = scrollLeft - walk;
});

// Add horizontal scroll with mouse wheel
timeline.addEventListener("wheel", (e) => {
  if (e.deltaY === 0) return; // Only trigger for horizontal scrolling
  e.preventDefault();
  timeline.scrollLeft += e.deltaY; // Scroll horizontally based on wheel movement
});
