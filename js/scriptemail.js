$('.form').submit(function () {
	event.preventDefaut();
	$(function ($) {
		$.ajax({
			url: "https://formspree.io/prfoose@gmail.com",
			method: "POST",
			data: {
				name: $("#name").val(),
				email: $("#email").val(),
				about: $("#about").val(),
				message: $("#message").val(),
			},
			dataType: "json"
		}).done(function () {
			$("#name").val("");
			$("#email").val("");
			$("#about").val(""),
				$("#message").val("");
			alert("Email enviado com sucesso!");
		}).fail(function () {
			alert("Erro ao enviar email!");
		});
	});
});