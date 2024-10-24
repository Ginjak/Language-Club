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
