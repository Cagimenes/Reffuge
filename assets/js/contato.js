document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".box-1");  
    const botaoEnviar = form.querySelector(".botao");  

    botaoEnviar.addEventListener("click", function(event) {
        event.preventDefault(); 
      
        alert("Agradecemos pelo contato! Aguarde alguns instantes para ser respondido :)");

        document.getElementById('nome').value='';
        document.getElementById('email').value='';
        document.getElementById('mensagem').value='';

    });
});