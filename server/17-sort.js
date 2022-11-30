const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort())

const numbers = [1, 30, 4, 21, 100000];
console.log('Print peso en ASCII :', numbers.sort())
console.log('Print menor a mayor :', numbers.sort((a, b) => a - b))
console.log('Print mayor a menor :', numbers.sort((a, b) => b - a))

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
console.log('Orden peso ASCII : ', words.sort())
console.log('Orden alfabetico : ', words.sort((a, b) => a.localeCompare(b)))

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
console.log('Orden peso ASCII : ', orders.sort())
console.log('Orden de menor a mayor : ', orders.sort((a, b) => a.total - b.total))
console.log('Orden de mayor a menor : ', orders.sort((a, b) => b.total - a.total))


const array = [{age: 1}, {age:2}]; 
const rta = array.map(item => {   
  item.name = 'My name';
  return item; 
})
console.log(rta)

const test = [1,2,3,4,5]
const rta4 = test.every(item => item === 2)
console.log(rta4)

const array2 = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta7 = array.flat();
console.log(rta7)