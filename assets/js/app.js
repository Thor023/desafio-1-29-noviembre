//Solicitud de valor
var num1 = parseInt( prompt("Ingrese un nuemero del 1 al 20"));
//Validacion condicionales
if(num1>20){
    alert("Número fuera de rango");
}
else if(num1<1){
    alert("Número fuera de rango");
}
else{
let escribirTablaMultiplicar =(num1) =>{
	console.log("Tabla de multiplicar del "+ num1 +".");
	for(i = 1;i<=num1;i++){
		console.log(num1 + "x " + i + "= " + num1 * i);
	}
}
escribirTablaMultiplicar(num1);

//Factorial anidado
for (let i = 1; i <= num1; i++) {
    let res = 1;
    for (let j= 1; j <= i; j++) {
    res = res * j;
    }
    console.log("Factorial de " + i + " es: " + res);
}
}