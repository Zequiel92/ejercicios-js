/*
	Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
	una bifurcación if y una sentencia break

*/


let x = 10;
let i = x-1;


while(x){
    x *= i;
    i--;
    if (i <= 1) break;
}
console.log(x);