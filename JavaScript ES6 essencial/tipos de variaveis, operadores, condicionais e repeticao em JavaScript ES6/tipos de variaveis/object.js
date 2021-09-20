let user = {
  name: 'Usuario',
  lastName: 'Pessoa'
};

// Alterando a propriedade de um objeto
console.log(user);

user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';

console.log(user);
const prop = 'name';
user [prop] = 'Outro nome 3';

console.log(user);

//Criando um propriedade de um objeto
user.lastName = 'Usuario Pessoa';
console.log(user);

//deletando uma propriedade 
delete user.name;
console.log(user);

//Recuperando as chaves do objeto
console.log('Propriedades do objeto user: ',Object.keys(user));

//Recuperando os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user,{fullName:'Usuario Pessoa'});

console.log('\nAdiciona a propriedade fullName no objeto user',user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos',Object.assign({},user,{age:26}));

//Previne todas as alterações em um objeto.
const newObj = {foo:'bar'};
Object.freeze(newObj); //com freeze o objeto não muda. Não permite alterar, criar, deletar prolpriedade.

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ',newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Cliente'};
Object.seal(person);

person.name = 'Cliente do Sistema';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações: ',person);