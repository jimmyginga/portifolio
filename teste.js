// VARIÁVEIS, let, const e var
let nome = "Jose"
let idade = 26
let eCasado = false
let sexo = null
console.log(sexo)

// TIPOS DE DADOS
//undefined, null, boolean, string, number, NaN, array, objectos, Function

// OPERADORES
//aritimetricos

//object
const usuario = {
    id: 1,
    login: "josesilva",
    pass: "1234",
}

//array

// function gerarToken(){
//     return Math.random()
// }
// function login(login, senha){
//     if(!(login === "josesilva" && senha === "1234")) {
//         return "senha ou login invalidos"
//     }
//     return usuario
// }

// console.log(login(usuario.login, usuario.pass))

// ESTRUTURAS DE FLUXO

// switch(valor){
//     case 1:
//         //fdjhfdkjgjdfk
//         break
//     case 2:
//         //,mdsnfjsdk
//         break 
// }

// const lista = ["tomate", "bana", "abacate", 12, true]
//for, while,  for of, for in, do while
// for(let i = 0; i < lista.length; i++){
//     console.log(lista[i])
// }

//mostra o index na lista
// for(item in lista){
//     console.log("index=>>", item)
// }
// //mostra o item na lista
// for(item of lista){
//     console.log("item=>>", item)
// }
// while(contador < lista.length){
    //     console.log("carregando...")
    
    //     contador++
    // }
    
// let contador = 0

// do{
//     console.log("carregando...")
//     contador++
// }while(contador < lista.length)

// console.log("carrgou, ", lista)
// // (IF/ELSE, SWITCH, LOOPS


// arrow function 

let dizOla =  nome => {
    return `Diz ola ${nome}`
}

console.log(dizOla("Jimi"))