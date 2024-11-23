function resultado (mensagem) {
    document.getElementsByTagName("p")[0].innerHTML = mensagem;
}

const botao = document.getElementsByTagName("button");

botao[0].addEventListener("click", minhaFuncao => {
    resultado("Parágrafo alterado!");
})