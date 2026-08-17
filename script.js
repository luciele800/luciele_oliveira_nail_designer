/* =========================================
   MENU MOBILE
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


/* Fecha o menu quando clicar em um link */

const navigationLinks =
    document.querySelectorAll(
        ".navigation a"
    );


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

    });

});



/* =========================================
   ANO DO RODAPÉ
========================================= */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();



/* =========================================
   GALERIA
========================================= */

const filters =
    document.querySelectorAll(".filter");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filters.forEach((filter) => {

    filter.addEventListener("click", () => {

        const category =
            filter.dataset.category;


        filters.forEach((button) => {

            button.classList.remove("active");

        });


        filter.classList.add("active");


        galleryItems.forEach((item) => {

            if (
                category === "todos" ||
                item.dataset.category === category
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});



/* =========================================
   DATA MÍNIMA
========================================= */

const dateInput =
    document.getElementById("date");


const today =
    new Date();


const yearToday =
    today.getFullYear();


const monthToday =
    String(today.getMonth() + 1)
        .padStart(2, "0");


const dayToday =
    String(today.getDate())
        .padStart(2, "0");


dateInput.min =
    `${yearToday}-${monthToday}-${dayToday}`;



/* =========================================
   HORÁRIOS
=========================================

   POR ENQUANTO são horários demonstrativos.

   Depois que conectarmos o Supabase,
   esses horários virão automaticamente
   do seu painel administrativo.
========================================= */

const timeSelect =
    document.getElementById("time");


dateInput.addEventListener("change", () => {

    timeSelect.innerHTML = "";

    const availableTimes = [
        "09:00",
        "10:30",
        "13:30",
        "15:00",
        "16:30",
        "18:00"
    ];


    const firstOption =
        document.createElement("option");

    firstOption.value = "";

    firstOption.textContent =
        "Selecione um horário";

    firstOption.disabled = true;

    firstOption.selected = true;

    timeSelect.appendChild(firstOption);


    availableTimes.forEach((time) => {

        const option =
            document.createElement("option");

        option.value = time;

        option.textContent = time;

        timeSelect.appendChild(option);

    });

});



/* =========================================
   FORMULÁRIO DE AGENDAMENTO
========================================= */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const clientName =
            document.getElementById(
                "clientName"
            ).value;


        const service =
            document.getElementById(
                "service"
            ).value;


        const shape =
            document.getElementById(
                "shape"
            ).value;


        const date =
            document.getElementById(
                "date"
            ).value;


        const time =
            document.getElementById(
                "time"
            ).value;


        if (
            !clientName ||
            !service ||
            !shape ||
            !date ||
            !time
        ) {

            alert(
                "Preencha todos os campos obrigatórios."
            );

            return;

        }


        alert(
            `Pedido recebido, ${clientName}!\n\n` +
            `Serviço: ${service}\n` +
            `Formato: ${shape}\n` +
            `Data: ${date}\n` +
            `Horário: ${time}\n\n` +
            `Na próxima etapa vamos conectar este formulário ao banco de dados.`
        );

    }
);



/* =========================================
   INSTAGRAM
=========================================

   COLOQUE SEU INSTAGRAM AQUI DEPOIS.

   Exemplo:

   https://instagram.com/seuusuario
========================================= */

const instagramLink =
    document.getElementById(
        "instagramLink"
    );


instagramLink.href =
    "#";