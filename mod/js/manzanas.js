
      var kilo,valor;
      var descuento=0;
      var totalDescuento=0;
      var totalPagar=0;
      var Segundo = 0.10;
      var Tercero = 0.15;
      var Cuarto = 0.20;
      var precioNormal= 4200;
      
      var kilo=prompt("Ingrese los kilos que desea llevar: ");
      
      
      if (kilo >= 2.01) {
          valor=kilo*precioNormal;
          descuento=valor*Segundo;
      }else{
          valor=kilo*precioNormal;
      }
      if (kilo>=5.01){
          valor=kilo*precioNormal;
          descuento=valor*Tercero;
      }else if(kilo>10.01){
          valor=kilo*precioNormal;
           descuento=valor*Cuarto;
      }
      
      var totalDescuento = descuento;
      var totalPagar=valor-descuento;
      document.write("La compra de "+ kilo+" kilos"+" tiene un valor de "+valor +
      " pero usted tiene un descuento por valor de "+descuento+" por lo tanto el valor a pagar es: "+totalPagar);