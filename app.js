/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]
randomNumbers.sort((a, b) => a - b)

const result = randomNumbers.filter((item) => {
  if (item % 2 === 1) {
    return item
  }
})
console.log(`os números  Ímpares são: ${result}`)




/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]
crazyNumbers.sort((a, b) => a - b)

const result_1 = crazyNumbers.filter((item) => {
  if (item < 501) {
    return item
  }
})

console.log(`os números são: ${result_1} e a quantidade é ${result_1.length}`)


/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
*/

const numbers = [5, 7, 3]
const resultt = numbers.map((item) => item ** 2)
console.log(`os números elevados ao quadrado são: ${resultt}`)


/*
  04

  - Utilizando o array abaixo, gere um novo array com apenas os filmes lançados 
    antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const result_2 = tarantinoMovies.filter((movie) => movie.release < 2000)
console.log(result_2)

/*
  05

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const resulttt = tvShows.map(({ name }) => name)
console.log(resulttt)
/*
  06

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.

  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]
const resul = cart.map(({ name }) => name)
console.log(` Esse é outro jeito!!
- ${resul[0]},
- ${resul[1]},
- ${resul[2]},
- ${resul[3]},
- ${resul[4]}

// `)
const cartResult = cart.reduce((accumulator, { name }) =>
  `${accumulator} - ${name}\n`
  , "")
/*
  - Nome 1
  - Nome 2
  - Nome 3
*/
console.log(cartResult)






// EXERCÍOS DE lÓGICA DE PROGRAMAÇÃO

const lista = [1, 2, 3, "Daniel", 4, 5, 6, 7, true, false]
for (percorrer of lista) {
  console.log(percorrer)
}
const listas = [
  { nome: "Daniel", tipo: "casado", idade: 32 },
  { nome: "Leandro", tipo: "casado", idade: 35 },
  { nome: "Lucas", tipo: "solteiro", idade: 27 },
  { nome: "Joyce", tipo: "casada", idade: 34 }
]
listas.forEach((lista, index, array) => {
  console.log(lista.nome)
  console.log(index)
  console.log(array)
})



const quantidadeDeNumerosPares = Number(prompt("digite um número"))
let i = 0
while (i < quantidadeDeNumerosPares) {
  console.log(i * 2)
  i++
}


const ladosTriangulo = (a, b, c) => {
  if (a === b & a === c && b === c) {
    console.log("Equilátero")
  } else if (a === b && a !== c || b === c && b !== a || a === c) {
    console.log("Isósceles")
  } else {
    console.log("Escaleno")
  }
}
ladosTriangulo(4, 5, 6)
//console.log(ladosTriangulo)*/


const divideNumeros = (a, b,) => {
  if (a > b) {
    console.log("o maior é ", a)
  } else if (b > a) {
    console.log("o maior é", b)
  }
  if (a % b === 0) {
    console.log(`${a} é divisível por ${b}`)
  } else if (b % a === 0) {
    console.log(`${b} é divisível por ${a}`)
  } if (a % b !== 0) {
    console.log(`${a} não é divisível por ${b}`)
  }

}
divideNumeros(15, 30)

// ERCÍCIOS DE FUNÇÕES

function recebeArray() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < numeros.length; i++) {
    console.log(`${numeros[1]}, ${numeros.length - 2}`)
  }
  return numeros
}
recebeArray()

let mensagem = () => {
  return "Hello Word"
}
mensagem()

const criarRetangulo = (lado1, lado2) => {
  const retorno = {
    largura: `${lado1}`,
    altura: `${lado2}`,
    perímetro: 2 * Number(`${lado1}`) + Number(`${lado2}`),
    área: `${lado1}` * `${lado2}`
  }
  console.log(retorno)
}

criarRetangulo(5, 6)




