const obj = {
    name: 'cristian',
    age: 26,
    country: 'EC',
};
const { name, ...all } = obj;
console.log(name, all);

const obj2 = {
    ...obj,
    country: 'EC',
};
console.log(obj2);
/*
promiseFunction()
    .then(res => console.log(res))
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizo'));
*/
// Expresiones Regulares
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);