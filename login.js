
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    if (
        usuario === "op_z4r8t2b6" &&
        senha === "Piano&Dinossauro&Martelo&953%"
    ) {
        window.location.href = "sucesso.html";

    } else {
        window.location.href = "erro.html";
    }
});
