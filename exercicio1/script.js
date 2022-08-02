// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

sacolao.frutas = [
{produto:"pera",
preco:6.80,
disponibilidade: true},
{produto: "kiwi",
preco: 5.50,
disponibilidade: true},
{produto: "manga",
preco: 8.60,
disponibilidade: true}]  
console.log("carrinho de compras inicial",sacolao.frutas)

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
// adicionando nota 9 as notas do semestre
sacolao.frutas.push({produto: "melancia",
preco: 11.60,
disponibilidade: true})
     
console.log("nova fruta adicionada:",sacolao.frutas)



// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
sacolao.frutas.splice(2,1)
console.log("troquei manga por melancia",sacolao.frutas)
