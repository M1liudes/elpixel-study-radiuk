/*
Задание #1
Дана строка с буквами и цифрами. 
Проверьте, что в этой строке не более трех букв.
*/

const str = "123a123b123c";
let count = 0;
for(let i = 0; i < str.length; i++) {
    if(isNaN(str[i])) {
        count++;
    }
}
if(count > 3) {
    console.log("В строке больше 3 букв!");
} else {
    console.log("В строке 3 буквы!");
}

/*
Задание #2
Дано число. Получите первую четную цифру с конца этого числа.
*/

const num = 123456379;
for(let i = String(num).length; i >= 0; i--) {
    if (Number(String(num)[i]) % 2 == 0) {
        console.log(`Первая четная цифра с конца: ${String(num)[i]}`);
        break;
    }
}

/*
Задание #3
Дана некоторая строка: 'abcde abcde abcde'.
Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'
*/

const str2 = 'abcde abcde abcde';
let newStr2 = "";
for(let i = 0; i < str2.length; i++) {
    if(i == 0) {
        newStr2 += "!";
    } else {
        if(str2[i - 1] == " ") {
            newStr2 += "!";
        } else {
            newStr2 += str2[i];
        }
    }
}
console.log(`Из строки '${str2}' получилось: ${newStr2}`);

/*
Задание #4
Дан массив с числами: [1, 2, 3, 3, 4, 5].
Проверьте, что в этом массиве есть два одинаковых элемента подряд.
*/

const arr = [1, 2, 3, 3, 4, 5];
console.log(`Массив: ${arr}`);
for(let i = 0; i < arr.length; i++) {
    if(arr[i] == arr[i + 1]) {
        console.log(`Элемент '${arr[i]}' поторяеться 2 раза подряд!`);
    }
}