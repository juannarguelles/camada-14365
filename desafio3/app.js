/*Definición de algoritmo que emplea bucles:
Los ciclos, también conocidos como bucles o iteraciones son un medio
rápido y sencillo para hacer algo repetidamente.
Si tenemos que hacer alguna operación más de una vez en el
programa, de forma consecutiva, usaremos las estructuras de bucles
de JavaScript: for, while o do..while.
*/

// Programa de Cuenta Regresiva usando el ciclo for //

let inicioCuenta = parseInt(prompt("Ingrese un número para la cuenta regresiva"));

for (let i = inicioCuenta; i >= 1; i--) { //Este ciclo lo iteramos disminuyendo el valor del contador en 1. 
    alert(i);    //Mostramos en pantalla la cuenta regresiva desde el numero ingresado por el usuario.
    if (i <= 1){ //Mostramos el 1 y luego la cadena de caracteres. 
        alert("Comenzando Película"); 
    }
}
