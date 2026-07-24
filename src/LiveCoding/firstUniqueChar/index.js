const assert = require("assert");

// Implemente uma função que retorna o índice (começando em 1) do
// primeiro caractere que aparece somente uma vez na string. Caso esse
// caractere não exista, retorne -1
function getFirstUniqueCharacter(s) {
  const freqLetter = new Map();

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const currValue = freqLetter.get(letter) || [];

    freqLetter.set(letter, [...currValue, i]);
  }

  let minorIndex = Infinity;
  for (let indexes of freqLetter.values()) {
    if (indexes.length > 1) {
      continue;
    }

    minorIndex = Math.min(minorIndex, indexes[0]);
  }

  return Number.isFinite(minorIndex) ? minorIndex + 1 : -1;
}

// function getFirstUniqueCharacter(s) {
//   const letterStats = {};

//   for (let i = 0; i < s.length; i++) {
//     letterStats[s[i]] = {
//       count: (letterStats[s[i]]?.count || 0) + 1,
//       firstOccur: letterStats[s[i]]?.firstOccur || i,
//     };
//   }

//   let index = 1;
//   for (let [letter, stats] of Object.entries(letterStats)) {
//     if (stats.count === 1) {
//       return stats.firstOccur + 1;
//     }
//     index++;
//   }

//   return -1;
// }

assert.equal(getFirstUniqueCharacter("statistics"), 3); // 'a'
assert.equal(getFirstUniqueCharacter("hackthegame"), 3); // 'c'
assert.equal(getFirstUniqueCharacter("bizao"), 1); // 'b'
assert.equal(getFirstUniqueCharacter("banana"), 1); // 'a'
assert.equal(getFirstUniqueCharacter("nananananananana"), -1); // não existe
assert.equal(getFirstUniqueCharacter("ananab"), 6); // 'b'
console.log("Rodou liso!");
