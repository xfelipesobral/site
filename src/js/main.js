function escolhecor(){
    var cor = Math.floor(Math.random() * 4);

    switch(cor){

        case 0:
            cor = "#1d1d1d";
            break;

        case 1:
            cor = "#041226";
            break;

        case 2:
            cor = "#001432";
            break;
        
        case 3:
            cor = "#150032";
            break;
    }
    
    $("#cabecalho").fadeTo("slow", 0.90);
    $("#cabecalho").css("background-color", cor);
    $("#cabecalho").fadeTo("slow", 1);
}

function carregar(pagina){
    $("#corpo").load(`paginas/${pagina}.html`);
}

function navegar(pagina){
    var index = 0;

    if(pagina){
        window.location.href = pagina;
    }

    if(window.location.hash !== ""){
        index = window.location.hash;
    }

    switch(index){
        
        case "#biblioteca":
            carregar("biblioteca");
            break;            

        default:
            carregar("inicio");         
            break;

    }

}

$(document).ready(function(){
    escolhecor();
    navegar();
});

