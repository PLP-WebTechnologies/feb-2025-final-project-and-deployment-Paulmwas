const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});


const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }

    if (!validateEmail(email)) {
      formMessage.textContent = "Please enter a valid email.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    form.reset();
  });
}

function validateEmail(email) {
  // Basic email pattern
  return /\S+@\S+\.\S+/.test(email);
}
