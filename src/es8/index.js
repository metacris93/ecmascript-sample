const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
};
// devuelve una matriz
const entries = Object.entries(data);
console.log(entries);
console.log('longitud: ' + entries.length);

const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};
const values = Object.values(data2);
console.log(values);

const data3 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};
const keys = Object.keys(data3);
console.log(keys);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padStart(9, 'hi'));
console.log(string.padStart(10, 'hi'));

console.log(string.padEnd(12, '-----'));
console.log('food'.padEnd(12, '   -----'));

const obj = {
    name: 'oscar',
}
