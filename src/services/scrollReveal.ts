import ScrollReveal from "scrollreveal";

ScrollReveal().reveal(".left-ani", {
  distance: "999px",
  origin: "left",
  opacity: 0,
  viewFactor: 0.3,
  duration: 500,
  reset: true, // Hace que la animación se repita cada vez que el elemento entra en el viewport
});

ScrollReveal().reveal(".right-ani", {
  distance: "999px",
  origin: "right",
  opacity: 0,
  viewFactor: 0.3,
  duration: 500,
  reset: true,
});

ScrollReveal().reveal(".top-ani", {
  distance: "999px",
  origin: "top",
  opacity: 0,
  viewFactor: 0.3,
  duration: 500,
  reset: true,
});

ScrollReveal().reveal(".bottom-ani", {
  distance: "999px",
  origin: "bottom",
  opacity: 0,
  viewFactor: 0.3,
  duration: 500,
  reset: true,
});
