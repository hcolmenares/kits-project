let index = 0;
const images = document.querySelectorAll('.banner img');

function initCarousel() {

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3500);

  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev-slide');
  const nextButton = document.querySelector('.next-slide');
  const dots = document.querySelectorAll('.dot');
  let slideIndex = 0;

  function showSlide(n) {
    if (n < 0) {
      slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
      slideIndex = 0;
    } else {
      slideIndex = n;
    }

    // Oculta todos los slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }

    // Oculta todas las bolitas
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }

    // Muestra el slide y la bolita correspondientes
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  function prevSlide() {
    showSlide(slideIndex - 1);
  }

  function currentSlide(n) {
    showSlide(n);
  }

  // Evento para el botón de siguiente
  nextButton.addEventListener('click', nextSlide);

  // Evento para el botón de anterior
  prevButton.addEventListener('click', prevSlide);

  // Evento para las bolitas
  dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      currentSlide(index);
    });
  });

  // Inicia la presentación automática
  setInterval(nextSlide, 3500);

}

function initCards()
{
  const container = document.querySelector('.card-list');
const cards = container.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    container.classList.add('expanded');
    container.classList.remove('normal');
  });

  card.addEventListener('mouseout', () => {
    container.classList.add('normal');
    container.classList.remove('expanded');
  });
});
}