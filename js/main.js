$(function () {

	$(window).scroll(function() {

		$('.man').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+550) {
				$(this).addClass("fadeIn");
			}
		});

	});

		  //Animated scroll

		  $("a.go").click(function (e) {
		  	e.preventDefault();
		  	elementClick = $(this).attr("href");
		  	destination = $(elementClick).offset().top;
		  	$("body,html").animate({scrollTop: destination }, 1100);
		  });

		});

var btn = document.getElementById('show');
var nav = document.getElementById('nav');

btn.addEventListener('click', function() {
	nav.classList.toggle('active');
});