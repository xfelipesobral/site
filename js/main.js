function bomx(){
    var d = new Date();
    if(d.getHours() >= 6 && d.getHours() < 12){
        document.write("bom dia");
        return;
    } else if(d.getHours() >= 12 && d.getHours() < 18){
        document.write("boa tarde");
        return;
    }
    document.write("boa noite");
}

function escolhecor(){
    var cor = Math.floor(Math.random() * 4);

    switch(cor){

        case 0:
            cor = "#002626";
            break;

        case 1:
            cor = "#031314";
            break;

        case 2:
            cor = "#2C3A0A";
            break;
        
        case 3:
            cor = "#421905";
            break;
    }
    
    $("#cabecalho").fadeTo("slow", 0.90);
    $("#cabecalho").css("background-color", cor);
    $("#cabecalho").fadeTo("slow", 1);
}

$(document).ready(function(){
    escolhecor();
});
