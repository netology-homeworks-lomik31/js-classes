import { Character } from './Character';

export class Magician extends Character {
    constructor(name, health = 100, level = 1) {
        super(name, "Magician", health, level, 10, 40);
    }
}