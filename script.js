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

//   // Check if the device is desktop or mobile based on screen width
//   const isDesktop = window.innerWidth >= 768;

//   // Set up the IntersectionObserver to detect when the timeline is in view (even partially)
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         // Check if the timeline is partially visible
//         isTimelineInView = entry.isIntersecting;
//       });
//     },
//     { threshold: 0.1 } // Trigger when 10% of the element is visible
//   );

//   observer.observe(timeline);

//   if (isDesktop) {
//     // Handle mouse wheel scrolling for desktop
//     window.addEventListener(
//       "wheel",
//       (e) => {
//         if (isTimelineInView && e.deltaY !== 0) {
//           // Allow scrolling if the timeline is not fully scrolled to the end
//           if (
//             timeline.scrollLeft + timeline.clientWidth <
//             timeline.scrollWidth
//           ) {
//             e.preventDefault();
//             timeline.scrollLeft += e.deltaY;
//           }
//         }
//       },
//       { passive: false }
//     );

//     // Handle mouse drag scrolling on desktop (click and hold)
//     let isDragging = false;
//     let mouseStartX = 0;

//     timeline.addEventListener("mousedown", (e) => {
//       if (isTimelineInView) {
//         isDragging = true;
//         mouseStartX = e.pageX;
//         timeline.style.cursor = "grabbing"; // Change cursor to indicate dragging
//       }
//     });

//     window.addEventListener("mousemove", (e) => {
//       if (isDragging) {
//         const mouseMoveX = e.pageX;
//         const deltaX = mouseStartX - mouseMoveX;

//         // Allow scrolling even when the timeline is not fully scrolled to the end
//         if (
//           timeline.scrollLeft + timeline.clientWidth < timeline.scrollWidth ||
//           deltaX < 0
//         ) {
//           timeline.scrollLeft += deltaX;
//           mouseStartX = mouseMoveX; // Update starting point to continue dragging
//         }
//       }
//     });

//     window.addEventListener("mouseup", () => {
//       isDragging = false;
//       timeline.style.cursor = "grab"; // Change cursor back to default
//     });

//     // Prevent text selection during drag (for a smoother experience)
//     window.addEventListener("selectstart", (e) => {
//       if (isDragging) {
//         e.preventDefault();
//       }
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  const parentDiv = document.querySelector(".parent");
  const scrollContainer = document.querySelector(".scroll-container");
  const restOfPage = document.querySelector(".rest-of-page");

  let scrollingProductDivs = true;

  const handleScroll = (event) => {
    if (scrollingProductDivs) {
      parentDiv.scrollTop += event.deltaY;

      if (
        parentDiv.scrollTop + parentDiv.clientHeight >=
        parentDiv.scrollHeight
      ) {
        scrollingProductDivs = false;
        parentDiv.scrollTop = parentDiv.scrollHeight - parentDiv.clientHeight;
      } else if (parentDiv.scrollTop <= 0) {
        parentDiv.scrollTop = 0;
      }

      event.preventDefault();
    }
  };

  window.addEventListener("scroll", () => {
    const rect = scrollContainer.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top >= 0 && rect.bottom <= windowHeight && window.scrollY === 0) {
      scrollingProductDivs = true;
    }
  });

  parentDiv.addEventListener("wheel", handleScroll);
});
