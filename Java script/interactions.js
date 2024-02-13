"use strict"

let kratosLevel = 50;
let kratosHealth = 100;
let kratosRageMeter = 75;
let kratosStrength = 95;

let leviathanAxeLevel = 3;
let leviathanAxeDamage = 120;
let leviathanAxeMagic = "Frost";

let currentLocation = "Midgard";
let enemyCount = 15;
let puzzlesSolved = 8;

let playerGold = 500;

class Character {
  constructor(name, level, health, rageMeter, strength) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.rageMeter = rageMeter;
    this.strength = strength;
  }

  attack(target) {
    console.log(`${this.name} attacks ${target.name} with strength ${this.strength}!`);
   
  }

  receiveDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} received ${damage} damage. Current health: ${this.health}`);
  }
}

class Weapon {
  constructor(name, level, damage, magic) {
    this.name = name;
    this.level = level;
    this.damage = damage;
    this.magic = magic;
  }

  upgrade() {
    this.level++;
    console.log(`${this.name} upgraded to level ${this.level}!`);
  }
}

function exploreLocation(location) {
  console.log(`Exploring ${location}...`);
  console.log(`Found ${enemyCount} enemies and ${puzzlesSolved} solved puzzles.`);
}

function earnGold(amount) {
  playerGold += amount;
  console.log(`Earned ${amount} gold. Total gold: ${playerGold}`);
}

console.log("Welcome to God of War: Ragnarok!");
console.log("Get ready for an epic journey!");

let kratos = new Character("Kratos", kratosLevel, kratosHealth, kratosRageMeter, kratosStrength);
let leviathanAxe = new Weapon("Leviathan Axe", leviathanAxeLevel, leviathanAxeDamage, leviathanAxeMagic);

kratos.attack(leviathanAxe);
leviathanAxe.upgrade();

exploreLocation(currentLocation);
earnGold(200);

console.log("Game over!");
