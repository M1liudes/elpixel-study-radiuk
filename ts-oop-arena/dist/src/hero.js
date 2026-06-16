"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hero {
    _name = '';
    _health = 0;
    level;
    constructor(name, health = 100, level = 1) {
        this.name = name;
        this.health = health;
        this.level = level;
    }
    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
    set name(value) {
        this._name = value;
    }
    set health(value) {
        if (value > 100) {
            this._health = 100;
        }
        else {
            if (value < 0) {
                this._health = 0;
            }
            else {
                this._health = value;
            }
        }
    }
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            console.log(`Герой: ${this.name} \nОтправляеться на базу!`);
        }
        else {
            console.log(`Герой: ${this.name}\nПолучено урона: ${amount} хп; \nЗдоровье: ${this.health} хп.`);
        }
    }
    heal(amount) {
        this.health += amount;
        if (this.health >= 100) {
            this.health = 100;
            console.log(`Герой: ${this.name} \nЗдоровье: ${this.health} фулл хп!`);
        }
        else {
            console.log(`Герой: ${this.name}\n Исцелил: ${amount} хп; \nЗдоровье: ${this.health} хп.`);
        }
    }
    levelUp() {
        this.level += 1;
        this.health = 100;
        console.log(`Герой: ${this.name}\n Повысил уровень: ${this.level}, здоровье востановилось; \nЗдоровье: ${this.health} хп.`);
    }
}
//# sourceMappingURL=hero.js.map