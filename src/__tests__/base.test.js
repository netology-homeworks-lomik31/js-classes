import { Bowman } from '../Bowman';
import { Daemon } from '../Daemon';
import { Magician } from '../Magician';
import { Swordsman } from '../Swordsman';
import { Undead } from '../Undead';
import { Zombie } from '../Zombie';

let bowman = new Bowman('Bowman');
let daemon = new Daemon('Daemon');
let magician = new Magician('Magician');
let swordsman = new Swordsman('Swordsman');
let undead = new Undead('Undead');
let zombie = new Zombie('Zombie');

test('Bowman', () => {
  expect(bowman).toEqual({
    name: 'Bowman', level: 1, health: 100, type: 'Bowman', attack: 25, defense: 25,
  });
});

test('Daemon', () => {
    expect(daemon).toEqual({
        name: 'Daemon', level: 1, health: 100, type: 'Daemon', attack: 40, defense: 10,
    });
});

test('Magician', () => {
    expect(magician).toEqual({
        name: 'Magician', level: 1, health: 100, type: 'Magician', attack: 10, defense: 40,
    });
});

test('Swordsman', () => {
    expect(swordsman).toEqual({
        name: 'Swordsman', level: 1, health: 100, type: 'Swordsman', attack: 40, defense: 10,
    });
});

test('Undead', () => {
    expect(undead).toEqual({
        name: 'Undead', level: 1, health: 100, type: 'Undead', attack: 25, defense: 25,
    });
});

test('Zombie', () => {
    expect(zombie).toEqual({
        name: 'Zombie', level: 1, health: 100, type: 'Zombie', attack: 40, defense: 10,
    });
});

test('Bowman levelUp', () => {
    bowman.levelUp();
    console.log(bowman);
    expect(bowman).toEqual({
        name: 'Bowman', level: 2, health: 100, type: 'Bowman', attack: 30, defense: 30,
    });
});
