//Nomenclatura
//$(seletor).ação();

$(document).ready(function(){
	$('button').click(function(){
		$('h1').fadeOut();
	});
});

/* PODERIAMOS ESCREVER DE FORMA REDUZIDA O CODIGO DA SEGUINTE MANEIRA:

$(function(){
	$('button').click(function(){
		$('h1').hide();
	});
});

*/

$(function(){
	$('#azul').click(function(){
		$('p').css({color: 'blue', backgroundColor: 'red'})
			.fadeOut('fast')
			.delay(500)
			.fadeIn(1000);
		$('#mensagem').text("Cor alterada com sucesso")
			.fadeIn('fast')
			.css({color: 'red', border: '1px solid red' /*, backgroundColor: '#6B238E'*/})
			.delay(1000)
			.fadeOut('fast')
			.addClass('blue');
		$('button').removeClass('blue');
	});
	$('#vermelho').click(function(){
		$('p').css({color: 'red', backgroundColor: 'blue'})
			.fadeOut('slow')
			.delay(500)
			.fadeIn(1000);
		$('#mensagem').text("Cor alterada com sucesso")
			.fadeIn('fast')
			.css({color: 'red', border: '1px solid blue' /*, backgroundColor: '#6B238E'*/})
			.delay(1000)
			.fadeOut('fast')
			.addClass('red');
		$('button').removeClass('red');
	});
});