/*
Задание #1
Создайте интерфейс IMath со свойствами num1 и num2.
*/

interface IMathTask1 {
    num1: number;
    num2: number;
}

/*
Задание #2
Реализуйте объект calc созданного выше интерфейса.
*/

const calcTask2: IMathTask1 = {
    num1: 1,
    num2: 2
};
console.log(calcTask2);

/*
Задание #3
Для интерфейса IUser, реализуйте метод для проверки возраста. 
Если возраст юзера меньше 18, пусть отобразится сообщение о том, что доступ запрещен.
*/

interface IUserTask3 {
    ageProverka(age: number): string;
}

const userTask3: IUserTask3 = {
    ageProverka(age: number): string {
        if (age < 18) {
            return 'Доступ запрещен!';
        } else {
            return 'Доступ разрешен!';
        }
    },
}
console.log(userTask3.ageProverka(17));

/*
Задание #4
Создайте интерфейс IMath со свойствами num1 и num2,
а также методом getSum, который будет суммировать оба числа.
*/

interface IMathTask4 {
    num1: number;
    num2: number;

    getSum(): number;
}

const calcTask4: IMathTask4 = {
    num1: 1,
    num2: 2,
    getSum(): number {
        return this.num1 + this.num2; 
    },
}
console.log(calcTask4.getSum());

/*
Задание #5
Сделайте интерфейс IDate для объекта, хранящего дату: год, месяц и день. 
Пусть все свойства объекта будут необязательными.
*/

interface IDateTask5 {
    year?: number;
    mounth?: number;
    day?: number;
}

const dateTask5: IDateTask5 = {
    year: 2026,
    mounth: 6
}
console.log(dateTask5.day, dateTask5.year);

/*
Задание #6
Создайте интерфейс IUser, в котором свойство salary будет доступным только для чтения.
*/

interface IUserTask6 {
    type: string;
    readonly salary: number;
}

const userTask6: IUserTask6 = {
    type: 'BYN',
    salary: 1000
}
userTask6.type = 'USD';
//userTask6.salary = 1200;

/*
Задание #7
Создайте интерфейс для функции, 
параметром принимающей две строки и возвращающей эти строки, сложенные через пробел.
*/

interface IFuncTask7 {
    (str1: string, str2: string): string;
}
const funcTask7: IFuncTask7 = function (str1: string, str2: string): string {
    return [str1, str2].join(' ');
}
console.log(funcTask7('aaa', 'bbb'));

/*
Задание #8
Создайте интерфейс для функции, 
параметром принимающей число и возвращающей массив делителей этого числа.
*/

interface IFuncTask8 {
    (num: number): number[];
}
const funcTask8: IFuncTask8 = function(num: number): number[] {
    let arr: number[] = [];
    for(let i: number = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(funcTask8(5));

/*
Задание #9
Создайте интерфейс для функции, параметром принимающей строку 
и возвращающей массив слов из этой строки.
*/

interface IFuncTask9 {
    (str1: string): string[];
}
const funcTask9: IFuncTask9 = function(str1: string): string[] {
    return str1.split(' ');
}
console.log(funcTask9('aaa bbb ccc ddd fff'));

/*
Задание #10
Создайте интерфейс, описывающий массив со значениями в виде чисел.
*/

interface IArrayTask10 {
    [index: number]: number;
}
const arrayTask10: IArrayTask10 = [1, 2, 3, 4, 5];
console.log(arrayTask10);

/*
Задание #11
Создайте интерфейс, описывающий объект с ключами в виде чисел, а значениями в виде строк.
*/

interface IObjectTask11 {
    [index: string]: string;
}
const objectTask11: IObjectTask11 = {1: 'a', 2: 'b', 3: 'c'};
console.log(objectTask11);

/*
Задание 11-12
Создайте интерфейс IMath со свойствами num1 и num2 и методом getDiv, 
который будет делить первое число на второе.
Сделайте класс Math, который реализует интерфейс IMath.
*/
interface IMathTask11 {
    num1: number;
    num2: number;
    getDiv(): number;
}

class MathTask12 implements IMathTask11 {
    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    getDiv(): number {
        return this.num1 / this.num2;
    }
}
const calcTask12: MathTask12 = new MathTask12(4, 2);
console.log(calcTask12.getDiv());

/*
Задание 13-14
Создайте интерфейс IProgrammer со свойствами salary и language. 
Пусть данный интерфейс наследует IUser со свойствами name, birthday.
Сделайте класс Employee, который реализует IProgrammer.
*/

interface IUserTask13 {
    name: string;
    birthday: number;
}

interface IProgrammerTask13 extends IUserTask13 {
    salary: number;
    language: string;
}

class EmployeeTask14 implements IProgrammerTask13 {
    name: string;
    birthday: number;
    salary: number;
    language: string;
    
    constructor(name:string, birthday:number, salary: number, language: string) {
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
        this.language = language;
    }
}

const userTask14: EmployeeTask14 = new EmployeeTask14('vlad', 7, 1000, 'russian');
console.log(userTask14);