const animation = ScrollReveal({
  distance: "30px",
  duration: 1500,
  delay: 400,
  reset: true,
});

animation.reveal(".hero-content, .hero-image, .service-content, .about-section, .footer-container", {
  origin: "bottom",
  delay: 200,
});
animation.reveal(".stats-section", {
  origin: "right",
  delay: 300,
});
