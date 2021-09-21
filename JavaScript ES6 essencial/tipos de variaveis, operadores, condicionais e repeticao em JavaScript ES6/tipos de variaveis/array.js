const users = ['Pedro','Maria','Joao','Judite'];

const gender = {
  man: Symbol('M'),
  woman: Symbol('W')
}

const persons = [
  {
    name:'Pedro',
    age: 54,
    gender: gender.man
  },
  {
    name:'Maria',
    age: 74,
    gender: gender.woman
  },
  {
    name:'Joao',
    age: 98,
    gender: gender.man
  },
  {
    name:'Judite',
    age: 87,
    gender: gender.woman
  },
];

// Retornar a quantidade de itens de um array 
console.log('Items: ',persons.length);

// Verificar se é array
console.log('A variável persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach ((person, index, arr) => {
  console.log('Nome: ${person.name}');
});

// Filtrar array
const mens = person.filter(person => person.gender === gender.man);
console.log('\nNova lista apenas com homens: ',mens);

// Retornar um novo
const personsWithCourse = person.map(person => {
  person.course = 'Introdução ao JavaScript';
  return person;
});

console.log ('\nPessoas com a adição do course: ',personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age,person) => {
  age += person.age;
  return age;
}, 0);

console.log ('\nSoma de idade das pessoas: ',totalAge);

// Juntando operações
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);
console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);