/*
Задание #1
Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
*/

const str = "asfsfd4dgdg4fgfdh4";
let indexFirstNum = 0;
for(let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) == false) {
        indexFirstNum = i;
        break;
    }
}
console.log(`Позиция первой цифры в строке '${str}': ${indexFirstNum}`);

/*
Задание #2
Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
*/

let obj = {};
const patternKey = ["name", "email", "age"];
const patternValue = ["vlad", "123@gmail.com", "20"];
for(let i = 0; i < 3; i++) {
    obj[patternKey[i]] = patternValue[i];
}
console.log(obj);

/*
Задание #3
Дано число. Выведите в консоль количество четных цифр в этом числе.
*/

const num = 12345;
let count = 0;
for(let i = 0; i < String(num).length; i++) {
    if (Number(String(num)[i]) % 2 == 0) {
        count++;
    }    
}
console.log(`Количество четных цифр: ${count}`);

/*
Задание #4
Дана некоторая строка: 'abcde'. 
Переведите в верхний регистр все нечетные буквы этой строки. 
В нашем случае должно получится следующее:
'AbCdE'
*/

const str1 = 'abcde';
let newStr1 =  "";
for(let i = 0; i < str1.length; i++) {
    if (i % 2 == 0) {
        newStr1 += str1[i].toUpperCase();
    } else {
        newStr1 += str1[i];
    }
}
console.log(`Из строки '${str1}' полустлось: ${newStr1}`);

/*
Задание #5
Дана некоторая строка со словами: 'aaa bbb ccc'.
Сделайте заглавным первый символ каждого слова в этой строке. 
В нашем случае должно получится следующее:
'Aaa Bbb Ccc'
*/

const str2 = 'aaa bbb ccc';
let newNewStr2 = "";
for(let i = 0; i < str2.length; i++) {
    if (i == 0) {
        newNewStr2 += str2[i].toUpperCase();
    } else {
        if (str2[i - 1] == " ") {
            newNewStr2 += str2[i].toUpperCase();
        } else {
            newNewStr2 += str2[i];
        }
    }
}
console.log(`Из строки со словами '${str2}' получилось: ${newNewStr2}`);