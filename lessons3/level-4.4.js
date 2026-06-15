/*
Задание #1
Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
*/

const funcTask1 = (num) => {
    let count = 0;
    for(let i = 1; i * i <= num; i++) {
        if(num % i === 0) {
            if (i * i === num) {
                count++;
            } else {
                count += 2;
            }
        }
    }
    return count;
}

const num1 = 100;
console.log(`Количество делителей в числе '${num1}': ${funcTask1(num1)}`);

/*
Задание #2
Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
*/

const funcTask2 = (date) => {
    let newDate = new Date(date);
    const arrSign = [
        {sign: "Водолей", startMonth: 0, startDay: 21, endMonth: 1, endDay: 20},
        {sign: "Рыбы", startMonth: 1, startDay: 21, endMonth: 2, endDay: 20},
        {sign: "Овен", startMonth: 2, startDay: 21, endMonth: 3, endDay: 21},
        {sign: "Телец", startMonth: 3, startDay: 22, endMonth: 4, endDay: 22},
        {sign: "Близнецы", startMonth: 4, startDay: 23, endMonth: 5, endDay: 23},
        {sign: "Рак", startMonth: 5, startDay: 24, endMonth: 6, endDay: 23},
        {sign: "Лев", startMonth: 6, startDay: 24, endMonth: 7, endDay: 23},
        {sign: "Дева", startMonth: 7, startDay: 24, endMonth: 8, endDay: 22},
        {sign: "Весы", startMonth: 8, startDay: 23, endMonth: 9, endDay: 21},
        {sign: "Скорпион", startMonth: 9, startDay: 22, endMonth: 10, endDay: 20},
        {sign: "Стрелец", startMonth: 10, startDay: 21, endMonth: 11, endDay: 20},
        {sign: "Козерог", startMonth: 11, startDay: 21, endMonth: 0, endDay: 20},
    ].find((value) => (
        ((value.startMonth === newDate.getMonth()) && (value.startDay <= newDate.getDate())) || 
        ((value.endMonth === newDate.getMonth()) && (value.endDay >= newDate.getDate()))
    )).sign;
    return arrSign;
}

const date = "2005-10-07";
console.log(`Знак зодиака даты '${date}': ${funcTask2(date)}`);

/*
Задание #3
Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
*/

const funcTask3 = (num) => {
    let arr = [];
    for(let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            if (i * i === num) {
                arr.push(i);
            } else {
                arr.push(i);
                arr.push(num / i);
            }
        }
    }
    return arr.sort((a, b) => a - b);
}

const num2 = 100;
console.log(funcTask3(num2));

/*
Задание #4
Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
*/

const funcTask4 = (num) => {
    for(let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const num3 = 9;
console.log(`Число: ${funcTask4(num3) ? "Простое": "Составное"}`);

/*
Задание #5
Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
*/

const funcTask5 = (num) => {return +String(num).split("").filter((value) => value % 2 !== 0).join("");}

const num4 = 12345;
console.log(`Число после удаление четных цифр: ${funcTask5(num4)}`);

/*
Задание #6
Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
*/

const funcTask6 = (n, minRange, maxRange) => {return Array.from({length: (n)}, (value) => (Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange));}

const n = 100
const min = 10;
const max = 100;
console.log(funcTask6(n, min, max));