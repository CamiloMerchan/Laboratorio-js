
var Contador=1;
var acumulador=0;
var acumulador1=0;
var acumulador2=0;
var acumulador3=0;
var calificacion;

while(Contador<=10){
    calificacion=prompt("Calificacion obtenida estudiante "+ Contador);

    Contador=Contador+1;
    if (calificacion>0 && (calificacion<=100)){
        if (calificacion<50){
            acumulador=acumulador+1;
        } if (calificacion>=50 && (calificacion<70)){
            acumulador1=acumulador1+1;
        } if (calificacion>=70 && (calificacion<80)){
            acumulador2=acumulador2+1;
        } if (calificacion>80){
            acumulador3=acumulador3+1;
        }        
}else{
        ("La calificacion debe estar entre 1 y 100","Error",3);
    }
}
document.write("La cantidad de estudiantes que obtuvieron una calificacion menor a 50: "+acumulador+"<br>"+
        "La cantidad de estudiantes que obtuvieron una calificacion entre 50 a 70: "+acumulador1+"<br>"+
        "La cantidad de estudiantes que obtuvieron una calificacion entre 70 a 80: "+acumulador2+"<br>"+
        "La cantidad de estudiantes que obtuvieron una calificacion mayor a 80: "+acumulador3);