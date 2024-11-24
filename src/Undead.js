import { Character } from './Character';

export class Undead extends Character {
    constructor(name, health = 100, level = 1) {
        super(name, "Undead", health, level, 25, 25);
    }
}