$(document).ready(function(){
	// $(".button-light").hide().show(6000);

	$("#login").click(function(event) {
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();
		$("#contact-right").html(name + "<br>" + email + "<br>" + password);
	});

	// Przejścia przy wczytywaniu strony, animacje do sttrony Fadeing
	$("p,h1,h2,h3,h4, a, img, form, button").hide().fadeIn(2000);
});

