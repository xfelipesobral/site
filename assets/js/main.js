// Renderiza projeto na tela
function projeto(img, titulo, info, url){

    const elemento = document.createElement("li");
    elemento.className = "item sombra";
    
    const template = `
            <img src="${img}" alt="Imagem do projeto ${titulo}" />
            <div class="descricao">
                <h2>${titulo}</h2>
                <p>
                    ${info} 
                </p>
                <a class="botao" href="${url}" target="_BLANK">+ INFORMÇÕES</a>
            </div>
            
    `;

    elemento.innerHTML = template;

    document.getElementById("lista-projetos").appendChild(elemento);

}


projeto(
    "assets/images/projetos/zumbieinvaders.jpg",
    "Zumbie Invaders",
    `Jogo criado na disciplina de Oficina de Computação pela UFPR Palotina com a orientação do
     professor Hélio H. Monte-Alto. Desenvolvido em Python utilizando a biblioteca PyGame. 
     Neste jogo você manipula uma vaca que se encontra em uma infestação de zumbis e sua unica arma é o seu próprio leite,
      para deter os zumbis você precisa acerta-los com jatos de leite. Cuidado, quando o leite acabar é necessário recarregar!
       Este jogo é uma releitura do clássico Space Invaders.`,
    "https://github.com/xfelipesobral/ZumbieInvaders"
)

projeto(
    "assets/images/projetos/gokuvsvegeta.jpg",
    "Goku VS. Vegeta",
    `Jogo multiplayer criado na disciplina de Redes pela UFPR Palotina com a orientação do professor
    Marcos V. O. de Assis. Desenvolvido em Python utilizando socket e a biblioteca PyGame. Neste jogo duas pessoas podem jogar em rede e 
    batalhar para decidir quem é o melhor, você irá precisar controlar muito
     bem seu poder para poder atacar da melhor forma possível! Este jogo é baseado na série Dragon Ball.`,
    "https://github.com/xfelipesobral/Goku-VS-Vegeta-SOCKET"
)

projeto(
    "assets/images/projetos/fecitec.jpg",
    "Site para FECITEC",
    `Iniciando no projeto como voluntário e depois como bolsista, desenvolvi e manti o site para Feira de Ciências e Tecnologia (FECITEC). Atuo no projeto
    desde sua 9ª edição.`,
    "https://github.com/xfelipesobral/fecitec"
)

projeto(
    "assets/images/projetos/webquest_colombinho.jpg",
    "USA WebQuest",
    `Site desenvolvido para uso no estágio supervisionado do curso de computação pela UFPR Palotina com a orientação da
    professora Eliana S. Lisbôa. O intuituo deste projeto é orientar os alunos do Ensino Fundamental no ensino de Geografia
    sobre a história dos Estados Unidos da América. Projeto premiado na catogoria Poster no evento SLEC 2019.`,
    "https://github.com/xfelipesobral/WebQuestUSA"
)

// projeto(
//     "assets/images/projetos/cartao.png",
//     "Cartão de visita",
//     ``,
//     "https://xfelipesobral.github.io/Portfolio/assets/images/projetos/cartao.png"
// )

// projeto(
//     "assets/images/projetos/bannerufpr.png",
//     "Poster",
//     ``,
//     "https://xfelipesobral.github.io/Portfolio/assets/images/projetos/bannerufpr.png"
// )


