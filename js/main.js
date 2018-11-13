function bomx(){
    var d = new Date();
    if(d.getHours() >= 6 && d.getHours() < 12){
        document.write("bom dia");
    } else if(d.getHours() >= 12 && d.getHours() < 18){
        document.write("boa tarde");
    } else if(d.getHours() >= 18){
        document.write("boa noite");
    }
}