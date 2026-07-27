const runTests = function (name, tests) {
  process.nextTick(function () {
    const errors = [];
    for (const test of tests) {
      const { name: testName, run } = test;
      run({
        eq: function (actual, expected, message) {
          if (actual !== expected) {
            errors.push({
              name: testName,
              message: message,
              expected: expected,
              actual: actual,
            });
          }
        },
      });
    }

    if (errors.length === 0)
      return console.log(`\n🎉 Todos os testes de ${name} passaram!`);

    console.log(`\n❌ Relatório de Erros: ${name}`);
    errors.forEach((error) =>
      console.log(`${error.name}: ${error.expected} !== ${error.actual}`),
    );
  });
};

// Implemente uma função que retorna o valor mínimo de uma chave específica
// em um array de objetos. Se a chave não existir em algum objeto, use 0 como valor padrão

/**

 function minByKey(arr, key) {
   let minor = Infinity;
   for (let obj of arr) {
     const value = obj[key] || 0;
     
     minor = Math.min(value, minor);
    }
    
    return minor;
  }
*/

function minByKey(arr, key) {
  return firstByKey(arr, key, "asc");
}

/** 
 function minByKey(arr, key) {
   return arr.reduce(
     (acc, obj) => Math.min(acc, obj[key] || 0),
     arr[0][key] || 0
     );
    }
*/

runTests("minByKey", [
  {
    name: "Teste 1: Funcionalidade básica com valores numéricos",
    run: ({ eq }) => {
      const test1 = [
        { id: 1, value: 10 },
        { id: 2, value: 5 },
        { id: 3, value: 15 },
      ];
      eq(
        minByKey(test1, "value"),
        5,
        "Teste 1 falhou: Deveria retornar o valor mínimo",
      );
    },
  },
  {
    name: "Teste 2: Array com propriedades ausentes (deveria usar 0 como padrão)",
    run: ({ eq }) => {
      const test2 = [{ id: 1, value: 10 }, { id: 2 }, { id: 3, value: 15 }];
      eq(
        minByKey(test2, "value"),
        0,
        "Teste 2 falhou: Deveria lidar com propriedades ausentes usando 0 como padrão",
      );
    },
  },
  {
    name: "Teste 3: Array com valores negativos",
    run: ({ eq }) => {
      const test3 = [
        { id: 1, value: -5 },
        { id: 2, value: 10 },
        { id: 3, value: -15 },
      ];
      eq(
        minByKey(test3, "value"),
        -15,
        "Teste 3 falhou: Deveria lidar com valores negativos corretamente",
      );
    },
  },
  {
    name: "Teste 4: Array com um único elemento",
    run: ({ eq }) => {
      const test4 = [{ id: 1, value: 42 }];
      eq(
        minByKey(test4, "value"),
        42,
        "Teste 4 falhou: Deveria funcionar com array de um único elemento",
      );
    },
  },
  {
    name: "Teste 5: Array com todas as propriedades ausentes",
    run: ({ eq }) => {
      const test5 = [{ id: 1 }, { id: 2 }, { id: 3 }];
      eq(
        minByKey(test5, "value"),
        0,
        "Teste 5 falhou: Deveria retornar 0 quando todos os elementos têm chaves ausentes",
      );
    },
  },
]);

// Implemente uma função que retorna o valor máximo ou mínimo de uma chave específica em um array de objetos de
// acordo com a direção especificada. Se a chave não existir em algum objeto, use 0 como valor padrão.
// O array não pode estar vazio (deve ter pelo menos um elemento).
/**

 function firstByKey(arr, key, direction) {
   let result = arr[0][key] || 0;
   
   for (let obj of arr) {
     const value = obj[key] || 0;
     
     if (direction === 'asc') {
       result = Math.min(value, result);
      } else {
        result = Math.max(value, result);
      }
    }
    
    return result;
  }
*/

function firstByKey(arr, key, direction) {
  const comparator = new Comparator(key, direction);

  let result = arr[0];

  for (let obj of arr) {
    if (comparator.compare(result, obj) > 0) {
      result = obj;
    }
  }

  return result[key] || 0;
}

runTests("firstByKey", [
  {
    name: "Teste 1: Funcionalidade básica - direção ascendente (menor valor)",
    run: ({ eq }) => {
      const firstTest1 = [
        { id: 1, value: 10 },
        { id: 2, value: 5 },
        { id: 3, value: 15 },
      ];
      eq(
        firstByKey(firstTest1, "value", "asc"),
        5,
        "FirstByKey Teste 1 falhou: Deveria retornar o menor valor (5) entre todos os valores",
      );
    },
  },
  {
    name: "Teste 2: Funcionalidade básica - direção descendente (maior valor)",
    run: ({ eq }) => {
      const firstTest2 = [
        { id: 1, value: 10 },
        { id: 2, value: 5 },
        { id: 3, value: 15 },
      ];
      eq(
        firstByKey(firstTest2, "value", "desc"),
        15,
        "FirstByKey Teste 2 falhou: Deveria retornar o maior valor (15) entre todos os valores",
      );
    },
  },
  {
    name: "Teste 3: Array com propriedades ausentes - direção ascendente",
    run: ({ eq }) => {
      const firstTest3 = [{ id: 1 }, { id: 2, value: 5 }, { id: 3, value: 15 }];
      eq(
        firstByKey(firstTest3, "value", "asc"),
        0,
        "FirstByKey Teste 3 falhou: Deveria retornar 0 (menor valor considerando elementos sem a chave)",
      );
    },
  },
  {
    name: "Teste 4: Array com todas as propriedades ausentes",
    run: ({ eq }) => {
      const firstTest4 = [{ id: 1 }, { id: 2 }, { id: 3 }];
      eq(
        firstByKey(firstTest4, "value", "desc"),
        0,
        "FirstByKey Teste 4 falhou: Deveria retornar 0 (maior valor quando todos os elementos usam 0 como padrão)",
      );
    },
  },
  {
    name: "Teste 5: Array com valores negativos",
    run: ({ eq }) => {
      const firstTest5 = [
        { id: 1, value: -5 },
        { id: 2, value: 10 },
        { id: 3, value: -15 },
      ];
      eq(
        firstByKey(firstTest5, "value", "asc"),
        -15,
        "FirstByKey Teste 5 falhou: Deveria retornar -15 (menor valor entre valores negativos e positivos)",
      );
    },
  },
]);

class Comparator {
  constructor(key, direction) {
    this.key = key;
    this.direction = direction;
  }

  compare(el1, el2) {
    const valueEl1 = el1[this.key] || 0;
    const valueEl2 = el2[this.key] || 0;

    if (this.direction === "asc") {
      return valueEl1 - valueEl2;
    } else {
      return valueEl2 - valueEl1;
    }
  }
}

runTests("Comparator", [
  {
    name: "Teste 1: Comparação ascendente com valores numéricos",
    run: ({ eq }) => {
      const comp1 = new Comparator("value", "asc");
      const obj1a = { id: 1, value: 10 };
      const obj1b = { id: 2, value: 5 };
      eq(
        comp1.compare(obj1a, obj1b),
        5,
        "Comparator Teste 1 falhou: Deveria retornar valor positivo quando primeiro elemento é maior em ordem ascendente",
      );
    },
  },
  {
    name: "Teste 1: Comparação descendente com valores numéricos",
    run: ({ eq }) => {
      const comp1 = new Comparator("value", "desc");
      const obj1a = { id: 1, value: 10 };
      const obj1b = { id: 2, value: 5 };
      eq(
        comp1.compare(obj1a, obj1b),
        -5,
        "Comparator Teste 1 falhou: Deveria retornar valor positivo quando primeiro elemento é maior em ordem ascendente",
      );
    },
  },
  {
    name: "Teste 1: Comparação descendente com valores numéricos",
    run: ({ eq }) => {
      const comp1 = new Comparator("value", "desc");
      const obj1a = { id: 1, value: 5 };
      const obj1b = { id: 2, value: 5 };
      eq(
        comp1.compare(obj1a, obj1b),
        0,
        "Comparator Teste 1 falhou: Deveria retornar valor positivo quando primeiro elemento é maior em ordem ascendente",
      );
    },
  },
]);

function firstByKeys(arr, keys, directions) {
  let matches = arr;

  for (let k = 0; k < keys.length; k++) {
    const comparator = new Comparator(keys[k], directions[k]);
    currMatches = [matches[0]];

    for (let j = 1; j < matches.length; j++) {
      const comp = comparator.compare(currMatches[0], arr[j]);

      if (comp > 0) {
        currMatches = [arr[j]];
      } else if (comp == 0) {
        currMatches.push(currMatches);
      }
    }

    matches = currMatches;
    if (matches.length === 1) break;
  }

  return matches[0];
}

runTests("firstByKeys", [
  {
    name: "Teste 1: Funcionalidade básica com uma chave",
    run: ({ eq }) => {
      const keysTest1 = [
        { id: 1, value: 10, priority: 1 },
        { id: 2, value: 5, priority: 2 },
        { id: 3, value: 15, priority: 3 },
      ];
      const result1 = firstByKeys(keysTest1, ["value"], ["asc"]);
      eq(
        result1?.id,
        2,
        "FirstByKeys Teste 1 falhou: Deveria retornar o objeto com menor valor (id: 2)",
      );
    },
  },
  {
    name: "Teste 2: Funcionalidade básica com duas chaves (primeira chave resolve)",
    run: ({ eq }) => {
      const keysTest2 = [
        { id: 1, value: 10, priority: 1 },
        { id: 2, value: 5, priority: 2 },
        { id: 3, value: 5, priority: 3 },
      ];
      const result2 = firstByKeys(
        keysTest2,
        ["value", "priority"],
        ["asc", "asc"],
      );
      eq(
        result2?.id,
        2,
        "FirstByKeys Teste 2 falhou: Deveria retornar o objeto com menor valor e menor prioridade (id: 2)",
      );
    },
  },
  {
    name: "Teste 3: Funcionalidade com direções diferentes",
    run: ({ eq }) => {
      const keysTest3 = [
        { id: 1, value: 10, priority: 1 },
        { id: 2, value: 10, priority: 2 },
        { id: 3, value: 10, priority: 3 },
      ];
      const result3 = firstByKeys(
        keysTest3,
        ["value", "priority"],
        ["asc", "desc"],
      );
      eq(
        result3?.id,
        3,
        "FirstByKeys Teste 3 falhou: Deveria retornar o objeto com maior prioridade quando valores são iguais (id: 3)",
      );
    },
  },
  {
    name: "Teste 4: Array com propriedades ausentes",
    run: ({ eq }) => {
      const keysTest4 = [
        { id: 1, value: 10 },
        { id: 2, value: 10, priority: 2 },
        { id: 3, value: 10, priority: 3 },
      ];
      const result4 = firstByKeys(
        keysTest4,
        ["value", "priority"],
        ["asc", "asc"],
      );
      eq(
        result4?.id,
        1,
        "FirstByKeys Teste 4 falhou: Deveria retornar o objeto sem priority (usa 0 como padrão)",
      );
    },
  },
  {
    name: "Teste 5: Múltiplas chaves com valores negativos",
    run: ({ eq }) => {
      const keysTest5 = [
        { id: 1, value: -5, priority: -1 },
        { id: 2, value: -5, priority: -2 },
        { id: 3, value: -10, priority: -3 },
      ];
      const result5 = firstByKeys(
        keysTest5,
        ["value", "priority"],
        ["asc", "desc"],
      );
      eq(
        result5?.id,
        3,
        "FirstByKeys Teste 5 falhou: Deveria retornar o objeto com menor valor e maior prioridade (id: 3)",
      );
    },
  },
]);
