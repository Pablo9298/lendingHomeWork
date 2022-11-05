// $("a").on("click", function (event) {
// 	event.preventDefault();
// 	var id = $(this).attr('href'),
// 		top = $(id).offset().top;
// 	$('body,html').animate({
// 		scrollTop: top
// 	}, 1500);
// });

// $('a[href^="#"').on('click', function() {

// 	let href = $(this).attr('href');

// 	$('html, body').animate({
// 			scrollTop: $(href).offset().top
// 	});
// 	return false;
// });

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};