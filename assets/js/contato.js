document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".box-1");  
    const botaoEnviar = form.querySelector(".botao");  

    botaoEnviar.addEventListener("click", function(event) {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome == "" || email == "" || mensagem == "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("Agradecemos pelo contato! Aguarde alguns instantes para ser respondido :)");

            // Limpa os campos do formulário
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mensagem').value = '';
        }
    });
});