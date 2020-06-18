function valida(){
	var nome = document.getElementById('nome');

	if (nome.value == "") {
		alert("Campo nome não pode estar em branco.");
	}
	else {
		alert("Nenhum problema foi detectado. Seu formulario pode ser enviado com sucesso: "+nome.value)
	}
}