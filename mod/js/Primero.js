
var capital=prompt("varroduzca el capital solicitado");
var vareres=prompt("Indique el vareres anual ");
var year=prompt("varroduzca el numero de años");
var y=year*12;
var i=0.02;
var ValorFuturo = Math.pow(i+1,y);
var Total= capital*i*ValorFuturo;


document.write ("El valor consignado es:"+capital+"<br>");
document.write("El valor futuro en"+ year+"Años es: "+Total);