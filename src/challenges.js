// Desafio 1
function compareTrue(person1, person2) {
  let result = false;
  if (person1 && person2 === true) {
    result = true;
  }

  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
/* Consegui resolver pesquisando aqui: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
function splitSentence(phrase) {
  const result = phrase.split(' ');
  return result;
}

// Desafio 4
/* Acessando o link (https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery) descobri como capturar o ultimo elemento do array atravez da resposta do: "Jéf Bueno" */
function concatName(list) {
  let result = `${list[list.length - 1]}, ${list[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  const result = (wins * 3) + ties;
  return result;
}

// Desafio 6
/* Consegui resolver esse com base nas documentações de Math.max e .filter encontradas respectivamente nos links:
(1 - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
(2 - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) */
function highestCount(numbers) {
  let n = [];
  let count = [];
  // Aprendi na documentação como extrair o maior número.
  n = Math.max(...numbers);
  // Descobri que pra fazer o filter funcionar deveria utilizar uma função (?)
  function comp(value) {
    return value === n;
  }
  count = numbers.filter(comp);
  let result = count.length;
  return result;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
