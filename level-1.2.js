/*
Задание #1
Дано число. Выведите в консоль первую цифру этого числа.
*/

const number1 = 1234;
const firstNumber1 = String(number1)[0];
console.log(`Первая цифра числа ${number1}: ${firstNumber1}`);

/*
Задание #2
Дано число. Выведите в консоль последнюю цифру этого числа.
*/

const number2 = 1234;
const firstNumber2 = String(number2).slice(-1);
console.log(`Первая цифра числа ${number2}: ${firstNumber2}`);


/*
Задание #3
Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
*/

const num = 1234;
const firstNumString = String(num)[0];
const lastNumString = String(num).slice(-1);
const firstNum = Number(firstNumString); 
const lastNum = Number(lastNumString);
console.log(`Сумма первой и последней цифры числа ${num}: ${firstNum + lastNum}`);

/*
Задание #4
Дано число. Выведите количество цифр в этом числе.
*/

const numLenght = 1234567;
console.log(`Количество цифр в числе ${numLenght}: ${String(numLenght).length}`);

/*
Задание #5
Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
*/

const num1 = 123;
const num2 = 321;
if (String(num1)[0] == String(num2)[0]) {
    console.log(`Первые цифры чисел ${num1} и ${num2} совпали!`);
} else {
    console.log(`Первые цифры чисел ${num1} и ${num2} не совпали!`);
}