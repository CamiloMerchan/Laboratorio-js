
var num=0;
var SumaSecu=0;
var Numero1,Numero2,Numero3,Numero4;

num=prompt("' Ingrese un numero, se mostrara el numero ingresado y la SumaSecua de sus digitos. ");

Numero1= num/10;
Numero2= num%10;
SumaSecu= SumaSecu+Numero2;
Numero1= Numero1-(Numero2*0.1);

while (Numero1>0){
    Numero3=Numero1/10;
    Numero4 = Numero1%10;
    SumaSecu = SumaSecu+Numero4;
    Numero1=Numero3-(Numero4*0.1);
    
    }
document.write("El numero ingresado es: "+num+" y la SumaSecua de sus digitos es: "+ SumaSecu);



