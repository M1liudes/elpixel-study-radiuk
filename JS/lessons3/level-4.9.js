/*
Задание #1
Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
*/

const funcTask1 = () => {
    const today = new Date();
    let targetYear = today.getFullYear();
    let targetDate = new Date(targetYear, 1, 29);

    if (targetDate.getMonth() === 2 || targetDate <= today) {
        do {
            targetYear++;
            targetDate = new Date(targetYear, 1, 29);
        } while (targetDate.getMonth() === 2);
    }

    const diffMs = targetDate - today;
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
};
console.log(`Дней до ближайшего 29 февраля: ${funcTask1()}`);

/*
Задание #2
Сделайте функцию, которая будет возвращать дату следующей масленницы, 
которая празднуется в последнее воскресенье зимы.
*/

const funcTask2 = () => {
    const today = new Date();
    let year = today.getFullYear();

    const findLastSundayOfFeb = (y) => {
        let date = new Date(y, 2, 1); 
        while (date.getDay() !== 0) {
            date.setDate(date.getDate() - 1);
        }
        return date;
    };

    let targetDate = findLastSundayOfFeb(year);

    if (targetDate < today) {
        targetDate = findLastSundayOfFeb(year + 1);
    }
    return targetDate.toLocaleDateString('ru-RU');
};
console.log(`Дата следующей масленицы: ${funcTask2()}`);

/*
Задание #3
Сделайте функцию, которая будет возвращать случайный цвет.
*/

const funcTask3 = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    return '#' + randomNum.toString(16).padStart(6, '0');
};
console.log(`Случайный цвет: ${funcTask3()}`);

/*
Задание #4
Сделайте функцию, которая параметром будет принимать массив чисел и 
возвращать массив общих делителей всех чисел из переданного массива.
*/

const funcTask4 = (arr) => {
    if (arr.length === 0) return [];
    const minNum = Math.min(...arr);
    let divisors = [];

    for (let i = 1; i <= minNum; i++) {
        const newDivisors = arr.every(num => num % i === 0);
        if (newDivisors) {
            divisors.push(i);
        }
    }
    return divisors;
};

console.log(funcTask4([12, 18, 24]));

/*
Задание #5
Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и 
возвращать массив максимальных чисел в каждом подмассиве.
*/

const funcTask5 = (matrix) => {
    return matrix.map(subArr => Math.max(...subArr));
};

const data = [
    [1, 5, 2],
    [10, 3, 7],
    [4, 8, 99, 1]
];

console.log(funcTask5(data));