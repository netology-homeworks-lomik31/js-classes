import { Character } from './Character';

export class Swordsman extends Character {
    constructor(name, health = 100, level = 1) {
        super(name, "Swordsman", health, level, 40, 10);
    }
}