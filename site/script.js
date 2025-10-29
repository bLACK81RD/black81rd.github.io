// Анимация плавного появления секций при прокрутке
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  function revealSections() {
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();
});
