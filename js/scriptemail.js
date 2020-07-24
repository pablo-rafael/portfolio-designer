const newLocal = $((function ($) {
	$("form").submit(function (event) {
		event.preventDefault();
		$.ajax({
			url: "https://formspree.io/xbjzqdlb",
			method: "POST",
			data: {
				name: $("#name").val(),
				email: $("#email").val(),
				about: $("#about").val(),
				message: $("#message").val()
			},
			dataType: "json"
		}).done(function () {
			$("#name").val("");
			$("#email").val("");
			$("#about").val("");
			$("#message").val("");
			alert("Email enviado com sucesso!");
		}).fail(function () {
			alert("Erro ao enviar email!");
		});
	});
}));