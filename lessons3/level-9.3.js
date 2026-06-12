/*
Задание #1
Дан массив со словами. Получите из этого массива случайное слово, начинающееся на заданную букву.
*/

const funcTask1 = (wordsArray, letter) => {
    const searchLetter = letter.toLowerCase();
    const filteredWords = wordsArray.filter(word => 
        word.toLowerCase().startsWith(searchLetter)
    );
    if (filteredWords.length === 0) return null;
    return filteredWords[Math.floor(Math.random() * filteredWords.length)];
};
const words = ['Банан', 'Арбуз', 'Автобус', 'Дерево', 'Абрикос', 'Вишня'];
console.log(funcTask1(words, 'а'));

/*
Задание #2
Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки. Найдите все даты с 4-мя двойками в текущем столетии.
*/

const funcTask2 = () => {
    let currentDate = new Date(2000, 0, 1);
    const endDate = new Date(2099, 11, 31);
    const resultDates = [];

    while (currentDate <= endDate) {
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const dateString = `${day}.${month}.${year}`;

        const twosCount = dateString.split('2').length - 1;
        if (twosCount === 4) {
            resultDates.push(dateString);
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return resultDates;
};
const datesList = funcTask2();
console.log(`Найдено дат: ${datesList.length}`);

/*
Задание #3
Дан массив с точками:
[
	[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]
]
Отрисуйте эти точки на графике.
*/

const points = [
    [1, 2], [2, 4], [3, 8], [4, 16], [5, 32]
];

const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

const scaleX = 50;
const scaleY = 10;
const padding = 40;

ctx.beginPath();
points.forEach((point, index) => {
    // Рассчитываем координаты на холсте
    const x = padding + point[0] * scaleX;
    const y = canvas.height - padding - (point[1] * scaleY);
    if (index === 0) {
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
    }
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
});
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();