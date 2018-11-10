 suma;
var suma3;
var suma5;
var ultimo5;
var y;
var x;
var suma=0;
var suma3=0;
var suma5=0;
for (x=1; x<=10; x++) {
    y=Math.pow(x,2)-2*x;
    suma=suma+y;
    if ((y%3)==0) {
    ( y /*+" es un multiplo de 3 "*/);
    suma3=suma3+y;
}
}
for (x=1; x<=10; x++) {
    y=Math.pow(x,2)-2*x;
    ultimo5=y%10;
    if (ultimo5==5) {
    (y /*+" es un valor que tiene como ultimo digito 5"*/ );
    suma5=suma5+y;
}
}
( "La suma de los valores que tiene "
+ "como ultimo digito 5 es " + suma5);
( "La suma de los valores de y multiplos de 3 es "
+ suma3);
document.write("a.) La suma de todos los valores de  es "+ suma+"<br>");
document.write("b.) Valores de Y múltiplos de 3:3 "+ suma3+"<br>");
document.write("e.) Suma de los valores de Y cuyo último digito es múltiplo de 5"+"<br>"+ ultimo5);