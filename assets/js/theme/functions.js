jQuery("document").ready(function(){
  loadColors();
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
  jQuery(".menu-icon").on("click", function(){
    jQuery(".lateral").addClass("active");
    jQuery(".initial-page").addClass("recuo");
  });
  jQuery(document).on('click', function(event) {
    if (!jQuery(event.target).closest('.menu-icon').length) {
      jQuery(".lateral").removeClass("active");
      jQuery(".initial-page").removeClass("recuo");
    }
    if (!jQuery(event.target).closest('#color-modal').length && !jQuery(event.target).closest('#open-color-modal').length) {
      jQuery("#color-modal").removeClass("active");
    }
  });
  jQuery(".reset-color-item").on('click', function(event) {
    if(jQuery(this).attr("color")=="black"){
      jQuery(this).attr("color", "white");
      localStorage.setItem('pColor', "#005543");
      localStorage.setItem('sColor', "#c3c3c3");
      localStorage.setItem('black', "#FFFFFF");
      localStorage.setItem('grey', "#000000");
      localStorage.setItem('white', "#141414");
      loadColors();
    }else{
      jQuery(this).attr("color", "black");
      localStorage.setItem('pColor', "#FF4500");
      localStorage.setItem('sColor', "#333333");
      localStorage.setItem('black', "#141414");
      localStorage.setItem('grey', "#E0E0E0");
      localStorage.setItem('white', "#FFFFFF");
      loadColors();
    }
  });
  jQuery("#open-color-modal").on('click', function(event) {
    jQuery("#color-modal").addClass("active");
  });
  jQuery(".close-modal").on('click', function(event) {
    jQuery("#color-modal").removeClass("active");
  });
  
  jQuery(".change-color-item").on("click", function(){
    if(jQuery(this).attr("color")=="black"){
      jQuery(this).attr("color", "white");
      localStorage.setItem('pColor', "#005543");
      localStorage.setItem('sColor', "#c3c3c3");
      localStorage.setItem('black', "#FFFFFF");
      localStorage.setItem('grey', "#000000");
      localStorage.setItem('white', "#141414");
      loadColors();
    }else{
      jQuery(this).attr("color", "black");
      localStorage.setItem('pColor', "#FF4500");
      localStorage.setItem('sColor', "#333333");
      localStorage.setItem('black', "#141414");
      localStorage.setItem('grey', "#E0E0E0");
      localStorage.setItem('white', "#FFFFFF");
      loadColors();
    }
  });
  jQuery(".input-colors input").on("change", function(){
    var pColor = jQuery('.input-colors input[name=primaria]').val();
    var sColor = jQuery('.input-colors input[name=secundaria]').val();
    var black = jQuery('.input-colors input[name=preto]').val();
    var grey = jQuery('.input-colors input[name=cinza]').val();
    var white = jQuery('.input-colors input[name=branco]').val();
    localStorage.setItem('pColor', pColor);
    localStorage.setItem('sColor', sColor);
    localStorage.setItem('black', black);
    localStorage.setItem('grey', grey);
    localStorage.setItem('white', white);
    loadColors();
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
function loadColors(){
  var pColor = localStorage.getItem('pColor');
  var sColor = localStorage.getItem('sColor');
  var black = localStorage.getItem('black');
  var grey = localStorage.getItem('grey');
  var white = localStorage.getItem('white');
  if(pColor){
    jQuery("body").css({
      "--p-color": pColor,
      "--s-color": sColor,
      "--black": black,
      "--grey": grey,
      "--white": white
    });
    jQuery('.input-colors input[name=primaria]').val(pColor);
    jQuery('.input-colors input[name=secundaria]').val(sColor);
    jQuery('.input-colors input[name=preto]').val(black);
    jQuery('.input-colors input[name=cinza]').val(grey);
    jQuery('.input-colors input[name=branco]').val(white);
    if(white=="#FFFFFF"){
      jQuery(".change-color-item").attr("color", "black");
    }else{
      jQuery(".change-color-item").attr("color", "white");
    }
  }else{
    jQuery(this).attr("color", "black");
    localStorage.setItem('pColor', "#FF4500");
    localStorage.setItem('sColor', "#333333");
    localStorage.setItem('black', "#141414");
    localStorage.setItem('grey', "#E0E0E0");
    localStorage.setItem('white', "#FFFFFF");
    loadColors();
  }
}