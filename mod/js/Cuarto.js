
var num=0;
var sum=0;
var valor1,valor2,valor3,valor4;

num=prompt("' Ingrese un numero, se mostrara el numero ingresado y la suma de sus digitos. ");

valor1= num/10;
valor2= num%10;
sum= sum+valor2;
valor1= valor1-(valor2*0.1);

while (valor1>0){
    valor3=valor1/10;
    valor4 = valor1%10;
    sum = sum+valor4;
    valor1=valor3-(valor4*0.1);
    
    }
document.write("El numero ingresado es: "+num+" y la suma de sus digitos es: "+ sum);



