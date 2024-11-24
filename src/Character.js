export class Character {
    constructor(name, type, health = 100, level = 1, attack, defense) {

        if (typeof name !== "string" || name.length < 2 || name.length > 10) {
            throw new Error("Name must be a string with 2 to 10 characters");
        }

        let allowedTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

        if (!allowedTypes.includes(type)) {
            throw new Error("Invalid character type");
        }

        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defense = defense;
    }

    levelUp()
    {
        if (this.health === 0) {
            throw new Error("You can't level up a dead character");
        }
        this.level += 1;
        this.health = 100;
        this.attack *= 1.2;
        this.defense *= 1.2;
    }

    damage(points)
    {
        if (this.health <= 0) {
            throw new Error("You can't damage a dead character");
        }
        this.health -= points * (1 - this.defense / 100);
    }
}