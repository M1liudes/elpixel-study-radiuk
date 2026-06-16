/*
Задание #1
Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, 
в котором эти слова будут отсортированы в алфавитном порядке.
*/

const funcTask1 = (str) => {return str.split(" ").sort().join(" ")}

const str1 = "ccc bbb aaa";
console.log(`Из текста '${str1}' получилось: ${funcTask1(str1)}`); 

/*
Задание #2
Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
*/

const funcTask2 = (arr1, arr2) => {
    let arr = [];
    return arr.concat(arr1, arr2);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(funcTask2(arr1, arr2));

/*
Задание #3
Сделайте функцию, которая будет возвращать случайное число. 
Функция не должна возвращать одно и тоже число два раза подряд.
*/

const genereteRandom = () => {
    let num = null;
 
    return () => {
        let nexNum;
        do {
            nexNum = Math.floor(Math.random() * 100);
        } while (nexNum === num);
        num = nexNum;
        return nexNum;
    }
}
const funcTask3 = genereteRandom();
console.log(`Случайное число: ${funcTask3()}`);

/*
Задание #4
Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. 
Смотрите пример:
let arr = [1, 2, 3, 4, 5];
func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1
*/

const funcTask4 = (arr, element) => {
    return arr[(arr.indexOf(element) + 1) % arr.length];
}

let arr3 = [1, 2, 3, 4, 5];
console.log(`Элемент массива: ${funcTask4(arr3, 5)}`);