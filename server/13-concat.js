const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];

const concatMetod = elements.concat(otherElements);
console.log('Concat:', concatMetod);

console.log(elements)
console.log(otherElements)

const rtaSpritOperation = [...elements, ...otherElements]
console.log(rtaSpritOperation) 