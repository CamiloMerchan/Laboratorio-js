
        var Empleado;
        var DiaLaboro;
        var Ventas;
        var SalarioBa,prestamos,diasLaborados,Comision;
        var cedula;
        var AuxilioTra=0;
        var sueldoDevengado=0;
        var TotalDeduccion=0;
        var TotalDevengado;
        var salarioNeto=0;       
            
        cedula=prompt("Ingrese Cedula del empleado: ");
        Empleado =prompt("Ingrese Nombre del empleado: ");
        SalarioBa=prompt("Ingrese Salario basico del empleado: ");
        DiaLaboro=prompt("Ingrese dias laborados: ");
        Ventas=prompt("Ingrese ventas generadas: ");
        prestamos=prompt("Ingrese Prestamos del empleado: ");
        
        
        if (SalarioBa <= 781.242*2) {
        sueldoDevengado = SalarioBa*diasLaborados/30;   
        AuxilioTra = 88.211*diasLaborados/30;
        Comision = Ventas*0.02;
        TotalDeduccion =  prestamos;
        TotalDevengado = (sueldoDevengado + AuxilioTra)-prestamos;
                }

        else if (SalarioBa > 781.242*2) {
           sueldoDevengado = SalarioBa*diasLaborados/30; 
           Comision = Ventas*0.02;
           TotalDeduccion =  prestamos;
           TotalDevengado = (sueldoDevengado + AuxilioTra)-prestamos;
        }
            
               
        document.write("Cedula del empleado: "+cedula+"<br>"+" Nombre del empleado: "+Empleado+"<br>"+
        " Salario basico: " +SalarioBa+ "<br>"+ " Auxilio de transporte: "
         + AuxilioTra +"<br>"+" Comision por ventas: "+Comision+"<br>"+" Prestamos: "+ TotalDeduccion+"<br>"
         +" Total Neto a pagar: "+TotalDevengado);