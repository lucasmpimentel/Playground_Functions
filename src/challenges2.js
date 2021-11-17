// Desafio 10
// Foi necessário tirar duvidas com o summer para resolver problema de shorthand no lint.
function techList(techs, name) {
  let result = [];
  techs = techs.sort();
  if (techs.length > 0) {
    for (let i of techs) {
      result.push({
        tech: i,
        name,
      });
    }
  } else {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(/*numbers*/) {
  /*let counts;
  let result = '';
  if (numbers.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < numbers.length; i += 1) {
      let counter = 0
      let repeat
      if (numbers[i] === numbers[counter]) {
        repeat += 1;
      } 

      
      if (numbers[ii] < 0 || numbers[ii] > 9) {
      result = 'não é possível criar um número de telefone com esses valores'
    }
    }
  }
  return result*/
}

// Desafio 12
function sumCondition(lineA, lineB, lineC, result) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    result = false;
  }
  return result;
}
function absolute(lineA, lineB, lineC) {
  let sub1 = Math.abs(lineA - lineB);
  let sub2 = Math.abs(lineA - lineC);
  let sub3 = Math.abs(lineB - lineC);
  return { sub3, sub2, sub1 };
}
function triangleCheck(lineA, lineB, lineC) {
  let result = true;
  result = sumCondition(lineA, lineB, lineC, result);
  let { sub3, sub2, sub1 } = absolute(lineA, lineB, lineC);
  if (lineA < sub3 || lineB < sub2 || lineC < sub1) {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
