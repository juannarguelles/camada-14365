
/*Definición de algoritmo en JavaScript que emplee instrucciones condicionales:

Cuando en programación hablamos de condicionales, hablamos de una estructura
sintáctica que sirve para tomar una decisión a partir de una condición.*/


let nombre = prompt("Por favor, ingresar su nombre");
let password = prompt("Ingrese su contraseña");
let passwordParse = parseInt(password);


if((nombre == "Juan", "juan", "JUAN") && (passwordParse == 123456)){    // acá entra si nombre es "Juan", "juan" o "JUAN" y la contraseña es 123456
alert("Usuario verificado correctamente");
}
else if(nombre == "JuAn" || nombre == "jUaN"){               // acá entra si nombre es "JuAn" o "jUaN" 
    alert("Usuario else if verificado correctamente");
}
else{
alert("Usuario no registrado, por favor registrese");    
}