/* ==========================================
   CONFIGURAÇÕES DO SITE
========================================== */


/*
    IMPORTANTE:

    Coloque aqui o número do seu WhatsApp.

    Exemplo:

    5542999999999

    Não coloque:
    +55
    espaços
    parênteses
    hífen
*/

const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI";


/*
    Coloque aqui o link do seu Instagram.

    Exemplo:

    https://www.instagram.com/seuinstagram/
*/

const INSTAGRAM_URL = "#";



/* ==========================================
   MENU MOBILE
========================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const menu =
    document.querySelector(".menu");


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        () => {

            menu.classList.toggle("open");

            const isOpen =
                menu.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

}


/*
    Fecha o menu depois que a pessoa
    clica em uma opção.
*/

document
    .querySelectorAll(".menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove("open");

            }
        );

    });



/* ==========================================
   ANIMAÇÕES AO ROLAR
========================================== */

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });



/* ==========================================
   MODAL DE AGENDAMENTO
========================================== */

const bookingModal =
    document.getElementById(
        "bookingModal"
    );

const openBooking =
    document.getElementById(
        "openBooking"
    );


/*
    Abrir modal
*/

if (openBooking) {

    openBooking.addEventListener(
        "click",
        () => {

            bookingModal.classList.add(
                "open"
            );

            bookingModal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

}


/*
    Fechar modal
*/

function closeBooking() {

    bookingModal.classList.remove(
        "open"
    );

    bookingModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


document
    .querySelectorAll("[data-close]")
    .forEach(element => {

        element.addEventListener(
            "click",
            closeBooking
        );

    });


/*
    Fechar usando ESC
*/

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeBooking();

        }

    }
);



/* ==========================================
   FORMULÁRIO DE AGENDAMENTO
========================================== */

const bookingForm =
    document.getElementById(
        "bookingForm"
    );


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            /*
                Se o WhatsApp ainda não foi
                configurado, mostramos um aviso.
            */

            if (
                WHATSAPP_NUMBER ===
                "SEU_NUMERO_AQUI"
            ) {

                alert(
                    "Antes de publicar o site, coloque o número do WhatsApp no arquivo js/script.js."
                );

                return;

            }


            const formData =
                new FormData(
                    bookingForm
                );


            const nome =
                formData.get("nome");

            const data =
                formData.get("data");

            const horario =
                formData.get("horario");

            const servico =
                formData.get("servico");

            const formato =
                formData.get("formato");

            const nailart =
                formData.get("nailart");

            const observacoes =
                formData.get("observacoes")
                || "Nenhuma";


            /*
                Mensagem que será enviada
                para o WhatsApp.
            */

            const mensagem =

`Olá, Luciele! ♡ Gostaria de solicitar um agendamento.

Nome: ${nome}

Data desejada: ${data}

Horário desejado: ${horario}

Serviço: ${servico}

Formato da unha: ${formato}

Nail Art: ${nailart}

Observações: ${observacoes}

Formas de pagamento: Pix ou dinheiro.`;


            /*
                Cria o link do WhatsApp.
            */

            const whatsappURL =

                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    mensagem
                )}`;


            /*
                Abre o WhatsApp.
            */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}



/* ==========================================
   INSTAGRAM
========================================== */

const instagramLink =
    document.getElementById(
        "instagramLink"
    );

const footerInstagram =
    document.getElementById(
        "footerInstagram"
    );


function configurarInstagram(link) {

    if (!link) {
        return;
    }


    link.addEventListener(
        "click",
        event => {

            /*
                Se ainda não colocou o Instagram,
                mostra um aviso.
            */

            if (
                INSTAGRAM_URL === "#"
            ) {

                event.preventDefault();

                alert(
                    "Coloque o link do Instagram no arquivo js/script.js antes de publicar."
                );

                return;

            }


            link.href =
                INSTAGRAM_URL;

        }
    );

}


configurarInstagram(
    instagramLink
);

configurarInstagram(
    footerInstagram
);