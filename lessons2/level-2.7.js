/*
Задание #1
Дана некоторая строка: 'a bc def ghij'.
Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. 
В нашем случае должно получится следующее:
'A BC DEF ghij'.
*/

const str = 'a bc def ghij';
const newStr = str.split(" ");
for(let i = 0; i < newStr.length; i++) {
    if(newStr[i].length <= 3) {
        newStr[i] = newStr[i].toUpperCase();
    }
}
console.log(`Из строки '${str}' получилось: ${newStr.join(" ")}`);

/*
Задание #2
Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
*/

const str2 = "a";
if(str2 == str2.toUpperCase()) {
    console.log(`Символ '${str2}' в верхнем регистре`);
} else {
    console.log(`Символ '${str2}' в нижнем регистре`);
}

/*
Задание #3
Дано некоторое число, например, такое: 123789.
Удалите из этого числа все нечетные цифры. 
В нашем случае получится такой результат:
28.
*/

let num = 123789;
let newNum = "";
for(let i = 0; i < String(num).length; i++) {
    if(Number(String(num)[i]) % 2 == 0) {
        newNum += Number(String(num)[i]);
    }
}
console.log(`Из числа '${num}' получилось: ${newNum}`);