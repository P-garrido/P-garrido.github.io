const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("show");
    }
    else {
      entrada.target.classList.remove("show");
    }
  })
})


const ocultos = document.querySelectorAll(".hidden");

ocultos.forEach((oc) => {
  observador.observe(oc);
}) 