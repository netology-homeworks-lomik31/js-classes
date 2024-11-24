import { Character } from "./Character";

export class Bowman extends Character {
    constructor(name, health = 100, level = 1) {
        super(name, "Bowman", health, level, 25, 25);
    }
}
