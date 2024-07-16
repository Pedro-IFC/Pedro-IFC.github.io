jQuery("document").ready(function(){
  AOS.init();
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= (sectionTop - 200)) {
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
  const swiperTec = new Swiper('.swiper-tecnologias', {
    slidesPerView: 12,
    spaceBetween: 12,
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 12
      },
      480: {
        slidesPerView: 5,
        spaceBetween: 12
      },
      768: {
        slidesPerView: 8,
        spaceBetween: 12
      },
      1000: {
        slidesPerView: 10,
        spaceBetween: 12
      },
      1200: {
        slidesPerView: 12,
        spaceBetween: 12
      }
    },
    speed: 500,
    autoplay: {
      delay: 1000,
      pauseOnMouseEnter: true,
    },
  });
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1000,
      pauseOnMouseEnter: true,
    },
  });
  const swiperProjetos = new Swiper('.swiper-projetos', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  document.addEventListener('mousemove', function(){
    var x = event.clientX;
    var y = event.clientY;
    const rootStyles = getComputedStyle(document.body);
    const whiteColor = rootStyles.getPropertyValue('--white').trim();
    var op = whiteColor=="#FFF"?0.05:0.2;
    const whiteWithOpacity = hexToRgba(whiteColor, op);
    jQuery(".pointer-background").css("background", "radial-gradient(600px at " + x +"px "+ y +"px, "+ whiteWithOpacity +", transparent 80%)");
  });
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
  jQuery(".change-color-item").on("click", function(){
    if(jQuery(this).attr("color")=="black"){
      jQuery(this).attr("color", "white");
      jQuery("body").css({
        "--p-color": "#005543",
        "--s-color": "#c3c3c3",
        "--black": "#fff",
        "--grey": "#000000",
        "--white": "#141414"
      });
    }else{
      jQuery(this).attr("color", "black");
      jQuery("body").css({
        "--p-color": "orangered",
        "--s-color": "#333",
        "--black": "#141414",
        "--grey": "#e0e0e0",
        "--white": "white"
      });
    }
  });
});
function hexToRgba(hex, alpha) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  } else if (hex.length !== 6) {
    throw new Error('O valor hexadecimal deve ter 3 ou 6 caracteres');
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}