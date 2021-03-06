const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('symbol1 é igual symbol2: ', symbol1 === symbol2);

//Previnir conflitos entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Pessoas',
  [nameSymbol2]: 'Outro nome',
  lastName: 'Cliente'
}

console.log(user);

//Symbols criam propriedades que não são enumberables
for(const key in user){
  if (user.hasOwnProperty(key)){
    console.log('\nValor da chave ${key}:${user[key]}');
  }
}

console.log('Propriedades do objeto user: ',Object.keys(user));
console.log('Valores das propriedades do objeto user: ',Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ',Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user: ',Reflect.ownKeys(user));

//Criar um enum
const directions = {
  up : Symbol('up'),
  down : Symbol('down'),
  left : Symbol('left'),
  right : Symbol('right')
};