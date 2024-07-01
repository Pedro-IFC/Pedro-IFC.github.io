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

/**
 * Global theme functions
 */

jQuery(document).ready(function () {
  /**
   * Contact form 7 alerts
   */
  var form = document.querySelector('.wpcf7');
  if (form) {
    form.addEventListener('wpcf7mailsent', function () {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Mensagem enviada!'
      });
    });
    form.addEventListener('wpcf7mailfailed', function () {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro!',
        text: 'Se o erro persistir, favor contatar o suporte.'
      });
    });
  }
  if (document.querySelector("#copy")) {
    document.querySelector("#copy").addEventListener("click", function () {
      var TextToCopy = document.querySelector("#copy").attributes.link.value;
      var TempText = document.createElement("input");
      TempText.value = TextToCopy;
      document.body.appendChild(TempText);
      TempText.select();
      document.execCommand("copy");
      document.body.removeChild(TempText);
      Swal.fire({
        icon: 'sucess',
        title: 'Texto copiado com sucesso'
      });
    });
  }
  if (document.querySelector(".swiper")) {
    var swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    });
  }
  var telefonesInputs = document.querySelectorAll('input[name="telefone"], input[name="celular"]');
  telefonesInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      aplicarMascaraTelefone(this);
    });
  });
});
function aplicarMascaraTelefone(input) {
  var valor = input.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.substring(0, 11);
  if (valor.length <= 2) {
    valor = valor.replace(/^(\d*)/, '($1');
  } else if (valor.length <= 6) {
    valor = valor.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
  } else if (valor.length <= 10) {
    valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }
  input.value = valor;
}
function aplicarMascaraMonetaria(input) {
  var valor = input.value;
  valor = valor.replace(/\D/g, '');
  valor = (valor / 100).toFixed(2) + '';
  valor = valor.replace('.', ',');
  valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  valor = 'R$ ' + valor;
  input.value = valor;
}
function aplicarMascaraArea(input) {
  var valor = input.value.replace(/\D/g, '');
  if (valor.trim() === '') {
    input.value = null;
  } else {
    valor += ' m²';
    input.value = valor;
  }
}
function tratarBackspace(event) {
  var input = event.target;
  var keyCode = event.keyCode || event.which;
  if (keyCode === 8 && input.value.slice(-3) === ' m²') {
    event.preventDefault();
    var valor = input.value.replace(/ m²$/, '');
    valor = valor.slice(0, -1);
    input.value = valor ? "".concat(valor, " m\xB2") : '';
  }
}
function transformFirstOptionToPlaceholder(selectElement) {
  var placeholderText = selectElement.options[0].text;
  var placeholderOption = new Option(placeholderText, '', true, true);
  placeholderOption.disabled = true;
  selectElement.insertBefore(placeholderOption, selectElement.firstChild);
  selectElement.removeChild(selectElement.options[1]);
  selectElement.selectedIndex = 0;
}
function addDataPlaceholderToInputsAndTextareas() {
  var wrappers = document.querySelectorAll('.wpcf7-form-control-wrap');
  wrappers.forEach(function (wrapper) {
    var input = wrapper.querySelector('input') || wrapper.querySelector('textarea');
    if (input && input.placeholder) {
      wrapper.setAttribute('data-placeholder', input.placeholder);
    }
  });
}

// abertura de menu
jQuery('#mobile-icon').click(function (event) {
  event.preventDefault();
  jQuery('.overlay').toggleClass('active');
  jQuery('#mobile-menu').toggleClass('active');
});

// faz a rolagem suave de links ancora internos
jQuery('.menu a[href*=#]').click(function (e) {
  var target = jQuery("#" + e.target.href.slice(e.target.href.indexOf("#") + 1));
  if (target.length) {
    jQuery('html, body').animate({
      scrollTop: target.offset().top
    }, 500);
  }
  jQuery('.overlay').removeClass('active');
  jQuery('#mobile-menu').removeClass('active');
});

// fechar menu clicando fora
window.addEventListener('click', function (e) {
  if (jQuery('#mobile-menu').hasClass('active')) {
    if (!document.getElementById('mobile-menu').contains(e.target) && !document.querySelector('#mobile-icon').contains(e.target)) {
      jQuery('.overlay').toggleClass('active');
      jQuery('#mobile-menu').toggleClass('active');
    }
  }
});

// fechamento do menu
jQuery('#close').click(function () {
  jQuery('.overlay').toggleClass('active');
  jQuery('#mobile-menu').toggleClass('active');
});

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