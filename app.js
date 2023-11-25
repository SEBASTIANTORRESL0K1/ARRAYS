
//USO DE ARRAYS
let numbers= [2,3,4,5,6,7,8,9];
let numbers2 = [11,12,13,14,15,16,17,18,19];


// //metodo nuevo .push introduce elementos a la variable al final
// //mutables
numbers.push(10); //agrega al final
 numbers.unshift(1); //agrega al inicio
// numbers.pop(); // elimina al final
// numbers.shift(); //elimina al inicio


// //inmutables
const loQueSea = numbers.concat(numbers2);
showDom("array1", numbers);
showDom("array2", loQueSea);

//USO DE .LENGTH

// console.log(numbers.length); //.length muestra la longitud de la variable
// console.log(numbers[numbers.length-1]);  //para tomar el ultimo valor  de la variable

// // console.log(numbers[0]); //se usa [] para tomar el valor de la posicion
// // console.log(numbers.at(0)); //para tomar la posicion de izquierda a derecha
// // console.log(numbers.at(-8)); //toma las posiciones de derecha a izquierda

// for (let  i=0 ; i<numbers.length ; i++){
// console.log(numbers[i]);
// };
// //empieza en la posicion cero, e incrementa hasta que i sea la longitud de la posicion, por lo que imprime todos los numeros
// // for (let inicio = numbers.length-1 ; inicio => 0; inicio--) {
// //     console.log(numbers[inicio]);
// //     break
// // }



// function show(arr){
//     for (let i=0 ; i<arr.length ; i++){
//         console.log(arr[i]);
//     }
// }
function showDom(element, arr){
    document.getElementById(element).innerHTML = "";
   
    for (let i=0 ; i<arr.length ; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}</div>`;   
     }
}


// //metodo nuevo .push introduce elementos a la variable al final

// numbers.push("1");
//  numbers.unshift(1);

// // let pares = [2,4,6,8,10];
// // let impares = [1,3,5,7,9];
// // let numeros = [pares, impares];