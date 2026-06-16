/*
Задание #1
Дана строка: "abcde". Получите массив букв этой строки.
*/

const str = "abcde";
let masStr = [];
for(let i = 0; i < str.length; i += 1) {
    masStr[i] = (str[i]);
}
console.log(masStr);

/*
Задание #2
Дано некоторое число: "12345". Получите массив цифр этого числа.
*/

const num = 12345;
let masNum = [];
for(let i = 0; i < String(num).length; i += 1) {
    masNum.push(String(num)[i]);
}
console.log(masNum);

/*
Задание #3
Дано некоторое число: "12345". Переверните его: "54321"
*/

const num2 = 12345;
let masNum2 = [];
for(let i = 0; i < String(num2).length; i += 1) {
    masNum2.push(String(num2)[i]);
}
console.log(masNum2.reverse());

/*
Задание #4
Дано некоторое число: "12345". Найдите сумму цифр этого числа.
*/

const num3 = 12345
let sumNum = 0;
for(let i = 0; i < String(num3).length; i += 1) {
    sumNum += Number(String(num3)[i]);
}
console.log(`Сумма цифр числа "12345": ${sumNum}`);