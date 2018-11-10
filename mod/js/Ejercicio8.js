
        var minuto;
        var valorMinuto=200;
    var adicional=30;
        
        minuto=prompt("Ingrese los minutos: ");
        
        if(minuto<=3){
            valorMinuto=minuto*valorMinuto;
        }
        if(minuto>3){
            valorMinuto=valorMinuto+adicional;
            valorMinuto=minuto*valorMinuto;
        }
        
    document.write("El valor de la llamada es: "+valorMinuto+"<br>"+"La cantidad de minutos hablados es: "+minuto);