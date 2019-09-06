

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
                <a class="botao" href="${url}" target="_BLANK">INFO</a>
            </div>
            
    `;

    elemento.innerHTML = template;

    document.getElementById("lista-projetos").appendChild(elemento);

}


projeto(
    "assets/images/projetos/zumbieinvaders.jpg",
    "Zumbie Invaders",
    `Jogo criado na disciplina de Oficina de Computação.`,
    "https://github.com/xfelipesobral/ZumbieInvaders"
);

projeto(
    "assets/images/projetos/gokuvsvegeta.jpg",
    "Goku VS Vegeta",
    `Jogo multiplayer criado na disciplina de Redes.`,
    "https://github.com/xfelipesobral/Goku-VS-Vegeta-SOCKET"
);

projeto(
    "assets/images/projetos/fecitec.jpg",
    "Fecitec Site",
    `Site criado para 9ª Feira de Ciências e Tecnologia (FECITEC).`,
    "https://github.com/xfelipesobral/fecitec"
);

projeto(
    "assets/images/projetos/webquest_colombinho.jpg",
    "USA WebQuest",
    `Site criado na disciplina de Didática da Computação.`,
    "https://github.com/xfelipesobral/WebQuestUSA"
);


