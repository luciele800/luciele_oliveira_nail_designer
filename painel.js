// =========================================
// PAINEL ADMINISTRATIVO
// =========================================


// =========================================
// VERIFICAÇÃO DO LOGIN
// =========================================

const usuarioLogado = sessionStorage.getItem("usuarioLogado");

if (usuarioLogado !== "true") {

    window.location.href = "login.html";

}


// =========================================
// ELEMENTOS DO PAINEL
// =========================================

const menuItens = document.querySelectorAll(".menu-item");
const secoes = document.querySelectorAll(".section");

const tituloPagina = document.getElementById("tituloPagina");


// =========================================
// NOMES DAS PÁGINAS
// =========================================

const nomesSecoes = {

    inicio: "Visão geral",

    agenda: "Minha agenda",

    agendamentos: "Agendamentos",

    clientes: "Clientes",

    lembretes: "Lembretes",

    galeria: "Galeria",

    avaliacoes: "Avaliações",

    configuracoes: "Configurações"

};


// =========================================
// TROCAR DE SEÇÃO
// =========================================

function abrirSecao(nomeSecao) {

    // Esconde todas as seções

    secoes.forEach(function (secao) {

        secao.classList.remove("active-section");

    });


    // Mostra a seção escolhida

    const secaoSelecionada =
        document.getElementById(nomeSecao);

    if (secaoSelecionada) {

        secaoSelecionada.classList.add(
            "active-section"
        );

    }


    // Remove o destaque de todos os botões

    menuItens.forEach(function (item) {

        item.classList.remove("active");

    });


    // Destaca o botão correspondente

    const botaoSelecionado =
        document.querySelector(
            `[data-section="${nomeSecao}"]`
        );

    if (botaoSelecionado) {

        botaoSelecionado.classList.add("active");

    }


    // Atualiza o título

    if (nomesSecoes[nomeSecao]) {

        tituloPagina.textContent =
            nomesSecoes[nomeSecao];

    }

}


// =========================================
// CLIQUE NO MENU
// =========================================

menuItens.forEach(function (item) {

    item.addEventListener("click", function () {

        const secao =
            item.getAttribute("data-section");

        abrirSecao(secao);

    });

});


// =========================================
// BOTÕES "VER TODOS"
// =========================================

const botoesSecao =
    document.querySelectorAll(
        "[data-section]"
    );

botoesSecao.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const secao =
            botao.getAttribute("data-section");

        abrirSecao(secao);

    });

});


// =========================================
// BOTÃO SAIR
// =========================================

const botaoSair =
    document.getElementById("sair");

if (botaoSair) {

    botaoSair.addEventListener(
        "click",
        function () {

            const confirmar =
                confirm(
                    "Deseja realmente sair do painel?"
                );

            if (confirmar) {

                sessionStorage.removeItem(
                    "usuarioLogado"
                );

                window.location.href =
                    "login.html";

            }

        }
    );

}


// =========================================
// DADOS TEMPORÁRIOS
// =========================================

// Por enquanto os números estão zerados.
// Depois vamos substituir esses valores
// pelos dados reais do banco de dados.

const proximosAtendimentos =
    document.getElementById(
        "proximosAtendimentos"
    );

const horariosDisponiveis =
    document.getElementById(
        "horariosDisponiveis"
    );

const totalClientes =
    document.getElementById(
        "totalClientes"
    );

const manutencoes =
    document.getElementById(
        "manutencoes"
    );


// =========================================
// VALORES INICIAIS
// =========================================

if (proximosAtendimentos) {

    proximosAtendimentos.textContent = "0";

}

if (horariosDisponiveis) {

    horariosDisponiveis.textContent = "0";

}

if (totalClientes) {

    totalClientes.textContent = "0";

}

if (manutencoes) {

    manutencoes.textContent = "0";

}