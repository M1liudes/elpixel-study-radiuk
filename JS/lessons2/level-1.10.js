/*
Задание #1
Заполните массив случайными числами из промежутка от 1 до 100.
*/

const min = 1;
const max = 100;
let mass = [];
for(let i = 0; i < 5; i += 1) {
    mass[i] = (Math.floor(Math.random() * (max - min + 1)) + min);
}
console.log(mass);

/*
Задание #2
Дано некоторое число: 12345. Выведите в консоль все его символы с конца.
*/

const num = 12345;
let str = "";
for(let i = String(num).length - 1; i >= 0; i -= 1) {
    str += String(num)[i];
}
console.log(str);

/*
Задание #3
Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6].
По очереди выведите в консоль подмассивы из двух элементов нашего массива:
[1, 2]
[3, 4]
[5, 6]
*/

let arr = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < arr.length; i += 1) {
    if (i % 2 == 0) {
        console.log(arr.slice(i, i + 2));
    }
}

/*
Задание #4
Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив:
[1, 2, 3, 4, 5, 6]
*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));