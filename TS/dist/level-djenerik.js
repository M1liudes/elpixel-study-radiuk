"use strict";
/*
Задание #1
Сделайте функцию, которая параметром принимает или два числа, или две строки.
Своим результатом функция должна возвращать сумму параметров.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function funcTask1(a, b) {
    return a + b;
}
console.log(funcTask1(1, 2));
console.log(funcTask1('Hello,', 'world!'));
/*
Задание #2
Напишите функцию для перебора и вывода всех элементов массива обобщенного типа в консоль.
*/
function funcTask2(arr) {
    arr.forEach((elem) => console.log(elem));
}
console.log(funcTask2([1, 2, 3, 4, 5]));
/*
Задание #3
На основе примера, рассмотренного в уроке, задайте функцию для нахождения длины числового массива.
*/
function funcTask3(data) {
    console.log(data.arr.length);
}
let myData = { arr: [1, 2, 3, 4, 5] };
funcTask3(myData);
//# sourceMappingURL=level-djenerik.js.map