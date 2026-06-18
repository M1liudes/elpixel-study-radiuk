"use strict";
/*
Задание #1
Создайте интерфейс IMath со свойствами num1 и num2.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Задание #2
Реализуйте объект calc созданного выше интерфейса.
*/
const calcTask2 = {
    num1: 1,
    num2: 2
};
console.log(calcTask2);
const userTask3 = {
    ageProverka(age) {
        if (age < 18) {
            return 'Доступ запрещен!';
        }
        else {
            return 'Доступ разрешен!';
        }
    },
};
console.log(userTask3.ageProverka(17));
const calcTask4 = {
    num1: 1,
    num2: 2,
    getSum() {
        return this.num1 + this.num2;
    },
};
console.log(calcTask4.getSum());
const dateTask5 = {
    year: 2026,
    mounth: 6
};
console.log(dateTask5.day, dateTask5.year);
const userTask6 = {
    type: 'BYN',
    salary: 1000
};
userTask6.type = 'USD';
const funcTask7 = function (str1, str2) {
    return [str1, str2].join(' ');
};
console.log(funcTask7('aaa', 'bbb'));
const funcTask8 = function (num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
};
console.log(funcTask8(5));
const funcTask9 = function (str1) {
    return str1.split(' ');
};
console.log(funcTask9('aaa bbb ccc ddd fff'));
const arrayTask10 = [1, 2, 3, 4, 5];
console.log(arrayTask10);
const objectTask11 = { 1: 'a', 2: 'b', 3: 'c' };
console.log(objectTask11);
class MathTask12 {
    num1;
    num2;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    getDiv() {
        return this.num1 / this.num2;
    }
}
const calcTask12 = new MathTask12(4, 2);
console.log(calcTask12.getDiv());
class EmployeeTask14 {
    name;
    birthday;
    salary;
    language;
    constructor(name, birthday, salary, language) {
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
        this.language = language;
    }
}
const userTask14 = new EmployeeTask14('vlad', 7, 1000, 'russian');
console.log(userTask14);
//# sourceMappingURL=level-interface.js.map