     
            
        var cedula=prompt("Ingrese Cedula del empleado: ");
        var Empleado =prompt("Ingrese Nombre del empleado: ");
        var SalarioBa=prompt("Ingrese Salario basico del empleado: ");
        var DiaLaboro=prompt("Ingrese dias laborados: ");
        var Ventas=prompt("Ingrese ventas generadas: ");
        var prestamos=prompt("Ingrese Prestamos del empleado: ");
        
        
        if (SalarioBa <= 781.242*2) {
        var Trabajo=(SalarioBa*DiaLaboro)/30;
        var Comision= Ventas*0.02;
        var Auxilio=(88.211*DiaLaboro)/30;
        var deduccion=prestamos;
        var TotalDeduccion=(Trabajo+Comision+Auxilio)-prestamos
                
        } else if (SalarioBa > 781.242*2) {
            var Comision= Ventas*0.02;
            var Trabajo=(SalarioBa*DiaLaboro)/30;
            var TotalDeduccion=(Trabajo+Comision)-prestamos
        }
            
               
        document.write("Cedula del empleado: "+cedula+"<br>"+" Nombre del empleado: "+Empleado+"<br>"+
        " Salario basico: " +SalarioBa+ "<br>"+ " Auxilio de transporte: "
         + Auxilio +"<br>"+" Comision por ventas: "+Comision+"<br>"+" Prestamos: "+ deduccion+"<br>"
         +" Total Neto a pagar: "+TotalDeduccion);