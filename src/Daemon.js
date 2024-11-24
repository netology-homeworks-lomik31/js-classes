import { Character } from './Character';

export class Daemon extends Character {
    constructor(name, health = 100, level = 1) {
        super(name, "Daemon", health, level, 40, 10);
    }
}