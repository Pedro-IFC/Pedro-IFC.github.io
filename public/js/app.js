/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./assets/js/theme/functions.js":
/*!**************************************!*\
  !*** ./assets/js/theme/functions.js ***!
  \**************************************/
/***/ (() => {

jQuery("document").ready(function () {
  var projetos = [["PHP", "JavaScript", "SASS", "MySQL", "Git", "Wordpress"], ["PHP", "Laravel", "JavaScript", "SASS", "MySQL", "Git"], ["Java", "MySQL", "PostgreSQL", "Git"], ["PHP", "JavaScript", "SASS", "Git"], ["Java", "Git"], ["PHP", "JavaScript", "SASS", "MySQL", "Git", "Wordpress"], ["PHP", "JavaScript", "SASS", "MySQL", "Git", "Wordpress"], ["Java", "MySQL", "Git", "Docker", "SpringBoot"], ["Java", "Quarkus", "Docker", "Git"], ["JavaScript", "React", "NextJS", "Firebase", "Git"], ["JavaScript", "React", "MongoDB", "Git"], ["JavaScript", "PHP", "Laravel", "MySQL", "Docker", "Git"]];
  gerarGraficoPizza(projetos);
  loadColors();
  AOS.init();
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
  var swiperTec = new Swiper('.swiper-tecnologias', {
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
      pauseOnMouseEnter: true
    }
  });
  var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1000,
      pauseOnMouseEnter: true
    }
  });
  var swiperProjetos = new Swiper('.swiper-projetos', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var filters = document.querySelectorAll(".filter span");
  var allSlides = document.querySelectorAll(".swiper-projetos .swiper-slide");
  filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
      filters.forEach(function (f) {
        return f.classList.remove("active");
      });
      filter.classList.add("active");
      var filterClass = filter.classList[0];
      allSlides.forEach(function (slide) {
        if (slide.classList.contains(filterClass)) {
          slide.style.display = "block"; // Mostra o slide
        } else {
          slide.style.display = "none"; // Esconde o slide
        }
      });
      swiperProjetos.slideTo(0);
      swiperProjetos.update();
      AOS.refresh();
    });
  });
  filters[0].click();
  jQuery(".menu-icon").on("click", function () {
    jQuery(".lateral").addClass("active");
    jQuery(".initial-page").addClass("recuo");
  });
  jQuery(document).on('click', function (event) {
    if (!jQuery(event.target).closest('.menu-icon').length) {
      jQuery(".lateral").removeClass("active");
      jQuery(".initial-page").removeClass("recuo");
    }
    if (!jQuery(event.target).closest('#color-modal').length && !jQuery(event.target).closest('#open-color-modal').length) {
      jQuery("#color-modal").removeClass("active");
    }
  });
  jQuery(".reset-color-item").on('click', function (event) {
    if (jQuery(this).attr("color") == "black") {
      jQuery(this).attr("color", "white");
      localStorage.setItem('pColor', "#005543");
      localStorage.setItem('sColor', "#c3c3c3");
      localStorage.setItem('black', "#FFFFFF");
      localStorage.setItem('grey', "#000000");
      localStorage.setItem('white', "#141414");
      loadColors();
    } else {
      jQuery(this).attr("color", "black");
      localStorage.setItem('pColor', "#FF4500");
      localStorage.setItem('sColor', "#333333");
      localStorage.setItem('black', "#141414");
      localStorage.setItem('grey', "#E0E0E0");
      localStorage.setItem('white', "#FFFFFF");
      loadColors();
    }
  });
  jQuery("#open-color-modal").on('click', function (event) {
    jQuery("#color-modal").addClass("active");
  });
  jQuery(".close-modal").on('click', function (event) {
    jQuery("#color-modal").removeClass("active");
  });
  jQuery(".change-color-item").on("click", function () {
    if (jQuery(this).attr("color") == "black") {
      jQuery(this).attr("color", "white");
      localStorage.setItem('pColor', "#005543");
      localStorage.setItem('sColor', "#c3c3c3");
      localStorage.setItem('black', "#FFFFFF");
      localStorage.setItem('grey', "#000000");
      localStorage.setItem('white', "#141414");
      loadColors();
    } else {
      jQuery(this).attr("color", "black");
      localStorage.setItem('pColor', "#FF4500");
      localStorage.setItem('sColor', "#333333");
      localStorage.setItem('black', "#141414");
      localStorage.setItem('grey', "#E0E0E0");
      localStorage.setItem('white', "#FFFFFF");
      loadColors();
    }
  });
  jQuery(".input-colors input").on("change", function () {
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
    hex = hex.split('').map(function (x) {
      return x + x;
    }).join('');
  } else if (hex.length !== 6) {
    throw new Error('O valor hexadecimal deve ter 3 ou 6 caracteres');
  }
  var bigint = parseInt(hex, 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
}
function loadColors() {
  var pColor = localStorage.getItem('pColor');
  var sColor = localStorage.getItem('sColor');
  var black = localStorage.getItem('black');
  var grey = localStorage.getItem('grey');
  var white = localStorage.getItem('white');
  if (pColor) {
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
    if (white == "#FFFFFF") {
      jQuery(".change-color-item").attr("color", "black");
    } else {
      jQuery(".change-color-item").attr("color", "white");
    }
  } else {
    jQuery(this).attr("color", "black");
    localStorage.setItem('pColor', "#FF4500");
    localStorage.setItem('sColor', "#333333");
    localStorage.setItem('black', "#141414");
    localStorage.setItem('grey', "#E0E0E0");
    localStorage.setItem('white', "#FFFFFF");
    loadColors();
  }
}
function gerarGraficoPizza(projetos) {
  if (!document.getElementById('graficoPizza')) {
    return NULL;
  }
  var linguagensValidas = ["PHP", "Java", "Python", "JavaScript", "Quarkus", "SpringBoot", "Wordpress", "React", "Laravel"];
  var todasAsLinguagens = projetos.flat().filter(function (linguagem) {
    return linguagensValidas.includes(linguagem);
  });
  var contagemLinguagens = todasAsLinguagens.reduce(function (acc, linguagem) {
    acc[linguagem] = (acc[linguagem] || 0) + 1;
    return acc;
  }, {});
  var labels = Object.keys(contagemLinguagens);
  var valores = Object.values(contagemLinguagens);
  var primaryColor = '#FF4500';
  var secondaryColor = '#333333';
  var black = '#141414';
  var grey = '#EEE';
  var white = '#AAA';
  var additionalColors = ["#cc2400", "#940006", "#5d000c", "#250012", "#000000", "#00993e", "#7c4792", "#0165a8", "#be9100", "#a02100"];
  var backgroundColors = [primaryColor, secondaryColor, black, white, grey].concat(additionalColors);
  var ctx = document.getElementById('graficoPizza').getContext('2d');
  var plugins = [];
  if (typeof ChartDataLabels !== 'undefined') {
    plugins.push(ChartDataLabels);
  }
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: valores,
        backgroundColor: backgroundColors.slice(0, labels.length) // Garantir que o número de cores corresponda ao de labels
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false // Ocultar a legenda
        },
        tooltip: {
          callbacks: {
            label: function label(tooltipItem) {
              return "".concat(tooltipItem.label, ": ").concat(tooltipItem.raw, " projetos");
            }
          }
        },
        datalabels: typeof ChartDataLabels !== 'undefined' ? {
          color: '#FFFFFF',
          // Cor do texto dentro do gráfico
          font: {
            weight: 'bold',
            size: 14
          },
          formatter: function formatter(value, context) {
            return context.chart.data.labels[context.dataIndex];
          }
        } : undefined
      }
    },
    plugins: plugins
  });
}

/***/ }),

/***/ "./assets/scss/index.scss":
/*!********************************!*\
  !*** ./assets/scss/index.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkestrutura_basica"] = self["webpackChunkestrutura_basica"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/js/theme/functions.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/scss/index.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;