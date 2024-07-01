/**
 * Global theme functions
 */

jQuery(document).ready(function(){
	/**
	 * Contact form 7 alerts
	 */
	const form = document.querySelector('.wpcf7')
	if (form) {
		form.addEventListener('wpcf7mailsent', () => {
			Swal.fire({
				icon: 'success',
				title: 'Sucesso!',
				text: 'Mensagem enviada!',
			})
		})

		form.addEventListener('wpcf7mailfailed', () => {
			Swal.fire({
				icon: 'error',
				title: 'Ocorreu um erro!',
				text: 'Se o erro persistir, favor contatar o suporte.',
			})
		})
	}
	if(document.querySelector("#copy")){
		document.querySelector("#copy").addEventListener("click", ()=>{
			var TextToCopy = document.querySelector("#copy").attributes.link.value;
			var TempText = document.createElement("input");
			TempText.value = TextToCopy;

			document.body.appendChild(TempText);
			TempText.select();

			document.execCommand("copy");
			document.body.removeChild(TempText);
			Swal.fire({
				icon: 'sucess',
				title: 'Texto copiado com sucesso',
			})
		});
	}
	if(document.querySelector(".swiper")){
		const swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			loop: true,
			pagination: {
			el: '.swiper-pagination',
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
			scrollbar: {
			el: '.swiper-scrollbar',
			},
		});
	}

	var telefonesInputs = document.querySelectorAll('input[name="telefone"], input[name="celular"]');
	telefonesInputs.forEach(function (input) {
		input.addEventListener('input', function () {
			aplicarMascaraTelefone(this)
		})
	})

});

function aplicarMascaraTelefone(input) {
	let valor = input.value
	valor = valor.replace(/\D/g, '')
	valor = valor.substring(0, 11)

	if (valor.length <= 2) {
		valor = valor.replace(/^(\d*)/, '($1')
	} else if (valor.length <= 6) {
		valor = valor.replace(/^(\d{2})(\d{0,4})/, '($1) $2')
	} else if (valor.length <= 10) {
		valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
	} else {
		valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
	}

	input.value = valor
}

function aplicarMascaraMonetaria(input) {
	let valor = input.value

	valor = valor.replace(/\D/g, '')
	valor = (valor / 100).toFixed(2) + ''
	valor = valor.replace('.', ',')
	valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
	valor = 'R$ ' + valor

	input.value = valor
}

function aplicarMascaraArea(input) {
	let valor = input.value.replace(/\D/g, '')
	if (valor.trim() === '') {
		input.value = null
	} else {
		valor += ' m²'
		input.value = valor
	}
}

function tratarBackspace(event) {
	let input = event.target
	let keyCode = event.keyCode || event.which
	if (keyCode === 8 && input.value.slice(-3) === ' m²') {
		event.preventDefault()
		let valor = input.value.replace(/ m²$/, '')
		valor = valor.slice(0, -1)
		input.value = valor ? `${valor} m²` : ''
	}
}

function transformFirstOptionToPlaceholder(selectElement) {
	let placeholderText = selectElement.options[0].text
	let placeholderOption = new Option(placeholderText, '', true, true)
	placeholderOption.disabled = true
	selectElement.insertBefore(placeholderOption, selectElement.firstChild)
	selectElement.removeChild(selectElement.options[1])
	selectElement.selectedIndex = 0
}

function addDataPlaceholderToInputsAndTextareas() {
	const wrappers = document.querySelectorAll('.wpcf7-form-control-wrap')
	wrappers.forEach((wrapper) => {
		const input =
			wrapper.querySelector('input') || wrapper.querySelector('textarea')
		if (input && input.placeholder) {
			wrapper.setAttribute('data-placeholder', input.placeholder)
		}
	})
}

// abertura de menu
jQuery('#mobile-icon').click(function (event) {
	event.preventDefault();
	jQuery('.overlay').toggleClass('active');
	jQuery('#mobile-menu').toggleClass('active');
});

// faz a rolagem suave de links ancora internos
jQuery('.menu a[href*=#]').click(function (e) {
	var target = jQuery("#"+e.target.href.slice(e.target.href.indexOf("#") + 1));
	if (target.length) {
		jQuery('html, body').animate({ scrollTop: target.offset().top }, 500);
	}
    jQuery('.overlay').removeClass('active');
    jQuery('#mobile-menu').removeClass('active');
});

// fechar menu clicando fora
window.addEventListener('click', function(e){
	if (jQuery('#mobile-menu').hasClass('active')) {
		if (!document.getElementById('mobile-menu').contains(e.target) && !document.querySelector('#mobile-icon').contains(e.target)){
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

