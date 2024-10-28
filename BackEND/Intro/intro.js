// Saída de dados
console.log ('salve');

// Uma constante é um tipo de variável cujo valor não pode ser alterado. Depois de uma constante é inicializada, não podemos alterar seu valor.
const num = 5;

// Você pode puxar uma função com crase `` (Saida formatada)
let count = 5;
let mensagem = `Tem ${count} reais no meu bolso`;
console.log(mensagem);

// Quando você cria um Symbol, o javascript garante que ele seja distinto de todos os outros símbolos, mesmo que eles tenham as mesmas descrições. É tipo
// sessões quando você entra no site do governo por exemplo.
let valor1 = Symbol('chave1');
let valor2 = Symbol('chave1'); 
console.log (valor1 === valor2) // saida: false

// typeof: mostra a tipagem da variavel
console.log(typeof(num)) // saida: number