let numero = Number (prompt("Digite um número"))

//while(condição){
//      bloco de código
//      incremento
//}


// let soma = 0

// while(numero !== 0){
//     soma = soma + numero
//     console.log(numero);
//     numero = Number (prompt("Digite um novo número"))

// }
// console.log("soma", soma);

//FOR

// for(let i = 0; i <= numero; i++){
//     console.log(i);
// }


// const array = [0, 1, 2, 3, 4, 5, 6]

// for(let i = 0; i < array.length; i++){
//     console.log(`O elemento de índice ${i} é ${array[i]}`);
// }


//1
let usuario = prompt(`Qual a sua função? (A: admin ; B: Comum ; C: Assistente)`)

while(usuario.toUpperCase() !== `A`){
    alert(`Acesso negado!`)
    usuario = prompt(`Qual a sua função? (A: admin ; B: Comum ; C: Assistente)`)
}

alert(`Acesso confirmado! Boas-Vindas, Admin!`)

//2
let taboada = Number(prompt(`Digite um número para exibir sua taboada: `))

for(let i = 1; i <= 10; i++){
    console.log(`${taboada} x ${i} = ${taboada * i}`);
}

//3
const ranking = [`1 - Rússia`, `2 - Canadá`, `3 - China`, `4 - EUA`, `5 - Brasil`]

for(let i = 0 ; i < ranking.length; i++){

    console.log(ranking[i].toLowerCase());
}