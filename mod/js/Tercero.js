 SumaSecua;
var SumaSecua3;
var SumaSecua5;
var ultimo5;
var y;
var x;
var SumaSecua=0;
var SumaSecua3=0;
var SumaSecua5=0;
for (x=1; x<=10; x++) {
    y=Math.pow(x,2)-2*x;
    SumaSecua=SumaSecua+y;
    if ((y%3)==0) {
    ( y /*+" es un multiplo de 3 "*/);
    SumaSecua3=SumaSecua3+y;
}
}
for (x=1; x<=10; x++) {
    y=Math.pow(x,2)-2*x;
    ultimo5=y%10;
    if (ultimo5==5) {
    (y /*+" es un valor que tiene como ultimo digito 5"*/ );
    SumaSecua5=SumaSecua5+y;
}
}
( "La SumaSecua de los valores que tiene "
+ "como ultimo digito 5 es " + SumaSecua5);
( "La SumaSecua de los valores de y multiplos de 3 es "
+ SumaSecua3);
document.write("a.) La SumaSecua de todos los valores de  es "+ SumaSecua+"<br>");
document.write("b.) Valores de Y múltiplos de 3:3 "+ SumaSecua3+"<br>");
document.write("e.) SumaSecua de los valores de Y cuyo último digito es múltiplo de 5"+"<br>"+ ultimo5);