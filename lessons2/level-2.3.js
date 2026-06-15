/*
Задание #1
Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
*/

const str1 = "Hello";
const str2 = "octavius";
if (str1.slice(-1) == str2[0]) {
    console.log(`Буквы слов '${str1}' и '${str2}' совпали`);
} else {
    console.log(`Буквы слов '${str1}' и '${str2}' не совпали`);
}

/*
Задание #2
Дана некоторая строка. Найдите позицию третьего нуля в строке.
*/

const str3 = "aaa0dddd0gggg0cccc0";
let count = 0;
let indexNull = 0;
for(let i = 0; i < str3.length; i++) {
    if (str3[i] == "0") {
        count++;
    }
    if (count == 3) {
        break;
    }
    indexNull++;
}
console.log(`Индекс третьего нуля: ${indexNull}`);

/*
Задание #3
Даны числа, разделенные запятыми: '12,34,56'. Найдите сумму этих чисел.
*/

const str4 = '12,34,56';
const newStr4 = str4.split(",");
for(let num of newStr4) {
    console.log(`Сумма чисел: ${Number(num[0]) + Number(num[1])}`);
}

/*
Задание #4
Дана дата в следующем формате: '2025-12-31'. 
Преобразуйте эту дату в следующий объект: 
{
	year: '2025',
	month: '12',
	day: '31',
}
*/

const data = '2025-12-31';
const pattern = ["year", "month", "day"];
const newData = data.split("-");
let obj = {};
for(let i = 0; i < 3; i++) {
    obj[pattern[i]] = newData[i];
}
console.log(obj);