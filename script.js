(() => {
  const revealItems = document.querySelectorAll(".build-tile, .featured-build, .process-row, .manifesto");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
    observer.observe(item);
  });
})();
