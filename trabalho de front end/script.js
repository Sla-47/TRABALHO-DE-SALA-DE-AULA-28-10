const shopButton = document.getElementById("shopButton");

const storePage = document.getElementById("storePage");

const comingSoonPage = document.getElementById(
    "comingSoonPage"
);

shopButton.addEventListener("click", function () {

    // Esconde a página principal
    storePage.style.display = "none";

    // Mostra a página de destino
    comingSoonPage.style.display = "flex";

    // Altera o título da aba do navegador
    document.title = "Geek Store | Em breve";

    // Volta ao topo da página
    window.scrollTo(0, 0);

});