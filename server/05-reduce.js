const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);
console.log(totals)

const array = ['a', 'bb', 'ccc']; 
const rta2 = array.map(item => item.length);
console.log(rta2)