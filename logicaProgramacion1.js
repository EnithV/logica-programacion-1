/*Función para solicitar el número al usuario*/
function solicitarNumero (mensaje) {
    
    let numeroValido = false;
    let numero;
    /* Primero debo verificar que el usuario haya ingresado un valor y no solo espacios, luego  
    debo verificar que haya sido un número*/
    while (numeroValido !== true) {
        let entrada = prompt(mensaje);
        // Verifico que no sea null, vacío o solo espacios
        if (entrada === null || entrada.trim() === "") {
            alert("Debes ingresar un número"); //pop-up de alerta
            continue;
        }
        // Debo convertir el string a número
        let numeroConvertido = Number(entrada);
        // Verifico si es un numero o NaN not a number
        // Si es NaN
        if (isNaN(numeroConvertido)) {
            // Solicito un número válido nuevamente
            alert("Debes ingresar un número válido.")
            continue;
        }
        // Si el número es válido
        numero = numeroConvertido;
        numeroValido = true;
    }
    return numero
}
/* Llamo a la función para solicitar los tres números*/
let num1 = solicitarNumero("Ingrese el primer número:");
let num2 = solicitarNumero("Ingrese el segundo número:");
let num3 = solicitarNumero("Ingrese el tercer número:");

console.log("Números ingresados:", num1, num2, num3);
/*Analizamos cuál es el número mayor, el mediano y el menor*/
let mayor;
let mediano;
let menor;
// Verifico si num1 es el mayor
if (num1 >= num2 && num1>=num3) {
    mayor = num1;
    // Comparo num2 y num3 para saber quién es mediano y quién es menor
    if (num2 >= num3) {
        mediano = num2;
        menor = num3;
    }
    else {
        mediano = num3;
        menor = num2;
    }
}
// Verifico si num2 es el mayor de los tres números
else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    // Comparo num1 y num3 para saber quién es mediano y quién es mayor
    if (num1 >= num3) {
        mediano = num1;
        menor = num3;
    }
    else {
        mediano = num3;
        menor = num1;
    }
}
// Si llegué hasta aquí, entonces num3 es el mayor
else {
    mayor = num3;
    // Comparo num1 y num2 para saber quién es mayor y quién menor
    if (num1 >= num2) {
        mediano = num1;
        menor = num2;
    }
    else {
        mediano = num2;
        menor = num1;
    }
}
/* Verifico si los tres números son iguales */
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales");
}

/* Mostrar los numeros de mayor a menor */
console.log("Orden de mayor a menor:", mayor, mediano, menor);

/* Mostrar los números de menor a mayor */
console.log("Orden de menor a mayor:", menor, mediano, mayor);

