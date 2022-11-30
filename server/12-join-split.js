const elements = ['Fire', 'Air', 'Water']

console.log( elements.join() );
// expected output "Fire,Air,Water"

console.log(elements.join(''));
// expected output "FireAirWater"

const elementSeparator = elements.join('-')
console.log(elementSeparator);
// expected output "Fire-Air-Water"

const urlFinal = elementSeparator.split(' ')
console.log(urlFinal);

console.log( elementSeparator.split(' ').join('-').toLocaleLowerCase());