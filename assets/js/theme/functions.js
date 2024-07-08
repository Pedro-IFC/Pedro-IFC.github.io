jQuery("document").ready(function(){
  AOS.init();
  const textElements = document.querySelectorAll('.separate-letters');
  textElements.forEach(textElement => {
      const text = textElement.textContent;
      textElement.innerHTML = '';
      text.split('').forEach(letter => {
          const span = document.createElement('span');
          span.textContent = letter;
          textElement.appendChild(span);
      });
  });
  
  const sections = document.querySelectorAll('h2');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
  var swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 32,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });
});