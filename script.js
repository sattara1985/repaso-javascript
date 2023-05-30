// document.write("Hola mundo X2");
// document.write('<h1 style="color:red">Bienvenidos a el repaso de JS</h1>');
// console.log("Hola mundo!");
// console.warn("mensajes en amarillo");
// console.error("mensaje error en rojo");
// //lenguaje interpretado es javascript
// alert("Hola mundo 3");
// let nombre=""; // si no se pone valor queda en undefined si se deja en null no sabe si va ser tipo string 
// console.log(`El valor de nombre antes del prompt: ${nombre}.`);
// nombre = prompt("Ingresa tu nombre");
// console.log(`el nombre ingresado es : ${nombre}.`);
// //prompt("Ingresa tu nombre");

// // ejercicio 1
// //Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
// //caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
// //responder: “No te creo”

// nombre = prompt("Eres Bellisimo/a/e");
// if(nombre=="si"){
//     alert("Ciertamente");

// }else{
//     alert("No te creo");
// }

// // ejercicio 2
// //Solicitar al usuario un número, y determinar si es divisible entre dos o no.
// //Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x
// //núm

// numero = prompt("Ingresa un numero para saber si es divisible entre dos");

// if(numero%2==0){
//     alert(`${numero} es un numero divisible entre 2.`);
// }else{
//     alert(`${numero} No es un numero divisible entre 2.`);
// }

// // ejercicio 3
// //Crear un programa que determine si un número introducido en un Prompt
// //es par o no, la respuesta será mostrada en un Alert.

// numero = prompt("Ingresa un numero para saber si es par o no lo es");
// if(numero%2==0){
//     alert(`${numero} es un PAR.`);
// }else{
//     alert(`${numero} No es PAR`);
// }

// // ejercicio 4
// //Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
// //"Ganaste un premio", en caso contrario mostrar el número y el mensaje
// //“Lo sentimos, sigue participando”.

// numero = prompt("Ingrese su numero de cliente");
// if(numero==1000){
//     alert(`${numero} !GANASTE UN PREMIO!.`);
// }else{
//     alert(`${numero} Lo sentimos, sigue participando`);
// }

// // ejercicio 5
// //Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
// //menor. No considerar el caso en que ambos números son iguales

// numero1 = prompt("Ingrese el primer numero");
// numero2 = prompt("Ingrese el segundo numero");

// if(numero1>numero2){
//     alert(`${numero1} Es mayor que ${numero2}`);
// }
// if(numero2>numero1){
//     alert(`${numero2} Es mayor que ${numero1}`);
// }else{
//     alert(`${numero2} Es igual que ${numero1}`);
// }

// // let variable=prompt("hola");
// // let variable1=parseInt(prompt("pregunta"))

// // ejercicio 6
//Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
//el número mayor. Considerar el caso en que 2 números sean iguales.

let numero1 = prompt("Ingrese el primer numero");
let numero2 = prompt("Ingrese el segundo numero");
let numero3 = prompt("Ingrese el tercer numero");
if(numero1==numero2 && numero2==numero3 && numero3==numero1)
{
    if(numero1==numero2 || numero2==numero3 || numero3==numero1){
        alert(`ha ingresdado dos numeros iguales`);
    }


    if(numero1>numero2 && numero1>numero3){
        alert(`${numero1} Es mayor que ${numero2} y ${numero3}`);
    }
    if(numero2>numero1 && numero2>numero3){
        alert(`${numero2} Es mayor que ${numero1} y ${numero3}`);
    }
    if(numero3>numero2 && numero3>numero1){
        alert(`${numero3} Es mayor que ${numero2} y ${numero1}`);
    }
}