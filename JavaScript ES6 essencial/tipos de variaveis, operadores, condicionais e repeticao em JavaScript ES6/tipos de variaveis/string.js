// tipos de variaveis
// string
// number
// boolean

// Retorna o tamanho de uma string
// const textSize = 'Texto';
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`);


//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ',splittedText);

//Busca por valor e substiui por outro
const replacedText = 'Texto'.replace('Text','txeT');
console.log('\nSubstituição de valor: ',replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ',lastChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da string da primiera letra menos a última: ', allWithoutLastChar);

const secondChar = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ', secondChar);

//Retorna N caracters a partir de uma posição 
const twoCharBeforeFirsPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são: ',twoCharBeforeFirsPos);