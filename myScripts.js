function dynamicHeight() {
  const elementos = document.querySelectorAll("[class*='dh']");
 
  if (!elementos.length) return; // No hay elementos, salimos sin hacer nada

  elementos.forEach(el => {
    try {
      const dwClass = Array.from(el.classList).find(cls => cls.startsWith("dh"));
      if (!dwClass) return;

      const targetId = dwClass.slice(2); // Quita el "dw" para obtener el ID
      const targetElement = document.getElementById(targetId);
      console.log(targetId)
      if (!targetElement) return;

      const targetHeight = targetElement.offsetHeight;
      el.style.height = `calc(100vh - ${targetHeight}px)`;
      //console.log("aly2")
    } catch (error) {
      console.warn("Error ajustando altura para elemento:", el, error);
      // Continúa con el siguiente sin detener el ciclo
    }
  });
}

function dynamicTop() {
  const elementos = document.querySelectorAll("[class*='dt']");
 
  if (!elementos.length) return; // No hay elementos, salimos sin hacer nada

  elementos.forEach(el => {
    try {
      const dwClass = Array.from(el.classList).find(cls => cls.startsWith("dt"));
      if (!dwClass) return;

      const targetId = dwClass.slice(2); // Quita el "dw" para obtener el ID
      const targetElement = document.getElementById(targetId);
      console.log(targetId)
      if (!targetElement) return;

      const targetHeight = targetElement.offsetHeight;
      el.style.top = `${targetHeight}px`;
      //console.log("aly2")
    } catch (error) {
      console.warn("Error ajustando altura para elemento:", el, error);
      // Continúa con el siguiente sin detener el ciclo
    }
  });
}

function cust_anim1(){
   // 1. Creamos el observer sin usar unobserve
   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando el elemento entra en la zona de visión
        entry.target.classList.add('cust_anim_visible');
      } else {
        // Cuando sale de la zona de visión
        entry.target.classList.remove('cust_anim_visible');
      }
    });
  }, {
    threshold: 0.1  // dispara al 10% visible; cámbialo a 0 para disparar al primer píxel
  });

  // 2. Comenzamos a observar todos los .reveal
  document.querySelectorAll('.cust_anim').forEach(el => {
    observer.observe(el);
  });
}

function dynamicPaddingTop() {
  const elementos = document.querySelectorAll("[class*='dpt']");
 
  if (!elementos.length) return; // No hay elementos, salimos sin hacer nada

  elementos.forEach(el => {
    try {
      const dwClass = Array.from(el.classList).find(cls => cls.startsWith("dpt"));
      if (!dwClass) return;

      const targetId = dwClass.slice(3); // Quita el "dw" para obtener el ID
      const targetElement = document.getElementById(targetId);
      console.log(targetId)
      if (!targetElement) return;

      const targetHeight = targetElement.offsetHeight;
      el.style.paddingTop = `${targetHeight}px`;
      //console.log("aly2")
    } catch (error) {
      console.warn("Error ajustando altura para elemento:", el, error);
      // Continúa con el siguiente sin detener el ciclo
    }
  });
}


function cust_anim2(){
  // 1. Creamos el observer sin usar unobserve
  const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       // Cuando el elemento entra en la zona de visión
       entry.target.classList.add('cust_anim2_visible');
     } else {
       // Cuando sale de la zona de visión
       entry.target.classList.remove('cust_anim2_visible');
     }
   });
 }, {
   threshold: 0.1  // dispara al 10% visible; cámbialo a 0 para disparar al primer píxel
 });

 // 2. Comenzamos a observar todos los .reveal
 document.querySelectorAll('.cust_anim2').forEach(el => {
   observer.observe(el);
 });
}
//----carrusel con botones
function carousel1() {
  // Si no hay ningún .carousel1, salimos
  const carousels = document.querySelectorAll('.carousel1');
  if (carousels.length === 0) return;

  carousels.forEach((carousel) => {
    // Buscamos los elementos clave dentro de cada carrusel
    const track   = carousel.querySelector('.carousel-track1');
    const prevBtn = carousel.querySelector('.prev1');
    const nextBtn = carousel.querySelector('.next1');

    // Si falta alguno, saltamos este carrusel
    if (!track || !prevBtn || !nextBtn) return;

    const slides = Array.from(track.children);
    let currentIndex = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  });
}

//carrusel desvanecido y automatico
function carousel2() {
  // Seleccionamos directamente los slides
  const slides = document.querySelectorAll('.carousel-track2 .slide2');
  // Si no hay .slide2, salimos
  if (slides.length === 0) return;

  let current = 0;
  const interval = 3000;

  setInterval(() => {
    slides[current].classList.remove('active2');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active2');
  }, interval);
}

document.addEventListener("DOMContentLoaded", () => {
  dynamicHeight();
  dynamicTop();
  dynamicPaddingTop();
  cust_anim1();
  cust_anim2();
  carousel1();
  carousel2();

  window.addEventListener("resize", () => {
    dynamicHeight();
    dynamicPaddingTop();
    dynamicTop();
    cust_anim1();
    cust_anim2();
    carousel1();
    carousel2();
  });
});
