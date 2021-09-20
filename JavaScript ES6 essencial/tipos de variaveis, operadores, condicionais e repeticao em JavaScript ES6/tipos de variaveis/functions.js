//ES5
function fn(){
  return 'Code here';
}

//ES6 
const arrowFn = () => 'Code here';
const arrowFn2 = () => {
  //Mais de uma epxressao
  return 'Code here';
}

// Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar Funções
const controlFnExec => fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}
const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // executará a função fn
handleFnExecution(); // não executará a função fn

//ControlFnExec como função
function controlFnExec (fnParam){
  return function (allowed){
    if (allowed) {
      fnParam();
    }
  }
}

//================ Função 2 ==================
this.name = 'Nome no contexto de criação';

const getNameArrowFn = () => this.name;

function getName(){
  return this.name
}

const user = {
  name: 'Nome do objeto de execução',
  getNameArrowFn,
  getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());