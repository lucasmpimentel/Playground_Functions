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
function counterKeys(count, i) {
  if (Object.keys(count).includes(i.toString())) {
    count[i] += 1;
  } else {
    count[i] = 1;
  }
}
function errorStatus(i, count, result, error) {
  if (i < 0 || i > 9 || count[i] > 2) {
    result = 'não é possível gerar um número de telefone com esses valores';
    error = true;
  }
  return { result, error };
}
function resultStatusOk(numbers, result) {
  let numString = numbers.join('');
  result = `(${numString.slice(0, 2)}) ${numString.slice(2, 7)}-${numString.slice(7, 11)}`;
  return result;
}
function loopFunction(numbers, count, result, error) {
  for (let i of numbers) {
    counterKeys(count, i);
    ({ result, error } = errorStatus(i, count, result, error));
    if (error === false) {
      result = resultStatusOk(numbers, result);
    }
  }
  return result;
}
function generatePhoneNumber(numbers) {
  let count = {};
  let result;
  let error = false;
  if (numbers.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    result = loopFunction(numbers, count, result, error);
  }
  return result;
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
function hydrate(/* drinks */) {
  /* let orders = drinks.match(/\d+/g);
  orders = orders.reduce(orders)
  let cups = 1
  let result;
  if(cups > 1){
    result = `${cups} copos de água`
  } else {
    result = `${cups} copo de água`;
  }
  return typeof(orders); */
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
