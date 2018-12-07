var edad,edad1;
var Contador=1;
var Contador1=1;
var edadWomanen = 1;
var edadWoman= 1;
var EdadJove=1000;
var PromedioMen=0;
var PromedioWoman=0;
var NumMen=0;
var NumWoman=0;
var cantPersonas=0;
var SumaSecuaW=0;
var SumaSecuaW=0;

edad=prompt("Digite las edades de los hombres que asistieron a la fiesta.");

while (edadWomanen != 0 ){
      document.write("Edad: "+Contador);
      if (edadWomanen>=18){
        if (edadWomanen<EdadJove){
            EdadJove=edadWomanen;
        }
        NumMen++;
        Contador++;
        SumaSecuaW=SumaSecuaW+edadWomanen;
      }else{
     document.write("No se permiten menores de edad a la fiesta.", "Error",0);
      }           
}

edad1=prompt("Digite las edades de las mujeres que asistieron a la fiesta.");

while (edadWoman != 0){
    document.write("Edad: "+Contador1);

      if (edadWoman>=18){
        if (edadWoman<EdadJove){
            EdadJove=edadWoman;
        }
        NumWoman++;
        Contador1++;
        SumaSecuaW=SumaSecuaW+edadWoman;
      }else{
        document.write("No se permiten menores de edad a la fiesta.","Error",0);
      }           
} 
PromedioMen=SumaSecuaW/NumMen;
PromedioWoman=SumaSecuaW/NumWoman;
cantPersonas=NumMen+NumWoman;

document.write("La cantidad de personas que asistieron a la fiesta es: " + cantPersonas+"<br>"+
   "Cantidad de hombres: "+NumMen+"<br>"+
   "Cantidad de mujeres: "+NumWoman+"<br>"+
   "Promedio edad hombres: "+PromedioMen+"<br>"+
   "Promedio edad mujeres: "+PromedioWoman+"<br>"+
   "Edad mas joven: "+EdadJove);    

