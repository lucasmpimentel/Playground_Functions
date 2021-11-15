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
  let count = [];
  // Aprendi na documentação como extrair o maior número.
  let n = Math.max(...numbers);
  // Descobri que pra fazer o filter funcionar deveria utilizar uma função (?)
  function comp(value) {
    return value === n;
  }
  count = numbers.filter(comp);
  let result = count.length;
  return result;
}

// Desafio 7
// Para resolver essa questão foi necessário ver a documentação da função Math.abs() no link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  let disCat1 = cat1 - mouse;
  let disCat2 = cat2 - mouse;
  disCat1 = Math.abs(disCat1);
  disCat2 = Math.abs(disCat2);
  if (disCat1 > disCat2) {
    result = 'cat2';
  } if (disCat2 > disCat1) {
    result = 'cat1';
  } if (disCat1 === disCat2) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(num) {
  let result = [];
  for (let i in num) {
    if (num[i] % 3 === 0 && num[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (num[i] % 3 === 0) {
      result.push('fizz');
    } else if (num[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(speak) {
  let coded = speak.replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
  return coded;
}
function decode(coded) {
  let speak = coded.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return speak;
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
