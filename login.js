
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    // Dados de acesso
    const usuarioCorreto = "op_z4r8t2b6";
    const senhaCorreta = "Piano&Dinossauro&Martelo&953%";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        window.location.href = "sucesso.html";
    } else {
        window.location.href = "erro.html";
    }

});
