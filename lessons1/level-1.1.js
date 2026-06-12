/*
Задание #1
Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
*/

const number1 = 5;
if (number1 > 0) {
    console.log(`Число ${number1} не отритательное число!`);
} else {
    console.log(`Число ${number1} отритательное число!`);
}

/*
Задание #2
Дана строка. Выведите в консоль длину этой строки.
*/

const string1 = "Hello world!";
console.log(`Длина строки "${string1}": ${string1.length}`);

/*
Задание #3
Дана строка. Выведите в консоль последний символ строки.
*/

const string2 = "Hello";
console.log(`Последний символ строки "${string2}": ${string2[string2.length - 1]}`);

/*
Задание #4
Дано число. Проверьте, четное оно или нет.
*/

const number2 = 4;
if (number2 % 2 == 0) {
    console.log(`Число ${number2} четное!`);
} else {
    console.log(`Число ${number2} не четное!`);
}

/*
Задание #5
Даны два слова. Проверьте, что первые буквы этих слов совпадают.
*/

const word1 = "Hello"
const word2 = "world!"

if (word1[0] == word2[0]) {
    console.log(`Первые буквы слов "${word1}", "${word2}" совпали!`);
} else {
    console.log(`Первые буквы слов "${word1}", "${word2}" не совпали!`);
}