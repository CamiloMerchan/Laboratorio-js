var edad,edad1;
var cont=1;
var cont1=1;
var edadH = 1;
var edadM= 1;
var edad_joven=1000;
var promedio_edadH=0;
var promedio_edadM=0;
var cantHombres=0;
var cantMujeres=0;
var cantPersonas=0;
var sumaH=0;
var sumaM=0;

edad=prompt("Digite las edades de los hombres que asistieron a la fiesta.");

while (edadH != 0 ){
      document.write("Edad: "+cont);
      if (edadH>=18){
        if (edadH<edad_joven){
            edad_joven=edadH;
        }
        cantHombres++;
        cont++;
        sumaH=sumaH+edadH;
      }else{
     document.write("No se permiten menores de edad a la fiesta.", "Error",0);
      }           
}

edad1=prompt("Digite las edades de las mujeres que asistieron a la fiesta.");

while (edadM != 0){
    document.write("Edad: "+cont1);

      if (edadM>=18){
        if (edadM<edad_joven){
            edad_joven=edadM;
        }
        cantMujeres++;
        cont1++;
        sumaM=sumaM+edadM;
      }else{
        document.write("No se permiten menores de edad a la fiesta.","Error",0);
      }           
} 
promedio_edadH=sumaH/cantHombres;
promedio_edadM=sumaM/cantMujeres;
cantPersonas=cantHombres+cantMujeres;

document.write("La cantidad de personas que asistieron a la fiesta es: " + cantPersonas+"\n"+
   "Cantidad de hombres: "+cantHombres+"\n"+
   "Cantidad de mujeres: "+cantMujeres+"\n"+
   "Promedio edad hombres: "+promedio_edadH+"\n"+
   "Promedio edad mujeres: "+promedio_edadM+"\n"+
   "Edad mas joven: "+edad_joven);    

