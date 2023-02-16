// Carrega animação da mão
const aniMao = bodymovin.loadAnimation({
    container: document.getElementById("animacao-dev"),
    path: "assets/animations/dev.json",
    loop: true,
    autoplay: true
})