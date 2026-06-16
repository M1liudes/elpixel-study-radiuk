export class Hero {
    _name = '';
    _maxHealth;
    health;
    level;
    constructor(name, health, level) {
        this.name = name;
        this.health = health;
        this._maxHealth = health;
        this.level = level;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            console.log(`Герой: ${this.name}\nОтправляеться на базу!`);
        }
        else {
            console.log(`Герой: ${this.name}\nПолучено урона: ${amount} хп; \nЗдоровье: ${this.health} хп.`);
        }
    }
    heal(amount) {
        this.health += amount;
        if (this.health >= this._maxHealth) {
            this.health = this._maxHealth;
            console.log(`Герой: ${this.name}\nЗдоровье: ${this._maxHealth} фулл хп!`);
        }
        else {
            console.log(`Герой: ${this.name}\nИсцелил: ${amount} хп; \nЗдоровье: ${this.health} хп.`);
        }
    }
    levelUp() {
        this.level += 1;
        this.health = this._maxHealth;
        console.log(`Герой: ${this.name}\nПовысил уровень: ${this.level}, здоровье востановилось; \nЗдоровье: ${this.health} хп.`);
    }
}
//# sourceMappingURL=hero.js.map