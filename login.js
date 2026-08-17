// =====================================
// LOGIN ADMINISTRATIVO
// =====================================

const loginForm = document.getElementById("loginForm");
const mensagemErro = document.getElementById("mensagemErro");


// =====================================
// USUÁRIO E SENHA TEMPORÁRIOS
// =====================================

const usuarioCorreto = "luciele";
const senhaCorreta = "123456";


// =====================================
// MOSTRAR / ESCONDER SENHA
// =====================================

const mostrarSenha = document.getElementById("mostrarSenha");
const campoSenha = document.getElementById("senha");

mostrarSenha.addEventListener("click", function () {

    if (campoSenha.type === "password") {

        campoSenha.type = "text";
        mostrarSenha.textContent = "🙈";

    } else {

        campoSenha.type = "password";
        mostrarSenha.textContent = "👁";

    }

});


// =====================================
// FORMULÁRIO DE LOGIN
// =====================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const usuario = document
        .getElementById("usuario")
        .value
        .trim();

    const senha = campoSenha.value;


    // Verifica os dados

    if (
        usuario === usuarioCorreto &&
        senha === senhaCorreta
    ) {

        // Guarda uma informação temporária
        // para o painel saber que o login foi realizado.

        sessionStorage.setItem(
            "usuarioLogado",
            "true"
        );

        // Vai para o painel administrativo

        window.location.href = "painel.html";

    } else {

        mensagemErro.textContent =
            "Usuário ou senha incorretos.";

    }

});