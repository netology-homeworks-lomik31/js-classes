import { Character } from './Character';

export class Zombie extends Character {
    constructor(name, health = 100, level = 1) {
        super(name, "Zombie", health, level, 40, 10);
    }
}