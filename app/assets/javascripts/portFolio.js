let image = document.getElementsByClassName("portfolio-hero");
new simpleParallax(image, {
  delay: 0.6,
  orientation: "right",
  transition: "cubic-bezier(0,0,0,1)"
});
