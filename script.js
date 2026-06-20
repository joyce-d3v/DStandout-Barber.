// Sticky nav background
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
burger?.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav__links a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.hero .reveal, .section__head, .service, .about__body, .about__img, .review, .book__copy, .book__form')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// Booking submit (opens WhatsApp with prefilled message)
function handleBooking(e){
  e.preventDefault();
  const f = e.target;
  const msg = `Hi Benaus! I'd like to book a session.%0A%0AName: ${f.name.value}%0APhone: ${f.phone.value}%0AService: ${f.service.value}%0ALocation: ${f.location.value}%0AWhen: ${f.when.value}%0ANotes: ${f.notes.value || '—'}`;
  window.open(`https://wa.me/2349097014996?text=${msg}`, '_blank');
  return false;
}