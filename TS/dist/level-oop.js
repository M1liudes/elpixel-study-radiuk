"use strict";
/*
Задание #1-2
Объявите класс Employee.
Создайте два объекта класса Employee.
*/
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeTask1 {
}
const user1Task1 = new EmployeeTask1();
const user2Task2 = new EmployeeTask1();
/*
Задание #3
Создайте класс Student со свойствами name и age.
*/
class StudentTask3 {
    name = 'vlad';
    age = 20;
}
let user3Task3 = new StudentTask3();
console.log(user3Task3);
user3Task3.age = 21;
console.log(user3Task3);
/*
Задание #4
Создайте класс Student со свойствами name и age.
Добавьте методы для получения и изменения этих свойств.
*/
class StudentTask4 {
    name = '';
    age = 0;
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
/*
Задание #5
Создайте класс Employee, в конструктор которого передайте имя, фамилию, возраст и зарплату работника.
*/
class EmployeeTask5 {
    name;
    femaly;
    age;
    salary;
    constructor(name, femaly, age, salary) {
        this.name = name;
        this.femaly = femaly;
        this.age = age;
        this.salary = salary;
    }
}
const user5Task5 = new EmployeeTask5('ulad', 'radziuk', 20, 1000);
console.log(user5Task5);
/*
Задание #6
Создайте класс Employee, который наследует от класса User.
*/
class UserTask6 {
}
class EmployeeTask6 extends UserTask6 {
}
/*
Задание #7
Сделайте класс User, который будет содержать публичные свойства с именем и годом рождения пользователя.
Сделайте публичный метод getAge, который будет получать возраст пользователя по году его рождения.
*/
class UserTask7 {
    name;
    yearBirth;
    constructor(name, yearBirth) {
        this.name = name;
        this.yearBirth = yearBirth;
    }
    getAge() {
        return 2026 - this.yearBirth;
    }
}
const userTask7 = new UserTask7('vlad', 2005);
console.log(userTask7.getAge());
/*
Задание 8-9-10
Сделайте класс User, содержащий приватные свойства с именем и возрастом.
Пусть их начальные значения задаются через конструктор.
В вашем классе User сделайте публичные методы getName и getAge,
позволяющие получить значения соответствующих приватных свойств.
В вашем классе User сделайте публичные методы setName и setAge,
позволяющие изменить значения соответствующих приватных свойств.
*/
class UserTask8 {
    name;
    age;
    constructor(name = 'vlad', age = 20) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(value) {
        this.name = value;
    }
    setAge(value) {
        this.age = value;
    }
}
const userTask8 = new UserTask8();
console.log(userTask8);
userTask8.setName('Igor');
userTask8.setAge(30);
console.log(userTask8);
/*
Задание #11
Дан следующий класс:
class User {
    protected name: string;
    protected surn: string;
    
    constructor(name: string, surn: string) {
        this.name = name;
        this.surn = surn;
    }
}
Унаследуйте от этого класса класс Employee, который добавит защищенное свойство salary,
а также геттеры всех свойств, как своих, так и унаследованных.
*/
class UserTask11 {
    name;
    surn;
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }
}
class EmployeeTask11 extends UserTask11 {
    salary;
    constructor(name, surn, salary) {
        super(name, surn);
        this.salary = salary;
    }
    ;
    getName() {
        return this.name;
    }
    ;
    getSurn() {
        return this.surn;
    }
    getSalary() {
        return this.salary;
    }
}
/*
Задание #12
Задайте классу User свойство age, доступное только для чтения.
Создайте объект данного класса и выведите его возраст на экран.
*/
class UserTask12 {
    age = 20;
}
const userTask12 = new UserTask12();
console.log(userTask12.age);
/*
Задание #13-14
Сделайте класс User, содержащий приватные свойства с именем и возрастом.
Сделайте аксессоры этих свойств.
Модифицируйте сеттер возраста так, чтобы можно было задать возраст от 0 до 120.
Если же будет указано иное значение, должно выбрасываться исключение.
*/
class UserTask13 {
    _name = '';
    _age = 0;
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set name(value) {
        this._name = value;
    }
    set age(value) {
        if ((value >= 0) && (value <= 120)) {
            this._age = value;
        }
        else {
            throw new Error('Возраст от 0 до 120!');
        }
    }
}
const userTask13 = new UserTask13();
userTask13.name = 'vlad';
userTask13.age = 120;
//userTask13.age = 121;
console.log(userTask13);
/*
Задание #14
В класс Student добавьте статическое свойство specialty.
Выведите данное свойство без объявления объекта.
*/
class StudentTask14 {
    name = 'vlad';
    static specialty = 'ПРО-31';
}
console.log(StudentTask14.name);
console.log(StudentTask14.specialty);
/*
Задание #15
В класс Calc добавьте методы, которые будут находить сумму квадратов и сумму кубов элементов массивов.
*/
class CalcTask15 {
    static summCvadrat(arr) {
        return arr.reduce((sum, num2) => sum + num2 ** 2);
    }
    static summCube(arr) {
        return arr.reduce((sum, num) => sum + num ** 3);
    }
}
console.log(CalcTask15.summCvadrat([1, 2, 3, 4, 5]));
console.log(CalcTask15.summCube([1, 2, 3, 4, 5]));
/*
Задание #16-17-18-19-20
Создайте абстрактный класс Figure, представляющий собой геометрическую фигуру.
Пусть в нем будут свойства для периметра и площади.
Сделайте класс Square, наследующий от класса Figure.
Сделайте класс Rectangle, наследующий от класса Figure.
В абстрактном классе Figure сделайте абстрактные методы для получения площади и периметра.
В классах-потомках Square и Rectangle напишите реализацию этих методов.
*/
class FigureTask16 {
    perimetr;
    plochad;
    constructor(perimetr, plochad) {
        this.perimetr = perimetr;
        this.plochad = plochad;
    }
}
class SquareTask17 extends FigureTask16 {
    name;
    constructor(name, perimetr, plochad) {
        super(perimetr, plochad);
        this.name = name;
    }
    searhPerimetr() {
        return this.perimetr;
    }
    searhPlochad() {
        return this.plochad;
    }
}
class RectangleTask18 extends FigureTask16 {
    name;
    constructor(name, perimetr, plochad) {
        super(perimetr, plochad);
        this.name = name;
    }
    searhPerimetr() {
        return this.perimetr;
    }
    searhPlochad() {
        return this.plochad;
    }
}
const figure1Task16 = new SquareTask17('Круг', 10, 20);
const figure2Task16 = new RectangleTask18('Параллелограмм', 20, 40);
console.log(figure1Task16);
console.log(figure2Task16);
console.log(figure1Task16.searhPerimetr());
console.log(figure2Task16.searhPlochad());
//# sourceMappingURL=level-oop.js.map