
const featureCards = document.querySelectorAll(".feature-card");
const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.15
  }
);
featureCards.forEach((card) => {
  observer.observe(card);
});