jQuery("document").ready(function(){
  AOS.init();

  const sections = document.querySelectorAll('h2, section');
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

  //Efeito background

  document.addEventListener('mousemove', function(){
    var x = event.clientX;
    var y = event.clientY;
    jQuery(".pointer-background").css("background", "radial-gradient(600px at " + x +"px "+ y +"px, rgba(255, 255, 255, 0.05), transparent 80%)");
  });
  

  //Menu

  jQuery(".menu-icon").on("click", function(){
    jQuery(".lateral").addClass("active");
    jQuery(".initial-page").addClass("recuo");
  });
  jQuery(document).on('click', function(event) {
    if (!jQuery(event.target).closest('.menu-icon').length) {
      jQuery(".lateral").removeClass("active");
      jQuery(".initial-page").removeClass("recuo");
    }
  });
});