import ScrollReveal from "scrollreveal";

ScrollReveal().reveal(".left-ani", {
  distance: "100px",
  origin: "left",
  opacity: 0,
  viewFactor: 0.5,
  duration: 500,
  reset: true, // Hace que la animación se repita cada vez que el elemento entra en el viewport
});

ScrollReveal().reveal(".right-ani", {
  distance: "100px",
  origin: "right",
  opacity: 0,
  viewFactor: 0.5,
  duration: 500,
  reset: true,
});

ScrollReveal().reveal(".top-ani", {
  distance: "100px",
  origin: "top",
  opacity: 0,
  viewFactor: 0.5,
  duration: 500,
  reset: true,
});

ScrollReveal().reveal(".bottom-ani", {
  distance: "100px",
  origin: "bottom",
  opacity: 0,
  viewFactor: 0.5,
  duration: 500,
  reset: true,
});
