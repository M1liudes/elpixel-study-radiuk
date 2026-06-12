/*
Задание #1
Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
*/

const funcTask1 = (arr) => {return arr[Math.floor(Math.random() * arr.length)];}

const arr1 = [1, 2, 3, 4, 5];
console.log(funcTask1(arr1));

/*
Задание #2
Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
*/

const funcTask2 = (arr, n) => {
    return Array.from({length: n}, (value) => value = arr[Math.floor(Math.random() * arr.length)]);
}
const arr2 = [1, 2, 3, 4, 5, 1];
console.log(funcTask2(arr2, 2));

/*
Задание #3
Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, 
чтобы одинаковые элементы не возвращались два раза подряд.
*/

const genereteRandom = (arr) => {
    let element = null;

    return () => {
        let nexElement;
        do {
            nexElement = arr[Math.floor(Math.random() * arr.length)];
        } while(element === nexElement);
        element = nexElement;
        return nexElement;
    }
}
const arr3 = [1, 2, 3, 4, 5];
const funcTask3 = genereteRandom(arr3);
console.log(funcTask3());

/*
Задание #4
Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
*/

const isPrime = (num) => {
    if (num < 2) return false;
    for(let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
const funcTask4 = (minRange, maxRange) => {
    return Array.from({length: maxRange - minRange}, (_, index) => index + minRange).filter(num => isPrime(num));
}

const min = 1;
const max = 10;
console.log(funcTask4(min, max));

/*
Задание #5
Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.
*/

const funcTask5 = (...num) => {
    return num.reduce((a, b) => a + b);
}
console.log(funcTask5(1, 2, 3, 4, 5));

/*
Задание #6
Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, 
чтобы в массиве не было подряд двух одинаковых чисел.
*/

const funcTask6 = (n, min, max) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let nextNum;
        do {
            nextNum = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (nextNum === arr[arr.length - 1]);
        arr.push(nextNum);
    }
    return arr;
}
console.log(funcTask6(5, 1, 10));

/*
Задание #7
Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
*/

const funcTask7 = (n, min, max) => {
    let arr = [];
    while (arr.length < n) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }
    return arr;
}
console.log(funcTask7(5, 1, 10));