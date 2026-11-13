
const botoes = document.querySelectorAll(".lista-artistas button");
const artistas = document.querySelectorAll(".artista");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        // Identifica o artista selecionado
        const artistaSelecionado = botao.dataset.artista;

        // Esconde todos os artistas
        artistas.forEach(artista => {
            artista.hidden = true;
        });

        // Remove a seleção de todos os botões
        botoes.forEach(botao => {
            botao.classList.remove("active");
        });

        // Exibe o artista correspondente
        const artista = document.getElementById(artistaSelecionado);

        if (artista) {
            artista.hidden = false;

            // Marca o botão selecionado
            botao.classList.add("active");

            // Leva a tela até a imagem do artista
            artista.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});
